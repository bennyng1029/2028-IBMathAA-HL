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

    // ── t4-2-q005 · mcq · exam · SL · SL 4.8 · 2 marks
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
        // EN (option C): You may have used 6 × (1/3)³ = 6/27 = 2/9, or multiplied 1/3 × 2/3 = 2/9 without the powers. The correct value is 4C2 (1/3)² (2/3)² = 6 × 4/81 = 24/81 = 8/27.
        "2": "你可能計算了 6 × (1/3)³ = 6/27 = 2/9，或只把 1/3 × 2/3 = 2/9 相乘而漏了次方。正確值是 4C2 (1/3)² (2/3)² = 6 × 4/81 = 24/81 = 8/27。",
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
        // EN: If events <span class="chem">A</span> and <span class="chem">B</span> are independent and <span class="chem">P(B) &gt; 0</span>, then <span class="chem">P(A | B) = P(A)</span>.
        "若事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 獨立且 <span class=\"chem\">P(B) &gt; 0</span>，則 <span class=\"chem\">P(A | B) = P(A)</span>。",
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
        // EN: Evaluate <span class="chem">1 - binomcdf(10, 0.10565, 2)</span> and round the final probability to 3 significant figures (<span class="chem">0.0803</span>).
        "計算 <span class=\"chem\">1 - binomcdf(10, 0.10565, 2)</span> 並將最終概率捨入至 3 位有效數字（<span class=\"chem\">0.0803</span>）。",
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

    // ── t4-2-q012 · numeric · foundation · AHL · AHL 4.14 · 2 marks
    "t4-2-q012": {
      // EN: <p>A random variable <span class="chem">X</span> has expected value <span class="chem">E(X) = 4</span> and variance <span class="chem">Var(X) = 5</span>. Calculate <span class="chem">Var(3X - 7)</span>.</p>
      stem: "<p>隨機變數 <span class=\"chem\">X</span> 的期望值為 <span class=\"chem\">E(X) = 4</span>，方差為 <span class=\"chem\">Var(X) = 5</span>。計算 (Calculate) <span class=\"chem\">Var(3X - 7)</span>。</p>",
      hints: [
        // EN: Recall the linear transformation rule for variance: <span class="chem">Var(aX + b) = a^2 Var(X)</span>.
        "緊記方差的線性變換法則：<span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>。",
        // EN: Notice that subtracting <span class="chem">7</span> does not affect the variance.
        "留意減去 <span class=\"chem\">7</span> 不會影響方差。",
      ],
      // EN: <p>Using <span class="chem">Var(aX + b) = a^2 Var(X)</span> with <span class="chem">a = 3, b = -7</span>:<br><span class="chem">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A1]</b>.</p>
      solution: "<p>將 <span class=\"chem\">a = 3, b = -7</span> 代入 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>：<br><span class=\"chem\">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A1]</b>.</p>",
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

    // ── t4-2-q015 · mcq · exam · AHL · AHL 4.14 · 2 marks
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
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = x / 8</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>exact</strong> value of the <strong>median</strong> <span class="chem">m</span> of <span class="chem">X</span> (an exact radical such as <span class="mono">sqrt(5)/2</span> can be typed directly).</p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數在 <span class=\"chem\">0 ≤ x ≤ 4</span> 時為 <span class=\"chem\">f(x) = x / 8</span>，其餘情況為 <span class=\"chem\">f(x) = 0</span>。求 (Find) <span class=\"chem\">X</span> 的<strong>中位數</strong> <span class=\"chem\">m</span> 的<strong>準確</strong>值（可直接輸入準確根式，例如 <span class=\"mono\">sqrt(5)/2</span>）。</p>",
      hints: [
        // EN: The median <span class="chem">m</span> satisfies <span class="chem">∫_0^m (x / 8) dx = 0.5</span>.
        "中位數 <span class=\"chem\">m</span> 滿足 <span class=\"chem\">∫_0^m (x / 8) dx = 0.5</span>。",
        // EN: Solve <span class="chem">m^2 / 16 = 0.5</span> for <span class="chem">m &gt; 0</span>.
        "解 <span class=\"chem\">m^2 / 16 = 0.5</span>（其中 <span class=\"chem\">m &gt; 0</span>）。",
      ],
      // EN: <p>Setting the cumulative integral equal to <span class="chem">0.5</span>:<br><span class="chem">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class="chem">m^2 = 8 ⇒ m = √8 = 2√2</span> (since <span class="chem">0 ≤ m ≤ 4</span>) <b>[M1 A1]</b>.</p>
      solution: "<p>令累積積分等於 <span class=\"chem\">0.5</span>：<br><span class=\"chem\">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class=\"chem\">m^2 = 8 ⇒ m = √8 = 2√2</span>（因 <span class=\"chem\">0 ≤ m ≤ 4</span>）<b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q017 · numeric · challenge · AHL · AHL 4.14 · 5 marks
    "t4-2-q017": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = 3x^2</span> for <span class="chem">0 ≤ x ≤ 1</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>exact</strong> value of <span class="chem">Var(X)</span> (an exact fraction such as <span class="mono">5/48</span> can be typed directly).</p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數在 <span class=\"chem\">0 ≤ x ≤ 1</span> 時為 <span class=\"chem\">f(x) = 3x^2</span>，其餘情況為 <span class=\"chem\">f(x) = 0</span>。求 (Find) <span class=\"chem\">Var(X)</span> 的<strong>準確</strong>值（可直接輸入準確分數，例如 <span class=\"mono\">5/48</span>）。</p>",
      hints: [
        // EN: Decode: for a continuous random variable, <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>, and each expectation is an integral over the domain <span class="chem">0 ≤ x ≤ 1</span>: <span class="chem">E(X) = ∫ x f(x) dx</span> and <span class="chem">E(X^2) = ∫ x^2 f(x) dx</span>. "Exact" means you keep fractions throughout.
        "解碼：對於連續隨機變數，<span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>，而每個期望值都是在定義域 <span class=\"chem\">0 ≤ x ≤ 1</span> 上的積分：<span class=\"chem\">E(X) = ∫ x f(x) dx</span> 及 <span class=\"chem\">E(X^2) = ∫ x^2 f(x) dx</span>。「準確」(exact) 表示全程保留分數。",
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
        // EN: A1: Integrates correctly to k [3x²/2 − x³/3]_0^3.
        "A1：正確積分得 k [3x²/2 − x³/3]_0^3。",
        // EN: A1: Evaluates k(27/2 − 9) = (9/2)k = 1, so k = 2/9 (AG).
        "A1：計算 k(27/2 − 9) = (9/2)k = 1，所以 k = 2/9 (AG)。",
        // EN: M1: Rewrites P(X > 1 | X < 2) as P(1 < X < 2) / P(X < 2).
        "M1：將 P(X > 1 | X < 2) 改寫為 P(1 < X < 2) / P(X < 2)。",
        // EN: A1: Evaluates P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27.
        "A1：計算出 P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27。",
        // EN: A1: Evaluates P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27.
        "A1：計算出 P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27。",
        // EN: A1: Simplifies the ratio to 13/20 (or 0.65).
        "A1：將比值化簡為 13/20（或 0.65）。",
      ],
      hints: [
        // EN: Decode: (a) is "Show that", so start from the property of every pdf, <span class="chem">∫_0^3 f(x) dx = 1</span>, and work forwards to <span class="chem">k = 2/9</span> without using it. In (b) the condition <span class="chem">X &lt; 2</span> becomes the denominator: <span class="chem">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.
        "解碼：(a) 是「證明」(Show that)，所以要從每個概率密度函數都具備的性質 <span class=\"chem\">∫_0^3 f(x) dx = 1</span> 出發，一步步推導出 <span class=\"chem\">k = 2/9</span>，不可預先使用這個結果。在 (b) 中，條件 <span class=\"chem\">X &lt; 2</span> 成為分母：<span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>。",
        // EN: Expand <span class="chem">kx(3 - x) = k(3x - x^2)</span> before integrating; an antiderivative is <span class="chem">k(3x^2/2 - x^3/3)</span>.
        "積分前先展開 <span class=\"chem\">kx(3 - x) = k(3x - x^2)</span>；它的一個原函數是 <span class=\"chem\">k(3x^2/2 - x^3/3)</span>。",
        // EN: In (b), evaluate <span class="chem">(2/9)[3x^2/2 - x^3/3]</span> from 1 to 2 for the numerator and from 0 to 2 for the denominator. The factor <span class="chem">2/9</span> cancels in the ratio.
        "在 (b) 中，計算 <span class=\"chem\">(2/9)[3x^2/2 - x^3/3]</span>：分子的上下限是 1 至 2，分母的上下限是 0 至 2。因數 <span class=\"chem\">2/9</span> 在比值中會互相抵消。",
      ],
    },

    // ── t4-2-q019 · numeric · foundation · SL · SL 4.5 · 2 marks
    "t4-2-q019": {
      // EN: <p>The probability that a seed germinates is <span class="chem">0.85</span>. A gardener plants <span class="chem">240</span> of these seeds. Find the expected number of seeds that do <strong>not</strong> germinate.</p>
      stem: "<p>一粒種子發芽的概率為 <span class=\"chem\">0.85</span>。一名園丁種下 <span class=\"chem\">240</span> 粒這種種子。求 (Find) <strong>不</strong>發芽的種子的預期數目。</p>",
      hints: [
        // EN: First find the probability that one seed does not germinate: <span class="chem">1 - 0.85</span>.
        "先求一粒種子不發芽的概率：<span class=\"chem\">1 - 0.85</span>。",
        // EN: The expected number of occurrences is <span class="chem">n · P(A)</span>.
        "預期發生次數為 <span class=\"chem\">n · P(A)</span>。",
      ],
      // EN: <p><span class="chem">P(not germinate) = 1 - 0.85 = 0.15</span> <b>[M1]</b>.<br>Expected number <span class="chem">= 240 × 0.15 = 36</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(not germinate) = 1 - 0.85 = 0.15</span> <b>[M1]</b>。<br>預期數目 <span class=\"chem\">= 240 × 0.15 = 36</span> <b>[A1]</b>。</p>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't4-2.q', {
  questions: {

    // ── t4-2-q020 · numeric · foundation · SL · SL 4.6 · 2 marks
    "t4-2-q020": {
      // EN: <p>The table shows the main after-school activity of <span class="chem">120</span> students in Years 11 and 12.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Robotics</th><th scope="col">Drama</th><th scope="col">None</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Year 11</th><td class="num">18</td><td class="num">12</td><td class="num">30</td><td class="num">60</td></tr><tr><th scope="row">Year 12</th><td class="num">14</td><td class="num">21</td><td class="num">25</td><td class="num">60</td></tr></tbody></table></div><p>A student is chosen at random. Find the probability that the student does Drama, given that the student is in Year 12.</p>
      stem: "<p>下表顯示 <span class=\"chem\">120</span> 名中五及中六（Years 11 and 12）學生的主要課後活動。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">機械人 (Robotics)</th><th scope=\"col\">戲劇 (Drama)</th><th scope=\"col\">沒有 (None)</th><th scope=\"col\">總數</th></tr></thead><tbody><tr><th scope=\"row\">Year 11</th><td class=\"num\">18</td><td class=\"num\">12</td><td class=\"num\">30</td><td class=\"num\">60</td></tr><tr><th scope=\"row\">Year 12</th><td class=\"num\">14</td><td class=\"num\">21</td><td class=\"num\">25</td><td class=\"num\">60</td></tr></tbody></table></div><p>隨機選出一名學生。已知該學生就讀 Year 12，求 (Find) 該學生參加戲劇活動的概率。</p>",
      hints: [
        // EN: The word "given" restricts you to one row of the table: only the Year 12 students count.
        "「已知」(given) 一詞把範圍限制在表中的一行：只計算 Year 12 的學生。",
        // EN: Divide the number of Year 12 Drama students by the total number of Year 12 students.
        "把 Year 12 參加戲劇的學生人數除以 Year 12 學生的總人數。",
      ],
      // EN: <p>Restrict the sample space to the <span class="chem">60</span> Year 12 students <b>[M1]</b>.<br><span class="chem">P(Drama | Year 12) = 21/60 = 7/20 = 0.35</span> <b>[A1]</b>.</p>
      solution: "<p>把樣本空間限制為 <span class=\"chem\">60</span> 名 Year 12 學生 <b>[M1]</b>。<br><span class=\"chem\">P(Drama | Year 12) = 21/60 = 7/20 = 0.35</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q021 · short · exam · SL · SL 4.6, 4.11 · 6 marks
    "t4-2-q021": {
      // EN: <p>A town council surveys <span class="chem">200</span> adults about whether they live within <span class="chem">5</span> km of their workplace (<span class="chem">W</span>) and whether they cycle to work (<span class="chem">C</span>).</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Cycles (C)</th><th scope="col">Does not cycle (C′)</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Within 5 km (W)</th><td class="num">48</td><td class="num">72</td><td class="num">120</td></tr><tr><th scope="row">Further than 5 km (W′)</th><td class="num">32</td><td class="num">48</td><td class="num">80</td></tr></tbody></table></div><p>One adult is chosen at random.<br>(a) Write down <span class="chem">P(C)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(C | W)</span> and <span class="chem">P(C | W′)</span>. <strong>[2 marks]</strong><br>(c) Hence determine whether the events <span class="chem">C</span> and <span class="chem">W</span> are independent. Justify your answer. <strong>[2 marks]</strong><br>(d) Find <span class="chem">P(W | C)</span>. <strong>[1 mark]</strong></p>
      stem: "<p>某區議會就 <span class=\"chem\">200</span> 名成年人進行調查，了解他們是否住在距離工作地點 <span class=\"chem\">5</span> km 以內（<span class=\"chem\">W</span>），以及是否踏單車上班（<span class=\"chem\">C</span>）。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">踏單車 (C)</th><th scope=\"col\">不踏單車 (C′)</th><th scope=\"col\">總數</th></tr></thead><tbody><tr><th scope=\"row\">5 km 以內 (W)</th><td class=\"num\">48</td><td class=\"num\">72</td><td class=\"num\">120</td></tr><tr><th scope=\"row\">多於 5 km (W′)</th><td class=\"num\">32</td><td class=\"num\">48</td><td class=\"num\">80</td></tr></tbody></table></div><p>隨機選出一名成年人。<br>(a) 寫出 (Write down) <span class=\"chem\">P(C)</span>。<strong>[1 mark]</strong><br>(b) 求 (Find) <span class=\"chem\">P(C | W)</span> 及 <span class=\"chem\">P(C | W′)</span>。<strong>[2 marks]</strong><br>(c) 由此 (Hence) 判斷事件 <span class=\"chem\">C</span> 與 <span class=\"chem\">W</span> 是否獨立，並說明理由 (Justify)。<strong>[2 marks]</strong><br>(d) 求 (Find) <span class=\"chem\">P(W | C)</span>。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: "given W" means use only the W row; "given W′" means use only the W′ row. Independence means the condition makes no difference to the probability.
        "解碼：「已知 W」表示只用 W 那一行；「已知 W′」表示只用 W′ 那一行。獨立表示該條件對概率毫無影響。",
        // EN: In (b), divide the cyclists in each row by that row total.
        "在 (b) 中，把每一行中踏單車的人數除以該行的總數。",
        // EN: For (c), use the test P(A | B) = P(A | B′) = P(A) for independent events. A conclusion with no comparison earns no marks.
        "在 (c) 中，使用獨立事件的檢驗 P(A | B) = P(A | B′) = P(A)。沒有作比較的結論不會得分。",
      ],
      // EN: <p>(a) <span class="chem">80</span> of the <span class="chem">200</span> adults cycle, so <span class="chem">P(C) = 0.4</span>.<br>(b) Within the <span class="chem">W</span> row: <span class="chem">P(C | W) = 48/120 = 0.4</span>. Within the <span class="chem">W′</span> row: <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) Since <span class="chem">P(C | W) = P(C | W′) = P(C)</span>, the probability of cycling is the same whether or not the event <span class="chem">W</span> occurs, so <span class="chem">C</span> and <span class="chem">W</span> are independent. (Check: <span class="chem">P(C ∩ W) = 48/200 = 0.24 = 0.4 × 0.6 = P(C)P(W)</span>.)<br>(d) Restrict to the <span class="chem">80</span> cyclists: <span class="chem">P(W | C) = 48/80 = 0.6</span> (which equals <span class="chem">P(W)</span>, as independence predicts).</p>
      solution: "<p>(a) <span class=\"chem\">200</span> 名成年人中有 <span class=\"chem\">80</span> 人踏單車，所以 <span class=\"chem\">P(C) = 0.4</span>。<br>(b) 在 <span class=\"chem\">W</span> 行內：<span class=\"chem\">P(C | W) = 48/120 = 0.4</span>。在 <span class=\"chem\">W′</span> 行內：<span class=\"chem\">P(C | W′) = 32/80 = 0.4</span>。<br>(c) 由於 <span class=\"chem\">P(C | W) = P(C | W′) = P(C)</span>，無論事件 <span class=\"chem\">W</span> 是否發生，踏單車的概率都相同，所以 <span class=\"chem\">C</span> 與 <span class=\"chem\">W</span> 是獨立的。（驗算：<span class=\"chem\">P(C ∩ W) = 48/200 = 0.24 = 0.4 × 0.6 = P(C)P(W)</span>。）<br>(d) 限制在 <span class=\"chem\">80</span> 名踏單車的人之內：<span class=\"chem\">P(W | C) = 48/80 = 0.6</span>（正如獨立性所預測，它等於 <span class=\"chem\">P(W)</span>）。</p>",
      // EN: <p>(a) <span class="chem">P(C) = 80/200 = 0.4</span>.<br>(b) <span class="chem">P(C | W) = 48/120 = 0.4</span> and <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) <span class="chem">P(C | W) = P(C | W′) = P(C) = 0.4</span>, so knowing whether someone lives within 5 km does not change the probability that they cycle: <span class="chem">C</span> and <span class="chem">W</span> are independent.<br>(d) <span class="chem">P(W | C) = 48/80 = 0.6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(C) = 80/200 = 0.4</span>。<br>(b) <span class=\"chem\">P(C | W) = 48/120 = 0.4</span> 及 <span class=\"chem\">P(C | W′) = 32/80 = 0.4</span>。<br>(c) <span class=\"chem\">P(C | W) = P(C | W′) = P(C) = 0.4</span>，所以知道某人是否住在 5 km 以內，並不會改變他踏單車的概率：<span class=\"chem\">C</span> 與 <span class=\"chem\">W</span> 是獨立的。<br>(d) <span class=\"chem\">P(W | C) = 48/80 = 0.6</span>。</p>",
      markscheme: [
        // EN: A1: (a) P(C) = 80/200 = 0.4.
        "A1：(a) P(C) = 80/200 = 0.4。",
        // EN: A1: (b) P(C | W) = 48/120 = 0.4.
        "A1：(b) P(C | W) = 48/120 = 0.4。",
        // EN: A1: (b) P(C | W′) = 32/80 = 0.4.
        "A1：(b) P(C | W′) = 32/80 = 0.4。",
        // EN: R1: (c) Compares: P(C | W) = P(C | W′) (= P(C)), or equivalently P(C ∩ W) = 0.24 = P(C)P(W).
        "R1：(c) 作出比較：P(C | W) = P(C | W′)（= P(C)），或等價地 P(C ∩ W) = 0.24 = P(C)P(W)。",
        // EN: A1: (c) Concludes that C and W are independent.
        "A1：(c) 結論為 C 與 W 是獨立的。",
        // EN: A1: (d) P(W | C) = 48/80 = 0.6.
        "A1：(d) P(W | C) = 48/80 = 0.6。",
      ],
    },

    // ── t4-2-q022 · numeric · exam · SL · SL 4.6, 4.7 · 5 marks
    "t4-2-q022": {
      // EN: <p>At a charity fair, a player pays <span class="chem">$k</span> to roll two fair six-sided dice. If both dice show <span class="chem">6</span>, the player receives <span class="chem">$36</span>. If the dice show any other double (both dice the same), the player receives <span class="chem">$9</span>. Otherwise the player receives nothing. Find the value of <span class="chem">k</span> for which the game is fair. Give your answer in dollars to 2 decimal places.</p>
      stem: "<p>在一個慈善賣物會中，玩家付 <span class=\"chem\">$k</span> 擲兩顆公平的六面骰子。若兩顆骰子都擲得 <span class=\"chem\">6</span>，玩家可得 <span class=\"chem\">$36</span>。若擲得其他任何一對相同點數（兩顆骰子點數相同），玩家可得 <span class=\"chem\">$9</span>。否則玩家一無所得。求 (Find) 使該遊戲公平的 <span class=\"chem\">k</span> 值，答案以元為單位並準確至 2 位小數。</p>",
      hints: [
        // EN: Decode: a game is fair when the player's expected gain is 0, so the price k must equal the expected amount the player receives.
        "解碼：當玩家的預期收益為 0 時，遊戲是公平的，所以價錢 k 必須等於玩家預期可得的金額。",
        // EN: Use a sample-space diagram of the 36 equally likely outcomes: one outcome is (6, 6) and five outcomes are the other doubles.
        "使用列出 36 個等可能結果的樣本空間圖：一個結果是 (6, 6)，另有五個結果是其他相同點數的組合。",
        // EN: Expected amount received = 36 × (1/36) + 9 × (5/36).
        "預期可得金額 = 36 × (1/36) + 9 × (5/36)。",
      ],
      // EN: <p><b>Decode:</b> "fair" means <span class="chem">E(gain) = 0</span>, so <span class="chem">k = E(amount received)</span>.<br>The sample space has <span class="chem">36</span> equally likely outcomes. <span class="chem">P(6, 6) = 1/36</span> <b>[A1]</b> and <span class="chem">P(other double) = 5/36</span> <b>[A1]</b>.<br><span class="chem">E(received) = 36(1/36) + 9(5/36) + 0(30/36) = 1 + 45/36 = 81/36 = 2.25</span> <b>[M1 A1]</b>.<br>For a fair game <span class="chem">E(received) - k = 0</span>, so <span class="chem">k = $2.25</span> <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>「公平」表示 <span class=\"chem\">E(gain) = 0</span>，所以 <span class=\"chem\">k = E(amount received)</span>。<br>樣本空間有 <span class=\"chem\">36</span> 個等可能結果。<span class=\"chem\">P(6, 6) = 1/36</span> <b>[A1]</b> 及 <span class=\"chem\">P(other double) = 5/36</span> <b>[A1]</b>。<br><span class=\"chem\">E(received) = 36(1/36) + 9(5/36) + 0(30/36) = 1 + 45/36 = 81/36 = 2.25</span> <b>[M1 A1]</b>。<br>公平遊戲須 <span class=\"chem\">E(received) - k = 0</span>，所以 <span class=\"chem\">k = $2.25</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q023 · numeric · challenge · SL · SL 4.6, 4.7 · 6 marks
    "t4-2-q023": {
      // EN: <p>A bag contains <span class="chem">n</span> red counters and <span class="chem">3</span> blue counters, and it holds more red counters than blue ones. A player pays <span class="chem">$2</span> to draw two counters at random without replacement. If the two counters are the same colour, the player receives <span class="chem">$4</span>; otherwise the player receives nothing. The game is fair. Find <span class="chem">n</span>.</p>
      stem: "<p>一個袋中有 <span class=\"chem\">n</span> 個紅色籌碼及 <span class=\"chem\">3</span> 個藍色籌碼，而紅色籌碼比藍色籌碼多。玩家付 <span class=\"chem\">$2</span>，從袋中隨機不放回地抽出兩個籌碼。若兩個籌碼顏色相同，玩家可得 <span class=\"chem\">$4</span>；否則玩家一無所得。該遊戲是公平的。求 (Find) <span class=\"chem\">n</span>。</p>",
      hints: [
        // EN: Decode: "fair" means expected gain = 0, which fixes P(same colour). The phrase "more red counters than blue" is a hidden condition you will need at the end.
        "解碼：「公平」表示預期收益 = 0，這就確定了 P(same colour)。「紅色籌碼比藍色籌碼多」這句話是一個隱藏條件，最後會用到。",
        // EN: Fair: 4 × P(same) − 2 = 0, so P(same) = 1/2. Write P(same) = [n(n − 1) + 3 × 2] / [(n + 3)(n + 2)] from a tree diagram without replacement.
        "公平：4 × P(same) − 2 = 0，所以 P(same) = 1/2。由不放回的樹形圖寫出 P(same) = [n(n − 1) + 3 × 2] / [(n + 3)(n + 2)]。",
        // EN: You get a quadratic in n with two positive integer roots. Use the condition n &gt; 3 to choose one.
        "你會得到一條關於 n 的二次方程，它有兩個正整數根。利用條件 n &gt; 3 選出其中一個。",
      ],
      // EN: <p><b>Decode:</b> a fair game has <span class="chem">E(gain) = 0</span>: <span class="chem">4 P(same) - 2 = 0 ⇒ P(same) = 1/2</span> <b>[M1 A1]</b>.<br>Without replacement, <span class="chem">P(same) = (n/(n + 3))((n - 1)/(n + 2)) + (3/(n + 3))(2/(n + 2)) = (n^2 - n + 6)/((n + 3)(n + 2))</span> <b>[M1 A1]</b>.<br>Setting this equal to <span class="chem">1/2</span>: <span class="chem">2n^2 - 2n + 12 = n^2 + 5n + 6 ⇒ n^2 - 7n + 6 = 0 ⇒ (n - 1)(n - 6) = 0</span> <b>[A1]</b>.<br>The bag holds more red than blue, so <span class="chem">n &gt; 3</span> and <span class="chem">n = 6</span> <b>[R1]</b>. (Check: <span class="chem">P(same) = 36/72 = 1/2</span>.)</p>
      solution: "<p><b>解碼：</b>公平遊戲的 <span class=\"chem\">E(gain) = 0</span>：<span class=\"chem\">4 P(same) - 2 = 0 ⇒ P(same) = 1/2</span> <b>[M1 A1]</b>。<br>不放回時，<span class=\"chem\">P(same) = (n/(n + 3))((n - 1)/(n + 2)) + (3/(n + 3))(2/(n + 2)) = (n^2 - n + 6)/((n + 3)(n + 2))</span> <b>[M1 A1]</b>。<br>令它等於 <span class=\"chem\">1/2</span>：<span class=\"chem\">2n^2 - 2n + 12 = n^2 + 5n + 6 ⇒ n^2 - 7n + 6 = 0 ⇒ (n - 1)(n - 6) = 0</span> <b>[A1]</b>。<br>袋中紅色比藍色多，所以 <span class=\"chem\">n &gt; 3</span>，故 <span class=\"chem\">n = 6</span> <b>[R1]</b>。（驗算：<span class=\"chem\">P(same) = 36/72 = 1/2</span>。）</p>",
    },

    // ── t4-2-q024 · numeric · exam · AHL · AHL 4.14 · 4 marks
    "t4-2-q024": {
      // EN: <p>The number of goals <span class="chem">X</span> scored by a hockey team in a match has the probability distribution below.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span></th><th scope="col">0</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th></tr></thead><tbody><tr><th scope="row"><span class="chem">P(X = x)</span></th><td class="num">0.2</td><td class="num">0.3</td><td class="num">0.4</td><td class="num">0.1</td></tr></tbody></table></div><p>Find <span class="chem">Var(X)</span>.</p>
      stem: "<p>某曲棍球隊在一場比賽中的入球數目 <span class=\"chem\">X</span> 的概率分佈如下。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><span class=\"chem\">x</span></th><th scope=\"col\">0</th><th scope=\"col\">1</th><th scope=\"col\">2</th><th scope=\"col\">3</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">P(X = x)</span></th><td class=\"num\">0.2</td><td class=\"num\">0.3</td><td class=\"num\">0.4</td><td class=\"num\">0.1</td></tr></tbody></table></div><p>求 (Find) <span class=\"chem\">Var(X)</span>。</p>",
      hints: [
        // EN: First find <span class="chem">E(X) = Σ x P(X = x)</span>.
        "首先求 <span class=\"chem\">E(X) = Σ x P(X = x)</span>。",
        // EN: Then find <span class="chem">E(X^2) = Σ x^2 P(X = x)</span> and use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.
        "然後求 <span class=\"chem\">E(X^2) = Σ x^2 P(X = x)</span>，並使用 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>。",
      ],
      // EN: <p><span class="chem">E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4</span> <b>[A1]</b>.<br><span class="chem">E(X^2) = 0(0.2) + 1(0.3) + 4(0.4) + 9(0.1) = 2.8</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 2.8 - 1.4^2 = 2.8 - 1.96 = 0.84</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4</span> <b>[A1]</b>。<br><span class=\"chem\">E(X^2) = 0(0.2) + 1(0.3) + 4(0.4) + 9(0.1) = 2.8</span> <b>[M1 A1]</b>。<br><span class=\"chem\">Var(X) = 2.8 - 1.4^2 = 2.8 - 1.96 = 0.84</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q025 · short · exam · AHL · AHL 4.14 · 6 marks
    "t4-2-q025": {
      // EN: <p>The daily maximum temperature <span class="chem">C</span> (°C) in a city in June has mean <span class="chem">18</span> and variance <span class="chem">6.25</span>. The temperature in °F is <span class="chem">F = 1.8C + 32</span>.<br>(a) Find <span class="chem">E(F)</span>. <strong>[2 marks]</strong><br>(b) Find the standard deviation of <span class="chem">F</span>. <strong>[2 marks]</strong><br>An ice-cream seller models her daily profit, in dollars, as <span class="chem">P = 40F - 1500</span>.<br>(c) Find the mean and the standard deviation of <span class="chem">P</span>. <strong>[2 marks]</strong></p>
      stem: "<p>某城市六月份的每日最高氣溫 <span class=\"chem\">C</span>（°C）的平均值為 <span class=\"chem\">18</span>，方差為 <span class=\"chem\">6.25</span>。以 °F 表示的氣溫為 <span class=\"chem\">F = 1.8C + 32</span>。<br>(a) 求 (Find) <span class=\"chem\">E(F)</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">F</span> 的標準差。<strong>[2 marks]</strong><br>一名雪糕小販把她的每日利潤（以元計）模擬為 <span class=\"chem\">P = 40F - 1500</span>。<br>(c) 求 (Find) <span class=\"chem\">P</span> 的平均值及標準差。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: these are linear transformations aX + b. Adding a constant shifts the mean only; multiplying by a scales the mean by a and the variance by a².
        "解碼：這些都是線性變換 aX + b。加上一個常數只會移動平均值；乘以 a 會把平均值乘以 a，並把方差乘以 a²。",
        // EN: The variance of C is given, not its standard deviation: SD(C) = √6.25.
        "題目給出的是 C 的方差，而不是它的標準差：SD(C) = √6.25。",
        // EN: For (c), apply the same rules to P = 40F − 1500 using your answers to (a) and (b).
        "在 (c) 中，利用你在 (a) 及 (b) 的答案，把同樣的法則應用於 P = 40F − 1500。",
      ],
      // EN: <p>(a) <span class="chem">E(F) = 1.8 E(C) + 32 = 1.8(18) + 32 = 64.4</span>.<br>(b) <span class="chem">Var(F) = 1.8^2 Var(C) = 3.24 × 6.25 = 20.25</span>, so <span class="chem">SD(F) = 4.5</span>. The <span class="chem">+32</span> does not affect the spread.<br>(c) <span class="chem">E(P) = 40 E(F) - 1500 = 2576 - 1500 = 1076</span> dollars and <span class="chem">SD(P) = 40 SD(F) = 180</span> dollars.</p>
      solution: "<p>(a) <span class=\"chem\">E(F) = 1.8 E(C) + 32 = 1.8(18) + 32 = 64.4</span>。<br>(b) <span class=\"chem\">Var(F) = 1.8^2 Var(C) = 3.24 × 6.25 = 20.25</span>，所以 <span class=\"chem\">SD(F) = 4.5</span>。<span class=\"chem\">+32</span> 並不影響離散程度。<br>(c) <span class=\"chem\">E(P) = 40 E(F) - 1500 = 2576 - 1500 = 1076</span> 元，而 <span class=\"chem\">SD(P) = 40 SD(F) = 180</span> 元。</p>",
      // EN: <p>(a) <span class="chem">E(F) = 1.8(18) + 32 = 64.4</span> °F.<br>(b) <span class="chem">SD(C) = sqrt(6.25) = 2.5</span>, so <span class="chem">SD(F) = 1.8 × 2.5 = 4.5</span> °F.<br>(c) <span class="chem">E(P) = 40(64.4) - 1500 = $1076</span>; <span class="chem">SD(P) = 40 × 4.5 = $180</span>.</p>
      answer: "<p>(a) <span class=\"chem\">E(F) = 1.8(18) + 32 = 64.4</span> °F。<br>(b) <span class=\"chem\">SD(C) = sqrt(6.25) = 2.5</span>，所以 <span class=\"chem\">SD(F) = 1.8 × 2.5 = 4.5</span> °F。<br>(c) <span class=\"chem\">E(P) = 40(64.4) - 1500 = $1076</span>；<span class=\"chem\">SD(P) = 40 × 4.5 = $180</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses E(aC + b) = aE(C) + b.
        "M1：(a) 使用 E(aC + b) = aE(C) + b。",
        // EN: A1: (a) E(F) = 64.4.
        "A1：(a) E(F) = 64.4。",
        // EN: M1: (b) Uses Var(F) = 1.8² Var(C) = 20.25, or SD(F) = |1.8| SD(C) with SD(C) = 2.5.
        "M1：(b) 使用 Var(F) = 1.8² Var(C) = 20.25，或 SD(F) = |1.8| SD(C)，其中 SD(C) = 2.5。",
        // EN: A1: (b) SD(F) = 4.5.
        "A1：(b) SD(F) = 4.5。",
        // EN: A1: (c) E(P) = 40(64.4) − 1500 = 1076.
        "A1：(c) E(P) = 40(64.4) − 1500 = 1076。",
        // EN: A1: (c) SD(P) = 40 × 4.5 = 180.
        "A1：(c) SD(P) = 40 × 4.5 = 180。",
      ],
    },

    // ── t4-2-q026 · numeric · foundation · AHL · AHL 4.14, SL 4.7 · 3 marks
    "t4-2-q026": {
      // EN: <p>A discrete random variable <span class="chem">X</span> takes the values <span class="chem">1, 2, 3</span> with probabilities <span class="chem">0.5, 0.3, 0.2</span> respectively. Find <span class="chem">E(5 - 2X)</span>.</p>
      stem: "<p>離散隨機變數 <span class=\"chem\">X</span> 取值 <span class=\"chem\">1, 2, 3</span> 的概率分別為 <span class=\"chem\">0.5, 0.3, 0.2</span>。求 (Find) <span class=\"chem\">E(5 - 2X)</span>。</p>",
      hints: [
        // EN: Find <span class="chem">E(X)</span> first.
        "先求 <span class=\"chem\">E(X)</span>。",
        // EN: Then use <span class="chem">E(aX + b) = aE(X) + b</span> with <span class="chem">a = -2</span> and <span class="chem">b = 5</span>.
        "然後使用 <span class=\"chem\">E(aX + b) = aE(X) + b</span>，其中 <span class=\"chem\">a = -2</span> 及 <span class=\"chem\">b = 5</span>。",
      ],
      // EN: <p><span class="chem">E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 1.7</span> <b>[M1 A1]</b>.<br><span class="chem">E(5 - 2X) = 5 - 2(1.7) = 1.6</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 1.7</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(5 - 2X) = 5 - 2(1.7) = 1.6</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q027 · numeric · exam · SL · SL 4.6, 4.11 · 4 marks
    "t4-2-q027": {
      // EN: <p>Events <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">P(A) = 0.5</span>, <span class="chem">P(B) = 0.4</span> and <span class="chem">P(A ∪ B) = 0.8</span>. Find the exact value of <span class="chem">P(A | B′)</span>.</p>
      stem: "<p>事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 滿足 <span class=\"chem\">P(A) = 0.5</span>、<span class=\"chem\">P(B) = 0.4</span> 及 <span class=\"chem\">P(A ∪ B) = 0.8</span>。求 (Find) <span class=\"chem\">P(A | B′)</span> 的準確值。</p>",
      hints: [
        // EN: Use the addition rule to find <span class="chem">P(A ∩ B)</span>.
        "使用加法定律求 <span class=\"chem\">P(A ∩ B)</span>。",
        // EN: A Venn diagram helps: <span class="chem">P(A ∩ B′) = P(A) - P(A ∩ B)</span>, and <span class="chem">P(B′) = 1 - P(B)</span>.
        "溫氏圖會有幫助：<span class=\"chem\">P(A ∩ B′) = P(A) - P(A ∩ B)</span>，而 <span class=\"chem\">P(B′) = 1 - P(B)</span>。",
      ],
      // EN: <p><span class="chem">P(A ∩ B) = 0.5 + 0.4 - 0.8 = 0.1</span> <b>[A1]</b>.<br><span class="chem">P(A ∩ B′) = 0.5 - 0.1 = 0.4</span> <b>[A1]</b>.<br><span class="chem">P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.6 = 2/3</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(A ∩ B) = 0.5 + 0.4 - 0.8 = 0.1</span> <b>[A1]</b>。<br><span class=\"chem\">P(A ∩ B′) = 0.5 - 0.1 = 0.4</span> <b>[A1]</b>。<br><span class=\"chem\">P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.6 = 2/3</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q028 · short · challenge · SL · SL 4.6, 4.11 · 7 marks
    "t4-2-q028": {
      // EN: <p>An insurance study reports that <span class="chem">18%</span> of drivers who use a phone while driving have had a minor accident in the last year, and that <span class="chem">18%</span> of drivers who do not use a phone while driving have also had a minor accident. Of all drivers, <span class="chem">40%</span> use a phone while driving. Let <span class="chem">A</span> be the event "has had a minor accident" and <span class="chem">B</span> the event "uses a phone while driving".<br>(a) Write down <span class="chem">P(A)</span>. <strong>[1 mark]</strong><br>(b) Prove that, for any events with <span class="chem">0 &lt; P(B) &lt; 1</span>, if <span class="chem">P(A | B) = P(A | B′)</span> then <span class="chem">A</span> and <span class="chem">B</span> are independent. <strong>[4 marks]</strong><br>(c) Write down <span class="chem">P(B | A)</span>, giving a reason. <strong>[2 marks]</strong></p>
      stem: "<p>一項保險研究報告指出，駕駛時使用手機的司機中有 <span class=\"chem\">18%</span> 在過去一年曾發生輕微意外，而駕駛時不使用手機的司機中同樣有 <span class=\"chem\">18%</span> 曾發生輕微意外。在所有司機中，有 <span class=\"chem\">40%</span> 在駕駛時使用手機。設 <span class=\"chem\">A</span> 為事件「曾發生輕微意外」，<span class=\"chem\">B</span> 為事件「駕駛時使用手機」。<br>(a) 寫出 (Write down) <span class=\"chem\">P(A)</span>。<strong>[1 mark]</strong><br>(b) 證明 (Prove)：對於任何滿足 <span class=\"chem\">0 &lt; P(B) &lt; 1</span> 的事件，若 <span class=\"chem\">P(A | B) = P(A | B′)</span>，則 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 是獨立的。<strong>[4 marks]</strong><br>(c) 寫出 (Write down) <span class=\"chem\">P(B | A)</span>，並給出理由。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the wordy percentages are P(A | B) = 0.18 and P(A | B′) = 0.18. The question is really the independence test P(A | B) = P(A | B′), first in numbers and then as a general proof.
        "解碼：冗長的百分比敘述其實是 P(A | B) = 0.18 及 P(A | B′) = 0.18。這題實際上是獨立性檢驗 P(A | B) = P(A | B′)，先用數字，再作一般證明。",
        // EN: For (a), use a tree: P(A) = P(B)P(A | B) + P(B′)P(A | B′).
        "在 (a) 中，使用樹形圖：P(A) = P(B)P(A | B) + P(B′)P(A | B′)。",
        // EN: For (b), call the common value p and show P(A) = p. Then compare P(A ∩ B) with P(A)P(B).
        "在 (b) 中，把共同的值稱為 p，並證明 P(A) = p。然後比較 P(A ∩ B) 與 P(A)P(B)。",
        // EN: For (c), independence works both ways.
        "在 (c) 中，獨立性是雙向成立的。",
      ],
      // EN: <p><b>Decode:</b> "18% of drivers who use a phone" is the conditional probability <span class="chem">P(A | B) = 0.18</span>; likewise <span class="chem">P(A | B′) = 0.18</span>. Equal conditional probabilities are the SL 4.11 test for independence.<br>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">p = P(A | B) = P(A | B′)</span>. Since <span class="chem">B</span> and <span class="chem">B′</span> partition the sample space, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p[P(B) + P(B′)] = p</span>. Hence <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, which is the definition of independence.<br>(c) The events are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>. Check: <span class="chem">P(B | A) = 0.072/0.18 = 0.4</span>.</p>
      solution: "<p><b>解碼：</b>「使用手機的司機中有 18%」是條件概率 <span class=\"chem\">P(A | B) = 0.18</span>；同樣地 <span class=\"chem\">P(A | B′) = 0.18</span>。條件概率相等正是 SL 4.11 的獨立性檢驗。<br>(a) <span class=\"chem\">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>。<br>(b) 設 <span class=\"chem\">p = P(A | B) = P(A | B′)</span>。由於 <span class=\"chem\">B</span> 與 <span class=\"chem\">B′</span> 把樣本空間分割，<span class=\"chem\">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p[P(B) + P(B′)] = p</span>。因此 <span class=\"chem\">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>，這正是獨立的定義。<br>(c) 這兩個事件是獨立的，所以 <span class=\"chem\">P(B | A) = P(B) = 0.4</span>。驗算：<span class=\"chem\">P(B | A) = 0.072/0.18 = 0.4</span>。</p>",
      // EN: <p>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">P(A | B) = P(A | B′) = p</span>. By total probability, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p(P(B) + P(B′)) = p</span>. Then <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are independent.<br>(c) By (b), <span class="chem">A</span> and <span class="chem">B</span> are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>。<br>(b) 設 <span class=\"chem\">P(A | B) = P(A | B′) = p</span>。由全概率公式，<span class=\"chem\">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p(P(B) + P(B′)) = p</span>。於是 <span class=\"chem\">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>，所以 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 是獨立的。<br>(c) 由 (b)，<span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 是獨立的，所以 <span class=\"chem\">P(B | A) = P(B) = 0.4</span>。</p>",
      markscheme: [
        // EN: A1: (a) P(A) = 0.18.
        "A1：(a) P(A) = 0.18。",
        // EN: M1: (b) Uses the law of total probability P(A) = P(A | B)P(B) + P(A | B′)P(B′).
        "M1：(b) 使用全概率定律 P(A) = P(A | B)P(B) + P(A | B′)P(B′)。",
        // EN: A1: (b) Factorises using P(A | B) = P(A | B′) = p to get P(A) = p(P(B) + P(B′)) = p.
        "A1：(b) 利用 P(A | B) = P(A | B′) = p 進行因式分解，得 P(A) = p(P(B) + P(B′)) = p。",
        // EN: M1: (b) Uses P(A ∩ B) = P(A | B)P(B).
        "M1：(b) 使用 P(A ∩ B) = P(A | B)P(B)。",
        // EN: R1: (b) Concludes P(A ∩ B) = P(A)P(B), hence A and B are independent.
        "R1：(b) 得出結論 P(A ∩ B) = P(A)P(B)，因此 A 與 B 是獨立的。",
        // EN: R1: (c) Reason: A and B are independent (from (b)), so conditioning on A does not change P(B).
        "R1：(c) 理由：A 與 B 是獨立的（由 (b)），所以以 A 為條件不會改變 P(B)。",
        // EN: A1: (c) P(B | A) = 0.4.
        "A1：(c) P(B | A) = 0.4。",
      ],
    },

    // ── t4-2-q029 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q029": {
      // EN: <p>The volume of juice <span class="chem">V</span> ml in a carton is normally distributed with mean <span class="chem">250</span> ml. It is known that <span class="chem">P(V &gt; 262) = 0.15</span>. Find <span class="chem">P(238 &lt; V &lt; 262)</span>.</p>
      stem: "<p>一盒果汁的容量 <span class=\"chem\">V</span> ml 服從正態分佈，平均值為 <span class=\"chem\">250</span> ml。已知 <span class=\"chem\">P(V &gt; 262) = 0.15</span>。求 (Find) <span class=\"chem\">P(238 &lt; V &lt; 262)</span>。</p>",
      hints: [
        // EN: The normal curve is symmetric about the mean. How far are 238 and 262 from 250?
        "正態曲線關於平均值對稱。238 及 262 與 250 相距多遠？",
        // EN: By symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262)</span>. Subtract both tails from 1.
        "由對稱性，<span class=\"chem\">P(V &lt; 238) = P(V &gt; 262)</span>。從 1 減去兩條尾部的概率。",
      ],
      // EN: <p><span class="chem">238</span> and <span class="chem">262</span> are both <span class="chem">12</span> ml from the mean, so by symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262) = 0.15</span> <b>[R1 A1]</b>.<br><span class="chem">P(238 &lt; V &lt; 262) = 1 - 2(0.15) = 0.7</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">238</span> 及 <span class=\"chem\">262</span> 都與平均值相距 <span class=\"chem\">12</span> ml，所以由對稱性 <span class=\"chem\">P(V &lt; 238) = P(V &gt; 262) = 0.15</span> <b>[R1 A1]</b>。<br><span class=\"chem\">P(238 &lt; V &lt; 262) = 1 - 2(0.15) = 0.7</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q030 · numeric · exam · SL · SL 4.8 · 4 marks
    "t4-2-q030": {
      // EN: <p>A spinner lands on red with probability <span class="chem">1/4</span> on each spin, independently. It is spun <span class="chem">4</span> times. Find the exact probability that it lands on red <strong>at least 3</strong> times.</p>
      stem: "<p>一個轉盤每次轉動時停在紅色的概率為 <span class=\"chem\">1/4</span>，各次轉動互相獨立。把它轉動 <span class=\"chem\">4</span> 次。求 (Find) 它停在紅色<strong>至少 3</strong> 次的準確概率。</p>",
      hints: [
        // EN: Let <span class="chem">X ~ B(4, 1/4)</span>. "At least 3" means <span class="chem">X = 3</span> or <span class="chem">X = 4</span>.
        "設 <span class=\"chem\">X ~ B(4, 1/4)</span>。「至少 3 次」表示 <span class=\"chem\">X = 3</span> 或 <span class=\"chem\">X = 4</span>。",
        // EN: <span class="chem">P(X = 3) = ⁴C₃ (1/4)^3 (3/4)</span> and <span class="chem">P(X = 4) = (1/4)^4</span>.
        "<span class=\"chem\">P(X = 3) = ⁴C₃ (1/4)^3 (3/4)</span> 及 <span class=\"chem\">P(X = 4) = (1/4)^4</span>。",
      ],
      // EN: <p>Let <span class="chem">X ~ B(4, 1/4)</span>. <span class="chem">P(X ≥ 3) = P(X = 3) + P(X = 4)</span> <b>[M1]</b>.<br><span class="chem">P(X = 3) = 4 × (1/64) × (3/4) = 12/256</span> <b>[A1]</b>, <span class="chem">P(X = 4) = 1/256</span> <b>[A1]</b>.<br><span class="chem">P(X ≥ 3) = 13/256</span> <b>[A1]</b>.</p>
      solution: "<p>設 <span class=\"chem\">X ~ B(4, 1/4)</span>。<span class=\"chem\">P(X ≥ 3) = P(X = 3) + P(X = 4)</span> <b>[M1]</b>。<br><span class=\"chem\">P(X = 3) = 4 × (1/64) × (3/4) = 12/256</span> <b>[A1]</b>，<span class=\"chem\">P(X = 4) = 1/256</span> <b>[A1]</b>。<br><span class=\"chem\">P(X ≥ 3) = 13/256</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q031 · numeric · challenge · AHL · AHL 4.13 · 6 marks
    "t4-2-q031": {
      // EN: <p>Maya travels to school by bus, by bicycle or on foot with probabilities <span class="chem">1/2</span>, <span class="chem">1/3</span> and <span class="chem">1/6</span> respectively. She is late with probability <span class="chem">1/5</span> if she takes the bus, <span class="chem">1/10</span> if she cycles and <span class="chem">1/4</span> if she walks. One morning Maya arrives <strong>on time</strong>. Find the exact probability that she cycled that morning.</p>
      stem: "<p>Maya 乘巴士、踏單車或步行上學的概率分別為 <span class=\"chem\">1/2</span>、<span class=\"chem\">1/3</span> 及 <span class=\"chem\">1/6</span>。若她乘巴士，遲到的概率為 <span class=\"chem\">1/5</span>；若她踏單車，遲到的概率為 <span class=\"chem\">1/10</span>；若她步行，遲到的概率為 <span class=\"chem\">1/4</span>。某天早上 Maya <strong>準時</strong>到校。求 (Find) 她那天早上踏單車上學的準確概率。</p>",
      hints: [
        // EN: Decode: you know the result (on time) and want the cause (cycled): this is Bayes' theorem with three partitioning events. The trap is that the given conditional probabilities are for being LATE, so use their complements.
        "解碼：你知道結果（準時），想求原因（踏單車）：這是使用三個分割事件的貝葉斯定理。陷阱在於題目給出的條件概率是關於「遲到」的，所以要用它們的互補概率。",
        // EN: P(on time | bus) = 4/5, P(on time | cycle) = 9/10, P(on time | walk) = 3/4.
        "P(on time | bus) = 4/5，P(on time | cycle) = 9/10，P(on time | walk) = 3/4。",
        // EN: P(on time) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4). Then divide the cycling branch by this total.
        "P(on time) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4)。然後把踏單車的分支除以這個總和。",
      ],
      // EN: <p><b>Decode:</b> reversing the condition from "on time" back to the mode of travel is Bayes' theorem with the partition {bus, cycle, walk}; first convert each "late" probability to "on time".<br><span class="chem">P(T | bus) = 4/5, P(T | cycle) = 9/10, P(T | walk) = 3/4</span> <b>[A1]</b>.<br><span class="chem">P(T) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4) = 2/5 + 3/10 + 1/8 = 33/40</span> <b>[M1 A1]</b>.<br><span class="chem">P(cycle ∩ T) = (1/3)(9/10) = 3/10 = 12/40</span> <b>[A1]</b>.<br><span class="chem">P(cycle | T) = (12/40)/(33/40) = 12/33 = 4/11</span> <b>[M1 A1]</b>.</p>
      solution: "<p><b>解碼：</b>把條件由「準時」倒推回交通方式，就是以 {bus, cycle, walk} 為分割的貝葉斯定理；首先把每個「遲到」概率轉換為「準時」概率。<br><span class=\"chem\">P(T | bus) = 4/5, P(T | cycle) = 9/10, P(T | walk) = 3/4</span> <b>[A1]</b>。<br><span class=\"chem\">P(T) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4) = 2/5 + 3/10 + 1/8 = 33/40</span> <b>[M1 A1]</b>。<br><span class=\"chem\">P(cycle ∩ T) = (1/3)(9/10) = 3/10 = 12/40</span> <b>[A1]</b>。<br><span class=\"chem\">P(cycle | T) = (12/40)/(33/40) = 12/33 = 4/11</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q032 · short · exam · AHL · AHL 4.14 · 8 marks
    "t4-2-q032": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function<br><span class="chem">f(x) = kx</span> for <span class="chem">0 ≤ x ≤ 2</span>,<br><span class="chem">f(x) = k(6 - x)/2</span> for <span class="chem">2 &lt; x ≤ 6</span>,<br>and <span class="chem">f(x) = 0</span> otherwise, where <span class="chem">k</span> is a positive constant.<br>(a) Show that <span class="chem">k = 1/6</span>. <strong>[2 marks]</strong><br>(b) Write down the mode of <span class="chem">X</span>. <strong>[1 mark]</strong><br>(c) Find <span class="chem">P(X &lt; 2)</span>. <strong>[1 mark]</strong><br>(d) Find the exact value of the median of <span class="chem">X</span>. <strong>[4 marks]</strong></p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數為<br>當 <span class=\"chem\">0 ≤ x ≤ 2</span> 時，<span class=\"chem\">f(x) = kx</span>；<br>當 <span class=\"chem\">2 &lt; x ≤ 6</span> 時，<span class=\"chem\">f(x) = k(6 - x)/2</span>；<br>其餘情況 <span class=\"chem\">f(x) = 0</span>，其中 <span class=\"chem\">k</span> 是正常數。<br>(a) 證明 (Show that) <span class=\"chem\">k = 1/6</span>。<strong>[2 marks]</strong><br>(b) 寫出 (Write down) <span class=\"chem\">X</span> 的眾數。<strong>[1 mark]</strong><br>(c) 求 (Find) <span class=\"chem\">P(X &lt; 2)</span>。<strong>[1 mark]</strong><br>(d) 求 (Find) <span class=\"chem\">X</span> 的中位數的準確值。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Sketch f: it rises linearly from (0, 0) to (2, 2k) and falls to (6, 0). The total area is a triangle.
        "繪畫 f 的草圖：它由 (0, 0) 線性上升至 (2, 2k)，再下降至 (6, 0)。總面積是一個三角形。",
        // EN: For the median, first decide which piece it lies in by comparing P(X &lt; 2) with 0.5.
        "求中位數時，先比較 P(X &lt; 2) 與 0.5，判斷中位數位於哪一段。",
        // EN: The area to the right of m is a smaller triangle with base 6 − m and height (6 − m)/12.
        "m 右方的面積是一個較小的三角形，底為 6 − m，高為 (6 − m)/12。",
      ],
      // EN: <p>(a) Total area = triangle with base <span class="chem">6</span> and height <span class="chem">2k</span>: <span class="chem">6k = 1 ⇒ k = 1/6</span>.<br>(b) <span class="chem">f</span> is greatest at the apex, so the mode is <span class="chem">2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(2/6) = 1/3</span>.<br>(d) <span class="chem">P(X &lt; 2) = 1/3 &lt; 1/2</span>, so <span class="chem">m &gt; 2</span>. The right-hand tail is a triangle with base <span class="chem">6 - m</span> and height <span class="chem">f(m) = (6 - m)/12</span>: <span class="chem">(1/2)(6 - m)^2/12 = 1/2 ⇒ (6 - m)^2 = 12 ⇒ 6 - m = ±2sqrt(3)</span>. Since <span class="chem">2 &lt; m ≤ 6</span>, <span class="chem">m = 6 - 2sqrt(3) ≈ 2.54</span>.</p>
      solution: "<p>(a) 總面積 = 底為 <span class=\"chem\">6</span>、高為 <span class=\"chem\">2k</span> 的三角形：<span class=\"chem\">6k = 1 ⇒ k = 1/6</span>。<br>(b) <span class=\"chem\">f</span> 在頂點處最大，所以眾數是 <span class=\"chem\">2</span>。<br>(c) <span class=\"chem\">P(X &lt; 2) = (1/2)(2)(2/6) = 1/3</span>。<br>(d) <span class=\"chem\">P(X &lt; 2) = 1/3 &lt; 1/2</span>，所以 <span class=\"chem\">m &gt; 2</span>。右方尾部是底為 <span class=\"chem\">6 - m</span>、高為 <span class=\"chem\">f(m) = (6 - m)/12</span> 的三角形：<span class=\"chem\">(1/2)(6 - m)^2/12 = 1/2 ⇒ (6 - m)^2 = 12 ⇒ 6 - m = ±2sqrt(3)</span>。由於 <span class=\"chem\">2 &lt; m ≤ 6</span>，<span class=\"chem\">m = 6 - 2sqrt(3) ≈ 2.54</span>。</p>",
      // EN: <p>(a) The graph is a triangle with base <span class="chem">6</span> and height <span class="chem">f(2) = 2k</span>, so its area is <span class="chem">(1/2)(6)(2k) = 6k = 1</span>, giving <span class="chem">k = 1/6</span>.<br>(b) Mode <span class="chem">= 2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(1/3) = 1/3</span>.<br>(d) Since <span class="chem">1/3 &lt; 1/2</span>, the median <span class="chem">m</span> lies in <span class="chem">(2, 6]</span>. <span class="chem">P(X &gt; m) = (1/2)(6 - m)(6 - m)/12 = (6 - m)^2/24 = 1/2</span>, so <span class="chem">(6 - m)^2 = 12</span> and <span class="chem">m = 6 - 2sqrt(3)</span> (about 2.54).</p>
      answer: "<p>(a) 圖像是底為 <span class=\"chem\">6</span>、高為 <span class=\"chem\">f(2) = 2k</span> 的三角形，所以其面積為 <span class=\"chem\">(1/2)(6)(2k) = 6k = 1</span>，得 <span class=\"chem\">k = 1/6</span>。<br>(b) 眾數 <span class=\"chem\">= 2</span>。<br>(c) <span class=\"chem\">P(X &lt; 2) = (1/2)(2)(1/3) = 1/3</span>。<br>(d) 由於 <span class=\"chem\">1/3 &lt; 1/2</span>，中位數 <span class=\"chem\">m</span> 位於 <span class=\"chem\">(2, 6]</span> 內。<span class=\"chem\">P(X &gt; m) = (1/2)(6 - m)(6 - m)/12 = (6 - m)^2/24 = 1/2</span>，所以 <span class=\"chem\">(6 - m)^2 = 12</span> 及 <span class=\"chem\">m = 6 - 2sqrt(3)</span>（約 2.54）。</p>",
      markscheme: [
        // EN: M1: (a) Sets total area (or the sum of two integrals) equal to 1, e.g. (1/2)(6)(2k) = 1.
        "M1：(a) 令總面積（或兩個積分之和）等於 1，例如 (1/2)(6)(2k) = 1。",
        // EN: A1: (a) Obtains 6k = 1, so k = 1/6 (AG).
        "A1：(a) 得 6k = 1，所以 k = 1/6 (AG)。",
        // EN: A1: (b) Mode = 2.
        "A1：(b) 眾數 = 2。",
        // EN: A1: (c) P(X < 2) = 1/3.
        "A1：(c) P(X < 2) = 1/3。",
        // EN: R1: (d) Recognises the median lies in 2 < x ≤ 6 because P(X < 2) = 1/3 < 1/2.
        "R1：(d) 辨識出由於 P(X < 2) = 1/3 < 1/2，中位數位於 2 < x ≤ 6 內。",
        // EN: M1: (d) Sets up an equation for m, e.g. ∫_m^6 (6 − x)/12 dx = 1/2 or 1/3 + ∫_2^m (6 − x)/12 dx = 1/2.
        "M1：(d) 列出關於 m 的方程，例如 ∫_m^6 (6 − x)/12 dx = 1/2 或 1/3 + ∫_2^m (6 − x)/12 dx = 1/2。",
        // EN: A1: (d) Obtains (6 − m)² = 12 (or an equivalent quadratic m² − 12m + 24 = 0).
        "A1：(d) 得 (6 − m)² = 12（或等價的二次方程 m² − 12m + 24 = 0）。",
        // EN: A1: (d) m = 6 − 2√3, rejecting 6 + 2√3 as outside the domain.
        "A1：(d) m = 6 − 2√3，並因 6 + 2√3 在定義域以外而捨去。",
      ],
    },

    // ── t4-2-q033 · numeric · challenge · AHL · AHL 4.14 · 6 marks
    "t4-2-q033": {
      // EN: <p>The lifetime <span class="chem">T</span> years of a battery is between <span class="chem">1</span> and <span class="chem">3</span> years, and its probability density function is proportional to <span class="chem">1/t^2</span> on that interval (and zero elsewhere). A replacement policy costs the shop <span class="chem">2T + 1</span> hundred dollars per battery. Find the exact expected cost per battery, in hundreds of dollars.</p>
      stem: "<p>某電池的壽命 <span class=\"chem\">T</span> 年介乎 <span class=\"chem\">1</span> 至 <span class=\"chem\">3</span> 年之間，其概率密度函數在該區間上與 <span class=\"chem\">1/t^2</span> 成正比（在其他地方為零）。一項更換保障計劃令商店每枚電池的成本為 <span class=\"chem\">2T + 1</span> 百元。求 (Find) 每枚電池的預期成本的準確值（以百元計）。</p>",
      hints: [
        // EN: Decode: "proportional to 1/t²" means f(t) = k/t² for 1 ≤ t ≤ 3, with k unknown. "Expected cost" is E(2T + 1), a linear transformation of T.
        "解碼：「與 1/t² 成正比」表示當 1 ≤ t ≤ 3 時 f(t) = k/t²，其中 k 未知。「預期成本」是 E(2T + 1)，即 T 的一個線性變換。",
        // EN: Find k from ∫₁³ k/t² dt = 1.
        "由 ∫₁³ k/t² dt = 1 求 k。",
        // EN: Then E(T) = ∫₁³ t · k/t² dt = k ln 3, and E(2T + 1) = 2E(T) + 1.
        "然後 E(T) = ∫₁³ t · k/t² dt = k ln 3，而 E(2T + 1) = 2E(T) + 1。",
      ],
      // EN: <p><b>Decode:</b> write <span class="chem">f(t) = k/t^2</span> on <span class="chem">[1, 3]</span>; the question asks for <span class="chem">E(2T + 1)</span>.<br><span class="chem">∫_1^3 k t^{-2} dt = k[-1/t]_1^3 = k(1 - 1/3) = 2k/3 = 1 ⇒ k = 3/2</span> <b>[M1 A1]</b>.<br><span class="chem">E(T) = ∫_1^3 t (3/2) t^{-2} dt = (3/2)[ln t]_1^3 = (3/2) ln 3</span> <b>[M1 A1]</b>.<br><span class="chem">E(2T + 1) = 2E(T) + 1 = 3 ln 3 + 1</span> (about <span class="chem">4.30</span> hundred dollars) <b>[M1 A1]</b>.</p>
      solution: "<p><b>解碼：</b>在 <span class=\"chem\">[1, 3]</span> 上寫 <span class=\"chem\">f(t) = k/t^2</span>；題目要求的是 <span class=\"chem\">E(2T + 1)</span>。<br><span class=\"chem\">∫_1^3 k t^{-2} dt = k[-1/t]_1^3 = k(1 - 1/3) = 2k/3 = 1 ⇒ k = 3/2</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(T) = ∫_1^3 t (3/2) t^{-2} dt = (3/2)[ln t]_1^3 = (3/2) ln 3</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(2T + 1) = 2E(T) + 1 = 3 ln 3 + 1</span>（約 <span class=\"chem\">4.30</span> 百元）<b>[M1 A1]</b>。</p>",
      // EN: 3 ln 3 + 1
      answerDisplay: "3 ln 3 + 1",
    },

    // ── t4-2-q034 · numeric · foundation · SL · SL 4.5 · 2 marks
    "t4-2-q034": {
      // EN: <p>A spinner is spun <span class="chem">250</span> times and lands on blue <span class="chem">60</span> times. Using the relative frequency as an estimate of the probability of blue, find the expected number of times the spinner lands on blue in a further <span class="chem">175</span> spins.</p>
      stem: "<p>一個轉盤轉動了 <span class=\"chem\">250</span> 次，其中 <span class=\"chem\">60</span> 次停在藍色。以相對頻數作為停在藍色的概率的估計，求 (Find) 再轉動 <span class=\"chem\">175</span> 次時，轉盤停在藍色的預期次數。</p>",
      hints: [
        // EN: Relative frequency = number of times blue / number of spins.
        "相對頻數 = 停在藍色的次數 / 轉動次數。",
        // EN: Expected number of occurrences = n × P(blue).
        "預期出現次數 = n × P(blue)。",
      ],
      // EN: <p>Estimated <span class="chem">P(blue) = 60/250 = 0.24</span> <b>[A1]</b>.<br>Expected number <span class="chem">= 175 × 0.24 = 42</span> <b>[A1]</b>.</p>
      solution: "<p>估計 <span class=\"chem\">P(blue) = 60/250 = 0.24</span> <b>[A1]</b>。<br>預期次數 <span class=\"chem\">= 175 × 0.24 = 42</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q035 · short · exam · SL · SL 4.6, 4.11 · 7 marks
    "t4-2-q035": {
      // EN: <p>A box contains <span class="chem">5</span> red pens and <span class="chem">3</span> green pens. Two pens are taken at random, one after the other, without replacement.<br>(a) Show that the probability that both pens are the same colour is <span class="chem">13/28</span>. <strong>[3 marks]</strong><br>(b) Given that both pens are the same colour, find the probability that both are red. <strong>[2 marks]</strong><br>(c) Given that at least one pen is green, find the probability that both are green. <strong>[2 marks]</strong></p>
      stem: "<p>一個盒中有 <span class=\"chem\">5</span> 枝紅筆及 <span class=\"chem\">3</span> 枝綠筆。隨機逐一不放回地取出兩枝筆。<br>(a) 證明 (Show that) 兩枝筆顏色相同的概率為 <span class=\"chem\">13/28</span>。<strong>[3 marks]</strong><br>(b) 已知兩枝筆顏色相同，求 (Find) 兩枝都是紅筆的概率。<strong>[2 marks]</strong><br>(c) 已知至少有一枝是綠筆，求 (Find) 兩枝都是綠筆的概率。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Draw a tree. On the second draw there are only 7 pens left.
        "畫出樹形圖。第二次抽取時只剩下 7 枝筆。",
        // EN: In (b), "both red" is already inside "same colour", so the intersection is just P(RR).
        "在 (b) 中，「兩枝都是紅筆」已包含在「顏色相同」之內，所以交集就是 P(RR)。",
        // EN: In (c), "at least one green" is the complement of "both red".
        "在 (c) 中，「至少有一枝綠筆」是「兩枝都是紅筆」的互補事件。",
      ],
      // EN: <p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span> and <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>, so <span class="chem">P(same) = 26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = P(RR)/P(same) = 20/26 = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - P(RR) = 36/56</span>. Both green is inside this event, so <span class="chem">P(GG | at least one G) = (6/56)/(36/56) = 1/6</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P(RR) = (5/8)(4/7) = 20/56</span> 及 <span class=\"chem\">P(GG) = (3/8)(2/7) = 6/56</span>，所以 <span class=\"chem\">P(same) = 26/56 = 13/28</span>。<br>(b) <span class=\"chem\">P(RR | same) = P(RR)/P(same) = 20/26 = 10/13</span>。<br>(c) <span class=\"chem\">P(at least one G) = 1 - P(RR) = 36/56</span>。「兩枝都是綠筆」包含在這事件之內，所以 <span class=\"chem\">P(GG | at least one G) = (6/56)/(36/56) = 1/6</span>。</p>",
      // EN: <p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span>, <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>; sum <span class="chem">26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = (20/56)/(26/56) = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - 20/56 = 36/56</span>, so <span class="chem">P(GG | at least one G) = 6/36 = 1/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(RR) = (5/8)(4/7) = 20/56</span>，<span class=\"chem\">P(GG) = (3/8)(2/7) = 6/56</span>；總和 <span class=\"chem\">26/56 = 13/28</span>。<br>(b) <span class=\"chem\">P(RR | same) = (20/56)/(26/56) = 10/13</span>。<br>(c) <span class=\"chem\">P(at least one G) = 1 - 20/56 = 36/56</span>，所以 <span class=\"chem\">P(GG | at least one G) = 6/36 = 1/6</span>。</p>",
      markscheme: [
        // EN: M1: (a) Multiplies along branches without replacement, e.g. (5/8)(4/7) or (3/8)(2/7).
        "M1：(a) 沿不放回的分支相乘，例如 (5/8)(4/7) 或 (3/8)(2/7)。",
        // EN: A1: (a) P(RR) = 20/56 and P(GG) = 6/56.
        "A1：(a) P(RR) = 20/56 及 P(GG) = 6/56。",
        // EN: A1: (a) Adds to 26/56 = 13/28 (AG).
        "A1：(a) 相加得 26/56 = 13/28 (AG)。",
        // EN: M1: (b) Uses P(RR ∩ same)/P(same) with P(RR ∩ same) = P(RR).
        "M1：(b) 使用 P(RR ∩ same)/P(same)，其中 P(RR ∩ same) = P(RR)。",
        // EN: A1: (b) 10/13.
        "A1：(b) 10/13。",
        // EN: M1: (c) Finds P(at least one green) = 1 − 20/56 = 36/56 and divides P(GG) by it.
        "M1：(c) 求得 P(at least one green) = 1 − 20/56 = 36/56，並把 P(GG) 除以它。",
        // EN: A1: (c) 1/6.
        "A1：(c) 1/6。",
      ],
    },

    // ── t4-2-q036 · numeric · exam · SL · SL 4.9 · 2 marks
    "t4-2-q036": {
      // EN: <p>The lengths <span class="chem">L</span> cm of cucumbers from a farm are normally distributed with mean <span class="chem">32.4</span> cm and standard deviation <span class="chem">1.8</span> cm. Find the probability that a randomly chosen cucumber has a length between <span class="chem">30</span> cm and <span class="chem">35</span> cm.</p>
      stem: "<p>某農場青瓜的長度 <span class=\"chem\">L</span> cm 服從正態分佈，平均值為 <span class=\"chem\">32.4</span> cm，標準差為 <span class=\"chem\">1.8</span> cm。求 (Find) 隨機選取的一條青瓜長度介乎 <span class=\"chem\">30</span> cm 與 <span class=\"chem\">35</span> cm 之間的概率。</p>",
      hints: [
        // EN: Write the probability as <span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span>.
        "把該概率寫成 <span class=\"chem\">P(30 &lt; L &lt; 35)</span>，其中 <span class=\"chem\">L ~ N(32.4, 1.8^2)</span>。",
        // EN: Use the normal cdf on your GDC with lower bound 30, upper bound 35, μ = 32.4 and σ = 1.8.
        "在 GDC 上使用正態 cdf，下限 30，上限 35，μ = 32.4，σ = 1.8。",
      ],
      // EN: <p><span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span> <b>[M1]</b>.<br>GDC (normal cdf, lower 30, upper 35, μ = 32.4, σ = 1.8): <span class="chem">0.834482… ≈ 0.834</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(30 &lt; L &lt; 35)</span>，其中 <span class=\"chem\">L ~ N(32.4, 1.8^2)</span> <b>[M1]</b>。<br>GDC（正態 cdf，下限 30，上限 35，μ = 32.4，σ = 1.8）：<span class=\"chem\">0.834482… ≈ 0.834</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q037 · numeric · exam · SL · SL 4.12 · 4 marks
    "t4-2-q037": {
      // EN: <p>A machine fills bottles with water. The volume in a bottle is normally distributed with mean <span class="chem">500</span> ml. Records show that <span class="chem">8%</span> of bottles contain less than <span class="chem">490</span> ml. Find the standard deviation of the volume.</p>
      stem: "<p>一部機器把水注入瓶中。瓶中水的容量服從正態分佈，平均值為 <span class=\"chem\">500</span> ml。紀錄顯示有 <span class=\"chem\">8%</span> 的瓶子所盛的水少於 <span class=\"chem\">490</span> ml。求 (Find) 容量的標準差。</p>",
      hints: [
        // EN: Decode: σ is unknown, so you cannot use the inverse normal with the original distribution. Standardise instead.
        "解碼：σ 未知，所以不能用原來的分佈直接作逆正態計算。改為進行標準化。",
        // EN: Find z with <span class="chem">P(Z &lt; z) = 0.08</span> from the inverse normal on <span class="chem">N(0, 1)</span>.
        "在 <span class=\"chem\">N(0, 1)</span> 上用逆正態求滿足 <span class=\"chem\">P(Z &lt; z) = 0.08</span> 的 z。",
        // EN: Solve <span class="chem">(490 - 500)/σ = z</span> for σ.
        "解 <span class=\"chem\">(490 - 500)/σ = z</span> 求 σ。",
      ],
      // EN: <p><span class="chem">P(V &lt; 490) = 0.08 ⇒ P(Z &lt; (490 - 500)/σ) = 0.08</span> <b>[M1]</b>.<br>Inverse normal: <span class="chem">z = -1.40507…</span> <b>[A1]</b>.<br><span class="chem">-10/σ = -1.40507 ⇒ σ = 10/1.40507</span> <b>[M1]</b> <span class="chem">= 7.117… ≈ 7.12</span> ml <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(V &lt; 490) = 0.08 ⇒ P(Z &lt; (490 - 500)/σ) = 0.08</span> <b>[M1]</b>。<br>逆正態：<span class=\"chem\">z = -1.40507…</span> <b>[A1]</b>。<br><span class=\"chem\">-10/σ = -1.40507 ⇒ σ = 10/1.40507</span> <b>[M1]</b> <span class=\"chem\">= 7.117… ≈ 7.12</span> ml <b>[A1]</b>。</p>",
    },

    // ── t4-2-q038 · short · exam · SL · SL 4.9, 4.12 · 7 marks
    "t4-2-q038": {
      // EN: <p>The time <span class="chem">T</span> seconds that a robot arm takes to complete a task is normally distributed with mean <span class="chem">μ</span> and standard deviation <span class="chem">σ</span>. On <span class="chem">15%</span> of occasions it takes less than <span class="chem">12.0</span> s, and on <span class="chem">10%</span> of occasions it takes more than <span class="chem">14.5</span> s.<br>(a) Write down two equations in <span class="chem">μ</span> and <span class="chem">σ</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">μ</span> and the value of <span class="chem">σ</span>. <strong>[3 marks]</strong><br>(c) Find <span class="chem">P(T &lt; 13)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>一支機械臂完成一項工作所需的時間 <span class=\"chem\">T</span> 秒服從正態分佈，平均值為 <span class=\"chem\">μ</span>，標準差為 <span class=\"chem\">σ</span>。有 <span class=\"chem\">15%</span> 的情況所需時間少於 <span class=\"chem\">12.0</span> s，有 <span class=\"chem\">10%</span> 的情況所需時間多於 <span class=\"chem\">14.5</span> s。<br>(a) 寫出 (Write down) 兩條關於 <span class=\"chem\">μ</span> 及 <span class=\"chem\">σ</span> 的方程。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">μ</span> 的值及 <span class=\"chem\">σ</span> 的值。<strong>[3 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">P(T &lt; 13)</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: both μ and σ are unknown, so turn each percentage into a z-score on N(0, 1) and form two equations of the form (x − μ)/σ = z.
        "解碼：μ 及 σ 皆未知，所以要把每個百分比轉換為 N(0, 1) 上的 z 值，並組成兩條形式為 (x − μ)/σ = z 的方程。",
        // EN: "More than 14.5 s on 10% of occasions" means P(T &lt; 14.5) = 0.90.
        "「有 10% 的情況多於 14.5 s」表示 P(T &lt; 14.5) = 0.90。",
        // EN: Subtract one equation from the other to eliminate μ. Keep full GDC precision for part (c).
        "把一條方程減去另一條以消去 μ。在 (c) 部分保留 GDC 的全部精確度。",
      ],
      // EN: <p>(a) <span class="chem">P(Z &lt; z_1) = 0.15 ⇒ z_1 = -1.036433</span> and <span class="chem">P(Z &lt; z_2) = 0.90 ⇒ z_2 = 1.281552</span>, so <span class="chem">12 - μ = -1.036433σ</span> and <span class="chem">14.5 - μ = 1.281552σ</span>.<br>(b) Subtracting: <span class="chem">2.5 = 2.317985σ ⇒ σ = 1.078523</span>, then <span class="chem">μ = 12 + 1.036433(1.078523) = 13.117817</span>. So <span class="chem">μ ≈ 13.1</span> s, <span class="chem">σ ≈ 1.08</span> s.<br>(c) Normal cdf with upper bound 13: <span class="chem">P(T &lt; 13) = 0.456506 ≈ 0.457</span>. (Using the rounded values 13.1 and 1.08 gives 0.463, which loses the final mark.)</p>
      solution: "<p>(a) <span class=\"chem\">P(Z &lt; z_1) = 0.15 ⇒ z_1 = -1.036433</span> 及 <span class=\"chem\">P(Z &lt; z_2) = 0.90 ⇒ z_2 = 1.281552</span>，所以 <span class=\"chem\">12 - μ = -1.036433σ</span> 及 <span class=\"chem\">14.5 - μ = 1.281552σ</span>。<br>(b) 相減：<span class=\"chem\">2.5 = 2.317985σ ⇒ σ = 1.078523</span>，然後 <span class=\"chem\">μ = 12 + 1.036433(1.078523) = 13.117817</span>。所以 <span class=\"chem\">μ ≈ 13.1</span> s，<span class=\"chem\">σ ≈ 1.08</span> s。<br>(c) 使用上限為 13 的正態 cdf：<span class=\"chem\">P(T &lt; 13) = 0.456506 ≈ 0.457</span>。（若使用已捨入的值 13.1 及 1.08，會得 0.463，因而失去最後一分。）</p>",
      // EN: <p>(a) <span class="chem">(12 - μ)/σ = -1.03643</span> and <span class="chem">(14.5 - μ)/σ = 1.28155</span>.<br>(b) <span class="chem">σ = 1.07852… ≈ 1.08</span> s and <span class="chem">μ = 13.1178… ≈ 13.1</span> s.<br>(c) <span class="chem">P(T &lt; 13) = 0.457</span> (0.456506…).</p>
      answer: "<p>(a) <span class=\"chem\">(12 - μ)/σ = -1.03643</span> 及 <span class=\"chem\">(14.5 - μ)/σ = 1.28155</span>。<br>(b) <span class=\"chem\">σ = 1.07852… ≈ 1.08</span> s 及 <span class=\"chem\">μ = 13.1178… ≈ 13.1</span> s。<br>(c) <span class=\"chem\">P(T &lt; 13) = 0.457</span>（0.456506…）。</p>",
      markscheme: [
        // EN: A1: (a) (12 − μ)/σ = −1.03643 (from the inverse normal of 0.15).
        "A1：(a) (12 − μ)/σ = −1.03643（由 0.15 的逆正態得出）。",
        // EN: A1: (a) (14.5 − μ)/σ = 1.28155 (from the inverse normal of 0.90).
        "A1：(a) (14.5 − μ)/σ = 1.28155（由 0.90 的逆正態得出）。",
        // EN: M1: (b) Solves the two linear equations simultaneously, e.g. 2.5 = (1.28155 + 1.03643)σ.
        "M1：(b) 聯立解兩條線性方程，例如 2.5 = (1.28155 + 1.03643)σ。",
        // EN: A1: (b) σ = 1.08 (1.07852…).
        "A1：(b) σ = 1.08（1.07852…）。",
        // EN: A1: (b) μ = 13.1 (13.1178…).
        "A1：(b) μ = 13.1（13.1178…）。",
        // EN: M1: (c) Uses the normal cdf with the unrounded μ and σ.
        "M1：(c) 使用未經捨入的 μ 及 σ 代入正態 cdf。",
        // EN: A1: (c) P(T < 13) = 0.457 (0.456506…).
        "A1：(c) P(T < 13) = 0.457（0.456506…）。",
      ],
    },

    // ── t4-2-q039 · numeric · challenge · SL · SL 4.12 · 4 marks
    "t4-2-q039": {
      // EN: <p>Bags of rice are labelled "<span class="chem">250</span> g". The filling machine produces masses that are normally distributed with a <strong>variance</strong> of <span class="chem">16</span> g², and its mean setting <span class="chem">μ</span> can be adjusted. A consumer rule says that no more than <span class="chem">2%</span> of bags may weigh less than the labelled mass. Find the smallest value of <span class="chem">μ</span> that satisfies the rule.</p>
      stem: "<p>袋裝米的標籤註明「<span class=\"chem\">250</span> g」。入米機器所產生的質量服從正態分佈，其<strong>方差</strong>為 <span class=\"chem\">16</span> g²，而其平均值設定 <span class=\"chem\">μ</span> 可以調校。一項消費者規例規定，質量少於標籤所示質量的米袋不得多於 <span class=\"chem\">2%</span>。求 (Find) 符合該規例的 <span class=\"chem\">μ</span> 的最小值。</p>",
      hints: [
        // EN: Decode: the unknown is the mean. Two hidden details: the variance is given (so σ = 4, not 16), and "no more than 2%" means P(M &lt; 250) ≤ 0.02.
        "解碼：未知數是平均值。有兩個隱藏細節：題目給出的是方差（所以 σ = 4，而不是 16），而「不得多於 2%」表示 P(M &lt; 250) ≤ 0.02。",
        // EN: Standardise: P(Z &lt; (250 − μ)/4) = 0.02 gives the boundary value of μ.
        "標準化：P(Z &lt; (250 − μ)/4) = 0.02 給出 μ 的臨界值。",
        // EN: Inverse normal of 0.02 on N(0, 1) is about −2.0537. A larger μ makes the underweight tail smaller.
        "N(0, 1) 上 0.02 的逆正態約為 −2.0537。μ 越大，過輕的尾部就越小。",
      ],
      // EN: <p><b>Decode:</b> <span class="chem">σ = sqrt(16) = 4</span>, and we need <span class="chem">P(M &lt; 250) ≤ 0.02</span> with <span class="chem">μ</span> unknown <b>[M1]</b>.<br>Boundary case: <span class="chem">(250 - μ)/4 = z</span> where <span class="chem">P(Z &lt; z) = 0.02 ⇒ z = -2.053749</span> <b>[A1]</b>.<br><span class="chem">μ = 250 + 4(2.053749) = 258.215</span> <b>[M1]</b>.<br>Increasing <span class="chem">μ</span> shrinks the tail below 250 g, so the smallest mean is <span class="chem">μ ≈ 258</span> g (258.21…) <b>[A1]</b>.<br>Note: 258 is the 3 s.f. answer the markscheme expects, but a machine actually set to exactly 258 g would give <span class="chem">P(M &lt; 250) = 0.0228</span>, just over 2%. In practice the setting must be rounded up (for example to 258.3 g).</p>
      solution: "<p><b>解碼：</b><span class=\"chem\">σ = sqrt(16) = 4</span>，而我們需要在 <span class=\"chem\">μ</span> 未知的情況下使 <span class=\"chem\">P(M &lt; 250) ≤ 0.02</span> <b>[M1]</b>。<br>臨界情況：<span class=\"chem\">(250 - μ)/4 = z</span>，其中 <span class=\"chem\">P(Z &lt; z) = 0.02 ⇒ z = -2.053749</span> <b>[A1]</b>。<br><span class=\"chem\">μ = 250 + 4(2.053749) = 258.215</span> <b>[M1]</b>。<br>增大 <span class=\"chem\">μ</span> 會使低於 250 g 的尾部縮小，所以最小的平均值為 <span class=\"chem\">μ ≈ 258</span> g（258.21…）<b>[A1]</b>。<br>注意：258 是評分標準所期望的 3 位有效數字答案，但若機器真的設定為恰好 258 g，則 <span class=\"chem\">P(M &lt; 250) = 0.0228</span>，略多於 2%。實際上設定值必須向上捨入（例如設定為 258.3 g）。</p>",
    },

    // ── t4-2-q040 · numeric · exam · SL · SL 4.8 · 3 marks
    "t4-2-q040": {
      // EN: <p>For a certain variety of sweet pea, <span class="chem">15%</span> of seeds produce white flowers, independently of each other. A gardener plants <span class="chem">20</span> seeds and all of them flower. Find the probability that at least <span class="chem">2</span> but no more than <span class="chem">5</span> of the plants have white flowers.</p>
      stem: "<p>某品種的香豌豆有 <span class=\"chem\">15%</span> 的種子會開白花，各粒種子互相獨立。一名園丁種下 <span class=\"chem\">20</span> 粒種子，而全部都開了花。求 (Find) 至少 <span class=\"chem\">2</span> 株但不多於 <span class=\"chem\">5</span> 株植物開白花的概率。</p>",
      hints: [
        // EN: Let <span class="chem">X ~ B(20, 0.15)</span>. "At least 2 but no more than 5" is <span class="chem">2 ≤ X ≤ 5</span>.
        "設 <span class=\"chem\">X ~ B(20, 0.15)</span>。「至少 2 株但不多於 5 株」即 <span class=\"chem\">2 ≤ X ≤ 5</span>。",
        // EN: With a cumulative binomial: <span class="chem">P(X ≤ 5) - P(X ≤ 1)</span>.
        "使用累積二項分佈：<span class=\"chem\">P(X ≤ 5) - P(X ≤ 1)</span>。",
      ],
      // EN: <p><span class="chem">X ~ B(20, 0.15)</span> <b>[M1]</b>.<br><span class="chem">P(2 ≤ X ≤ 5) = P(X ≤ 5) - P(X ≤ 1) = 0.932692 - 0.175558</span> <b>[M1]</b> <span class="chem">= 0.757134 ≈ 0.757</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">X ~ B(20, 0.15)</span> <b>[M1]</b>。<br><span class=\"chem\">P(2 ≤ X ≤ 5) = P(X ≤ 5) - P(X ≤ 1) = 0.932692 - 0.175558</span> <b>[M1]</b> <span class=\"chem\">= 0.757134 ≈ 0.757</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q041 · short · exam · SL · SL 4.8 · 7 marks
    "t4-2-q041": {
      // EN: <p>A quiz has <span class="chem">12</span> multiple-choice questions, each with <span class="chem">4</span> options of which exactly one is correct. Sam guesses every answer at random. Let <span class="chem">X</span> be the number of questions Sam answers correctly.<br>(a) Write down <span class="chem">E(X)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(X = 3)</span>. <strong>[2 marks]</strong><br>(c) The pass mark is <span class="chem">6</span>. Find the probability that Sam passes. <strong>[2 marks]</strong><br>(d) Find the probability that Sam scores more than his expected score. <strong>[2 marks]</strong></p>
      stem: "<p>一個測驗有 <span class=\"chem\">12</span> 道多項選擇題，每題有 <span class=\"chem\">4</span> 個選項，其中恰好一個是正確的。Sam 每題都隨機猜答。設 <span class=\"chem\">X</span> 為 Sam 答對的題數。<br>(a) 寫出 (Write down) <span class=\"chem\">E(X)</span>。<strong>[1 mark]</strong><br>(b) 求 (Find) <span class=\"chem\">P(X = 3)</span>。<strong>[2 marks]</strong><br>(c) 合格分數是 <span class=\"chem\">6</span>。求 (Find) Sam 合格的概率。<strong>[2 marks]</strong><br>(d) 求 (Find) Sam 的得分多於他的預期得分的概率。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Each question is an independent trial with p = 1/4, so X ~ B(12, 0.25).
        "每一題都是一次獨立試驗，p = 1/4，所以 X ~ B(12, 0.25)。",
        // EN: For "at least 6", the cumulative function gives P(X ≤ 5); subtract it from 1.
        "對於「至少 6」，累積函數給出 P(X ≤ 5)；用 1 減去它。",
        // EN: "More than his expected score" means X &gt; 3, that is X ≥ 4.
        "「多於他的預期得分」表示 X &gt; 3，即 X ≥ 4。",
      ],
      // EN: <p>(a) <span class="chem">E(X) = np = 12(0.25) = 3</span>.<br>(b) Binomial pdf: <span class="chem">P(X = 3) = ¹²C₃ (0.25)^3 (0.75)^9 = 0.258104 ≈ 0.258</span>.<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 1 - 0.945598 = 0.0544</span>.<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 1 - 0.648779 = 0.351</span>.</p>
      solution: "<p>(a) <span class=\"chem\">E(X) = np = 12(0.25) = 3</span>。<br>(b) 二項 pdf：<span class=\"chem\">P(X = 3) = ¹²C₃ (0.25)^3 (0.75)^9 = 0.258104 ≈ 0.258</span>。<br>(c) <span class=\"chem\">P(X ≥ 6) = 1 - P(X ≤ 5) = 1 - 0.945598 = 0.0544</span>。<br>(d) <span class=\"chem\">P(X &gt; 3) = 1 - P(X ≤ 3) = 1 - 0.648779 = 0.351</span>。</p>",
      // EN: <p>(a) <span class="chem">E(X) = 12 × 0.25 = 3</span>.<br>(b) <span class="chem">P(X = 3) = 0.258</span> (0.258104…).<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 0.0544</span> (0.054402…).<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 0.351</span> (0.351221…).</p>
      answer: "<p>(a) <span class=\"chem\">E(X) = 12 × 0.25 = 3</span>。<br>(b) <span class=\"chem\">P(X = 3) = 0.258</span>（0.258104…）。<br>(c) <span class=\"chem\">P(X ≥ 6) = 1 - P(X ≤ 5) = 0.0544</span>（0.054402…）。<br>(d) <span class=\"chem\">P(X &gt; 3) = 1 - P(X ≤ 3) = 0.351</span>（0.351221…）。</p>",
      markscheme: [
        // EN: A1: (a) E(X) = 3.
        "A1：(a) E(X) = 3。",
        // EN: M1: (b) Recognises X ~ B(12, 0.25) and uses the binomial pdf.
        "M1：(b) 辨識出 X ~ B(12, 0.25) 並使用二項 pdf。",
        // EN: A1: (b) 0.258.
        "A1：(b) 0.258。",
        // EN: M1: (c) Writes P(X ≥ 6) = 1 − P(X ≤ 5).
        "M1：(c) 寫出 P(X ≥ 6) = 1 − P(X ≤ 5)。",
        // EN: A1: (c) 0.0544.
        "A1：(c) 0.0544。",
        // EN: M1: (d) Writes P(X > 3) = 1 − P(X ≤ 3) (not 1 − P(X ≤ 4)).
        "M1：(d) 寫出 P(X > 3) = 1 − P(X ≤ 3)（而不是 1 − P(X ≤ 4)）。",
        // EN: A1: (d) 0.351.
        "A1：(d) 0.351。",
      ],
    },

    // ── t4-2-q042 · numeric · challenge · SL · SL 4.8 · 5 marks
    "t4-2-q042": {
      // EN: <p>Each component made on a production line has a <span class="chem">12%</span> chance of having a flaw, independently of the others. An inspector wants to pick a sample large enough that the probability of finding <strong>at least two</strong> flawed components is greater than <span class="chem">0.9</span>. Find the smallest sample size that achieves this.</p>
      stem: "<p>生產線上製造的每件零件有 <span class=\"chem\">12%</span> 的機會有瑕疵，各件互相獨立。一名檢查員想抽取一個足夠大的樣本，使發現<strong>至少兩件</strong>有瑕疵零件的概率大於 <span class=\"chem\">0.9</span>。求 (Find) 達到此要求的最小樣本大小。</p>",
      hints: [
        // EN: Decode: the unknown is n in X ~ B(n, 0.12), and "at least two" means P(X ≥ 2) = 1 − P(X = 0) − P(X = 1). Unlike "at least one", this does not reduce to a single logarithm.
        "解碼：未知數是 X ~ B(n, 0.12) 中的 n，而「至少兩件」表示 P(X ≥ 2) = 1 − P(X = 0) − P(X = 1)。與「至少一件」不同，這不能化簡為單一個對數計算。",
        // EN: Write 1 − 0.88ⁿ − 0.12n(0.88)ⁿ⁻¹ &gt; 0.9 and use a GDC table (or graph) of this expression against n.
        "寫出 1 − 0.88ⁿ − 0.12n(0.88)ⁿ⁻¹ &gt; 0.9，並用 GDC 的表（或圖像）列出這個式子對應 n 的值。",
        // EN: Check the two neighbouring values of n either side of 0.9 and give the first one that exceeds it.
        "檢查在 0.9 兩旁相鄰的兩個 n 值，並給出第一個超過它的值。",
      ],
      // EN: <p><b>Decode:</b> find the least <span class="chem">n</span> with <span class="chem">P(X ≥ 2) &gt; 0.9</span> where <span class="chem">X ~ B(n, 0.12)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 2) = 1 - 0.88^n - 0.12n(0.88)^{n-1}</span> <b>[A1]</b>.<br>From a GDC table: <span class="chem">n = 30</span> gives <span class="chem">0.890</span> <b>[A1]</b>; <span class="chem">n = 31</span> gives <span class="chem">0.901</span> <b>[A1]</b>.<br>So the smallest sample size is <span class="chem">n = 31</span> <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>求滿足 <span class=\"chem\">P(X ≥ 2) &gt; 0.9</span> 的最小 <span class=\"chem\">n</span>，其中 <span class=\"chem\">X ~ B(n, 0.12)</span> <b>[M1]</b>。<br><span class=\"chem\">P(X ≥ 2) = 1 - 0.88^n - 0.12n(0.88)^{n-1}</span> <b>[A1]</b>。<br>由 GDC 的表：<span class=\"chem\">n = 30</span> 給出 <span class=\"chem\">0.890</span> <b>[A1]</b>；<span class=\"chem\">n = 31</span> 給出 <span class=\"chem\">0.901</span> <b>[A1]</b>。<br>所以最小樣本大小為 <span class=\"chem\">n = 31</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q043 · short · challenge · SL · SL 4.8, 4.9, 4.11 · 8 marks
    "t4-2-q043": {
      // EN: <p>The masses of hens' eggs from a farm are normally distributed with mean <span class="chem">62</span> g and standard deviation <span class="chem">4.5</span> g. An egg is graded "large" if its mass exceeds <span class="chem">66</span> g. Eggs are packed at random in boxes of <span class="chem">12</span>.<br>(a) Find the probability that a randomly chosen egg is large. <strong>[2 marks]</strong><br>(b) Find the probability that a box contains at least <span class="chem">3</span> large eggs. <strong>[3 marks]</strong><br>(c) A box is known to contain at least <span class="chem">3</span> large eggs. Find the probability that it contains exactly <span class="chem">3</span> large eggs. <strong>[3 marks]</strong></p>
      stem: "<p>某農場雞蛋的質量服從正態分佈，平均值為 <span class=\"chem\">62</span> g，標準差為 <span class=\"chem\">4.5</span> g。若一隻雞蛋的質量超過 <span class=\"chem\">66</span> g，便評為「大」蛋。雞蛋隨機以每盒 <span class=\"chem\">12</span> 隻包裝。<br>(a) 求 (Find) 隨機選取的一隻雞蛋是大蛋的概率。<strong>[2 marks]</strong><br>(b) 求 (Find) 一盒中有至少 <span class=\"chem\">3</span> 隻大蛋的概率。<strong>[3 marks]</strong><br>(c) 已知一盒中有至少 <span class=\"chem\">3</span> 隻大蛋。求 (Find) 盒中恰好有 <span class=\"chem\">3</span> 隻大蛋的概率。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two distributions are hidden here. A single egg mass is normal; the NUMBER of large eggs in a box is binomial with p from the normal step. Part (c) is a conditional probability on that binomial.
        "解碼：這裏隱藏了兩個分佈。單一雞蛋的質量服從正態分佈；一盒中大蛋的「數目」服從二項分佈，其 p 來自正態分佈那一步。(c) 部分是關於該二項分佈的條件概率。",
        // EN: Keep p to at least 5 significant figures before using it in B(12, p).
        "在用於 B(12, p) 之前，p 至少保留 5 位有效數字。",
        // EN: In (c), the event "exactly 3" is inside "at least 3", so the intersection is just P(Y = 3).
        "在 (c) 中，事件「恰好 3 隻」包含在「至少 3 隻」之內，所以交集就是 P(Y = 3)。",
      ],
      // EN: <p><b>Decode:</b> normal model for one egg → binomial model for the count in a box → conditional probability.<br>(a) <span class="chem">p = P(M &gt; 66) = 0.187031</span>.<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.395413 ≈ 0.395</span>.<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.564650 ≈ 0.565</span>.</p>
      solution: "<p><b>解碼：</b>單一雞蛋用正態模型 → 一盒中的數目用二項模型 → 條件概率。<br>(a) <span class=\"chem\">p = P(M &gt; 66) = 0.187031</span>。<br>(b) <span class=\"chem\">Y ~ B(12, 0.187031)</span>；<span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.395413 ≈ 0.395</span>。<br>(c) <span class=\"chem\">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.564650 ≈ 0.565</span>。</p>",
      // EN: <p>(a) <span class="chem">p = P(M &gt; 66) = 0.187</span> (0.187031…).<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>: <span class="chem">P(Y ≥ 3) = 0.395</span> (0.395413…).<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.565</span>.</p>
      answer: "<p>(a) <span class=\"chem\">p = P(M &gt; 66) = 0.187</span>（0.187031…）。<br>(b) <span class=\"chem\">Y ~ B(12, 0.187031)</span>：<span class=\"chem\">P(Y ≥ 3) = 0.395</span>（0.395413…）。<br>(c) <span class=\"chem\">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.565</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses the normal cdf for P(M > 66) with M ~ N(62, 4.5²).
        "M1：(a) 以 M ~ N(62, 4.5²) 使用正態 cdf 求 P(M > 66)。",
        // EN: A1: (a) 0.187 (0.187031…).
        "A1：(a) 0.187（0.187031…）。",
        // EN: M1: (b) Recognises Y ~ B(12, p) with p from (a).
        "M1：(b) 辨識出 Y ~ B(12, p)，其中 p 來自 (a)。",
        // EN: M1: (b) Writes P(Y ≥ 3) = 1 − P(Y ≤ 2).
        "M1：(b) 寫出 P(Y ≥ 3) = 1 − P(Y ≤ 2)。",
        // EN: A1: (b) 0.395 (0.395413…).
        "A1：(b) 0.395（0.395413…）。",
        // EN: M1: (c) Uses P(Y = 3 ∩ Y ≥ 3)/P(Y ≥ 3) = P(Y = 3)/P(Y ≥ 3).
        "M1：(c) 使用 P(Y = 3 ∩ Y ≥ 3)/P(Y ≥ 3) = P(Y = 3)/P(Y ≥ 3)。",
        // EN: A1: (c) P(Y = 3) = 0.223 (0.223270…).
        "A1：(c) P(Y = 3) = 0.223（0.223270…）。",
        // EN: A1: (c) 0.565 (accept 0.564 to 0.565).
        "A1：(c) 0.565（接受 0.564 至 0.565）。",
      ],
    },

    // ── t4-2-q044 · numeric · exam · SL · SL 4.9, 4.11 · 4 marks
    "t4-2-q044": {
      // EN: <p>The heights of adult men in a country are normally distributed with mean <span class="chem">170</span> cm and standard deviation <span class="chem">8</span> cm. A man is chosen at random and is found to be taller than <span class="chem">180</span> cm. Find the probability that he is taller than <span class="chem">185</span> cm.</p>
      stem: "<p>某國成年男子的身高服從正態分佈，平均值為 <span class=\"chem\">170</span> cm，標準差為 <span class=\"chem\">8</span> cm。隨機選出一名男子，發現他高於 <span class=\"chem\">180</span> cm。求 (Find) 他高於 <span class=\"chem\">185</span> cm 的概率。</p>",
      hints: [
        // EN: Decode: "is found to be taller than 180 cm" is the condition. You want P(H &gt; 185 | H &gt; 180).
        "解碼：「發現他高於 180 cm」是條件。你要求的是 P(H &gt; 185 | H &gt; 180)。",
        // EN: The event H &gt; 185 is inside H &gt; 180, so the intersection is just P(H &gt; 185).
        "事件 H &gt; 185 包含在 H &gt; 180 之內，所以交集就是 P(H &gt; 185)。",
        // EN: Divide P(H &gt; 185) by P(H &gt; 180), both from the normal cdf.
        "把 P(H &gt; 185) 除以 P(H &gt; 180)，兩者都用正態 cdf 求得。",
      ],
      // EN: <p><span class="chem">P(H &gt; 185 | H &gt; 180) = P(H &gt; 185)/P(H &gt; 180)</span> <b>[M1]</b>.<br><span class="chem">P(H &gt; 185) = 0.0303964</span> <b>[A1]</b>, <span class="chem">P(H &gt; 180) = 0.105650</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.287709 ≈ 0.288</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(H &gt; 185 | H &gt; 180) = P(H &gt; 185)/P(H &gt; 180)</span> <b>[M1]</b>。<br><span class=\"chem\">P(H &gt; 185) = 0.0303964</span> <b>[A1]</b>，<span class=\"chem\">P(H &gt; 180) = 0.105650</span> <b>[A1]</b>。<br>比值 <span class=\"chem\">= 0.287709 ≈ 0.288</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q045 · short · challenge · SL · SL 4.8, 4.9, 4.11 · 8 marks
    "t4-2-q045": {
      // EN: <p>The masses of oranges picked at an orchard are normally distributed with mean <span class="chem">150</span> g and standard deviation <span class="chem">20</span> g. Oranges lighter than <span class="chem">120</span> g are rejected; all others are accepted for sale. Accepted oranges heavier than <span class="chem">180</span> g are sold as "premium".<br>(a) Find the probability that an orange is rejected. <strong>[2 marks]</strong><br>(b) Find the probability that an accepted orange is premium. <strong>[3 marks]</strong><br>(c) A crate contains <span class="chem">30</span> accepted oranges chosen at random. Find the probability that at least <span class="chem">3</span> of them are premium. <strong>[3 marks]</strong></p>
      stem: "<p>某果園採摘的橙的質量服從正態分佈，平均值為 <span class=\"chem\">150</span> g，標準差為 <span class=\"chem\">20</span> g。輕於 <span class=\"chem\">120</span> g 的橙會被剔除；其餘的都獲接納出售。獲接納而重於 <span class=\"chem\">180</span> g 的橙會以「優質」出售。<br>(a) 求 (Find) 一個橙被剔除的概率。<strong>[2 marks]</strong><br>(b) 求 (Find) 一個獲接納的橙是優質橙的概率。<strong>[3 marks]</strong><br>(c) 一箱中有 <span class=\"chem\">30</span> 個隨機選取的獲接納的橙。求 (Find) 其中至少 <span class=\"chem\">3</span> 個是優質橙的概率。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "an accepted orange is premium" is a conditional probability: the condition is M ≥ 120. The crate in (c) contains only accepted oranges, so its success probability is the conditional one from (b).
        "解碼：「一個獲接納的橙是優質橙」是條件概率：條件是 M ≥ 120。(c) 中的箱子只裝有獲接納的橙，所以其成功概率是 (b) 中的條件概率。",
        // EN: 120 and 180 are each 30 g from the mean, so P(M &gt; 180) = P(M &lt; 120).
        "120 及 180 都與平均值相距 30 g，所以 P(M &gt; 180) = P(M &lt; 120)。",
        // EN: In (c), use B(30, p) with p from (b) and the complement of "at most 2".
        "在 (c) 中，使用 B(30, p)，其中 p 來自 (b)，並使用「最多 2 個」的互補事件。",
      ],
      // EN: <p><b>Decode:</b> the condition "accepted" shrinks the sample space to <span class="chem">M ≥ 120</span>; every later probability lives inside it.<br>(a) <span class="chem">P(M &lt; 120) = 0.0668072 ≈ 0.0668</span>.<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = P(M &gt; 180)/P(M ≥ 120) = 0.0668072/(1 - 0.0668072) = 0.0715899 ≈ 0.0716</span>.<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.364620 ≈ 0.365</span>.</p>
      solution: "<p><b>解碼：</b>條件「獲接納」把樣本空間縮小為 <span class=\"chem\">M ≥ 120</span>；之後的每個概率都在其中計算。<br>(a) <span class=\"chem\">P(M &lt; 120) = 0.0668072 ≈ 0.0668</span>。<br>(b) <span class=\"chem\">P(M &gt; 180 | M ≥ 120) = P(M &gt; 180)/P(M ≥ 120) = 0.0668072/(1 - 0.0668072) = 0.0715899 ≈ 0.0716</span>。<br>(c) <span class=\"chem\">Y ~ B(30, 0.0715899)</span>；<span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.364620 ≈ 0.365</span>。</p>",
      // EN: <p>(a) <span class="chem">P(M &lt; 120) = 0.0668</span> (0.0668072…).<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = 0.0668072/0.933193 = 0.0716</span> (0.0715899…).<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>, <span class="chem">P(Y ≥ 3) = 0.365</span> (0.364620…).</p>
      answer: "<p>(a) <span class=\"chem\">P(M &lt; 120) = 0.0668</span>（0.0668072…）。<br>(b) <span class=\"chem\">P(M &gt; 180 | M ≥ 120) = 0.0668072/0.933193 = 0.0716</span>（0.0715899…）。<br>(c) <span class=\"chem\">Y ~ B(30, 0.0715899)</span>，<span class=\"chem\">P(Y ≥ 3) = 0.365</span>（0.364620…）。</p>",
      markscheme: [
        // EN: M1: (a) Uses the normal cdf for P(M < 120).
        "M1：(a) 使用正態 cdf 求 P(M < 120)。",
        // EN: A1: (a) 0.0668.
        "A1：(a) 0.0668。",
        // EN: M1: (b) Sets up P(M > 180 | M ≥ 120) = P(M > 180)/P(M ≥ 120), noting M > 180 lies inside M ≥ 120.
        "M1：(b) 列出 P(M > 180 | M ≥ 120) = P(M > 180)/P(M ≥ 120)，並注意到 M > 180 包含在 M ≥ 120 之內。",
        // EN: A1: (b) Numerator 0.0668072 and denominator 0.933193 (by symmetry the numerator equals (a)).
        "A1：(b) 分子 0.0668072 及分母 0.933193（由對稱性，分子等於 (a) 的答案）。",
        // EN: A1: (b) 0.0716.
        "A1：(b) 0.0716。",
        // EN: M1: (c) Recognises Y ~ B(30, p) with p from (b), not from P(M > 180).
        "M1：(c) 辨識出 Y ~ B(30, p)，其中 p 來自 (b)，而不是來自 P(M > 180)。",
        // EN: M1: (c) Uses P(Y ≥ 3) = 1 − P(Y ≤ 2).
        "M1：(c) 使用 P(Y ≥ 3) = 1 − P(Y ≤ 2)。",
        // EN: A1: (c) 0.365 (accept 0.364 to 0.365).
        "A1：(c) 0.365（接受 0.364 至 0.365）。",
      ],
    },

    // ── t4-2-q046 · numeric · challenge · AHL · AHL 4.13, SL 4.9 · 6 marks
    "t4-2-q046": {
      // EN: <p>A workshop cuts metal rods on three machines. Machine A makes <span class="chem">50%</span> of the rods, with lengths <span class="chem">N(50.0, 0.4^2)</span> cm; machine B makes <span class="chem">30%</span>, with lengths <span class="chem">N(50.3, 0.5^2)</span> cm; machine C makes the rest, with lengths <span class="chem">N(49.8, 0.6^2)</span> cm. A rod longer than <span class="chem">50.8</span> cm is classed as oversize. A rod chosen at random is oversize. Find the probability that it was made by machine B.</p>
      stem: "<p>一間工場用三部機器切割金屬棒。機器 A 生產 <span class=\"chem\">50%</span> 的金屬棒，長度為 <span class=\"chem\">N(50.0, 0.4^2)</span> cm；機器 B 生產 <span class=\"chem\">30%</span>，長度為 <span class=\"chem\">N(50.3, 0.5^2)</span> cm；機器 C 生產其餘的金屬棒，長度為 <span class=\"chem\">N(49.8, 0.6^2)</span> cm。長於 <span class=\"chem\">50.8</span> cm 的金屬棒被列為過長。隨機選出的一枝金屬棒是過長的。求 (Find) 它由機器 B 生產的概率。</p>",
      hints: [
        // EN: Decode: you know the effect (oversize) and want the cause (machine B). That is Bayes' theorem with a three-way partition; each conditional probability P(O | machine) comes from a different normal distribution.
        "解碼：你知道結果（過長），想求原因（機器 B）。這是使用三向分割的貝葉斯定理；每個條件概率 P(O | machine) 都來自一個不同的正態分佈。",
        // EN: Find P(L &gt; 50.8) for each machine with the normal cdf. Machine C makes 20% of the rods.
        "用正態 cdf 求每部機器的 P(L &gt; 50.8)。機器 C 生產 20% 的金屬棒。",
        // EN: P(B | O) = 0.3 P(O | B) / [0.5 P(O | A) + 0.3 P(O | B) + 0.2 P(O | C)].
        "P(B | O) = 0.3 P(O | B) / [0.5 P(O | A) + 0.3 P(O | B) + 0.2 P(O | C)]。",
      ],
      // EN: <p><b>Decode:</b> reverse the condition with Bayes' theorem; the likelihoods are normal tail areas.<br><span class="chem">P(O | A) = 0.0227501, P(O | B) = 0.158655, P(O | C) = 0.0477904</span> <b>[M1 A1]</b>.<br><span class="chem">P(O) = 0.5(0.0227501) + 0.3(0.158655) + 0.2(0.0477904) = 0.0685297</span> <b>[M1 A1]</b>.<br><span class="chem">P(B | O) = 0.0475966/0.0685297 = 0.694539 ≈ 0.695</span> <b>[M1 A1]</b>.</p>
      solution: "<p><b>解碼：</b>用貝葉斯定理把條件倒轉；各似然值是正態分佈的尾部面積。<br><span class=\"chem\">P(O | A) = 0.0227501, P(O | B) = 0.158655, P(O | C) = 0.0477904</span> <b>[M1 A1]</b>。<br><span class=\"chem\">P(O) = 0.5(0.0227501) + 0.3(0.158655) + 0.2(0.0477904) = 0.0685297</span> <b>[M1 A1]</b>。<br><span class=\"chem\">P(B | O) = 0.0475966/0.0685297 = 0.694539 ≈ 0.695</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q047 · short · exam · AHL · AHL 4.14 · 9 marks
    "t4-2-q047": {
      // EN: <p>The time <span class="chem">X</span> hours that a phone battery lasts after a warning light comes on has probability density function <span class="chem">f(x) = kxe^{-x}</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise.<br>(a) Find the value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">P(1 &lt; X &lt; 2)</span>. <strong>[2 marks]</strong><br>(c) Find the median of <span class="chem">X</span>. <strong>[3 marks]</strong><br>(d) Find <span class="chem">E(X)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>手機的警告燈亮起後，電池仍可維持的時間 <span class=\"chem\">X</span> 小時的概率密度函數為：當 <span class=\"chem\">0 ≤ x ≤ 4</span> 時 <span class=\"chem\">f(x) = kxe^{-x}</span>，其餘情況 <span class=\"chem\">f(x) = 0</span>。<br>(a) 求 (Find) <span class=\"chem\">k</span> 的值。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">P(1 &lt; X &lt; 2)</span>。<strong>[2 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">X</span> 的中位數。<strong>[3 marks]</strong><br>(d) 求 (Find) <span class=\"chem\">E(X)</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: All four parts are definite integrals of f; use the numerical integration on your GDC and store k unrounded.
        "四個部分都是 f 的定積分；使用 GDC 的數值積分，並把未經捨入的 k 儲存起來。",
        // EN: For the median, graph y = ∫_0^x kte^{−t} dt (or use a solver) and find where it equals 0.5.
        "求中位數時，繪畫 y = ∫_0^x kte^{−t} dt 的圖像（或使用方程求解功能），找出它等於 0.5 的位置。",
        // EN: E(X) = ∫_0^4 x f(x) dx.
        "E(X) = ∫_0^4 x f(x) dx。",
      ],
      // EN: <p>(a) GDC: <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1/0.908422 = 1.10081 ≈ 1.10</span>. (Exactly <span class="chem">k = 1/(1 - 5e^{-4})</span>.)<br>(b) <span class="chem">∫_1^2 kxe^{-x} dx = 0.362996 ≈ 0.363</span>.<br>(c) Solve <span class="chem">∫_0^m kxe^{-x} dx = 0.5</span>: <span class="chem">m = 1.53618 ≈ 1.54</span> hours.<br>(d) <span class="chem">E(X) = ∫_0^4 kx^2 e^{-x} dx = 1.67741 ≈ 1.68</span> hours.</p>
      solution: "<p>(a) GDC：<span class=\"chem\">∫_0^4 xe^{-x} dx = 0.908422</span>，所以 <span class=\"chem\">k = 1/0.908422 = 1.10081 ≈ 1.10</span>。（準確值為 <span class=\"chem\">k = 1/(1 - 5e^{-4})</span>。）<br>(b) <span class=\"chem\">∫_1^2 kxe^{-x} dx = 0.362996 ≈ 0.363</span>。<br>(c) 解 <span class=\"chem\">∫_0^m kxe^{-x} dx = 0.5</span>：<span class=\"chem\">m = 1.53618 ≈ 1.54</span> 小時。<br>(d) <span class=\"chem\">E(X) = ∫_0^4 kx^2 e^{-x} dx = 1.67741 ≈ 1.68</span> 小時。</p>",
      // EN: <p>(a) <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1.10</span> (1.10081…).<br>(b) <span class="chem">P(1 &lt; X &lt; 2) = 0.363</span> (0.362996…).<br>(c) Median <span class="chem">m = 1.54</span> h (1.53618…).<br>(d) <span class="chem">E(X) = 1.68</span> h (1.67741…).</p>
      answer: "<p>(a) <span class=\"chem\">∫_0^4 xe^{-x} dx = 0.908422</span>，所以 <span class=\"chem\">k = 1.10</span>（1.10081…）。<br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2) = 0.363</span>（0.362996…）。<br>(c) 中位數 <span class=\"chem\">m = 1.54</span> h（1.53618…）。<br>(d) <span class=\"chem\">E(X) = 1.68</span> h（1.67741…）。</p>",
      markscheme: [
        // EN: M1: (a) Sets ∫_0^4 kxe^{−x} dx = 1.
        "M1：(a) 令 ∫_0^4 kxe^{−x} dx = 1。",
        // EN: A1: (a) k = 1.10 (1.10081…).
        "A1：(a) k = 1.10（1.10081…）。",
        // EN: M1: (b) Writes ∫_1^2 kxe^{−x} dx with their k.
        "M1：(b) 以其 k 值寫出 ∫_1^2 kxe^{−x} dx。",
        // EN: A1: (b) 0.363.
        "A1：(b) 0.363。",
        // EN: M1: (c) Sets ∫_0^m kxe^{−x} dx = 0.5.
        "M1：(c) 令 ∫_0^m kxe^{−x} dx = 0.5。",
        // EN: M1: (c) Solves numerically (graph or solver) for 0 ≤ m ≤ 4.
        "M1：(c) 以數值方法（圖像或方程求解功能）在 0 ≤ m ≤ 4 內求解。",
        // EN: A1: (c) m = 1.54.
        "A1：(c) m = 1.54。",
        // EN: M1: (d) Writes E(X) = ∫_0^4 x · kxe^{−x} dx.
        "M1：(d) 寫出 E(X) = ∫_0^4 x · kxe^{−x} dx。",
        // EN: A1: (d) 1.68.
        "A1：(d) 1.68。",
      ],
    },

    // ── t4-2-q048 · numeric · challenge · AHL · AHL 4.14 · 6 marks
    "t4-2-q048": {
      // EN: <p>At a help desk, the waiting time <span class="chem">T</span> minutes never exceeds <span class="chem">10</span> minutes. For <span class="chem">0 ≤ t ≤ 10</span> the probability density of <span class="chem">T</span> is proportional to <span class="chem">e^{-0.2t}</span>, and it is zero otherwise. The manager wants to know how wide the middle half of waiting times is. Find the interquartile range of <span class="chem">T</span>.</p>
      stem: "<p>在一個服務台，輪候時間 <span class=\"chem\">T</span> 分鐘永不超過 <span class=\"chem\">10</span> 分鐘。當 <span class=\"chem\">0 ≤ t ≤ 10</span> 時，<span class=\"chem\">T</span> 的概率密度與 <span class=\"chem\">e^{-0.2t}</span> 成正比，其餘情況為零。經理想知道中間一半的輪候時間有多寬。求 (Find) <span class=\"chem\">T</span> 的四分位數間距。</p>",
      hints: [
        // EN: Decode: "proportional to e^{−0.2t}" means f(t) = ke^{−0.2t} with k found from total probability 1. "The middle half" is the interquartile range Q₃ − Q₁, so you need two quantiles of a continuous distribution.
        "解碼：「與 e^{−0.2t} 成正比」表示 f(t) = ke^{−0.2t}，其中 k 由總概率為 1 求得。「中間一半」就是四分位數間距 Q₃ − Q₁，所以你需要求連續分佈的兩個分位數。",
        // EN: Find k from ∫_0^{10} ke^{−0.2t} dt = 1 (k ≈ 0.2313).
        "由 ∫_0^{10} ke^{−0.2t} dt = 1 求 k（k ≈ 0.2313）。",
        // EN: Solve ∫_0^{q} ke^{−0.2t} dt = 0.25 and = 0.75 on your GDC, then subtract.
        "在 GDC 上分別解 ∫_0^{q} ke^{−0.2t} dt = 0.25 及 = 0.75，然後相減。",
      ],
      // EN: <p><b>Decode:</b> write <span class="chem">f(t) = ke^{-0.2t}</span> on <span class="chem">[0, 10]</span>; the IQR is <span class="chem">Q_3 - Q_1</span>.<br><span class="chem">∫_0^{10} ke^{-0.2t} dt = 1 ⇒ k = 0.231304</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_1} f(t) dt = 0.25</span>: <span class="chem">Q_1 = 1.21779</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_3} f(t) dt = 0.75</span>: <span class="chem">Q_3 = 5.22771</span> <b>[A1]</b>.<br>IQR <span class="chem">= 5.22771 - 1.21779 = 4.00992 ≈ 4.01</span> minutes <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>在 <span class=\"chem\">[0, 10]</span> 上寫 <span class=\"chem\">f(t) = ke^{-0.2t}</span>；四分位數間距 (IQR) 是 <span class=\"chem\">Q_3 - Q_1</span>。<br><span class=\"chem\">∫_0^{10} ke^{-0.2t} dt = 1 ⇒ k = 0.231304</span> <b>[M1 A1]</b>。<br>解 <span class=\"chem\">∫_0^{Q_1} f(t) dt = 0.25</span>：<span class=\"chem\">Q_1 = 1.21779</span> <b>[M1 A1]</b>。<br>解 <span class=\"chem\">∫_0^{Q_3} f(t) dt = 0.75</span>：<span class=\"chem\">Q_3 = 5.22771</span> <b>[A1]</b>。<br>IQR <span class=\"chem\">= 5.22771 - 1.21779 = 4.00992 ≈ 4.01</span> 分鐘 <b>[A1]</b>。</p>",
    },

    // ── t4-2-q049 · numeric · exam · AHL · AHL 4.14 · 5 marks
    "t4-2-q049": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = ke^{-x^2}</span> for <span class="chem">0 ≤ x ≤ 2</span>, and <span class="chem">f(x) = 0</span> otherwise. Find <span class="chem">Var(X)</span>.</p>
      stem: "<p>連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數為：當 <span class=\"chem\">0 ≤ x ≤ 2</span> 時 <span class=\"chem\">f(x) = ke^{-x^2}</span>，其餘情況 <span class=\"chem\">f(x) = 0</span>。求 (Find) <span class=\"chem\">Var(X)</span>。</p>",
      hints: [
        // EN: <span class="chem">e^{-x^2}</span> has no elementary antiderivative, so every integral here is done numerically on the GDC.
        "<span class=\"chem\">e^{-x^2}</span> 沒有初等的原函數，所以這裏的每個積分都要在 GDC 上以數值方法計算。",
        // EN: Find k from <span class="chem">∫_0^2 ke^{-x^2} dx = 1</span>, then <span class="chem">E(X)</span> and <span class="chem">E(X^2)</span>.
        "由 <span class=\"chem\">∫_0^2 ke^{-x^2} dx = 1</span> 求 k，然後求 <span class=\"chem\">E(X)</span> 及 <span class=\"chem\">E(X^2)</span>。",
        // EN: Use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span> with unrounded values.
        "以未經捨入的值使用 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>。",
      ],
      // EN: <p><span class="chem">∫_0^2 e^{-x^2} dx = 0.882081 ⇒ k = 1.13368</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = ∫_0^2 kxe^{-x^2} dx = 0.556459</span> and <span class="chem">E(X^2) = ∫_0^2 kx^2 e^{-x^2} dx = 0.479236</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 0.479236 - 0.556459^2 = 0.169589 ≈ 0.170</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">∫_0^2 e^{-x^2} dx = 0.882081 ⇒ k = 1.13368</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(X) = ∫_0^2 kxe^{-x^2} dx = 0.556459</span> 及 <span class=\"chem\">E(X^2) = ∫_0^2 kx^2 e^{-x^2} dx = 0.479236</span> <b>[M1 A1]</b>。<br><span class=\"chem\">Var(X) = 0.479236 - 0.556459^2 = 0.169589 ≈ 0.170</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q050 · numeric · challenge · SL · SL 4.7, 4.8 · 6 marks
    "t4-2-q050": {
      // EN: <p>In a fairground game a player rolls five fair six-sided dice. If <span class="chem">Y</span> sixes appear, the player receives <span class="chem">$Y^2</span> (so two sixes pay <span class="chem">$4</span>). The organiser wants to charge a price that makes the game fair. Find this price, giving your answer in dollars to 2 decimal places.</p>
      stem: "<p>在一個遊樂場遊戲中，玩家擲五顆公平的六面骰子。若擲出 <span class=\"chem\">Y</span> 個六點，玩家可得 <span class=\"chem\">$Y^2</span>（所以兩個六點可得 <span class=\"chem\">$4</span>）。主辦者想訂出一個使遊戲公平的價錢。求 (Find) 這個價錢，答案以元為單位並準確至 2 位小數。</p>",
      hints: [
        // EN: Decode: the number of sixes is binomial, Y ~ B(5, 1/6). A fair price equals the expected payout, which here is E(Y²), not [E(Y)]².
        "解碼：六點的數目服從二項分佈，Y ~ B(5, 1/6)。公平的價錢等於預期派彩，這裏是 E(Y²)，而不是 [E(Y)]²。",
        // EN: Either tabulate y, P(Y = y) and y² P(Y = y) for y = 0 to 5 with the binomial pdf, or use E(Y²) = Var(Y) + [E(Y)]².
        "你可以用二項 pdf 列出 y = 0 至 5 的 y、P(Y = y) 及 y² P(Y = y)，或使用 E(Y²) = Var(Y) + [E(Y)]²。",
        // EN: E(Y) = 5/6 and Var(Y) = 5(1/6)(5/6) = 25/36.
        "E(Y) = 5/6 及 Var(Y) = 5(1/6)(5/6) = 25/36。",
      ],
      // EN: <p><b>Decode:</b> the payout is <span class="chem">Y^2</span> with <span class="chem">Y ~ B(5, 1/6)</span>; fair price = <span class="chem">E(Y^2)</span> <b>[M1]</b>.<br><span class="chem">E(Y) = 5/6</span>, <span class="chem">Var(Y) = 5(1/6)(5/6) = 25/36</span> <b>[A1 A1]</b>.<br><span class="chem">E(Y^2) = Var(Y) + [E(Y)]^2 = 25/36 + 25/36 = 50/36</span> <b>[M1 A1]</b>.<br>Fair price <span class="chem">= $1.39</span> (1.3888…) <b>[A1]</b>. (A GDC table of <span class="chem">y^2 P(Y = y)</span> gives the same total.)</p>
      solution: "<p><b>解碼：</b>派彩是 <span class=\"chem\">Y^2</span>，其中 <span class=\"chem\">Y ~ B(5, 1/6)</span>；公平價錢 = <span class=\"chem\">E(Y^2)</span> <b>[M1]</b>。<br><span class=\"chem\">E(Y) = 5/6</span>，<span class=\"chem\">Var(Y) = 5(1/6)(5/6) = 25/36</span> <b>[A1 A1]</b>。<br><span class=\"chem\">E(Y^2) = Var(Y) + [E(Y)]^2 = 25/36 + 25/36 = 50/36</span> <b>[M1 A1]</b>。<br>公平價錢 <span class=\"chem\">= $1.39</span>（1.3888…）<b>[A1]</b>。（用 GDC 列出 <span class=\"chem\">y^2 P(Y = y)</span> 的表，會得到相同的總和。）</p>",
    },

    // ── t4-2-q051 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q051": {
      // EN: <p>The reaction times of drivers in a simulator are normally distributed with mean <span class="chem">72</span> hundredths of a second and standard deviation <span class="chem">6.5</span> hundredths of a second. Find the interquartile range of the reaction times, in hundredths of a second.</p>
      stem: "<p>在模擬器中，司機的反應時間服從正態分佈，平均值為 <span class=\"chem\">72</span> 百分之一秒，標準差為 <span class=\"chem\">6.5</span> 百分之一秒。求 (Find) 反應時間的四分位數間距，以百分之一秒為單位。</p>",
      hints: [
        // EN: The quartiles are the values with 25% and 75% of the distribution below them.
        "四分位數是分佈中分別有 25% 及 75% 位於其下方的值。",
        // EN: Use the inverse normal with area 0.25 and 0.75 (μ = 72, σ = 6.5), then subtract.
        "使用逆正態，面積分別為 0.25 及 0.75（μ = 72，σ = 6.5），然後相減。",
      ],
      // EN: <p><span class="chem">Q_1 = 67.6158</span> (inverse normal, area 0.25) <b>[M1]</b> and <span class="chem">Q_3 = 76.3842</span> (area 0.75) <b>[A1]</b>.<br>IQR <span class="chem">= 76.3842 - 67.6158 = 8.77</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">Q_1 = 67.6158</span>（逆正態，面積 0.25）<b>[M1]</b> 及 <span class=\"chem\">Q_3 = 76.3842</span>（面積 0.75）<b>[A1]</b>。<br>IQR <span class=\"chem\">= 76.3842 - 67.6158 = 8.77</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q052 · numeric · exam · SL · SL 4.8, 4.11 · 4 marks
    "t4-2-q052": {
      // EN: <p>A basketball player scores from <span class="chem">25%</span> of her three-point attempts, independently. In a match she takes <span class="chem">10</span> three-point attempts and scores at least one. Find the probability that she scores at least three.</p>
      stem: "<p>一名籃球員的三分球投射有 <span class=\"chem\">25%</span> 命中，各次互相獨立。在一場比賽中，她投射了 <span class=\"chem\">10</span> 次三分球，並至少命中一次。求 (Find) 她至少命中三次的概率。</p>",
      hints: [
        // EN: Decode: "and scores at least one" is information you are given, so this is P(X ≥ 3 | X ≥ 1) with X ~ B(10, 0.25).
        "解碼：「並至少命中一次」是題目給你的資料，所以這是 P(X ≥ 3 | X ≥ 1)，其中 X ~ B(10, 0.25)。",
        // EN: X ≥ 3 lies inside X ≥ 1, so the numerator is just P(X ≥ 3).
        "X ≥ 3 包含在 X ≥ 1 之內，所以分子就是 P(X ≥ 3)。",
        // EN: P(X ≥ 3) = 1 − P(X ≤ 2) and P(X ≥ 1) = 1 − P(X = 0).
        "P(X ≥ 3) = 1 − P(X ≤ 2) 及 P(X ≥ 1) = 1 − P(X = 0)。",
      ],
      // EN: <p><span class="chem">P(X ≥ 3 | X ≥ 1) = P(X ≥ 3)/P(X ≥ 1)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 3) = 1 - 0.525593 = 0.474407</span> <b>[A1]</b>, <span class="chem">P(X ≥ 1) = 1 - 0.75^{10} = 0.943686</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.502717 ≈ 0.503</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(X ≥ 3 | X ≥ 1) = P(X ≥ 3)/P(X ≥ 1)</span> <b>[M1]</b>。<br><span class=\"chem\">P(X ≥ 3) = 1 - 0.525593 = 0.474407</span> <b>[A1]</b>，<span class=\"chem\">P(X ≥ 1) = 1 - 0.75^{10} = 0.943686</span> <b>[A1]</b>。<br>比值 <span class=\"chem\">= 0.502717 ≈ 0.503</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q053 · short · challenge · SL · SL 4.8, 4.9, 4.12 · 10 marks
    "t4-2-q053": {
      // EN: <p>A machine makes bolts whose diameters are normally distributed with mean <span class="chem">μ</span> mm and standard deviation <span class="chem">σ</span> mm. A bolt is rejected if its diameter is less than <span class="chem">9.9</span> mm or more than <span class="chem">10.2</span> mm. Quality records show that <span class="chem">5%</span> of bolts are too narrow and <span class="chem">3%</span> are too wide.<br>(a) Find the value of <span class="chem">σ</span> and the value of <span class="chem">μ</span>. <strong>[4 marks]</strong><br>(b) Bolts are sold in packs of <span class="chem">50</span>, taken at random from the machine before inspection. Find the probability that a pack contains at most <span class="chem">3</span> bolts that would be rejected. <strong>[3 marks]</strong><br>(c) An engineer resets the machine so that <span class="chem">μ = 10.05</span> mm, with <span class="chem">σ</span> unchanged. Find the new percentage of bolts that are rejected. <strong>[3 marks]</strong></p>
      stem: "<p>一部機器製造的螺栓直徑服從正態分佈，平均值為 <span class=\"chem\">μ</span> mm，標準差為 <span class=\"chem\">σ</span> mm。若螺栓的直徑少於 <span class=\"chem\">9.9</span> mm 或多於 <span class=\"chem\">10.2</span> mm，便會被剔除。品質紀錄顯示有 <span class=\"chem\">5%</span> 的螺栓太窄，<span class=\"chem\">3%</span> 太寬。<br>(a) 求 (Find) <span class=\"chem\">σ</span> 的值及 <span class=\"chem\">μ</span> 的值。<strong>[4 marks]</strong><br>(b) 螺栓以每包 <span class=\"chem\">50</span> 枚出售，在檢查前從機器隨機抽取。求 (Find) 一包中最多有 <span class=\"chem\">3</span> 枚會被剔除的螺栓的概率。<strong>[3 marks]</strong><br>(c) 一名工程師重新調校機器，使 <span class=\"chem\">μ = 10.05</span> mm，而 <span class=\"chem\">σ</span> 不變。求 (Find) 被剔除螺栓的新百分比。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is "inverse normal with both μ and σ unknown"; (b) hides a binomial (each bolt is rejected or not, with probability from the records); (c) is a fresh normal calculation with the new mean.
        "解碼：(a) 是「μ 及 σ 皆未知的逆正態」；(b) 隱藏了一個二項分佈（每枚螺栓要麼被剔除，要麼不被剔除，概率來自紀錄）；(c) 是以新平均值重新進行的正態計算。",
        // EN: "3% too wide" means P(D &lt; 10.2) = 0.97. Form two equations (x − μ)/σ = z and solve them simultaneously.
        "「3% 太寬」表示 P(D &lt; 10.2) = 0.97。組成兩條 (x − μ)/σ = z 形式的方程並聯立求解。",
        // EN: In (c), 10.05 is exactly halfway between 9.9 and 10.2, so the two tails are equal.
        "在 (c) 中，10.05 恰好位於 9.9 與 10.2 的正中間，所以兩條尾部相等。",
      ],
      // EN: <p><b>Decode:</b> two percentages → two z-scores → two linear equations; then a rejected bolt is a "success" in a binomial count.<br>(a) <span class="chem">z_1 = -1.644854</span>, <span class="chem">z_2 = 1.880794</span>. <span class="chem">9.9 - μ = -1.644854σ</span> and <span class="chem">10.2 - μ = 1.880794σ</span> ⇒ <span class="chem">0.3 = 3.525648σ ⇒ σ = 0.0850908</span>, <span class="chem">μ = 9.9 + 1.644854σ = 10.03996</span>.<br>(b) Each bolt is rejected with probability <span class="chem">0.08</span>, so <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425296 ≈ 0.425</span>.<br>(c) With <span class="chem">D ~ N(10.05, 0.0850908^2)</span>: <span class="chem">P(D &lt; 9.9) = P(D &gt; 10.2) = 0.0389651</span>, total <span class="chem">0.0779302</span>, about <span class="chem">7.79%</span>. Centring the mean between the limits lowers the rejection rate from 8%.</p>
      solution: "<p><b>解碼：</b>兩個百分比 → 兩個 z 值 → 兩條線性方程；然後被剔除的螺栓就是二項計數中的「成功」。<br>(a) <span class=\"chem\">z_1 = -1.644854</span>，<span class=\"chem\">z_2 = 1.880794</span>。<span class=\"chem\">9.9 - μ = -1.644854σ</span> 及 <span class=\"chem\">10.2 - μ = 1.880794σ</span> ⇒ <span class=\"chem\">0.3 = 3.525648σ ⇒ σ = 0.0850908</span>，<span class=\"chem\">μ = 9.9 + 1.644854σ = 10.03996</span>。<br>(b) 每枚螺栓被剔除的概率為 <span class=\"chem\">0.08</span>，所以 <span class=\"chem\">R ~ B(50, 0.08)</span>：<span class=\"chem\">P(R ≤ 3) = 0.425296 ≈ 0.425</span>。<br>(c) 以 <span class=\"chem\">D ~ N(10.05, 0.0850908^2)</span>：<span class=\"chem\">P(D &lt; 9.9) = P(D &gt; 10.2) = 0.0389651</span>，總和 <span class=\"chem\">0.0779302</span>，約 <span class=\"chem\">7.79%</span>。把平均值置於兩個界限的正中，令剔除率由 8% 下降。</p>",
      // EN: <p>(a) <span class="chem">(9.9 - μ)/σ = -1.64485</span> and <span class="chem">(10.2 - μ)/σ = 1.88079</span> give <span class="chem">σ = 0.0851</span> mm (0.0850908…) and <span class="chem">μ = 10.0</span> mm (10.03996…).<br>(b) <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425</span> (0.425296…).<br>(c) <span class="chem">P(D &lt; 9.9) + P(D &gt; 10.2) = 2(0.0389651) = 0.0779</span>, so about <span class="chem">7.79%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(9.9 - μ)/σ = -1.64485</span> 及 <span class=\"chem\">(10.2 - μ)/σ = 1.88079</span> 給出 <span class=\"chem\">σ = 0.0851</span> mm（0.0850908…）及 <span class=\"chem\">μ = 10.0</span> mm（10.03996…）。<br>(b) <span class=\"chem\">R ~ B(50, 0.08)</span>：<span class=\"chem\">P(R ≤ 3) = 0.425</span>（0.425296…）。<br>(c) <span class=\"chem\">P(D &lt; 9.9) + P(D &gt; 10.2) = 2(0.0389651) = 0.0779</span>，所以約為 <span class=\"chem\">7.79%</span>。</p>",
      markscheme: [
        // EN: M1: (a) Forms two standardised equations (x − μ)/σ = z.
        "M1：(a) 組成兩條標準化方程 (x − μ)/σ = z。",
        // EN: A1: (a) Correct z-values −1.64485 (area 0.05) and 1.88079 (area 0.97).
        "A1：(a) 正確的 z 值 −1.64485（面積 0.05）及 1.88079（面積 0.97）。",
        // EN: A1: (a) σ = 0.0851 (0.0850908…).
        "A1：(a) σ = 0.0851（0.0850908…）。",
        // EN: A1: (a) μ = 10.0 (10.03996…).
        "A1：(a) μ = 10.0（10.03996…）。",
        // EN: R1: (b) Recognises p(reject) = 0.05 + 0.03 = 0.08.
        "R1：(b) 辨識出 p(reject) = 0.05 + 0.03 = 0.08。",
        // EN: M1: (b) Uses R ~ B(50, 0.08) with the cumulative binomial for P(R ≤ 3).
        "M1：(b) 使用 R ~ B(50, 0.08) 及累積二項分佈求 P(R ≤ 3)。",
        // EN: A1: (b) 0.425.
        "A1：(b) 0.425。",
        // EN: M1: (c) Adds both tails P(D < 9.9) + P(D > 10.2) using N(10.05, σ²) with σ unrounded.
        "M1：(c) 使用 N(10.05, σ²)（σ 未經捨入）把兩條尾部 P(D < 9.9) + P(D > 10.2) 相加。",
        // EN: A1: (c) Each tail is 0.0389651 (by symmetry, as 10.05 is midway between the limits).
        "A1：(c) 每條尾部為 0.0389651（由對稱性，因 10.05 位於兩個界限的正中）。",
        // EN: A1: (c) 7.79% (0.0779302…).
        "A1：(c) 7.79%（0.0779302…）。",
      ],
    },

    // ── t4-2-q054 · numeric · exam · SL · SL 4.9, 4.11 · 4 marks
    "t4-2-q054": {
      // EN: <p>Scores <span class="chem">X</span> on a reasoning test are normally distributed with mean <span class="chem">100</span> and standard deviation <span class="chem">15</span>. Let <span class="chem">A</span> be the event <span class="chem">X &gt; 110</span> and <span class="chem">B</span> the event <span class="chem">X &lt; 120</span>. Find <span class="chem">P(A | B)</span>.</p>
      stem: "<p>某推理測驗的分數 <span class=\"chem\">X</span> 服從正態分佈，平均值為 <span class=\"chem\">100</span>，標準差為 <span class=\"chem\">15</span>。設 <span class=\"chem\">A</span> 為事件 <span class=\"chem\">X &gt; 110</span>，<span class=\"chem\">B</span> 為事件 <span class=\"chem\">X &lt; 120</span>。求 (Find) <span class=\"chem\">P(A | B)</span>。</p>",
      hints: [
        // EN: The intersection <span class="chem">A ∩ B</span> is the interval <span class="chem">110 &lt; X &lt; 120</span>.
        "交集 <span class=\"chem\">A ∩ B</span> 是區間 <span class=\"chem\">110 &lt; X &lt; 120</span>。",
        // EN: Divide <span class="chem">P(110 &lt; X &lt; 120)</span> by <span class="chem">P(X &lt; 120)</span>.
        "把 <span class=\"chem\">P(110 &lt; X &lt; 120)</span> 除以 <span class=\"chem\">P(X &lt; 120)</span>。",
        // EN: Compare your answer with P(A) = 0.252: since they differ, A and B are not independent.
        "把你的答案與 P(A) = 0.252 比較：由於兩者不同，A 與 B 並不獨立。",
      ],
      // EN: <p><span class="chem">P(A | B) = P(110 &lt; X &lt; 120)/P(X &lt; 120)</span> <b>[M1]</b>.<br><span class="chem">P(110 &lt; X &lt; 120) = 0.161281</span> <b>[A1]</b>, <span class="chem">P(X &lt; 120) = 0.908789</span> <b>[A1]</b>.<br><span class="chem">P(A | B) = 0.177468 ≈ 0.177</span> <b>[A1]</b>.<br>Note: <span class="chem">P(A) = 0.252 ≠ P(A | B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are not independent.</p>
      solution: "<p><span class=\"chem\">P(A | B) = P(110 &lt; X &lt; 120)/P(X &lt; 120)</span> <b>[M1]</b>。<br><span class=\"chem\">P(110 &lt; X &lt; 120) = 0.161281</span> <b>[A1]</b>，<span class=\"chem\">P(X &lt; 120) = 0.908789</span> <b>[A1]</b>。<br><span class=\"chem\">P(A | B) = 0.177468 ≈ 0.177</span> <b>[A1]</b>。<br>注意：<span class=\"chem\">P(A) = 0.252 ≠ P(A | B)</span>，所以 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 並不獨立。</p>",
    },

    // ── t4-2-q055 · numeric · challenge · SL · SL 4.8 · 5 marks
    "t4-2-q055": {
      // EN: <p>A printer jams on each page with the same probability <span class="chem">p</span>, independently. When it prints an <span class="chem">8</span>-page document, the probability that it jams at least once is <span class="chem">0.75</span>. Find the probability that it jams on exactly <span class="chem">2</span> of the <span class="chem">8</span> pages.</p>
      stem: "<p>一部打印機在每一頁卡紙的概率都是 <span class=\"chem\">p</span>，各頁互相獨立。當它打印一份 <span class=\"chem\">8</span> 頁的文件時，至少卡紙一次的概率為 <span class=\"chem\">0.75</span>。求 (Find) 它在 <span class=\"chem\">8</span> 頁中恰好有 <span class=\"chem\">2</span> 頁卡紙的概率。</p>",
      hints: [
        // EN: Decode: the binomial parameter p is unknown; the "at least once" fact is an equation for p. Only after finding p can you answer the question asked.
        "解碼：二項分佈的參數 p 未知；「至少一次」這項資料是一條關於 p 的方程。只有求得 p 後，才能回答題目所問的問題。",
        // EN: 1 − (1 − p)⁸ = 0.75, so (1 − p)⁸ = 0.25.
        "1 − (1 − p)⁸ = 0.75，所以 (1 − p)⁸ = 0.25。",
        // EN: Then use the binomial pdf for X ~ B(8, p) at x = 2, with p unrounded.
        "然後以未經捨入的 p，對 X ~ B(8, p) 在 x = 2 處使用二項 pdf。",
      ],
      // EN: <p><b>Decode:</b> solve for <span class="chem">p</span> first, then use <span class="chem">X ~ B(8, p)</span>.<br><span class="chem">P(X ≥ 1) = 1 - (1 - p)^8 = 0.75</span> <b>[M1]</b> <span class="chem">⇒ 1 - p = 0.25^{1/8} ⇒ p = 0.159104</span> <b>[A1]</b>.<br><span class="chem">P(X = 2) = ⁸C₂ p^2 (1 - p)^6</span> <b>[M1]</b> <span class="chem">= 28(0.159104)^2(0.840896)^6</span> <b>[A1]</b> <span class="chem">= 0.250595 ≈ 0.251</span> <b>[A1]</b>.</p>
      solution: "<p><b>解碼：</b>先求 <span class=\"chem\">p</span>，然後使用 <span class=\"chem\">X ~ B(8, p)</span>。<br><span class=\"chem\">P(X ≥ 1) = 1 - (1 - p)^8 = 0.75</span> <b>[M1]</b> <span class=\"chem\">⇒ 1 - p = 0.25^{1/8} ⇒ p = 0.159104</span> <b>[A1]</b>。<br><span class=\"chem\">P(X = 2) = ⁸C₂ p^2 (1 - p)^6</span> <b>[M1]</b> <span class=\"chem\">= 28(0.159104)^2(0.840896)^6</span> <b>[A1]</b> <span class=\"chem\">= 0.250595 ≈ 0.251</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q056 · numeric · exam · AHL · AHL 4.14, SL 4.7 · 5 marks
    "t4-2-q056": {
      // EN: <p>A discrete random variable <span class="chem">X</span> has probability distribution <span class="chem">P(X = x) = k/x</span> for <span class="chem">x = 1, 2, 3, 4, 5</span>, where <span class="chem">k</span> is a constant. Find the standard deviation of <span class="chem">X</span>.</p>
      stem: "<p>離散隨機變數 <span class=\"chem\">X</span> 的概率分佈為 <span class=\"chem\">P(X = x) = k/x</span>，其中 <span class=\"chem\">x = 1, 2, 3, 4, 5</span>，而 <span class=\"chem\">k</span> 是常數。求 (Find) <span class=\"chem\">X</span> 的標準差。</p>",
      hints: [
        // EN: Use <span class="chem">Σ P(X = x) = 1</span>: <span class="chem">k(1 + 1/2 + 1/3 + 1/4 + 1/5) = 1</span>.
        "使用 <span class=\"chem\">Σ P(X = x) = 1</span>：<span class=\"chem\">k(1 + 1/2 + 1/3 + 1/4 + 1/5) = 1</span>。",
        // EN: Put x in one GDC list and P(X = x) in another; the one-variable statistics with frequencies give the mean and σ directly.
        "把 x 輸入 GDC 的一個列表，把 P(X = x) 輸入另一個列表；附頻數的單變量統計會直接給出平均值及 σ。",
        // EN: Or by hand: E(X) = Σ x(k/x) = 5k and E(X²) = Σ x²(k/x) = 15k.
        "或以人手計算：E(X) = Σ x(k/x) = 5k 及 E(X²) = Σ x²(k/x) = 15k。",
      ],
      // EN: <p><span class="chem">k(137/60) = 1 ⇒ k = 60/137 = 0.437956</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = 5k = 2.18978</span>, <span class="chem">E(X^2) = k(1 + 2 + 3 + 4 + 5) = 15k = 6.56934</span> <b>[A1]</b>.<br><span class="chem">Var(X) = 6.56934 - 2.18978^2 = 1.77420</span> <b>[M1]</b>, so <span class="chem">σ = 1.33199 ≈ 1.33</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">k(137/60) = 1 ⇒ k = 60/137 = 0.437956</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(X) = 5k = 2.18978</span>，<span class=\"chem\">E(X^2) = k(1 + 2 + 3 + 4 + 5) = 15k = 6.56934</span> <b>[A1]</b>。<br><span class=\"chem\">Var(X) = 6.56934 - 2.18978^2 = 1.77420</span> <b>[M1]</b>，所以 <span class=\"chem\">σ = 1.33199 ≈ 1.33</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q057 · short · challenge · AHL · AHL 4.13, SL 4.8 · 9 marks
    "t4-2-q057": {
      // EN: <p>A magician has three coins. Coin F is fair, coin H lands heads with probability <span class="chem">0.7</span>, and coin T lands heads with probability <span class="chem">0.2</span>. She picks coin F with probability <span class="chem">1/2</span>, coin H with probability <span class="chem">1/3</span> and coin T with probability <span class="chem">1/6</span>, and tosses the chosen coin <span class="chem">8</span> times. It shows exactly <span class="chem">6</span> heads.<br>(a) For each coin, find the probability of exactly <span class="chem">6</span> heads in <span class="chem">8</span> tosses. <strong>[3 marks]</strong><br>(b) Find the probability that she chose coin H. <strong>[3 marks]</strong><br>(c) She tosses the same coin once more. Find the probability that it shows heads. <strong>[3 marks]</strong></p>
      stem: "<p>一名魔術師有三枚硬幣。硬幣 F 是公平的，硬幣 H 擲得正面的概率為 <span class=\"chem\">0.7</span>，硬幣 T 擲得正面的概率為 <span class=\"chem\">0.2</span>。她選取硬幣 F 的概率為 <span class=\"chem\">1/2</span>，選取硬幣 H 的概率為 <span class=\"chem\">1/3</span>，選取硬幣 T 的概率為 <span class=\"chem\">1/6</span>，然後把所選的硬幣投擲 <span class=\"chem\">8</span> 次。結果恰好出現 <span class=\"chem\">6</span> 次正面。<br>(a) 對每枚硬幣，求 (Find) 在 <span class=\"chem\">8</span> 次投擲中恰好得 <span class=\"chem\">6</span> 次正面的概率。<strong>[3 marks]</strong><br>(b) 求 (Find) 她選取了硬幣 H 的概率。<strong>[3 marks]</strong><br>(c) 她把同一枚硬幣再投擲一次。求 (Find) 它擲得正面的概率。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the coin is a hidden cause and "6 heads in 8" is the evidence. Part (a) gives the likelihoods (binomial), (b) is Bayes' theorem with three events, and (c) needs ALL three updated probabilities.
        "解碼：硬幣是隱藏的原因，「8 次中有 6 次正面」是證據。(a) 部分給出似然值（二項分佈），(b) 是有三個事件的貝葉斯定理，而 (c) 需要用到「全部」三個更新後的概率。",
        // EN: In (b), the denominator is the total probability of 6 heads, summed over the three coins with weights 1/2, 1/3, 1/6.
        "在 (b) 中，分母是 6 次正面的全概率，以權重 1/2、1/3、1/6 對三枚硬幣求和。",
        // EN: In (c), P(head on toss 9) = Σ P(coin | 6 heads) × P(head | coin). Using the original weights 1/2, 1/3, 1/6 is the common mistake.
        "在 (c) 中，P(head on toss 9) = Σ P(coin | 6 heads) × P(head | coin)。使用原來的權重 1/2、1/3、1/6 是常見錯誤。",
      ],
      // EN: <p><b>Decode:</b> unknown cause (coin), observed data (6 heads in 8). Likelihoods are binomial; Bayes updates the prior weights.<br>(a) <span class="chem">P(6 | F) = ⁸C₆(0.5)^8 = 0.109375</span>, <span class="chem">P(6 | H) = ⁸C₆(0.7)^6(0.3)^2 = 0.296475</span>, <span class="chem">P(6 | T) = ⁸C₆(0.2)^6(0.8)^2 = 0.00114688</span>.<br>(b) <span class="chem">P(6) = 0.0546875 + 0.0988252 + 0.000191147 = 0.153704</span>; <span class="chem">P(H | 6) = 0.0988252/0.153704 = 0.642958 ≈ 0.643</span>.<br>(c) <span class="chem">P(F | 6) = 0.355798</span>, <span class="chem">P(T | 6) = 0.00124360</span>. <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628219 ≈ 0.628</span>.</p>
      solution: "<p><b>解碼：</b>未知的原因（硬幣），觀察到的數據（8 次中有 6 次正面）。似然值服從二項分佈；貝葉斯定理更新先驗權重。<br>(a) <span class=\"chem\">P(6 | F) = ⁸C₆(0.5)^8 = 0.109375</span>，<span class=\"chem\">P(6 | H) = ⁸C₆(0.7)^6(0.3)^2 = 0.296475</span>，<span class=\"chem\">P(6 | T) = ⁸C₆(0.2)^6(0.8)^2 = 0.00114688</span>。<br>(b) <span class=\"chem\">P(6) = 0.0546875 + 0.0988252 + 0.000191147 = 0.153704</span>；<span class=\"chem\">P(H | 6) = 0.0988252/0.153704 = 0.642958 ≈ 0.643</span>。<br>(c) <span class=\"chem\">P(F | 6) = 0.355798</span>，<span class=\"chem\">P(T | 6) = 0.00124360</span>。<span class=\"chem\">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628219 ≈ 0.628</span>。</p>",
      // EN: <p>(a) F: <span class="chem">0.109</span> (0.109375); H: <span class="chem">0.296</span> (0.296475…); T: <span class="chem">0.00115</span> (0.00114688).<br>(b) <span class="chem">P(6 heads) = 0.153704</span>, so <span class="chem">P(H | 6 heads) = (1/3)(0.296475)/0.153704 = 0.643</span>.<br>(c) Posteriors F 0.355798, H 0.642958, T 0.00124360; <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628</span>.</p>
      answer: "<p>(a) F：<span class=\"chem\">0.109</span>（0.109375）；H：<span class=\"chem\">0.296</span>（0.296475…）；T：<span class=\"chem\">0.00115</span>（0.00114688）。<br>(b) <span class=\"chem\">P(6 heads) = 0.153704</span>，所以 <span class=\"chem\">P(H | 6 heads) = (1/3)(0.296475)/0.153704 = 0.643</span>。<br>(c) 後驗概率 F 0.355798、H 0.642958、T 0.00124360；<span class=\"chem\">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses the binomial pdf B(8, p) at 6 for each coin.
        "M1：(a) 對每枚硬幣使用二項 pdf B(8, p) 在 6 處的值。",
        // EN: A1: (a) F: 0.109375 and H: 0.296475.
        "A1：(a) F：0.109375 及 H：0.296475。",
        // EN: A1: (a) T: 0.00114688.
        "A1：(a) T：0.00114688。",
        // EN: M1: (b) Finds the total P(6 heads) = (1/2)(0.109375) + (1/3)(0.296475) + (1/6)(0.00114688).
        "M1：(b) 求全概率 P(6 heads) = (1/2)(0.109375) + (1/3)(0.296475) + (1/6)(0.00114688)。",
        // EN: A1: (b) P(6 heads) = 0.153704.
        "A1：(b) P(6 heads) = 0.153704。",
        // EN: A1: (b) P(H | 6 heads) = 0.643 (0.642958…).
        "A1：(b) P(H | 6 heads) = 0.643（0.642958…）。",
        // EN: M1: (c) Recognises the coin is unknown: weights each coin's P(head) by its posterior probability.
        "M1：(c) 辨識出硬幣是未知的：以每枚硬幣的後驗概率為權重，對其 P(head) 加權。",
        // EN: A1: (c) Posteriors 0.356 (F) and 0.00124 (T) found as well as H.
        "A1：(c) 除 H 外，亦求得後驗概率 0.356 (F) 及 0.00124 (T)。",
        // EN: A1: (c) 0.628 (0.628219…).
        "A1：(c) 0.628（0.628219…）。",
      ],
    },

    // ── t4-2-q058 · short · challenge · AHL · AHL 4.14 · 19 marks
    "t4-2-q058": {
      // EN: <p>This investigation looks at the family of continuous random variables <span class="chem">X_n</span> with probability density functions <span class="chem">f_n(x) = (n + 1)x^n</span> for <span class="chem">0 ≤ x ≤ 1</span> (and <span class="chem">0</span> otherwise), where <span class="chem">n</span> is a non-negative integer.<br>(a) Show that <span class="chem">f_n</span> is a valid probability density function for every <span class="chem">n</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">E(X_1)</span>, <span class="chem">E(X_2)</span> and <span class="chem">E(X_3)</span>. <strong>[3 marks]</strong><br>(c) Conjecture a formula for <span class="chem">E(X_n)</span> in terms of <span class="chem">n</span>, and prove it. <strong>[3 marks]</strong><br>(d) Find the median of <span class="chem">X_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) For <span class="chem">n = 3</span>, calculate the mean and the median, and state which is larger. Explain this using the shape of the graph of <span class="chem">f_3</span>. <strong>[3 marks]</strong><br>(f) Show that <span class="chem">Var(X_n) = (n + 1)/((n + 2)^2(n + 3))</span>. <strong>[4 marks]</strong><br>(g) Hence describe what happens to the distribution of <span class="chem">X_n</span> as <span class="chem">n → ∞</span>. <strong>[2 marks]</strong></p>
      stem: "<p>這項探究研究一族連續隨機變數 <span class=\"chem\">X_n</span>，其概率密度函數為：當 <span class=\"chem\">0 ≤ x ≤ 1</span> 時 <span class=\"chem\">f_n(x) = (n + 1)x^n</span>（其餘情況為 <span class=\"chem\">0</span>），其中 <span class=\"chem\">n</span> 是非負整數。<br>(a) 證明 (Show that) 對每個 <span class=\"chem\">n</span>，<span class=\"chem\">f_n</span> 都是有效的概率密度函數。<strong>[2 marks]</strong><br>(b) 求 (Find) <span class=\"chem\">E(X_1)</span>、<span class=\"chem\">E(X_2)</span> 及 <span class=\"chem\">E(X_3)</span>。<strong>[3 marks]</strong><br>(c) 猜想 (Conjecture) 一條以 <span class=\"chem\">n</span> 表示 <span class=\"chem\">E(X_n)</span> 的公式，並證明 (prove) 它。<strong>[3 marks]</strong><br>(d) 以 <span class=\"chem\">n</span> 表示，求 (Find) <span class=\"chem\">X_n</span> 的中位數。<strong>[2 marks]</strong><br>(e) 當 <span class=\"chem\">n = 3</span> 時，計算 (Calculate) 平均值及中位數，並指出 (State) 哪一個較大。利用 <span class=\"chem\">f_3</span> 圖像的形狀解釋 (Explain) 這一點。<strong>[3 marks]</strong><br>(f) 證明 (Show that) <span class=\"chem\">Var(X_n) = (n + 1)/((n + 2)^2(n + 3))</span>。<strong>[4 marks]</strong><br>(g) 由此 (Hence) 描述 (describe) 當 <span class=\"chem\">n → ∞</span> 時 <span class=\"chem\">X_n</span> 的分佈有何變化。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a staged investigation. Compute small cases, spot the pattern, then prove it with a general integral in n. Each part uses one of the standard definitions: total area 1, E(X) = ∫ x f(x) dx, median ∫_0^m f = 1/2, Var = E(X²) − [E(X)]².
        "解碼：這是一項分階段的探究。先計算細小的情況，找出規律，再用關於 n 的一般積分加以證明。每個部分都用到一個標準定義：總面積為 1、E(X) = ∫ x f(x) dx、中位數 ∫_0^m f = 1/2、Var = E(X²) − [E(X)]²。",
        // EN: For (b), E(X_1) = ∫_0^1 x · 2x dx. Write each answer as a fraction to see the pattern.
        "在 (b) 中，E(X_1) = ∫_0^1 x · 2x dx。把每個答案寫成分數，以便看出規律。",
        // EN: For (d), the integral from 0 to m is simply m^{n+1}.
        "在 (d) 中，由 0 至 m 的積分就是 m^{n+1}。",
        // EN: For (f), expand (n + 2)² − (n + 1)(n + 3) carefully: it is a constant.
        "在 (f) 中，小心展開 (n + 2)² − (n + 1)(n + 3)：它是一個常數。",
      ],
      // EN: <p><b>Decode:</b> small cases → conjecture → general proof, using the definitions of a pdf, mean, median and variance for a continuous random variable.<br>(a) For <span class="chem">0 ≤ x ≤ 1</span>, <span class="chem">(n + 1)x^n ≥ 0</span>, and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = ∫_0^1 2x^2 dx = 2/3</span>, <span class="chem">E(X_2) = ∫_0^1 3x^3 dx = 3/4</span>, <span class="chem">E(X_3) = ∫_0^1 4x^4 dx = 4/5</span>.<br>(c) Pattern: <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">E(X_n) = ∫_0^1 (n + 1)x^{n+1} dx = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">∫_0^m (n + 1)x^n dx = m^{n+1} = 1/2 ⇒ m = 2^{-1/(n+1)}</span>.<br>(e) <span class="chem">n = 3</span>: mean <span class="chem">4/5 = 0.8</span>, median <span class="chem">2^{-1/4} = 0.840896 ≈ 0.841</span>. The median is larger: <span class="chem">f_3(x) = 4x^3</span> is small near <span class="chem">0</span> and large near <span class="chem">1</span>, giving a long left tail that drags the mean down.<br>(f) <span class="chem">E(X_n^2) = ∫_0^1 (n + 1)x^{n+2} dx = (n + 1)/(n + 3)</span>. Then <span class="chem">Var(X_n) = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3))</span>, and <span class="chem">(n^2 + 4n + 4) - (n^2 + 4n + 3) = 1</span>, giving <span class="chem">(n + 1)/((n + 2)^2(n + 3))</span>.<br>(g) The numerator grows like <span class="chem">n</span> and the denominator like <span class="chem">n^3</span>, so <span class="chem">Var(X_n) → 0</span>; with <span class="chem">E(X_n) → 1</span>, almost all the probability ends up just below <span class="chem">x = 1</span>.</p>
      solution: "<p><b>解碼：</b>細小情況 → 猜想 → 一般證明，運用連續隨機變數的概率密度函數、平均值、中位數及方差的定義。<br>(a) 當 <span class=\"chem\">0 ≤ x ≤ 1</span> 時，<span class=\"chem\">(n + 1)x^n ≥ 0</span>，而且 <span class=\"chem\">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>。<br>(b) <span class=\"chem\">E(X_1) = ∫_0^1 2x^2 dx = 2/3</span>，<span class=\"chem\">E(X_2) = ∫_0^1 3x^3 dx = 3/4</span>，<span class=\"chem\">E(X_3) = ∫_0^1 4x^4 dx = 4/5</span>。<br>(c) 規律：<span class=\"chem\">E(X_n) = (n + 1)/(n + 2)</span>。證明：<span class=\"chem\">E(X_n) = ∫_0^1 (n + 1)x^{n+1} dx = (n + 1)/(n + 2)</span>。<br>(d) <span class=\"chem\">∫_0^m (n + 1)x^n dx = m^{n+1} = 1/2 ⇒ m = 2^{-1/(n+1)}</span>。<br>(e) <span class=\"chem\">n = 3</span>：平均值 <span class=\"chem\">4/5 = 0.8</span>，中位數 <span class=\"chem\">2^{-1/4} = 0.840896 ≈ 0.841</span>。中位數較大：<span class=\"chem\">f_3(x) = 4x^3</span> 在 <span class=\"chem\">0</span> 附近很小，在 <span class=\"chem\">1</span> 附近很大，形成一條長長的左尾，把平均值拉低。<br>(f) <span class=\"chem\">E(X_n^2) = ∫_0^1 (n + 1)x^{n+2} dx = (n + 1)/(n + 3)</span>。於是 <span class=\"chem\">Var(X_n) = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3))</span>，而 <span class=\"chem\">(n^2 + 4n + 4) - (n^2 + 4n + 3) = 1</span>，得 <span class=\"chem\">(n + 1)/((n + 2)^2(n + 3))</span>。<br>(g) 分子的增長與 <span class=\"chem\">n</span> 同階，分母則與 <span class=\"chem\">n^3</span> 同階，所以 <span class=\"chem\">Var(X_n) → 0</span>；再加上 <span class=\"chem\">E(X_n) → 1</span>，幾乎全部概率最終都集中在略低於 <span class=\"chem\">x = 1</span> 之處。</p>",
      // EN: <p>(a) <span class="chem">f_n(x) ≥ 0</span> on <span class="chem">[0, 1]</span> and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = 2/3</span>, <span class="chem">E(X_2) = 3/4</span>, <span class="chem">E(X_3) = 4/5</span>.<br>(c) Conjecture <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">∫_0^1 x(n + 1)x^n dx = (n + 1)[x^{n+2}/(n + 2)]_0^1 = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">m^{n+1} = 1/2 ⇒ m = (1/2)^{1/(n+1)} = 2^{-1/(n+1)}</span>.<br>(e) Mean <span class="chem">0.8</span>, median <span class="chem">2^{-1/4} = 0.841</span>; the median is larger. The density increases towards <span class="chem">x = 1</span>, so the distribution has a long tail to the left (negative skew), which pulls the mean below the median.<br>(f) <span class="chem">E(X_n^2) = (n + 1)/(n + 3)</span>, so <span class="chem">Var = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3)) = (n + 1)/((n + 2)^2(n + 3))</span>, since <span class="chem">(n + 2)^2 - (n + 1)(n + 3) = 1</span>.<br>(g) <span class="chem">Var(X_n) → 0</span> while <span class="chem">E(X_n) → 1</span>: the probability becomes concentrated closer and closer to <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) 在 <span class=\"chem\">[0, 1]</span> 上 <span class=\"chem\">f_n(x) ≥ 0</span>，而且 <span class=\"chem\">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>。<br>(b) <span class=\"chem\">E(X_1) = 2/3</span>，<span class=\"chem\">E(X_2) = 3/4</span>，<span class=\"chem\">E(X_3) = 4/5</span>。<br>(c) 猜想 <span class=\"chem\">E(X_n) = (n + 1)/(n + 2)</span>。證明：<span class=\"chem\">∫_0^1 x(n + 1)x^n dx = (n + 1)[x^{n+2}/(n + 2)]_0^1 = (n + 1)/(n + 2)</span>。<br>(d) <span class=\"chem\">m^{n+1} = 1/2 ⇒ m = (1/2)^{1/(n+1)} = 2^{-1/(n+1)}</span>。<br>(e) 平均值 <span class=\"chem\">0.8</span>，中位數 <span class=\"chem\">2^{-1/4} = 0.841</span>；中位數較大。密度向 <span class=\"chem\">x = 1</span> 遞增，所以分佈有一條長長的左尾（負偏斜），把平均值拉低至中位數以下。<br>(f) <span class=\"chem\">E(X_n^2) = (n + 1)/(n + 3)</span>，所以 <span class=\"chem\">Var = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3)) = (n + 1)/((n + 2)^2(n + 3))</span>，因為 <span class=\"chem\">(n + 2)^2 - (n + 1)(n + 3) = 1</span>。<br>(g) <span class=\"chem\">Var(X_n) → 0</span> 而 <span class=\"chem\">E(X_n) → 1</span>：概率越來越集中於 <span class=\"chem\">x = 1</span> 附近。</p>",
      markscheme: [
        // EN: M1: (a) Integrates: ∫_0^1 (n + 1)xⁿ dx = [xⁿ⁺¹]_0^1.
        "M1：(a) 進行積分：∫_0^1 (n + 1)xⁿ dx = [xⁿ⁺¹]_0^1。",
        // EN: R1: (a) States f_n(x) ≥ 0 on [0, 1] and the integral equals 1, so f_n is a valid pdf (AG).
        "R1：(a) 指出在 [0, 1] 上 f_n(x) ≥ 0 且積分等於 1，所以 f_n 是有效的概率密度函數 (AG)。",
        // EN: A1: (b) E(X_1) = 2/3.
        "A1：(b) E(X_1) = 2/3。",
        // EN: A1: (b) E(X_2) = 3/4.
        "A1：(b) E(X_2) = 3/4。",
        // EN: A1: (b) E(X_3) = 4/5.
        "A1：(b) E(X_3) = 4/5。",
        // EN: A1: (c) Conjecture E(X_n) = (n + 1)/(n + 2).
        "A1：(c) 猜想 E(X_n) = (n + 1)/(n + 2)。",
        // EN: M1: (c) Writes E(X_n) = ∫_0^1 (n + 1)xⁿ⁺¹ dx.
        "M1：(c) 寫出 E(X_n) = ∫_0^1 (n + 1)xⁿ⁺¹ dx。",
        // EN: A1: (c) Evaluates to (n + 1)/(n + 2), proving the conjecture for all n.
        "A1：(c) 計算得 (n + 1)/(n + 2)，證明猜想對所有 n 成立。",
        // EN: M1: (d) Sets ∫_0^m (n + 1)xⁿ dx = mⁿ⁺¹ = 1/2.
        "M1：(d) 令 ∫_0^m (n + 1)xⁿ dx = mⁿ⁺¹ = 1/2。",
        // EN: A1: (d) m = 2^(−1/(n+1)).
        "A1：(d) m = 2^(−1/(n+1))。",
        // EN: A1: (e) Mean = 0.8.
        "A1：(e) 平均值 = 0.8。",
        // EN: A1: (e) Median = 2^(−1/4) = 0.841.
        "A1：(e) 中位數 = 2^(−1/4) = 0.841。",
        // EN: R1: (e) Median is larger; the density rises towards x = 1, so the long tail is on the left (negative skew) and the mean is pulled down.
        "R1：(e) 中位數較大；密度向 x = 1 上升，所以長尾在左方（負偏斜），平均值被拉低。",
        // EN: M1: (f) Writes E(X_n²) = ∫_0^1 (n + 1)xⁿ⁺² dx.
        "M1：(f) 寫出 E(X_n²) = ∫_0^1 (n + 1)xⁿ⁺² dx。",
        // EN: A1: (f) E(X_n²) = (n + 1)/(n + 3).
        "A1：(f) E(X_n²) = (n + 1)/(n + 3)。",
        // EN: M1: (f) Uses Var = E(X_n²) − [E(X_n)]² and combines over the common denominator (n + 2)²(n + 3).
        "M1：(f) 使用 Var = E(X_n²) − [E(X_n)]²，並以公分母 (n + 2)²(n + 3) 合併。",
        // EN: A1: (f) Uses (n + 2)² − (n + 1)(n + 3) = 1 to reach the given result (AG).
        "A1：(f) 利用 (n + 2)² − (n + 1)(n + 3) = 1 得出所給結果 (AG)。",
        // EN: A1: (g) Var(X_n) → 0 (and E(X_n) → 1) as n → ∞.
        "A1：(g) 當 n → ∞ 時，Var(X_n) → 0（及 E(X_n) → 1）。",
        // EN: R1: (g) Interprets: the distribution concentrates at (just below) x = 1.
        "R1：(g) 詮釋：分佈集中於（略低於）x = 1 之處。",
      ],
    },

    // ── t4-2-q059 · short · challenge · AHL · AHL 4.13 · 15 marks
    "t4-2-q059": {
      // EN: <p>A screening test for a condition <span class="chem">D</span> gives a positive result for <span class="chem">95%</span> of people who have the condition and for <span class="chem">5%</span> of people who do not. In a city, <span class="chem">1%</span> of people have the condition. Assume that, for a given person, repeated test results are independent of each other once their condition status is known.<br>(a) A person tests positive once. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(b) The person is tested a second time and is positive again. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(c) Show that after <span class="chem">k</span> positive results in a row, <span class="chem">P(D | k positives) = 0.01(0.95)^k / (0.01(0.95)^k + 0.99(0.05)^k)</span>. <strong>[2 marks]</strong><br>(d) Hence show that the odds <span class="chem">P(D | k positives) / P(D′ | k positives) = 19^k/99</span>. <strong>[2 marks]</strong><br>(e) Find the smallest number of consecutive positive results needed for <span class="chem">P(D | k positives)</span> to exceed <span class="chem">0.999</span>. <strong>[3 marks]</strong><br>(f) In a different city the proportion with the condition is <span class="chem">p</span>. Find the set of values of <span class="chem">p</span> for which a single positive test makes it more likely than not that the person has the condition. <strong>[2 marks]</strong></p>
      stem: "<p>某病症 <span class=\"chem\">D</span> 的篩查測試，對 <span class=\"chem\">95%</span> 患有該病症的人給出陽性結果，對 <span class=\"chem\">5%</span> 沒有該病症的人亦給出陽性結果。在某城市，有 <span class=\"chem\">1%</span> 的人患有該病症。假設對同一個人而言，一旦知道其患病狀況，重複測試的結果便互相獨立。<br>(a) 某人測試一次呈陽性。求 (Find) 他患有該病症的概率。<strong>[3 marks]</strong><br>(b) 此人再接受第二次測試，結果再呈陽性。求 (Find) 他患有該病症的概率。<strong>[3 marks]</strong><br>(c) 證明 (Show that) 在連續 <span class=\"chem\">k</span> 次陽性結果後，<span class=\"chem\">P(D | k positives) = 0.01(0.95)^k / (0.01(0.95)^k + 0.99(0.05)^k)</span>。<strong>[2 marks]</strong><br>(d) 由此 (Hence) 證明 (show that) 勝算 (odds) <span class=\"chem\">P(D | k positives) / P(D′ | k positives) = 19^k/99</span>。<strong>[2 marks]</strong><br>(e) 求 (Find) 使 <span class=\"chem\">P(D | k positives)</span> 超過 <span class=\"chem\">0.999</span> 所需的最少連續陽性結果次數。<strong>[3 marks]</strong><br>(f) 在另一個城市，患有該病症的人所佔比例為 <span class=\"chem\">p</span>。求 (Find) <span class=\"chem\">p</span> 的取值範圍，使得單次陽性測試令此人患有該病症的可能性大於不患病的可能性。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: each part is Bayes' theorem with the two-event partition {D, D′}. The evidence grows from one positive to k positives; "independent once the status is known" lets you multiply the test probabilities along each branch.
        "解碼：每個部分都是以兩個事件 {D, D′} 為分割的貝葉斯定理。證據由一次陽性增加到 k 次陽性；「一旦知道患病狀況便互相獨立」讓你可以沿每條分支把測試概率相乘。",
        // EN: For (a), the denominator is P(+) = P(D)P(+ | D) + P(D′)P(+ | D′).
        "在 (a) 中，分母是 P(+) = P(D)P(+ | D) + P(D′)P(+ | D′)。",
        // EN: For (d), both conditional probabilities share the same denominator, so the odds are a ratio of the two numerators.
        "在 (d) 中，兩個條件概率的分母相同，所以勝算就是兩個分子之比。",
        // EN: For (e), P &gt; 0.999 is the same as odds &gt; 0.999/0.001 = 999.
        "在 (e) 中，P &gt; 0.999 等同於勝算 &gt; 0.999/0.001 = 999。",
      ],
      // EN: <p><b>Decode:</b> repeated Bayes updating on the partition {D, D′}; odds turn the updating into a multiplication by 19 per positive result.<br>(a) <span class="chem">P(+) = 0.0095 + 0.0495 = 0.059</span>, <span class="chem">P(D | +) = 0.0095/0.059 = 0.161017 ≈ 0.161</span>.<br>(b) <span class="chem">P(++ ∩ D) = 0.01(0.9025) = 0.009025</span>, <span class="chem">P(++ ∩ D′) = 0.99(0.0025) = 0.002475</span>, so <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.784783 ≈ 0.785</span>.<br>(c) Given <span class="chem">D</span>, the <span class="chem">k</span> results are independent, each positive with probability <span class="chem">0.95</span>, so <span class="chem">P(k+ | D) = 0.95^k</span>; similarly <span class="chem">P(k+ | D′) = 0.05^k</span>. Bayes' theorem gives the stated formula.<br>(d) <span class="chem">P(D | k+)/P(D′ | k+) = 0.01(0.95)^k/(0.99(0.05)^k) = (1/99)(19)^k</span>.<br>(e) <span class="chem">P &gt; 0.999 ⇔ odds &gt; 999 ⇔ 19^k &gt; 98901 ⇔ k &gt; ln 98901/ln 19 = 3.906</span>. Check: <span class="chem">k = 3</span> gives odds <span class="chem">69.3</span> (P = 0.986); <span class="chem">k = 4</span> gives odds <span class="chem">1316</span> (P = 0.99924). So <span class="chem">k = 4</span>.<br>(f) <span class="chem">P(D | +) &gt; 1/2 ⇔ 0.95p &gt; 0.05(1 - p) ⇔ p &gt; 0.05</span>.</p>
      solution: "<p><b>解碼：</b>在分割 {D, D′} 上重複進行貝葉斯更新；勝算把每次陽性結果的更新變成乘以 19。<br>(a) <span class=\"chem\">P(+) = 0.0095 + 0.0495 = 0.059</span>，<span class=\"chem\">P(D | +) = 0.0095/0.059 = 0.161017 ≈ 0.161</span>。<br>(b) <span class=\"chem\">P(++ ∩ D) = 0.01(0.9025) = 0.009025</span>，<span class=\"chem\">P(++ ∩ D′) = 0.99(0.0025) = 0.002475</span>，所以 <span class=\"chem\">P(D | ++) = 0.009025/0.0115 = 0.784783 ≈ 0.785</span>。<br>(c) 已知 <span class=\"chem\">D</span>，這 <span class=\"chem\">k</span> 個結果互相獨立，每個呈陽性的概率為 <span class=\"chem\">0.95</span>，所以 <span class=\"chem\">P(k+ | D) = 0.95^k</span>；同樣地 <span class=\"chem\">P(k+ | D′) = 0.05^k</span>。貝葉斯定理給出所述的公式。<br>(d) <span class=\"chem\">P(D | k+)/P(D′ | k+) = 0.01(0.95)^k/(0.99(0.05)^k) = (1/99)(19)^k</span>。<br>(e) <span class=\"chem\">P &gt; 0.999 ⇔ odds &gt; 999 ⇔ 19^k &gt; 98901 ⇔ k &gt; ln 98901/ln 19 = 3.906</span>。驗算：<span class=\"chem\">k = 3</span> 給出勝算 <span class=\"chem\">69.3</span>（P = 0.986）；<span class=\"chem\">k = 4</span> 給出勝算 <span class=\"chem\">1316</span>（P = 0.99924）。所以 <span class=\"chem\">k = 4</span>。<br>(f) <span class=\"chem\">P(D | +) &gt; 1/2 ⇔ 0.95p &gt; 0.05(1 - p) ⇔ p &gt; 0.05</span>。</p>",
      // EN: <p>(a) <span class="chem">P(+) = 0.01(0.95) + 0.99(0.05) = 0.059</span>; <span class="chem">P(D | +) = 0.0095/0.059 = 0.161</span>.<br>(b) <span class="chem">P(++) = 0.01(0.95)^2 + 0.99(0.05)^2 = 0.0115</span>; <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.785</span>.<br>(c) By conditional independence <span class="chem">P(k+ | D) = 0.95^k</span> and <span class="chem">P(k+ | D′) = 0.05^k</span>; Bayes gives the result.<br>(d) <span class="chem">P(D′ | k+)</span> has numerator <span class="chem">0.99(0.05)^k</span> over the same denominator, so the odds are <span class="chem">(0.01/0.99)(0.95/0.05)^k = 19^k/99</span>.<br>(e) Need odds <span class="chem">&gt; 999</span>: <span class="chem">19^k &gt; 98901 ⇒ k &gt; 3.906</span>, so <span class="chem">k = 4</span>.<br>(f) <span class="chem">0.95p &gt; 0.05(1 - p) ⇒ p &gt; 0.05</span>, so <span class="chem">0.05 &lt; p ≤ 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(+) = 0.01(0.95) + 0.99(0.05) = 0.059</span>；<span class=\"chem\">P(D | +) = 0.0095/0.059 = 0.161</span>。<br>(b) <span class=\"chem\">P(++) = 0.01(0.95)^2 + 0.99(0.05)^2 = 0.0115</span>；<span class=\"chem\">P(D | ++) = 0.009025/0.0115 = 0.785</span>。<br>(c) 由條件獨立性，<span class=\"chem\">P(k+ | D) = 0.95^k</span> 及 <span class=\"chem\">P(k+ | D′) = 0.05^k</span>；貝葉斯定理給出所求結果。<br>(d) <span class=\"chem\">P(D′ | k+)</span> 的分子為 <span class=\"chem\">0.99(0.05)^k</span>，分母相同，所以勝算為 <span class=\"chem\">(0.01/0.99)(0.95/0.05)^k = 19^k/99</span>。<br>(e) 需要勝算 <span class=\"chem\">&gt; 999</span>：<span class=\"chem\">19^k &gt; 98901 ⇒ k &gt; 3.906</span>，所以 <span class=\"chem\">k = 4</span>。<br>(f) <span class=\"chem\">0.95p &gt; 0.05(1 - p) ⇒ p &gt; 0.05</span>，所以 <span class=\"chem\">0.05 &lt; p ≤ 1</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses total probability P(+) = 0.01 × 0.95 + 0.99 × 0.05.
        "M1：(a) 使用全概率 P(+) = 0.01 × 0.95 + 0.99 × 0.05。",
        // EN: A1: (a) P(+) = 0.059.
        "A1：(a) P(+) = 0.059。",
        // EN: A1: (a) P(D | +) = 0.161 (0.161017…).
        "A1：(a) P(D | +) = 0.161（0.161017…）。",
        // EN: M1: (b) Uses P(++ | D) = 0.95² and P(++ | D′) = 0.05² (or updates the prior to 0.161017).
        "M1：(b) 使用 P(++ | D) = 0.95² 及 P(++ | D′) = 0.05²（或把先驗概率更新為 0.161017）。",
        // EN: A1: (b) P(++) = 0.0115.
        "A1：(b) P(++) = 0.0115。",
        // EN: A1: (b) P(D | ++) = 0.785 (0.784783…).
        "A1：(b) P(D | ++) = 0.785（0.784783…）。",
        // EN: M1: (c) States P(k positives | D) = 0.95^k and P(k positives | D′) = 0.05^k by conditional independence.
        "M1：(c) 由條件獨立性指出 P(k positives | D) = 0.95^k 及 P(k positives | D′) = 0.05^k。",
        // EN: A1: (c) Substitutes into Bayes' theorem to obtain the given expression (AG).
        "A1：(c) 代入貝葉斯定理，得出所給的式子 (AG)。",
        // EN: M1: (d) Writes P(D′ | k positives) = 0.99(0.05)^k/(same denominator) and divides.
        "M1：(d) 寫出 P(D′ | k positives) = 0.99(0.05)^k/(same denominator)，然後相除。",
        // EN: A1: (d) Simplifies (0.01/0.99)(0.95/0.05)^k = 19^k/99 (AG).
        "A1：(d) 化簡 (0.01/0.99)(0.95/0.05)^k = 19^k/99 (AG)。",
        // EN: M1: (e) Converts P > 0.999 into odds > 999 (or solves the inequality directly).
        "M1：(e) 把 P > 0.999 轉換為勝算 > 999（或直接解不等式）。",
        // EN: A1: (e) 19^k > 98901, so k > ln 98901/ln 19 = 3.906…
        "A1：(e) 19^k > 98901，所以 k > ln 98901/ln 19 = 3.906…",
        // EN: A1: (e) k = 4.
        "A1：(e) k = 4。",
        // EN: M1: (f) Sets 0.95p/(0.95p + 0.05(1 − p)) > 0.5, or 0.95p > 0.05(1 − p).
        "M1：(f) 列出 0.95p/(0.95p + 0.05(1 − p)) > 0.5，或 0.95p > 0.05(1 − p)。",
        // EN: A1: (f) p > 0.05 (with p ≤ 1).
        "A1：(f) p > 0.05（且 p ≤ 1）。",
      ],
    },

    // ── t4-2-q060 · short · challenge · AHL · AHL 4.14, SL 4.7 · 17 marks
    "t4-2-q060": {
      // EN: <p>This investigation finds the variance of a discrete uniform random variable. Let <span class="chem">X</span> take each of the values <span class="chem">1, 2, …, n</span> with probability <span class="chem">1/n</span>.<br>(a) Find <span class="chem">Var(X)</span> for <span class="chem">n = 2</span>, <span class="chem">n = 3</span> and <span class="chem">n = 4</span>. <strong>[3 marks]</strong><br>(b) Verify that your answers fit the formula <span class="chem">Var(X) = (n^2 - 1)/12</span>. <strong>[1 mark]</strong><br>(c) Using <span class="chem">Σ_{r=1}^n r = n(n + 1)/2</span> and <span class="chem">Σ_{r=1}^n r^2 = n(n + 1)(2n + 1)/6</span>, prove the formula in (b). <strong>[4 marks]</strong><br>(d) A fair spinner has <span class="chem">n</span> equal sectors labelled <span class="chem">5, 10, 15, …, 5n</span>. Write down the mean and variance of the score in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) Another fair spinner has equal sectors labelled <span class="chem">3, 7, 11, …</span>, each label <span class="chem">4</span> more than the previous one. The variance of its score is <span class="chem">160</span>. Find the number of sectors. <strong>[3 marks]</strong><br>(f) Find the mean score of the spinner in (e). <strong>[1 mark]</strong><br>(g) Let <span class="chem">U</span> be a continuous random variable with constant density <span class="chem">1/n</span> on <span class="chem">0 ≤ u ≤ n</span>. Show that <span class="chem">Var(U) = n^2/12</span>, and comment on <span class="chem">Var(X)/Var(U)</span> for large <span class="chem">n</span>. <strong>[3 marks]</strong></p>
      stem: "<p>這項探究求離散均勻隨機變數的方差。設 <span class=\"chem\">X</span> 以概率 <span class=\"chem\">1/n</span> 取 <span class=\"chem\">1, 2, …, n</span> 中的每一個值。<br>(a) 求 (Find) 當 <span class=\"chem\">n = 2</span>、<span class=\"chem\">n = 3</span> 及 <span class=\"chem\">n = 4</span> 時的 <span class=\"chem\">Var(X)</span>。<strong>[3 marks]</strong><br>(b) 驗證 (Verify) 你的答案符合公式 <span class=\"chem\">Var(X) = (n^2 - 1)/12</span>。<strong>[1 mark]</strong><br>(c) 利用 <span class=\"chem\">Σ_{r=1}^n r = n(n + 1)/2</span> 及 <span class=\"chem\">Σ_{r=1}^n r^2 = n(n + 1)(2n + 1)/6</span>，證明 (prove) (b) 中的公式。<strong>[4 marks]</strong><br>(d) 一個公平的轉盤有 <span class=\"chem\">n</span> 個相等的扇形，分別標示 <span class=\"chem\">5, 10, 15, …, 5n</span>。以 <span class=\"chem\">n</span> 寫出 (Write down) 得分的平均值及方差。<strong>[2 marks]</strong><br>(e) 另一個公平的轉盤有相等的扇形，分別標示 <span class=\"chem\">3, 7, 11, …</span>，每個標示比前一個多 <span class=\"chem\">4</span>。其得分的方差為 <span class=\"chem\">160</span>。求 (Find) 扇形的數目。<strong>[3 marks]</strong><br>(f) 求 (Find) (e) 中轉盤的平均得分。<strong>[1 mark]</strong><br>(g) 設 <span class=\"chem\">U</span> 為在 <span class=\"chem\">0 ≤ u ≤ n</span> 上具有常數密度 <span class=\"chem\">1/n</span> 的連續隨機變數。證明 (Show that) <span class=\"chem\">Var(U) = n^2/12</span>，並評論 (comment on) 當 <span class=\"chem\">n</span> 很大時的 <span class=\"chem\">Var(X)/Var(U)</span>。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: an investigation in three stages: small cases, then a general proof using the two sum formulae, then applications using the linear-transformation rules E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X).
        "解碼：一項分三個階段的探究：先計算細小的情況，然後利用兩條求和公式作一般證明，最後運用線性變換法則 E(aX + b) = aE(X) + b 及 Var(aX + b) = a²Var(X) 作應用。",
        // EN: For n = 3: E(X) = 2, E(X²) = (1 + 4 + 9)/3 = 14/3, so Var = 14/3 − 4.
        "當 n = 3 時：E(X) = 2，E(X²) = (1 + 4 + 9)/3 = 14/3，所以 Var = 14/3 − 4。",
        // EN: For (e), write the k-th label as 4k − 1: the score is a linear function of X.
        "在 (e) 中，把第 k 個標示寫成 4k − 1：得分是 X 的線性函數。",
        // EN: For (g), U is continuous: use integrals instead of sums.
        "在 (g) 中，U 是連續的：用積分代替求和。",
      ],
      // EN: <p><b>Decode:</b> compute → conjecture (given) → prove with sum formulae → apply with <span class="chem">aX + b</span> → compare with the continuous version.<br>(a) <span class="chem">n = 2</span>: <span class="chem">E = 3/2</span>, <span class="chem">E(X^2) = 5/2</span>, Var <span class="chem">= 5/2 - 9/4 = 1/4</span>. <span class="chem">n = 3</span>: <span class="chem">14/3 - 4 = 2/3</span>. <span class="chem">n = 4</span>: <span class="chem">E = 5/2</span>, <span class="chem">E(X^2) = 30/4</span>, Var <span class="chem">= 15/2 - 25/4 = 5/4</span>.<br>(b) <span class="chem">(4 - 1)/12 = 1/4</span>, <span class="chem">(9 - 1)/12 = 2/3</span>, <span class="chem">(16 - 1)/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (1/n)(n(n + 1)/2) = (n + 1)/2</span>; <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>. <span class="chem">Var(X) = (n + 1)(2n + 1)/6 - (n + 1)^2/4 = (n + 1)(4n + 2 - 3n - 3)/12 = (n + 1)(n - 1)/12 = (n^2 - 1)/12</span>.<br>(d) Score <span class="chem">5X</span>: <span class="chem">E = 5(n + 1)/2</span>, <span class="chem">Var = 25(n^2 - 1)/12</span>.<br>(e) The labels are <span class="chem">4k - 1</span> for <span class="chem">k = 1, …, n</span>, so <span class="chem">Y = 4X - 1</span> and <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 - 1 = 120 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(11 + 1)/2 - 1 = 23</span>.<br>(g) <span class="chem">E(U) = ∫_0^n u/n du = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. Then <span class="chem">Var(X)/Var(U) = (n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>
      solution: "<p><b>解碼：</b>計算 → 猜想（已給出）→ 用求和公式證明 → 以 <span class=\"chem\">aX + b</span> 應用 → 與連續版本比較。<br>(a) <span class=\"chem\">n = 2</span>：<span class=\"chem\">E = 3/2</span>，<span class=\"chem\">E(X^2) = 5/2</span>，Var <span class=\"chem\">= 5/2 - 9/4 = 1/4</span>。<span class=\"chem\">n = 3</span>：<span class=\"chem\">14/3 - 4 = 2/3</span>。<span class=\"chem\">n = 4</span>：<span class=\"chem\">E = 5/2</span>，<span class=\"chem\">E(X^2) = 30/4</span>，Var <span class=\"chem\">= 15/2 - 25/4 = 5/4</span>。<br>(b) <span class=\"chem\">(4 - 1)/12 = 1/4</span>，<span class=\"chem\">(9 - 1)/12 = 2/3</span>，<span class=\"chem\">(16 - 1)/12 = 5/4</span>。<br>(c) <span class=\"chem\">E(X) = (1/n)(n(n + 1)/2) = (n + 1)/2</span>；<span class=\"chem\">E(X^2) = (n + 1)(2n + 1)/6</span>。<span class=\"chem\">Var(X) = (n + 1)(2n + 1)/6 - (n + 1)^2/4 = (n + 1)(4n + 2 - 3n - 3)/12 = (n + 1)(n - 1)/12 = (n^2 - 1)/12</span>。<br>(d) 得分 <span class=\"chem\">5X</span>：<span class=\"chem\">E = 5(n + 1)/2</span>，<span class=\"chem\">Var = 25(n^2 - 1)/12</span>。<br>(e) 標示為 <span class=\"chem\">4k - 1</span>，其中 <span class=\"chem\">k = 1, …, n</span>，所以 <span class=\"chem\">Y = 4X - 1</span> 及 <span class=\"chem\">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 - 1 = 120 ⇒ n = 11</span>。<br>(f) <span class=\"chem\">E(Y) = 4(11 + 1)/2 - 1 = 23</span>。<br>(g) <span class=\"chem\">E(U) = ∫_0^n u/n du = n/2</span>，<span class=\"chem\">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>，所以 <span class=\"chem\">Var(U) = n^2/3 - n^2/4 = n^2/12</span>。於是 <span class=\"chem\">Var(X)/Var(U) = (n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>。</p>",
      // EN: <p>(a) <span class="chem">n = 2</span>: <span class="chem">1/4</span>; <span class="chem">n = 3</span>: <span class="chem">2/3</span>; <span class="chem">n = 4</span>: <span class="chem">5/4</span>.<br>(b) <span class="chem">3/12 = 1/4</span>, <span class="chem">8/12 = 2/3</span>, <span class="chem">15/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (n + 1)/2</span>, <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>, <span class="chem">Var(X) = (n + 1)[2(2n + 1) - 3(n + 1)]/12 = (n + 1)(n - 1)/12</span>.<br>(d) Score <span class="chem">= 5X</span>: mean <span class="chem">5(n + 1)/2</span>, variance <span class="chem">25(n^2 - 1)/12</span>.<br>(e) Score <span class="chem">Y = 4X - 1</span>, <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 = 121 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(6) - 1 = 23</span>.<br>(g) <span class="chem">E(U) = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. The ratio <span class="chem">(n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">n = 2</span>：<span class=\"chem\">1/4</span>；<span class=\"chem\">n = 3</span>：<span class=\"chem\">2/3</span>；<span class=\"chem\">n = 4</span>：<span class=\"chem\">5/4</span>。<br>(b) <span class=\"chem\">3/12 = 1/4</span>，<span class=\"chem\">8/12 = 2/3</span>，<span class=\"chem\">15/12 = 5/4</span>。<br>(c) <span class=\"chem\">E(X) = (n + 1)/2</span>，<span class=\"chem\">E(X^2) = (n + 1)(2n + 1)/6</span>，<span class=\"chem\">Var(X) = (n + 1)[2(2n + 1) - 3(n + 1)]/12 = (n + 1)(n - 1)/12</span>。<br>(d) 得分 <span class=\"chem\">= 5X</span>：平均值 <span class=\"chem\">5(n + 1)/2</span>，方差 <span class=\"chem\">25(n^2 - 1)/12</span>。<br>(e) 得分 <span class=\"chem\">Y = 4X - 1</span>，<span class=\"chem\">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 = 121 ⇒ n = 11</span>。<br>(f) <span class=\"chem\">E(Y) = 4(6) - 1 = 23</span>。<br>(g) <span class=\"chem\">E(U) = n/2</span>，<span class=\"chem\">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>，所以 <span class=\"chem\">Var(U) = n^2/3 - n^2/4 = n^2/12</span>。比值 <span class=\"chem\">(n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>。</p>",
      markscheme: [
        // EN: A1: (a) n = 2: Var = 1/4.
        "A1：(a) n = 2：Var = 1/4。",
        // EN: A1: (a) n = 3: Var = 2/3.
        "A1：(a) n = 3：Var = 2/3。",
        // EN: A1: (a) n = 4: Var = 5/4.
        "A1：(a) n = 4：Var = 5/4。",
        // EN: A1: (b) Substitutes n = 2, 3, 4 into (n² − 1)/12 and obtains 1/4, 2/3, 5/4.
        "A1：(b) 把 n = 2, 3, 4 代入 (n² − 1)/12，得 1/4、2/3、5/4。",
        // EN: M1: (c) Writes E(X) = (1/n)Σr and E(X²) = (1/n)Σr².
        "M1：(c) 寫出 E(X) = (1/n)Σr 及 E(X²) = (1/n)Σr²。",
        // EN: A1: (c) E(X) = (n + 1)/2.
        "A1：(c) E(X) = (n + 1)/2。",
        // EN: A1: (c) E(X²) = (n + 1)(2n + 1)/6.
        "A1：(c) E(X²) = (n + 1)(2n + 1)/6。",
        // EN: A1: (c) Simplifies Var = (n + 1)(2n + 1)/6 − (n + 1)²/4 to (n² − 1)/12 (AG).
        "A1：(c) 把 Var = (n + 1)(2n + 1)/6 − (n + 1)²/4 化簡為 (n² − 1)/12 (AG)。",
        // EN: A1: (d) Mean 5(n + 1)/2.
        "A1：(d) 平均值 5(n + 1)/2。",
        // EN: A1: (d) Variance 25(n² − 1)/12.
        "A1：(d) 方差 25(n² − 1)/12。",
        // EN: M1: (e) Recognises the score is Y = 4X − 1.
        "M1：(e) 辨識出得分為 Y = 4X − 1。",
        // EN: M1: (e) Uses Var(Y) = 16 Var(X): 16(n² − 1)/12 = 160.
        "M1：(e) 使用 Var(Y) = 16 Var(X)：16(n² − 1)/12 = 160。",
        // EN: A1: (e) n = 11.
        "A1：(e) n = 11。",
        // EN: A1: (f) E(Y) = 4E(X) − 1 = 23.
        "A1：(f) E(Y) = 4E(X) − 1 = 23。",
        // EN: M1: (g) Finds E(U²) = ∫_0^n u²/n du = n²/3 (with E(U) = n/2).
        "M1：(g) 求得 E(U²) = ∫_0^n u²/n du = n²/3（及 E(U) = n/2）。",
        // EN: A1: (g) Var(U) = n²/3 − n²/4 = n²/12 (AG).
        "A1：(g) Var(U) = n²/3 − n²/4 = n²/12 (AG)。",
        // EN: R1: (g) Var(X)/Var(U) = 1 − 1/n² → 1 as n → ∞: for large n the discrete and continuous uniform models have almost the same spread.
        "R1：(g) 當 n → ∞ 時 Var(X)/Var(U) = 1 − 1/n² → 1：當 n 很大時，離散與連續均勻模型的離散程度幾乎相同。",
      ],
    },

  }
});
