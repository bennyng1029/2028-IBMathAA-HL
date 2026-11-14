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

    // ── t4-2-q005 · mcq · exam · SL · SL 4.8 · 2 marks
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
        // EN: If events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are independent and <span class=\"chem\">P(B) &gt; 0</span>, then <span class=\"chem\">P(A | B) = P(A)</span>.
        "두 사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 독립이고 <span class=\"chem\">P(B) &gt; 0</span>이면 <span class=\"chem\">P(A | B) = P(A)</span>이다.",
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

    // ── t4-2-q015 · mcq · exam · AHL · AHL 4.14 · 2 marks
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
      // EN: <p>A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = 3x^2</span> for <span class=\"chem\">0 ≤ x ≤ 1</span>, and <span class=\"chem\">f(x) = 0</span> otherwise. Find the <strong>exact</strong> value of <span class=\"chem\">Var(X)</span> (an exact fraction such as <span class=\"mono\">5/48</span> can be typed directly).</p>
      stem: "<p>연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수가 <span class=\"chem\">0 ≤ x ≤ 1</span>에서 <span class=\"chem\">f(x) = 3x^2</span>이고 그 외에서는 <span class=\"chem\">f(x) = 0</span>이에요. <span class=\"chem\">Var(X)</span>의 <strong>정확한</strong> 값을 구하시오 (Find). (<span class=\"mono\">5/48</span> 같은 정확한 분수를 그대로 입력할 수 있어요.)</p>",
      hints: [
        // EN: Decode: for a continuous random variable, <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>, and each expectation is an integral over the domain <span class=\"chem\">0 ≤ x ≤ 1</span>: <span class=\"chem\">E(X) = ∫ x f(x) dx</span> and <span class=\"chem\">E(X^2) = ∫ x^2 f(x) dx</span>. \"Exact\" means you keep fractions throughout.
        "해석: 연속확률변수에서는 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>이고, 각 기댓값은 정의역 <span class=\"chem\">0 ≤ x ≤ 1</span>에서의 적분이에요: <span class=\"chem\">E(X) = ∫ x f(x) dx</span>, <span class=\"chem\">E(X^2) = ∫ x^2 f(x) dx</span>. \"정확한\"(exact) 값이므로 끝까지 분수로 계산하세요.",
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
      hints: [
        // EN: Decode: (a) is \"Show that\", so start from the property of every pdf, <span class=\"chem\">∫_0^3 f(x) dx = 1</span>, and work forwards to <span class=\"chem\">k = 2/9</span> without using it. In (b) the condition <span class=\"chem\">X &lt; 2</span> becomes the denominator: <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.
        "해석: (a)는 \"보이시오\"(Show that)이므로 모든 확률밀도함수가 만족하는 성질 <span class=\"chem\">∫_0^3 f(x) dx = 1</span>에서 출발해, <span class=\"chem\">k = 2/9</span>를 미리 쓰지 않고 그 값까지 이끌어 내세요. (b)에서는 조건 <span class=\"chem\">X &lt; 2</span>가 분모가 돼요: <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.",
        // EN: Expand <span class=\"chem\">kx(3 - x) = k(3x - x^2)</span> before integrating; an antiderivative is <span class=\"chem\">k(3x^2/2 - x^3/3)</span>.
        "적분하기 전에 <span class=\"chem\">kx(3 - x) = k(3x - x^2)</span>로 전개하세요. 부정적분 하나는 <span class=\"chem\">k(3x^2/2 - x^3/3)</span>이에요.",
        // EN: In (b), evaluate <span class=\"chem\">(2/9)[3x^2/2 - x^3/3]</span> from 1 to 2 for the numerator and from 0 to 2 for the denominator. The factor <span class=\"chem\">2/9</span> cancels in the ratio.
        "(b)에서는 <span class=\"chem\">(2/9)[3x^2/2 - x^3/3]</span>을 분자는 1부터 2까지, 분모는 0부터 2까지 계산하세요. 인수 <span class=\"chem\">2/9</span>는 비율에서 약분돼요.",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't4-2.q', {
  questions: {

    // ── t4-2-q020 · numeric · foundation · SL · SL 4.6 · 2 marks
    "t4-2-q020": {
      // EN: <p>The table shows the main after-school activity of <span class="chem">120</span> students in Years 11 and 12.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Robotics</th><th scope="col">Drama</th><th scope="col">None</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Year 11</th><td class="num">18</td><td class="num">12</td><td class="num">30</td><td class="num">60</td></tr><tr><th scope="row">Year 12</th><td class="num">14</td><td class="num">21</td><td class="num">25</td><td class="num">60</td></tr></tbody></table></div><p>A student is chosen at random. Find the probability that the student does Drama, given that the student is in Year 12.</p>
      stem: "<p>다음 표는 Years 11 and 12 학생 <span class=\"chem\">120</span>명의 주된 방과 후 활동을 나타내요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">로봇 (Robotics)</th><th scope=\"col\">연극 (Drama)</th><th scope=\"col\">없음 (None)</th><th scope=\"col\">합계</th></tr></thead><tbody><tr><th scope=\"row\">Year 11</th><td class=\"num\">18</td><td class=\"num\">12</td><td class=\"num\">30</td><td class=\"num\">60</td></tr><tr><th scope=\"row\">Year 12</th><td class=\"num\">14</td><td class=\"num\">21</td><td class=\"num\">25</td><td class=\"num\">60</td></tr></tbody></table></div><p>학생 한 명을 무작위로 선택해요. 선택한 학생이 Year 12일 때, 그 학생이 연극 활동을 할 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: The word "given" restricts you to one row of the table: only the Year 12 students count.
        "\"~일 때\"(given)라는 말은 표의 한 행으로 범위를 제한해요: Year 12 학생만 세요.",
        // EN: Divide the number of Year 12 Drama students by the total number of Year 12 students.
        "Year 12 중 연극을 하는 학생 수를 Year 12 학생 전체 수로 나누세요.",
      ],
      // EN: <p>Restrict the sample space to the <span class="chem">60</span> Year 12 students <b>[M1]</b>.<br><span class="chem">P(Drama | Year 12) = 21/60 = 7/20 = 0.35</span> <b>[A1]</b>.</p>
      solution: "<p>표본공간을 Year 12 학생 <span class=\"chem\">60</span>명으로 제한해요 <b>[M1]</b>.<br><span class=\"chem\">P(Drama | Year 12) = 21/60 = 7/20 = 0.35</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q021 · short · exam · SL · SL 4.6, 4.11 · 6 marks
    "t4-2-q021": {
      // EN: <p>A town council surveys <span class="chem">200</span> adults about whether they live within <span class="chem">5</span> km of their workplace (<span class="chem">W</span>) and whether they cycle to work (<span class="chem">C</span>).</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Cycles (C)</th><th scope="col">Does not cycle (C′)</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Within 5 km (W)</th><td class="num">48</td><td class="num">72</td><td class="num">120</td></tr><tr><th scope="row">Further than 5 km (W′)</th><td class="num">32</td><td class="num">48</td><td class="num">80</td></tr></tbody></table></div><p>One adult is chosen at random.<br>(a) Write down <span class="chem">P(C)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(C | W)</span> and <span class="chem">P(C | W′)</span>. <strong>[2 marks]</strong><br>(c) Hence determine whether the events <span class="chem">C</span> and <span class="chem">W</span> are independent. Justify your answer. <strong>[2 marks]</strong><br>(d) Find <span class="chem">P(W | C)</span>. <strong>[1 mark]</strong></p>
      stem: "<p>어느 시의회가 성인 <span class=\"chem\">200</span>명을 대상으로 직장에서 <span class=\"chem\">5</span> km 이내에 사는지(<span class=\"chem\">W</span>)와 자전거로 출근하는지(<span class=\"chem\">C</span>)를 조사했다.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">자전거 출근 (C)</th><th scope=\"col\">자전거 출근 안 함 (C′)</th><th scope=\"col\">합계</th></tr></thead><tbody><tr><th scope=\"row\">5 km 이내 (W)</th><td class=\"num\">48</td><td class=\"num\">72</td><td class=\"num\">120</td></tr><tr><th scope=\"row\">5 km 초과 (W′)</th><td class=\"num\">32</td><td class=\"num\">48</td><td class=\"num\">80</td></tr></tbody></table></div><p>성인 한 명을 무작위로 선택한다.<br>(a) <span class=\"chem\">P(C)</span>를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">P(C | W)</span>와 <span class=\"chem\">P(C | W′)</span>를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 이를 이용하여 (Hence) 사건 <span class=\"chem\">C</span>와 <span class=\"chem\">W</span>가 독립인지 판별하고 (determine), 그 근거를 제시하시오 (Justify). <strong>[2 marks]</strong><br>(d) <span class=\"chem\">P(W | C)</span>를 구하시오 (Find). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: "given W" means use only the W row; "given W′" means use only the W′ row. Independence means the condition makes no difference to the probability.
        "해석: \"W일 때\"는 W 행만, \"W′일 때\"는 W′ 행만 사용한다는 뜻이에요. 독립이란 조건이 확률에 전혀 영향을 주지 않는다는 뜻이에요.",
        // EN: In (b), divide the cyclists in each row by that row total.
        "(b)에서는 각 행의 자전거 출근자 수를 그 행의 합계로 나누세요.",
        // EN: For (c), use the test P(A | B) = P(A | B′) = P(A) for independent events. A conclusion with no comparison earns no marks.
        "(c)에서는 독립사건 판정 P(A | B) = P(A | B′) = P(A)를 사용하세요. 비교 없이 내린 결론은 점수를 받지 못해요.",
      ],
      // EN: <p>(a) <span class="chem">80</span> of the <span class="chem">200</span> adults cycle, so <span class="chem">P(C) = 0.4</span>.<br>(b) Within the <span class="chem">W</span> row: <span class="chem">P(C | W) = 48/120 = 0.4</span>. Within the <span class="chem">W′</span> row: <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) Since <span class="chem">P(C | W) = P(C | W′) = P(C)</span>, the probability of cycling is the same whether or not the event <span class="chem">W</span> occurs, so <span class="chem">C</span> and <span class="chem">W</span> are independent. (Check: <span class="chem">P(C ∩ W) = 48/200 = 0.24 = 0.4 × 0.6 = P(C)P(W)</span>.)<br>(d) Restrict to the <span class="chem">80</span> cyclists: <span class="chem">P(W | C) = 48/80 = 0.6</span> (which equals <span class="chem">P(W)</span>, as independence predicts).</p>
      solution: "<p>(a) 성인 <span class=\"chem\">200</span>명 중 <span class=\"chem\">80</span>명이 자전거로 출근하므로 <span class=\"chem\">P(C) = 0.4</span>예요.<br>(b) <span class=\"chem\">W</span> 행에서: <span class=\"chem\">P(C | W) = 48/120 = 0.4</span>. <span class=\"chem\">W′</span> 행에서: <span class=\"chem\">P(C | W′) = 32/80 = 0.4</span>.<br>(c) <span class=\"chem\">P(C | W) = P(C | W′) = P(C)</span>이므로 사건 <span class=\"chem\">W</span>가 일어나든 일어나지 않든 자전거로 출근할 확률은 같아요. 따라서 <span class=\"chem\">C</span>와 <span class=\"chem\">W</span>는 독립이에요. (확인: <span class=\"chem\">P(C ∩ W) = 48/200 = 0.24 = 0.4 × 0.6 = P(C)P(W)</span>.)<br>(d) 자전거 출근자 <span class=\"chem\">80</span>명으로 제한하면 <span class=\"chem\">P(W | C) = 48/80 = 0.6</span>이에요(독립성이 예측하는 대로 <span class=\"chem\">P(W)</span>와 같아요).</p>",
      // EN: <p>(a) <span class="chem">P(C) = 80/200 = 0.4</span>.<br>(b) <span class="chem">P(C | W) = 48/120 = 0.4</span> and <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) <span class="chem">P(C | W) = P(C | W′) = P(C) = 0.4</span>, so knowing whether someone lives within 5 km does not change the probability that they cycle: <span class="chem">C</span> and <span class="chem">W</span> are independent.<br>(d) <span class="chem">P(W | C) = 48/80 = 0.6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(C) = 80/200 = 0.4</span>.<br>(b) <span class=\"chem\">P(C | W) = 48/120 = 0.4</span>, <span class=\"chem\">P(C | W′) = 32/80 = 0.4</span>.<br>(c) <span class=\"chem\">P(C | W) = P(C | W′) = P(C) = 0.4</span>이므로, 어떤 사람이 5 km 이내에 사는지 알아도 그 사람이 자전거로 출근할 확률은 달라지지 않는다: <span class=\"chem\">C</span>와 <span class=\"chem\">W</span>는 독립이다.<br>(d) <span class=\"chem\">P(W | C) = 48/80 = 0.6</span>.</p>",
      markscheme: [
        // EN: A1: (a) P(C) = 80/200 = 0.4.
        "A1: (a) P(C) = 80/200 = 0.4.",
        // EN: A1: (b) P(C | W) = 48/120 = 0.4.
        "A1: (b) P(C | W) = 48/120 = 0.4.",
        // EN: A1: (b) P(C | W′) = 32/80 = 0.4.
        "A1: (b) P(C | W′) = 32/80 = 0.4.",
        // EN: R1: (c) Compares: P(C | W) = P(C | W′) (= P(C)), or equivalently P(C ∩ W) = 0.24 = P(C)P(W).
        "R1: (c) 비교함: P(C | W) = P(C | W′) (= P(C)), 또는 동치인 P(C ∩ W) = 0.24 = P(C)P(W).",
        // EN: A1: (c) Concludes that C and W are independent.
        "A1: (c) C와 W가 독립이라고 결론지음.",
        // EN: A1: (d) P(W | C) = 48/80 = 0.6.
        "A1: (d) P(W | C) = 48/80 = 0.6.",
      ],
    },

    // ── t4-2-q022 · numeric · exam · SL · SL 4.6, 4.7 · 5 marks
    "t4-2-q022": {
      // EN: <p>At a charity fair, a player pays <span class="chem">$k</span> to roll two fair six-sided dice. If both dice show <span class="chem">6</span>, the player receives <span class="chem">$36</span>. If the dice show any other double (both dice the same), the player receives <span class="chem">$9</span>. Otherwise the player receives nothing. Find the value of <span class="chem">k</span> for which the game is fair. Give your answer in dollars to 2 decimal places.</p>
      stem: "<p>자선 바자회에서 참가자는 <span class=\"chem\">$k</span>를 내고 공정한 육면체 주사위 두 개를 던져요. 두 주사위 모두 <span class=\"chem\">6</span>이 나오면 참가자는 <span class=\"chem\">$36</span>를 받아요. 그 밖의 같은 눈(두 주사위의 눈이 같음)이 나오면 <span class=\"chem\">$9</span>를 받아요. 그 외에는 아무것도 받지 못해요. 이 게임이 공정해지는 <span class=\"chem\">k</span>의 값을 구하시오 (Find). 답은 달러 단위로 소수점 아래 2자리까지 쓰시오.</p>",
      hints: [
        // EN: Decode: a game is fair when the player's expected gain is 0, so the price k must equal the expected amount the player receives.
        "해석: 참가자의 이득의 기댓값이 0일 때 게임은 공정하므로, 가격 k는 참가자가 받는 금액의 기댓값과 같아야 해요.",
        // EN: Use a sample-space diagram of the 36 equally likely outcomes: one outcome is (6, 6) and five outcomes are the other doubles.
        "같은 정도로 일어날 수 있는 결과 36가지를 나타낸 표본공간 그림을 사용하세요: (6, 6)이 한 가지이고, 나머지 같은 눈이 다섯 가지예요.",
        // EN: Expected amount received = 36 × (1/36) + 9 × (5/36).
        "받는 금액의 기댓값 = 36 × (1/36) + 9 × (5/36).",
      ],
      // EN: <p><b>Decode:</b> "fair" means <span class="chem">E(gain) = 0</span>, so <span class="chem">k = E(amount received)</span>.<br>The sample space has <span class="chem">36</span> equally likely outcomes. <span class="chem">P(6, 6) = 1/36</span> <b>[A1]</b> and <span class="chem">P(other double) = 5/36</span> <b>[A1]</b>.<br><span class="chem">E(received) = 36(1/36) + 9(5/36) + 0(30/36) = 1 + 45/36 = 81/36 = 2.25</span> <b>[M1 A1]</b>.<br>For a fair game <span class="chem">E(received) - k = 0</span>, so <span class="chem">k = $2.25</span> <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> \"공정하다\"는 <span class=\"chem\">E(gain) = 0</span>이라는 뜻이므로 <span class=\"chem\">k = E(amount received)</span>예요.<br>표본공간은 같은 정도로 일어날 수 있는 결과 <span class=\"chem\">36</span>가지로 이루어져요. <span class=\"chem\">P(6, 6) = 1/36</span> <b>[A1]</b>, <span class=\"chem\">P(other double) = 5/36</span> <b>[A1]</b>.<br><span class=\"chem\">E(received) = 36(1/36) + 9(5/36) + 0(30/36) = 1 + 45/36 = 81/36 = 2.25</span> <b>[M1 A1]</b>.<br>공정한 게임이려면 <span class=\"chem\">E(received) - k = 0</span>이므로 <span class=\"chem\">k = $2.25</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q023 · numeric · challenge · SL · SL 4.6, 4.7 · 6 marks
    "t4-2-q023": {
      // EN: <p>A bag contains <span class="chem">n</span> red counters and <span class="chem">3</span> blue counters, and it holds more red counters than blue ones. A player pays <span class="chem">$2</span> to draw two counters at random without replacement. If the two counters are the same colour, the player receives <span class="chem">$4</span>; otherwise the player receives nothing. The game is fair. Find <span class="chem">n</span>.</p>
      stem: "<p>주머니에 빨간 칩 <span class=\"chem\">n</span>개와 파란 칩 <span class=\"chem\">3</span>개가 들어 있고, 빨간 칩이 파란 칩보다 많아요. 참가자는 <span class=\"chem\">$2</span>를 내고 칩 두 개를 무작위로 꺼내는데, 꺼낸 칩은 다시 넣지 않아요. 두 칩의 색이 같으면 <span class=\"chem\">$4</span>를 받고, 그렇지 않으면 아무것도 받지 못해요. 이 게임은 공정해요. <span class=\"chem\">n</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "fair" means expected gain = 0, which fixes P(same colour). The phrase "more red counters than blue" is a hidden condition you will need at the end.
        "해석: \"공정하다\"는 이득의 기댓값 = 0이라는 뜻이고, 이것으로 P(same colour)가 정해져요. \"빨간 칩이 파란 칩보다 많다\"는 말은 마지막에 필요한 숨은 조건이에요.",
        // EN: Fair: 4 × P(same) − 2 = 0, so P(same) = 1/2. Write P(same) = [n(n − 1) + 3 × 2] / [(n + 3)(n + 2)] from a tree diagram without replacement.
        "공정: 4 × P(same) − 2 = 0이므로 P(same) = 1/2. 비복원추출 수형도로부터 P(same) = [n(n − 1) + 3 × 2] / [(n + 3)(n + 2)]로 쓰세요.",
        // EN: You get a quadratic in n with two positive integer roots. Use the condition n &gt; 3 to choose one.
        "두 양의 정수 근을 갖는 n에 대한 이차방정식이 나와요. 조건 n &gt; 3을 이용해 하나를 고르세요.",
      ],
      // EN: <p><b>Decode:</b> a fair game has <span class="chem">E(gain) = 0</span>: <span class="chem">4 P(same) - 2 = 0 ⇒ P(same) = 1/2</span> <b>[M1 A1]</b>.<br>Without replacement, <span class="chem">P(same) = (n/(n + 3))((n - 1)/(n + 2)) + (3/(n + 3))(2/(n + 2)) = (n^2 - n + 6)/((n + 3)(n + 2))</span> <b>[M1 A1]</b>.<br>Setting this equal to <span class="chem">1/2</span>: <span class="chem">2n^2 - 2n + 12 = n^2 + 5n + 6 ⇒ n^2 - 7n + 6 = 0 ⇒ (n - 1)(n - 6) = 0</span> <b>[A1]</b>.<br>The bag holds more red than blue, so <span class="chem">n &gt; 3</span> and <span class="chem">n = 6</span> <b>[R1]</b>. (Check: <span class="chem">P(same) = 36/72 = 1/2</span>.)</p>
      solution: "<p><b>해석:</b> 공정한 게임은 <span class=\"chem\">E(gain) = 0</span>: <span class=\"chem\">4 P(same) - 2 = 0 ⇒ P(same) = 1/2</span> <b>[M1 A1]</b>.<br>비복원추출이므로 <span class=\"chem\">P(same) = (n/(n + 3))((n - 1)/(n + 2)) + (3/(n + 3))(2/(n + 2)) = (n^2 - n + 6)/((n + 3)(n + 2))</span> <b>[M1 A1]</b>.<br>이것을 <span class=\"chem\">1/2</span>로 놓으면: <span class=\"chem\">2n^2 - 2n + 12 = n^2 + 5n + 6 ⇒ n^2 - 7n + 6 = 0 ⇒ (n - 1)(n - 6) = 0</span> <b>[A1]</b>.<br>주머니에는 빨간 칩이 파란 칩보다 많으므로 <span class=\"chem\">n &gt; 3</span>이고 <span class=\"chem\">n = 6</span> <b>[R1]</b>. (확인: <span class=\"chem\">P(same) = 36/72 = 1/2</span>.)</p>",
    },

    // ── t4-2-q024 · numeric · exam · AHL · AHL 4.14 · 4 marks
    "t4-2-q024": {
      // EN: <p>The number of goals <span class="chem">X</span> scored by a hockey team in a match has the probability distribution below.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span></th><th scope="col">0</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th></tr></thead><tbody><tr><th scope="row"><span class="chem">P(X = x)</span></th><td class="num">0.2</td><td class="num">0.3</td><td class="num">0.4</td><td class="num">0.1</td></tr></tbody></table></div><p>Find <span class="chem">Var(X)</span>.</p>
      stem: "<p>어느 하키 팀이 한 경기에서 넣는 골의 수 <span class=\"chem\">X</span>의 확률분포는 다음과 같아요.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><span class=\"chem\">x</span></th><th scope=\"col\">0</th><th scope=\"col\">1</th><th scope=\"col\">2</th><th scope=\"col\">3</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">P(X = x)</span></th><td class=\"num\">0.2</td><td class=\"num\">0.3</td><td class=\"num\">0.4</td><td class=\"num\">0.1</td></tr></tbody></table></div><p><span class=\"chem\">Var(X)</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: First find <span class="chem">E(X) = Σ x P(X = x)</span>.
        "먼저 <span class=\"chem\">E(X) = Σ x P(X = x)</span>를 구하세요.",
        // EN: Then find <span class="chem">E(X^2) = Σ x^2 P(X = x)</span> and use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.
        "다음으로 <span class=\"chem\">E(X^2) = Σ x^2 P(X = x)</span>를 구하고 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>를 사용하세요.",
      ],
      // EN: <p><span class="chem">E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4</span> <b>[A1]</b>.<br><span class="chem">E(X^2) = 0(0.2) + 1(0.3) + 4(0.4) + 9(0.1) = 2.8</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 2.8 - 1.4^2 = 2.8 - 1.96 = 0.84</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4</span> <b>[A1]</b>.<br><span class=\"chem\">E(X^2) = 0(0.2) + 1(0.3) + 4(0.4) + 9(0.1) = 2.8</span> <b>[M1 A1]</b>.<br><span class=\"chem\">Var(X) = 2.8 - 1.4^2 = 2.8 - 1.96 = 0.84</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q025 · short · exam · AHL · AHL 4.14 · 6 marks
    "t4-2-q025": {
      // EN: <p>The daily maximum temperature <span class="chem">C</span> (°C) in a city in June has mean <span class="chem">18</span> and variance <span class="chem">6.25</span>. The temperature in °F is <span class="chem">F = 1.8C + 32</span>.<br>(a) Find <span class="chem">E(F)</span>. <strong>[2 marks]</strong><br>(b) Find the standard deviation of <span class="chem">F</span>. <strong>[2 marks]</strong><br>An ice-cream seller models her daily profit, in dollars, as <span class="chem">P = 40F - 1500</span>.<br>(c) Find the mean and the standard deviation of <span class="chem">P</span>. <strong>[2 marks]</strong></p>
      stem: "<p>어느 도시의 6월 일 최고기온 <span class=\"chem\">C</span>(°C)는 평균이 <span class=\"chem\">18</span>, 분산이 <span class=\"chem\">6.25</span>이다. °F로 나타낸 기온은 <span class=\"chem\">F = 1.8C + 32</span>이다.<br>(a) <span class=\"chem\">E(F)</span>를 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">F</span>의 표준편차를 구하시오 (Find). <strong>[2 marks]</strong><br>한 아이스크림 판매상은 하루 이익(달러)을 <span class=\"chem\">P = 40F - 1500</span>으로 모델링한다.<br>(c) <span class=\"chem\">P</span>의 평균과 표준편차를 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: these are linear transformations aX + b. Adding a constant shifts the mean only; multiplying by a scales the mean by a and the variance by a².
        "해석: 이것들은 일차변환 aX + b예요. 상수를 더하면 평균만 이동하고, a를 곱하면 평균은 a배, 분산은 a²배가 돼요.",
        // EN: The variance of C is given, not its standard deviation: SD(C) = √6.25.
        "주어진 것은 C의 표준편차가 아니라 분산이에요: SD(C) = √6.25.",
        // EN: For (c), apply the same rules to P = 40F − 1500 using your answers to (a) and (b).
        "(c)에서는 (a)와 (b)의 답을 이용해 P = 40F − 1500에 같은 규칙을 적용하세요.",
      ],
      // EN: <p>(a) <span class="chem">E(F) = 1.8 E(C) + 32 = 1.8(18) + 32 = 64.4</span>.<br>(b) <span class="chem">Var(F) = 1.8^2 Var(C) = 3.24 × 6.25 = 20.25</span>, so <span class="chem">SD(F) = 4.5</span>. The <span class="chem">+32</span> does not affect the spread.<br>(c) <span class="chem">E(P) = 40 E(F) - 1500 = 2576 - 1500 = 1076</span> dollars and <span class="chem">SD(P) = 40 SD(F) = 180</span> dollars.</p>
      solution: "<p>(a) <span class=\"chem\">E(F) = 1.8 E(C) + 32 = 1.8(18) + 32 = 64.4</span>.<br>(b) <span class=\"chem\">Var(F) = 1.8^2 Var(C) = 3.24 × 6.25 = 20.25</span>이므로 <span class=\"chem\">SD(F) = 4.5</span>. <span class=\"chem\">+32</span>는 퍼짐에 영향을 주지 않아요.<br>(c) <span class=\"chem\">E(P) = 40 E(F) - 1500 = 2576 - 1500 = 1076</span>달러이고 <span class=\"chem\">SD(P) = 40 SD(F) = 180</span>달러예요.</p>",
      // EN: <p>(a) <span class="chem">E(F) = 1.8(18) + 32 = 64.4</span> °F.<br>(b) <span class="chem">SD(C) = sqrt(6.25) = 2.5</span>, so <span class="chem">SD(F) = 1.8 × 2.5 = 4.5</span> °F.<br>(c) <span class="chem">E(P) = 40(64.4) - 1500 = $1076</span>; <span class="chem">SD(P) = 40 × 4.5 = $180</span>.</p>
      answer: "<p>(a) <span class=\"chem\">E(F) = 1.8(18) + 32 = 64.4</span> °F.<br>(b) <span class=\"chem\">SD(C) = sqrt(6.25) = 2.5</span>이므로 <span class=\"chem\">SD(F) = 1.8 × 2.5 = 4.5</span> °F.<br>(c) <span class=\"chem\">E(P) = 40(64.4) - 1500 = $1076</span>; <span class=\"chem\">SD(P) = 40 × 4.5 = $180</span>.</p>",
      markscheme: [
        // EN: M1: (a) Uses E(aC + b) = aE(C) + b.
        "M1: (a) E(aC + b) = aE(C) + b를 사용함.",
        // EN: A1: (a) E(F) = 64.4.
        "A1: (a) E(F) = 64.4.",
        // EN: M1: (b) Uses Var(F) = 1.8² Var(C) = 20.25, or SD(F) = |1.8| SD(C) with SD(C) = 2.5.
        "M1: (b) Var(F) = 1.8² Var(C) = 20.25, 또는 SD(C) = 2.5로 SD(F) = |1.8| SD(C)를 사용함.",
        // EN: A1: (b) SD(F) = 4.5.
        "A1: (b) SD(F) = 4.5.",
        // EN: A1: (c) E(P) = 40(64.4) − 1500 = 1076.
        "A1: (c) E(P) = 40(64.4) − 1500 = 1076.",
        // EN: A1: (c) SD(P) = 40 × 4.5 = 180.
        "A1: (c) SD(P) = 40 × 4.5 = 180.",
      ],
    },

    // ── t4-2-q026 · numeric · foundation · AHL · AHL 4.14, SL 4.7 · 3 marks
    "t4-2-q026": {
      // EN: <p>A discrete random variable <span class="chem">X</span> takes the values <span class="chem">1, 2, 3</span> with probabilities <span class="chem">0.5, 0.3, 0.2</span> respectively. Find <span class="chem">E(5 - 2X)</span>.</p>
      stem: "<p>이산확률변수 <span class=\"chem\">X</span>가 값 <span class=\"chem\">1, 2, 3</span>을 각각 확률 <span class=\"chem\">0.5, 0.3, 0.2</span>로 가져요. <span class=\"chem\">E(5 - 2X)</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Find <span class="chem">E(X)</span> first.
        "먼저 <span class=\"chem\">E(X)</span>를 구하세요.",
        // EN: Then use <span class="chem">E(aX + b) = aE(X) + b</span> with <span class="chem">a = -2</span> and <span class="chem">b = 5</span>.
        "그다음 <span class=\"chem\">a = -2</span>, <span class=\"chem\">b = 5</span>로 <span class=\"chem\">E(aX + b) = aE(X) + b</span>를 사용하세요.",
      ],
      // EN: <p><span class="chem">E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 1.7</span> <b>[M1 A1]</b>.<br><span class="chem">E(5 - 2X) = 5 - 2(1.7) = 1.6</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 1.7</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(5 - 2X) = 5 - 2(1.7) = 1.6</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q027 · numeric · exam · SL · SL 4.6, 4.11 · 4 marks
    "t4-2-q027": {
      // EN: <p>Events <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">P(A) = 0.5</span>, <span class="chem">P(B) = 0.4</span> and <span class="chem">P(A ∪ B) = 0.8</span>. Find the exact value of <span class="chem">P(A | B′)</span>.</p>
      stem: "<p>사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 <span class=\"chem\">P(A) = 0.5</span>, <span class=\"chem\">P(B) = 0.4</span>, <span class=\"chem\">P(A ∪ B) = 0.8</span>을 만족해요. <span class=\"chem\">P(A | B′)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use the addition rule to find <span class="chem">P(A ∩ B)</span>.
        "덧셈정리를 이용해 <span class=\"chem\">P(A ∩ B)</span>를 구하세요.",
        // EN: A Venn diagram helps: <span class="chem">P(A ∩ B′) = P(A) - P(A ∩ B)</span>, and <span class="chem">P(B′) = 1 - P(B)</span>.
        "벤다이어그램이 도움이 돼요: <span class=\"chem\">P(A ∩ B′) = P(A) - P(A ∩ B)</span>이고 <span class=\"chem\">P(B′) = 1 - P(B)</span>예요.",
      ],
      // EN: <p><span class="chem">P(A ∩ B) = 0.5 + 0.4 - 0.8 = 0.1</span> <b>[A1]</b>.<br><span class="chem">P(A ∩ B′) = 0.5 - 0.1 = 0.4</span> <b>[A1]</b>.<br><span class="chem">P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.6 = 2/3</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(A ∩ B) = 0.5 + 0.4 - 0.8 = 0.1</span> <b>[A1]</b>.<br><span class=\"chem\">P(A ∩ B′) = 0.5 - 0.1 = 0.4</span> <b>[A1]</b>.<br><span class=\"chem\">P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.6 = 2/3</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q028 · short · challenge · SL · SL 4.6, 4.11 · 7 marks
    "t4-2-q028": {
      // EN: <p>An insurance study reports that <span class="chem">18%</span> of drivers who use a phone while driving have had a minor accident in the last year, and that <span class="chem">18%</span> of drivers who do not use a phone while driving have also had a minor accident. Of all drivers, <span class="chem">40%</span> use a phone while driving. Let <span class="chem">A</span> be the event "has had a minor accident" and <span class="chem">B</span> the event "uses a phone while driving".<br>(a) Write down <span class="chem">P(A)</span>. <strong>[1 mark]</strong><br>(b) Prove that, for any events with <span class="chem">0 &lt; P(B) &lt; 1</span>, if <span class="chem">P(A | B) = P(A | B′)</span> then <span class="chem">A</span> and <span class="chem">B</span> are independent. <strong>[4 marks]</strong><br>(c) Write down <span class="chem">P(B | A)</span>, giving a reason. <strong>[2 marks]</strong></p>
      stem: "<p>한 보험 연구에 따르면 운전 중 휴대전화를 사용하는 운전자의 <span class=\"chem\">18%</span>가 지난 1년 동안 경미한 사고를 냈고, 운전 중 휴대전화를 사용하지 않는 운전자의 <span class=\"chem\">18%</span>도 경미한 사고를 냈다. 전체 운전자 중 <span class=\"chem\">40%</span>가 운전 중 휴대전화를 사용한다. <span class=\"chem\">A</span>를 사건 \"경미한 사고를 낸 적이 있다\", <span class=\"chem\">B</span>를 사건 \"운전 중 휴대전화를 사용한다\"라 하자.<br>(a) <span class=\"chem\">P(A)</span>를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">0 &lt; P(B) &lt; 1</span>인 임의의 사건에 대하여, <span class=\"chem\">P(A | B) = P(A | B′)</span>이면 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 독립임을 증명하시오 (Prove). <strong>[4 marks]</strong><br>(c) 이유를 들어 <span class=\"chem\">P(B | A)</span>를 쓰시오 (Write down). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the wordy percentages are P(A | B) = 0.18 and P(A | B′) = 0.18. The question is really the independence test P(A | B) = P(A | B′), first in numbers and then as a general proof.
        "해석: 장황한 백분율은 P(A | B) = 0.18과 P(A | B′) = 0.18이에요. 이 문제의 핵심은 독립성 판정 P(A | B) = P(A | B′)이고, 먼저 수치로, 그다음 일반적인 증명으로 다뤄요.",
        // EN: For (a), use a tree: P(A) = P(B)P(A | B) + P(B′)P(A | B′).
        "(a)에서는 수형도를 사용하세요: P(A) = P(B)P(A | B) + P(B′)P(A | B′).",
        // EN: For (b), call the common value p and show P(A) = p. Then compare P(A ∩ B) with P(A)P(B).
        "(b)에서는 공통의 값을 p라 하고 P(A) = p임을 보이세요. 그다음 P(A ∩ B)와 P(A)P(B)를 비교하세요.",
        // EN: For (c), independence works both ways.
        "(c)에서는 독립성이 양방향으로 성립한다는 점을 이용하세요.",
      ],
      // EN: <p><b>Decode:</b> "18% of drivers who use a phone" is the conditional probability <span class="chem">P(A | B) = 0.18</span>; likewise <span class="chem">P(A | B′) = 0.18</span>. Equal conditional probabilities are the SL 4.11 test for independence.<br>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">p = P(A | B) = P(A | B′)</span>. Since <span class="chem">B</span> and <span class="chem">B′</span> partition the sample space, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p[P(B) + P(B′)] = p</span>. Hence <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, which is the definition of independence.<br>(c) The events are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>. Check: <span class="chem">P(B | A) = 0.072/0.18 = 0.4</span>.</p>
      solution: "<p><b>해석:</b> \"휴대전화를 사용하는 운전자의 18%\"는 조건부확률 <span class=\"chem\">P(A | B) = 0.18</span>이고, 마찬가지로 <span class=\"chem\">P(A | B′) = 0.18</span>이에요. 조건부확률이 같다는 것이 SL 4.11의 독립성 판정이에요.<br>(a) <span class=\"chem\">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) <span class=\"chem\">p = P(A | B) = P(A | B′)</span>라 해요. <span class=\"chem\">B</span>와 <span class=\"chem\">B′</span>는 표본공간을 분할하므로 <span class=\"chem\">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p[P(B) + P(B′)] = p</span>. 따라서 <span class=\"chem\">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>이고, 이것이 바로 독립의 정의예요.<br>(c) 두 사건은 독립이므로 <span class=\"chem\">P(B | A) = P(B) = 0.4</span>. 확인: <span class=\"chem\">P(B | A) = 0.072/0.18 = 0.4</span>.</p>",
      // EN: <p>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">P(A | B) = P(A | B′) = p</span>. By total probability, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p(P(B) + P(B′)) = p</span>. Then <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are independent.<br>(c) By (b), <span class="chem">A</span> and <span class="chem">B</span> are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) <span class=\"chem\">P(A | B) = P(A | B′) = p</span>라 하자. 전확률 공식에 의해 <span class=\"chem\">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p(P(B) + P(B′)) = p</span>. 그러면 <span class=\"chem\">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>이므로 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>는 독립이다.<br>(c) (b)에 의해 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>는 독립이므로 <span class=\"chem\">P(B | A) = P(B) = 0.4</span>.</p>",
      markscheme: [
        // EN: A1: (a) P(A) = 0.18.
        "A1: (a) P(A) = 0.18.",
        // EN: M1: (b) Uses the law of total probability P(A) = P(A | B)P(B) + P(A | B′)P(B′).
        "M1: (b) 전확률 공식 P(A) = P(A | B)P(B) + P(A | B′)P(B′)를 사용함.",
        // EN: A1: (b) Factorises using P(A | B) = P(A | B′) = p to get P(A) = p(P(B) + P(B′)) = p.
        "A1: (b) P(A | B) = P(A | B′) = p를 이용해 묶어 내어 P(A) = p(P(B) + P(B′)) = p를 얻음.",
        // EN: M1: (b) Uses P(A ∩ B) = P(A | B)P(B).
        "M1: (b) P(A ∩ B) = P(A | B)P(B)를 사용함.",
        // EN: R1: (b) Concludes P(A ∩ B) = P(A)P(B), hence A and B are independent.
        "R1: (b) P(A ∩ B) = P(A)P(B)라고 결론짓고, 따라서 A와 B는 독립임.",
        // EN: R1: (c) Reason: A and B are independent (from (b)), so conditioning on A does not change P(B).
        "R1: (c) 이유: A와 B는 독립이므로((b)에 의해) A를 조건으로 해도 P(B)는 변하지 않음.",
        // EN: A1: (c) P(B | A) = 0.4.
        "A1: (c) P(B | A) = 0.4.",
      ],
    },

    // ── t4-2-q029 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q029": {
      // EN: <p>The volume of juice <span class="chem">V</span> ml in a carton is normally distributed with mean <span class="chem">250</span> ml. It is known that <span class="chem">P(V &gt; 262) = 0.15</span>. Find <span class="chem">P(238 &lt; V &lt; 262)</span>.</p>
      stem: "<p>종이팩에 든 주스의 양 <span class=\"chem\">V</span> ml는 평균이 <span class=\"chem\">250</span> ml인 정규분포를 따라요. <span class=\"chem\">P(V &gt; 262) = 0.15</span>임이 알려져 있어요. <span class=\"chem\">P(238 &lt; V &lt; 262)</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: The normal curve is symmetric about the mean. How far are 238 and 262 from 250?
        "정규분포 곡선은 평균에 대해 대칭이에요. 238과 262는 250에서 얼마나 떨어져 있나요?",
        // EN: By symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262)</span>. Subtract both tails from 1.
        "대칭성에 의해 <span class=\"chem\">P(V &lt; 238) = P(V &gt; 262)</span>예요. 1에서 양쪽 꼬리의 확률을 빼세요.",
      ],
      // EN: <p><span class="chem">238</span> and <span class="chem">262</span> are both <span class="chem">12</span> ml from the mean, so by symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262) = 0.15</span> <b>[R1 A1]</b>.<br><span class="chem">P(238 &lt; V &lt; 262) = 1 - 2(0.15) = 0.7</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">238</span>과 <span class=\"chem\">262</span>는 모두 평균에서 <span class=\"chem\">12</span> ml 떨어져 있으므로, 대칭성에 의해 <span class=\"chem\">P(V &lt; 238) = P(V &gt; 262) = 0.15</span> <b>[R1 A1]</b>.<br><span class=\"chem\">P(238 &lt; V &lt; 262) = 1 - 2(0.15) = 0.7</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q030 · numeric · exam · SL · SL 4.8 · 4 marks
    "t4-2-q030": {
      // EN: <p>A spinner lands on red with probability <span class="chem">1/4</span> on each spin, independently. It is spun <span class="chem">4</span> times. Find the exact probability that it lands on red <strong>at least 3</strong> times.</p>
      stem: "<p>어떤 회전판은 돌릴 때마다 독립적으로 확률 <span class=\"chem\">1/4</span>로 빨간색에 멈춰요. 이 회전판을 <span class=\"chem\">4</span>번 돌려요. 빨간색에 <strong>적어도 3</strong>번 멈출 정확한 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Let <span class="chem">X ~ B(4, 1/4)</span>. "At least 3" means <span class="chem">X = 3</span> or <span class="chem">X = 4</span>.
        "<span class=\"chem\">X ~ B(4, 1/4)</span>라 하세요. \"적어도 3번\"은 <span class=\"chem\">X = 3</span> 또는 <span class=\"chem\">X = 4</span>를 뜻해요.",
        // EN: <span class="chem">P(X = 3) = ⁴C₃ (1/4)^3 (3/4)</span> and <span class="chem">P(X = 4) = (1/4)^4</span>.
        "<span class=\"chem\">P(X = 3) = ⁴C₃ (1/4)^3 (3/4)</span>이고 <span class=\"chem\">P(X = 4) = (1/4)^4</span>예요.",
      ],
      // EN: <p>Let <span class="chem">X ~ B(4, 1/4)</span>. <span class="chem">P(X ≥ 3) = P(X = 3) + P(X = 4)</span> <b>[M1]</b>.<br><span class="chem">P(X = 3) = 4 × (1/64) × (3/4) = 12/256</span> <b>[A1]</b>, <span class="chem">P(X = 4) = 1/256</span> <b>[A1]</b>.<br><span class="chem">P(X ≥ 3) = 13/256</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">X ~ B(4, 1/4)</span>라 해요. <span class=\"chem\">P(X ≥ 3) = P(X = 3) + P(X = 4)</span> <b>[M1]</b>.<br><span class=\"chem\">P(X = 3) = 4 × (1/64) × (3/4) = 12/256</span> <b>[A1]</b>, <span class=\"chem\">P(X = 4) = 1/256</span> <b>[A1]</b>.<br><span class=\"chem\">P(X ≥ 3) = 13/256</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q031 · numeric · challenge · AHL · AHL 4.13 · 6 marks
    "t4-2-q031": {
      // EN: <p>Maya travels to school by bus, by bicycle or on foot with probabilities <span class="chem">1/2</span>, <span class="chem">1/3</span> and <span class="chem">1/6</span> respectively. She is late with probability <span class="chem">1/5</span> if she takes the bus, <span class="chem">1/10</span> if she cycles and <span class="chem">1/4</span> if she walks. One morning Maya arrives <strong>on time</strong>. Find the exact probability that she cycled that morning.</p>
      stem: "<p>Maya는 버스, 자전거, 도보로 등교하며 그 확률은 각각 <span class=\"chem\">1/2</span>, <span class=\"chem\">1/3</span>, <span class=\"chem\">1/6</span>이에요. 지각할 확률은 버스를 타면 <span class=\"chem\">1/5</span>, 자전거를 타면 <span class=\"chem\">1/10</span>, 걸어가면 <span class=\"chem\">1/4</span>예요. 어느 날 아침 Maya가 <strong>제시간에</strong> 도착했어요. 그날 아침 Maya가 자전거로 등교했을 정확한 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you know the result (on time) and want the cause (cycled): this is Bayes' theorem with three partitioning events. The trap is that the given conditional probabilities are for being LATE, so use their complements.
        "해석: 결과(제시간 도착)를 알고 원인(자전거)을 구하려는 것이므로, 세 사건으로 분할한 베이즈 정리예요. 함정은 주어진 조건부확률이 \"지각\"에 대한 것이라는 점이니, 여사건의 확률을 사용하세요.",
        // EN: P(on time | bus) = 4/5, P(on time | cycle) = 9/10, P(on time | walk) = 3/4.
        "P(on time | bus) = 4/5, P(on time | cycle) = 9/10, P(on time | walk) = 3/4.",
        // EN: P(on time) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4). Then divide the cycling branch by this total.
        "P(on time) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4). 그다음 자전거 가지를 이 합으로 나누세요.",
      ],
      // EN: <p><b>Decode:</b> reversing the condition from "on time" back to the mode of travel is Bayes' theorem with the partition {bus, cycle, walk}; first convert each "late" probability to "on time".<br><span class="chem">P(T | bus) = 4/5, P(T | cycle) = 9/10, P(T | walk) = 3/4</span> <b>[A1]</b>.<br><span class="chem">P(T) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4) = 2/5 + 3/10 + 1/8 = 33/40</span> <b>[M1 A1]</b>.<br><span class="chem">P(cycle ∩ T) = (1/3)(9/10) = 3/10 = 12/40</span> <b>[A1]</b>.<br><span class="chem">P(cycle | T) = (12/40)/(33/40) = 12/33 = 4/11</span> <b>[M1 A1]</b>.</p>
      solution: "<p><b>해석:</b> 조건을 \"제시간 도착\"에서 등교 수단으로 거꾸로 되돌리는 것은 분할 {bus, cycle, walk}에 대한 베이즈 정리예요. 먼저 각 \"지각\" 확률을 \"제시간\" 확률로 바꾸세요.<br><span class=\"chem\">P(T | bus) = 4/5, P(T | cycle) = 9/10, P(T | walk) = 3/4</span> <b>[A1]</b>.<br><span class=\"chem\">P(T) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4) = 2/5 + 3/10 + 1/8 = 33/40</span> <b>[M1 A1]</b>.<br><span class=\"chem\">P(cycle ∩ T) = (1/3)(9/10) = 3/10 = 12/40</span> <b>[A1]</b>.<br><span class=\"chem\">P(cycle | T) = (12/40)/(33/40) = 12/33 = 4/11</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q032 · short · exam · AHL · AHL 4.14 · 8 marks
    "t4-2-q032": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function<br><span class="chem">f(x) = kx</span> for <span class="chem">0 ≤ x ≤ 2</span>,<br><span class="chem">f(x) = k(6 - x)/2</span> for <span class="chem">2 &lt; x ≤ 6</span>,<br>and <span class="chem">f(x) = 0</span> otherwise, where <span class="chem">k</span> is a positive constant.<br>(a) Show that <span class="chem">k = 1/6</span>. <strong>[2 marks]</strong><br>(b) Write down the mode of <span class="chem">X</span>. <strong>[1 mark]</strong><br>(c) Find <span class="chem">P(X &lt; 2)</span>. <strong>[1 mark]</strong><br>(d) Find the exact value of the median of <span class="chem">X</span>. <strong>[4 marks]</strong></p>
      stem: "<p>연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수는<br><span class=\"chem\">0 ≤ x ≤ 2</span>일 때 <span class=\"chem\">f(x) = kx</span>,<br><span class=\"chem\">2 &lt; x ≤ 6</span>일 때 <span class=\"chem\">f(x) = k(6 - x)/2</span>,<br>그 외에서는 <span class=\"chem\">f(x) = 0</span>이다. 단, <span class=\"chem\">k</span>는 양의 상수이다.<br>(a) <span class=\"chem\">k = 1/6</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">X</span>의 최빈값을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(c) <span class=\"chem\">P(X &lt; 2)</span>를 구하시오 (Find). <strong>[1 mark]</strong><br>(d) <span class=\"chem\">X</span>의 중앙값의 정확한 값을 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Sketch f: it rises linearly from (0, 0) to (2, 2k) and falls to (6, 0). The total area is a triangle.
        "f의 그래프를 그려 보세요: (0, 0)에서 (2, 2k)까지 직선으로 올라가고 (6, 0)까지 내려가요. 전체 넓이는 삼각형이에요.",
        // EN: For the median, first decide which piece it lies in by comparing P(X &lt; 2) with 0.5.
        "중앙값은 먼저 P(X &lt; 2)와 0.5를 비교해 어느 구간에 있는지 판단하세요.",
        // EN: The area to the right of m is a smaller triangle with base 6 − m and height (6 − m)/12.
        "m의 오른쪽 넓이는 밑변이 6 − m, 높이가 (6 − m)/12인 더 작은 삼각형이에요.",
      ],
      // EN: <p>(a) Total area = triangle with base <span class="chem">6</span> and height <span class="chem">2k</span>: <span class="chem">6k = 1 ⇒ k = 1/6</span>.<br>(b) <span class="chem">f</span> is greatest at the apex, so the mode is <span class="chem">2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(2/6) = 1/3</span>.<br>(d) <span class="chem">P(X &lt; 2) = 1/3 &lt; 1/2</span>, so <span class="chem">m &gt; 2</span>. The right-hand tail is a triangle with base <span class="chem">6 - m</span> and height <span class="chem">f(m) = (6 - m)/12</span>: <span class="chem">(1/2)(6 - m)^2/12 = 1/2 ⇒ (6 - m)^2 = 12 ⇒ 6 - m = ±2sqrt(3)</span>. Since <span class="chem">2 &lt; m ≤ 6</span>, <span class="chem">m = 6 - 2sqrt(3) ≈ 2.54</span>.</p>
      solution: "<p>(a) 전체 넓이 = 밑변 <span class=\"chem\">6</span>, 높이 <span class=\"chem\">2k</span>인 삼각형: <span class=\"chem\">6k = 1 ⇒ k = 1/6</span>.<br>(b) <span class=\"chem\">f</span>는 꼭짓점에서 가장 크므로 최빈값은 <span class=\"chem\">2</span>예요.<br>(c) <span class=\"chem\">P(X &lt; 2) = (1/2)(2)(2/6) = 1/3</span>.<br>(d) <span class=\"chem\">P(X &lt; 2) = 1/3 &lt; 1/2</span>이므로 <span class=\"chem\">m &gt; 2</span>. 오른쪽 꼬리는 밑변 <span class=\"chem\">6 - m</span>, 높이 <span class=\"chem\">f(m) = (6 - m)/12</span>인 삼각형이에요: <span class=\"chem\">(1/2)(6 - m)^2/12 = 1/2 ⇒ (6 - m)^2 = 12 ⇒ 6 - m = ±2sqrt(3)</span>. <span class=\"chem\">2 &lt; m ≤ 6</span>이므로 <span class=\"chem\">m = 6 - 2sqrt(3) ≈ 2.54</span>.</p>",
      // EN: <p>(a) The graph is a triangle with base <span class="chem">6</span> and height <span class="chem">f(2) = 2k</span>, so its area is <span class="chem">(1/2)(6)(2k) = 6k = 1</span>, giving <span class="chem">k = 1/6</span>.<br>(b) Mode <span class="chem">= 2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(1/3) = 1/3</span>.<br>(d) Since <span class="chem">1/3 &lt; 1/2</span>, the median <span class="chem">m</span> lies in <span class="chem">(2, 6]</span>. <span class="chem">P(X &gt; m) = (1/2)(6 - m)(6 - m)/12 = (6 - m)^2/24 = 1/2</span>, so <span class="chem">(6 - m)^2 = 12</span> and <span class="chem">m = 6 - 2sqrt(3)</span> (about 2.54).</p>
      answer: "<p>(a) 그래프는 밑변 <span class=\"chem\">6</span>, 높이 <span class=\"chem\">f(2) = 2k</span>인 삼각형이므로 넓이는 <span class=\"chem\">(1/2)(6)(2k) = 6k = 1</span>이고, <span class=\"chem\">k = 1/6</span>.<br>(b) 최빈값 <span class=\"chem\">= 2</span>.<br>(c) <span class=\"chem\">P(X &lt; 2) = (1/2)(2)(1/3) = 1/3</span>.<br>(d) <span class=\"chem\">1/3 &lt; 1/2</span>이므로 중앙값 <span class=\"chem\">m</span>은 <span class=\"chem\">(2, 6]</span>에 있다. <span class=\"chem\">P(X &gt; m) = (1/2)(6 - m)(6 - m)/12 = (6 - m)^2/24 = 1/2</span>이므로 <span class=\"chem\">(6 - m)^2 = 12</span>이고 <span class=\"chem\">m = 6 - 2sqrt(3)</span> (약 2.54).</p>",
      markscheme: [
        // EN: M1: (a) Sets total area (or the sum of two integrals) equal to 1, e.g. (1/2)(6)(2k) = 1.
        "M1: (a) 전체 넓이(또는 두 적분의 합)를 1로 놓음. 예: (1/2)(6)(2k) = 1.",
        // EN: A1: (a) Obtains 6k = 1, so k = 1/6 (AG).
        "A1: (a) 6k = 1을 얻어 k = 1/6 (AG).",
        // EN: A1: (b) Mode = 2.
        "A1: (b) 최빈값 = 2.",
        // EN: A1: (c) P(X < 2) = 1/3.
        "A1: (c) P(X < 2) = 1/3.",
        // EN: R1: (d) Recognises the median lies in 2 < x ≤ 6 because P(X < 2) = 1/3 < 1/2.
        "R1: (d) P(X < 2) = 1/3 < 1/2이므로 중앙값이 2 < x ≤ 6에 있음을 인식함.",
        // EN: M1: (d) Sets up an equation for m, e.g. ∫_m^6 (6 − x)/12 dx = 1/2 or 1/3 + ∫_2^m (6 − x)/12 dx = 1/2.
        "M1: (d) m에 대한 방정식을 세움. 예: ∫_m^6 (6 − x)/12 dx = 1/2 또는 1/3 + ∫_2^m (6 − x)/12 dx = 1/2.",
        // EN: A1: (d) Obtains (6 − m)² = 12 (or an equivalent quadratic m² − 12m + 24 = 0).
        "A1: (d) (6 − m)² = 12 (또는 동치인 이차방정식 m² − 12m + 24 = 0)를 얻음.",
        // EN: A1: (d) m = 6 − 2√3, rejecting 6 + 2√3 as outside the domain.
        "A1: (d) m = 6 − 2√3이며, 6 + 2√3은 정의역 밖이므로 제외함.",
      ],
    },

    // ── t4-2-q033 · numeric · challenge · AHL · AHL 4.14 · 6 marks
    "t4-2-q033": {
      // EN: <p>The lifetime <span class="chem">T</span> years of a battery is between <span class="chem">1</span> and <span class="chem">3</span> years, and its probability density function is proportional to <span class="chem">1/t^2</span> on that interval (and zero elsewhere). A replacement policy costs the shop <span class="chem">2T + 1</span> hundred dollars per battery. Find the exact expected cost per battery, in hundreds of dollars.</p>
      stem: "<p>어떤 배터리의 수명 <span class=\"chem\">T</span>년은 <span class=\"chem\">1</span>년과 <span class=\"chem\">3</span>년 사이이고, 그 확률밀도함수는 이 구간에서 <span class=\"chem\">1/t^2</span>에 비례해요(그 외에서는 0). 한 교체 보증 제도로 인해 가게는 배터리 한 개당 <span class=\"chem\">2T + 1</span>백 달러의 비용이 들어요. 배터리 한 개당 비용의 기댓값의 정확한 값을 백 달러 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "proportional to 1/t²" means f(t) = k/t² for 1 ≤ t ≤ 3, with k unknown. "Expected cost" is E(2T + 1), a linear transformation of T.
        "해석: \"1/t²에 비례한다\"는 1 ≤ t ≤ 3에서 f(t) = k/t² (k는 미지수)라는 뜻이에요. \"비용의 기댓값\"은 E(2T + 1), 즉 T의 일차변환이에요.",
        // EN: Find k from ∫₁³ k/t² dt = 1.
        "∫₁³ k/t² dt = 1에서 k를 구하세요.",
        // EN: Then E(T) = ∫₁³ t · k/t² dt = k ln 3, and E(2T + 1) = 2E(T) + 1.
        "그다음 E(T) = ∫₁³ t · k/t² dt = k ln 3이고, E(2T + 1) = 2E(T) + 1이에요.",
      ],
      // EN: <p><b>Decode:</b> write <span class="chem">f(t) = k/t^2</span> on <span class="chem">[1, 3]</span>; the question asks for <span class="chem">E(2T + 1)</span>.<br><span class="chem">∫_1^3 k t^{-2} dt = k[-1/t]_1^3 = k(1 - 1/3) = 2k/3 = 1 ⇒ k = 3/2</span> <b>[M1 A1]</b>.<br><span class="chem">E(T) = ∫_1^3 t (3/2) t^{-2} dt = (3/2)[ln t]_1^3 = (3/2) ln 3</span> <b>[M1 A1]</b>.<br><span class="chem">E(2T + 1) = 2E(T) + 1 = 3 ln 3 + 1</span> (about <span class="chem">4.30</span> hundred dollars) <b>[M1 A1]</b>.</p>
      solution: "<p><b>해석:</b> <span class=\"chem\">[1, 3]</span>에서 <span class=\"chem\">f(t) = k/t^2</span>로 놓아요. 구하는 것은 <span class=\"chem\">E(2T + 1)</span>이에요.<br><span class=\"chem\">∫_1^3 k t^{-2} dt = k[-1/t]_1^3 = k(1 - 1/3) = 2k/3 = 1 ⇒ k = 3/2</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(T) = ∫_1^3 t (3/2) t^{-2} dt = (3/2)[ln t]_1^3 = (3/2) ln 3</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(2T + 1) = 2E(T) + 1 = 3 ln 3 + 1</span> (약 <span class=\"chem\">4.30</span>백 달러) <b>[M1 A1]</b>.</p>",
      // EN: 3 ln 3 + 1
      answerDisplay: "3 ln 3 + 1",
    },

    // ── t4-2-q034 · numeric · foundation · SL · SL 4.5 · 2 marks
    "t4-2-q034": {
      // EN: <p>A spinner is spun <span class="chem">250</span> times and lands on blue <span class="chem">60</span> times. Using the relative frequency as an estimate of the probability of blue, find the expected number of times the spinner lands on blue in a further <span class="chem">175</span> spins.</p>
      stem: "<p>회전판을 <span class=\"chem\">250</span>번 돌렸더니 파란색에 <span class=\"chem\">60</span>번 멈췄어요. 상대도수를 파란색이 나올 확률의 추정값으로 사용하여, <span class=\"chem\">175</span>번 더 돌릴 때 회전판이 파란색에 멈추는 횟수의 기댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: Relative frequency = number of times blue / number of spins.
        "상대도수 = 파란색에 멈춘 횟수 / 돌린 횟수.",
        // EN: Expected number of occurrences = n × P(blue).
        "일어나는 횟수의 기댓값 = n × P(blue).",
      ],
      // EN: <p>Estimated <span class="chem">P(blue) = 60/250 = 0.24</span> <b>[A1]</b>.<br>Expected number <span class="chem">= 175 × 0.24 = 42</span> <b>[A1]</b>.</p>
      solution: "<p>추정값 <span class=\"chem\">P(blue) = 60/250 = 0.24</span> <b>[A1]</b>.<br>횟수의 기댓값 <span class=\"chem\">= 175 × 0.24 = 42</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q035 · short · exam · SL · SL 4.6, 4.11 · 7 marks
    "t4-2-q035": {
      // EN: <p>A box contains <span class="chem">5</span> red pens and <span class="chem">3</span> green pens. Two pens are taken at random, one after the other, without replacement.<br>(a) Show that the probability that both pens are the same colour is <span class="chem">13/28</span>. <strong>[3 marks]</strong><br>(b) Given that both pens are the same colour, find the probability that both are red. <strong>[2 marks]</strong><br>(c) Given that at least one pen is green, find the probability that both are green. <strong>[2 marks]</strong></p>
      stem: "<p>상자에 빨간 펜 <span class=\"chem\">5</span>자루와 초록 펜 <span class=\"chem\">3</span>자루가 들어 있다. 펜을 한 자루씩 차례로 두 자루 무작위로 꺼내며, 꺼낸 펜은 다시 넣지 않는다.<br>(a) 두 펜의 색이 같을 확률이 <span class=\"chem\">13/28</span>임을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 두 펜의 색이 같을 때, 두 펜이 모두 빨간색일 확률을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 적어도 한 자루가 초록색일 때, 두 펜이 모두 초록색일 확률을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Draw a tree. On the second draw there are only 7 pens left.
        "수형도를 그리세요. 두 번째로 꺼낼 때는 펜이 7자루만 남아 있어요.",
        // EN: In (b), "both red" is already inside "same colour", so the intersection is just P(RR).
        "(b)에서 \"둘 다 빨간색\"은 이미 \"같은 색\"에 포함되므로 교집합은 바로 P(RR)예요.",
        // EN: In (c), "at least one green" is the complement of "both red".
        "(c)에서 \"적어도 한 자루가 초록색\"은 \"둘 다 빨간색\"의 여사건이에요.",
      ],
      // EN: <p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span> and <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>, so <span class="chem">P(same) = 26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = P(RR)/P(same) = 20/26 = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - P(RR) = 36/56</span>. Both green is inside this event, so <span class="chem">P(GG | at least one G) = (6/56)/(36/56) = 1/6</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P(RR) = (5/8)(4/7) = 20/56</span>, <span class=\"chem\">P(GG) = (3/8)(2/7) = 6/56</span>이므로 <span class=\"chem\">P(same) = 26/56 = 13/28</span>.<br>(b) <span class=\"chem\">P(RR | same) = P(RR)/P(same) = 20/26 = 10/13</span>.<br>(c) <span class=\"chem\">P(at least one G) = 1 - P(RR) = 36/56</span>. \"둘 다 초록색\"은 이 사건에 포함되므로 <span class=\"chem\">P(GG | at least one G) = (6/56)/(36/56) = 1/6</span>.</p>",
      // EN: <p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span>, <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>; sum <span class="chem">26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = (20/56)/(26/56) = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - 20/56 = 36/56</span>, so <span class="chem">P(GG | at least one G) = 6/36 = 1/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(RR) = (5/8)(4/7) = 20/56</span>, <span class=\"chem\">P(GG) = (3/8)(2/7) = 6/56</span>; 합은 <span class=\"chem\">26/56 = 13/28</span>.<br>(b) <span class=\"chem\">P(RR | same) = (20/56)/(26/56) = 10/13</span>.<br>(c) <span class=\"chem\">P(at least one G) = 1 - 20/56 = 36/56</span>이므로 <span class=\"chem\">P(GG | at least one G) = 6/36 = 1/6</span>.</p>",
      markscheme: [
        // EN: M1: (a) Multiplies along branches without replacement, e.g. (5/8)(4/7) or (3/8)(2/7).
        "M1: (a) 비복원추출로 가지를 따라 곱함. 예: (5/8)(4/7) 또는 (3/8)(2/7).",
        // EN: A1: (a) P(RR) = 20/56 and P(GG) = 6/56.
        "A1: (a) P(RR) = 20/56, P(GG) = 6/56.",
        // EN: A1: (a) Adds to 26/56 = 13/28 (AG).
        "A1: (a) 더하여 26/56 = 13/28 (AG).",
        // EN: M1: (b) Uses P(RR ∩ same)/P(same) with P(RR ∩ same) = P(RR).
        "M1: (b) P(RR ∩ same) = P(RR)로 P(RR ∩ same)/P(same)를 사용함.",
        // EN: A1: (b) 10/13.
        "A1: (b) 10/13.",
        // EN: M1: (c) Finds P(at least one green) = 1 − 20/56 = 36/56 and divides P(GG) by it.
        "M1: (c) P(at least one green) = 1 − 20/56 = 36/56을 구하고 P(GG)를 그것으로 나눔.",
        // EN: A1: (c) 1/6.
        "A1: (c) 1/6.",
      ],
    },

    // ── t4-2-q036 · numeric · exam · SL · SL 4.9 · 2 marks
    "t4-2-q036": {
      // EN: <p>The lengths <span class="chem">L</span> cm of cucumbers from a farm are normally distributed with mean <span class="chem">32.4</span> cm and standard deviation <span class="chem">1.8</span> cm. Find the probability that a randomly chosen cucumber has a length between <span class="chem">30</span> cm and <span class="chem">35</span> cm.</p>
      stem: "<p>어느 농장 오이의 길이 <span class=\"chem\">L</span> cm는 평균 <span class=\"chem\">32.4</span> cm, 표준편차 <span class=\"chem\">1.8</span> cm인 정규분포를 따라요. 무작위로 고른 오이의 길이가 <span class=\"chem\">30</span> cm와 <span class=\"chem\">35</span> cm 사이일 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the probability as <span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span>.
        "<span class=\"chem\">L ~ N(32.4, 1.8^2)</span>로 놓고 확률을 <span class=\"chem\">P(30 &lt; L &lt; 35)</span>로 쓰세요.",
        // EN: Use the normal cdf on your GDC with lower bound 30, upper bound 35, μ = 32.4 and σ = 1.8.
        "GDC의 정규분포 cdf를 하한 30, 상한 35, μ = 32.4, σ = 1.8로 사용하세요.",
      ],
      // EN: <p><span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span> <b>[M1]</b>.<br>GDC (normal cdf, lower 30, upper 35, μ = 32.4, σ = 1.8): <span class="chem">0.834482… ≈ 0.834</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">L ~ N(32.4, 1.8^2)</span>일 때 <span class=\"chem\">P(30 &lt; L &lt; 35)</span> <b>[M1]</b>.<br>GDC (정규분포 cdf, 하한 30, 상한 35, μ = 32.4, σ = 1.8): <span class=\"chem\">0.834482… ≈ 0.834</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q037 · numeric · exam · SL · SL 4.12 · 4 marks
    "t4-2-q037": {
      // EN: <p>A machine fills bottles with water. The volume in a bottle is normally distributed with mean <span class="chem">500</span> ml. Records show that <span class="chem">8%</span> of bottles contain less than <span class="chem">490</span> ml. Find the standard deviation of the volume.</p>
      stem: "<p>한 기계가 병에 물을 채워요. 병에 든 물의 양은 평균이 <span class=\"chem\">500</span> ml인 정규분포를 따라요. 기록에 따르면 병의 <span class=\"chem\">8%</span>는 물이 <span class=\"chem\">490</span> ml 미만이에요. 물의 양의 표준편차를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: σ is unknown, so you cannot use the inverse normal with the original distribution. Standardise instead.
        "해석: σ를 모르므로 원래 분포 그대로는 역정규분포 계산을 쓸 수 없어요. 대신 표준화하세요.",
        // EN: Find z with <span class="chem">P(Z &lt; z) = 0.08</span> from the inverse normal on <span class="chem">N(0, 1)</span>.
        "<span class=\"chem\">N(0, 1)</span>에서 역정규분포로 <span class=\"chem\">P(Z &lt; z) = 0.08</span>인 z를 구하세요.",
        // EN: Solve <span class="chem">(490 - 500)/σ = z</span> for σ.
        "<span class=\"chem\">(490 - 500)/σ = z</span>를 σ에 대해 푸세요.",
      ],
      // EN: <p><span class="chem">P(V &lt; 490) = 0.08 ⇒ P(Z &lt; (490 - 500)/σ) = 0.08</span> <b>[M1]</b>.<br>Inverse normal: <span class="chem">z = -1.40507…</span> <b>[A1]</b>.<br><span class="chem">-10/σ = -1.40507 ⇒ σ = 10/1.40507</span> <b>[M1]</b> <span class="chem">= 7.117… ≈ 7.12</span> ml <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(V &lt; 490) = 0.08 ⇒ P(Z &lt; (490 - 500)/σ) = 0.08</span> <b>[M1]</b>.<br>역정규분포: <span class=\"chem\">z = -1.40507…</span> <b>[A1]</b>.<br><span class=\"chem\">-10/σ = -1.40507 ⇒ σ = 10/1.40507</span> <b>[M1]</b> <span class=\"chem\">= 7.117… ≈ 7.12</span> ml <b>[A1]</b>.</p>",
    },

    // ── t4-2-q038 · short · exam · SL · SL 4.9, 4.12 · 7 marks
    "t4-2-q038": {
      // EN: <p>The time <span class="chem">T</span> seconds that a robot arm takes to complete a task is normally distributed with mean <span class="chem">μ</span> and standard deviation <span class="chem">σ</span>. On <span class="chem">15%</span> of occasions it takes less than <span class="chem">12.0</span> s, and on <span class="chem">10%</span> of occasions it takes more than <span class="chem">14.5</span> s.<br>(a) Write down two equations in <span class="chem">μ</span> and <span class="chem">σ</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">μ</span> and the value of <span class="chem">σ</span>. <strong>[3 marks]</strong><br>(c) Find <span class="chem">P(T &lt; 13)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>로봇 팔이 작업을 마치는 데 걸리는 시간 <span class=\"chem\">T</span>초는 평균 <span class=\"chem\">μ</span>, 표준편차 <span class=\"chem\">σ</span>인 정규분포를 따른다. <span class=\"chem\">15%</span>의 경우에는 <span class=\"chem\">12.0</span> s 미만이 걸리고, <span class=\"chem\">10%</span>의 경우에는 <span class=\"chem\">14.5</span> s 초과가 걸린다.<br>(a) <span class=\"chem\">μ</span>와 <span class=\"chem\">σ</span>에 대한 방정식 두 개를 쓰시오 (Write down). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">μ</span>의 값과 <span class=\"chem\">σ</span>의 값을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) <span class=\"chem\">P(T &lt; 13)</span>을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: both μ and σ are unknown, so turn each percentage into a z-score on N(0, 1) and form two equations of the form (x − μ)/σ = z.
        "해석: μ와 σ를 모두 모르므로, 각 백분율을 N(0, 1)의 z-점수로 바꾸고 (x − μ)/σ = z 꼴의 방정식 두 개를 세우세요.",
        // EN: "More than 14.5 s on 10% of occasions" means P(T &lt; 14.5) = 0.90.
        "\"10%의 경우에 14.5 s 초과\"는 P(T &lt; 14.5) = 0.90을 뜻해요.",
        // EN: Subtract one equation from the other to eliminate μ. Keep full GDC precision for part (c).
        "한 방정식에서 다른 방정식을 빼서 μ를 소거하세요. (c)에서는 GDC 값을 반올림하지 말고 그대로 쓰세요.",
      ],
      // EN: <p>(a) <span class="chem">P(Z &lt; z_1) = 0.15 ⇒ z_1 = -1.036433</span> and <span class="chem">P(Z &lt; z_2) = 0.90 ⇒ z_2 = 1.281552</span>, so <span class="chem">12 - μ = -1.036433σ</span> and <span class="chem">14.5 - μ = 1.281552σ</span>.<br>(b) Subtracting: <span class="chem">2.5 = 2.317985σ ⇒ σ = 1.078523</span>, then <span class="chem">μ = 12 + 1.036433(1.078523) = 13.117817</span>. So <span class="chem">μ ≈ 13.1</span> s, <span class="chem">σ ≈ 1.08</span> s.<br>(c) Normal cdf with upper bound 13: <span class="chem">P(T &lt; 13) = 0.456506 ≈ 0.457</span>. (Using the rounded values 13.1 and 1.08 gives 0.463, which loses the final mark.)</p>
      solution: "<p>(a) <span class=\"chem\">P(Z &lt; z_1) = 0.15 ⇒ z_1 = -1.036433</span>, <span class=\"chem\">P(Z &lt; z_2) = 0.90 ⇒ z_2 = 1.281552</span>이므로 <span class=\"chem\">12 - μ = -1.036433σ</span>, <span class=\"chem\">14.5 - μ = 1.281552σ</span>.<br>(b) 빼면: <span class=\"chem\">2.5 = 2.317985σ ⇒ σ = 1.078523</span>, 그다음 <span class=\"chem\">μ = 12 + 1.036433(1.078523) = 13.117817</span>. 따라서 <span class=\"chem\">μ ≈ 13.1</span> s, <span class=\"chem\">σ ≈ 1.08</span> s.<br>(c) 상한 13인 정규분포 cdf: <span class=\"chem\">P(T &lt; 13) = 0.456506 ≈ 0.457</span>. (반올림한 값 13.1과 1.08을 쓰면 0.463이 되어 마지막 점수를 잃어요.)</p>",
      // EN: <p>(a) <span class="chem">(12 - μ)/σ = -1.03643</span> and <span class="chem">(14.5 - μ)/σ = 1.28155</span>.<br>(b) <span class="chem">σ = 1.07852… ≈ 1.08</span> s and <span class="chem">μ = 13.1178… ≈ 13.1</span> s.<br>(c) <span class="chem">P(T &lt; 13) = 0.457</span> (0.456506…).</p>
      answer: "<p>(a) <span class=\"chem\">(12 - μ)/σ = -1.03643</span>, <span class=\"chem\">(14.5 - μ)/σ = 1.28155</span>.<br>(b) <span class=\"chem\">σ = 1.07852… ≈ 1.08</span> s, <span class=\"chem\">μ = 13.1178… ≈ 13.1</span> s.<br>(c) <span class=\"chem\">P(T &lt; 13) = 0.457</span> (0.456506…).</p>",
      markscheme: [
        // EN: A1: (a) (12 − μ)/σ = −1.03643 (from the inverse normal of 0.15).
        "A1: (a) (12 − μ)/σ = −1.03643 (0.15의 역정규분포로부터).",
        // EN: A1: (a) (14.5 − μ)/σ = 1.28155 (from the inverse normal of 0.90).
        "A1: (a) (14.5 − μ)/σ = 1.28155 (0.90의 역정규분포로부터).",
        // EN: M1: (b) Solves the two linear equations simultaneously, e.g. 2.5 = (1.28155 + 1.03643)σ.
        "M1: (b) 두 일차방정식을 연립하여 풂. 예: 2.5 = (1.28155 + 1.03643)σ.",
        // EN: A1: (b) σ = 1.08 (1.07852…).
        "A1: (b) σ = 1.08 (1.07852…).",
        // EN: A1: (b) μ = 13.1 (13.1178…).
        "A1: (b) μ = 13.1 (13.1178…).",
        // EN: M1: (c) Uses the normal cdf with the unrounded μ and σ.
        "M1: (c) 반올림하지 않은 μ와 σ로 정규분포 cdf를 사용함.",
        // EN: A1: (c) P(T < 13) = 0.457 (0.456506…).
        "A1: (c) P(T < 13) = 0.457 (0.456506…).",
      ],
    },

    // ── t4-2-q039 · numeric · challenge · SL · SL 4.12 · 4 marks
    "t4-2-q039": {
      // EN: <p>Bags of rice are labelled "<span class="chem">250</span> g". The filling machine produces masses that are normally distributed with a <strong>variance</strong> of <span class="chem">16</span> g², and its mean setting <span class="chem">μ</span> can be adjusted. A consumer rule says that no more than <span class="chem">2%</span> of bags may weigh less than the labelled mass. Find the smallest value of <span class="chem">μ</span> that satisfies the rule.</p>
      stem: "<p>쌀 봉지에 \"<span class=\"chem\">250</span> g\"이라고 표시되어 있어요. 충전 기계가 담는 쌀의 질량은 <strong>분산</strong>이 <span class=\"chem\">16</span> g²인 정규분포를 따르고, 평균 설정값 <span class=\"chem\">μ</span>는 조정할 수 있어요. 소비자 규정에 따르면 표시 질량보다 가벼운 봉지는 <span class=\"chem\">2%</span> 이하여야 해요. 이 규정을 만족하는 <span class=\"chem\">μ</span>의 최솟값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the unknown is the mean. Two hidden details: the variance is given (so σ = 4, not 16), and "no more than 2%" means P(M &lt; 250) ≤ 0.02.
        "해석: 미지수는 평균이에요. 숨은 세부 사항이 두 가지 있어요: 주어진 것은 분산이므로 σ = 4 (16이 아님)이고, \"2% 이하\"는 P(M &lt; 250) ≤ 0.02를 뜻해요.",
        // EN: Standardise: P(Z &lt; (250 − μ)/4) = 0.02 gives the boundary value of μ.
        "표준화하세요: P(Z &lt; (250 − μ)/4) = 0.02에서 μ의 경계값이 나와요.",
        // EN: Inverse normal of 0.02 on N(0, 1) is about −2.0537. A larger μ makes the underweight tail smaller.
        "N(0, 1)에서 0.02의 역정규분포 값은 약 −2.0537이에요. μ가 클수록 무게 미달 쪽 꼬리가 작아져요.",
      ],
      // EN: <p><b>Decode:</b> <span class="chem">σ = sqrt(16) = 4</span>, and we need <span class="chem">P(M &lt; 250) ≤ 0.02</span> with <span class="chem">μ</span> unknown <b>[M1]</b>.<br>Boundary case: <span class="chem">(250 - μ)/4 = z</span> where <span class="chem">P(Z &lt; z) = 0.02 ⇒ z = -2.053749</span> <b>[A1]</b>.<br><span class="chem">μ = 250 + 4(2.053749) = 258.215</span> <b>[M1]</b>.<br>Increasing <span class="chem">μ</span> shrinks the tail below 250 g, so the smallest mean is <span class="chem">μ ≈ 258</span> g (258.21…) <b>[A1]</b>.<br>Note: 258 is the 3 s.f. answer the markscheme expects, but a machine actually set to exactly 258 g would give <span class="chem">P(M &lt; 250) = 0.0228</span>, just over 2%. In practice the setting must be rounded up (for example to 258.3 g).</p>
      solution: "<p><b>해석:</b> <span class=\"chem\">σ = sqrt(16) = 4</span>이고, <span class=\"chem\">μ</span>를 모르는 상태에서 <span class=\"chem\">P(M &lt; 250) ≤ 0.02</span>가 되어야 해요 <b>[M1]</b>.<br>경계인 경우: <span class=\"chem\">(250 - μ)/4 = z</span>, 여기서 <span class=\"chem\">P(Z &lt; z) = 0.02 ⇒ z = -2.053749</span> <b>[A1]</b>.<br><span class=\"chem\">μ = 250 + 4(2.053749) = 258.215</span> <b>[M1]</b>.<br><span class=\"chem\">μ</span>를 키우면 250 g 미만인 꼬리가 줄어들므로, 평균의 최솟값은 <span class=\"chem\">μ ≈ 258</span> g (258.21…)이에요 <b>[A1]</b>.<br>주의: 258은 채점 기준이 기대하는 유효숫자 3자리 답이지만, 기계를 실제로 정확히 258 g으로 설정하면 <span class=\"chem\">P(M &lt; 250) = 0.0228</span>이 되어 2%를 약간 넘어요. 실제로는 설정값을 올림해야 해요(예: 258.3 g).</p>",
    },

    // ── t4-2-q040 · numeric · exam · SL · SL 4.8 · 3 marks
    "t4-2-q040": {
      // EN: <p>For a certain variety of sweet pea, <span class="chem">15%</span> of seeds produce white flowers, independently of each other. A gardener plants <span class="chem">20</span> seeds and all of them flower. Find the probability that at least <span class="chem">2</span> but no more than <span class="chem">5</span> of the plants have white flowers.</p>
      stem: "<p>어떤 품종의 스위트피는 씨앗의 <span class=\"chem\">15%</span>가 서로 독립적으로 흰 꽃을 피워요. 정원사가 씨앗 <span class=\"chem\">20</span>개를 심었고 모두 꽃을 피웠어요. 흰 꽃을 피운 식물이 적어도 <span class=\"chem\">2</span>그루, 많아야 <span class=\"chem\">5</span>그루일 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Let <span class="chem">X ~ B(20, 0.15)</span>. "At least 2 but no more than 5" is <span class="chem">2 ≤ X ≤ 5</span>.
        "<span class=\"chem\">X ~ B(20, 0.15)</span>라 하세요. \"적어도 2그루, 많아야 5그루\"는 <span class=\"chem\">2 ≤ X ≤ 5</span>예요.",
        // EN: With a cumulative binomial: <span class="chem">P(X ≤ 5) - P(X ≤ 1)</span>.
        "누적 이항분포를 사용하면: <span class=\"chem\">P(X ≤ 5) - P(X ≤ 1)</span>.",
      ],
      // EN: <p><span class="chem">X ~ B(20, 0.15)</span> <b>[M1]</b>.<br><span class="chem">P(2 ≤ X ≤ 5) = P(X ≤ 5) - P(X ≤ 1) = 0.932692 - 0.175558</span> <b>[M1]</b> <span class="chem">= 0.757134 ≈ 0.757</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">X ~ B(20, 0.15)</span> <b>[M1]</b>.<br><span class=\"chem\">P(2 ≤ X ≤ 5) = P(X ≤ 5) - P(X ≤ 1) = 0.932692 - 0.175558</span> <b>[M1]</b> <span class=\"chem\">= 0.757134 ≈ 0.757</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q041 · short · exam · SL · SL 4.8 · 7 marks
    "t4-2-q041": {
      // EN: <p>A quiz has <span class="chem">12</span> multiple-choice questions, each with <span class="chem">4</span> options of which exactly one is correct. Sam guesses every answer at random. Let <span class="chem">X</span> be the number of questions Sam answers correctly.<br>(a) Write down <span class="chem">E(X)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(X = 3)</span>. <strong>[2 marks]</strong><br>(c) The pass mark is <span class="chem">6</span>. Find the probability that Sam passes. <strong>[2 marks]</strong><br>(d) Find the probability that Sam scores more than his expected score. <strong>[2 marks]</strong></p>
      stem: "<p>어떤 퀴즈는 <span class=\"chem\">12</span>개의 객관식 문제로 이루어져 있고, 각 문제에는 <span class=\"chem\">4</span>개의 선택지가 있으며 그중 정확히 하나만 정답이다. Sam은 모든 문제를 무작위로 찍어서 답한다. <span class=\"chem\">X</span>를 Sam이 맞힌 문제 수라 하자.<br>(a) <span class=\"chem\">E(X)</span>를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">P(X = 3)</span>을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 합격 점수는 <span class=\"chem\">6</span>이다. Sam이 합격할 확률을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) Sam의 점수가 그의 점수의 기댓값보다 클 확률을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Each question is an independent trial with p = 1/4, so X ~ B(12, 0.25).
        "각 문제는 p = 1/4인 독립시행이므로 X ~ B(12, 0.25)예요.",
        // EN: For "at least 6", the cumulative function gives P(X ≤ 5); subtract it from 1.
        "\"6 이상\"은 누적분포함수로 P(X ≤ 5)를 구한 뒤 1에서 빼세요.",
        // EN: "More than his expected score" means X &gt; 3, that is X ≥ 4.
        "\"점수의 기댓값보다 크다\"는 X &gt; 3, 즉 X ≥ 4를 뜻해요.",
      ],
      // EN: <p>(a) <span class="chem">E(X) = np = 12(0.25) = 3</span>.<br>(b) Binomial pdf: <span class="chem">P(X = 3) = ¹²C₃ (0.25)^3 (0.75)^9 = 0.258104 ≈ 0.258</span>.<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 1 - 0.945598 = 0.0544</span>.<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 1 - 0.648779 = 0.351</span>.</p>
      solution: "<p>(a) <span class=\"chem\">E(X) = np = 12(0.25) = 3</span>.<br>(b) 이항분포 pdf: <span class=\"chem\">P(X = 3) = ¹²C₃ (0.25)^3 (0.75)^9 = 0.258104 ≈ 0.258</span>.<br>(c) <span class=\"chem\">P(X ≥ 6) = 1 - P(X ≤ 5) = 1 - 0.945598 = 0.0544</span>.<br>(d) <span class=\"chem\">P(X &gt; 3) = 1 - P(X ≤ 3) = 1 - 0.648779 = 0.351</span>.</p>",
      // EN: <p>(a) <span class="chem">E(X) = 12 × 0.25 = 3</span>.<br>(b) <span class="chem">P(X = 3) = 0.258</span> (0.258104…).<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 0.0544</span> (0.054402…).<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 0.351</span> (0.351221…).</p>
      answer: "<p>(a) <span class=\"chem\">E(X) = 12 × 0.25 = 3</span>.<br>(b) <span class=\"chem\">P(X = 3) = 0.258</span> (0.258104…).<br>(c) <span class=\"chem\">P(X ≥ 6) = 1 - P(X ≤ 5) = 0.0544</span> (0.054402…).<br>(d) <span class=\"chem\">P(X &gt; 3) = 1 - P(X ≤ 3) = 0.351</span> (0.351221…).</p>",
      markscheme: [
        // EN: A1: (a) E(X) = 3.
        "A1: (a) E(X) = 3.",
        // EN: M1: (b) Recognises X ~ B(12, 0.25) and uses the binomial pdf.
        "M1: (b) X ~ B(12, 0.25)임을 인식하고 이항분포 pdf를 사용함.",
        // EN: A1: (b) 0.258.
        "A1: (b) 0.258.",
        // EN: M1: (c) Writes P(X ≥ 6) = 1 − P(X ≤ 5).
        "M1: (c) P(X ≥ 6) = 1 − P(X ≤ 5)라고 씀.",
        // EN: A1: (c) 0.0544.
        "A1: (c) 0.0544.",
        // EN: M1: (d) Writes P(X > 3) = 1 − P(X ≤ 3) (not 1 − P(X ≤ 4)).
        "M1: (d) P(X > 3) = 1 − P(X ≤ 3)라고 씀 (1 − P(X ≤ 4)가 아님).",
        // EN: A1: (d) 0.351.
        "A1: (d) 0.351.",
      ],
    },

    // ── t4-2-q042 · numeric · challenge · SL · SL 4.8 · 5 marks
    "t4-2-q042": {
      // EN: <p>Each component made on a production line has a <span class="chem">12%</span> chance of having a flaw, independently of the others. An inspector wants to pick a sample large enough that the probability of finding <strong>at least two</strong> flawed components is greater than <span class="chem">0.9</span>. Find the smallest sample size that achieves this.</p>
      stem: "<p>생산 라인에서 만드는 부품은 각각 다른 부품과 독립적으로 <span class=\"chem\">12%</span>의 확률로 결함이 있어요. 검사원은 결함 부품을 <strong>적어도 두 개</strong> 발견할 확률이 <span class=\"chem\">0.9</span>보다 크도록 충분히 큰 표본을 뽑으려고 해요. 이를 만족하는 최소 표본 크기를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the unknown is n in X ~ B(n, 0.12), and "at least two" means P(X ≥ 2) = 1 − P(X = 0) − P(X = 1). Unlike "at least one", this does not reduce to a single logarithm.
        "해석: 미지수는 X ~ B(n, 0.12)의 n이고, \"적어도 두 개\"는 P(X ≥ 2) = 1 − P(X = 0) − P(X = 1)을 뜻해요. \"적어도 한 개\"와 달리, 이것은 로그 한 번으로 풀리지 않아요.",
        // EN: Write 1 − 0.88ⁿ − 0.12n(0.88)ⁿ⁻¹ &gt; 0.9 and use a GDC table (or graph) of this expression against n.
        "1 − 0.88ⁿ − 0.12n(0.88)ⁿ⁻¹ &gt; 0.9로 쓰고, 이 식을 n에 대해 GDC 표(또는 그래프)로 살펴보세요.",
        // EN: Check the two neighbouring values of n either side of 0.9 and give the first one that exceeds it.
        "0.9를 사이에 둔 이웃한 두 n 값을 확인하고, 처음으로 그 값을 넘는 값을 답하세요.",
      ],
      // EN: <p><b>Decode:</b> find the least <span class="chem">n</span> with <span class="chem">P(X ≥ 2) &gt; 0.9</span> where <span class="chem">X ~ B(n, 0.12)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 2) = 1 - 0.88^n - 0.12n(0.88)^{n-1}</span> <b>[A1]</b>.<br>From a GDC table: <span class="chem">n = 30</span> gives <span class="chem">0.890</span> <b>[A1]</b>; <span class="chem">n = 31</span> gives <span class="chem">0.901</span> <b>[A1]</b>.<br>So the smallest sample size is <span class="chem">n = 31</span> <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> <span class=\"chem\">X ~ B(n, 0.12)</span>일 때 <span class=\"chem\">P(X ≥ 2) &gt; 0.9</span>인 최소의 <span class=\"chem\">n</span>을 구해요 <b>[M1]</b>.<br><span class=\"chem\">P(X ≥ 2) = 1 - 0.88^n - 0.12n(0.88)^{n-1}</span> <b>[A1]</b>.<br>GDC 표에서: <span class=\"chem\">n = 30</span>이면 <span class=\"chem\">0.890</span> <b>[A1]</b>; <span class=\"chem\">n = 31</span>이면 <span class=\"chem\">0.901</span> <b>[A1]</b>.<br>따라서 최소 표본 크기는 <span class=\"chem\">n = 31</span>이에요 <b>[A1]</b>.</p>",
    },

    // ── t4-2-q043 · short · challenge · SL · SL 4.8, 4.9, 4.11 · 8 marks
    "t4-2-q043": {
      // EN: <p>The masses of hens' eggs from a farm are normally distributed with mean <span class="chem">62</span> g and standard deviation <span class="chem">4.5</span> g. An egg is graded "large" if its mass exceeds <span class="chem">66</span> g. Eggs are packed at random in boxes of <span class="chem">12</span>.<br>(a) Find the probability that a randomly chosen egg is large. <strong>[2 marks]</strong><br>(b) Find the probability that a box contains at least <span class="chem">3</span> large eggs. <strong>[3 marks]</strong><br>(c) A box is known to contain at least <span class="chem">3</span> large eggs. Find the probability that it contains exactly <span class="chem">3</span> large eggs. <strong>[3 marks]</strong></p>
      stem: "<p>어느 농장 달걀의 무게는 평균 <span class=\"chem\">62</span> g, 표준편차 <span class=\"chem\">4.5</span> g인 정규분포를 따른다. 무게가 <span class=\"chem\">66</span> g을 넘는 달걀은 \"대란\"으로 분류된다. 달걀은 무작위로 <span class=\"chem\">12</span>개씩 상자에 담긴다.<br>(a) 무작위로 고른 달걀 하나가 대란일 확률을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 한 상자에 대란이 적어도 <span class=\"chem\">3</span>개 들어 있을 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) 어떤 상자에 대란이 적어도 <span class=\"chem\">3</span>개 들어 있다는 것을 알고 있다. 그 상자에 대란이 정확히 <span class=\"chem\">3</span>개 들어 있을 확률을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two distributions are hidden here. A single egg mass is normal; the NUMBER of large eggs in a box is binomial with p from the normal step. Part (c) is a conditional probability on that binomial.
        "해석: 여기에는 두 분포가 숨어 있어요. 달걀 하나의 무게는 정규분포를 따르고, 한 상자 속 대란의 \"개수\"는 정규분포 단계에서 얻은 p를 갖는 이항분포를 따라요. (c)는 그 이항분포에 대한 조건부확률이에요.",
        // EN: Keep p to at least 5 significant figures before using it in B(12, p).
        "B(12, p)에 사용하기 전에 p를 유효숫자 5자리 이상으로 유지하세요.",
        // EN: In (c), the event "exactly 3" is inside "at least 3", so the intersection is just P(Y = 3).
        "(c)에서 사건 \"정확히 3개\"는 \"적어도 3개\"에 포함되므로 교집합은 바로 P(Y = 3)이에요.",
      ],
      // EN: <p><b>Decode:</b> normal model for one egg → binomial model for the count in a box → conditional probability.<br>(a) <span class="chem">p = P(M &gt; 66) = 0.187031</span>.<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.395413 ≈ 0.395</span>.<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.564650 ≈ 0.565</span>.</p>
      solution: "<p><b>해석:</b> 달걀 하나는 정규분포 모델 → 상자 속 개수는 이항분포 모델 → 조건부확률.<br>(a) <span class=\"chem\">p = P(M &gt; 66) = 0.187031</span>.<br>(b) <span class=\"chem\">Y ~ B(12, 0.187031)</span>; <span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.395413 ≈ 0.395</span>.<br>(c) <span class=\"chem\">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.564650 ≈ 0.565</span>.</p>",
      // EN: <p>(a) <span class="chem">p = P(M &gt; 66) = 0.187</span> (0.187031…).<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>: <span class="chem">P(Y ≥ 3) = 0.395</span> (0.395413…).<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.565</span>.</p>
      answer: "<p>(a) <span class=\"chem\">p = P(M &gt; 66) = 0.187</span> (0.187031…).<br>(b) <span class=\"chem\">Y ~ B(12, 0.187031)</span>: <span class=\"chem\">P(Y ≥ 3) = 0.395</span> (0.395413…).<br>(c) <span class=\"chem\">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.565</span>.</p>",
      markscheme: [
        // EN: M1: (a) Uses the normal cdf for P(M > 66) with M ~ N(62, 4.5²).
        "M1: (a) M ~ N(62, 4.5²)로 P(M > 66)에 정규분포 cdf를 사용함.",
        // EN: A1: (a) 0.187 (0.187031…).
        "A1: (a) 0.187 (0.187031…).",
        // EN: M1: (b) Recognises Y ~ B(12, p) with p from (a).
        "M1: (b) (a)의 p로 Y ~ B(12, p)임을 인식함.",
        // EN: M1: (b) Writes P(Y ≥ 3) = 1 − P(Y ≤ 2).
        "M1: (b) P(Y ≥ 3) = 1 − P(Y ≤ 2)라고 씀.",
        // EN: A1: (b) 0.395 (0.395413…).
        "A1: (b) 0.395 (0.395413…).",
        // EN: M1: (c) Uses P(Y = 3 ∩ Y ≥ 3)/P(Y ≥ 3) = P(Y = 3)/P(Y ≥ 3).
        "M1: (c) P(Y = 3 ∩ Y ≥ 3)/P(Y ≥ 3) = P(Y = 3)/P(Y ≥ 3)를 사용함.",
        // EN: A1: (c) P(Y = 3) = 0.223 (0.223270…).
        "A1: (c) P(Y = 3) = 0.223 (0.223270…).",
        // EN: A1: (c) 0.565 (accept 0.564 to 0.565).
        "A1: (c) 0.565 (0.564부터 0.565까지 인정).",
      ],
    },

    // ── t4-2-q044 · numeric · exam · SL · SL 4.9, 4.11 · 4 marks
    "t4-2-q044": {
      // EN: <p>The heights of adult men in a country are normally distributed with mean <span class="chem">170</span> cm and standard deviation <span class="chem">8</span> cm. A man is chosen at random and is found to be taller than <span class="chem">180</span> cm. Find the probability that he is taller than <span class="chem">185</span> cm.</p>
      stem: "<p>어느 나라 성인 남성의 키는 평균 <span class=\"chem\">170</span> cm, 표준편차 <span class=\"chem\">8</span> cm인 정규분포를 따라요. 무작위로 고른 남성의 키가 <span class=\"chem\">180</span> cm보다 크다는 것을 알았어요. 그의 키가 <span class=\"chem\">185</span> cm보다 클 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "is found to be taller than 180 cm" is the condition. You want P(H &gt; 185 | H &gt; 180).
        "해석: \"180 cm보다 크다는 것을 알았다\"가 조건이에요. 구하는 것은 P(H &gt; 185 | H &gt; 180)이에요.",
        // EN: The event H &gt; 185 is inside H &gt; 180, so the intersection is just P(H &gt; 185).
        "사건 H &gt; 185는 H &gt; 180에 포함되므로 교집합은 바로 P(H &gt; 185)예요.",
        // EN: Divide P(H &gt; 185) by P(H &gt; 180), both from the normal cdf.
        "P(H &gt; 185)를 P(H &gt; 180)으로 나누세요. 둘 다 정규분포 cdf로 구해요.",
      ],
      // EN: <p><span class="chem">P(H &gt; 185 | H &gt; 180) = P(H &gt; 185)/P(H &gt; 180)</span> <b>[M1]</b>.<br><span class="chem">P(H &gt; 185) = 0.0303964</span> <b>[A1]</b>, <span class="chem">P(H &gt; 180) = 0.105650</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.287709 ≈ 0.288</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(H &gt; 185 | H &gt; 180) = P(H &gt; 185)/P(H &gt; 180)</span> <b>[M1]</b>.<br><span class=\"chem\">P(H &gt; 185) = 0.0303964</span> <b>[A1]</b>, <span class=\"chem\">P(H &gt; 180) = 0.105650</span> <b>[A1]</b>.<br>비 <span class=\"chem\">= 0.287709 ≈ 0.288</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q045 · short · challenge · SL · SL 4.8, 4.9, 4.11 · 8 marks
    "t4-2-q045": {
      // EN: <p>The masses of oranges picked at an orchard are normally distributed with mean <span class="chem">150</span> g and standard deviation <span class="chem">20</span> g. Oranges lighter than <span class="chem">120</span> g are rejected; all others are accepted for sale. Accepted oranges heavier than <span class="chem">180</span> g are sold as "premium".<br>(a) Find the probability that an orange is rejected. <strong>[2 marks]</strong><br>(b) Find the probability that an accepted orange is premium. <strong>[3 marks]</strong><br>(c) A crate contains <span class="chem">30</span> accepted oranges chosen at random. Find the probability that at least <span class="chem">3</span> of them are premium. <strong>[3 marks]</strong></p>
      stem: "<p>어느 과수원에서 딴 오렌지의 무게는 평균 <span class=\"chem\">150</span> g, 표준편차 <span class=\"chem\">20</span> g인 정규분포를 따른다. <span class=\"chem\">120</span> g보다 가벼운 오렌지는 불합격 처리되고, 나머지는 모두 판매용으로 합격된다. 합격한 오렌지 중 <span class=\"chem\">180</span> g보다 무거운 것은 \"프리미엄\"으로 판매된다.<br>(a) 오렌지 하나가 불합격될 확률을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 합격한 오렌지 하나가 프리미엄일 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) 한 상자에 무작위로 고른 합격 오렌지 <span class=\"chem\">30</span>개가 들어 있다. 그중 적어도 <span class=\"chem\">3</span>개가 프리미엄일 확률을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "an accepted orange is premium" is a conditional probability: the condition is M ≥ 120. The crate in (c) contains only accepted oranges, so its success probability is the conditional one from (b).
        "해석: \"합격한 오렌지가 프리미엄이다\"는 조건부확률이고, 조건은 M ≥ 120이에요. (c)의 상자에는 합격한 오렌지만 들어 있으므로, 성공 확률은 (b)의 조건부확률이에요.",
        // EN: 120 and 180 are each 30 g from the mean, so P(M &gt; 180) = P(M &lt; 120).
        "120과 180은 모두 평균에서 30 g 떨어져 있으므로 P(M &gt; 180) = P(M &lt; 120)이에요.",
        // EN: In (c), use B(30, p) with p from (b) and the complement of "at most 2".
        "(c)에서는 (b)의 p로 B(30, p)를 사용하고 \"많아야 2개\"의 여사건을 이용하세요.",
      ],
      // EN: <p><b>Decode:</b> the condition "accepted" shrinks the sample space to <span class="chem">M ≥ 120</span>; every later probability lives inside it.<br>(a) <span class="chem">P(M &lt; 120) = 0.0668072 ≈ 0.0668</span>.<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = P(M &gt; 180)/P(M ≥ 120) = 0.0668072/(1 - 0.0668072) = 0.0715899 ≈ 0.0716</span>.<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.364620 ≈ 0.365</span>.</p>
      solution: "<p><b>해석:</b> 조건 \"합격\"이 표본공간을 <span class=\"chem\">M ≥ 120</span>으로 줄이고, 이후의 모든 확률은 그 안에서 생각해요.<br>(a) <span class=\"chem\">P(M &lt; 120) = 0.0668072 ≈ 0.0668</span>.<br>(b) <span class=\"chem\">P(M &gt; 180 | M ≥ 120) = P(M &gt; 180)/P(M ≥ 120) = 0.0668072/(1 - 0.0668072) = 0.0715899 ≈ 0.0716</span>.<br>(c) <span class=\"chem\">Y ~ B(30, 0.0715899)</span>; <span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.364620 ≈ 0.365</span>.</p>",
      // EN: <p>(a) <span class="chem">P(M &lt; 120) = 0.0668</span> (0.0668072…).<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = 0.0668072/0.933193 = 0.0716</span> (0.0715899…).<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>, <span class="chem">P(Y ≥ 3) = 0.365</span> (0.364620…).</p>
      answer: "<p>(a) <span class=\"chem\">P(M &lt; 120) = 0.0668</span> (0.0668072…).<br>(b) <span class=\"chem\">P(M &gt; 180 | M ≥ 120) = 0.0668072/0.933193 = 0.0716</span> (0.0715899…).<br>(c) <span class=\"chem\">Y ~ B(30, 0.0715899)</span>, <span class=\"chem\">P(Y ≥ 3) = 0.365</span> (0.364620…).</p>",
      markscheme: [
        // EN: M1: (a) Uses the normal cdf for P(M < 120).
        "M1: (a) P(M < 120)에 정규분포 cdf를 사용함.",
        // EN: A1: (a) 0.0668.
        "A1: (a) 0.0668.",
        // EN: M1: (b) Sets up P(M > 180 | M ≥ 120) = P(M > 180)/P(M ≥ 120), noting M > 180 lies inside M ≥ 120.
        "M1: (b) M > 180이 M ≥ 120에 포함됨에 주목하여 P(M > 180 | M ≥ 120) = P(M > 180)/P(M ≥ 120)을 세움.",
        // EN: A1: (b) Numerator 0.0668072 and denominator 0.933193 (by symmetry the numerator equals (a)).
        "A1: (b) 분자 0.0668072, 분모 0.933193 (대칭성에 의해 분자는 (a)와 같음).",
        // EN: A1: (b) 0.0716.
        "A1: (b) 0.0716.",
        // EN: M1: (c) Recognises Y ~ B(30, p) with p from (b), not from P(M > 180).
        "M1: (c) P(M > 180)이 아니라 (b)의 p로 Y ~ B(30, p)임을 인식함.",
        // EN: M1: (c) Uses P(Y ≥ 3) = 1 − P(Y ≤ 2).
        "M1: (c) P(Y ≥ 3) = 1 − P(Y ≤ 2)를 사용함.",
        // EN: A1: (c) 0.365 (accept 0.364 to 0.365).
        "A1: (c) 0.365 (0.364부터 0.365까지 인정).",
      ],
    },

    // ── t4-2-q046 · numeric · challenge · AHL · AHL 4.13, SL 4.9 · 6 marks
    "t4-2-q046": {
      // EN: <p>A workshop cuts metal rods on three machines. Machine A makes <span class="chem">50%</span> of the rods, with lengths <span class="chem">N(50.0, 0.4^2)</span> cm; machine B makes <span class="chem">30%</span>, with lengths <span class="chem">N(50.3, 0.5^2)</span> cm; machine C makes the rest, with lengths <span class="chem">N(49.8, 0.6^2)</span> cm. A rod longer than <span class="chem">50.8</span> cm is classed as oversize. A rod chosen at random is oversize. Find the probability that it was made by machine B.</p>
      stem: "<p>한 작업장에서 기계 세 대로 금속 막대를 잘라요. 기계 A는 막대의 <span class=\"chem\">50%</span>를 만들고 길이는 <span class=\"chem\">N(50.0, 0.4^2)</span> cm, 기계 B는 <span class=\"chem\">30%</span>를 만들고 길이는 <span class=\"chem\">N(50.3, 0.5^2)</span> cm, 기계 C는 나머지를 만들고 길이는 <span class=\"chem\">N(49.8, 0.6^2)</span> cm예요. <span class=\"chem\">50.8</span> cm보다 긴 막대는 규격 초과로 분류돼요. 무작위로 고른 막대가 규격 초과였어요. 그 막대가 기계 B에서 만들어졌을 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: you know the effect (oversize) and want the cause (machine B). That is Bayes' theorem with a three-way partition; each conditional probability P(O | machine) comes from a different normal distribution.
        "해석: 결과(규격 초과)를 알고 원인(기계 B)을 구하려는 것이므로, 세 갈래로 분할한 베이즈 정리예요. 각 조건부확률 P(O | machine)은 서로 다른 정규분포에서 나와요.",
        // EN: Find P(L &gt; 50.8) for each machine with the normal cdf. Machine C makes 20% of the rods.
        "각 기계에 대해 정규분포 cdf로 P(L &gt; 50.8)을 구하세요. 기계 C는 막대의 20%를 만들어요.",
        // EN: P(B | O) = 0.3 P(O | B) / [0.5 P(O | A) + 0.3 P(O | B) + 0.2 P(O | C)].
        "P(B | O) = 0.3 P(O | B) / [0.5 P(O | A) + 0.3 P(O | B) + 0.2 P(O | C)].",
      ],
      // EN: <p><b>Decode:</b> reverse the condition with Bayes' theorem; the likelihoods are normal tail areas.<br><span class="chem">P(O | A) = 0.0227501, P(O | B) = 0.158655, P(O | C) = 0.0477904</span> <b>[M1 A1]</b>.<br><span class="chem">P(O) = 0.5(0.0227501) + 0.3(0.158655) + 0.2(0.0477904) = 0.0685297</span> <b>[M1 A1]</b>.<br><span class="chem">P(B | O) = 0.0475966/0.0685297 = 0.694539 ≈ 0.695</span> <b>[M1 A1]</b>.</p>
      solution: "<p><b>해석:</b> 베이즈 정리로 조건을 뒤집어요. 우도는 정규분포의 꼬리 넓이예요.<br><span class=\"chem\">P(O | A) = 0.0227501, P(O | B) = 0.158655, P(O | C) = 0.0477904</span> <b>[M1 A1]</b>.<br><span class=\"chem\">P(O) = 0.5(0.0227501) + 0.3(0.158655) + 0.2(0.0477904) = 0.0685297</span> <b>[M1 A1]</b>.<br><span class=\"chem\">P(B | O) = 0.0475966/0.0685297 = 0.694539 ≈ 0.695</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q047 · short · exam · AHL · AHL 4.14 · 9 marks
    "t4-2-q047": {
      // EN: <p>The time <span class="chem">X</span> hours that a phone battery lasts after a warning light comes on has probability density function <span class="chem">f(x) = kxe^{-x}</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise.<br>(a) Find the value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">P(1 &lt; X &lt; 2)</span>. <strong>[2 marks]</strong><br>(c) Find the median of <span class="chem">X</span>. <strong>[3 marks]</strong><br>(d) Find <span class="chem">E(X)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>휴대전화의 경고등이 켜진 뒤 배터리가 버티는 시간 <span class=\"chem\">X</span>시간의 확률밀도함수는 <span class=\"chem\">0 ≤ x ≤ 4</span>에서 <span class=\"chem\">f(x) = kxe^{-x}</span>이고, 그 외에서는 <span class=\"chem\">f(x) = 0</span>이다.<br>(a) <span class=\"chem\">k</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2)</span>를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">X</span>의 중앙값을 구하시오 (Find). <strong>[3 marks]</strong><br>(d) <span class=\"chem\">E(X)</span>를 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: All four parts are definite integrals of f; use the numerical integration on your GDC and store k unrounded.
        "네 문항 모두 f의 정적분이에요. GDC의 수치 적분을 사용하고, k는 반올림하지 않고 저장해 두세요.",
        // EN: For the median, graph y = ∫_0^x kte^{−t} dt (or use a solver) and find where it equals 0.5.
        "중앙값은 y = ∫_0^x kte^{−t} dt의 그래프를 그리거나(또는 solver를 사용해) 그 값이 0.5가 되는 곳을 찾으세요.",
        // EN: E(X) = ∫_0^4 x f(x) dx.
        "E(X) = ∫_0^4 x f(x) dx.",
      ],
      // EN: <p>(a) GDC: <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1/0.908422 = 1.10081 ≈ 1.10</span>. (Exactly <span class="chem">k = 1/(1 - 5e^{-4})</span>.)<br>(b) <span class="chem">∫_1^2 kxe^{-x} dx = 0.362996 ≈ 0.363</span>.<br>(c) Solve <span class="chem">∫_0^m kxe^{-x} dx = 0.5</span>: <span class="chem">m = 1.53618 ≈ 1.54</span> hours.<br>(d) <span class="chem">E(X) = ∫_0^4 kx^2 e^{-x} dx = 1.67741 ≈ 1.68</span> hours.</p>
      solution: "<p>(a) GDC: <span class=\"chem\">∫_0^4 xe^{-x} dx = 0.908422</span>이므로 <span class=\"chem\">k = 1/0.908422 = 1.10081 ≈ 1.10</span>. (정확히는 <span class=\"chem\">k = 1/(1 - 5e^{-4})</span>.)<br>(b) <span class=\"chem\">∫_1^2 kxe^{-x} dx = 0.362996 ≈ 0.363</span>.<br>(c) <span class=\"chem\">∫_0^m kxe^{-x} dx = 0.5</span>를 풀면 <span class=\"chem\">m = 1.53618 ≈ 1.54</span>시간.<br>(d) <span class=\"chem\">E(X) = ∫_0^4 kx^2 e^{-x} dx = 1.67741 ≈ 1.68</span>시간.</p>",
      // EN: <p>(a) <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1.10</span> (1.10081…).<br>(b) <span class="chem">P(1 &lt; X &lt; 2) = 0.363</span> (0.362996…).<br>(c) Median <span class="chem">m = 1.54</span> h (1.53618…).<br>(d) <span class="chem">E(X) = 1.68</span> h (1.67741…).</p>
      answer: "<p>(a) <span class=\"chem\">∫_0^4 xe^{-x} dx = 0.908422</span>이므로 <span class=\"chem\">k = 1.10</span> (1.10081…).<br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2) = 0.363</span> (0.362996…).<br>(c) 중앙값 <span class=\"chem\">m = 1.54</span> h (1.53618…).<br>(d) <span class=\"chem\">E(X) = 1.68</span> h (1.67741…).</p>",
      markscheme: [
        // EN: M1: (a) Sets ∫_0^4 kxe^{−x} dx = 1.
        "M1: (a) ∫_0^4 kxe^{−x} dx = 1로 놓음.",
        // EN: A1: (a) k = 1.10 (1.10081…).
        "A1: (a) k = 1.10 (1.10081…).",
        // EN: M1: (b) Writes ∫_1^2 kxe^{−x} dx with their k.
        "M1: (b) 자신의 k로 ∫_1^2 kxe^{−x} dx를 씀.",
        // EN: A1: (b) 0.363.
        "A1: (b) 0.363.",
        // EN: M1: (c) Sets ∫_0^m kxe^{−x} dx = 0.5.
        "M1: (c) ∫_0^m kxe^{−x} dx = 0.5로 놓음.",
        // EN: M1: (c) Solves numerically (graph or solver) for 0 ≤ m ≤ 4.
        "M1: (c) 0 ≤ m ≤ 4에서 수치적으로(그래프 또는 solver로) 풂.",
        // EN: A1: (c) m = 1.54.
        "A1: (c) m = 1.54.",
        // EN: M1: (d) Writes E(X) = ∫_0^4 x · kxe^{−x} dx.
        "M1: (d) E(X) = ∫_0^4 x · kxe^{−x} dx라고 씀.",
        // EN: A1: (d) 1.68.
        "A1: (d) 1.68.",
      ],
    },

    // ── t4-2-q048 · numeric · challenge · AHL · AHL 4.14 · 6 marks
    "t4-2-q048": {
      // EN: <p>At a help desk, the waiting time <span class="chem">T</span> minutes never exceeds <span class="chem">10</span> minutes. For <span class="chem">0 ≤ t ≤ 10</span> the probability density of <span class="chem">T</span> is proportional to <span class="chem">e^{-0.2t}</span>, and it is zero otherwise. The manager wants to know how wide the middle half of waiting times is. Find the interquartile range of <span class="chem">T</span>.</p>
      stem: "<p>어느 안내 데스크에서 대기 시간 <span class=\"chem\">T</span>분은 결코 <span class=\"chem\">10</span>분을 넘지 않아요. <span class=\"chem\">0 ≤ t ≤ 10</span>에서 <span class=\"chem\">T</span>의 확률밀도는 <span class=\"chem\">e^{-0.2t}</span>에 비례하고, 그 외에서는 0이에요. 관리자는 대기 시간의 가운데 절반이 얼마나 넓게 퍼져 있는지 알고 싶어 해요. <span class=\"chem\">T</span>의 사분위수 범위를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "proportional to e^{−0.2t}" means f(t) = ke^{−0.2t} with k found from total probability 1. "The middle half" is the interquartile range Q₃ − Q₁, so you need two quantiles of a continuous distribution.
        "해석: \"e^{−0.2t}에 비례한다\"는 f(t) = ke^{−0.2t}이고 k는 전체 확률이 1이라는 조건에서 구한다는 뜻이에요. \"가운데 절반\"은 사분위수 범위 Q₃ − Q₁이므로, 연속분포의 분위수 두 개가 필요해요.",
        // EN: Find k from ∫_0^{10} ke^{−0.2t} dt = 1 (k ≈ 0.2313).
        "∫_0^{10} ke^{−0.2t} dt = 1에서 k를 구하세요 (k ≈ 0.2313).",
        // EN: Solve ∫_0^{q} ke^{−0.2t} dt = 0.25 and = 0.75 on your GDC, then subtract.
        "GDC에서 ∫_0^{q} ke^{−0.2t} dt = 0.25와 = 0.75를 각각 풀고 빼세요.",
      ],
      // EN: <p><b>Decode:</b> write <span class="chem">f(t) = ke^{-0.2t}</span> on <span class="chem">[0, 10]</span>; the IQR is <span class="chem">Q_3 - Q_1</span>.<br><span class="chem">∫_0^{10} ke^{-0.2t} dt = 1 ⇒ k = 0.231304</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_1} f(t) dt = 0.25</span>: <span class="chem">Q_1 = 1.21779</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_3} f(t) dt = 0.75</span>: <span class="chem">Q_3 = 5.22771</span> <b>[A1]</b>.<br>IQR <span class="chem">= 5.22771 - 1.21779 = 4.00992 ≈ 4.01</span> minutes <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> <span class=\"chem\">[0, 10]</span>에서 <span class=\"chem\">f(t) = ke^{-0.2t}</span>로 놓아요. 사분위수 범위(IQR)는 <span class=\"chem\">Q_3 - Q_1</span>이에요.<br><span class=\"chem\">∫_0^{10} ke^{-0.2t} dt = 1 ⇒ k = 0.231304</span> <b>[M1 A1]</b>.<br><span class=\"chem\">∫_0^{Q_1} f(t) dt = 0.25</span>를 풀면: <span class=\"chem\">Q_1 = 1.21779</span> <b>[M1 A1]</b>.<br><span class=\"chem\">∫_0^{Q_3} f(t) dt = 0.75</span>를 풀면: <span class=\"chem\">Q_3 = 5.22771</span> <b>[A1]</b>.<br>IQR <span class=\"chem\">= 5.22771 - 1.21779 = 4.00992 ≈ 4.01</span>분 <b>[A1]</b>.</p>",
    },

    // ── t4-2-q049 · numeric · exam · AHL · AHL 4.14 · 5 marks
    "t4-2-q049": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = ke^{-x^2}</span> for <span class="chem">0 ≤ x ≤ 2</span>, and <span class="chem">f(x) = 0</span> otherwise. Find <span class="chem">Var(X)</span>.</p>
      stem: "<p>연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수는 <span class=\"chem\">0 ≤ x ≤ 2</span>에서 <span class=\"chem\">f(x) = ke^{-x^2}</span>이고, 그 외에서는 <span class=\"chem\">f(x) = 0</span>이에요. <span class=\"chem\">Var(X)</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: <span class="chem">e^{-x^2}</span> has no elementary antiderivative, so every integral here is done numerically on the GDC.
        "<span class=\"chem\">e^{-x^2}</span>는 초등함수로 된 부정적분이 없으므로, 여기서의 모든 적분은 GDC로 수치 계산해요.",
        // EN: Find k from <span class="chem">∫_0^2 ke^{-x^2} dx = 1</span>, then <span class="chem">E(X)</span> and <span class="chem">E(X^2)</span>.
        "<span class=\"chem\">∫_0^2 ke^{-x^2} dx = 1</span>에서 k를 구한 뒤 <span class=\"chem\">E(X)</span>와 <span class=\"chem\">E(X^2)</span>를 구하세요.",
        // EN: Use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span> with unrounded values.
        "반올림하지 않은 값으로 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>를 사용하세요.",
      ],
      // EN: <p><span class="chem">∫_0^2 e^{-x^2} dx = 0.882081 ⇒ k = 1.13368</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = ∫_0^2 kxe^{-x^2} dx = 0.556459</span> and <span class="chem">E(X^2) = ∫_0^2 kx^2 e^{-x^2} dx = 0.479236</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 0.479236 - 0.556459^2 = 0.169589 ≈ 0.170</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">∫_0^2 e^{-x^2} dx = 0.882081 ⇒ k = 1.13368</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(X) = ∫_0^2 kxe^{-x^2} dx = 0.556459</span>, <span class=\"chem\">E(X^2) = ∫_0^2 kx^2 e^{-x^2} dx = 0.479236</span> <b>[M1 A1]</b>.<br><span class=\"chem\">Var(X) = 0.479236 - 0.556459^2 = 0.169589 ≈ 0.170</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q050 · numeric · challenge · SL · SL 4.7, 4.8 · 6 marks
    "t4-2-q050": {
      // EN: <p>In a fairground game a player rolls five fair six-sided dice. If <span class="chem">Y</span> sixes appear, the player receives <span class="chem">$Y^2</span> (so two sixes pay <span class="chem">$4</span>). The organiser wants to charge a price that makes the game fair. Find this price, giving your answer in dollars to 2 decimal places.</p>
      stem: "<p>어떤 축제 게임에서 참가자는 공정한 육면체 주사위 다섯 개를 던져요. 6의 눈이 <span class=\"chem\">Y</span>개 나오면 참가자는 <span class=\"chem\">$Y^2</span>를 받아요(따라서 6이 두 개 나오면 <span class=\"chem\">$4</span>). 주최자는 게임이 공정해지는 참가비를 정하려고 해요. 이 참가비를 구하고 (Find), 답은 달러 단위로 소수점 아래 2자리까지 쓰시오.</p>",
      hints: [
        // EN: Decode: the number of sixes is binomial, Y ~ B(5, 1/6). A fair price equals the expected payout, which here is E(Y²), not [E(Y)]².
        "해석: 6의 눈의 개수는 이항분포 Y ~ B(5, 1/6)을 따라요. 공정한 참가비는 지급액의 기댓값과 같고, 여기서는 [E(Y)]²가 아니라 E(Y²)예요.",
        // EN: Either tabulate y, P(Y = y) and y² P(Y = y) for y = 0 to 5 with the binomial pdf, or use E(Y²) = Var(Y) + [E(Y)]².
        "이항분포 pdf로 y = 0부터 5까지 y, P(Y = y), y² P(Y = y)의 표를 만들거나, E(Y²) = Var(Y) + [E(Y)]²를 사용하세요.",
        // EN: E(Y) = 5/6 and Var(Y) = 5(1/6)(5/6) = 25/36.
        "E(Y) = 5/6, Var(Y) = 5(1/6)(5/6) = 25/36.",
      ],
      // EN: <p><b>Decode:</b> the payout is <span class="chem">Y^2</span> with <span class="chem">Y ~ B(5, 1/6)</span>; fair price = <span class="chem">E(Y^2)</span> <b>[M1]</b>.<br><span class="chem">E(Y) = 5/6</span>, <span class="chem">Var(Y) = 5(1/6)(5/6) = 25/36</span> <b>[A1 A1]</b>.<br><span class="chem">E(Y^2) = Var(Y) + [E(Y)]^2 = 25/36 + 25/36 = 50/36</span> <b>[M1 A1]</b>.<br>Fair price <span class="chem">= $1.39</span> (1.3888…) <b>[A1]</b>. (A GDC table of <span class="chem">y^2 P(Y = y)</span> gives the same total.)</p>
      solution: "<p><b>해석:</b> 지급액은 <span class=\"chem\">Y^2</span>이고 <span class=\"chem\">Y ~ B(5, 1/6)</span>; 공정한 참가비 = <span class=\"chem\">E(Y^2)</span> <b>[M1]</b>.<br><span class=\"chem\">E(Y) = 5/6</span>, <span class=\"chem\">Var(Y) = 5(1/6)(5/6) = 25/36</span> <b>[A1 A1]</b>.<br><span class=\"chem\">E(Y^2) = Var(Y) + [E(Y)]^2 = 25/36 + 25/36 = 50/36</span> <b>[M1 A1]</b>.<br>공정한 참가비 <span class=\"chem\">= $1.39</span> (1.3888…) <b>[A1]</b>. (GDC로 <span class=\"chem\">y^2 P(Y = y)</span>의 표를 만들어도 같은 합이 나와요.)</p>",
    },

    // ── t4-2-q051 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q051": {
      // EN: <p>The reaction times of drivers in a simulator are normally distributed with mean <span class="chem">72</span> hundredths of a second and standard deviation <span class="chem">6.5</span> hundredths of a second. Find the interquartile range of the reaction times, in hundredths of a second.</p>
      stem: "<p>시뮬레이터에서 운전자의 반응 시간은 평균 <span class=\"chem\">72</span>(100분의 1초 단위), 표준편차 <span class=\"chem\">6.5</span>(100분의 1초 단위)인 정규분포를 따라요. 반응 시간의 사분위수 범위를 100분의 1초 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: The quartiles are the values with 25% and 75% of the distribution below them.
        "사분위수는 분포의 25%와 75%가 그 아래에 있는 값이에요.",
        // EN: Use the inverse normal with area 0.25 and 0.75 (μ = 72, σ = 6.5), then subtract.
        "넓이 0.25와 0.75로 역정규분포(μ = 72, σ = 6.5)를 사용한 뒤 빼세요.",
      ],
      // EN: <p><span class="chem">Q_1 = 67.6158</span> (inverse normal, area 0.25) <b>[M1]</b> and <span class="chem">Q_3 = 76.3842</span> (area 0.75) <b>[A1]</b>.<br>IQR <span class="chem">= 76.3842 - 67.6158 = 8.77</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">Q_1 = 67.6158</span> (역정규분포, 넓이 0.25) <b>[M1]</b>, <span class=\"chem\">Q_3 = 76.3842</span> (넓이 0.75) <b>[A1]</b>.<br>IQR <span class=\"chem\">= 76.3842 - 67.6158 = 8.77</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q052 · numeric · exam · SL · SL 4.8, 4.11 · 4 marks
    "t4-2-q052": {
      // EN: <p>A basketball player scores from <span class="chem">25%</span> of her three-point attempts, independently. In a match she takes <span class="chem">10</span> three-point attempts and scores at least one. Find the probability that she scores at least three.</p>
      stem: "<p>어느 농구 선수는 3점슛 시도의 <span class=\"chem\">25%</span>를 서로 독립적으로 성공시켜요. 한 경기에서 그녀는 3점슛을 <span class=\"chem\">10</span>번 시도했고 적어도 한 번은 성공했어요. 그녀가 적어도 세 번 성공했을 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "and scores at least one" is information you are given, so this is P(X ≥ 3 | X ≥ 1) with X ~ B(10, 0.25).
        "해석: \"적어도 한 번은 성공했다\"는 주어진 정보이므로, X ~ B(10, 0.25)일 때 P(X ≥ 3 | X ≥ 1)을 구하는 문제예요.",
        // EN: X ≥ 3 lies inside X ≥ 1, so the numerator is just P(X ≥ 3).
        "X ≥ 3은 X ≥ 1에 포함되므로 분자는 바로 P(X ≥ 3)이에요.",
        // EN: P(X ≥ 3) = 1 − P(X ≤ 2) and P(X ≥ 1) = 1 − P(X = 0).
        "P(X ≥ 3) = 1 − P(X ≤ 2), P(X ≥ 1) = 1 − P(X = 0).",
      ],
      // EN: <p><span class="chem">P(X ≥ 3 | X ≥ 1) = P(X ≥ 3)/P(X ≥ 1)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 3) = 1 - 0.525593 = 0.474407</span> <b>[A1]</b>, <span class="chem">P(X ≥ 1) = 1 - 0.75^{10} = 0.943686</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.502717 ≈ 0.503</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(X ≥ 3 | X ≥ 1) = P(X ≥ 3)/P(X ≥ 1)</span> <b>[M1]</b>.<br><span class=\"chem\">P(X ≥ 3) = 1 - 0.525593 = 0.474407</span> <b>[A1]</b>, <span class=\"chem\">P(X ≥ 1) = 1 - 0.75^{10} = 0.943686</span> <b>[A1]</b>.<br>비 <span class=\"chem\">= 0.502717 ≈ 0.503</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q053 · short · challenge · SL · SL 4.8, 4.9, 4.12 · 10 marks
    "t4-2-q053": {
      // EN: <p>A machine makes bolts whose diameters are normally distributed with mean <span class="chem">μ</span> mm and standard deviation <span class="chem">σ</span> mm. A bolt is rejected if its diameter is less than <span class="chem">9.9</span> mm or more than <span class="chem">10.2</span> mm. Quality records show that <span class="chem">5%</span> of bolts are too narrow and <span class="chem">3%</span> are too wide.<br>(a) Find the value of <span class="chem">σ</span> and the value of <span class="chem">μ</span>. <strong>[4 marks]</strong><br>(b) Bolts are sold in packs of <span class="chem">50</span>, taken at random from the machine before inspection. Find the probability that a pack contains at most <span class="chem">3</span> bolts that would be rejected. <strong>[3 marks]</strong><br>(c) An engineer resets the machine so that <span class="chem">μ = 10.05</span> mm, with <span class="chem">σ</span> unchanged. Find the new percentage of bolts that are rejected. <strong>[3 marks]</strong></p>
      stem: "<p>한 기계가 만드는 볼트의 지름은 평균 <span class=\"chem\">μ</span> mm, 표준편차 <span class=\"chem\">σ</span> mm인 정규분포를 따른다. 지름이 <span class=\"chem\">9.9</span> mm 미만이거나 <span class=\"chem\">10.2</span> mm 초과인 볼트는 불합격 처리된다. 품질 기록에 따르면 볼트의 <span class=\"chem\">5%</span>는 너무 가늘고 <span class=\"chem\">3%</span>는 너무 굵다.<br>(a) <span class=\"chem\">σ</span>의 값과 <span class=\"chem\">μ</span>의 값을 구하시오 (Find). <strong>[4 marks]</strong><br>(b) 볼트는 검사 전에 기계에서 무작위로 가져온 <span class=\"chem\">50</span>개짜리 묶음으로 판매된다. 한 묶음에 불합격될 볼트가 많아야 <span class=\"chem\">3</span>개 들어 있을 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) 한 기술자가 <span class=\"chem\">σ</span>는 그대로 두고 <span class=\"chem\">μ = 10.05</span> mm가 되도록 기계를 다시 설정한다. 불합격되는 볼트의 새로운 백분율을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is "inverse normal with both μ and σ unknown"; (b) hides a binomial (each bolt is rejected or not, with probability from the records); (c) is a fresh normal calculation with the new mean.
        "해석: (a)는 \"μ와 σ를 모두 모르는 역정규분포\", (b)에는 이항분포가 숨어 있고(각 볼트는 기록에서 얻은 확률로 불합격이거나 아니거나), (c)는 새 평균으로 다시 하는 정규분포 계산이에요.",
        // EN: "3% too wide" means P(D &lt; 10.2) = 0.97. Form two equations (x − μ)/σ = z and solve them simultaneously.
        "\"3%는 너무 굵다\"는 P(D &lt; 10.2) = 0.97을 뜻해요. (x − μ)/σ = z 꼴의 방정식 두 개를 세워 연립하여 푸세요.",
        // EN: In (c), 10.05 is exactly halfway between 9.9 and 10.2, so the two tails are equal.
        "(c)에서 10.05는 9.9와 10.2의 정확히 가운데이므로 양쪽 꼬리가 같아요.",
      ],
      // EN: <p><b>Decode:</b> two percentages → two z-scores → two linear equations; then a rejected bolt is a "success" in a binomial count.<br>(a) <span class="chem">z_1 = -1.644854</span>, <span class="chem">z_2 = 1.880794</span>. <span class="chem">9.9 - μ = -1.644854σ</span> and <span class="chem">10.2 - μ = 1.880794σ</span> ⇒ <span class="chem">0.3 = 3.525648σ ⇒ σ = 0.0850908</span>, <span class="chem">μ = 9.9 + 1.644854σ = 10.03996</span>.<br>(b) Each bolt is rejected with probability <span class="chem">0.08</span>, so <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425296 ≈ 0.425</span>.<br>(c) With <span class="chem">D ~ N(10.05, 0.0850908^2)</span>: <span class="chem">P(D &lt; 9.9) = P(D &gt; 10.2) = 0.0389651</span>, total <span class="chem">0.0779302</span>, about <span class="chem">7.79%</span>. Centring the mean between the limits lowers the rejection rate from 8%.</p>
      solution: "<p><b>해석:</b> 두 백분율 → 두 z-점수 → 두 일차방정식; 그다음 불합격 볼트를 이항분포 개수에서의 \"성공\"으로 봐요.<br>(a) <span class=\"chem\">z_1 = -1.644854</span>, <span class=\"chem\">z_2 = 1.880794</span>. <span class=\"chem\">9.9 - μ = -1.644854σ</span>, <span class=\"chem\">10.2 - μ = 1.880794σ</span> ⇒ <span class=\"chem\">0.3 = 3.525648σ ⇒ σ = 0.0850908</span>, <span class=\"chem\">μ = 9.9 + 1.644854σ = 10.03996</span>.<br>(b) 각 볼트는 확률 <span class=\"chem\">0.08</span>로 불합격되므로 <span class=\"chem\">R ~ B(50, 0.08)</span>: <span class=\"chem\">P(R ≤ 3) = 0.425296 ≈ 0.425</span>.<br>(c) <span class=\"chem\">D ~ N(10.05, 0.0850908^2)</span>일 때 <span class=\"chem\">P(D &lt; 9.9) = P(D &gt; 10.2) = 0.0389651</span>, 합계 <span class=\"chem\">0.0779302</span>, 약 <span class=\"chem\">7.79%</span>. 평균을 두 한계의 가운데에 두면 불합격률이 8%에서 낮아져요.</p>",
      // EN: <p>(a) <span class="chem">(9.9 - μ)/σ = -1.64485</span> and <span class="chem">(10.2 - μ)/σ = 1.88079</span> give <span class="chem">σ = 0.0851</span> mm (0.0850908…) and <span class="chem">μ = 10.0</span> mm (10.03996…).<br>(b) <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425</span> (0.425296…).<br>(c) <span class="chem">P(D &lt; 9.9) + P(D &gt; 10.2) = 2(0.0389651) = 0.0779</span>, so about <span class="chem">7.79%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(9.9 - μ)/σ = -1.64485</span>와 <span class=\"chem\">(10.2 - μ)/σ = 1.88079</span>에서 <span class=\"chem\">σ = 0.0851</span> mm (0.0850908…), <span class=\"chem\">μ = 10.0</span> mm (10.03996…).<br>(b) <span class=\"chem\">R ~ B(50, 0.08)</span>: <span class=\"chem\">P(R ≤ 3) = 0.425</span> (0.425296…).<br>(c) <span class=\"chem\">P(D &lt; 9.9) + P(D &gt; 10.2) = 2(0.0389651) = 0.0779</span>이므로 약 <span class=\"chem\">7.79%</span>.</p>",
      markscheme: [
        // EN: M1: (a) Forms two standardised equations (x − μ)/σ = z.
        "M1: (a) 표준화한 방정식 (x − μ)/σ = z를 두 개 세움.",
        // EN: A1: (a) Correct z-values −1.64485 (area 0.05) and 1.88079 (area 0.97).
        "A1: (a) 올바른 z 값 −1.64485 (넓이 0.05)와 1.88079 (넓이 0.97).",
        // EN: A1: (a) σ = 0.0851 (0.0850908…).
        "A1: (a) σ = 0.0851 (0.0850908…).",
        // EN: A1: (a) μ = 10.0 (10.03996…).
        "A1: (a) μ = 10.0 (10.03996…).",
        // EN: R1: (b) Recognises p(reject) = 0.05 + 0.03 = 0.08.
        "R1: (b) p(reject) = 0.05 + 0.03 = 0.08임을 인식함.",
        // EN: M1: (b) Uses R ~ B(50, 0.08) with the cumulative binomial for P(R ≤ 3).
        "M1: (b) R ~ B(50, 0.08)로 P(R ≤ 3)에 누적 이항분포를 사용함.",
        // EN: A1: (b) 0.425.
        "A1: (b) 0.425.",
        // EN: M1: (c) Adds both tails P(D < 9.9) + P(D > 10.2) using N(10.05, σ²) with σ unrounded.
        "M1: (c) 반올림하지 않은 σ로 N(10.05, σ²)를 사용해 양쪽 꼬리 P(D < 9.9) + P(D > 10.2)를 더함.",
        // EN: A1: (c) Each tail is 0.0389651 (by symmetry, as 10.05 is midway between the limits).
        "A1: (c) 각 꼬리는 0.0389651 (10.05가 두 한계의 가운데이므로 대칭성에 의해).",
        // EN: A1: (c) 7.79% (0.0779302…).
        "A1: (c) 7.79% (0.0779302…).",
      ],
    },

    // ── t4-2-q054 · numeric · exam · SL · SL 4.9, 4.11 · 4 marks
    "t4-2-q054": {
      // EN: <p>Scores <span class="chem">X</span> on a reasoning test are normally distributed with mean <span class="chem">100</span> and standard deviation <span class="chem">15</span>. Let <span class="chem">A</span> be the event <span class="chem">X &gt; 110</span> and <span class="chem">B</span> the event <span class="chem">X &lt; 120</span>. Find <span class="chem">P(A | B)</span>.</p>
      stem: "<p>어떤 추론 시험의 점수 <span class=\"chem\">X</span>는 평균 <span class=\"chem\">100</span>, 표준편차 <span class=\"chem\">15</span>인 정규분포를 따라요. <span class=\"chem\">A</span>를 사건 <span class=\"chem\">X &gt; 110</span>, <span class=\"chem\">B</span>를 사건 <span class=\"chem\">X &lt; 120</span>이라 해요. <span class=\"chem\">P(A | B)</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: The intersection <span class="chem">A ∩ B</span> is the interval <span class="chem">110 &lt; X &lt; 120</span>.
        "교집합 <span class=\"chem\">A ∩ B</span>는 구간 <span class=\"chem\">110 &lt; X &lt; 120</span>이에요.",
        // EN: Divide <span class="chem">P(110 &lt; X &lt; 120)</span> by <span class="chem">P(X &lt; 120)</span>.
        "<span class=\"chem\">P(110 &lt; X &lt; 120)</span>을 <span class=\"chem\">P(X &lt; 120)</span>으로 나누세요.",
        // EN: Compare your answer with P(A) = 0.252: since they differ, A and B are not independent.
        "답을 P(A) = 0.252와 비교해 보세요: 두 값이 다르므로 A와 B는 독립이 아니에요.",
      ],
      // EN: <p><span class="chem">P(A | B) = P(110 &lt; X &lt; 120)/P(X &lt; 120)</span> <b>[M1]</b>.<br><span class="chem">P(110 &lt; X &lt; 120) = 0.161281</span> <b>[A1]</b>, <span class="chem">P(X &lt; 120) = 0.908789</span> <b>[A1]</b>.<br><span class="chem">P(A | B) = 0.177468 ≈ 0.177</span> <b>[A1]</b>.<br>Note: <span class="chem">P(A) = 0.252 ≠ P(A | B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are not independent.</p>
      solution: "<p><span class=\"chem\">P(A | B) = P(110 &lt; X &lt; 120)/P(X &lt; 120)</span> <b>[M1]</b>.<br><span class=\"chem\">P(110 &lt; X &lt; 120) = 0.161281</span> <b>[A1]</b>, <span class=\"chem\">P(X &lt; 120) = 0.908789</span> <b>[A1]</b>.<br><span class=\"chem\">P(A | B) = 0.177468 ≈ 0.177</span> <b>[A1]</b>.<br>주의: <span class=\"chem\">P(A) = 0.252 ≠ P(A | B)</span>이므로 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>는 독립이 아니에요.</p>",
    },

    // ── t4-2-q055 · numeric · challenge · SL · SL 4.8 · 5 marks
    "t4-2-q055": {
      // EN: <p>A printer jams on each page with the same probability <span class="chem">p</span>, independently. When it prints an <span class="chem">8</span>-page document, the probability that it jams at least once is <span class="chem">0.75</span>. Find the probability that it jams on exactly <span class="chem">2</span> of the <span class="chem">8</span> pages.</p>
      stem: "<p>어떤 프린터는 각 페이지에서 서로 독립적으로 같은 확률 <span class=\"chem\">p</span>로 용지 걸림이 일어나요. <span class=\"chem\">8</span>페이지짜리 문서를 인쇄할 때 용지 걸림이 적어도 한 번 일어날 확률은 <span class=\"chem\">0.75</span>예요. <span class=\"chem\">8</span>페이지 중 정확히 <span class=\"chem\">2</span>페이지에서 용지 걸림이 일어날 확률을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the binomial parameter p is unknown; the "at least once" fact is an equation for p. Only after finding p can you answer the question asked.
        "해석: 이항분포의 모수 p를 모르고, \"적어도 한 번\"이라는 사실이 p에 대한 방정식이 돼요. p를 구한 뒤에야 묻는 질문에 답할 수 있어요.",
        // EN: 1 − (1 − p)⁸ = 0.75, so (1 − p)⁸ = 0.25.
        "1 − (1 − p)⁸ = 0.75이므로 (1 − p)⁸ = 0.25.",
        // EN: Then use the binomial pdf for X ~ B(8, p) at x = 2, with p unrounded.
        "그다음 반올림하지 않은 p로 X ~ B(8, p)의 x = 2에서의 이항분포 pdf를 사용하세요.",
      ],
      // EN: <p><b>Decode:</b> solve for <span class="chem">p</span> first, then use <span class="chem">X ~ B(8, p)</span>.<br><span class="chem">P(X ≥ 1) = 1 - (1 - p)^8 = 0.75</span> <b>[M1]</b> <span class="chem">⇒ 1 - p = 0.25^{1/8} ⇒ p = 0.159104</span> <b>[A1]</b>.<br><span class="chem">P(X = 2) = ⁸C₂ p^2 (1 - p)^6</span> <b>[M1]</b> <span class="chem">= 28(0.159104)^2(0.840896)^6</span> <b>[A1]</b> <span class="chem">= 0.250595 ≈ 0.251</span> <b>[A1]</b>.</p>
      solution: "<p><b>해석:</b> 먼저 <span class=\"chem\">p</span>를 구한 뒤 <span class=\"chem\">X ~ B(8, p)</span>를 사용해요.<br><span class=\"chem\">P(X ≥ 1) = 1 - (1 - p)^8 = 0.75</span> <b>[M1]</b> <span class=\"chem\">⇒ 1 - p = 0.25^{1/8} ⇒ p = 0.159104</span> <b>[A1]</b>.<br><span class=\"chem\">P(X = 2) = ⁸C₂ p^2 (1 - p)^6</span> <b>[M1]</b> <span class=\"chem\">= 28(0.159104)^2(0.840896)^6</span> <b>[A1]</b> <span class=\"chem\">= 0.250595 ≈ 0.251</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q056 · numeric · exam · AHL · AHL 4.14, SL 4.7 · 5 marks
    "t4-2-q056": {
      // EN: <p>A discrete random variable <span class="chem">X</span> has probability distribution <span class="chem">P(X = x) = k/x</span> for <span class="chem">x = 1, 2, 3, 4, 5</span>, where <span class="chem">k</span> is a constant. Find the standard deviation of <span class="chem">X</span>.</p>
      stem: "<p>이산확률변수 <span class=\"chem\">X</span>의 확률분포는 <span class=\"chem\">x = 1, 2, 3, 4, 5</span>에 대하여 <span class=\"chem\">P(X = x) = k/x</span>이고, <span class=\"chem\">k</span>는 상수예요. <span class=\"chem\">X</span>의 표준편차를 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class="chem">Σ P(X = x) = 1</span>: <span class="chem">k(1 + 1/2 + 1/3 + 1/4 + 1/5) = 1</span>.
        "<span class=\"chem\">Σ P(X = x) = 1</span>을 사용하세요: <span class=\"chem\">k(1 + 1/2 + 1/3 + 1/4 + 1/5) = 1</span>.",
        // EN: Put x in one GDC list and P(X = x) in another; the one-variable statistics with frequencies give the mean and σ directly.
        "GDC의 한 리스트에 x를, 다른 리스트에 P(X = x)를 넣으세요. 도수를 넣은 일변수 통계로 평균과 σ를 바로 얻을 수 있어요.",
        // EN: Or by hand: E(X) = Σ x(k/x) = 5k and E(X²) = Σ x²(k/x) = 15k.
        "또는 손으로: E(X) = Σ x(k/x) = 5k, E(X²) = Σ x²(k/x) = 15k.",
      ],
      // EN: <p><span class="chem">k(137/60) = 1 ⇒ k = 60/137 = 0.437956</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = 5k = 2.18978</span>, <span class="chem">E(X^2) = k(1 + 2 + 3 + 4 + 5) = 15k = 6.56934</span> <b>[A1]</b>.<br><span class="chem">Var(X) = 6.56934 - 2.18978^2 = 1.77420</span> <b>[M1]</b>, so <span class="chem">σ = 1.33199 ≈ 1.33</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">k(137/60) = 1 ⇒ k = 60/137 = 0.437956</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(X) = 5k = 2.18978</span>, <span class=\"chem\">E(X^2) = k(1 + 2 + 3 + 4 + 5) = 15k = 6.56934</span> <b>[A1]</b>.<br><span class=\"chem\">Var(X) = 6.56934 - 2.18978^2 = 1.77420</span> <b>[M1]</b>이므로 <span class=\"chem\">σ = 1.33199 ≈ 1.33</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q057 · short · challenge · AHL · AHL 4.13, SL 4.8 · 9 marks
    "t4-2-q057": {
      // EN: <p>A magician has three coins. Coin F is fair, coin H lands heads with probability <span class="chem">0.7</span>, and coin T lands heads with probability <span class="chem">0.2</span>. She picks coin F with probability <span class="chem">1/2</span>, coin H with probability <span class="chem">1/3</span> and coin T with probability <span class="chem">1/6</span>, and tosses the chosen coin <span class="chem">8</span> times. It shows exactly <span class="chem">6</span> heads.<br>(a) For each coin, find the probability of exactly <span class="chem">6</span> heads in <span class="chem">8</span> tosses. <strong>[3 marks]</strong><br>(b) Find the probability that she chose coin H. <strong>[3 marks]</strong><br>(c) She tosses the same coin once more. Find the probability that it shows heads. <strong>[3 marks]</strong></p>
      stem: "<p>한 마술사가 동전 세 개를 가지고 있다. 동전 F는 공정하고, 동전 H는 확률 <span class=\"chem\">0.7</span>로 앞면이 나오며, 동전 T는 확률 <span class=\"chem\">0.2</span>로 앞면이 나온다. 그녀는 동전 F를 확률 <span class=\"chem\">1/2</span>, 동전 H를 확률 <span class=\"chem\">1/3</span>, 동전 T를 확률 <span class=\"chem\">1/6</span>로 골라 그 동전을 <span class=\"chem\">8</span>번 던진다. 앞면이 정확히 <span class=\"chem\">6</span>번 나왔다.<br>(a) 각 동전에 대해 <span class=\"chem\">8</span>번 던져 앞면이 정확히 <span class=\"chem\">6</span>번 나올 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 그녀가 동전 H를 골랐을 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) 그녀가 같은 동전을 한 번 더 던진다. 앞면이 나올 확률을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the coin is a hidden cause and "6 heads in 8" is the evidence. Part (a) gives the likelihoods (binomial), (b) is Bayes' theorem with three events, and (c) needs ALL three updated probabilities.
        "해석: 동전은 숨은 원인이고 \"8번 중 앞면 6번\"은 증거예요. (a)에서 우도(이항분포)를 구하고, (b)는 세 사건에 대한 베이즈 정리이며, (c)에는 갱신된 세 확률이 \"모두\" 필요해요.",
        // EN: In (b), the denominator is the total probability of 6 heads, summed over the three coins with weights 1/2, 1/3, 1/6.
        "(b)에서 분모는 앞면이 6번 나올 전체 확률로, 가중치 1/2, 1/3, 1/6로 세 동전에 대해 더해요.",
        // EN: In (c), P(head on toss 9) = Σ P(coin | 6 heads) × P(head | coin). Using the original weights 1/2, 1/3, 1/6 is the common mistake.
        "(c)에서 P(head on toss 9) = Σ P(coin | 6 heads) × P(head | coin). 원래 가중치 1/2, 1/3, 1/6을 쓰는 것이 흔한 실수예요.",
      ],
      // EN: <p><b>Decode:</b> unknown cause (coin), observed data (6 heads in 8). Likelihoods are binomial; Bayes updates the prior weights.<br>(a) <span class="chem">P(6 | F) = ⁸C₆(0.5)^8 = 0.109375</span>, <span class="chem">P(6 | H) = ⁸C₆(0.7)^6(0.3)^2 = 0.296475</span>, <span class="chem">P(6 | T) = ⁸C₆(0.2)^6(0.8)^2 = 0.00114688</span>.<br>(b) <span class="chem">P(6) = 0.0546875 + 0.0988252 + 0.000191147 = 0.153704</span>; <span class="chem">P(H | 6) = 0.0988252/0.153704 = 0.642958 ≈ 0.643</span>.<br>(c) <span class="chem">P(F | 6) = 0.355798</span>, <span class="chem">P(T | 6) = 0.00124360</span>. <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628219 ≈ 0.628</span>.</p>
      solution: "<p><b>해석:</b> 미지의 원인(동전), 관측된 자료(8번 중 앞면 6번). 우도는 이항분포이고, 베이즈 정리로 사전 가중치를 갱신해요.<br>(a) <span class=\"chem\">P(6 | F) = ⁸C₆(0.5)^8 = 0.109375</span>, <span class=\"chem\">P(6 | H) = ⁸C₆(0.7)^6(0.3)^2 = 0.296475</span>, <span class=\"chem\">P(6 | T) = ⁸C₆(0.2)^6(0.8)^2 = 0.00114688</span>.<br>(b) <span class=\"chem\">P(6) = 0.0546875 + 0.0988252 + 0.000191147 = 0.153704</span>; <span class=\"chem\">P(H | 6) = 0.0988252/0.153704 = 0.642958 ≈ 0.643</span>.<br>(c) <span class=\"chem\">P(F | 6) = 0.355798</span>, <span class=\"chem\">P(T | 6) = 0.00124360</span>. <span class=\"chem\">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628219 ≈ 0.628</span>.</p>",
      // EN: <p>(a) F: <span class="chem">0.109</span> (0.109375); H: <span class="chem">0.296</span> (0.296475…); T: <span class="chem">0.00115</span> (0.00114688).<br>(b) <span class="chem">P(6 heads) = 0.153704</span>, so <span class="chem">P(H | 6 heads) = (1/3)(0.296475)/0.153704 = 0.643</span>.<br>(c) Posteriors F 0.355798, H 0.642958, T 0.00124360; <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628</span>.</p>
      answer: "<p>(a) F: <span class=\"chem\">0.109</span> (0.109375); H: <span class=\"chem\">0.296</span> (0.296475…); T: <span class=\"chem\">0.00115</span> (0.00114688).<br>(b) <span class=\"chem\">P(6 heads) = 0.153704</span>이므로 <span class=\"chem\">P(H | 6 heads) = (1/3)(0.296475)/0.153704 = 0.643</span>.<br>(c) 사후확률 F 0.355798, H 0.642958, T 0.00124360; <span class=\"chem\">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628</span>.</p>",
      markscheme: [
        // EN: M1: (a) Uses the binomial pdf B(8, p) at 6 for each coin.
        "M1: (a) 각 동전에 대해 이항분포 B(8, p)의 pdf를 6에서 사용함.",
        // EN: A1: (a) F: 0.109375 and H: 0.296475.
        "A1: (a) F: 0.109375, H: 0.296475.",
        // EN: A1: (a) T: 0.00114688.
        "A1: (a) T: 0.00114688.",
        // EN: M1: (b) Finds the total P(6 heads) = (1/2)(0.109375) + (1/3)(0.296475) + (1/6)(0.00114688).
        "M1: (b) 전체 확률 P(6 heads) = (1/2)(0.109375) + (1/3)(0.296475) + (1/6)(0.00114688)을 구함.",
        // EN: A1: (b) P(6 heads) = 0.153704.
        "A1: (b) P(6 heads) = 0.153704.",
        // EN: A1: (b) P(H | 6 heads) = 0.643 (0.642958…).
        "A1: (b) P(H | 6 heads) = 0.643 (0.642958…).",
        // EN: M1: (c) Recognises the coin is unknown: weights each coin's P(head) by its posterior probability.
        "M1: (c) 동전이 미지임을 인식함: 각 동전의 P(head)에 그 사후확률을 가중치로 곱함.",
        // EN: A1: (c) Posteriors 0.356 (F) and 0.00124 (T) found as well as H.
        "A1: (c) H뿐 아니라 사후확률 0.356 (F)과 0.00124 (T)도 구함.",
        // EN: A1: (c) 0.628 (0.628219…).
        "A1: (c) 0.628 (0.628219…).",
      ],
    },

    // ── t4-2-q058 · short · challenge · AHL · AHL 4.14 · 19 marks
    "t4-2-q058": {
      // EN: <p>This investigation looks at the family of continuous random variables <span class="chem">X_n</span> with probability density functions <span class="chem">f_n(x) = (n + 1)x^n</span> for <span class="chem">0 ≤ x ≤ 1</span> (and <span class="chem">0</span> otherwise), where <span class="chem">n</span> is a non-negative integer.<br>(a) Show that <span class="chem">f_n</span> is a valid probability density function for every <span class="chem">n</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">E(X_1)</span>, <span class="chem">E(X_2)</span> and <span class="chem">E(X_3)</span>. <strong>[3 marks]</strong><br>(c) Conjecture a formula for <span class="chem">E(X_n)</span> in terms of <span class="chem">n</span>, and prove it. <strong>[3 marks]</strong><br>(d) Find the median of <span class="chem">X_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) For <span class="chem">n = 3</span>, calculate the mean and the median, and state which is larger. Explain this using the shape of the graph of <span class="chem">f_3</span>. <strong>[3 marks]</strong><br>(f) Show that <span class="chem">Var(X_n) = (n + 1)/((n + 2)^2(n + 3))</span>. <strong>[4 marks]</strong><br>(g) Hence describe what happens to the distribution of <span class="chem">X_n</span> as <span class="chem">n → ∞</span>. <strong>[2 marks]</strong></p>
      stem: "<p>이 탐구에서는 확률밀도함수가 <span class=\"chem\">0 ≤ x ≤ 1</span>에서 <span class=\"chem\">f_n(x) = (n + 1)x^n</span> (그 외에서는 <span class=\"chem\">0</span>)인 연속확률변수의 족 <span class=\"chem\">X_n</span>을 다룬다. 단, <span class=\"chem\">n</span>은 음이 아닌 정수이다.<br>(a) 모든 <span class=\"chem\">n</span>에 대해 <span class=\"chem\">f_n</span>이 유효한 확률밀도함수임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">E(X_1)</span>, <span class=\"chem\">E(X_2)</span>, <span class=\"chem\">E(X_3)</span>를 구하시오 (Find). <strong>[3 marks]</strong><br>(c) <span class=\"chem\">E(X_n)</span>을 <span class=\"chem\">n</span>으로 나타내는 공식을 추측하고 (Conjecture), 그것을 증명하시오 (prove). <strong>[3 marks]</strong><br>(d) <span class=\"chem\">X_n</span>의 중앙값을 <span class=\"chem\">n</span>에 대한 식으로 구하시오 (Find). <strong>[2 marks]</strong><br>(e) <span class=\"chem\">n = 3</span>일 때 평균과 중앙값을 계산하고 (Calculate), 어느 쪽이 더 큰지 쓰시오 (State). <span class=\"chem\">f_3</span> 그래프의 모양을 이용해 그 이유를 설명하시오 (Explain). <strong>[3 marks]</strong><br>(f) <span class=\"chem\">Var(X_n) = (n + 1)/((n + 2)^2(n + 3))</span>임을 보이시오 (Show that). <strong>[4 marks]</strong><br>(g) 이를 이용하여 (Hence) <span class=\"chem\">n → ∞</span>일 때 <span class=\"chem\">X_n</span>의 분포가 어떻게 되는지 설명하시오 (describe). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a staged investigation. Compute small cases, spot the pattern, then prove it with a general integral in n. Each part uses one of the standard definitions: total area 1, E(X) = ∫ x f(x) dx, median ∫_0^m f = 1/2, Var = E(X²) − [E(X)]².
        "해석: 단계적인 탐구예요. 작은 경우를 계산하고, 규칙을 찾은 다음, n에 대한 일반적인 적분으로 증명해요. 각 문항은 표준 정의를 하나씩 사용해요: 전체 넓이 1, E(X) = ∫ x f(x) dx, 중앙값 ∫_0^m f = 1/2, Var = E(X²) − [E(X)]².",
        // EN: For (b), E(X_1) = ∫_0^1 x · 2x dx. Write each answer as a fraction to see the pattern.
        "(b)에서 E(X_1) = ∫_0^1 x · 2x dx. 규칙이 보이도록 각 답을 분수로 쓰세요.",
        // EN: For (d), the integral from 0 to m is simply m^{n+1}.
        "(d)에서 0부터 m까지의 적분은 간단히 m^{n+1}이에요.",
        // EN: For (f), expand (n + 2)² − (n + 1)(n + 3) carefully: it is a constant.
        "(f)에서 (n + 2)² − (n + 1)(n + 3)을 조심해서 전개하세요: 상수가 돼요.",
      ],
      // EN: <p><b>Decode:</b> small cases → conjecture → general proof, using the definitions of a pdf, mean, median and variance for a continuous random variable.<br>(a) For <span class="chem">0 ≤ x ≤ 1</span>, <span class="chem">(n + 1)x^n ≥ 0</span>, and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = ∫_0^1 2x^2 dx = 2/3</span>, <span class="chem">E(X_2) = ∫_0^1 3x^3 dx = 3/4</span>, <span class="chem">E(X_3) = ∫_0^1 4x^4 dx = 4/5</span>.<br>(c) Pattern: <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">E(X_n) = ∫_0^1 (n + 1)x^{n+1} dx = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">∫_0^m (n + 1)x^n dx = m^{n+1} = 1/2 ⇒ m = 2^{-1/(n+1)}</span>.<br>(e) <span class="chem">n = 3</span>: mean <span class="chem">4/5 = 0.8</span>, median <span class="chem">2^{-1/4} = 0.840896 ≈ 0.841</span>. The median is larger: <span class="chem">f_3(x) = 4x^3</span> is small near <span class="chem">0</span> and large near <span class="chem">1</span>, giving a long left tail that drags the mean down.<br>(f) <span class="chem">E(X_n^2) = ∫_0^1 (n + 1)x^{n+2} dx = (n + 1)/(n + 3)</span>. Then <span class="chem">Var(X_n) = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3))</span>, and <span class="chem">(n^2 + 4n + 4) - (n^2 + 4n + 3) = 1</span>, giving <span class="chem">(n + 1)/((n + 2)^2(n + 3))</span>.<br>(g) The numerator grows like <span class="chem">n</span> and the denominator like <span class="chem">n^3</span>, so <span class="chem">Var(X_n) → 0</span>; with <span class="chem">E(X_n) → 1</span>, almost all the probability ends up just below <span class="chem">x = 1</span>.</p>
      solution: "<p><b>해석:</b> 작은 경우 → 추측 → 일반적인 증명. 연속확률변수의 확률밀도함수, 평균, 중앙값, 분산의 정의를 사용해요.<br>(a) <span class=\"chem\">0 ≤ x ≤ 1</span>에서 <span class=\"chem\">(n + 1)x^n ≥ 0</span>이고 <span class=\"chem\">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class=\"chem\">E(X_1) = ∫_0^1 2x^2 dx = 2/3</span>, <span class=\"chem\">E(X_2) = ∫_0^1 3x^3 dx = 3/4</span>, <span class=\"chem\">E(X_3) = ∫_0^1 4x^4 dx = 4/5</span>.<br>(c) 규칙: <span class=\"chem\">E(X_n) = (n + 1)/(n + 2)</span>. 증명: <span class=\"chem\">E(X_n) = ∫_0^1 (n + 1)x^{n+1} dx = (n + 1)/(n + 2)</span>.<br>(d) <span class=\"chem\">∫_0^m (n + 1)x^n dx = m^{n+1} = 1/2 ⇒ m = 2^{-1/(n+1)}</span>.<br>(e) <span class=\"chem\">n = 3</span>: 평균 <span class=\"chem\">4/5 = 0.8</span>, 중앙값 <span class=\"chem\">2^{-1/4} = 0.840896 ≈ 0.841</span>. 중앙값이 더 커요: <span class=\"chem\">f_3(x) = 4x^3</span>은 <span class=\"chem\">0</span> 근처에서 작고 <span class=\"chem\">1</span> 근처에서 크므로, 왼쪽으로 긴 꼬리가 생겨 평균을 끌어내려요.<br>(f) <span class=\"chem\">E(X_n^2) = ∫_0^1 (n + 1)x^{n+2} dx = (n + 1)/(n + 3)</span>. 그러면 <span class=\"chem\">Var(X_n) = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3))</span>이고, <span class=\"chem\">(n^2 + 4n + 4) - (n^2 + 4n + 3) = 1</span>이므로 <span class=\"chem\">(n + 1)/((n + 2)^2(n + 3))</span>을 얻어요.<br>(g) 분자는 <span class=\"chem\">n</span>처럼, 분모는 <span class=\"chem\">n^3</span>처럼 커지므로 <span class=\"chem\">Var(X_n) → 0</span>; 여기에 <span class=\"chem\">E(X_n) → 1</span>이므로 거의 모든 확률이 <span class=\"chem\">x = 1</span> 바로 아래에 모이게 돼요.</p>",
      // EN: <p>(a) <span class="chem">f_n(x) ≥ 0</span> on <span class="chem">[0, 1]</span> and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = 2/3</span>, <span class="chem">E(X_2) = 3/4</span>, <span class="chem">E(X_3) = 4/5</span>.<br>(c) Conjecture <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">∫_0^1 x(n + 1)x^n dx = (n + 1)[x^{n+2}/(n + 2)]_0^1 = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">m^{n+1} = 1/2 ⇒ m = (1/2)^{1/(n+1)} = 2^{-1/(n+1)}</span>.<br>(e) Mean <span class="chem">0.8</span>, median <span class="chem">2^{-1/4} = 0.841</span>; the median is larger. The density increases towards <span class="chem">x = 1</span>, so the distribution has a long tail to the left (negative skew), which pulls the mean below the median.<br>(f) <span class="chem">E(X_n^2) = (n + 1)/(n + 3)</span>, so <span class="chem">Var = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3)) = (n + 1)/((n + 2)^2(n + 3))</span>, since <span class="chem">(n + 2)^2 - (n + 1)(n + 3) = 1</span>.<br>(g) <span class="chem">Var(X_n) → 0</span> while <span class="chem">E(X_n) → 1</span>: the probability becomes concentrated closer and closer to <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">[0, 1]</span>에서 <span class=\"chem\">f_n(x) ≥ 0</span>이고 <span class=\"chem\">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class=\"chem\">E(X_1) = 2/3</span>, <span class=\"chem\">E(X_2) = 3/4</span>, <span class=\"chem\">E(X_3) = 4/5</span>.<br>(c) 추측 <span class=\"chem\">E(X_n) = (n + 1)/(n + 2)</span>. 증명: <span class=\"chem\">∫_0^1 x(n + 1)x^n dx = (n + 1)[x^{n+2}/(n + 2)]_0^1 = (n + 1)/(n + 2)</span>.<br>(d) <span class=\"chem\">m^{n+1} = 1/2 ⇒ m = (1/2)^{1/(n+1)} = 2^{-1/(n+1)}</span>.<br>(e) 평균 <span class=\"chem\">0.8</span>, 중앙값 <span class=\"chem\">2^{-1/4} = 0.841</span>; 중앙값이 더 크다. 밀도가 <span class=\"chem\">x = 1</span>을 향해 증가하므로 분포는 왼쪽으로 긴 꼬리를 가지며(음의 비대칭), 이것이 평균을 중앙값 아래로 끌어내린다.<br>(f) <span class=\"chem\">E(X_n^2) = (n + 1)/(n + 3)</span>이므로 <span class=\"chem\">Var = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3)) = (n + 1)/((n + 2)^2(n + 3))</span>. 이는 <span class=\"chem\">(n + 2)^2 - (n + 1)(n + 3) = 1</span>이기 때문이다.<br>(g) <span class=\"chem\">Var(X_n) → 0</span>이고 <span class=\"chem\">E(X_n) → 1</span>: 확률이 점점 더 <span class=\"chem\">x = 1</span> 가까이에 집중된다.</p>",
      markscheme: [
        // EN: M1: (a) Integrates: ∫_0^1 (n + 1)xⁿ dx = [xⁿ⁺¹]_0^1.
        "M1: (a) 적분함: ∫_0^1 (n + 1)xⁿ dx = [xⁿ⁺¹]_0^1.",
        // EN: R1: (a) States f_n(x) ≥ 0 on [0, 1] and the integral equals 1, so f_n is a valid pdf (AG).
        "R1: (a) [0, 1]에서 f_n(x) ≥ 0이고 적분값이 1임을 언급하여 f_n이 유효한 확률밀도함수임 (AG).",
        // EN: A1: (b) E(X_1) = 2/3.
        "A1: (b) E(X_1) = 2/3.",
        // EN: A1: (b) E(X_2) = 3/4.
        "A1: (b) E(X_2) = 3/4.",
        // EN: A1: (b) E(X_3) = 4/5.
        "A1: (b) E(X_3) = 4/5.",
        // EN: A1: (c) Conjecture E(X_n) = (n + 1)/(n + 2).
        "A1: (c) 추측 E(X_n) = (n + 1)/(n + 2).",
        // EN: M1: (c) Writes E(X_n) = ∫_0^1 (n + 1)xⁿ⁺¹ dx.
        "M1: (c) E(X_n) = ∫_0^1 (n + 1)xⁿ⁺¹ dx라고 씀.",
        // EN: A1: (c) Evaluates to (n + 1)/(n + 2), proving the conjecture for all n.
        "A1: (c) 계산하여 (n + 1)/(n + 2)를 얻고, 모든 n에 대해 추측을 증명함.",
        // EN: M1: (d) Sets ∫_0^m (n + 1)xⁿ dx = mⁿ⁺¹ = 1/2.
        "M1: (d) ∫_0^m (n + 1)xⁿ dx = mⁿ⁺¹ = 1/2로 놓음.",
        // EN: A1: (d) m = 2^(−1/(n+1)).
        "A1: (d) m = 2^(−1/(n+1)).",
        // EN: A1: (e) Mean = 0.8.
        "A1: (e) 평균 = 0.8.",
        // EN: A1: (e) Median = 2^(−1/4) = 0.841.
        "A1: (e) 중앙값 = 2^(−1/4) = 0.841.",
        // EN: R1: (e) Median is larger; the density rises towards x = 1, so the long tail is on the left (negative skew) and the mean is pulled down.
        "R1: (e) 중앙값이 더 큼; 밀도가 x = 1을 향해 증가하므로 긴 꼬리가 왼쪽에 있고(음의 비대칭) 평균이 끌어내려짐.",
        // EN: M1: (f) Writes E(X_n²) = ∫_0^1 (n + 1)xⁿ⁺² dx.
        "M1: (f) E(X_n²) = ∫_0^1 (n + 1)xⁿ⁺² dx라고 씀.",
        // EN: A1: (f) E(X_n²) = (n + 1)/(n + 3).
        "A1: (f) E(X_n²) = (n + 1)/(n + 3).",
        // EN: M1: (f) Uses Var = E(X_n²) − [E(X_n)]² and combines over the common denominator (n + 2)²(n + 3).
        "M1: (f) Var = E(X_n²) − [E(X_n)]²를 사용하고 공통분모 (n + 2)²(n + 3)으로 정리함.",
        // EN: A1: (f) Uses (n + 2)² − (n + 1)(n + 3) = 1 to reach the given result (AG).
        "A1: (f) (n + 2)² − (n + 1)(n + 3) = 1을 이용해 주어진 결과에 도달함 (AG).",
        // EN: A1: (g) Var(X_n) → 0 (and E(X_n) → 1) as n → ∞.
        "A1: (g) n → ∞일 때 Var(X_n) → 0 (그리고 E(X_n) → 1).",
        // EN: R1: (g) Interprets: the distribution concentrates at (just below) x = 1.
        "R1: (g) 해석: 분포가 x = 1에 (바로 그 아래에) 집중됨.",
      ],
    },

    // ── t4-2-q059 · short · challenge · AHL · AHL 4.13 · 15 marks
    "t4-2-q059": {
      // EN: <p>A screening test for a condition <span class="chem">D</span> gives a positive result for <span class="chem">95%</span> of people who have the condition and for <span class="chem">5%</span> of people who do not. In a city, <span class="chem">1%</span> of people have the condition. Assume that, for a given person, repeated test results are independent of each other once their condition status is known.<br>(a) A person tests positive once. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(b) The person is tested a second time and is positive again. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(c) Show that after <span class="chem">k</span> positive results in a row, <span class="chem">P(D | k positives) = 0.01(0.95)^k / (0.01(0.95)^k + 0.99(0.05)^k)</span>. <strong>[2 marks]</strong><br>(d) Hence show that the odds <span class="chem">P(D | k positives) / P(D′ | k positives) = 19^k/99</span>. <strong>[2 marks]</strong><br>(e) Find the smallest number of consecutive positive results needed for <span class="chem">P(D | k positives)</span> to exceed <span class="chem">0.999</span>. <strong>[3 marks]</strong><br>(f) In a different city the proportion with the condition is <span class="chem">p</span>. Find the set of values of <span class="chem">p</span> for which a single positive test makes it more likely than not that the person has the condition. <strong>[2 marks]</strong></p>
      stem: "<p>어떤 질환 <span class=\"chem\">D</span>에 대한 선별 검사는 그 질환이 있는 사람의 <span class=\"chem\">95%</span>, 질환이 없는 사람의 <span class=\"chem\">5%</span>에게 양성 결과를 낸다. 어느 도시에서는 <span class=\"chem\">1%</span>의 사람이 그 질환을 가지고 있다. 한 사람에 대해, 질환 여부가 정해지면 반복 검사 결과는 서로 독립이라고 가정한다.<br>(a) 어떤 사람이 한 번 검사에서 양성이 나왔다. 그 사람이 질환을 가지고 있을 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 그 사람이 두 번째 검사를 받았고 다시 양성이 나왔다. 그 사람이 질환을 가지고 있을 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(c) <span class=\"chem\">k</span>번 연속 양성 결과가 나온 뒤 <span class=\"chem\">P(D | k positives) = 0.01(0.95)^k / (0.01(0.95)^k + 0.99(0.05)^k)</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(d) 이를 이용하여 (Hence) 오즈(odds) <span class=\"chem\">P(D | k positives) / P(D′ | k positives) = 19^k/99</span>임을 보이시오 (show that). <strong>[2 marks]</strong><br>(e) <span class=\"chem\">P(D | k positives)</span>가 <span class=\"chem\">0.999</span>를 넘기 위해 필요한 연속 양성 결과의 최소 횟수를 구하시오 (Find). <strong>[3 marks]</strong><br>(f) 다른 도시에서는 질환을 가진 사람의 비율이 <span class=\"chem\">p</span>이다. 한 번의 양성 검사로 그 사람이 질환을 가지고 있을 가능성이 그렇지 않을 가능성보다 커지게 되는 <span class=\"chem\">p</span>의 값의 범위를 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: each part is Bayes' theorem with the two-event partition {D, D′}. The evidence grows from one positive to k positives; "independent once the status is known" lets you multiply the test probabilities along each branch.
        "해석: 모든 문항이 두 사건의 분할 {D, D′}에 대한 베이즈 정리예요. 증거가 양성 한 번에서 양성 k번으로 늘어나요. \"질환 여부가 정해지면 독립\"이므로 각 가지를 따라 검사 확률을 곱할 수 있어요.",
        // EN: For (a), the denominator is P(+) = P(D)P(+ | D) + P(D′)P(+ | D′).
        "(a)에서 분모는 P(+) = P(D)P(+ | D) + P(D′)P(+ | D′)예요.",
        // EN: For (d), both conditional probabilities share the same denominator, so the odds are a ratio of the two numerators.
        "(d)에서 두 조건부확률은 분모가 같으므로, 오즈는 두 분자의 비예요.",
        // EN: For (e), P &gt; 0.999 is the same as odds &gt; 0.999/0.001 = 999.
        "(e)에서 P &gt; 0.999는 오즈 &gt; 0.999/0.001 = 999와 같아요.",
      ],
      // EN: <p><b>Decode:</b> repeated Bayes updating on the partition {D, D′}; odds turn the updating into a multiplication by 19 per positive result.<br>(a) <span class="chem">P(+) = 0.0095 + 0.0495 = 0.059</span>, <span class="chem">P(D | +) = 0.0095/0.059 = 0.161017 ≈ 0.161</span>.<br>(b) <span class="chem">P(++ ∩ D) = 0.01(0.9025) = 0.009025</span>, <span class="chem">P(++ ∩ D′) = 0.99(0.0025) = 0.002475</span>, so <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.784783 ≈ 0.785</span>.<br>(c) Given <span class="chem">D</span>, the <span class="chem">k</span> results are independent, each positive with probability <span class="chem">0.95</span>, so <span class="chem">P(k+ | D) = 0.95^k</span>; similarly <span class="chem">P(k+ | D′) = 0.05^k</span>. Bayes' theorem gives the stated formula.<br>(d) <span class="chem">P(D | k+)/P(D′ | k+) = 0.01(0.95)^k/(0.99(0.05)^k) = (1/99)(19)^k</span>.<br>(e) <span class="chem">P &gt; 0.999 ⇔ odds &gt; 999 ⇔ 19^k &gt; 98901 ⇔ k &gt; ln 98901/ln 19 = 3.906</span>. Check: <span class="chem">k = 3</span> gives odds <span class="chem">69.3</span> (P = 0.986); <span class="chem">k = 4</span> gives odds <span class="chem">1316</span> (P = 0.99924). So <span class="chem">k = 4</span>.<br>(f) <span class="chem">P(D | +) &gt; 1/2 ⇔ 0.95p &gt; 0.05(1 - p) ⇔ p &gt; 0.05</span>.</p>
      solution: "<p><b>해석:</b> 분할 {D, D′}에 대한 반복적인 베이즈 갱신이에요. 오즈를 쓰면 양성 결과 한 번마다의 갱신이 19를 곱하는 것으로 바뀌어요.<br>(a) <span class=\"chem\">P(+) = 0.0095 + 0.0495 = 0.059</span>, <span class=\"chem\">P(D | +) = 0.0095/0.059 = 0.161017 ≈ 0.161</span>.<br>(b) <span class=\"chem\">P(++ ∩ D) = 0.01(0.9025) = 0.009025</span>, <span class=\"chem\">P(++ ∩ D′) = 0.99(0.0025) = 0.002475</span>이므로 <span class=\"chem\">P(D | ++) = 0.009025/0.0115 = 0.784783 ≈ 0.785</span>.<br>(c) <span class=\"chem\">D</span>일 때 <span class=\"chem\">k</span>개의 결과는 독립이고 각각 확률 <span class=\"chem\">0.95</span>로 양성이므로 <span class=\"chem\">P(k+ | D) = 0.95^k</span>; 마찬가지로 <span class=\"chem\">P(k+ | D′) = 0.05^k</span>. 베이즈 정리로 주어진 공식을 얻어요.<br>(d) <span class=\"chem\">P(D | k+)/P(D′ | k+) = 0.01(0.95)^k/(0.99(0.05)^k) = (1/99)(19)^k</span>.<br>(e) <span class=\"chem\">P &gt; 0.999 ⇔ odds &gt; 999 ⇔ 19^k &gt; 98901 ⇔ k &gt; ln 98901/ln 19 = 3.906</span>. 확인: <span class=\"chem\">k = 3</span>이면 오즈 <span class=\"chem\">69.3</span> (P = 0.986); <span class=\"chem\">k = 4</span>이면 오즈 <span class=\"chem\">1316</span> (P = 0.99924). 따라서 <span class=\"chem\">k = 4</span>.<br>(f) <span class=\"chem\">P(D | +) &gt; 1/2 ⇔ 0.95p &gt; 0.05(1 - p) ⇔ p &gt; 0.05</span>.</p>",
      // EN: <p>(a) <span class="chem">P(+) = 0.01(0.95) + 0.99(0.05) = 0.059</span>; <span class="chem">P(D | +) = 0.0095/0.059 = 0.161</span>.<br>(b) <span class="chem">P(++) = 0.01(0.95)^2 + 0.99(0.05)^2 = 0.0115</span>; <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.785</span>.<br>(c) By conditional independence <span class="chem">P(k+ | D) = 0.95^k</span> and <span class="chem">P(k+ | D′) = 0.05^k</span>; Bayes gives the result.<br>(d) <span class="chem">P(D′ | k+)</span> has numerator <span class="chem">0.99(0.05)^k</span> over the same denominator, so the odds are <span class="chem">(0.01/0.99)(0.95/0.05)^k = 19^k/99</span>.<br>(e) Need odds <span class="chem">&gt; 999</span>: <span class="chem">19^k &gt; 98901 ⇒ k &gt; 3.906</span>, so <span class="chem">k = 4</span>.<br>(f) <span class="chem">0.95p &gt; 0.05(1 - p) ⇒ p &gt; 0.05</span>, so <span class="chem">0.05 &lt; p ≤ 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(+) = 0.01(0.95) + 0.99(0.05) = 0.059</span>; <span class=\"chem\">P(D | +) = 0.0095/0.059 = 0.161</span>.<br>(b) <span class=\"chem\">P(++) = 0.01(0.95)^2 + 0.99(0.05)^2 = 0.0115</span>; <span class=\"chem\">P(D | ++) = 0.009025/0.0115 = 0.785</span>.<br>(c) 조건부 독립에 의해 <span class=\"chem\">P(k+ | D) = 0.95^k</span>, <span class=\"chem\">P(k+ | D′) = 0.05^k</span>; 베이즈 정리로 결과를 얻는다.<br>(d) <span class=\"chem\">P(D′ | k+)</span>는 분자가 <span class=\"chem\">0.99(0.05)^k</span>이고 분모가 같으므로 오즈는 <span class=\"chem\">(0.01/0.99)(0.95/0.05)^k = 19^k/99</span>.<br>(e) 오즈 <span class=\"chem\">&gt; 999</span>가 필요: <span class=\"chem\">19^k &gt; 98901 ⇒ k &gt; 3.906</span>이므로 <span class=\"chem\">k = 4</span>.<br>(f) <span class=\"chem\">0.95p &gt; 0.05(1 - p) ⇒ p &gt; 0.05</span>이므로 <span class=\"chem\">0.05 &lt; p ≤ 1</span>.</p>",
      markscheme: [
        // EN: M1: (a) Uses total probability P(+) = 0.01 × 0.95 + 0.99 × 0.05.
        "M1: (a) 전체 확률 P(+) = 0.01 × 0.95 + 0.99 × 0.05를 사용함.",
        // EN: A1: (a) P(+) = 0.059.
        "A1: (a) P(+) = 0.059.",
        // EN: A1: (a) P(D | +) = 0.161 (0.161017…).
        "A1: (a) P(D | +) = 0.161 (0.161017…).",
        // EN: M1: (b) Uses P(++ | D) = 0.95² and P(++ | D′) = 0.05² (or updates the prior to 0.161017).
        "M1: (b) P(++ | D) = 0.95²와 P(++ | D′) = 0.05²를 사용함 (또는 사전확률을 0.161017로 갱신함).",
        // EN: A1: (b) P(++) = 0.0115.
        "A1: (b) P(++) = 0.0115.",
        // EN: A1: (b) P(D | ++) = 0.785 (0.784783…).
        "A1: (b) P(D | ++) = 0.785 (0.784783…).",
        // EN: M1: (c) States P(k positives | D) = 0.95^k and P(k positives | D′) = 0.05^k by conditional independence.
        "M1: (c) 조건부 독립에 의해 P(k positives | D) = 0.95^k, P(k positives | D′) = 0.05^k라고 언급함.",
        // EN: A1: (c) Substitutes into Bayes' theorem to obtain the given expression (AG).
        "A1: (c) 베이즈 정리에 대입하여 주어진 식을 얻음 (AG).",
        // EN: M1: (d) Writes P(D′ | k positives) = 0.99(0.05)^k/(same denominator) and divides.
        "M1: (d) P(D′ | k positives) = 0.99(0.05)^k/(same denominator)라고 쓰고 나눔.",
        // EN: A1: (d) Simplifies (0.01/0.99)(0.95/0.05)^k = 19^k/99 (AG).
        "A1: (d) (0.01/0.99)(0.95/0.05)^k = 19^k/99로 간단히 함 (AG).",
        // EN: M1: (e) Converts P > 0.999 into odds > 999 (or solves the inequality directly).
        "M1: (e) P > 0.999를 오즈 > 999로 바꿈 (또는 부등식을 직접 풂).",
        // EN: A1: (e) 19^k > 98901, so k > ln 98901/ln 19 = 3.906…
        "A1: (e) 19^k > 98901이므로 k > ln 98901/ln 19 = 3.906…",
        // EN: A1: (e) k = 4.
        "A1: (e) k = 4.",
        // EN: M1: (f) Sets 0.95p/(0.95p + 0.05(1 − p)) > 0.5, or 0.95p > 0.05(1 − p).
        "M1: (f) 0.95p/(0.95p + 0.05(1 − p)) > 0.5, 또는 0.95p > 0.05(1 − p)로 놓음.",
        // EN: A1: (f) p > 0.05 (with p ≤ 1).
        "A1: (f) p > 0.05 (단, p ≤ 1).",
      ],
    },

    // ── t4-2-q060 · short · challenge · AHL · AHL 4.14, SL 4.7 · 17 marks
    "t4-2-q060": {
      // EN: <p>This investigation finds the variance of a discrete uniform random variable. Let <span class="chem">X</span> take each of the values <span class="chem">1, 2, …, n</span> with probability <span class="chem">1/n</span>.<br>(a) Find <span class="chem">Var(X)</span> for <span class="chem">n = 2</span>, <span class="chem">n = 3</span> and <span class="chem">n = 4</span>. <strong>[3 marks]</strong><br>(b) Verify that your answers fit the formula <span class="chem">Var(X) = (n^2 - 1)/12</span>. <strong>[1 mark]</strong><br>(c) Using <span class="chem">Σ_{r=1}^n r = n(n + 1)/2</span> and <span class="chem">Σ_{r=1}^n r^2 = n(n + 1)(2n + 1)/6</span>, prove the formula in (b). <strong>[4 marks]</strong><br>(d) A fair spinner has <span class="chem">n</span> equal sectors labelled <span class="chem">5, 10, 15, …, 5n</span>. Write down the mean and variance of the score in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) Another fair spinner has equal sectors labelled <span class="chem">3, 7, 11, …</span>, each label <span class="chem">4</span> more than the previous one. The variance of its score is <span class="chem">160</span>. Find the number of sectors. <strong>[3 marks]</strong><br>(f) Find the mean score of the spinner in (e). <strong>[1 mark]</strong><br>(g) Let <span class="chem">U</span> be a continuous random variable with constant density <span class="chem">1/n</span> on <span class="chem">0 ≤ u ≤ n</span>. Show that <span class="chem">Var(U) = n^2/12</span>, and comment on <span class="chem">Var(X)/Var(U)</span> for large <span class="chem">n</span>. <strong>[3 marks]</strong></p>
      stem: "<p>이 탐구에서는 이산균등확률변수의 분산을 구한다. <span class=\"chem\">X</span>가 값 <span class=\"chem\">1, 2, …, n</span>을 각각 확률 <span class=\"chem\">1/n</span>로 갖는다고 하자.<br>(a) <span class=\"chem\">n = 2</span>, <span class=\"chem\">n = 3</span>, <span class=\"chem\">n = 4</span>일 때 <span class=\"chem\">Var(X)</span>를 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 구한 답이 공식 <span class=\"chem\">Var(X) = (n^2 - 1)/12</span>에 맞는지 확인하시오 (Verify). <strong>[1 mark]</strong><br>(c) <span class=\"chem\">Σ_{r=1}^n r = n(n + 1)/2</span>와 <span class=\"chem\">Σ_{r=1}^n r^2 = n(n + 1)(2n + 1)/6</span>을 이용하여 (b)의 공식을 증명하시오 (prove). <strong>[4 marks]</strong><br>(d) 공정한 회전판에 <span class=\"chem\">5, 10, 15, …, 5n</span>이 적힌 <span class=\"chem\">n</span>개의 같은 크기의 부채꼴이 있다. 점수의 평균과 분산을 <span class=\"chem\">n</span>으로 나타내어 쓰시오 (Write down). <strong>[2 marks]</strong><br>(e) 또 다른 공정한 회전판에는 <span class=\"chem\">3, 7, 11, …</span>이 적힌 같은 크기의 부채꼴이 있고, 각 수는 바로 앞의 수보다 <span class=\"chem\">4</span>만큼 크다. 이 회전판 점수의 분산은 <span class=\"chem\">160</span>이다. 부채꼴의 개수를 구하시오 (Find). <strong>[3 marks]</strong><br>(f) (e)의 회전판의 평균 점수를 구하시오 (Find). <strong>[1 mark]</strong><br>(g) <span class=\"chem\">U</span>를 <span class=\"chem\">0 ≤ u ≤ n</span>에서 일정한 밀도 <span class=\"chem\">1/n</span>을 갖는 연속확률변수라 하자. <span class=\"chem\">Var(U) = n^2/12</span>임을 보이고 (Show that), <span class=\"chem\">n</span>이 클 때 <span class=\"chem\">Var(X)/Var(U)</span>에 대해 논하시오 (comment on). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: an investigation in three stages: small cases, then a general proof using the two sum formulae, then applications using the linear-transformation rules E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X).
        "해석: 세 단계의 탐구예요: 작은 경우, 다음으로 두 합의 공식을 이용한 일반적인 증명, 그리고 일차변환 규칙 E(aX + b) = aE(X) + b와 Var(aX + b) = a²Var(X)를 이용한 응용이에요.",
        // EN: For n = 3: E(X) = 2, E(X²) = (1 + 4 + 9)/3 = 14/3, so Var = 14/3 − 4.
        "n = 3일 때: E(X) = 2, E(X²) = (1 + 4 + 9)/3 = 14/3이므로 Var = 14/3 − 4.",
        // EN: For (e), write the k-th label as 4k − 1: the score is a linear function of X.
        "(e)에서는 k번째 수를 4k − 1로 쓰세요: 점수는 X의 일차함수예요.",
        // EN: For (g), U is continuous: use integrals instead of sums.
        "(g)에서 U는 연속이므로 합 대신 적분을 사용하세요.",
      ],
      // EN: <p><b>Decode:</b> compute → conjecture (given) → prove with sum formulae → apply with <span class="chem">aX + b</span> → compare with the continuous version.<br>(a) <span class="chem">n = 2</span>: <span class="chem">E = 3/2</span>, <span class="chem">E(X^2) = 5/2</span>, Var <span class="chem">= 5/2 - 9/4 = 1/4</span>. <span class="chem">n = 3</span>: <span class="chem">14/3 - 4 = 2/3</span>. <span class="chem">n = 4</span>: <span class="chem">E = 5/2</span>, <span class="chem">E(X^2) = 30/4</span>, Var <span class="chem">= 15/2 - 25/4 = 5/4</span>.<br>(b) <span class="chem">(4 - 1)/12 = 1/4</span>, <span class="chem">(9 - 1)/12 = 2/3</span>, <span class="chem">(16 - 1)/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (1/n)(n(n + 1)/2) = (n + 1)/2</span>; <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>. <span class="chem">Var(X) = (n + 1)(2n + 1)/6 - (n + 1)^2/4 = (n + 1)(4n + 2 - 3n - 3)/12 = (n + 1)(n - 1)/12 = (n^2 - 1)/12</span>.<br>(d) Score <span class="chem">5X</span>: <span class="chem">E = 5(n + 1)/2</span>, <span class="chem">Var = 25(n^2 - 1)/12</span>.<br>(e) The labels are <span class="chem">4k - 1</span> for <span class="chem">k = 1, …, n</span>, so <span class="chem">Y = 4X - 1</span> and <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 - 1 = 120 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(11 + 1)/2 - 1 = 23</span>.<br>(g) <span class="chem">E(U) = ∫_0^n u/n du = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. Then <span class="chem">Var(X)/Var(U) = (n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>
      solution: "<p><b>해석:</b> 계산 → 추측(주어짐) → 합의 공식으로 증명 → <span class=\"chem\">aX + b</span>로 응용 → 연속형과 비교.<br>(a) <span class=\"chem\">n = 2</span>: <span class=\"chem\">E = 3/2</span>, <span class=\"chem\">E(X^2) = 5/2</span>, Var <span class=\"chem\">= 5/2 - 9/4 = 1/4</span>. <span class=\"chem\">n = 3</span>: <span class=\"chem\">14/3 - 4 = 2/3</span>. <span class=\"chem\">n = 4</span>: <span class=\"chem\">E = 5/2</span>, <span class=\"chem\">E(X^2) = 30/4</span>, Var <span class=\"chem\">= 15/2 - 25/4 = 5/4</span>.<br>(b) <span class=\"chem\">(4 - 1)/12 = 1/4</span>, <span class=\"chem\">(9 - 1)/12 = 2/3</span>, <span class=\"chem\">(16 - 1)/12 = 5/4</span>.<br>(c) <span class=\"chem\">E(X) = (1/n)(n(n + 1)/2) = (n + 1)/2</span>; <span class=\"chem\">E(X^2) = (n + 1)(2n + 1)/6</span>. <span class=\"chem\">Var(X) = (n + 1)(2n + 1)/6 - (n + 1)^2/4 = (n + 1)(4n + 2 - 3n - 3)/12 = (n + 1)(n - 1)/12 = (n^2 - 1)/12</span>.<br>(d) 점수 <span class=\"chem\">5X</span>: <span class=\"chem\">E = 5(n + 1)/2</span>, <span class=\"chem\">Var = 25(n^2 - 1)/12</span>.<br>(e) 수는 <span class=\"chem\">k = 1, …, n</span>에 대해 <span class=\"chem\">4k - 1</span>이므로 <span class=\"chem\">Y = 4X - 1</span>이고 <span class=\"chem\">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 - 1 = 120 ⇒ n = 11</span>.<br>(f) <span class=\"chem\">E(Y) = 4(11 + 1)/2 - 1 = 23</span>.<br>(g) <span class=\"chem\">E(U) = ∫_0^n u/n du = n/2</span>, <span class=\"chem\">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>이므로 <span class=\"chem\">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. 그러면 <span class=\"chem\">Var(X)/Var(U) = (n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>",
      // EN: <p>(a) <span class="chem">n = 2</span>: <span class="chem">1/4</span>; <span class="chem">n = 3</span>: <span class="chem">2/3</span>; <span class="chem">n = 4</span>: <span class="chem">5/4</span>.<br>(b) <span class="chem">3/12 = 1/4</span>, <span class="chem">8/12 = 2/3</span>, <span class="chem">15/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (n + 1)/2</span>, <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>, <span class="chem">Var(X) = (n + 1)[2(2n + 1) - 3(n + 1)]/12 = (n + 1)(n - 1)/12</span>.<br>(d) Score <span class="chem">= 5X</span>: mean <span class="chem">5(n + 1)/2</span>, variance <span class="chem">25(n^2 - 1)/12</span>.<br>(e) Score <span class="chem">Y = 4X - 1</span>, <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 = 121 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(6) - 1 = 23</span>.<br>(g) <span class="chem">E(U) = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. The ratio <span class="chem">(n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">n = 2</span>: <span class=\"chem\">1/4</span>; <span class=\"chem\">n = 3</span>: <span class=\"chem\">2/3</span>; <span class=\"chem\">n = 4</span>: <span class=\"chem\">5/4</span>.<br>(b) <span class=\"chem\">3/12 = 1/4</span>, <span class=\"chem\">8/12 = 2/3</span>, <span class=\"chem\">15/12 = 5/4</span>.<br>(c) <span class=\"chem\">E(X) = (n + 1)/2</span>, <span class=\"chem\">E(X^2) = (n + 1)(2n + 1)/6</span>, <span class=\"chem\">Var(X) = (n + 1)[2(2n + 1) - 3(n + 1)]/12 = (n + 1)(n - 1)/12</span>.<br>(d) 점수 <span class=\"chem\">= 5X</span>: 평균 <span class=\"chem\">5(n + 1)/2</span>, 분산 <span class=\"chem\">25(n^2 - 1)/12</span>.<br>(e) 점수 <span class=\"chem\">Y = 4X - 1</span>, <span class=\"chem\">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 = 121 ⇒ n = 11</span>.<br>(f) <span class=\"chem\">E(Y) = 4(6) - 1 = 23</span>.<br>(g) <span class=\"chem\">E(U) = n/2</span>, <span class=\"chem\">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>이므로 <span class=\"chem\">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. 비 <span class=\"chem\">(n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>",
      markscheme: [
        // EN: A1: (a) n = 2: Var = 1/4.
        "A1: (a) n = 2: Var = 1/4.",
        // EN: A1: (a) n = 3: Var = 2/3.
        "A1: (a) n = 3: Var = 2/3.",
        // EN: A1: (a) n = 4: Var = 5/4.
        "A1: (a) n = 4: Var = 5/4.",
        // EN: A1: (b) Substitutes n = 2, 3, 4 into (n² − 1)/12 and obtains 1/4, 2/3, 5/4.
        "A1: (b) n = 2, 3, 4를 (n² − 1)/12에 대입하여 1/4, 2/3, 5/4를 얻음.",
        // EN: M1: (c) Writes E(X) = (1/n)Σr and E(X²) = (1/n)Σr².
        "M1: (c) E(X) = (1/n)Σr, E(X²) = (1/n)Σr²라고 씀.",
        // EN: A1: (c) E(X) = (n + 1)/2.
        "A1: (c) E(X) = (n + 1)/2.",
        // EN: A1: (c) E(X²) = (n + 1)(2n + 1)/6.
        "A1: (c) E(X²) = (n + 1)(2n + 1)/6.",
        // EN: A1: (c) Simplifies Var = (n + 1)(2n + 1)/6 − (n + 1)²/4 to (n² − 1)/12 (AG).
        "A1: (c) Var = (n + 1)(2n + 1)/6 − (n + 1)²/4를 (n² − 1)/12로 간단히 함 (AG).",
        // EN: A1: (d) Mean 5(n + 1)/2.
        "A1: (d) 평균 5(n + 1)/2.",
        // EN: A1: (d) Variance 25(n² − 1)/12.
        "A1: (d) 분산 25(n² − 1)/12.",
        // EN: M1: (e) Recognises the score is Y = 4X − 1.
        "M1: (e) 점수가 Y = 4X − 1임을 인식함.",
        // EN: M1: (e) Uses Var(Y) = 16 Var(X): 16(n² − 1)/12 = 160.
        "M1: (e) Var(Y) = 16 Var(X)를 사용함: 16(n² − 1)/12 = 160.",
        // EN: A1: (e) n = 11.
        "A1: (e) n = 11.",
        // EN: A1: (f) E(Y) = 4E(X) − 1 = 23.
        "A1: (f) E(Y) = 4E(X) − 1 = 23.",
        // EN: M1: (g) Finds E(U²) = ∫_0^n u²/n du = n²/3 (with E(U) = n/2).
        "M1: (g) E(U²) = ∫_0^n u²/n du = n²/3을 구함 (E(U) = n/2와 함께).",
        // EN: A1: (g) Var(U) = n²/3 − n²/4 = n²/12 (AG).
        "A1: (g) Var(U) = n²/3 − n²/4 = n²/12 (AG).",
        // EN: R1: (g) Var(X)/Var(U) = 1 − 1/n² → 1 as n → ∞: for large n the discrete and continuous uniform models have almost the same spread.
        "R1: (g) n → ∞일 때 Var(X)/Var(U) = 1 − 1/n² → 1: n이 크면 이산균등분포 모델과 연속균등분포 모델의 퍼짐이 거의 같음.",
      ],
    },

  }
});
