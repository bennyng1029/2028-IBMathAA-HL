/* t4-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't4-2.q', {
  questions: {

    // ── t4-2-q001 · mcq · foundation · SL · SL 4.6 · 2 marks
    "t4-2-q001": {
      // EN: <p>Events <span class="chem">A</span> and <span class="chem">B</span> are <strong>mutually exclusive</strong> with <span class="chem">P(A) = 0.30</span> and <span class="chem">P(B) = 0.50</span>. What is <span class="chem">P(A ∪ B)</span>?</p>
      stem: "<p>事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> <strong>互斥</strong>，其中 <span class=\"chem\">P(A) = 0.30</span> 及 <span class=\"chem\">P(B) = 0.50</span>。<span class=\"chem\">P(A ∪ B)</span> 是多少？</p>",
      options: [
        // EN: <span class="chem">0.80</span>
        "<span class=\"chem\">0.80</span>",
        // EN: <span class="chem">0.65</span>
        "<span class=\"chem\">0.65</span>",
        // EN: <span class="chem">0.15</span>
        "<span class=\"chem\">0.15</span>",
        // EN: <span class="chem">0.20</span>
        "<span class=\"chem\">0.20</span>",
      ],
      hints: [
        // EN: For mutually exclusive events, <span class="chem">P(A ∩ B) = 0</span>.
        "對於互斥事件，<span class=\"chem\">P(A ∩ B) = 0</span>。",
        // EN: Use <span class="chem">P(A ∪ B) = P(A) + P(B)</span>.
        "使用 <span class=\"chem\">P(A ∪ B) = P(A) + P(B)</span>。",
      ],
      // EN: <p>Because <span class="chem">A</span> and <span class="chem">B</span> are mutually exclusive, <span class="chem">P(A ∩ B) = 0</span>, so <span class="chem">P(A ∪ B) = P(A) + P(B) = 0.30 + 0.50 = 0.80</span>.</p>
      solution: "<p>由於 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 互斥，<span class=\"chem\">P(A ∩ B) = 0</span>，故 <span class=\"chem\">P(A ∪ B) = P(A) + P(B) = 0.30 + 0.50 = 0.80</span>。</p>",
      misconception: {
        // EN (option B): You subtracted 0.30 × 0.50 = 0.15, which is the rule for independent events, not mutually exclusive events!
        "1": "你減去了 0.30 × 0.50 = 0.15，這是獨立事件的法則，而非互斥事件的法則！",
        // EN (option C): You multiplied P(A) and P(B), which gives P(A ∩ B) for independent events; for mutually exclusive events, P(A ∩ B) = 0.
        "2": "你把 P(A) 與 P(B) 相乘，那是獨立事件的 P(A ∩ B)；對於互斥事件，P(A ∩ B) = 0。",
        // EN (option D): You subtracted P(A) from P(B) instead of adding them.
        "3": "你把 P(B) 減去 P(A)，而非將兩者相加。",
      },
    },

    // ── t4-2-q002 · numeric · foundation · SL · SL 4.6 · 3 marks
    "t4-2-q002": {
      // EN: <p>Events <span class="chem">A</span> and <span class="chem">B</span> are <strong>independent</strong> with <span class="chem">P(A) = 0.40</span> and <span class="chem">P(B) = 0.60</span>. Calculate <span class="chem">P(A ∪ B)</span>.</p>
      stem: "<p>事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> <strong>獨立</strong>，其中 <span class=\"chem\">P(A) = 0.40</span> 及 <span class=\"chem\">P(B) = 0.60</span>。計算 (Calculate) <span class=\"chem\">P(A ∪ B)</span>。</p>",
      hints: [
        // EN: Since <span class="chem">A</span> and <span class="chem">B</span> are independent, <span class="chem">P(A ∩ B) = P(A)P(B) = 0.40 × 0.60</span>.
        "由於 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 獨立，<span class=\"chem\">P(A ∩ B) = P(A)P(B) = 0.40 × 0.60</span>。",
        // EN: Substitute into <span class="chem">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>.
        "代入 <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>。",
      ],
      // EN: <p>By independence, <span class="chem">P(A ∩ B) = 0.40 × 0.60 = 0.24</span> <b>[A1]</b>.<br>Then <span class="chem">P(A ∪ B) = 0.40 + 0.60 - 0.24 = 0.76</span> <b>[M1 A1]</b>.</p>
      solution: "<p>由獨立性，<span class=\"chem\">P(A ∩ B) = 0.40 × 0.60 = 0.24</span> <b>[A1]</b>.<br>然後 <span class=\"chem\">P(A ∪ B) = 0.40 + 0.60 - 0.24 = 0.76</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q003 · numeric · foundation · SL · SL 4.7 · 4 marks
    "t4-2-q003": {
      // EN: <p>A discrete random variable <span class="chem">X</span> takes the values <span class="chem">1, 2, 3, 4</span> with probabilities <span class="chem">0.1, k, 2k, 0.3</span> respectively. Find the expected value <span class="chem">E(X)</span>.</p>
      stem: "<p>離散隨機變數 <span class=\"chem\">X</span> 取值 <span class=\"chem\">1, 2, 3, 4</span> 的概率分別為 <span class=\"chem\">0.1, k, 2k, 0.3</span>。求 (Find) 期望值 <span class=\"chem\">E(X)</span>。</p>",
      hints: [
        // EN: Use <span class="chem">Σ P(X = x) = 1</span> to solve <span class="chem">0.1 + k + 2k + 0.3 = 1</span> for <span class="chem">k</span>.
        "利用 <span class=\"chem\">Σ P(X = x) = 1</span> 解 <span class=\"chem\">0.1 + k + 2k + 0.3 = 1</span> 以求 <span class=\"chem\">k</span>。",
        // EN: Then compute <span class="chem">E(X) = 1(0.1) + 2(k) + 3(2k) + 4(0.3)</span>.
        "然後計算 <span class=\"chem\">E(X) = 1(0.1) + 2(k) + 3(2k) + 4(0.3)</span>。",
      ],
      // EN: <p>Since probabilities sum to <span class="chem">1</span>: <span class="chem">0.4 + 3k = 1 ⇒ k = 0.2</span> <b>[M1 A1]</b>.<br>Thus <span class="chem">E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9</span> <b>[M1 A1]</b>.</p>
      solution: "<p>由於概率總和為 <span class=\"chem\">1</span>：<span class=\"chem\">0.4 + 3k = 1 ⇒ k = 0.2</span> <b>[M1 A1]</b>.<br>因此 <span class=\"chem\">E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q004 · numeric · foundation · SL · SL 4.8 · 4 marks
    "t4-2-q004": {
      // EN: <p>A binomial random variable <span class="chem">X ~ B(n, p)</span> has mean <span class="chem">E(X) = 12</span> and variance <span class="chem">Var(X) = 3</span>. Find the number of trials <span class="chem">n</span>.</p>
      stem: "<p>二項隨機變數 <span class=\"chem\">X ~ B(n, p)</span> 的平均數為 <span class=\"chem\">E(X) = 12</span>，方差為 <span class=\"chem\">Var(X) = 3</span>。求 (Find) 試驗次數 <span class=\"chem\">n</span>。</p>",
      hints: [
        // EN: Divide <span class="chem">Var(X) = np(1 - p) = 3</span> by <span class="chem">E(X) = np = 12</span> to find <span class="chem">1 - p</span>.
        "將 <span class=\"chem\">Var(X) = np(1 - p) = 3</span> 除以 <span class=\"chem\">E(X) = np = 12</span> 以求 <span class=\"chem\">1 - p</span>。",
        // EN: Once you have <span class="chem">p = 0.75</span>, substitute into <span class="chem">np = 12</span> to solve for <span class="chem">n</span>.
        "求得 <span class=\"chem\">p = 0.75</span> 後，代入 <span class=\"chem\">np = 12</span> 解出 <span class=\"chem\">n</span>。",
      ],
      // EN: <p><span class="chem">1 - p = Var(X) / E(X) = 3 / 12 = 0.25 ⇒ p = 0.75</span> <b>[M1 A1]</b>.<br>From <span class="chem">np = 12</span>, we get <span class="chem">n = 12 / 0.75 = 16</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">1 - p = Var(X) / E(X) = 3 / 12 = 0.25 ⇒ p = 0.75</span> <b>[M1 A1]</b>.<br>由 <span class=\"chem\">np = 12</span>，得 <span class=\"chem\">n = 12 / 0.75 = 16</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q005 · mcq · exam · SL · SL 4.8 · 3 marks
    "t4-2-q005": {
      // EN: <p>A biased coin has probability <span class="chem">1/3</span> of landing on Heads on any toss. If the coin is tossed <span class="chem">4</span> times independently, what is the exact probability of obtaining <strong>exactly 2</strong> Heads?</p>
      stem: "<p>一枚不均勻硬幣每次投擲出現正面的概率為 <span class=\"chem\">1/3</span>。若獨立投擲該硬幣 <span class=\"chem\">4</span> 次，獲得<strong>恰好 2 次</strong>正面的準確概率是多少？</p>",
      options: [
        // EN: <span class="chem">8/27</span>
        "<span class=\"chem\">8/27</span>",
        // EN: <span class="chem">4/81</span>
        "<span class=\"chem\">4/81</span>",
        // EN: <span class="chem">2/9</span>
        "<span class=\"chem\">2/9</span>",
        // EN: <span class="chem">16/81</span>
        "<span class=\"chem\">16/81</span>",
      ],
      hints: [
        // EN: Use the Binomial formula <span class="chem">P(X = 2) = 4C2 (1/3)^2 (2/3)^2</span>.
        "使用二項分佈公式 <span class=\"chem\">P(X = 2) = 4C2 (1/3)^2 (2/3)^2</span>。",
        // EN: Remember <span class="chem">4C2 = 6</span>.
        "緊記 <span class=\"chem\">4C2 = 6</span>。",
      ],
      // EN: <p>Let <span class="chem">X ~ B(4, 1/3)</span>. Then <span class="chem">P(X = 2) = 6 × (1/3)^2 × (2/3)^2 = 6 × (4/81) = 24/81 = 8/27</span>.</p>
      solution: "<p>設 <span class=\"chem\">X ~ B(4, 1/3)</span>。則 <span class=\"chem\">P(X = 2) = 6 × (1/3)^2 × (2/3)^2 = 6 × (4/81) = 24/81 = 8/27</span>。</p>",
      misconception: {
        // EN (option B): You computed (1/3)²(2/3)² = 4/81 for a single specific sequence (such as HHTT) and forgot to multiply by 4C2 = 6!
        "1": "你只計算了單一特定次序（例如正正反反）的概率 (1/3)²(2/3)² = 4/81，而忘記乘以 4C2 = 6！",
        // EN (option C): You multiplied 6 × (1/3)⁴ = 6/81 = 2/27 or forgot the (2/3)² factor for the two Tails.
        "2": "你計算了 6 × (1/3)⁴ = 6/81 = 2/27 或漏了兩次反面的因子 (2/3)²。",
        // EN (option D): 16/81 is (2/3)⁴, which is the probability of obtaining 0 Heads (all Tails).
        "3": "16/81 是 (2/3)⁴，即獲得 0 次正面（全部反面）的概率。",
      },
    },

    // ── t4-2-q006 · numeric · exam · SL · SL 4.8 · 4 marks
    "t4-2-q006": {
      // EN: <p>A basketball player makes each free throw with constant probability <span class="chem">p = 0.30</span>, independently of other attempts. Find the minimum number of attempts <span class="chem">n</span> required so that the probability of making <strong>at least one</strong> free throw exceeds <span class="chem">0.95</span>.</p>
      stem: "<p>一名籃球員每次罰球命中的概率恒為 <span class=\"chem\">p = 0.30</span>，各次投籃互相獨立。求 (Find) 所需的最少投籃次數 <span class=\"chem\">n</span>，使命中<strong>至少一次</strong>罰球的概率超過 <span class=\"chem\">0.95</span>。</p>",
      hints: [
        // EN: Set up the complement inequality: <span class="chem">1 - P(X = 0) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span>.
        "列出餘事件不等式：<span class=\"chem\">1 - P(X = 0) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span>。",
        // EN: Solve <span class="chem">n &gt; ln(0.05) / ln(0.70)</span> and round <strong>up</strong> to the next whole number.
        "解 <span class=\"chem\">n &gt; ln(0.05) / ln(0.70)</span> 並<strong>向上</strong>進位至下一個整數。",
      ],
      // EN: <p><span class="chem">P(X ≥ 1) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span> <b>[M1 A1]</b>.<br><span class="chem">n &gt; ln(0.05) / ln(0.70) ≈ 8.399</span> <b>[M1]</b>.<br>Rounding up to the next integer gives <span class="chem">n = 9</span> attempts <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(X ≥ 1) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span> <b>[M1 A1]</b>.<br><span class=\"chem\">n &gt; ln(0.05) / ln(0.70) ≈ 8.399</span> <b>[M1]</b>.<br>向上進位至下一個整數得 <span class=\"chem\">n = 9</span> 次 <b>[A1]</b>.</p>",
    },

    // ── t4-2-q007 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q007": {
      // EN: <p>A random variable <span class="chem">X</span> is normally distributed with mean <span class="chem">μ = 100</span> and standard deviation <span class="chem">σ = 15</span>. Find the value of <span class="chem">k</span> such that <span class="chem">P(X &gt; k) = 0.20</span>, giving your answer to 3 s.f.</p>
      stem: "<p>隨機變數 <span class=\"chem\">X</span> 服從正態分佈，平均數為 <span class=\"chem\">μ = 100</span>，標準差為 <span class=\"chem\">σ = 15</span>。求 (Find) <span class=\"chem\">k</span> 的值使得 <span class=\"chem\">P(X &gt; k) = 0.20</span>，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Since the right-tail area is <span class="chem">P(X &gt; k) = 0.20</span>, the left-tail area is <span class="chem">P(X &lt; k) = 0.80</span>.
        "由於右尾面積為 <span class=\"chem\">P(X &gt; k) = 0.20</span>，左尾面積為 <span class=\"chem\">P(X &lt; k) = 0.80</span>。",
        // EN: Use <span class="mono">invNorm(0.80, 100, 15)</span> or <span class="chem">k = 100 + 15 × invNorm(0.80)</span>.
        "使用 <span class=\"mono\">invNorm(0.80, 100, 15)</span> 或 <span class=\"chem\">k = 100 + 15 × invNorm(0.80)</span>。",
      ],
      // EN: <p>Left-tail probability is <span class=\"chem\">P(X &lt; k) = 1 - 0.20 = 0.80</span> <b>[M1]</b>.<br>Using <span class=\"chem">z = invNorm(0.80) ≈ 0.84162</span>, <span class=\"chem">k = 100 + 15(0.84162) = 112.62 ≈ 113</span> (3 s.f.) <b>[M1 A1]</b>.</p>
      solution: "<p>左尾概率為 <span class=\"chem\">P(X &lt; k) = 1 - 0.20 = 0.80</span> <b>[M1]</b>.<br>利用 <span class=\"chem\">z = invNorm(0.80) ≈ 0.84162</span>，<span class=\"chem\">k = 100 + 15(0.84162) = 112.62 ≈ 113</span>（3 位有效數字）<b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q008 · numeric · exam · SL · SL 4.12 · 4 marks
    "t4-2-q008": {
      // EN: <p>A normal random variable <span class="chem">X ~ N(μ, σ^2)</span> satisfies <span class="chem">P(X &lt; 26) = P(Z &lt; -1.5)</span> and <span class="chem">P(X &gt; 46) = P(Z &gt; 1.0)</span>, where <span class="chem">Z ~ N(0, 1)</span>. Find the mean <span class="chem">μ</span>.</p>
      stem: "<p>正態隨機變數 <span class=\"chem\">X ~ N(μ, σ^2)</span> 滿足 <span class=\"chem\">P(X &lt; 26) = P(Z &lt; -1.5)</span> 及 <span class=\"chem\">P(X &gt; 46) = P(Z &gt; 1.0)</span>，其中 <span class=\"chem\">Z ~ N(0, 1)</span>。求 (Find) 平均數 <span class=\"chem\">μ</span>。</p>",
      hints: [
        // EN: Use <span class="chem">(x - μ)/σ = z</span> to write two linear equations: <span class="chem">26 - μ = -1.5σ</span> and <span class="chem">46 - μ = 1.0σ</span>.
        "利用 <span class=\"chem\">(x - μ)/σ = z</span> 寫出兩條線性方程：<span class=\"chem\">26 - μ = -1.5σ</span> 與 <span class=\"chem\">46 - μ = 1.0σ</span>。",
        // EN: Subtract the first equation from the second to find <span class="chem">σ</span>, then back-substitute for <span class="chem">μ</span>.
        "從第二條方程減去第一條方程以求 <span class=\"chem\">σ</span>，再代回求 <span class=\"chem\">μ</span>。",
      ],
      // EN: <p>Standardizing gives <span class=\"chem">26 - μ = -1.5σ</span> and <span class=\"chem">46 - μ = 1.0σ</span> <b>[M1 A1]</b>.<br>Subtracting gives <span class=\"chem">20 = 2.5σ ⇒ σ = 8</span> <b>[A1]</b>.<br>Therefore <span class=\"chem">μ = 46 - 8 = 38</span> <b>[A1]</b>.</p>
      solution: "<p>標準化得 <span class=\"chem\">26 - μ = -1.5σ</span> 與 <span class=\"chem\">46 - μ = 1.0σ</span> <b>[M1 A1]</b>.<br>相減得 <span class=\"chem\">20 = 2.5σ ⇒ σ = 8</span> <b>[A1]</b>.<br>因此 <span class=\"chem\">μ = 46 - 8 = 38</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q009 · multi · exam · SL · SL 4.6, 4.8, 4.9 · 3 marks
    "t4-2-q009": {
      // EN: <p>Select <strong>all</strong> statements that are always true for probability distributions and events.</p>
      stem: "<p>選出<strong>所有</strong>對概率分佈與事件恒成立的陳述。</p>",
      options: [
        // EN: For any normal random variable <span class="chem">X ~ N(μ, σ^2)</span>, the mean, median, and mode are all equal to <span class="chem">μ</span>.
        "對於任何正態隨機變數 <span class=\"chem\">X ~ N(μ, σ^2)</span>，平均數、中位數與眾數皆等於 <span class=\"chem\">μ</span>。",
        // EN: If events <span class="chem">A</span> and <span class="chem">B</span> are independent, then <span class="chem">P(A | B) = P(A)</span>.
        "若事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 獨立，則 <span class=\"chem\">P(A | B) = P(A)</span>。",
        // EN: For a binomial random variable <span class="chem">X ~ B(n, p)</span> with <span class="chem">0 &lt; p &lt; 1</span>, the variance <span class="chem">Var(X)</span> is strictly less than the mean <span class="chem">E(X)</span>.
        "對於 <span class=\"chem\">0 &lt; p &lt; 1</span> 的二項隨機變數 <span class=\"chem\">X ~ B(n, p)</span>，方差 <span class=\"chem\">Var(X)</span> 嚴格小於平均數 <span class=\"chem\">E(X)</span>。",
        // EN: For any two events with <span class="chem">P(A) &gt; 0</span> and <span class="chem">P(B) &gt; 0</span>, if <span class="chem">A</span> and <span class="chem">B</span> are mutually exclusive then they are also independent.
        "對於任何滿足 <span class=\"chem\">P(A) &gt; 0</span> 與 <span class=\"chem\">P(B) &gt; 0</span> 的兩個事件，若 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 互斥，則它們亦互相獨立。",
      ],
      hints: [
        // EN: Check <span class="chem">Var(X) = np(1 - p)</span> vs <span class="chem">E(X) = np</span> for Binomial, and check whether mutually exclusive events can be independent.
        "比較二項分佈的 <span class=\"chem\">Var(X) = np(1 - p)</span> 與 <span class=\"chem\">E(X) = np</span>，並檢查互斥事件能否獨立。",
      ],
      // EN: <p>Statements A, B, and C are always true (note that <span class="chem">Var(X) = np(1 - p) &lt; np = E(X)</span> since <span class="chem">0 &lt; 1 - p &lt; 1</span>). Statement D is false because mutually exclusive events with positive probabilities have <span class="chem">P(A ∩ B) = 0 ≠ P(A)P(B)</span>.</p>
      solution: "<p>陳述 A、B 與 C 恒成立（留意因 <span class=\"chem\">0 &lt; 1 - p &lt; 1</span>，故 <span class=\"chem\">Var(X) = np(1 - p) &lt; np = E(X)</span>）。陳述 D 錯誤，因為具有正概率的互斥事件滿足 <span class=\"chem\">P(A ∩ B) = 0 ≠ P(A)P(B)</span>。</p>",
      misconception: {
        // EN (option D): If P(A) > 0 and P(B) > 0, mutually exclusive events have P(A ∩ B) = 0 ≠ P(A)P(B), so they can NEVER be independent!
        "3": "若 P(A) > 0 且 P(B) > 0，互斥事件滿足 P(A ∩ B) = 0 ≠ P(A)P(B)，因此絕不能互相獨立！",
      },
    },

    // ── t4-2-q010 · order · exam · SL · SL 4.8, 4.9 · 3 marks
    "t4-2-q010": {
      // EN: <p>Apples have masses <span class="chem">M ~ N(160, 12^2)</span> g. Ten apples are packed at random into a bag. Order the steps required to find the probability that <strong>at least 3</strong> apples in the bag have a mass exceeding <span class="chem">175</span> g.</p>
      stem: "<p>蘋果的質量為 <span class=\"chem\">M ~ N(160, 12^2)</span> g。隨機把十個蘋果裝入一袋。排列求袋中<strong>至少 3 個</strong>蘋果質量超過 <span class=\"chem\">175</span> g 的概率之步驟。</p>",
      options: [
        // EN: Use <span class="mono">normalcdf(175, 1E99, 160, 12)</span> on <span class="chem">M ~ N(160, 12^2)</span> to find the single-apple probability <span class="chem">p = P(M &gt; 175) ≈ 0.10565</span>.
        "對 <span class=\"chem\">M ~ N(160, 12^2)</span> 使用 <span class=\"mono\">normalcdf(175, 1E99, 160, 12)</span>，求得單個蘋果的概率 <span class=\"chem\">p = P(M &gt; 175) ≈ 0.10565</span>。",
        // EN: Define a new discrete random variable <span class="chem">Y ~ B(10, 0.10565)</span> representing the number of apples in the bag of <span class="chem">10</span> with mass over <span class="chem">175</span> g.
        "定義新的離散隨機變數 <span class=\"chem\">Y ~ B(10, 0.10565)</span>，表示這袋 <span class=\"chem\">10</span> 個蘋果中質量超過 <span class=\"chem\">175</span> g 的蘋果數目。",
        // EN: Rewrite the discrete inequality <span class="chem">P(Y ≥ 3)</span> in cumulative form as <span class="chem">1 - P(Y ≤ 2)</span>.
        "將離散不等式 <span class=\"chem\">P(Y ≥ 3)</span> 改寫為累積形式 <span class=\"chem\">1 - P(Y ≤ 2)</span>。",
        // EN: Evaluate <span class="chem">1 - binomcdf(10, 0.10565, 2)</span> and round the final probability to 3 significant figures (<span class="chem">0.0799</span>).
        "計算 <span class=\"chem\">1 - binomcdf(10, 0.10565, 2)</span> 並將最終概率捨入至 3 位有效數字（<span class=\"chem\">0.0799</span>）。",
      ],
      hints: [
        // EN: First find the probability <span class="chem">p</span> for 1 apple from the Normal distribution, then set up the Binomial model for 10 apples.
        "先從正態分佈求出 1 個蘋果的概率 <span class=\"chem\">p</span>，再為 10 個蘋果建立二項模型。",
      ],
      // EN: <p>In a Normal-to-Binomial chain, (1) find <span class="chem">p</span> for a single trial via <span class="mono">normalcdf</span> (keeping 5+ s.f.), (2) define <span class="chem">Y ~ B(10, p)</span>, (3) rewrite <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2)</span>, and (4) evaluate via <span class="mono">binomcdf</span>.</p>
      solution: "<p>在正態轉二項的連環題型中：(1) 透過 <span class=\"mono\">normalcdf</span> 求單次試驗的概率 <span class=\"chem\">p</span>（保留 5 位以上有效數字），(2) 定義 <span class=\"chem\">Y ~ B(10, p)</span>，(3) 改寫 <span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2)</span>，及 (4) 透過 <span class=\"mono\">binomcdf</span> 計算。</p>",
    },

    // ── t4-2-q011 · short · exam · SL · SL 4.8, 4.9, 4.11 · 7 marks
    "t4-2-q011": {
      // EN: <p>The masses of coffee bags produced by a roastery are modelled by a normal distribution <span class="chem">M ~ N(254, 5^2)</span> grams.<br>(a) Find the probability that a randomly selected bag has a mass less than <span class="chem">250</span> g. <strong>[2 marks]</strong><br>(b) Given that a bag has a mass less than <span class="chem">254</span> g, find the probability that its mass is between <span class="chem">250</span> g and <span class="chem">254</span> g. <strong>[2 marks]</strong><br>(c) Ten bags are chosen independently at random. Find the probability that <strong>at most 2</strong> of these bags have a mass less than <span class="chem">250</span> g. <strong>[3 marks]</strong></p>
      stem: "<p>烘焙廠生產的咖啡袋質量以正態分佈 <span class=\"chem\">M ~ N(254, 5^2)</span> 克模擬。<br>(a) 求 (Find) 隨機選取一袋的質量少於 <span class=\"chem\">250</span> g 的概率。<strong>[2 marks]</strong><br>(b) 已知一袋的質量少於 <span class=\"chem\">254</span> g，求 (find) 其質量介乎 <span class=\"chem\">250</span> g 與 <span class=\"chem\">254</span> g 之間的概率。<strong>[2 marks]</strong><br>(c) 獨立隨機選出十袋。求 (Find) 其中<strong>最多 2 袋</strong>質量少於 <span class=\"chem\">250</span> g 的概率。<strong>[3 marks]</strong></p>",
      // EN: <p>(a) Using GDC <span class="mono">normalcdf(-1E99, 250, 254, 5)</span> gives <span class="chem">p = 0.21186 ≈ 0.212</span>.<br>(b) Since <span class="chem">μ = 254</span>, <span class="chem">P(M &lt; 254) = 0.5</span>. Thus <span class="chem">P(M &gt; 250 | M &lt; 254) = P(250 &lt; M &lt; 254) / 0.5 = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class="chem">Y ~ B(10, 0.21186)</span>. Then <span class="chem">P(Y ≤ 2) = binomcdf(10, 0.21186, 2) ≈ 0.642</span>.</p>
      solution: "<p>(a) 使用 GDC <span class=\"mono\">normalcdf(-1E99, 250, 254, 5)</span> 得 <span class=\"chem\">p = 0.21186 ≈ 0.212</span>。<br>(b) 由於 <span class=\"chem\">μ = 254</span>，<span class=\"chem\">P(M &lt; 254) = 0.5</span>。故 <span class=\"chem\">P(M &gt; 250 | M &lt; 254) = P(250 &lt; M &lt; 254) / 0.5 = (0.5 - 0.21186) / 0.5 = 0.576</span>。<br>(c) 設 <span class=\"chem\">Y ~ B(10, 0.21186)</span>。則 <span class=\"chem\">P(Y ≤ 2) = binomcdf(10, 0.21186, 2) ≈ 0.642</span>。</p>",
      // EN: <p>(a) <span class="chem">P(M &lt; 250) = 0.212</span> (more precisely <span class="chem">0.21186</span>).<br>(b) <span class="chem">P(250 &lt; M &lt; 254 | M &lt; 254) = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class="chem">Y ~ B(10, 0.21186)</span>; <span class="chem">P(Y ≤ 2) = 0.642</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(M &lt; 250) = 0.212</span>（更準確為 <span class=\"chem\">0.21186</span>）。<br>(b) <span class=\"chem\">P(250 &lt; M &lt; 254 | M &lt; 254) = (0.5 - 0.21186) / 0.5 = 0.576</span>。<br>(c) 設 <span class=\"chem\">Y ~ B(10, 0.21186)</span>；<span class=\"chem\">P(Y ≤ 2) = 0.642</span>。</p>",
      markscheme: [
        // EN: M1: Recognizes normalcdf(-1E99, 250, 254, 5) or z = (250 − 254)/5 = −0.8.
        "M1：辨識出 normalcdf(-1E99, 250, 254, 5) 或 z = (250 − 254)/5 = −0.8。",
        // EN: A1: Finds P(M < 250) = 0.212 (0.21186).
        "A1：求得 P(M < 250) = 0.212（0.21186）。",
        // EN: M1: Sets up conditional probability P(250 < M < 254) / P(M < 254) = 0.28814 / 0.5.
        "M1：列出條件概率 P(250 < M < 254) / P(M < 254) = 0.28814 / 0.5。",
        // EN: A1: Evaluates conditional probability as 0.576.
        "A1：計算出條件概率為 0.576。",
        // EN: M1: Recognizes Binomial model Y ~ B(10, 0.21186).
        "M1：辨識出二項模型 Y ~ B(10, 0.21186)。",
        // EN: M1: Uses binomcdf(10, 0.21186, 2) for P(Y ≤ 2).
        "M1：使用 binomcdf(10, 0.21186, 2) 計算 P(Y ≤ 2)。",
        // EN: A1: Obtains 0.642 (accept 0.641 to 0.642).
        "A1：得出 0.642（接受 0.641 至 0.642）。",
      ],
    },

    // ── t4-2-q012 · numeric · foundation · AHL · AHL 4.14 · 3 marks
    "t4-2-q012": {
      // EN: <p>A random variable <span class="chem">X</span> has expected value <span class="chem">E(X) = 4</span> and variance <span class="chem">Var(X) = 5</span>. Calculate <span class="chem">Var(3X - 7)</span>.</p>
      stem: "<p>隨機變數 <span class=\"chem\">X</span> 的期望值為 <span class=\"chem\">E(X) = 4</span>，方差為 <span class=\"chem\">Var(X) = 5</span>。計算 (Calculate) <span class=\"chem\">Var(3X - 7)</span>。</p>",
      hints: [
        // EN: Recall the linear transformation rule for variance: <span class="chem">Var(aX + b) = a^2 Var(X)</span>.
        "緊記方差的線性變換法則：<span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>。",
        // EN: Notice that subtracting <span class="chem">7</span> does not affect the variance.
        "留意減去 <span class=\"chem\">7</span> 不會影響方差。",
      ],
      // EN: <p>Using <span class="chem">Var(aX + b) = a^2 Var(X)</span> with <span class="chem">a = 3, b = -7</span>:<br><span class="chem">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A2]</b>.</p>
      solution: "<p>將 <span class=\"chem\">a = 3, b = -7</span> 代入 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>：<br><span class=\"chem\">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A2]</b>.</p>",
    },

    // ── t4-2-q013 · numeric · exam · AHL · AHL 4.14 · 3 marks
    "t4-2-q013": {
      // EN: <p>A discrete random variable <span class="chem">X</span> satisfies <span class="chem">E(X) = 3</span> and <span class="chem">E(X^2) = 13</span>. Find the standard deviation <span class="chem">σ</span> of <span class="chem">X</span>.</p>
      stem: "<p>離散隨機變數 <span class=\"chem\">X</span> 滿足 <span class=\"chem\">E(X) = 3</span> 及 <span class=\"chem\">E(X^2) = 13</span>。求 (Find) <span class=\"chem\">X</span> 的標準差 <span class=\"chem\">σ</span>。</p>",
      hints: [
        // EN: First compute <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.
        "先計算 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>。",
        // EN: Take the positive square root of <span class="chem">Var(X)</span> to get the standard deviation.
        "取 <span class=\"chem\">Var(X)</span> 的正平方根即得標準差。",
      ],
      // EN: <p><span class="chem">Var(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 4</span> <b>[M1 A1]</b>.<br>Standard deviation <span class="chem">σ = √4 = 2</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 4</span> <b>[M1 A1]</b>.<br>標準差 <span class=\"chem\">σ = √4 = 2</span> <b>[A1]</b>.</p>",
    },

    // ── t4-2-q014 · numeric · exam · AHL · AHL 4.13 · 5 marks
    "t4-2-q014": {
      // EN: <p>A courier company ships parcels via three hubs <span class="chem">B_1, B_2, B_3</span> in proportions <span class="chem">0.50, 0.30, 0.20</span> respectively. The probabilities that a parcel is delayed (<span class="chem">D</span>) when routed through <span class="chem">B_1, B_2, B_3</span> are <span class="chem">0.10, 0.20, 0.25</span> respectively. Given that a parcel arrives delayed, find the probability <span class="chem">P(B_3 | D)</span> that it was routed through hub <span class="chem">B_3</span>.</p>
      stem: "<p>一間速遞公司透過三個轉運中心 <span class=\"chem\">B_1, B_2, B_3</span> 運送包裹，所佔比例分別為 <span class=\"chem\">0.50, 0.30, 0.20</span>。經 <span class=\"chem\">B_1, B_2, B_3</span> 轉運的包裹延誤（<span class=\"chem\">D</span>）的概率分別為 <span class=\"chem\">0.10, 0.20, 0.25</span>。已知一個包裹送達時延誤，求 (find) 它是經轉運中心 <span class=\"chem\">B_3</span> 運送的概率 <span class=\"chem\">P(B_3 | D)</span>。</p>",
      hints: [
        // EN: Use the law of total probability to find <span class="chem">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25)</span>.
        "使用全概率公式求 <span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25)</span>。",
        // EN: By Bayes' theorem, divide <span class="chem">P(B_3 ∩ D) = 0.20(0.25) = 0.05</span> by <span class="chem">P(D) = 0.16</span>.
        "根據貝葉斯定理，將 <span class=\"chem\">P(B_3 ∩ D) = 0.20(0.25) = 0.05</span> 除以 <span class=\"chem\">P(D) = 0.16</span>。",
      ],
      // EN: <p>Total probability of delay:<br><span class="chem">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25) = 0.05 + 0.06 + 0.05 = 0.16</span> <b>[M1 A1]</b>.<br>By Bayes' theorem:<br><span class="chem">P(B_3 | D) = 0.05 / 0.16 = 5/16 = 0.3125</span> (or <span class="chem">0.313</span> to 3 s.f.) <b>[M1 A2]</b>.</p>
      solution: "<p>延誤的全概率：<br><span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25) = 0.05 + 0.06 + 0.05 = 0.16</span> <b>[M1 A1]</b>.<br>由貝葉斯定理：<br><span class=\"chem\">P(B_3 | D) = 0.05 / 0.16 = 5/16 = 0.3125</span>（或準確至 3 位有效數字 <span class=\"chem\">0.313</span>）<b>[M1 A2]</b>.</p>",
      // EN: 5/16 (or 0.313)
      answerDisplay: "5/16（或 0.313）",
    },

    // ── t4-2-q015 · mcq · exam · AHL · AHL 4.14 · 3 marks
    "t4-2-q015": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = (3/14)(x^2 + 1)</span> for <span class="chem">0 ≤ x ≤ 2</span>, and <span class="chem">f(x) = 0</span> otherwise. What is the <strong>mode</strong> of <span class="chem">X</span>?</p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數在 <span class=\"chem\">0 ≤ x ≤ 2</span> 時為 <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span>，其餘情況為 <span class=\"chem\">f(x) = 0</span>。<span class=\"chem\">X</span> 的<strong>眾數</strong>是多少？</p>",
      options: [
        // EN: <span class="chem">x = 2</span>
        "<span class=\"chem\">x = 2</span>",
        // EN: <span class="chem">x = 0</span>
        "<span class=\"chem\">x = 0</span>",
        // EN: <span class="chem">x = 15/14</span>
        "<span class=\"chem\">x = 15/14</span>",
        // EN: <span class="chem">x = 1</span>
        "<span class=\"chem\">x = 1</span>",
      ],
      hints: [
        // EN: The mode is the value of <span class="chem">x ∈ [0, 2]</span> where <span class="chem">f(x)</span> reaches its global maximum.
        "眾數是 <span class=\"chem\">x ∈ [0, 2]</span> 中使 <span class=\"chem\">f(x)</span> 達到全局極大值的 x 值。",
        // EN: Check whether <span class="chem">f(x) = (3/14)(x^2 + 1)</span> is increasing or decreasing on <span class="chem">[0, 2]</span>.
        "檢查 <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span> 在 <span class=\"chem\">[0, 2]</span> 上是遞增還是遞減。",
      ],
      // EN: <p>On <span class="chem">[0, 2]</span>, <span class="chem">f'(x) = (3/7)x ≥ 0</span>, so <span class="chem">f(x)</span> is strictly increasing from <span class="chem">f(0) = 3/14</span> to <span class="chem">f(2) = 15/14</span>. Thus <span class="chem">f(x)</span> attains its global maximum at the right endpoint <span class="chem">x = 2</span>.</p>
      solution: "<p>在 <span class=\"chem\">[0, 2]</span> 上，<span class=\"chem\">f'(x) = (3/7)x ≥ 0</span>，故 <span class=\"chem\">f(x)</span> 由 <span class=\"chem\">f(0) = 3/14</span> 嚴格遞增至 <span class=\"chem\">f(2) = 15/14</span>。因此 <span class=\"chem\">f(x)</span> 在右端點 <span class=\"chem\">x = 2</span> 達到全局極大值。</p>",
      misconception: {
        // EN (option B): Setting f'(x) = (6/14)x = 0 gives x = 0, which is the global MINIMUM of f(x) on [0, 2], not the maximum!
        "1": "令 f'(x) = (6/14)x = 0 得 x = 0，這是 f(x) 在 [0, 2] 上的全局極小值，而非極大值！",
        // EN (option C): 15/14 is the maximum height f(2), not the x-coordinate where that maximum occurs.
        "2": "15/14 是最大高度 f(2)，而非達到該極大值的 x 坐標。",
        // EN (option D): x = 1 is the midpoint of [0, 2], but f(x) is not symmetric—it increases strictly all the way to x = 2.
        "3": "x = 1 是 [0, 2] 的中點，但 f(x) 並不對稱——它一直嚴格遞增至 x = 2。",
      },
    },

    // ── t4-2-q016 · numeric · exam · AHL · AHL 4.14 · 4 marks
    "t4-2-q016": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = x / 8</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>median</strong> <span class="chem">m</span> of <span class="chem">X</span> (you may type an exact radical such as <span class="mono">sqrt(8)</span> or a 3 s.f. decimal).</p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數在 <span class=\"chem\">0 ≤ x ≤ 4</span> 時為 <span class=\"chem\">f(x) = x / 8</span>，其餘情況為 <span class=\"chem\">f(x) = 0</span>。求 (Find) <span class=\"chem\">X</span> 的<strong>中位數</strong> <span class=\"chem\">m</span>（可輸入準確根式如 <span class=\"mono\">sqrt(8)</span> 或準確至 3 位有效數字的小數）。</p>",
      hints: [
        // EN: The median <span class="chem">m</span> satisfies <span class="chem">∫_0^m (x / 8) dx = 0.5</span>.
        "中位數 <span class=\"chem\">m</span> 滿足 <span class=\"chem\">∫_0^m (x / 8) dx = 0.5</span>。",
        // EN: Solve <span class="chem">m^2 / 16 = 0.5</span> for <span class="chem">m &gt; 0</span>.
        "解 <span class=\"chem\">m^2 / 16 = 0.5</span>（其中 <span class=\"chem\">m &gt; 0</span>）。",
      ],
      // EN: <p>Setting the cumulative integral equal to <span class="chem">0.5</span>:<br><span class="chem">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class="chem">m^2 = 8 ⇒ m = √8 = 2√2 ≈ 2.83</span> (since <span class="chem">0 ≤ m ≤ 4</span>) <b>[M1 A1]</b>.</p>
      solution: "<p>令累積積分等於 <span class=\"chem\">0.5</span>：<br><span class=\"chem\">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class=\"chem\">m^2 = 8 ⇒ m = √8 = 2√2 ≈ 2.83</span>（因 <span class=\"chem\">0 ≤ m ≤ 4</span>）<b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q017 · numeric · challenge · AHL · AHL 4.14 · 5 marks
    "t4-2-q017": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = 3x^2</span> for <span class="chem">0 ≤ x ≤ 1</span>, and <span class="chem">f(x) = 0</span> otherwise. Find <span class="chem">Var(X)</span> (type an exact fraction such as <span class="mono">3/80</span> or a 3 s.f. decimal).</p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數在 <span class=\"chem\">0 ≤ x ≤ 1</span> 時為 <span class=\"chem\">f(x) = 3x^2</span>，其餘情況為 <span class=\"chem\">f(x) = 0</span>。求 (Find) <span class=\"chem\">Var(X)</span>（可輸入準確分數如 <span class=\"mono\">3/80</span> 或準確至 3 位有效數字的小數）。</p>",
      hints: [
        // EN: First compute <span class="chem">E(X) = ∫_0^1 x(3x^2) dx = ∫_0^1 3x^3 dx = 3/4</span>.
        "先計算 <span class=\"chem\">E(X) = ∫_0^1 x(3x^2) dx = ∫_0^1 3x^3 dx = 3/4</span>。",
        // EN: Next compute <span class="chem">E(X^2) = ∫_0^1 x^2(3x^2) dx = ∫_0^1 3x^4 dx = 3/5</span>, and use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.
        "再計算 <span class=\"chem\">E(X^2) = ∫_0^1 x^2(3x^2) dx = ∫_0^1 3x^4 dx = 3/5</span>，並使用 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>。",
      ],
      // EN: <p><span class="chem">E(X) = ∫_0^1 3x^3 dx = [3x^4 / 4]_0^1 = 3/4</span> <b>[M1 A1]</b>.<br><span class="chem">E(X^2) = ∫_0^1 3x^4 dx = [3x^5 / 5]_0^1 = 3/5</span> <b>[A1]</b>.<br><span class="chem">Var(X) = 3/5 - (3/4)^2 = 3/5 - 9/16 = 3/80 = 0.0375</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = ∫_0^1 3x^3 dx = [3x^4 / 4]_0^1 = 3/4</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(X^2) = ∫_0^1 3x^4 dx = [3x^5 / 5]_0^1 = 3/5</span> <b>[A1]</b>.<br><span class=\"chem\">Var(X) = 3/5 - (3/4)^2 = 3/5 - 9/16 = 3/80 = 0.0375</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q018 · short · challenge · AHL · AHL 4.14, SL 4.11 · 7 marks
    "t4-2-q018": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = kx(3 - x)</span> for <span class="chem">0 ≤ x ≤ 3</span>, and <span class="chem">f(x) = 0</span> otherwise.<br>(a) Show that <span class="chem">k = 2/9</span>. <strong>[3 marks]</strong><br>(b) Find the exact conditional probability <span class="chem">P(X &gt; 1 | X &lt; 2)</span>. <strong>[4 marks]</strong></p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數在 <span class=\"chem\">0 ≤ x ≤ 3</span> 時為 <span class=\"chem\">f(x) = kx(3 - x)</span>，其餘情況為 <span class=\"chem\">f(x) = 0</span>。<br>(a) 證明 (Show that) <span class=\"chem\">k = 2/9</span>。<strong>[3 marks]</strong><br>(b) 求 (Find) 條件概率 <span class=\"chem\">P(X &gt; 1 | X &lt; 2)</span> 的準確值。<strong>[4 marks]</strong></p>",
      // EN: <p>(a) Since <span class="chem">∫_0^3 f(x) dx = 1</span>, we have <span class="chem">k [3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) By definition of conditional probability, <span class="chem">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.<br>Now <span class="chem">P(X &lt; 2) = (2/9)[3x^2/2 - x^3/3]_0^2 = (2/9)(6 - 8/3) = 20/27</span>, and <span class="chem">P(X &lt; 1) = (2/9)(3/2 - 1/3) = 7/27</span>, so <span class="chem">P(1 &lt; X &lt; 2) = 20/27 - 7/27 = 13/27</span>.<br>Dividing gives <span class="chem">P(X &gt; 1 | X &lt; 2) = (13/27) / (20/27) = 13/20 = 0.65</span>.</p>
      solution: "<p>(a) 由於 <span class=\"chem\">∫_0^3 f(x) dx = 1</span>，我們有 <span class=\"chem\">k [3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>。<br>(b) 根據條件概率的定義，<span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>。<br>現在 <span class=\"chem\">P(X &lt; 2) = (2/9)[3x^2/2 - x^3/3]_0^2 = (2/9)(6 - 8/3) = 20/27</span>，而 <span class=\"chem\">P(X &lt; 1) = (2/9)(3/2 - 1/3) = 7/27</span>，故 <span class=\"chem\">P(1 &lt; X &lt; 2) = 20/27 - 7/27 = 13/27</span>。<br>相除得 <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = (13/27) / (20/27) = 13/20 = 0.65</span>。</p>",
      // EN: <p>(a) <span class="chem">k ∫_0^3 (3x - x^2) dx = k[3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) <span class="chem">P(1 &lt; X &lt; 2) = 13/27</span> and <span class="chem">P(X &lt; 2) = 20/27</span>, so <span class="chem">P(X &gt; 1 | X &lt; 2) = 13/20 = 0.65</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k ∫_0^3 (3x - x^2) dx = k[3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>。<br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2) = 13/27</span> 及 <span class=\"chem\">P(X &lt; 2) = 20/27</span>，故 <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = 13/20 = 0.65</span>。</p>",
      markscheme: [
        // EN: M1: Sets up the total probability integral k ∫_0^3 (3x − x²) dx = 1.
        "M1：列出總概率積分 k ∫_0^3 (3x − x²) dx = 1。",
        // EN: A1: Integrates correctly to k [3x²/2 − x³/3]_0^3 = (9/2)k = 1.
        "A1：正確積分得 k [3x²/2 − x³/3]_0^3 = (9/2)k = 1。",
        // EN: A1: Concludes k = 2/9.
        "A1：推論出 k = 2/9。",
        // EN: M1: Rewrites P(X > 1 | X < 2) as P(1 < X < 2) / P(X < 2).
        "M1：將 P(X > 1 | X < 2) 改寫為 P(1 < X < 2) / P(X < 2)。",
        // EN: A1: Evaluates P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27.
        "A1：計算出 P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27。",
        // EN: A1: Evaluates P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27.
        "A1：計算出 P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27。",
        // EN: A1: Simplifies the ratio to 13/20 (or 0.65).
        "A1：將比值化簡為 13/20（或 0.65）。",
      ],
    },

  }
});
