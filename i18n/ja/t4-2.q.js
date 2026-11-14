/* t4-2.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't4-2.q', {
  questions: {

    // ── t4-2-q001 · mcq · foundation · SL · SL 4.6 · 2 marks
    "t4-2-q001": {
      // EN: <p>Events <span class="chem">A</span> and <span class="chem">B</span> are <strong>mutually exclusive</strong> with <span class="chem">P(A) = 0.30</span> and <span class="chem">P(B) = 0.50</span>. What is <span class="chem">P(A ∪ B)</span>?</p>
      stem: "<p>事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は<strong>互いに排反</strong>であり、<span class=\"chem\">P(A) = 0.30</span>、<span class=\"chem\">P(B) = 0.50</span> である。<span class=\"chem\">P(A ∪ B)</span> はどれですか？</p>",
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
        "排反事象では <span class=\"chem\">P(A ∩ B) = 0</span> です。",
        // EN: Use <span class="chem">P(A ∪ B) = P(A) + P(B)</span>.
        "<span class=\"chem\">P(A ∪ B) = P(A) + P(B)</span> を使います。",
      ],
      // EN: <p>Because <span class="chem">A</span> and <span class="chem">B</span> are mutually exclusive, <span class="chem">P(A ∩ B) = 0</span>, so <span class="chem">P(A ∪ B) = P(A) + P(B) = 0.30 + 0.50 = 0.80</span>.</p>
      solution: "<p><span class=\"chem\">A</span> と <span class=\"chem\">B</span> は互いに排反なので <span class=\"chem\">P(A ∩ B) = 0</span> となり、<span class=\"chem\">P(A ∪ B) = P(A) + P(B) = 0.30 + 0.50 = 0.80</span> です。</p>",
      misconception: {
        // EN (option B): You subtracted 0.30 × 0.50 = 0.15, which is the rule for independent events, not mutually exclusive events!
        "1": "0.30 × 0.50 = 0.15 を引いてしまいましたが、それは排反事象ではなく独立な事象のルールです！",
        // EN (option C): You multiplied P(A) and P(B), which gives P(A ∩ B) for independent events; for mutually exclusive events, P(A ∩ B) = 0.
        "2": "P(A) と P(B) を掛けていますが、それは独立な事象での P(A ∩ B) です；排反事象では P(A ∩ B) = 0 です。",
        // EN (option D): You subtracted P(A) from P(B) instead of adding them.
        "3": "P(A) と P(B) を足すのではなく引いてしまいました。",
      },
    },

    // ── t4-2-q002 · numeric · foundation · SL · SL 4.6 · 3 marks
    "t4-2-q002": {
      // EN: <p>Events <span class="chem">A</span> and <span class="chem">B</span> are <strong>independent</strong> with <span class="chem">P(A) = 0.40</span> and <span class="chem">P(B) = 0.60</span>. Calculate <span class="chem">P(A ∪ B)</span>.</p>
      stem: "<p>事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は<strong>独立</strong>であり、<span class=\"chem\">P(A) = 0.40</span>、<span class=\"chem\">P(B) = 0.60</span> である。<span class=\"chem\">P(A ∪ B)</span> を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Since <span class="chem">A</span> and <span class="chem">B</span> are independent, <span class="chem">P(A ∩ B) = P(A)P(B) = 0.40 × 0.60</span>.
        "<span class=\"chem\">A</span> と <span class=\"chem\">B</span> は独立なので、<span class=\"chem\">P(A ∩ B) = P(A)P(B) = 0.40 × 0.60</span> です。",
        // EN: Substitute into <span class="chem">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>.
        "<span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span> に代入します。",
      ],
      // EN: <p>By independence, <span class="chem">P(A ∩ B) = 0.40 × 0.60 = 0.24</span> <b>[A1]</b>.<br>Then <span class="chem">P(A ∪ B) = 0.40 + 0.60 - 0.24 = 0.76</span> <b>[M1 A1]</b>.</p>
      solution: "<p>独立性より、<span class=\"chem\">P(A ∩ B) = 0.40 × 0.60 = 0.24</span> <b>[A1]</b>。<br>よって <span class=\"chem\">P(A ∪ B) = 0.40 + 0.60 - 0.24 = 0.76</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q003 · numeric · foundation · SL · SL 4.7 · 4 marks
    "t4-2-q003": {
      // EN: <p>A discrete random variable <span class="chem">X</span> takes the values <span class="chem">1, 2, 3, 4</span> with probabilities <span class="chem">0.1, k, 2k, 0.3</span> respectively. Find the expected value <span class="chem">E(X)</span>.</p>
      stem: "<p>離散型確率変数 <span class=\"chem\">X</span> が値 <span class=\"chem\">1, 2, 3, 4</span> をそれぞれ確率 <span class=\"chem\">0.1, k, 2k, 0.3</span> でとる。期待値 <span class=\"chem\">E(X)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">Σ P(X = x) = 1</span> to solve <span class="chem">0.1 + k + 2k + 0.3 = 1</span> for <span class="chem">k</span>.
        "<span class=\"chem\">Σ P(X = x) = 1</span> を使って <span class=\"chem\">0.1 + k + 2k + 0.3 = 1</span> を <span class=\"chem\">k</span> について解きます。",
        // EN: Then compute <span class="chem">E(X) = 1(0.1) + 2(k) + 3(2k) + 4(0.3)</span>.
        "次に <span class=\"chem\">E(X) = 1(0.1) + 2(k) + 3(2k) + 4(0.3)</span> を計算します。",
      ],
      // EN: <p>Since probabilities sum to <span class="chem">1</span>: <span class="chem">0.4 + 3k = 1 ⇒ k = 0.2</span> <b>[M1 A1]</b>.<br>Thus <span class="chem">E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9</span> <b>[M1 A1]</b>.</p>
      solution: "<p>確率の総和が <span class=\"chem\">1</span> なので <span class=\"chem\">0.4 + 3k = 1 ⇒ k = 0.2</span> <b>[M1 A1]</b>。<br>よって <span class=\"chem\">E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q004 · numeric · foundation · SL · SL 4.8 · 4 marks
    "t4-2-q004": {
      // EN: <p>A binomial random variable <span class="chem">X ~ B(n, p)</span> has mean <span class="chem">E(X) = 12</span> and variance <span class="chem">Var(X) = 3</span>. Find the number of trials <span class="chem">n</span>.</p>
      stem: "<p>二項確率変数 <span class=\"chem\">X ~ B(n, p)</span> の平均が <span class=\"chem\">E(X) = 12</span>、分散が <span class=\"chem\">Var(X) = 3</span> である。試行回数 <span class=\"chem\">n</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Divide <span class="chem">Var(X) = np(1 - p) = 3</span> by <span class="chem">E(X) = np = 12</span> to find <span class="chem">1 - p</span>.
        "<span class=\"chem\">Var(X) = np(1 - p) = 3</span> を <span class=\"chem\">E(X) = np = 12</span> で割って <span class=\"chem\">1 - p</span> を求めます。",
        // EN: Once you have <span class="chem">p = 0.75</span>, substitute into <span class="chem">np = 12</span> to solve for <span class="chem">n</span>.
        "<span class=\"chem\">p = 0.75</span> が求まったら、<span class=\"chem\">np = 12</span> に代入して <span class=\"chem\">n</span> を求めます。",
      ],
      // EN: <p><span class="chem">1 - p = Var(X) / E(X) = 3 / 12 = 0.25 ⇒ p = 0.75</span> <b>[M1 A1]</b>.<br>From <span class="chem">np = 12</span>, we get <span class="chem">n = 12 / 0.75 = 16</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">1 - p = Var(X) / E(X) = 3 / 12 = 0.25 ⇒ p = 0.75</span> <b>[M1 A1]</b>。<br><span class=\"chem\">np = 12</span> より <span class=\"chem\">n = 12 / 0.75 = 16</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q005 · mcq · exam · SL · SL 4.8 · 2 marks
    "t4-2-q005": {
      // EN: <p>A biased coin has probability <span class="chem">1/3</span> of landing on Heads on any toss. If the coin is tossed <span class="chem">4</span> times independently, what is the exact probability of obtaining <strong>exactly 2</strong> Heads?</p>
      stem: "<p>偏りのある硬貨を投げたとき、表が出る確率は毎回 <span class=\"chem\">1/3</span> である。この硬貨を独立に <span class=\"chem\">4</span> 回投げるとき、表が<strong>ちょうど 2 回</strong>出る正確な確率はどれですか？</p>",
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
        "二項分布の公式 <span class=\"chem\">P(X = 2) = 4C2 (1/3)^2 (2/3)^2</span> を使います。",
        // EN: Remember <span class="chem">4C2 = 6</span>.
        "<span class=\"chem\">4C2 = 6</span> を思い出しましょう。",
      ],
      // EN: <p>Let <span class="chem">X ~ B(4, 1/3)</span>. Then <span class="chem">P(X = 2) = 6 × (1/3)^2 × (2/3)^2 = 6 × (4/81) = 24/81 = 8/27</span>.</p>
      solution: "<p><span class=\"chem\">X ~ B(4, 1/3)</span> とおくと、<span class=\"chem\">P(X = 2) = 6 × (1/3)^2 × (2/3)^2 = 6 × (4/81) = 24/81 = 8/27</span> です。</p>",
      misconception: {
        // EN (option B): You computed (1/3)²(2/3)² = 4/81 for a single specific sequence (such as HHTT) and forgot to multiply by 4C2 = 6!
        "1": "特定の 1 通りの並び（HHTT など）の確率 (1/3)²(2/3)² = 4/81 だけを計算し、4C2 = 6 を掛け忘れています！",
        // EN (option C): You may have used 6 × (1/3)³ = 6/27 = 2/9, or multiplied 1/3 × 2/3 = 2/9 without the powers. The correct value is 4C2 (1/3)² (2/3)² = 6 × 4/81 = 24/81 = 8/27.
        "2": "6 × (1/3)³ = 6/27 = 2/9 を使ったか、累乗をつけずに 1/3 × 2/3 = 2/9 を掛けた可能性があります。正しい値は 4C2 (1/3)² (2/3)² = 6 × 4/81 = 24/81 = 8/27 です。",
        // EN (option D): 16/81 is (2/3)⁴, which is the probability of obtaining 0 Heads (all Tails).
        "3": "16/81 は (2/3)⁴ であり、表が 0 回（すべて裏）になる確率です。",
      },
    },

    // ── t4-2-q006 · numeric · exam · SL · SL 4.8 · 4 marks
    "t4-2-q006": {
      // EN: <p>A basketball player makes each free throw with constant probability <span class="chem">p = 0.30</span>, independently of other attempts. Find the minimum number of attempts <span class="chem">n</span> required so that the probability of making <strong>at least one</strong> free throw exceeds <span class="chem">0.95</span>.</p>
      stem: "<p>バスケットボールの選手が各フリースローを一定の確率 <span class=\"chem\">p = 0.30</span> で独立に成功させる。<strong>少なくとも 1 回</strong>成功する確率が <span class=\"chem\">0.95</span> を超えるために必要な最小の試行回数 <span class=\"chem\">n</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Set up the complement inequality: <span class="chem">1 - P(X = 0) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span>.
        "余事象の不等式を立てます：<span class=\"chem\">1 - P(X = 0) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span>。",
        // EN: Solve <span class="chem">n &gt; ln(0.05) / ln(0.70)</span> and round <strong>up</strong> to the next whole number.
        "<span class=\"chem\">n &gt; ln(0.05) / ln(0.70)</span> を解き、次の整数へ<strong>切り上げ</strong>ます。",
      ],
      // EN: <p><span class="chem">P(X ≥ 1) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span> <b>[M1 A1]</b>.<br><span class="chem">n &gt; ln(0.05) / ln(0.70) ≈ 8.399</span> <b>[M1]</b>.<br>Rounding up to the next integer gives <span class="chem">n = 9</span> attempts <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(X ≥ 1) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span> <b>[M1 A1]</b>。<br><span class=\"chem\">n &gt; ln(0.05) / ln(0.70) ≈ 8.399</span> <b>[M1]</b>。<br>次の整数に切り上げると <span class=\"chem\">n = 9</span> 回 <b>[A1]</b>。</p>",
    },

    // ── t4-2-q007 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q007": {
      // EN: <p>A random variable <span class="chem">X</span> is normally distributed with mean <span class="chem">μ = 100</span> and standard deviation <span class="chem">σ = 15</span>. Find the value of <span class="chem">k</span> such that <span class="chem">P(X &gt; k) = 0.20</span>, giving your answer to 3 s.f.</p>
      stem: "<p>確率変数 <span class=\"chem\">X</span> は平均 <span class=\"chem\">μ = 100</span>、標準偏差 <span class=\"chem\">σ = 15</span> の正規分布に従う。<span class=\"chem\">P(X &gt; k) = 0.20</span> となる <span class=\"chem\">k</span> の値を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Since the right-tail area is <span class="chem">P(X &gt; k) = 0.20</span>, the left-tail area is <span class="chem">P(X &lt; k) = 0.80</span>.
        "右側の面積が <span class=\"chem\">P(X &gt; k) = 0.20</span> なので、左側の面積は <span class=\"chem\">P(X &lt; k) = 0.80</span> です。",
        // EN: Use <span class="mono">invNorm(0.80, 100, 15)</span> or <span class="chem">k = 100 + 15 × invNorm(0.80)</span>.
        "<span class=\"mono\">invNorm(0.80, 100, 15)</span> または <span class=\"chem\">k = 100 + 15 × invNorm(0.80)</span> を使います。",
      ],
      // EN: <p>Left-tail probability is <span class="chem">P(X &lt; k) = 1 - 0.20 = 0.80</span> <b>[M1]</b>.<br>Using <span class="chem">z = invNorm(0.80) ≈ 0.84162</span>, <span class="chem">k = 100 + 15(0.84162) = 112.62 ≈ 113</span> (3 s.f.) <b>[M1 A1]</b>.</p>
      solution: "<p>左側の確率は <span class=\"chem\">P(X &lt; k) = 1 - 0.20 = 0.80</span> <b>[M1]</b>。<br><span class=\"chem\">z = invNorm(0.80) ≈ 0.84162</span> より、<span class=\"chem\">k = 100 + 15(0.84162) = 112.62 ≈ 113</span>（有効数字 3 桁） <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q008 · numeric · exam · SL · SL 4.12 · 4 marks
    "t4-2-q008": {
      // EN: <p>A normal random variable <span class="chem">X ~ N(μ, σ^2)</span> satisfies <span class="chem">P(X &lt; 26) = P(Z &lt; -1.5)</span> and <span class="chem">P(X &gt; 46) = P(Z &gt; 1.0)</span>, where <span class="chem">Z ~ N(0, 1)</span>. Find the mean <span class="chem">μ</span>.</p>
      stem: "<p>正規確率変数 <span class=\"chem\">X ~ N(μ, σ^2)</span> が <span class=\"chem\">P(X &lt; 26) = P(Z &lt; -1.5)</span> かつ <span class=\"chem\">P(X &gt; 46) = P(Z &gt; 1.0)</span> を満たす（ただし <span class=\"chem\">Z ~ N(0, 1)</span>）。平均 <span class=\"chem\">μ</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">(x - μ)/σ = z</span> to write two linear equations: <span class="chem">26 - μ = -1.5σ</span> and <span class="chem">46 - μ = 1.0σ</span>.
        "<span class=\"chem\">(x - μ)/σ = z</span> を使って 2 つの一次方程式を立てます：<span class=\"chem\">26 - μ = -1.5σ</span> と <span class=\"chem\">46 - μ = 1.0σ</span>。",
        // EN: Subtract the first equation from the second to find <span class="chem">σ</span>, then back-substitute for <span class="chem">μ</span>.
        "2 番目の式から 1 番目の式を引いて <span class=\"chem\">σ</span> を求め、代入して <span class=\"chem\">μ</span> を求めます。",
      ],
      // EN: <p>Standardizing gives <span class="chem">26 - μ = -1.5σ</span> and <span class="chem">46 - μ = 1.0σ</span> <b>[M1 A1]</b>.<br>Subtracting gives <span class="chem">20 = 2.5σ ⇒ σ = 8</span> <b>[A1]</b>.<br>Therefore <span class="chem">μ = 46 - 8 = 38</span> <b>[A1]</b>.</p>
      solution: "<p>標準化すると <span class=\"chem\">26 - μ = -1.5σ</span> と <span class=\"chem\">46 - μ = 1.0σ</span> <b>[M1 A1]</b>。<br>辺々引くと <span class=\"chem\">20 = 2.5σ ⇒ σ = 8</span> <b>[A1]</b>。<br>よって <span class=\"chem\">μ = 46 - 8 = 38</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q009 · multi · exam · SL · SL 4.6, 4.8, 4.9 · 3 marks
    "t4-2-q009": {
      // EN: <p>Select <strong>all</strong> statements that are always true for probability distributions and events.</p>
      stem: "<p>確率分布と事象について常に成り立つ記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: For any normal random variable <span class="chem">X ~ N(μ, σ^2)</span>, the mean, median, and mode are all equal to <span class="chem">μ</span>.
        "任意の正規確率変数 <span class=\"chem\">X ~ N(μ, σ^2)</span> について、平均・中央値・最頻値はすべて <span class=\"chem\">μ</span> に等しい。",
        // EN: If events <span class="chem">A</span> and <span class="chem">B</span> are independent and <span class="chem">P(B) &gt; 0</span>, then <span class="chem">P(A | B) = P(A)</span>.
        "事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が独立で <span class=\"chem\">P(B) &gt; 0</span> ならば、<span class=\"chem\">P(A | B) = P(A)</span> である。",
        // EN: For a binomial random variable <span class="chem">X ~ B(n, p)</span> with <span class="chem">0 &lt; p &lt; 1</span>, the variance <span class="chem">Var(X)</span> is strictly less than the mean <span class="chem">E(X)</span>.
        "<span class=\"chem\">0 &lt; p &lt; 1</span> の二項確率変数 <span class=\"chem\">X ~ B(n, p)</span> について、分散 <span class=\"chem\">Var(X)</span> は平均 <span class=\"chem\">E(X)</span> より真に小さい。",
        // EN: For any two events with <span class="chem">P(A) &gt; 0</span> and <span class="chem">P(B) &gt; 0</span>, if <span class="chem">A</span> and <span class="chem">B</span> are mutually exclusive then they are also independent.
        "<span class=\"chem\">P(A) &gt; 0</span> かつ <span class=\"chem\">P(B) &gt; 0</span> の 2 つの事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が排反ならば、独立でもある。",
      ],
      hints: [
        // EN: Check <span class="chem">Var(X) = np(1 - p)</span> vs <span class="chem">E(X) = np</span> for Binomial, and check whether mutually exclusive events can be independent.
        "二項分布で <span class=\"chem\">Var(X) = np(1 - p)</span> と <span class=\"chem\">E(X) = np</span> を比較し、排反事象が独立になり得るかを確認しましょう。",
      ],
      // EN: <p>Statements A, B, and C are always true (note that <span class="chem">Var(X) = np(1 - p) &lt; np = E(X)</span> since <span class="chem">0 &lt; 1 - p &lt; 1</span>). Statement D is false because mutually exclusive events with positive probabilities have <span class="chem">P(A ∩ B) = 0 ≠ P(A)P(B)</span>.</p>
      solution: "<p>A、B、C は常に成り立ちます（<span class=\"chem\">0 &lt; 1 - p &lt; 1</span> なので <span class=\"chem\">Var(X) = np(1 - p) &lt; np = E(X)</span>）。D は誤りです（正の確率をもつ排反事象では <span class=\"chem\">P(A ∩ B) = 0 ≠ P(A)P(B)</span>）。</p>",
      misconception: {
        // EN (option D): If P(A) > 0 and P(B) > 0, mutually exclusive events have P(A ∩ B) = 0 ≠ P(A)P(B), so they can NEVER be independent!
        "3": "P(A) > 0 かつ P(B) > 0 のとき、排反事象は P(A ∩ B) = 0 ≠ P(A)P(B) となるため、決して独立にはなりません！",
      },
    },

    // ── t4-2-q010 · order · exam · SL · SL 4.8, 4.9 · 3 marks
    "t4-2-q010": {
      // EN: <p>Apples have masses <span class="chem">M ~ N(160, 12^2)</span> g. Ten apples are packed at random into a bag. Order the steps required to find the probability that <strong>at least 3</strong> apples in the bag have a mass exceeding <span class="chem">175</span> g.</p>
      stem: "<p>リンゴの質量は <span class=\"chem\">M ~ N(160, 12^2)</span> g に従う。無作為に 10 個のリンゴを袋に詰めるとき、袋の中の<strong>少なくとも 3 個</strong>のリンゴの質量が <span class=\"chem\">175</span> g を超える確率を求める手順を正しい順序に並べ替えなさい。</p>",
      options: [
        // EN: Use <span class="mono">normalcdf(175, 1E99, 160, 12)</span> on <span class="chem">M ~ N(160, 12^2)</span> to find the single-apple probability <span class="chem">p = P(M &gt; 175) ≈ 0.10565</span>.
        "<span class=\"chem\">M ~ N(160, 12^2)</span> に対して <span class=\"mono\">normalcdf(175, 1E99, 160, 12)</span> を使い、1 個のリンゴの確率 <span class=\"chem\">p = P(M &gt; 175) ≈ 0.10565</span> を求める。",
        // EN: Define a new discrete random variable <span class="chem">Y ~ B(10, 0.10565)</span> representing the number of apples in the bag of <span class="chem">10</span> with mass over <span class="chem">175</span> g.
        "袋の中の <span class=\"chem\">10</span> 個のうち質量が <span class=\"chem\">175</span> g を超える個数を表す新しい離散型確率変数 <span class=\"chem\">Y ~ B(10, 0.10565)</span> を定義する。",
        // EN: Rewrite the discrete inequality <span class="chem">P(Y ≥ 3)</span> in cumulative form as <span class="chem">1 - P(Y ≤ 2)</span>.
        "離散不等式 <span class=\"chem\">P(Y ≥ 3)</span> を累積形式 <span class=\"chem\">1 - P(Y ≤ 2)</span> に書き換える。",
        // EN: Evaluate <span class="chem">1 - binomcdf(10, 0.10565, 2)</span> and round the final probability to 3 significant figures (<span class="chem">0.0803</span>).
        "<span class=\"chem\">1 - binomcdf(10, 0.10565, 2)</span> を計算し、最終的な確率を有効数字 3 桁（<span class=\"chem\">0.0803</span>）に丸める。",
      ],
      hints: [
        // EN: First find the probability <span class="chem">p</span> for 1 apple from the Normal distribution, then set up the Binomial model for 10 apples.
        "まず正規分布から 1 個のリンゴの確率 <span class=\"chem\">p</span> を求め、次に 10 個に対する二項モデルを立てます。",
      ],
      // EN: <p>In a Normal-to-Binomial chain, (1) find <span class="chem">p</span> for a single trial via <span class="mono">normalcdf</span> (keeping 5+ s.f.), (2) define <span class="chem">Y ~ B(10, p)</span>, (3) rewrite <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2)</span>, and (4) evaluate via <span class="mono">binomcdf</span>.</p>
      solution: "<p>正規分布→二項分布の連鎖では、(1) <span class=\"mono\">normalcdf</span> で 1 回の確率 <span class=\"chem\">p</span> を求め（有効数字 5 桁以上保持）、(2) <span class=\"chem\">Y ~ B(10, p)</span> を定義し、(3) <span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2)</span> と書き換え、(4) <span class=\"mono\">binomcdf</span> で計算します。</p>",
    },

    // ── t4-2-q011 · short · exam · SL · SL 4.8, 4.9, 4.11 · 7 marks
    "t4-2-q011": {
      // EN: <p>The masses of coffee bags produced by a roastery are modelled by a normal distribution <span class="chem">M ~ N(254, 5^2)</span> grams.<br>(a) Find the probability that a randomly selected bag has a mass less than <span class="chem">250</span> g. <strong>[2 marks]</strong><br>(b) Given that a bag has a mass less than <span class="chem">254</span> g, find the probability that its mass is between <span class="chem">250</span> g and <span class="chem">254</span> g. <strong>[2 marks]</strong><br>(c) Ten bags are chosen independently at random. Find the probability that <strong>at most 2</strong> of these bags have a mass less than <span class="chem">250</span> g. <strong>[3 marks]</strong></p>
      stem: "<p>焙煎所が生産するコーヒー豆の袋の質量は正規分布 <span class=\"chem\">M ~ N(254, 5^2)</span> グラムでモデル化されている。<br>(a) 無作為に選んだ 1 袋の質量が <span class=\"chem\">250</span> g 未満である確率を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 袋の質量が <span class=\"chem\">254</span> g 未満であることがわかっているとき、その質量が <span class=\"chem\">250</span> g と <span class=\"chem\">254</span> g の間にある確率を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) 独立に無作為に 10 袋を選ぶとき、これらのうち<strong>多くとも 2 袋</strong>の質量が <span class=\"chem\">250</span> g 未満である確率を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      // EN: <p>(a) Using GDC <span class="mono">normalcdf(-1E99, 250, 254, 5)</span> gives <span class="chem">p = 0.21186 ≈ 0.212</span>.<br>(b) Since <span class="chem">μ = 254</span>, <span class="chem">P(M &lt; 254) = 0.5</span>. Thus <span class="chem">P(M &gt; 250 | M &lt; 254) = P(250 &lt; M &lt; 254) / 0.5 = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class="chem">Y ~ B(10, 0.21186)</span>. Then <span class="chem">P(Y ≤ 2) = binomcdf(10, 0.21186, 2) ≈ 0.642</span>.</p>
      solution: "<p>(a) GDC の <span class=\"mono\">normalcdf(-1E99, 250, 254, 5)</span> より <span class=\"chem\">p = 0.21186 ≈ 0.212</span>。<br>(b) <span class=\"chem\">μ = 254</span> なので <span class=\"chem\">P(M &lt; 254) = 0.5</span>。よって <span class=\"chem\">P(M &gt; 250 | M &lt; 254) = P(250 &lt; M &lt; 254) / 0.5 = (0.5 - 0.21186) / 0.5 = 0.576</span>。<br>(c) <span class=\"chem\">Y ~ B(10, 0.21186)</span> とおくと、<span class=\"chem\">P(Y ≤ 2) = binomcdf(10, 0.21186, 2) ≈ 0.642</span>。</p>",
      // EN: <p>(a) <span class="chem">P(M &lt; 250) = 0.212</span> (more precisely <span class="chem">0.21186</span>).<br>(b) <span class="chem">P(250 &lt; M &lt; 254 | M &lt; 254) = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class="chem">Y ~ B(10, 0.21186)</span>; <span class="chem">P(Y ≤ 2) = 0.642</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(M &lt; 250) = 0.212</span>（より正確には <span class=\"chem\">0.21186</span>）。<br>(b) <span class=\"chem\">P(250 &lt; M &lt; 254 | M &lt; 254) = (0.5 - 0.21186) / 0.5 = 0.576</span>。<br>(c) <span class=\"chem\">Y ~ B(10, 0.21186)</span> とおくと、<span class=\"chem\">P(Y ≤ 2) = 0.642</span>。</p>",
      markscheme: [
        // EN: M1: Recognizes normalcdf(-1E99, 250, 254, 5) or z = (250 − 254)/5 = −0.8.
        "M1：normalcdf(-1E99, 250, 254, 5) または z = (250 − 254)/5 = −0.8 を使うことを認識する。",
        // EN: A1: Finds P(M < 250) = 0.212 (0.21186).
        "A1：P(M < 250) = 0.212（0.21186）を求める。",
        // EN: M1: Sets up conditional probability P(250 < M < 254) / P(M < 254) = 0.28814 / 0.5.
        "M1：条件付き確率 P(250 < M < 254) / P(M < 254) = 0.28814 / 0.5 を立てる。",
        // EN: A1: Evaluates conditional probability as 0.576.
        "A1：条件付き確率を 0.576 と求める。",
        // EN: M1: Recognizes Binomial model Y ~ B(10, 0.21186).
        "M1：二項モデル Y ~ B(10, 0.21186) を認識する。",
        // EN: M1: Uses binomcdf(10, 0.21186, 2) for P(Y ≤ 2).
        "M1：P(Y ≤ 2) に対して binomcdf(10, 0.21186, 2) を使う。",
        // EN: A1: Obtains 0.642 (accept 0.641 to 0.642).
        "A1：0.642 を得る（0.641〜0.642 を許容）。",
      ],
    },

    // ── t4-2-q012 · numeric · foundation · AHL · AHL 4.14 · 2 marks
    "t4-2-q012": {
      // EN: <p>A random variable <span class="chem">X</span> has expected value <span class="chem">E(X) = 4</span> and variance <span class="chem">Var(X) = 5</span>. Calculate <span class="chem">Var(3X - 7)</span>.</p>
      stem: "<p>確率変数 <span class=\"chem\">X</span> の期待値が <span class=\"chem\">E(X) = 4</span>、分散が <span class=\"chem\">Var(X) = 5</span> である。<span class=\"chem\">Var(3X - 7)</span> を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Recall the linear transformation rule for variance: <span class="chem">Var(aX + b) = a^2 Var(X)</span>.
        "分散の 1 次変換の公式 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span> を思い出しましょう。",
        // EN: Notice that subtracting <span class="chem">7</span> does not affect the variance.
        "<span class=\"chem\">7</span> を引いても分散には影響しないことに注意しましょう。",
      ],
      // EN: <p>Using <span class="chem">Var(aX + b) = a^2 Var(X)</span> with <span class="chem">a = 3, b = -7</span>:<br><span class="chem">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">a = 3, b = -7</span> として <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span> を使うと：<br><span class=\"chem\">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q013 · numeric · exam · AHL · AHL 4.14 · 3 marks
    "t4-2-q013": {
      // EN: <p>A discrete random variable <span class="chem">X</span> satisfies <span class="chem">E(X) = 3</span> and <span class="chem">E(X^2) = 13</span>. Find the standard deviation <span class="chem">σ</span> of <span class="chem">X</span>.</p>
      stem: "<p>離散型確率変数 <span class=\"chem\">X</span> が <span class=\"chem\">E(X) = 3</span> かつ <span class=\"chem\">E(X^2) = 13</span> を満たす。<span class=\"chem\">X</span> の標準偏差 <span class=\"chem\">σ</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: First compute <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.
        "まず <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span> を計算します。",
        // EN: Take the positive square root of <span class="chem">Var(X)</span> to get the standard deviation.
        "<span class=\"chem\">Var(X)</span> の正の平方根をとって標準偏差を求めます。",
      ],
      // EN: <p><span class="chem">Var(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 4</span> <b>[M1 A1]</b>.<br>Standard deviation <span class="chem">σ = √4 = 2</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 4</span> <b>[M1 A1]</b>。<br>標準偏差 <span class=\"chem\">σ = √4 = 2</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q014 · numeric · exam · AHL · AHL 4.13 · 5 marks
    "t4-2-q014": {
      // EN: <p>A courier company ships parcels via three hubs <span class="chem">B_1, B_2, B_3</span> in proportions <span class="chem">0.50, 0.30, 0.20</span> respectively. The probabilities that a parcel is delayed (<span class="chem">D</span>) when routed through <span class="chem">B_1, B_2, B_3</span> are <span class="chem">0.10, 0.20, 0.25</span> respectively. Given that a parcel arrives delayed, find the probability <span class="chem">P(B_3 | D)</span> that it was routed through hub <span class="chem">B_3</span>.</p>
      stem: "<p>宅配会社が荷物を 3 つの拠点 <span class=\"chem\">B_1, B_2, B_3</span> を経由してそれぞれ <span class=\"chem\">0.50, 0.30, 0.20</span> の割合で発送している。<span class=\"chem\">B_1, B_2, B_3</span> を経由した荷物が遅延（<span class=\"chem\">D</span>）する確率はそれぞれ <span class=\"chem\">0.10, 0.20, 0.25</span> である。届いた荷物が遅延していたとき、それが拠点 <span class=\"chem\">B_3</span> を経由した確率 <span class=\"chem\">P(B_3 | D)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the law of total probability to find <span class="chem">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25)</span>.
        "全確率の法則を使って <span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25)</span> を求めます。",
        // EN: By Bayes' theorem, divide <span class="chem">P(B_3 ∩ D) = 0.20(0.25) = 0.05</span> by <span class="chem">P(D) = 0.16</span>.
        "ベイズの定理より、<span class=\"chem\">P(B_3 ∩ D) = 0.20(0.25) = 0.05</span> を <span class=\"chem\">P(D) = 0.16</span> で割ります。",
      ],
      // EN: <p>Total probability of delay:<br><span class="chem">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25) = 0.05 + 0.06 + 0.05 = 0.16</span> <b>[M1 A1]</b>.<br>By Bayes' theorem:<br><span class="chem">P(B_3 | D) = 0.05 / 0.16 = 5/16 = 0.3125</span> (or <span class="chem">0.313</span> to 3 s.f.) <b>[M1 A2]</b>.</p>
      solution: "<p>遅延の全確率：<br><span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25) = 0.05 + 0.06 + 0.05 = 0.16</span> <b>[M1 A1]</b>。<br>ベイズの定理より：<br><span class=\"chem\">P(B_3 | D) = 0.05 / 0.16 = 5/16 = 0.3125</span> （有効数字 3 桁で <span class=\"chem\">0.313</span>） <b>[M1 A2]</b>。</p>",
      // EN: 5/16 (or 0.313)
      answerDisplay: "5/16（または 0.313）",
    },

    // ── t4-2-q015 · mcq · exam · AHL · AHL 4.14 · 2 marks
    "t4-2-q015": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = (3/14)(x^2 + 1)</span> for <span class="chem">0 ≤ x ≤ 2</span>, and <span class="chem">f(x) = 0</span> otherwise. What is the <strong>mode</strong> of <span class="chem">X</span>?</p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数が <span class=\"chem\">0 ≤ x ≤ 2</span> で <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<span class=\"chem\">X</span> の<strong>最頻値</strong>はどれですか？</p>",
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
        "最頻値は <span class=\"chem\">f(x)</span> が <span class=\"chem\">x ∈ [0, 2]</span> 上で最大値をとる x の値です。",
        // EN: Check whether <span class="chem">f(x) = (3/14)(x^2 + 1)</span> is increasing or decreasing on <span class="chem">[0, 2]</span>.
        "<span class=\"chem\">[0, 2]</span> 上で <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span> が増加しているか減少しているかを確認しましょう。",
      ],
      // EN: <p>On <span class="chem">[0, 2]</span>, <span class="chem">f'(x) = (3/7)x ≥ 0</span>, so <span class="chem">f(x)</span> is strictly increasing from <span class="chem">f(0) = 3/14</span> to <span class="chem">f(2) = 15/14</span>. Thus <span class="chem">f(x)</span> attains its global maximum at the right endpoint <span class="chem">x = 2</span>.</p>
      solution: "<p><span class=\"chem\">[0, 2]</span> 上で <span class=\"chem\">f'(x) = (3/7)x ≥ 0</span> なので、<span class=\"chem\">f(x)</span> は <span class=\"chem\">f(0) = 3/14</span> から <span class=\"chem\">f(2) = 15/14</span> まで単調に増加します。よって <span class=\"chem\">f(x)</span> は右端の <span class=\"chem\">x = 2</span> で最大値をとります。</p>",
      misconception: {
        // EN (option B): Setting f'(x) = (6/14)x = 0 gives x = 0, which is the global MINIMUM of f(x) on [0, 2], not the maximum!
        "1": "f'(x) = (6/14)x = 0 とおくと x = 0 が得られますが、それは [0, 2] 上での最大値ではなく最小値です！",
        // EN (option C): 15/14 is the maximum height f(2), not the x-coordinate where that maximum occurs.
        "2": "15/14 は最大の高さ f(2) であり、最大値をとる x 座標ではありません。",
        // EN (option D): x = 1 is the midpoint of [0, 2], but f(x) is not symmetric—it increases strictly all the way to x = 2.
        "3": "x = 1 は [0, 2] の中点ですが、f(x) は対称ではなく、x = 2 まで単調に増加し続けます。",
      },
    },

    // ── t4-2-q016 · numeric · exam · AHL · AHL 4.14 · 4 marks
    "t4-2-q016": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = x / 8</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>exact</strong> value of the <strong>median</strong> <span class="chem">m</span> of <span class="chem">X</span> (an exact radical such as <span class="mono">sqrt(5)/2</span> can be typed directly).</p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数が <span class=\"chem\">0 ≤ x ≤ 4</span> で <span class=\"chem\">f(x) = x / 8</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<span class=\"chem\">X</span> の<strong>中央値</strong> <span class=\"chem\">m</span> の<strong>正確な</strong>値を求めなさい (Find)（<span class=\"mono\">sqrt(5)/2</span> のような正確な根号はそのまま入力できます）。</p>",
      hints: [
        // EN: The median <span class="chem">m</span> satisfies <span class="chem">∫_0^m (x / 8) dx = 0.5</span>.
        "中央値 <span class=\"chem\">m</span> は <span class=\"chem\">∫_0^m (x / 8) dx = 0.5</span> を満たします。",
        // EN: Solve <span class="chem">m^2 / 16 = 0.5</span> for <span class="chem">m &gt; 0</span>.
        "<span class=\"chem\">m^2 / 16 = 0.5</span> を <span class=\"chem\">m &gt; 0</span> について解きます。",
      ],
      // EN: <p>Setting the cumulative integral equal to <span class="chem">0.5</span>:<br><span class="chem">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class="chem">m^2 = 8 ⇒ m = √8 = 2√2</span> (since <span class="chem">0 ≤ m ≤ 4</span>) <b>[M1 A1]</b>.</p>
      solution: "<p>累積積分を <span class=\"chem\">0.5</span> とおくと：<br><span class=\"chem\">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>。<br><span class=\"chem\">m^2 = 8 ⇒ m = √8 = 2√2</span>（<span class=\"chem\">0 ≤ m ≤ 4</span> より） <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q017 · numeric · challenge · AHL · AHL 4.14 · 5 marks
    "t4-2-q017": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = 3x^2</span> for <span class="chem">0 ≤ x ≤ 1</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>exact</strong> value of <span class="chem">Var(X)</span> (an exact fraction such as <span class="mono">5/48</span> can be typed directly).</p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数が <span class=\"chem\">0 ≤ x ≤ 1</span> で <span class=\"chem\">f(x) = 3x^2</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<span class=\"chem\">Var(X)</span> の<strong>正確な</strong>値を求めなさい (Find)（<span class=\"mono\">5/48</span> のような正確な分数はそのまま入力できます）。</p>",
      hints: [
        // EN: Decode: for a continuous random variable, <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>, and each expectation is an integral over the domain <span class="chem">0 ≤ x ≤ 1</span>: <span class="chem">E(X) = ∫ x f(x) dx</span> and <span class="chem">E(X^2) = ∫ x^2 f(x) dx</span>. "Exact" means you keep fractions throughout.
        "解読：連続型確率変数では <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span> で、それぞれの期待値は定義域 <span class=\"chem\">0 ≤ x ≤ 1</span> 上の積分です：<span class=\"chem\">E(X) = ∫ x f(x) dx</span>、<span class=\"chem\">E(X^2) = ∫ x^2 f(x) dx</span>。「正確な」(exact) 値なので、最後まで分数のまま計算しましょう。",
        // EN: First compute <span class="chem">E(X) = ∫_0^1 x(3x^2) dx = ∫_0^1 3x^3 dx = 3/4</span>.
        "まず <span class=\"chem\">E(X) = ∫_0^1 x(3x^2) dx = ∫_0^1 3x^3 dx = 3/4</span> を計算します。",
        // EN: Next compute <span class="chem">E(X^2) = ∫_0^1 x^2(3x^2) dx = ∫_0^1 3x^4 dx = 3/5</span>, and use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.
        "次に <span class=\"chem\">E(X^2) = ∫_0^1 x^2(3x^2) dx = ∫_0^1 3x^4 dx = 3/5</span> を計算し、<span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span> を使います。",
      ],
      // EN: <p><span class="chem">E(X) = ∫_0^1 3x^3 dx = [3x^4 / 4]_0^1 = 3/4</span> <b>[M1 A1]</b>.<br><span class="chem">E(X^2) = ∫_0^1 3x^4 dx = [3x^5 / 5]_0^1 = 3/5</span> <b>[A1]</b>.<br><span class="chem">Var(X) = 3/5 - (3/4)^2 = 3/5 - 9/16 = 3/80 = 0.0375</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = ∫_0^1 3x^3 dx = [3x^4 / 4]_0^1 = 3/4</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(X^2) = ∫_0^1 3x^4 dx = [3x^5 / 5]_0^1 = 3/5</span> <b>[A1]</b>。<br><span class=\"chem\">Var(X) = 3/5 - (3/4)^2 = 3/5 - 9/16 = 3/80 = 0.0375</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q018 · short · challenge · AHL · AHL 4.14, SL 4.11 · 7 marks
    "t4-2-q018": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = kx(3 - x)</span> for <span class="chem">0 ≤ x ≤ 3</span>, and <span class="chem">f(x) = 0</span> otherwise.<br>(a) Show that <span class="chem">k = 2/9</span>. <strong>[3 marks]</strong><br>(b) Find the exact conditional probability <span class="chem">P(X &gt; 1 | X &lt; 2)</span>. <strong>[4 marks]</strong></p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数が <span class=\"chem\">0 ≤ x ≤ 3</span> で <span class=\"chem\">f(x) = kx(3 - x)</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<br>(a) <span class=\"chem\">k = 2/9</span> であることを示しなさい (Show that)。 <strong>[3 marks]</strong><br>(b) 条件付き確率 <span class=\"chem\">P(X &gt; 1 | X &lt; 2)</span> の正確な値を求めなさい (Find)。 <strong>[4 marks]</strong></p>",
      // EN: <p>(a) Since <span class="chem">∫_0^3 f(x) dx = 1</span>, we have <span class="chem">k [3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) By definition of conditional probability, <span class="chem">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.<br>Now <span class="chem">P(X &lt; 2) = (2/9)[3x^2/2 - x^3/3]_0^2 = (2/9)(6 - 8/3) = 20/27</span>, and <span class="chem">P(X &lt; 1) = (2/9)(3/2 - 1/3) = 7/27</span>, so <span class="chem">P(1 &lt; X &lt; 2) = 20/27 - 7/27 = 13/27</span>.<br>Dividing gives <span class="chem">P(X &gt; 1 | X &lt; 2) = (13/27) / (20/27) = 13/20 = 0.65</span>.</p>
      solution: "<p>(a) <span class=\"chem\">∫_0^3 f(x) dx = 1</span> なので、<span class=\"chem\">k [3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>。<br>(b) 条件付き確率の定義より、<span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>。<br><span class=\"chem\">P(X &lt; 2) = (2/9)[3x^2/2 - x^3/3]_0^2 = (2/9)(6 - 8/3) = 20/27</span>、かつ <span class=\"chem\">P(X &lt; 1) = (2/9)(3/2 - 1/3) = 7/27</span> なので、<span class=\"chem\">P(1 &lt; X &lt; 2) = 20/27 - 7/27 = 13/27</span>。<br>割り算すると <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = (13/27) / (20/27) = 13/20 = 0.65</span>。</p>",
      // EN: <p>(a) <span class="chem">k ∫_0^3 (3x - x^2) dx = k[3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) <span class="chem">P(1 &lt; X &lt; 2) = 13/27</span> and <span class="chem">P(X &lt; 2) = 20/27</span>, so <span class="chem">P(X &gt; 1 | X &lt; 2) = 13/20 = 0.65</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k ∫_0^3 (3x - x^2) dx = k[3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>。<br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2) = 13/27</span> かつ <span class=\"chem\">P(X &lt; 2) = 20/27</span> なので、<span class=\"chem\">P(X &gt; 1 | X &lt; 2) = 13/20 = 0.65</span>。</p>",
      markscheme: [
        // EN: M1: Sets up the total probability integral k ∫_0^3 (3x − x²) dx = 1.
        "M1：全確率の積分 k ∫_0^3 (3x − x²) dx = 1 を立てる。",
        // EN: A1: Integrates correctly to k [3x²/2 − x³/3]_0^3.
        "A1：正しく積分して k [3x²/2 − x³/3]_0^3 を得る。",
        // EN: A1: Evaluates k(27/2 − 9) = (9/2)k = 1, so k = 2/9 (AG).
        "A1：k(27/2 − 9) = (9/2)k = 1 を計算し、k = 2/9 (AG)。",
        // EN: M1: Rewrites P(X > 1 | X < 2) as P(1 < X < 2) / P(X < 2).
        "M1：P(X > 1 | X < 2) を P(1 < X < 2) / P(X < 2) と書き換える。",
        // EN: A1: Evaluates P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27.
        "A1：P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27 を計算する。",
        // EN: A1: Evaluates P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27.
        "A1：P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27 を計算する。",
        // EN: A1: Simplifies the ratio to 13/20 (or 0.65).
        "A1：比を簡単にして 13/20（または 0.65）を得る。",
      ],
      hints: [
        // EN: Decode: (a) is "Show that", so start from the property of every pdf, <span class="chem">∫_0^3 f(x) dx = 1</span>, and work forwards to <span class="chem">k = 2/9</span> without using it. In (b) the condition <span class="chem">X &lt; 2</span> becomes the denominator: <span class="chem">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.
        "解読：(a) は「示しなさい」(Show that) なので、すべての確率密度関数が満たす性質 <span class=\"chem\">∫_0^3 f(x) dx = 1</span> から出発し、<span class=\"chem\">k = 2/9</span> を使わずにそこまで導きます。(b) では条件 <span class=\"chem\">X &lt; 2</span> が分母になります：<span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>。",
        // EN: Expand <span class="chem">kx(3 - x) = k(3x - x^2)</span> before integrating; an antiderivative is <span class="chem">k(3x^2/2 - x^3/3)</span>.
        "積分する前に <span class=\"chem\">kx(3 - x) = k(3x - x^2)</span> と展開しましょう。原始関数の 1 つは <span class=\"chem\">k(3x^2/2 - x^3/3)</span> です。",
        // EN: In (b), evaluate <span class="chem">(2/9)[3x^2/2 - x^3/3]</span> from 1 to 2 for the numerator and from 0 to 2 for the denominator. The factor <span class="chem">2/9</span> cancels in the ratio.
        "(b) では <span class=\"chem\">(2/9)[3x^2/2 - x^3/3]</span> を、分子は 1 から 2 まで、分母は 0 から 2 まで計算します。係数 <span class=\"chem\">2/9</span> は比をとると約分されます。",
      ],
    },

    // ── t4-2-q019 · numeric · foundation · SL · SL 4.5 · 2 marks
    "t4-2-q019": {
      // EN: <p>The probability that a seed germinates is <span class="chem">0.85</span>. A gardener plants <span class="chem">240</span> of these seeds. Find the expected number of seeds that do <strong>not</strong> germinate.</p>
      stem: "<p>ある種子が発芽する確率は <span class=\"chem\">0.85</span> である。庭師がこの種子を <span class=\"chem\">240</span> 個まく。発芽<strong>しない</strong>種子の個数の期待値を求めなさい (Find)。</p>",
      hints: [
        // EN: First find the probability that one seed does not germinate: <span class="chem">1 - 0.85</span>.
        "まず 1 個の種子が発芽しない確率 <span class=\"chem\">1 - 0.85</span> を求めます。",
        // EN: The expected number of occurrences is <span class="chem">n · P(A)</span>.
        "期待される発生回数は <span class=\"chem\">n · P(A)</span> です。",
      ],
      // EN: <p><span class="chem">P(not germinate) = 1 - 0.85 = 0.15</span> <b>[M1]</b>.<br>Expected number <span class="chem">= 240 × 0.15 = 36</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(not germinate) = 1 - 0.85 = 0.15</span> <b>[M1]</b>。<br>期待される個数 <span class=\"chem\">= 240 × 0.15 = 36</span> <b>[A1]</b>。</p>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't4-2.q', {
  questions: {

    // ── t4-2-q020 · numeric · foundation · SL · SL 4.6 · 2 marks
    "t4-2-q020": {
      // EN: <p>The table shows the main after-school activity of <span class="chem">120</span> students in Years 11 and 12.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Robotics</th><th scope="col">Drama</th><th scope="col">None</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Year 11</th><td class="num">18</td><td class="num">12</td><td class="num">30</td><td class="num">60</td></tr><tr><th scope="row">Year 12</th><td class="num">14</td><td class="num">21</td><td class="num">25</td><td class="num">60</td></tr></tbody></table></div><p>A student is chosen at random. Find the probability that the student does Drama, given that the student is in Year 12.</p>
      stem: "<p>次の表は、Years 11 and 12 の生徒 <span class=\"chem\">120</span> 人の主な放課後の活動を示している。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">ロボット (Robotics)</th><th scope=\"col\">演劇 (Drama)</th><th scope=\"col\">なし (None)</th><th scope=\"col\">合計</th></tr></thead><tbody><tr><th scope=\"row\">Year 11</th><td class=\"num\">18</td><td class=\"num\">12</td><td class=\"num\">30</td><td class=\"num\">60</td></tr><tr><th scope=\"row\">Year 12</th><td class=\"num\">14</td><td class=\"num\">21</td><td class=\"num\">25</td><td class=\"num\">60</td></tr></tbody></table></div><p>生徒を 1 人無作為に選ぶ。その生徒が Year 12 であるとき、その生徒が演劇をしている確率を求めなさい (Find)。</p>",
      hints: [
        // EN: The word "given" restricts you to one row of the table: only the Year 12 students count.
        "「〜であるとき」(given) という言葉で、表の 1 行だけに限定されます：数えるのは Year 12 の生徒だけです。",
        // EN: Divide the number of Year 12 Drama students by the total number of Year 12 students.
        "Year 12 で演劇をしている生徒の人数を、Year 12 の生徒の総数で割ります。",
      ],
      // EN: <p>Restrict the sample space to the <span class="chem">60</span> Year 12 students <b>[M1]</b>.<br><span class="chem">P(Drama | Year 12) = 21/60 = 7/20 = 0.35</span> <b>[A1]</b>.</p>
      solution: "<p>標本空間を Year 12 の生徒 <span class=\"chem\">60</span> 人に限定します <b>[M1]</b>。<br><span class=\"chem\">P(Drama | Year 12) = 21/60 = 7/20 = 0.35</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q021 · short · exam · SL · SL 4.6, 4.11 · 6 marks
    "t4-2-q021": {
      // EN: <p>A town council surveys <span class="chem">200</span> adults about whether they live within <span class="chem">5</span> km of their workplace (<span class="chem">W</span>) and whether they cycle to work (<span class="chem">C</span>).</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"></th><th scope="col">Cycles (C)</th><th scope="col">Does not cycle (C′)</th><th scope="col">Total</th></tr></thead><tbody><tr><th scope="row">Within 5 km (W)</th><td class="num">48</td><td class="num">72</td><td class="num">120</td></tr><tr><th scope="row">Further than 5 km (W′)</th><td class="num">32</td><td class="num">48</td><td class="num">80</td></tr></tbody></table></div><p>One adult is chosen at random.<br>(a) Write down <span class="chem">P(C)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(C | W)</span> and <span class="chem">P(C | W′)</span>. <strong>[2 marks]</strong><br>(c) Hence determine whether the events <span class="chem">C</span> and <span class="chem">W</span> are independent. Justify your answer. <strong>[2 marks]</strong><br>(d) Find <span class="chem">P(W | C)</span>. <strong>[1 mark]</strong></p>
      stem: "<p>ある町議会が成人 <span class=\"chem\">200</span> 人を対象に、職場から <span class=\"chem\">5</span> km 以内に住んでいるか（<span class=\"chem\">W</span>）、自転車で通勤しているか（<span class=\"chem\">C</span>）を調査した。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"></th><th scope=\"col\">自転車通勤 (C)</th><th scope=\"col\">自転車通勤でない (C′)</th><th scope=\"col\">合計</th></tr></thead><tbody><tr><th scope=\"row\">5 km 以内 (W)</th><td class=\"num\">48</td><td class=\"num\">72</td><td class=\"num\">120</td></tr><tr><th scope=\"row\">5 km より遠い (W′)</th><td class=\"num\">32</td><td class=\"num\">48</td><td class=\"num\">80</td></tr></tbody></table></div><p>成人を 1 人無作為に選ぶ。<br>(a) <span class=\"chem\">P(C)</span> を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">P(C | W)</span> と <span class=\"chem\">P(C | W′)</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) これを用いて (Hence)、事象 <span class=\"chem\">C</span> と <span class=\"chem\">W</span> が独立かどうかを判定しなさい (determine)。理由も述べなさい (Justify)。 <strong>[2 marks]</strong><br>(d) <span class=\"chem\">P(W | C)</span> を求めなさい (Find)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: "given W" means use only the W row; "given W′" means use only the W′ row. Independence means the condition makes no difference to the probability.
        "解読：「W であるとき」は W の行だけを使うこと、「W′ であるとき」は W′ の行だけを使うことを意味します。独立とは、条件が確率にまったく影響しないことです。",
        // EN: In (b), divide the cyclists in each row by that row total.
        "(b) では、各行の自転車通勤者の人数をその行の合計で割ります。",
        // EN: For (c), use the test P(A | B) = P(A | B′) = P(A) for independent events. A conclusion with no comparison earns no marks.
        "(c) では、独立な事象の判定 P(A | B) = P(A | B′) = P(A) を使います。比較のない結論には得点がありません。",
      ],
      // EN: <p>(a) <span class="chem">80</span> of the <span class="chem">200</span> adults cycle, so <span class="chem">P(C) = 0.4</span>.<br>(b) Within the <span class="chem">W</span> row: <span class="chem">P(C | W) = 48/120 = 0.4</span>. Within the <span class="chem">W′</span> row: <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) Since <span class="chem">P(C | W) = P(C | W′) = P(C)</span>, the probability of cycling is the same whether or not the event <span class="chem">W</span> occurs, so <span class="chem">C</span> and <span class="chem">W</span> are independent. (Check: <span class="chem">P(C ∩ W) = 48/200 = 0.24 = 0.4 × 0.6 = P(C)P(W)</span>.)<br>(d) Restrict to the <span class="chem">80</span> cyclists: <span class="chem">P(W | C) = 48/80 = 0.6</span> (which equals <span class="chem">P(W)</span>, as independence predicts).</p>
      solution: "<p>(a) <span class=\"chem\">200</span> 人のうち <span class=\"chem\">80</span> 人が自転車通勤なので、<span class=\"chem\">P(C) = 0.4</span> です。<br>(b) <span class=\"chem\">W</span> の行では <span class=\"chem\">P(C | W) = 48/120 = 0.4</span>。<span class=\"chem\">W′</span> の行では <span class=\"chem\">P(C | W′) = 32/80 = 0.4</span>。<br>(c) <span class=\"chem\">P(C | W) = P(C | W′) = P(C)</span> なので、事象 <span class=\"chem\">W</span> が起こるかどうかにかかわらず自転車通勤の確率は同じです。よって <span class=\"chem\">C</span> と <span class=\"chem\">W</span> は独立です。（確認：<span class=\"chem\">P(C ∩ W) = 48/200 = 0.24 = 0.4 × 0.6 = P(C)P(W)</span>。）<br>(d) 自転車通勤者 <span class=\"chem\">80</span> 人に限定すると <span class=\"chem\">P(W | C) = 48/80 = 0.6</span> です（独立性から予想されるとおり <span class=\"chem\">P(W)</span> に等しくなります）。</p>",
      // EN: <p>(a) <span class="chem">P(C) = 80/200 = 0.4</span>.<br>(b) <span class="chem">P(C | W) = 48/120 = 0.4</span> and <span class="chem">P(C | W′) = 32/80 = 0.4</span>.<br>(c) <span class="chem">P(C | W) = P(C | W′) = P(C) = 0.4</span>, so knowing whether someone lives within 5 km does not change the probability that they cycle: <span class="chem">C</span> and <span class="chem">W</span> are independent.<br>(d) <span class="chem">P(W | C) = 48/80 = 0.6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(C) = 80/200 = 0.4</span>。<br>(b) <span class=\"chem\">P(C | W) = 48/120 = 0.4</span>、<span class=\"chem\">P(C | W′) = 32/80 = 0.4</span>。<br>(c) <span class=\"chem\">P(C | W) = P(C | W′) = P(C) = 0.4</span> なので、5 km 以内に住んでいるかどうかを知っても自転車通勤の確率は変わらない：<span class=\"chem\">C</span> と <span class=\"chem\">W</span> は独立である。<br>(d) <span class=\"chem\">P(W | C) = 48/80 = 0.6</span>。</p>",
      markscheme: [
        // EN: A1: (a) P(C) = 80/200 = 0.4.
        "A1：(a) P(C) = 80/200 = 0.4。",
        // EN: A1: (b) P(C | W) = 48/120 = 0.4.
        "A1：(b) P(C | W) = 48/120 = 0.4。",
        // EN: A1: (b) P(C | W′) = 32/80 = 0.4.
        "A1：(b) P(C | W′) = 32/80 = 0.4。",
        // EN: R1: (c) Compares: P(C | W) = P(C | W′) (= P(C)), or equivalently P(C ∩ W) = 0.24 = P(C)P(W).
        "R1：(c) 比較する：P(C | W) = P(C | W′)（= P(C)）、または同値な P(C ∩ W) = 0.24 = P(C)P(W)。",
        // EN: A1: (c) Concludes that C and W are independent.
        "A1：(c) C と W は独立であると結論づける。",
        // EN: A1: (d) P(W | C) = 48/80 = 0.6.
        "A1：(d) P(W | C) = 48/80 = 0.6。",
      ],
    },

    // ── t4-2-q022 · numeric · exam · SL · SL 4.6, 4.7 · 5 marks
    "t4-2-q022": {
      // EN: <p>At a charity fair, a player pays <span class="chem">$k</span> to roll two fair six-sided dice. If both dice show <span class="chem">6</span>, the player receives <span class="chem">$36</span>. If the dice show any other double (both dice the same), the player receives <span class="chem">$9</span>. Otherwise the player receives nothing. Find the value of <span class="chem">k</span> for which the game is fair. Give your answer in dollars to 2 decimal places.</p>
      stem: "<p>チャリティーフェアで、プレイヤーは <span class=\"chem\">$k</span> を払って公正な 6 面のさいころを 2 個投げる。2 個とも <span class=\"chem\">6</span> の目が出たら、プレイヤーは <span class=\"chem\">$36</span> を受け取る。それ以外のゾロ目（2 個が同じ目）が出たら、<span class=\"chem\">$9</span> を受け取る。それ以外の場合は何も受け取らない。このゲームが公平になる <span class=\"chem\">k</span> の値を求めなさい (Find)。答えはドル単位で小数第 2 位まで求めること。</p>",
      hints: [
        // EN: Decode: a game is fair when the player's expected gain is 0, so the price k must equal the expected amount the player receives.
        "解読：プレイヤーの利得の期待値が 0 のときゲームは公平なので、価格 k はプレイヤーが受け取る金額の期待値に等しくなければなりません。",
        // EN: Use a sample-space diagram of the 36 equally likely outcomes: one outcome is (6, 6) and five outcomes are the other doubles.
        "同様に確からしい 36 通りの結果の標本空間の図を使います：(6, 6) が 1 通り、それ以外のゾロ目が 5 通りです。",
        // EN: Expected amount received = 36 × (1/36) + 9 × (5/36).
        "受け取る金額の期待値 = 36 × (1/36) + 9 × (5/36)。",
      ],
      // EN: <p><b>Decode:</b> "fair" means <span class="chem">E(gain) = 0</span>, so <span class="chem">k = E(amount received)</span>.<br>The sample space has <span class="chem">36</span> equally likely outcomes. <span class="chem">P(6, 6) = 1/36</span> <b>[A1]</b> and <span class="chem">P(other double) = 5/36</span> <b>[A1]</b>.<br><span class="chem">E(received) = 36(1/36) + 9(5/36) + 0(30/36) = 1 + 45/36 = 81/36 = 2.25</span> <b>[M1 A1]</b>.<br>For a fair game <span class="chem">E(received) - k = 0</span>, so <span class="chem">k = $2.25</span> <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b>「公平」とは <span class=\"chem\">E(gain) = 0</span> のことなので、<span class=\"chem\">k = E(amount received)</span> です。<br>標本空間は同様に確からしい <span class=\"chem\">36</span> 通りの結果からなります。<span class=\"chem\">P(6, 6) = 1/36</span> <b>[A1]</b>、<span class=\"chem\">P(other double) = 5/36</span> <b>[A1]</b>。<br><span class=\"chem\">E(received) = 36(1/36) + 9(5/36) + 0(30/36) = 1 + 45/36 = 81/36 = 2.25</span> <b>[M1 A1]</b>。<br>公平なゲームでは <span class=\"chem\">E(received) - k = 0</span> なので、<span class=\"chem\">k = $2.25</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q023 · numeric · challenge · SL · SL 4.6, 4.7 · 6 marks
    "t4-2-q023": {
      // EN: <p>A bag contains <span class="chem">n</span> red counters and <span class="chem">3</span> blue counters, and it holds more red counters than blue ones. A player pays <span class="chem">$2</span> to draw two counters at random without replacement. If the two counters are the same colour, the player receives <span class="chem">$4</span>; otherwise the player receives nothing. The game is fair. Find <span class="chem">n</span>.</p>
      stem: "<p>袋の中に赤い玉が <span class=\"chem\">n</span> 個、青い玉が <span class=\"chem\">3</span> 個入っていて、赤い玉は青い玉より多い。プレイヤーは <span class=\"chem\">$2</span> を払い、玉を 2 個、無作為に取り出して戻さない。2 個が同じ色なら <span class=\"chem\">$4</span> を受け取り、そうでなければ何も受け取らない。このゲームは公平である。<span class=\"chem\">n</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "fair" means expected gain = 0, which fixes P(same colour). The phrase "more red counters than blue" is a hidden condition you will need at the end.
        "解読：「公平」とは利得の期待値 = 0 のことで、これで P(same colour) が決まります。「赤い玉は青い玉より多い」という一文は、最後に必要になる隠れた条件です。",
        // EN: Fair: 4 × P(same) − 2 = 0, so P(same) = 1/2. Write P(same) = [n(n − 1) + 3 × 2] / [(n + 3)(n + 2)] from a tree diagram without replacement.
        "公平：4 × P(same) − 2 = 0 なので P(same) = 1/2。戻さない取り出しの樹形図から P(same) = [n(n − 1) + 3 × 2] / [(n + 3)(n + 2)] と表します。",
        // EN: You get a quadratic in n with two positive integer roots. Use the condition n &gt; 3 to choose one.
        "2 つの正の整数解をもつ n の 2 次方程式が得られます。条件 n &gt; 3 を使って一方を選びます。",
      ],
      // EN: <p><b>Decode:</b> a fair game has <span class="chem">E(gain) = 0</span>: <span class="chem">4 P(same) - 2 = 0 ⇒ P(same) = 1/2</span> <b>[M1 A1]</b>.<br>Without replacement, <span class="chem">P(same) = (n/(n + 3))((n - 1)/(n + 2)) + (3/(n + 3))(2/(n + 2)) = (n^2 - n + 6)/((n + 3)(n + 2))</span> <b>[M1 A1]</b>.<br>Setting this equal to <span class="chem">1/2</span>: <span class="chem">2n^2 - 2n + 12 = n^2 + 5n + 6 ⇒ n^2 - 7n + 6 = 0 ⇒ (n - 1)(n - 6) = 0</span> <b>[A1]</b>.<br>The bag holds more red than blue, so <span class="chem">n &gt; 3</span> and <span class="chem">n = 6</span> <b>[R1]</b>. (Check: <span class="chem">P(same) = 36/72 = 1/2</span>.)</p>
      solution: "<p><b>解読：</b>公平なゲームでは <span class=\"chem\">E(gain) = 0</span>：<span class=\"chem\">4 P(same) - 2 = 0 ⇒ P(same) = 1/2</span> <b>[M1 A1]</b>。<br>戻さない取り出しなので、<span class=\"chem\">P(same) = (n/(n + 3))((n - 1)/(n + 2)) + (3/(n + 3))(2/(n + 2)) = (n^2 - n + 6)/((n + 3)(n + 2))</span> <b>[M1 A1]</b>。<br>これを <span class=\"chem\">1/2</span> とおくと：<span class=\"chem\">2n^2 - 2n + 12 = n^2 + 5n + 6 ⇒ n^2 - 7n + 6 = 0 ⇒ (n - 1)(n - 6) = 0</span> <b>[A1]</b>。<br>袋の中の赤は青より多いので <span class=\"chem\">n &gt; 3</span>、よって <span class=\"chem\">n = 6</span> <b>[R1]</b>。（確認：<span class=\"chem\">P(same) = 36/72 = 1/2</span>。）</p>",
    },

    // ── t4-2-q024 · numeric · exam · AHL · AHL 4.14 · 4 marks
    "t4-2-q024": {
      // EN: <p>The number of goals <span class="chem">X</span> scored by a hockey team in a match has the probability distribution below.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span></th><th scope="col">0</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th></tr></thead><tbody><tr><th scope="row"><span class="chem">P(X = x)</span></th><td class="num">0.2</td><td class="num">0.3</td><td class="num">0.4</td><td class="num">0.1</td></tr></tbody></table></div><p>Find <span class="chem">Var(X)</span>.</p>
      stem: "<p>あるホッケーチームが 1 試合で挙げる得点数 <span class=\"chem\">X</span> の確率分布は次のとおりである。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><span class=\"chem\">x</span></th><th scope=\"col\">0</th><th scope=\"col\">1</th><th scope=\"col\">2</th><th scope=\"col\">3</th></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">P(X = x)</span></th><td class=\"num\">0.2</td><td class=\"num\">0.3</td><td class=\"num\">0.4</td><td class=\"num\">0.1</td></tr></tbody></table></div><p><span class=\"chem\">Var(X)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: First find <span class="chem">E(X) = Σ x P(X = x)</span>.
        "まず <span class=\"chem\">E(X) = Σ x P(X = x)</span> を求めます。",
        // EN: Then find <span class="chem">E(X^2) = Σ x^2 P(X = x)</span> and use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span>.
        "次に <span class=\"chem\">E(X^2) = Σ x^2 P(X = x)</span> を求め、<span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span> を使います。",
      ],
      // EN: <p><span class="chem">E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4</span> <b>[A1]</b>.<br><span class="chem">E(X^2) = 0(0.2) + 1(0.3) + 4(0.4) + 9(0.1) = 2.8</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 2.8 - 1.4^2 = 2.8 - 1.96 = 0.84</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4</span> <b>[A1]</b>。<br><span class=\"chem\">E(X^2) = 0(0.2) + 1(0.3) + 4(0.4) + 9(0.1) = 2.8</span> <b>[M1 A1]</b>。<br><span class=\"chem\">Var(X) = 2.8 - 1.4^2 = 2.8 - 1.96 = 0.84</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q025 · short · exam · AHL · AHL 4.14 · 6 marks
    "t4-2-q025": {
      // EN: <p>The daily maximum temperature <span class="chem">C</span> (°C) in a city in June has mean <span class="chem">18</span> and variance <span class="chem">6.25</span>. The temperature in °F is <span class="chem">F = 1.8C + 32</span>.<br>(a) Find <span class="chem">E(F)</span>. <strong>[2 marks]</strong><br>(b) Find the standard deviation of <span class="chem">F</span>. <strong>[2 marks]</strong><br>An ice-cream seller models her daily profit, in dollars, as <span class="chem">P = 40F - 1500</span>.<br>(c) Find the mean and the standard deviation of <span class="chem">P</span>. <strong>[2 marks]</strong></p>
      stem: "<p>ある都市の 6 月の日最高気温 <span class=\"chem\">C</span>（°C）は、平均 <span class=\"chem\">18</span>、分散 <span class=\"chem\">6.25</span> である。°F で表した気温は <span class=\"chem\">F = 1.8C + 32</span> である。<br>(a) <span class=\"chem\">E(F)</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">F</span> の標準偏差を求めなさい (Find)。 <strong>[2 marks]</strong><br>あるアイスクリーム販売者は、1 日の利益（ドル）を <span class=\"chem\">P = 40F - 1500</span> とモデル化している。<br>(c) <span class=\"chem\">P</span> の平均と標準偏差を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: these are linear transformations aX + b. Adding a constant shifts the mean only; multiplying by a scales the mean by a and the variance by a².
        "解読：これらは 1 次変換 aX + b です。定数を加えると平均だけがずれ、a 倍すると平均は a 倍、分散は a² 倍になります。",
        // EN: The variance of C is given, not its standard deviation: SD(C) = √6.25.
        "与えられているのは C の分散で、標準偏差ではありません：SD(C) = √6.25。",
        // EN: For (c), apply the same rules to P = 40F − 1500 using your answers to (a) and (b).
        "(c) では、(a) と (b) の答えを使って P = 40F − 1500 に同じ規則を適用します。",
      ],
      // EN: <p>(a) <span class="chem">E(F) = 1.8 E(C) + 32 = 1.8(18) + 32 = 64.4</span>.<br>(b) <span class="chem">Var(F) = 1.8^2 Var(C) = 3.24 × 6.25 = 20.25</span>, so <span class="chem">SD(F) = 4.5</span>. The <span class="chem">+32</span> does not affect the spread.<br>(c) <span class="chem">E(P) = 40 E(F) - 1500 = 2576 - 1500 = 1076</span> dollars and <span class="chem">SD(P) = 40 SD(F) = 180</span> dollars.</p>
      solution: "<p>(a) <span class=\"chem\">E(F) = 1.8 E(C) + 32 = 1.8(18) + 32 = 64.4</span>。<br>(b) <span class=\"chem\">Var(F) = 1.8^2 Var(C) = 3.24 × 6.25 = 20.25</span> なので <span class=\"chem\">SD(F) = 4.5</span>。<span class=\"chem\">+32</span> は散らばりに影響しません。<br>(c) <span class=\"chem\">E(P) = 40 E(F) - 1500 = 2576 - 1500 = 1076</span> ドル、<span class=\"chem\">SD(P) = 40 SD(F) = 180</span> ドルです。</p>",
      // EN: <p>(a) <span class="chem">E(F) = 1.8(18) + 32 = 64.4</span> °F.<br>(b) <span class="chem">SD(C) = sqrt(6.25) = 2.5</span>, so <span class="chem">SD(F) = 1.8 × 2.5 = 4.5</span> °F.<br>(c) <span class="chem">E(P) = 40(64.4) - 1500 = $1076</span>; <span class="chem">SD(P) = 40 × 4.5 = $180</span>.</p>
      answer: "<p>(a) <span class=\"chem\">E(F) = 1.8(18) + 32 = 64.4</span> °F。<br>(b) <span class=\"chem\">SD(C) = sqrt(6.25) = 2.5</span> なので <span class=\"chem\">SD(F) = 1.8 × 2.5 = 4.5</span> °F。<br>(c) <span class=\"chem\">E(P) = 40(64.4) - 1500 = $1076</span>；<span class=\"chem\">SD(P) = 40 × 4.5 = $180</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses E(aC + b) = aE(C) + b.
        "M1：(a) E(aC + b) = aE(C) + b を使う。",
        // EN: A1: (a) E(F) = 64.4.
        "A1：(a) E(F) = 64.4。",
        // EN: M1: (b) Uses Var(F) = 1.8² Var(C) = 20.25, or SD(F) = |1.8| SD(C) with SD(C) = 2.5.
        "M1：(b) Var(F) = 1.8² Var(C) = 20.25、または SD(C) = 2.5 として SD(F) = |1.8| SD(C) を使う。",
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
      stem: "<p>離散型確率変数 <span class=\"chem\">X</span> が値 <span class=\"chem\">1, 2, 3</span> をそれぞれ確率 <span class=\"chem\">0.5, 0.3, 0.2</span> でとる。<span class=\"chem\">E(5 - 2X)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Find <span class="chem">E(X)</span> first.
        "まず <span class=\"chem\">E(X)</span> を求めます。",
        // EN: Then use <span class="chem">E(aX + b) = aE(X) + b</span> with <span class="chem">a = -2</span> and <span class="chem">b = 5</span>.
        "次に <span class=\"chem\">a = -2</span>、<span class=\"chem\">b = 5</span> として <span class=\"chem\">E(aX + b) = aE(X) + b</span> を使います。",
      ],
      // EN: <p><span class="chem">E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 1.7</span> <b>[M1 A1]</b>.<br><span class="chem">E(5 - 2X) = 5 - 2(1.7) = 1.6</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = 1(0.5) + 2(0.3) + 3(0.2) = 1.7</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(5 - 2X) = 5 - 2(1.7) = 1.6</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q027 · numeric · exam · SL · SL 4.6, 4.11 · 4 marks
    "t4-2-q027": {
      // EN: <p>Events <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">P(A) = 0.5</span>, <span class="chem">P(B) = 0.4</span> and <span class="chem">P(A ∪ B) = 0.8</span>. Find the exact value of <span class="chem">P(A | B′)</span>.</p>
      stem: "<p>事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が <span class=\"chem\">P(A) = 0.5</span>、<span class=\"chem\">P(B) = 0.4</span>、<span class=\"chem\">P(A ∪ B) = 0.8</span> を満たす。<span class=\"chem\">P(A | B′)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the addition rule to find <span class="chem">P(A ∩ B)</span>.
        "加法定理を使って <span class=\"chem\">P(A ∩ B)</span> を求めます。",
        // EN: A Venn diagram helps: <span class="chem">P(A ∩ B′) = P(A) - P(A ∩ B)</span>, and <span class="chem">P(B′) = 1 - P(B)</span>.
        "ベン図が役に立ちます：<span class=\"chem\">P(A ∩ B′) = P(A) - P(A ∩ B)</span>、<span class=\"chem\">P(B′) = 1 - P(B)</span> です。",
      ],
      // EN: <p><span class="chem">P(A ∩ B) = 0.5 + 0.4 - 0.8 = 0.1</span> <b>[A1]</b>.<br><span class="chem">P(A ∩ B′) = 0.5 - 0.1 = 0.4</span> <b>[A1]</b>.<br><span class="chem">P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.6 = 2/3</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(A ∩ B) = 0.5 + 0.4 - 0.8 = 0.1</span> <b>[A1]</b>。<br><span class=\"chem\">P(A ∩ B′) = 0.5 - 0.1 = 0.4</span> <b>[A1]</b>。<br><span class=\"chem\">P(A | B′) = P(A ∩ B′)/P(B′) = 0.4/0.6 = 2/3</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q028 · short · challenge · SL · SL 4.6, 4.11 · 7 marks
    "t4-2-q028": {
      // EN: <p>An insurance study reports that <span class="chem">18%</span> of drivers who use a phone while driving have had a minor accident in the last year, and that <span class="chem">18%</span> of drivers who do not use a phone while driving have also had a minor accident. Of all drivers, <span class="chem">40%</span> use a phone while driving. Let <span class="chem">A</span> be the event "has had a minor accident" and <span class="chem">B</span> the event "uses a phone while driving".<br>(a) Write down <span class="chem">P(A)</span>. <strong>[1 mark]</strong><br>(b) Prove that, for any events with <span class="chem">0 &lt; P(B) &lt; 1</span>, if <span class="chem">P(A | B) = P(A | B′)</span> then <span class="chem">A</span> and <span class="chem">B</span> are independent. <strong>[4 marks]</strong><br>(c) Write down <span class="chem">P(B | A)</span>, giving a reason. <strong>[2 marks]</strong></p>
      stem: "<p>ある保険の調査によると、運転中に携帯電話を使う運転者の <span class=\"chem\">18%</span> が過去 1 年間に軽い事故を起こしており、運転中に携帯電話を使わない運転者の <span class=\"chem\">18%</span> も軽い事故を起こしている。全運転者のうち <span class=\"chem\">40%</span> が運転中に携帯電話を使う。<span class=\"chem\">A</span> を事象「軽い事故を起こしたことがある」、<span class=\"chem\">B</span> を事象「運転中に携帯電話を使う」とする。<br>(a) <span class=\"chem\">P(A)</span> を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">0 &lt; P(B) &lt; 1</span> を満たす任意の事象について、<span class=\"chem\">P(A | B) = P(A | B′)</span> ならば <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は独立であることを証明しなさい (Prove)。 <strong>[4 marks]</strong><br>(c) 理由を挙げて、<span class=\"chem\">P(B | A)</span> を書きなさい (Write down)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the wordy percentages are P(A | B) = 0.18 and P(A | B′) = 0.18. The question is really the independence test P(A | B) = P(A | B′), first in numbers and then as a general proof.
        "解読：長い文章の百分率は P(A | B) = 0.18 と P(A | B′) = 0.18 のことです。この問題の本質は独立性の判定 P(A | B) = P(A | B′) で、まず数値で、次に一般的な証明で扱います。",
        // EN: For (a), use a tree: P(A) = P(B)P(A | B) + P(B′)P(A | B′).
        "(a) では樹形図を使います：P(A) = P(B)P(A | B) + P(B′)P(A | B′)。",
        // EN: For (b), call the common value p and show P(A) = p. Then compare P(A ∩ B) with P(A)P(B).
        "(b) では共通の値を p とおき、P(A) = p を示します。次に P(A ∩ B) と P(A)P(B) を比べます。",
        // EN: For (c), independence works both ways.
        "(c) では、独立性はどちら向きにも成り立つことを使います。",
      ],
      // EN: <p><b>Decode:</b> "18% of drivers who use a phone" is the conditional probability <span class="chem">P(A | B) = 0.18</span>; likewise <span class="chem">P(A | B′) = 0.18</span>. Equal conditional probabilities are the SL 4.11 test for independence.<br>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">p = P(A | B) = P(A | B′)</span>. Since <span class="chem">B</span> and <span class="chem">B′</span> partition the sample space, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p[P(B) + P(B′)] = p</span>. Hence <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, which is the definition of independence.<br>(c) The events are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>. Check: <span class="chem">P(B | A) = 0.072/0.18 = 0.4</span>.</p>
      solution: "<p><b>解読：</b>「携帯電話を使う運転者の 18%」は条件付き確率 <span class=\"chem\">P(A | B) = 0.18</span> のことで、同様に <span class=\"chem\">P(A | B′) = 0.18</span> です。条件付き確率が等しいことは SL 4.11 の独立性の判定です。<br>(a) <span class=\"chem\">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>。<br>(b) <span class=\"chem\">p = P(A | B) = P(A | B′)</span> とおきます。<span class=\"chem\">B</span> と <span class=\"chem\">B′</span> は標本空間を分割するので、<span class=\"chem\">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p[P(B) + P(B′)] = p</span>。したがって <span class=\"chem\">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span> となり、これは独立の定義そのものです。<br>(c) 2 つの事象は独立なので <span class=\"chem\">P(B | A) = P(B) = 0.4</span>。確認：<span class=\"chem\">P(B | A) = 0.072/0.18 = 0.4</span>。</p>",
      // EN: <p>(a) <span class="chem">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>.<br>(b) Let <span class="chem">P(A | B) = P(A | B′) = p</span>. By total probability, <span class="chem">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p(P(B) + P(B′)) = p</span>. Then <span class="chem">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are independent.<br>(c) By (b), <span class="chem">A</span> and <span class="chem">B</span> are independent, so <span class="chem">P(B | A) = P(B) = 0.4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(A) = 0.4(0.18) + 0.6(0.18) = 0.18</span>。<br>(b) <span class=\"chem\">P(A | B) = P(A | B′) = p</span> とおく。全確率の法則より <span class=\"chem\">P(A) = P(A | B)P(B) + P(A | B′)P(B′) = p(P(B) + P(B′)) = p</span>。すると <span class=\"chem\">P(A ∩ B) = P(A | B)P(B) = pP(B) = P(A)P(B)</span> なので、<span class=\"chem\">A</span> と <span class=\"chem\">B</span> は独立である。<br>(c) (b) より <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は独立なので、<span class=\"chem\">P(B | A) = P(B) = 0.4</span>。</p>",
      markscheme: [
        // EN: A1: (a) P(A) = 0.18.
        "A1：(a) P(A) = 0.18。",
        // EN: M1: (b) Uses the law of total probability P(A) = P(A | B)P(B) + P(A | B′)P(B′).
        "M1：(b) 全確率の法則 P(A) = P(A | B)P(B) + P(A | B′)P(B′) を使う。",
        // EN: A1: (b) Factorises using P(A | B) = P(A | B′) = p to get P(A) = p(P(B) + P(B′)) = p.
        "A1：(b) P(A | B) = P(A | B′) = p を使ってくくり出し、P(A) = p(P(B) + P(B′)) = p を得る。",
        // EN: M1: (b) Uses P(A ∩ B) = P(A | B)P(B).
        "M1：(b) P(A ∩ B) = P(A | B)P(B) を使う。",
        // EN: R1: (b) Concludes P(A ∩ B) = P(A)P(B), hence A and B are independent.
        "R1：(b) P(A ∩ B) = P(A)P(B) と結論づけ、したがって A と B は独立である。",
        // EN: R1: (c) Reason: A and B are independent (from (b)), so conditioning on A does not change P(B).
        "R1：(c) 理由：A と B は独立である（(b) より）ので、A を条件としても P(B) は変わらない。",
        // EN: A1: (c) P(B | A) = 0.4.
        "A1：(c) P(B | A) = 0.4。",
      ],
    },

    // ── t4-2-q029 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q029": {
      // EN: <p>The volume of juice <span class="chem">V</span> ml in a carton is normally distributed with mean <span class="chem">250</span> ml. It is known that <span class="chem">P(V &gt; 262) = 0.15</span>. Find <span class="chem">P(238 &lt; V &lt; 262)</span>.</p>
      stem: "<p>紙パック入りジュースの容量 <span class=\"chem\">V</span> ml は平均 <span class=\"chem\">250</span> ml の正規分布に従う。<span class=\"chem\">P(V &gt; 262) = 0.15</span> であることがわかっている。<span class=\"chem\">P(238 &lt; V &lt; 262)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: The normal curve is symmetric about the mean. How far are 238 and 262 from 250?
        "正規分布の曲線は平均に関して対称です。238 と 262 は 250 からどれだけ離れていますか？",
        // EN: By symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262)</span>. Subtract both tails from 1.
        "対称性より <span class=\"chem\">P(V &lt; 238) = P(V &gt; 262)</span> です。両側の裾の確率を 1 から引きます。",
      ],
      // EN: <p><span class="chem">238</span> and <span class="chem">262</span> are both <span class="chem">12</span> ml from the mean, so by symmetry <span class="chem">P(V &lt; 238) = P(V &gt; 262) = 0.15</span> <b>[R1 A1]</b>.<br><span class="chem">P(238 &lt; V &lt; 262) = 1 - 2(0.15) = 0.7</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">238</span> と <span class=\"chem\">262</span> はどちらも平均から <span class=\"chem\">12</span> ml 離れているので、対称性より <span class=\"chem\">P(V &lt; 238) = P(V &gt; 262) = 0.15</span> <b>[R1 A1]</b>。<br><span class=\"chem\">P(238 &lt; V &lt; 262) = 1 - 2(0.15) = 0.7</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q030 · numeric · exam · SL · SL 4.8 · 4 marks
    "t4-2-q030": {
      // EN: <p>A spinner lands on red with probability <span class="chem">1/4</span> on each spin, independently. It is spun <span class="chem">4</span> times. Find the exact probability that it lands on red <strong>at least 3</strong> times.</p>
      stem: "<p>あるルーレットは、1 回まわすごとに独立に確率 <span class=\"chem\">1/4</span> で赤に止まる。これを <span class=\"chem\">4</span> 回まわす。赤に<strong>少なくとも 3</strong> 回止まる正確な確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Let <span class="chem">X ~ B(4, 1/4)</span>. "At least 3" means <span class="chem">X = 3</span> or <span class="chem">X = 4</span>.
        "<span class=\"chem\">X ~ B(4, 1/4)</span> とします。「少なくとも 3 回」は <span class=\"chem\">X = 3</span> または <span class=\"chem\">X = 4</span> のことです。",
        // EN: <span class="chem">P(X = 3) = ⁴C₃ (1/4)^3 (3/4)</span> and <span class="chem">P(X = 4) = (1/4)^4</span>.
        "<span class=\"chem\">P(X = 3) = ⁴C₃ (1/4)^3 (3/4)</span>、<span class=\"chem\">P(X = 4) = (1/4)^4</span> です。",
      ],
      // EN: <p>Let <span class="chem">X ~ B(4, 1/4)</span>. <span class="chem">P(X ≥ 3) = P(X = 3) + P(X = 4)</span> <b>[M1]</b>.<br><span class="chem">P(X = 3) = 4 × (1/64) × (3/4) = 12/256</span> <b>[A1]</b>, <span class="chem">P(X = 4) = 1/256</span> <b>[A1]</b>.<br><span class="chem">P(X ≥ 3) = 13/256</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">X ~ B(4, 1/4)</span> とします。<span class=\"chem\">P(X ≥ 3) = P(X = 3) + P(X = 4)</span> <b>[M1]</b>。<br><span class=\"chem\">P(X = 3) = 4 × (1/64) × (3/4) = 12/256</span> <b>[A1]</b>、<span class=\"chem\">P(X = 4) = 1/256</span> <b>[A1]</b>。<br><span class=\"chem\">P(X ≥ 3) = 13/256</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q031 · numeric · challenge · AHL · AHL 4.13 · 6 marks
    "t4-2-q031": {
      // EN: <p>Maya travels to school by bus, by bicycle or on foot with probabilities <span class="chem">1/2</span>, <span class="chem">1/3</span> and <span class="chem">1/6</span> respectively. She is late with probability <span class="chem">1/5</span> if she takes the bus, <span class="chem">1/10</span> if she cycles and <span class="chem">1/4</span> if she walks. One morning Maya arrives <strong>on time</strong>. Find the exact probability that she cycled that morning.</p>
      stem: "<p>Maya はバス、自転車、徒歩のいずれかで通学し、その確率はそれぞれ <span class=\"chem\">1/2</span>、<span class=\"chem\">1/3</span>、<span class=\"chem\">1/6</span> である。遅刻する確率は、バスなら <span class=\"chem\">1/5</span>、自転車なら <span class=\"chem\">1/10</span>、徒歩なら <span class=\"chem\">1/4</span> である。ある朝、Maya は<strong>時間どおりに</strong>到着した。その朝 Maya が自転車で通学した正確な確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you know the result (on time) and want the cause (cycled): this is Bayes' theorem with three partitioning events. The trap is that the given conditional probabilities are for being LATE, so use their complements.
        "解読：結果（時間どおり）がわかっていて、原因（自転車）を求めたいので、3 つの事象による分割を用いたベイズの定理です。落とし穴は、与えられた条件付き確率が「遅刻」についてのものだという点です。その余事象を使いましょう。",
        // EN: P(on time | bus) = 4/5, P(on time | cycle) = 9/10, P(on time | walk) = 3/4.
        "P(on time | bus) = 4/5、P(on time | cycle) = 9/10、P(on time | walk) = 3/4。",
        // EN: P(on time) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4). Then divide the cycling branch by this total.
        "P(on time) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4)。次に、自転車の枝をこの合計で割ります。",
      ],
      // EN: <p><b>Decode:</b> reversing the condition from "on time" back to the mode of travel is Bayes' theorem with the partition {bus, cycle, walk}; first convert each "late" probability to "on time".<br><span class="chem">P(T | bus) = 4/5, P(T | cycle) = 9/10, P(T | walk) = 3/4</span> <b>[A1]</b>.<br><span class="chem">P(T) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4) = 2/5 + 3/10 + 1/8 = 33/40</span> <b>[M1 A1]</b>.<br><span class="chem">P(cycle ∩ T) = (1/3)(9/10) = 3/10 = 12/40</span> <b>[A1]</b>.<br><span class="chem">P(cycle | T) = (12/40)/(33/40) = 12/33 = 4/11</span> <b>[M1 A1]</b>.</p>
      solution: "<p><b>解読：</b>条件を「時間どおり」から通学手段へと逆にたどるのは、分割 {bus, cycle, walk} によるベイズの定理です。まず「遅刻」の確率をそれぞれ「時間どおり」の確率に変換します。<br><span class=\"chem\">P(T | bus) = 4/5, P(T | cycle) = 9/10, P(T | walk) = 3/4</span> <b>[A1]</b>。<br><span class=\"chem\">P(T) = (1/2)(4/5) + (1/3)(9/10) + (1/6)(3/4) = 2/5 + 3/10 + 1/8 = 33/40</span> <b>[M1 A1]</b>。<br><span class=\"chem\">P(cycle ∩ T) = (1/3)(9/10) = 3/10 = 12/40</span> <b>[A1]</b>。<br><span class=\"chem\">P(cycle | T) = (12/40)/(33/40) = 12/33 = 4/11</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q032 · short · exam · AHL · AHL 4.14 · 8 marks
    "t4-2-q032": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function<br><span class="chem">f(x) = kx</span> for <span class="chem">0 ≤ x ≤ 2</span>,<br><span class="chem">f(x) = k(6 - x)/2</span> for <span class="chem">2 &lt; x ≤ 6</span>,<br>and <span class="chem">f(x) = 0</span> otherwise, where <span class="chem">k</span> is a positive constant.<br>(a) Show that <span class="chem">k = 1/6</span>. <strong>[2 marks]</strong><br>(b) Write down the mode of <span class="chem">X</span>. <strong>[1 mark]</strong><br>(c) Find <span class="chem">P(X &lt; 2)</span>. <strong>[1 mark]</strong><br>(d) Find the exact value of the median of <span class="chem">X</span>. <strong>[4 marks]</strong></p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数は<br><span class=\"chem\">0 ≤ x ≤ 2</span> のとき <span class=\"chem\">f(x) = kx</span>、<br><span class=\"chem\">2 &lt; x ≤ 6</span> のとき <span class=\"chem\">f(x) = k(6 - x)/2</span>、<br>それ以外で <span class=\"chem\">f(x) = 0</span> である。ただし <span class=\"chem\">k</span> は正の定数である。<br>(a) <span class=\"chem\">k = 1/6</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">X</span> の最頻値を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(c) <span class=\"chem\">P(X &lt; 2)</span> を求めなさい (Find)。 <strong>[1 mark]</strong><br>(d) <span class=\"chem\">X</span> の中央値の正確な値を求めなさい (Find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Sketch f: it rises linearly from (0, 0) to (2, 2k) and falls to (6, 0). The total area is a triangle.
        "f のグラフをかきます：(0, 0) から (2, 2k) まで直線的に増加し、(6, 0) まで減少します。全体の面積は三角形です。",
        // EN: For the median, first decide which piece it lies in by comparing P(X &lt; 2) with 0.5.
        "中央値は、まず P(X &lt; 2) と 0.5 を比べて、どちらの区間にあるかを判断します。",
        // EN: The area to the right of m is a smaller triangle with base 6 − m and height (6 − m)/12.
        "m より右の面積は、底辺 6 − m、高さ (6 − m)/12 の小さな三角形です。",
      ],
      // EN: <p>(a) Total area = triangle with base <span class="chem">6</span> and height <span class="chem">2k</span>: <span class="chem">6k = 1 ⇒ k = 1/6</span>.<br>(b) <span class="chem">f</span> is greatest at the apex, so the mode is <span class="chem">2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(2/6) = 1/3</span>.<br>(d) <span class="chem">P(X &lt; 2) = 1/3 &lt; 1/2</span>, so <span class="chem">m &gt; 2</span>. The right-hand tail is a triangle with base <span class="chem">6 - m</span> and height <span class="chem">f(m) = (6 - m)/12</span>: <span class="chem">(1/2)(6 - m)^2/12 = 1/2 ⇒ (6 - m)^2 = 12 ⇒ 6 - m = ±2sqrt(3)</span>. Since <span class="chem">2 &lt; m ≤ 6</span>, <span class="chem">m = 6 - 2sqrt(3) ≈ 2.54</span>.</p>
      solution: "<p>(a) 全面積 = 底辺 <span class=\"chem\">6</span>、高さ <span class=\"chem\">2k</span> の三角形：<span class=\"chem\">6k = 1 ⇒ k = 1/6</span>。<br>(b) <span class=\"chem\">f</span> は頂点で最大になるので、最頻値は <span class=\"chem\">2</span> です。<br>(c) <span class=\"chem\">P(X &lt; 2) = (1/2)(2)(2/6) = 1/3</span>。<br>(d) <span class=\"chem\">P(X &lt; 2) = 1/3 &lt; 1/2</span> なので <span class=\"chem\">m &gt; 2</span>。右側の裾は底辺 <span class=\"chem\">6 - m</span>、高さ <span class=\"chem\">f(m) = (6 - m)/12</span> の三角形です：<span class=\"chem\">(1/2)(6 - m)^2/12 = 1/2 ⇒ (6 - m)^2 = 12 ⇒ 6 - m = ±2sqrt(3)</span>。<span class=\"chem\">2 &lt; m ≤ 6</span> なので <span class=\"chem\">m = 6 - 2sqrt(3) ≈ 2.54</span>。</p>",
      // EN: <p>(a) The graph is a triangle with base <span class="chem">6</span> and height <span class="chem">f(2) = 2k</span>, so its area is <span class="chem">(1/2)(6)(2k) = 6k = 1</span>, giving <span class="chem">k = 1/6</span>.<br>(b) Mode <span class="chem">= 2</span>.<br>(c) <span class="chem">P(X &lt; 2) = (1/2)(2)(1/3) = 1/3</span>.<br>(d) Since <span class="chem">1/3 &lt; 1/2</span>, the median <span class="chem">m</span> lies in <span class="chem">(2, 6]</span>. <span class="chem">P(X &gt; m) = (1/2)(6 - m)(6 - m)/12 = (6 - m)^2/24 = 1/2</span>, so <span class="chem">(6 - m)^2 = 12</span> and <span class="chem">m = 6 - 2sqrt(3)</span> (about 2.54).</p>
      answer: "<p>(a) グラフは底辺 <span class=\"chem\">6</span>、高さ <span class=\"chem\">f(2) = 2k</span> の三角形なので、その面積は <span class=\"chem\">(1/2)(6)(2k) = 6k = 1</span> となり、<span class=\"chem\">k = 1/6</span>。<br>(b) 最頻値 <span class=\"chem\">= 2</span>。<br>(c) <span class=\"chem\">P(X &lt; 2) = (1/2)(2)(1/3) = 1/3</span>。<br>(d) <span class=\"chem\">1/3 &lt; 1/2</span> なので、中央値 <span class=\"chem\">m</span> は <span class=\"chem\">(2, 6]</span> にある。<span class=\"chem\">P(X &gt; m) = (1/2)(6 - m)(6 - m)/12 = (6 - m)^2/24 = 1/2</span> より <span class=\"chem\">(6 - m)^2 = 12</span>、<span class=\"chem\">m = 6 - 2sqrt(3)</span>（約 2.54）。</p>",
      markscheme: [
        // EN: M1: (a) Sets total area (or the sum of two integrals) equal to 1, e.g. (1/2)(6)(2k) = 1.
        "M1：(a) 全面積（または 2 つの積分の和）を 1 とおく。例：(1/2)(6)(2k) = 1。",
        // EN: A1: (a) Obtains 6k = 1, so k = 1/6 (AG).
        "A1：(a) 6k = 1 を得て、k = 1/6 (AG)。",
        // EN: A1: (b) Mode = 2.
        "A1：(b) 最頻値 = 2。",
        // EN: A1: (c) P(X < 2) = 1/3.
        "A1：(c) P(X < 2) = 1/3。",
        // EN: R1: (d) Recognises the median lies in 2 < x ≤ 6 because P(X < 2) = 1/3 < 1/2.
        "R1：(d) P(X < 2) = 1/3 < 1/2 なので、中央値が 2 < x ≤ 6 にあることを認識する。",
        // EN: M1: (d) Sets up an equation for m, e.g. ∫_m^6 (6 − x)/12 dx = 1/2 or 1/3 + ∫_2^m (6 − x)/12 dx = 1/2.
        "M1：(d) m の方程式を立てる。例：∫_m^6 (6 − x)/12 dx = 1/2 または 1/3 + ∫_2^m (6 − x)/12 dx = 1/2。",
        // EN: A1: (d) Obtains (6 − m)² = 12 (or an equivalent quadratic m² − 12m + 24 = 0).
        "A1：(d) (6 − m)² = 12（または同値な 2 次方程式 m² − 12m + 24 = 0）を得る。",
        // EN: A1: (d) m = 6 − 2√3, rejecting 6 + 2√3 as outside the domain.
        "A1：(d) m = 6 − 2√3。6 + 2√3 は定義域外として除く。",
      ],
    },

    // ── t4-2-q033 · numeric · challenge · AHL · AHL 4.14 · 6 marks
    "t4-2-q033": {
      // EN: <p>The lifetime <span class="chem">T</span> years of a battery is between <span class="chem">1</span> and <span class="chem">3</span> years, and its probability density function is proportional to <span class="chem">1/t^2</span> on that interval (and zero elsewhere). A replacement policy costs the shop <span class="chem">2T + 1</span> hundred dollars per battery. Find the exact expected cost per battery, in hundreds of dollars.</p>
      stem: "<p>ある電池の寿命 <span class=\"chem\">T</span> 年は <span class=\"chem\">1</span> 年から <span class=\"chem\">3</span> 年の間にあり、その確率密度関数はこの区間で <span class=\"chem\">1/t^2</span> に比例する（それ以外では 0）。ある交換保証制度により、店の費用は電池 1 個あたり <span class=\"chem\">2T + 1</span> 百ドルかかる。電池 1 個あたりの費用の期待値の正確な値を、百ドル単位で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "proportional to 1/t²" means f(t) = k/t² for 1 ≤ t ≤ 3, with k unknown. "Expected cost" is E(2T + 1), a linear transformation of T.
        "解読：「1/t² に比例する」とは、1 ≤ t ≤ 3 で f(t) = k/t²（k は未知）ということです。「費用の期待値」は E(2T + 1)、つまり T の 1 次変換です。",
        // EN: Find k from ∫₁³ k/t² dt = 1.
        "∫₁³ k/t² dt = 1 から k を求めます。",
        // EN: Then E(T) = ∫₁³ t · k/t² dt = k ln 3, and E(2T + 1) = 2E(T) + 1.
        "次に E(T) = ∫₁³ t · k/t² dt = k ln 3、そして E(2T + 1) = 2E(T) + 1 です。",
      ],
      // EN: <p><b>Decode:</b> write <span class="chem">f(t) = k/t^2</span> on <span class="chem">[1, 3]</span>; the question asks for <span class="chem">E(2T + 1)</span>.<br><span class="chem">∫_1^3 k t^{-2} dt = k[-1/t]_1^3 = k(1 - 1/3) = 2k/3 = 1 ⇒ k = 3/2</span> <b>[M1 A1]</b>.<br><span class="chem">E(T) = ∫_1^3 t (3/2) t^{-2} dt = (3/2)[ln t]_1^3 = (3/2) ln 3</span> <b>[M1 A1]</b>.<br><span class="chem">E(2T + 1) = 2E(T) + 1 = 3 ln 3 + 1</span> (about <span class="chem">4.30</span> hundred dollars) <b>[M1 A1]</b>.</p>
      solution: "<p><b>解読：</b><span class=\"chem\">[1, 3]</span> で <span class=\"chem\">f(t) = k/t^2</span> とおきます。問われているのは <span class=\"chem\">E(2T + 1)</span> です。<br><span class=\"chem\">∫_1^3 k t^{-2} dt = k[-1/t]_1^3 = k(1 - 1/3) = 2k/3 = 1 ⇒ k = 3/2</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(T) = ∫_1^3 t (3/2) t^{-2} dt = (3/2)[ln t]_1^3 = (3/2) ln 3</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(2T + 1) = 2E(T) + 1 = 3 ln 3 + 1</span>（約 <span class=\"chem\">4.30</span> 百ドル） <b>[M1 A1]</b>。</p>",
      // EN: 3 ln 3 + 1
      answerDisplay: "3 ln 3 + 1",
    },

    // ── t4-2-q034 · numeric · foundation · SL · SL 4.5 · 2 marks
    "t4-2-q034": {
      // EN: <p>A spinner is spun <span class="chem">250</span> times and lands on blue <span class="chem">60</span> times. Using the relative frequency as an estimate of the probability of blue, find the expected number of times the spinner lands on blue in a further <span class="chem">175</span> spins.</p>
      stem: "<p>あるルーレットを <span class=\"chem\">250</span> 回まわしたところ、青に <span class=\"chem\">60</span> 回止まった。相対度数を青の確率の推定値として用いて、さらに <span class=\"chem\">175</span> 回まわすときに青に止まる回数の期待値を求めなさい (Find)。</p>",
      hints: [
        // EN: Relative frequency = number of times blue / number of spins.
        "相対度数 = 青に止まった回数 / まわした回数。",
        // EN: Expected number of occurrences = n × P(blue).
        "起こる回数の期待値 = n × P(blue)。",
      ],
      // EN: <p>Estimated <span class="chem">P(blue) = 60/250 = 0.24</span> <b>[A1]</b>.<br>Expected number <span class="chem">= 175 × 0.24 = 42</span> <b>[A1]</b>.</p>
      solution: "<p>推定値 <span class=\"chem\">P(blue) = 60/250 = 0.24</span> <b>[A1]</b>。<br>回数の期待値 <span class=\"chem\">= 175 × 0.24 = 42</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q035 · short · exam · SL · SL 4.6, 4.11 · 7 marks
    "t4-2-q035": {
      // EN: <p>A box contains <span class="chem">5</span> red pens and <span class="chem">3</span> green pens. Two pens are taken at random, one after the other, without replacement.<br>(a) Show that the probability that both pens are the same colour is <span class="chem">13/28</span>. <strong>[3 marks]</strong><br>(b) Given that both pens are the same colour, find the probability that both are red. <strong>[2 marks]</strong><br>(c) Given that at least one pen is green, find the probability that both are green. <strong>[2 marks]</strong></p>
      stem: "<p>箱の中に赤いペンが <span class=\"chem\">5</span> 本、緑のペンが <span class=\"chem\">3</span> 本入っている。ペンを 1 本ずつ続けて 2 本、無作為に戻さずに取り出す。<br>(a) 2 本のペンが同じ色である確率が <span class=\"chem\">13/28</span> であることを示しなさい (Show that)。 <strong>[3 marks]</strong><br>(b) 2 本が同じ色であるとき、2 本とも赤である確率を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) 少なくとも 1 本が緑であるとき、2 本とも緑である確率を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Draw a tree. On the second draw there are only 7 pens left.
        "樹形図をかきましょう。2 回目に取り出すときは、ペンは 7 本しか残っていません。",
        // EN: In (b), "both red" is already inside "same colour", so the intersection is just P(RR).
        "(b) では、「2 本とも赤」はすでに「同じ色」に含まれているので、共通部分は P(RR) そのものです。",
        // EN: In (c), "at least one green" is the complement of "both red".
        "(c) では、「少なくとも 1 本が緑」は「2 本とも赤」の余事象です。",
      ],
      // EN: <p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span> and <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>, so <span class="chem">P(same) = 26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = P(RR)/P(same) = 20/26 = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - P(RR) = 36/56</span>. Both green is inside this event, so <span class="chem">P(GG | at least one G) = (6/56)/(36/56) = 1/6</span>.</p>
      solution: "<p>(a) <span class=\"chem\">P(RR) = (5/8)(4/7) = 20/56</span>、<span class=\"chem\">P(GG) = (3/8)(2/7) = 6/56</span> なので <span class=\"chem\">P(same) = 26/56 = 13/28</span>。<br>(b) <span class=\"chem\">P(RR | same) = P(RR)/P(same) = 20/26 = 10/13</span>。<br>(c) <span class=\"chem\">P(at least one G) = 1 - P(RR) = 36/56</span>。「2 本とも緑」はこの事象に含まれるので、<span class=\"chem\">P(GG | at least one G) = (6/56)/(36/56) = 1/6</span>。</p>",
      // EN: <p>(a) <span class="chem">P(RR) = (5/8)(4/7) = 20/56</span>, <span class="chem">P(GG) = (3/8)(2/7) = 6/56</span>; sum <span class="chem">26/56 = 13/28</span>.<br>(b) <span class="chem">P(RR | same) = (20/56)/(26/56) = 10/13</span>.<br>(c) <span class="chem">P(at least one G) = 1 - 20/56 = 36/56</span>, so <span class="chem">P(GG | at least one G) = 6/36 = 1/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(RR) = (5/8)(4/7) = 20/56</span>、<span class=\"chem\">P(GG) = (3/8)(2/7) = 6/56</span>；和は <span class=\"chem\">26/56 = 13/28</span>。<br>(b) <span class=\"chem\">P(RR | same) = (20/56)/(26/56) = 10/13</span>。<br>(c) <span class=\"chem\">P(at least one G) = 1 - 20/56 = 36/56</span> なので、<span class=\"chem\">P(GG | at least one G) = 6/36 = 1/6</span>。</p>",
      markscheme: [
        // EN: M1: (a) Multiplies along branches without replacement, e.g. (5/8)(4/7) or (3/8)(2/7).
        "M1：(a) 戻さない取り出しで枝に沿って掛ける。例：(5/8)(4/7) または (3/8)(2/7)。",
        // EN: A1: (a) P(RR) = 20/56 and P(GG) = 6/56.
        "A1：(a) P(RR) = 20/56、P(GG) = 6/56。",
        // EN: A1: (a) Adds to 26/56 = 13/28 (AG).
        "A1：(a) 足して 26/56 = 13/28 (AG)。",
        // EN: M1: (b) Uses P(RR ∩ same)/P(same) with P(RR ∩ same) = P(RR).
        "M1：(b) P(RR ∩ same) = P(RR) として P(RR ∩ same)/P(same) を使う。",
        // EN: A1: (b) 10/13.
        "A1：(b) 10/13。",
        // EN: M1: (c) Finds P(at least one green) = 1 − 20/56 = 36/56 and divides P(GG) by it.
        "M1：(c) P(at least one green) = 1 − 20/56 = 36/56 を求め、P(GG) をそれで割る。",
        // EN: A1: (c) 1/6.
        "A1：(c) 1/6。",
      ],
    },

    // ── t4-2-q036 · numeric · exam · SL · SL 4.9 · 2 marks
    "t4-2-q036": {
      // EN: <p>The lengths <span class="chem">L</span> cm of cucumbers from a farm are normally distributed with mean <span class="chem">32.4</span> cm and standard deviation <span class="chem">1.8</span> cm. Find the probability that a randomly chosen cucumber has a length between <span class="chem">30</span> cm and <span class="chem">35</span> cm.</p>
      stem: "<p>ある農場のキュウリの長さ <span class=\"chem\">L</span> cm は、平均 <span class=\"chem\">32.4</span> cm、標準偏差 <span class=\"chem\">1.8</span> cm の正規分布に従う。無作為に選んだキュウリの長さが <span class=\"chem\">30</span> cm と <span class=\"chem\">35</span> cm の間にある確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the probability as <span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span>.
        "<span class=\"chem\">L ~ N(32.4, 1.8^2)</span> として、確率を <span class=\"chem\">P(30 &lt; L &lt; 35)</span> と表します。",
        // EN: Use the normal cdf on your GDC with lower bound 30, upper bound 35, μ = 32.4 and σ = 1.8.
        "GDC の正規分布 cdf を、下端 30、上端 35、μ = 32.4、σ = 1.8 で使います。",
      ],
      // EN: <p><span class="chem">P(30 &lt; L &lt; 35)</span> with <span class="chem">L ~ N(32.4, 1.8^2)</span> <b>[M1]</b>.<br>GDC (normal cdf, lower 30, upper 35, μ = 32.4, σ = 1.8): <span class="chem">0.834482… ≈ 0.834</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">L ~ N(32.4, 1.8^2)</span> として <span class=\"chem\">P(30 &lt; L &lt; 35)</span> <b>[M1]</b>。<br>GDC（正規分布 cdf、下端 30、上端 35、μ = 32.4、σ = 1.8）：<span class=\"chem\">0.834482… ≈ 0.834</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q037 · numeric · exam · SL · SL 4.12 · 4 marks
    "t4-2-q037": {
      // EN: <p>A machine fills bottles with water. The volume in a bottle is normally distributed with mean <span class="chem">500</span> ml. Records show that <span class="chem">8%</span> of bottles contain less than <span class="chem">490</span> ml. Find the standard deviation of the volume.</p>
      stem: "<p>ある機械がボトルに水を詰める。ボトル内の水の量は平均 <span class=\"chem\">500</span> ml の正規分布に従う。記録によると、ボトルの <span class=\"chem\">8%</span> は水の量が <span class=\"chem\">490</span> ml 未満である。水の量の標準偏差を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: σ is unknown, so you cannot use the inverse normal with the original distribution. Standardise instead.
        "解読：σ が未知なので、元の分布のままでは逆正規分布の計算を使えません。代わりに標準化します。",
        // EN: Find z with <span class="chem">P(Z &lt; z) = 0.08</span> from the inverse normal on <span class="chem">N(0, 1)</span>.
        "<span class=\"chem\">N(0, 1)</span> の逆正規分布から、<span class=\"chem\">P(Z &lt; z) = 0.08</span> となる z を求めます。",
        // EN: Solve <span class="chem">(490 - 500)/σ = z</span> for σ.
        "<span class=\"chem\">(490 - 500)/σ = z</span> を σ について解きます。",
      ],
      // EN: <p><span class="chem">P(V &lt; 490) = 0.08 ⇒ P(Z &lt; (490 - 500)/σ) = 0.08</span> <b>[M1]</b>.<br>Inverse normal: <span class="chem">z = -1.40507…</span> <b>[A1]</b>.<br><span class="chem">-10/σ = -1.40507 ⇒ σ = 10/1.40507</span> <b>[M1]</b> <span class="chem">= 7.117… ≈ 7.12</span> ml <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(V &lt; 490) = 0.08 ⇒ P(Z &lt; (490 - 500)/σ) = 0.08</span> <b>[M1]</b>。<br>逆正規分布：<span class=\"chem\">z = -1.40507…</span> <b>[A1]</b>。<br><span class=\"chem\">-10/σ = -1.40507 ⇒ σ = 10/1.40507</span> <b>[M1]</b> <span class=\"chem\">= 7.117… ≈ 7.12</span> ml <b>[A1]</b>。</p>",
    },

    // ── t4-2-q038 · short · exam · SL · SL 4.9, 4.12 · 7 marks
    "t4-2-q038": {
      // EN: <p>The time <span class="chem">T</span> seconds that a robot arm takes to complete a task is normally distributed with mean <span class="chem">μ</span> and standard deviation <span class="chem">σ</span>. On <span class="chem">15%</span> of occasions it takes less than <span class="chem">12.0</span> s, and on <span class="chem">10%</span> of occasions it takes more than <span class="chem">14.5</span> s.<br>(a) Write down two equations in <span class="chem">μ</span> and <span class="chem">σ</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">μ</span> and the value of <span class="chem">σ</span>. <strong>[3 marks]</strong><br>(c) Find <span class="chem">P(T &lt; 13)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>ロボットアームが作業を終えるのにかかる時間 <span class=\"chem\">T</span> 秒は、平均 <span class=\"chem\">μ</span>、標準偏差 <span class=\"chem\">σ</span> の正規分布に従う。<span class=\"chem\">15%</span> の場合で <span class=\"chem\">12.0</span> s 未満、<span class=\"chem\">10%</span> の場合で <span class=\"chem\">14.5</span> s を超える時間がかかる。<br>(a) <span class=\"chem\">μ</span> と <span class=\"chem\">σ</span> についての方程式を 2 つ書きなさい (Write down)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">μ</span> の値と <span class=\"chem\">σ</span> の値を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">P(T &lt; 13)</span> を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: both μ and σ are unknown, so turn each percentage into a z-score on N(0, 1) and form two equations of the form (x − μ)/σ = z.
        "解読：μ も σ も未知なので、それぞれの百分率を N(0, 1) の z 値に直し、(x − μ)/σ = z の形の方程式を 2 つ作ります。",
        // EN: "More than 14.5 s on 10% of occasions" means P(T &lt; 14.5) = 0.90.
        "「10% の場合で 14.5 s を超える」は P(T &lt; 14.5) = 0.90 を意味します。",
        // EN: Subtract one equation from the other to eliminate μ. Keep full GDC precision for part (c).
        "一方の方程式からもう一方を引いて μ を消去します。(c) では GDC の値を丸めずに使いましょう。",
      ],
      // EN: <p>(a) <span class="chem">P(Z &lt; z_1) = 0.15 ⇒ z_1 = -1.036433</span> and <span class="chem">P(Z &lt; z_2) = 0.90 ⇒ z_2 = 1.281552</span>, so <span class="chem">12 - μ = -1.036433σ</span> and <span class="chem">14.5 - μ = 1.281552σ</span>.<br>(b) Subtracting: <span class="chem">2.5 = 2.317985σ ⇒ σ = 1.078523</span>, then <span class="chem">μ = 12 + 1.036433(1.078523) = 13.117817</span>. So <span class="chem">μ ≈ 13.1</span> s, <span class="chem">σ ≈ 1.08</span> s.<br>(c) Normal cdf with upper bound 13: <span class="chem">P(T &lt; 13) = 0.456506 ≈ 0.457</span>. (Using the rounded values 13.1 and 1.08 gives 0.463, which loses the final mark.)</p>
      solution: "<p>(a) <span class=\"chem\">P(Z &lt; z_1) = 0.15 ⇒ z_1 = -1.036433</span>、<span class=\"chem\">P(Z &lt; z_2) = 0.90 ⇒ z_2 = 1.281552</span> なので、<span class=\"chem\">12 - μ = -1.036433σ</span>、<span class=\"chem\">14.5 - μ = 1.281552σ</span>。<br>(b) 引き算すると <span class=\"chem\">2.5 = 2.317985σ ⇒ σ = 1.078523</span>、次に <span class=\"chem\">μ = 12 + 1.036433(1.078523) = 13.117817</span>。よって <span class=\"chem\">μ ≈ 13.1</span> s、<span class=\"chem\">σ ≈ 1.08</span> s。<br>(c) 上端 13 の正規分布 cdf：<span class=\"chem\">P(T &lt; 13) = 0.456506 ≈ 0.457</span>。（丸めた値 13.1 と 1.08 を使うと 0.463 となり、最後の得点を失います。）</p>",
      // EN: <p>(a) <span class="chem">(12 - μ)/σ = -1.03643</span> and <span class="chem">(14.5 - μ)/σ = 1.28155</span>.<br>(b) <span class="chem">σ = 1.07852… ≈ 1.08</span> s and <span class="chem">μ = 13.1178… ≈ 13.1</span> s.<br>(c) <span class="chem">P(T &lt; 13) = 0.457</span> (0.456506…).</p>
      answer: "<p>(a) <span class=\"chem\">(12 - μ)/σ = -1.03643</span>、<span class=\"chem\">(14.5 - μ)/σ = 1.28155</span>。<br>(b) <span class=\"chem\">σ = 1.07852… ≈ 1.08</span> s、<span class=\"chem\">μ = 13.1178… ≈ 13.1</span> s。<br>(c) <span class=\"chem\">P(T &lt; 13) = 0.457</span>（0.456506…）。</p>",
      markscheme: [
        // EN: A1: (a) (12 − μ)/σ = −1.03643 (from the inverse normal of 0.15).
        "A1：(a) (12 − μ)/σ = −1.03643（0.15 の逆正規分布から）。",
        // EN: A1: (a) (14.5 − μ)/σ = 1.28155 (from the inverse normal of 0.90).
        "A1：(a) (14.5 − μ)/σ = 1.28155（0.90 の逆正規分布から）。",
        // EN: M1: (b) Solves the two linear equations simultaneously, e.g. 2.5 = (1.28155 + 1.03643)σ.
        "M1：(b) 2 つの 1 次方程式を連立して解く。例：2.5 = (1.28155 + 1.03643)σ。",
        // EN: A1: (b) σ = 1.08 (1.07852…).
        "A1：(b) σ = 1.08（1.07852…）。",
        // EN: A1: (b) μ = 13.1 (13.1178…).
        "A1：(b) μ = 13.1（13.1178…）。",
        // EN: M1: (c) Uses the normal cdf with the unrounded μ and σ.
        "M1：(c) 丸めていない μ と σ で正規分布 cdf を使う。",
        // EN: A1: (c) P(T < 13) = 0.457 (0.456506…).
        "A1：(c) P(T < 13) = 0.457（0.456506…）。",
      ],
    },

    // ── t4-2-q039 · numeric · challenge · SL · SL 4.12 · 4 marks
    "t4-2-q039": {
      // EN: <p>Bags of rice are labelled "<span class="chem">250</span> g". The filling machine produces masses that are normally distributed with a <strong>variance</strong> of <span class="chem">16</span> g², and its mean setting <span class="chem">μ</span> can be adjusted. A consumer rule says that no more than <span class="chem">2%</span> of bags may weigh less than the labelled mass. Find the smallest value of <span class="chem">μ</span> that satisfies the rule.</p>
      stem: "<p>袋入りの米に「<span class=\"chem\">250</span> g」と表示されている。充填機が詰める米の質量は<strong>分散</strong> <span class=\"chem\">16</span> g² の正規分布に従い、平均の設定値 <span class=\"chem\">μ</span> は調整できる。消費者規則により、表示質量に満たない袋は <span class=\"chem\">2%</span> 以下でなければならない。この規則を満たす <span class=\"chem\">μ</span> の最小値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the unknown is the mean. Two hidden details: the variance is given (so σ = 4, not 16), and "no more than 2%" means P(M &lt; 250) ≤ 0.02.
        "解読：未知数は平均です。隠れた点が 2 つあります：与えられているのは分散なので σ = 4（16 ではない）であること、そして「2% 以下」は P(M &lt; 250) ≤ 0.02 を意味することです。",
        // EN: Standardise: P(Z &lt; (250 − μ)/4) = 0.02 gives the boundary value of μ.
        "標準化します：P(Z &lt; (250 − μ)/4) = 0.02 から μ の境界値が得られます。",
        // EN: Inverse normal of 0.02 on N(0, 1) is about −2.0537. A larger μ makes the underweight tail smaller.
        "N(0, 1) での 0.02 の逆正規分布の値は約 −2.0537 です。μ を大きくするほど、軽すぎる側の裾は小さくなります。",
      ],
      // EN: <p><b>Decode:</b> <span class="chem">σ = sqrt(16) = 4</span>, and we need <span class="chem">P(M &lt; 250) ≤ 0.02</span> with <span class="chem">μ</span> unknown <b>[M1]</b>.<br>Boundary case: <span class="chem">(250 - μ)/4 = z</span> where <span class="chem">P(Z &lt; z) = 0.02 ⇒ z = -2.053749</span> <b>[A1]</b>.<br><span class="chem">μ = 250 + 4(2.053749) = 258.215</span> <b>[M1]</b>.<br>Increasing <span class="chem">μ</span> shrinks the tail below 250 g, so the smallest mean is <span class="chem">μ ≈ 258</span> g (258.21…) <b>[A1]</b>.<br>Note: 258 is the 3 s.f. answer the markscheme expects, but a machine actually set to exactly 258 g would give <span class="chem">P(M &lt; 250) = 0.0228</span>, just over 2%. In practice the setting must be rounded up (for example to 258.3 g).</p>
      solution: "<p><b>解読：</b><span class=\"chem\">σ = sqrt(16) = 4</span> で、<span class=\"chem\">μ</span> が未知のまま <span class=\"chem\">P(M &lt; 250) ≤ 0.02</span> とする必要があります <b>[M1]</b>。<br>境界の場合：<span class=\"chem\">(250 - μ)/4 = z</span>、ただし <span class=\"chem\">P(Z &lt; z) = 0.02 ⇒ z = -2.053749</span> <b>[A1]</b>。<br><span class=\"chem\">μ = 250 + 4(2.053749) = 258.215</span> <b>[M1]</b>。<br><span class=\"chem\">μ</span> を大きくすると 250 g 未満の裾が小さくなるので、平均の最小値は <span class=\"chem\">μ ≈ 258</span> g（258.21…）です <b>[A1]</b>。<br>注意：258 は採点基準が求める有効数字 3 桁の答えですが、機械を実際にちょうど 258 g に設定すると <span class=\"chem\">P(M &lt; 250) = 0.0228</span> となり、2% をわずかに超えます。実際には設定値を切り上げる必要があります（例えば 258.3 g）。</p>",
    },

    // ── t4-2-q040 · numeric · exam · SL · SL 4.8 · 3 marks
    "t4-2-q040": {
      // EN: <p>For a certain variety of sweet pea, <span class="chem">15%</span> of seeds produce white flowers, independently of each other. A gardener plants <span class="chem">20</span> seeds and all of them flower. Find the probability that at least <span class="chem">2</span> but no more than <span class="chem">5</span> of the plants have white flowers.</p>
      stem: "<p>ある品種のスイートピーでは、種子の <span class=\"chem\">15%</span> が互いに独立に白い花を咲かせる。庭師が種子を <span class=\"chem\">20</span> 個まき、そのすべてが花を咲かせた。白い花を咲かせた株が少なくとも <span class=\"chem\">2</span> 株、多くとも <span class=\"chem\">5</span> 株である確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Let <span class="chem">X ~ B(20, 0.15)</span>. "At least 2 but no more than 5" is <span class="chem">2 ≤ X ≤ 5</span>.
        "<span class=\"chem\">X ~ B(20, 0.15)</span> とします。「少なくとも 2 株、多くとも 5 株」は <span class=\"chem\">2 ≤ X ≤ 5</span> です。",
        // EN: With a cumulative binomial: <span class="chem">P(X ≤ 5) - P(X ≤ 1)</span>.
        "累積二項分布を使って <span class=\"chem\">P(X ≤ 5) - P(X ≤ 1)</span> を計算します。",
      ],
      // EN: <p><span class="chem">X ~ B(20, 0.15)</span> <b>[M1]</b>.<br><span class="chem">P(2 ≤ X ≤ 5) = P(X ≤ 5) - P(X ≤ 1) = 0.932692 - 0.175558</span> <b>[M1]</b> <span class="chem">= 0.757134 ≈ 0.757</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">X ~ B(20, 0.15)</span> <b>[M1]</b>。<br><span class=\"chem\">P(2 ≤ X ≤ 5) = P(X ≤ 5) - P(X ≤ 1) = 0.932692 - 0.175558</span> <b>[M1]</b> <span class=\"chem\">= 0.757134 ≈ 0.757</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q041 · short · exam · SL · SL 4.8 · 7 marks
    "t4-2-q041": {
      // EN: <p>A quiz has <span class="chem">12</span> multiple-choice questions, each with <span class="chem">4</span> options of which exactly one is correct. Sam guesses every answer at random. Let <span class="chem">X</span> be the number of questions Sam answers correctly.<br>(a) Write down <span class="chem">E(X)</span>. <strong>[1 mark]</strong><br>(b) Find <span class="chem">P(X = 3)</span>. <strong>[2 marks]</strong><br>(c) The pass mark is <span class="chem">6</span>. Find the probability that Sam passes. <strong>[2 marks]</strong><br>(d) Find the probability that Sam scores more than his expected score. <strong>[2 marks]</strong></p>
      stem: "<p>あるクイズには <span class=\"chem\">12</span> 問の多肢選択問題があり、各問に <span class=\"chem\">4</span> つの選択肢があって、そのうちちょうど 1 つが正解である。Sam はすべての問題を無作為に当てずっぽうで答える。<span class=\"chem\">X</span> を Sam が正解した問題の数とする。<br>(a) <span class=\"chem\">E(X)</span> を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">P(X = 3)</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) 合格点は <span class=\"chem\">6</span> である。Sam が合格する確率を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) Sam の得点が得点の期待値を超える確率を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Each question is an independent trial with p = 1/4, so X ~ B(12, 0.25).
        "各問は p = 1/4 の独立な試行なので、X ~ B(12, 0.25) です。",
        // EN: For "at least 6", the cumulative function gives P(X ≤ 5); subtract it from 1.
        "「6 以上」では、累積分布関数で P(X ≤ 5) を求め、1 から引きます。",
        // EN: "More than his expected score" means X &gt; 3, that is X ≥ 4.
        "「得点の期待値を超える」とは X &gt; 3、つまり X ≥ 4 のことです。",
      ],
      // EN: <p>(a) <span class="chem">E(X) = np = 12(0.25) = 3</span>.<br>(b) Binomial pdf: <span class="chem">P(X = 3) = ¹²C₃ (0.25)^3 (0.75)^9 = 0.258104 ≈ 0.258</span>.<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 1 - 0.945598 = 0.0544</span>.<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 1 - 0.648779 = 0.351</span>.</p>
      solution: "<p>(a) <span class=\"chem\">E(X) = np = 12(0.25) = 3</span>。<br>(b) 二項分布の pdf：<span class=\"chem\">P(X = 3) = ¹²C₃ (0.25)^3 (0.75)^9 = 0.258104 ≈ 0.258</span>。<br>(c) <span class=\"chem\">P(X ≥ 6) = 1 - P(X ≤ 5) = 1 - 0.945598 = 0.0544</span>。<br>(d) <span class=\"chem\">P(X &gt; 3) = 1 - P(X ≤ 3) = 1 - 0.648779 = 0.351</span>。</p>",
      // EN: <p>(a) <span class="chem">E(X) = 12 × 0.25 = 3</span>.<br>(b) <span class="chem">P(X = 3) = 0.258</span> (0.258104…).<br>(c) <span class="chem">P(X ≥ 6) = 1 - P(X ≤ 5) = 0.0544</span> (0.054402…).<br>(d) <span class="chem">P(X &gt; 3) = 1 - P(X ≤ 3) = 0.351</span> (0.351221…).</p>
      answer: "<p>(a) <span class=\"chem\">E(X) = 12 × 0.25 = 3</span>。<br>(b) <span class=\"chem\">P(X = 3) = 0.258</span>（0.258104…）。<br>(c) <span class=\"chem\">P(X ≥ 6) = 1 - P(X ≤ 5) = 0.0544</span>（0.054402…）。<br>(d) <span class=\"chem\">P(X &gt; 3) = 1 - P(X ≤ 3) = 0.351</span>（0.351221…）。</p>",
      markscheme: [
        // EN: A1: (a) E(X) = 3.
        "A1：(a) E(X) = 3。",
        // EN: M1: (b) Recognises X ~ B(12, 0.25) and uses the binomial pdf.
        "M1：(b) X ~ B(12, 0.25) であることを認識し、二項分布の pdf を使う。",
        // EN: A1: (b) 0.258.
        "A1：(b) 0.258。",
        // EN: M1: (c) Writes P(X ≥ 6) = 1 − P(X ≤ 5).
        "M1：(c) P(X ≥ 6) = 1 − P(X ≤ 5) と書く。",
        // EN: A1: (c) 0.0544.
        "A1：(c) 0.0544。",
        // EN: M1: (d) Writes P(X > 3) = 1 − P(X ≤ 3) (not 1 − P(X ≤ 4)).
        "M1：(d) P(X > 3) = 1 − P(X ≤ 3) と書く（1 − P(X ≤ 4) ではない）。",
        // EN: A1: (d) 0.351.
        "A1：(d) 0.351。",
      ],
    },

    // ── t4-2-q042 · numeric · challenge · SL · SL 4.8 · 5 marks
    "t4-2-q042": {
      // EN: <p>Each component made on a production line has a <span class="chem">12%</span> chance of having a flaw, independently of the others. An inspector wants to pick a sample large enough that the probability of finding <strong>at least two</strong> flawed components is greater than <span class="chem">0.9</span>. Find the smallest sample size that achieves this.</p>
      stem: "<p>ある生産ラインで作られる部品は、それぞれ他と独立に <span class=\"chem\">12%</span> の確率で欠陥がある。検査員は、欠陥部品を<strong>少なくとも 2 個</strong>見つける確率が <span class=\"chem\">0.9</span> より大きくなるような十分大きな標本をとりたい。これを達成する最小の標本の大きさを求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the unknown is n in X ~ B(n, 0.12), and "at least two" means P(X ≥ 2) = 1 − P(X = 0) − P(X = 1). Unlike "at least one", this does not reduce to a single logarithm.
        "解読：未知数は X ~ B(n, 0.12) の n で、「少なくとも 2 個」は P(X ≥ 2) = 1 − P(X = 0) − P(X = 1) を意味します。「少なくとも 1 個」の場合と違い、これは 1 回の対数計算にはなりません。",
        // EN: Write 1 − 0.88ⁿ − 0.12n(0.88)ⁿ⁻¹ &gt; 0.9 and use a GDC table (or graph) of this expression against n.
        "1 − 0.88ⁿ − 0.12n(0.88)ⁿ⁻¹ &gt; 0.9 と書き、この式の値を n に対して GDC の表（またはグラフ）で調べます。",
        // EN: Check the two neighbouring values of n either side of 0.9 and give the first one that exceeds it.
        "0.9 をはさむ隣り合う 2 つの n の値を確認し、初めてそれを超える値を答えます。",
      ],
      // EN: <p><b>Decode:</b> find the least <span class="chem">n</span> with <span class="chem">P(X ≥ 2) &gt; 0.9</span> where <span class="chem">X ~ B(n, 0.12)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 2) = 1 - 0.88^n - 0.12n(0.88)^{n-1}</span> <b>[A1]</b>.<br>From a GDC table: <span class="chem">n = 30</span> gives <span class="chem">0.890</span> <b>[A1]</b>; <span class="chem">n = 31</span> gives <span class="chem">0.901</span> <b>[A1]</b>.<br>So the smallest sample size is <span class="chem">n = 31</span> <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b><span class=\"chem\">X ~ B(n, 0.12)</span> として、<span class=\"chem\">P(X ≥ 2) &gt; 0.9</span> となる最小の <span class=\"chem\">n</span> を求めます <b>[M1]</b>。<br><span class=\"chem\">P(X ≥ 2) = 1 - 0.88^n - 0.12n(0.88)^{n-1}</span> <b>[A1]</b>。<br>GDC の表より：<span class=\"chem\">n = 30</span> で <span class=\"chem\">0.890</span> <b>[A1]</b>、<span class=\"chem\">n = 31</span> で <span class=\"chem\">0.901</span> <b>[A1]</b>。<br>よって最小の標本の大きさは <span class=\"chem\">n = 31</span> です <b>[A1]</b>。</p>",
    },

    // ── t4-2-q043 · short · challenge · SL · SL 4.8, 4.9, 4.11 · 8 marks
    "t4-2-q043": {
      // EN: <p>The masses of hens' eggs from a farm are normally distributed with mean <span class="chem">62</span> g and standard deviation <span class="chem">4.5</span> g. An egg is graded "large" if its mass exceeds <span class="chem">66</span> g. Eggs are packed at random in boxes of <span class="chem">12</span>.<br>(a) Find the probability that a randomly chosen egg is large. <strong>[2 marks]</strong><br>(b) Find the probability that a box contains at least <span class="chem">3</span> large eggs. <strong>[3 marks]</strong><br>(c) A box is known to contain at least <span class="chem">3</span> large eggs. Find the probability that it contains exactly <span class="chem">3</span> large eggs. <strong>[3 marks]</strong></p>
      stem: "<p>ある農場の鶏卵の質量は、平均 <span class=\"chem\">62</span> g、標準偏差 <span class=\"chem\">4.5</span> g の正規分布に従う。質量が <span class=\"chem\">66</span> g を超える卵は「大」に格付けされる。卵は無作為に <span class=\"chem\">12</span> 個ずつ箱に詰められる。<br>(a) 無作為に選んだ卵が「大」である確率を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 箱に「大」の卵が少なくとも <span class=\"chem\">3</span> 個入っている確率を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) ある箱に「大」の卵が少なくとも <span class=\"chem\">3</span> 個入っていることがわかっている。その箱に「大」の卵がちょうど <span class=\"chem\">3</span> 個入っている確率を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two distributions are hidden here. A single egg mass is normal; the NUMBER of large eggs in a box is binomial with p from the normal step. Part (c) is a conditional probability on that binomial.
        "解読：ここには 2 つの分布が隠れています。卵 1 個の質量は正規分布に従い、箱の中の「大」の卵の「個数」は、正規分布の段階で得た p をもつ二項分布に従います。(c) はその二項分布についての条件付き確率です。",
        // EN: Keep p to at least 5 significant figures before using it in B(12, p).
        "B(12, p) に使う前に、p は有効数字 5 桁以上で保持しておきましょう。",
        // EN: In (c), the event "exactly 3" is inside "at least 3", so the intersection is just P(Y = 3).
        "(c) では、事象「ちょうど 3 個」は「少なくとも 3 個」に含まれるので、共通部分は P(Y = 3) そのものです。",
      ],
      // EN: <p><b>Decode:</b> normal model for one egg → binomial model for the count in a box → conditional probability.<br>(a) <span class="chem">p = P(M &gt; 66) = 0.187031</span>.<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.395413 ≈ 0.395</span>.<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.564650 ≈ 0.565</span>.</p>
      solution: "<p><b>解読：</b>卵 1 個は正規分布モデル → 箱の中の個数は二項分布モデル → 条件付き確率。<br>(a) <span class=\"chem\">p = P(M &gt; 66) = 0.187031</span>。<br>(b) <span class=\"chem\">Y ~ B(12, 0.187031)</span>；<span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.395413 ≈ 0.395</span>。<br>(c) <span class=\"chem\">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.564650 ≈ 0.565</span>。</p>",
      // EN: <p>(a) <span class="chem">p = P(M &gt; 66) = 0.187</span> (0.187031…).<br>(b) <span class="chem">Y ~ B(12, 0.187031)</span>: <span class="chem">P(Y ≥ 3) = 0.395</span> (0.395413…).<br>(c) <span class="chem">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.565</span>.</p>
      answer: "<p>(a) <span class=\"chem\">p = P(M &gt; 66) = 0.187</span>（0.187031…）。<br>(b) <span class=\"chem\">Y ~ B(12, 0.187031)</span>：<span class=\"chem\">P(Y ≥ 3) = 0.395</span>（0.395413…）。<br>(c) <span class=\"chem\">P(Y = 3 | Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) = 0.223270/0.395413 = 0.565</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses the normal cdf for P(M > 66) with M ~ N(62, 4.5²).
        "M1：(a) M ~ N(62, 4.5²) として P(M > 66) に正規分布 cdf を使う。",
        // EN: A1: (a) 0.187 (0.187031…).
        "A1：(a) 0.187（0.187031…）。",
        // EN: M1: (b) Recognises Y ~ B(12, p) with p from (a).
        "M1：(b) (a) の p を用いて Y ~ B(12, p) であることを認識する。",
        // EN: M1: (b) Writes P(Y ≥ 3) = 1 − P(Y ≤ 2).
        "M1：(b) P(Y ≥ 3) = 1 − P(Y ≤ 2) と書く。",
        // EN: A1: (b) 0.395 (0.395413…).
        "A1：(b) 0.395（0.395413…）。",
        // EN: M1: (c) Uses P(Y = 3 ∩ Y ≥ 3)/P(Y ≥ 3) = P(Y = 3)/P(Y ≥ 3).
        "M1：(c) P(Y = 3 ∩ Y ≥ 3)/P(Y ≥ 3) = P(Y = 3)/P(Y ≥ 3) を使う。",
        // EN: A1: (c) P(Y = 3) = 0.223 (0.223270…).
        "A1：(c) P(Y = 3) = 0.223（0.223270…）。",
        // EN: A1: (c) 0.565 (accept 0.564 to 0.565).
        "A1：(c) 0.565（0.564 から 0.565 を許容）。",
      ],
    },

    // ── t4-2-q044 · numeric · exam · SL · SL 4.9, 4.11 · 4 marks
    "t4-2-q044": {
      // EN: <p>The heights of adult men in a country are normally distributed with mean <span class="chem">170</span> cm and standard deviation <span class="chem">8</span> cm. A man is chosen at random and is found to be taller than <span class="chem">180</span> cm. Find the probability that he is taller than <span class="chem">185</span> cm.</p>
      stem: "<p>ある国の成人男性の身長は、平均 <span class=\"chem\">170</span> cm、標準偏差 <span class=\"chem\">8</span> cm の正規分布に従う。無作為に選んだ男性の身長が <span class=\"chem\">180</span> cm より高いことがわかった。この男性の身長が <span class=\"chem\">185</span> cm より高い確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "is found to be taller than 180 cm" is the condition. You want P(H &gt; 185 | H &gt; 180).
        "解読：「180 cm より高いことがわかった」が条件です。求めるのは P(H &gt; 185 | H &gt; 180) です。",
        // EN: The event H &gt; 185 is inside H &gt; 180, so the intersection is just P(H &gt; 185).
        "事象 H &gt; 185 は H &gt; 180 に含まれるので、共通部分は P(H &gt; 185) そのものです。",
        // EN: Divide P(H &gt; 185) by P(H &gt; 180), both from the normal cdf.
        "P(H &gt; 185) を P(H &gt; 180) で割ります。どちらも正規分布 cdf で求めます。",
      ],
      // EN: <p><span class="chem">P(H &gt; 185 | H &gt; 180) = P(H &gt; 185)/P(H &gt; 180)</span> <b>[M1]</b>.<br><span class="chem">P(H &gt; 185) = 0.0303964</span> <b>[A1]</b>, <span class="chem">P(H &gt; 180) = 0.105650</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.287709 ≈ 0.288</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(H &gt; 185 | H &gt; 180) = P(H &gt; 185)/P(H &gt; 180)</span> <b>[M1]</b>。<br><span class=\"chem\">P(H &gt; 185) = 0.0303964</span> <b>[A1]</b>、<span class=\"chem\">P(H &gt; 180) = 0.105650</span> <b>[A1]</b>。<br>比 <span class=\"chem\">= 0.287709 ≈ 0.288</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q045 · short · challenge · SL · SL 4.8, 4.9, 4.11 · 8 marks
    "t4-2-q045": {
      // EN: <p>The masses of oranges picked at an orchard are normally distributed with mean <span class="chem">150</span> g and standard deviation <span class="chem">20</span> g. Oranges lighter than <span class="chem">120</span> g are rejected; all others are accepted for sale. Accepted oranges heavier than <span class="chem">180</span> g are sold as "premium".<br>(a) Find the probability that an orange is rejected. <strong>[2 marks]</strong><br>(b) Find the probability that an accepted orange is premium. <strong>[3 marks]</strong><br>(c) A crate contains <span class="chem">30</span> accepted oranges chosen at random. Find the probability that at least <span class="chem">3</span> of them are premium. <strong>[3 marks]</strong></p>
      stem: "<p>ある果樹園で収穫されるオレンジの質量は、平均 <span class=\"chem\">150</span> g、標準偏差 <span class=\"chem\">20</span> g の正規分布に従う。<span class=\"chem\">120</span> g より軽いオレンジは不合格となり、それ以外はすべて販売用に合格となる。合格したオレンジのうち <span class=\"chem\">180</span> g より重いものは「プレミアム」として販売される。<br>(a) オレンジが不合格となる確率を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 合格したオレンジがプレミアムである確率を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) ある木箱には、無作為に選ばれた合格オレンジが <span class=\"chem\">30</span> 個入っている。そのうち少なくとも <span class=\"chem\">3</span> 個がプレミアムである確率を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "an accepted orange is premium" is a conditional probability: the condition is M ≥ 120. The crate in (c) contains only accepted oranges, so its success probability is the conditional one from (b).
        "解読：「合格したオレンジがプレミアムである」は条件付き確率で、条件は M ≥ 120 です。(c) の木箱には合格したオレンジしか入っていないので、成功確率は (b) の条件付き確率です。",
        // EN: 120 and 180 are each 30 g from the mean, so P(M &gt; 180) = P(M &lt; 120).
        "120 と 180 はどちらも平均から 30 g 離れているので、P(M &gt; 180) = P(M &lt; 120) です。",
        // EN: In (c), use B(30, p) with p from (b) and the complement of "at most 2".
        "(c) では、(b) の p を用いた B(30, p) と、「多くとも 2 個」の余事象を使います。",
      ],
      // EN: <p><b>Decode:</b> the condition "accepted" shrinks the sample space to <span class="chem">M ≥ 120</span>; every later probability lives inside it.<br>(a) <span class="chem">P(M &lt; 120) = 0.0668072 ≈ 0.0668</span>.<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = P(M &gt; 180)/P(M ≥ 120) = 0.0668072/(1 - 0.0668072) = 0.0715899 ≈ 0.0716</span>.<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>; <span class="chem">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.364620 ≈ 0.365</span>.</p>
      solution: "<p><b>解読：</b>条件「合格」により標本空間は <span class=\"chem\">M ≥ 120</span> に縮小され、以降の確率はすべてその中で考えます。<br>(a) <span class=\"chem\">P(M &lt; 120) = 0.0668072 ≈ 0.0668</span>。<br>(b) <span class=\"chem\">P(M &gt; 180 | M ≥ 120) = P(M &gt; 180)/P(M ≥ 120) = 0.0668072/(1 - 0.0668072) = 0.0715899 ≈ 0.0716</span>。<br>(c) <span class=\"chem\">Y ~ B(30, 0.0715899)</span>；<span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2) = 0.364620 ≈ 0.365</span>。</p>",
      // EN: <p>(a) <span class="chem">P(M &lt; 120) = 0.0668</span> (0.0668072…).<br>(b) <span class="chem">P(M &gt; 180 | M ≥ 120) = 0.0668072/0.933193 = 0.0716</span> (0.0715899…).<br>(c) <span class="chem">Y ~ B(30, 0.0715899)</span>, <span class="chem">P(Y ≥ 3) = 0.365</span> (0.364620…).</p>
      answer: "<p>(a) <span class=\"chem\">P(M &lt; 120) = 0.0668</span>（0.0668072…）。<br>(b) <span class=\"chem\">P(M &gt; 180 | M ≥ 120) = 0.0668072/0.933193 = 0.0716</span>（0.0715899…）。<br>(c) <span class=\"chem\">Y ~ B(30, 0.0715899)</span>、<span class=\"chem\">P(Y ≥ 3) = 0.365</span>（0.364620…）。</p>",
      markscheme: [
        // EN: M1: (a) Uses the normal cdf for P(M < 120).
        "M1：(a) P(M < 120) に正規分布 cdf を使う。",
        // EN: A1: (a) 0.0668.
        "A1：(a) 0.0668。",
        // EN: M1: (b) Sets up P(M > 180 | M ≥ 120) = P(M > 180)/P(M ≥ 120), noting M > 180 lies inside M ≥ 120.
        "M1：(b) M > 180 が M ≥ 120 に含まれることに注意して、P(M > 180 | M ≥ 120) = P(M > 180)/P(M ≥ 120) を立てる。",
        // EN: A1: (b) Numerator 0.0668072 and denominator 0.933193 (by symmetry the numerator equals (a)).
        "A1：(b) 分子 0.0668072、分母 0.933193（対称性より分子は (a) に等しい）。",
        // EN: A1: (b) 0.0716.
        "A1：(b) 0.0716。",
        // EN: M1: (c) Recognises Y ~ B(30, p) with p from (b), not from P(M > 180).
        "M1：(c) P(M > 180) ではなく (b) の p を用いて Y ~ B(30, p) であることを認識する。",
        // EN: M1: (c) Uses P(Y ≥ 3) = 1 − P(Y ≤ 2).
        "M1：(c) P(Y ≥ 3) = 1 − P(Y ≤ 2) を使う。",
        // EN: A1: (c) 0.365 (accept 0.364 to 0.365).
        "A1：(c) 0.365（0.364 から 0.365 を許容）。",
      ],
    },

    // ── t4-2-q046 · numeric · challenge · AHL · AHL 4.13, SL 4.9 · 6 marks
    "t4-2-q046": {
      // EN: <p>A workshop cuts metal rods on three machines. Machine A makes <span class="chem">50%</span> of the rods, with lengths <span class="chem">N(50.0, 0.4^2)</span> cm; machine B makes <span class="chem">30%</span>, with lengths <span class="chem">N(50.3, 0.5^2)</span> cm; machine C makes the rest, with lengths <span class="chem">N(49.8, 0.6^2)</span> cm. A rod longer than <span class="chem">50.8</span> cm is classed as oversize. A rod chosen at random is oversize. Find the probability that it was made by machine B.</p>
      stem: "<p>ある工場では 3 台の機械で金属棒を切断している。機械 A は棒の <span class=\"chem\">50%</span> を作り、長さは <span class=\"chem\">N(50.0, 0.4^2)</span> cm である。機械 B は <span class=\"chem\">30%</span> を作り、長さは <span class=\"chem\">N(50.3, 0.5^2)</span> cm である。機械 C は残りを作り、長さは <span class=\"chem\">N(49.8, 0.6^2)</span> cm である。<span class=\"chem\">50.8</span> cm より長い棒は規格外に分類される。無作為に選んだ棒が規格外であった。それが機械 B で作られた確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you know the effect (oversize) and want the cause (machine B). That is Bayes' theorem with a three-way partition; each conditional probability P(O | machine) comes from a different normal distribution.
        "解読：結果（規格外）がわかっていて、原因（機械 B）を求めたいので、3 つに分割したベイズの定理です。各条件付き確率 P(O | machine) はそれぞれ異なる正規分布から求めます。",
        // EN: Find P(L &gt; 50.8) for each machine with the normal cdf. Machine C makes 20% of the rods.
        "各機械について正規分布 cdf で P(L &gt; 50.8) を求めます。機械 C は棒の 20% を作ります。",
        // EN: P(B | O) = 0.3 P(O | B) / [0.5 P(O | A) + 0.3 P(O | B) + 0.2 P(O | C)].
        "P(B | O) = 0.3 P(O | B) / [0.5 P(O | A) + 0.3 P(O | B) + 0.2 P(O | C)]。",
      ],
      // EN: <p><b>Decode:</b> reverse the condition with Bayes' theorem; the likelihoods are normal tail areas.<br><span class="chem">P(O | A) = 0.0227501, P(O | B) = 0.158655, P(O | C) = 0.0477904</span> <b>[M1 A1]</b>.<br><span class="chem">P(O) = 0.5(0.0227501) + 0.3(0.158655) + 0.2(0.0477904) = 0.0685297</span> <b>[M1 A1]</b>.<br><span class="chem">P(B | O) = 0.0475966/0.0685297 = 0.694539 ≈ 0.695</span> <b>[M1 A1]</b>.</p>
      solution: "<p><b>解読：</b>ベイズの定理で条件を逆にします。尤度は正規分布の裾の面積です。<br><span class=\"chem\">P(O | A) = 0.0227501, P(O | B) = 0.158655, P(O | C) = 0.0477904</span> <b>[M1 A1]</b>。<br><span class=\"chem\">P(O) = 0.5(0.0227501) + 0.3(0.158655) + 0.2(0.0477904) = 0.0685297</span> <b>[M1 A1]</b>。<br><span class=\"chem\">P(B | O) = 0.0475966/0.0685297 = 0.694539 ≈ 0.695</span> <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q047 · short · exam · AHL · AHL 4.14 · 9 marks
    "t4-2-q047": {
      // EN: <p>The time <span class="chem">X</span> hours that a phone battery lasts after a warning light comes on has probability density function <span class="chem">f(x) = kxe^{-x}</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise.<br>(a) Find the value of <span class="chem">k</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">P(1 &lt; X &lt; 2)</span>. <strong>[2 marks]</strong><br>(c) Find the median of <span class="chem">X</span>. <strong>[3 marks]</strong><br>(d) Find <span class="chem">E(X)</span>. <strong>[2 marks]</strong></p>
      stem: "<p>スマートフォンの警告ランプが点灯してから電池がもつ時間 <span class=\"chem\">X</span> 時間の確率密度関数は、<span class=\"chem\">0 ≤ x ≤ 4</span> で <span class=\"chem\">f(x) = kxe^{-x}</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<br>(a) <span class=\"chem\">k</span> の値を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2)</span> を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) <span class=\"chem\">X</span> の中央値を求めなさい (Find)。 <strong>[3 marks]</strong><br>(d) <span class=\"chem\">E(X)</span> を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: All four parts are definite integrals of f; use the numerical integration on your GDC and store k unrounded.
        "4 つの小問はどれも f の定積分です。GDC の数値積分を使い、k は丸めずに保存しておきましょう。",
        // EN: For the median, graph y = ∫_0^x kte^{−t} dt (or use a solver) and find where it equals 0.5.
        "中央値は、y = ∫_0^x kte^{−t} dt のグラフをかいて（またはソルバーを使って）、それが 0.5 になるところを求めます。",
        // EN: E(X) = ∫_0^4 x f(x) dx.
        "E(X) = ∫_0^4 x f(x) dx。",
      ],
      // EN: <p>(a) GDC: <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1/0.908422 = 1.10081 ≈ 1.10</span>. (Exactly <span class="chem">k = 1/(1 - 5e^{-4})</span>.)<br>(b) <span class="chem">∫_1^2 kxe^{-x} dx = 0.362996 ≈ 0.363</span>.<br>(c) Solve <span class="chem">∫_0^m kxe^{-x} dx = 0.5</span>: <span class="chem">m = 1.53618 ≈ 1.54</span> hours.<br>(d) <span class="chem">E(X) = ∫_0^4 kx^2 e^{-x} dx = 1.67741 ≈ 1.68</span> hours.</p>
      solution: "<p>(a) GDC：<span class=\"chem\">∫_0^4 xe^{-x} dx = 0.908422</span> なので <span class=\"chem\">k = 1/0.908422 = 1.10081 ≈ 1.10</span>。（正確には <span class=\"chem\">k = 1/(1 - 5e^{-4})</span>。）<br>(b) <span class=\"chem\">∫_1^2 kxe^{-x} dx = 0.362996 ≈ 0.363</span>。<br>(c) <span class=\"chem\">∫_0^m kxe^{-x} dx = 0.5</span> を解くと <span class=\"chem\">m = 1.53618 ≈ 1.54</span> 時間。<br>(d) <span class=\"chem\">E(X) = ∫_0^4 kx^2 e^{-x} dx = 1.67741 ≈ 1.68</span> 時間。</p>",
      // EN: <p>(a) <span class="chem">∫_0^4 xe^{-x} dx = 0.908422</span>, so <span class="chem">k = 1.10</span> (1.10081…).<br>(b) <span class="chem">P(1 &lt; X &lt; 2) = 0.363</span> (0.362996…).<br>(c) Median <span class="chem">m = 1.54</span> h (1.53618…).<br>(d) <span class="chem">E(X) = 1.68</span> h (1.67741…).</p>
      answer: "<p>(a) <span class=\"chem\">∫_0^4 xe^{-x} dx = 0.908422</span> なので <span class=\"chem\">k = 1.10</span>（1.10081…）。<br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2) = 0.363</span>（0.362996…）。<br>(c) 中央値 <span class=\"chem\">m = 1.54</span> h（1.53618…）。<br>(d) <span class=\"chem\">E(X) = 1.68</span> h（1.67741…）。</p>",
      markscheme: [
        // EN: M1: (a) Sets ∫_0^4 kxe^{−x} dx = 1.
        "M1：(a) ∫_0^4 kxe^{−x} dx = 1 とおく。",
        // EN: A1: (a) k = 1.10 (1.10081…).
        "A1：(a) k = 1.10（1.10081…）。",
        // EN: M1: (b) Writes ∫_1^2 kxe^{−x} dx with their k.
        "M1：(b) 自分の k を用いて ∫_1^2 kxe^{−x} dx と書く。",
        // EN: A1: (b) 0.363.
        "A1：(b) 0.363。",
        // EN: M1: (c) Sets ∫_0^m kxe^{−x} dx = 0.5.
        "M1：(c) ∫_0^m kxe^{−x} dx = 0.5 とおく。",
        // EN: M1: (c) Solves numerically (graph or solver) for 0 ≤ m ≤ 4.
        "M1：(c) 0 ≤ m ≤ 4 の範囲で数値的に（グラフまたはソルバーで）解く。",
        // EN: A1: (c) m = 1.54.
        "A1：(c) m = 1.54。",
        // EN: M1: (d) Writes E(X) = ∫_0^4 x · kxe^{−x} dx.
        "M1：(d) E(X) = ∫_0^4 x · kxe^{−x} dx と書く。",
        // EN: A1: (d) 1.68.
        "A1：(d) 1.68。",
      ],
    },

    // ── t4-2-q048 · numeric · challenge · AHL · AHL 4.14 · 6 marks
    "t4-2-q048": {
      // EN: <p>At a help desk, the waiting time <span class="chem">T</span> minutes never exceeds <span class="chem">10</span> minutes. For <span class="chem">0 ≤ t ≤ 10</span> the probability density of <span class="chem">T</span> is proportional to <span class="chem">e^{-0.2t}</span>, and it is zero otherwise. The manager wants to know how wide the middle half of waiting times is. Find the interquartile range of <span class="chem">T</span>.</p>
      stem: "<p>ある窓口での待ち時間 <span class=\"chem\">T</span> 分は、決して <span class=\"chem\">10</span> 分を超えない。<span class=\"chem\">0 ≤ t ≤ 10</span> で <span class=\"chem\">T</span> の確率密度は <span class=\"chem\">e^{-0.2t}</span> に比例し、それ以外では 0 である。管理者は、待ち時間の中央の半分がどれだけの幅をもつかを知りたい。<span class=\"chem\">T</span> の四分位範囲を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "proportional to e^{−0.2t}" means f(t) = ke^{−0.2t} with k found from total probability 1. "The middle half" is the interquartile range Q₃ − Q₁, so you need two quantiles of a continuous distribution.
        "解読：「e^{−0.2t} に比例する」とは f(t) = ke^{−0.2t} で、k は全確率が 1 であることから求めます。「中央の半分」は四分位範囲 Q₃ − Q₁ なので、連続分布の分位点を 2 つ求める必要があります。",
        // EN: Find k from ∫_0^{10} ke^{−0.2t} dt = 1 (k ≈ 0.2313).
        "∫_0^{10} ke^{−0.2t} dt = 1 から k を求めます（k ≈ 0.2313）。",
        // EN: Solve ∫_0^{q} ke^{−0.2t} dt = 0.25 and = 0.75 on your GDC, then subtract.
        "GDC で ∫_0^{q} ke^{−0.2t} dt = 0.25 と = 0.75 をそれぞれ解き、引き算します。",
      ],
      // EN: <p><b>Decode:</b> write <span class="chem">f(t) = ke^{-0.2t}</span> on <span class="chem">[0, 10]</span>; the IQR is <span class="chem">Q_3 - Q_1</span>.<br><span class="chem">∫_0^{10} ke^{-0.2t} dt = 1 ⇒ k = 0.231304</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_1} f(t) dt = 0.25</span>: <span class="chem">Q_1 = 1.21779</span> <b>[M1 A1]</b>.<br>Solve <span class="chem">∫_0^{Q_3} f(t) dt = 0.75</span>: <span class="chem">Q_3 = 5.22771</span> <b>[A1]</b>.<br>IQR <span class="chem">= 5.22771 - 1.21779 = 4.00992 ≈ 4.01</span> minutes <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b><span class=\"chem\">[0, 10]</span> で <span class=\"chem\">f(t) = ke^{-0.2t}</span> とおきます。四分位範囲 (IQR) は <span class=\"chem\">Q_3 - Q_1</span> です。<br><span class=\"chem\">∫_0^{10} ke^{-0.2t} dt = 1 ⇒ k = 0.231304</span> <b>[M1 A1]</b>。<br><span class=\"chem\">∫_0^{Q_1} f(t) dt = 0.25</span> を解くと <span class=\"chem\">Q_1 = 1.21779</span> <b>[M1 A1]</b>。<br><span class=\"chem\">∫_0^{Q_3} f(t) dt = 0.75</span> を解くと <span class=\"chem\">Q_3 = 5.22771</span> <b>[A1]</b>。<br>IQR <span class=\"chem\">= 5.22771 - 1.21779 = 4.00992 ≈ 4.01</span> 分 <b>[A1]</b>。</p>",
    },

    // ── t4-2-q049 · numeric · exam · AHL · AHL 4.14 · 5 marks
    "t4-2-q049": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = ke^{-x^2}</span> for <span class="chem">0 ≤ x ≤ 2</span>, and <span class="chem">f(x) = 0</span> otherwise. Find <span class="chem">Var(X)</span>.</p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数は、<span class=\"chem\">0 ≤ x ≤ 2</span> で <span class=\"chem\">f(x) = ke^{-x^2}</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<span class=\"chem\">Var(X)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: <span class="chem">e^{-x^2}</span> has no elementary antiderivative, so every integral here is done numerically on the GDC.
        "<span class=\"chem\">e^{-x^2}</span> は初等関数で表せる原始関数をもたないので、ここでの積分はすべて GDC で数値的に計算します。",
        // EN: Find k from <span class="chem">∫_0^2 ke^{-x^2} dx = 1</span>, then <span class="chem">E(X)</span> and <span class="chem">E(X^2)</span>.
        "<span class=\"chem\">∫_0^2 ke^{-x^2} dx = 1</span> から k を求め、次に <span class=\"chem\">E(X)</span> と <span class=\"chem\">E(X^2)</span> を求めます。",
        // EN: Use <span class="chem">Var(X) = E(X^2) - [E(X)]^2</span> with unrounded values.
        "丸めていない値で <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span> を使います。",
      ],
      // EN: <p><span class="chem">∫_0^2 e^{-x^2} dx = 0.882081 ⇒ k = 1.13368</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = ∫_0^2 kxe^{-x^2} dx = 0.556459</span> and <span class="chem">E(X^2) = ∫_0^2 kx^2 e^{-x^2} dx = 0.479236</span> <b>[M1 A1]</b>.<br><span class="chem">Var(X) = 0.479236 - 0.556459^2 = 0.169589 ≈ 0.170</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">∫_0^2 e^{-x^2} dx = 0.882081 ⇒ k = 1.13368</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(X) = ∫_0^2 kxe^{-x^2} dx = 0.556459</span>、<span class=\"chem\">E(X^2) = ∫_0^2 kx^2 e^{-x^2} dx = 0.479236</span> <b>[M1 A1]</b>。<br><span class=\"chem\">Var(X) = 0.479236 - 0.556459^2 = 0.169589 ≈ 0.170</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q050 · numeric · challenge · SL · SL 4.7, 4.8 · 6 marks
    "t4-2-q050": {
      // EN: <p>In a fairground game a player rolls five fair six-sided dice. If <span class="chem">Y</span> sixes appear, the player receives <span class="chem">$Y^2</span> (so two sixes pay <span class="chem">$4</span>). The organiser wants to charge a price that makes the game fair. Find this price, giving your answer in dollars to 2 decimal places.</p>
      stem: "<p>ある縁日のゲームでは、プレイヤーは公正な 6 面のさいころを 5 個投げる。6 の目が <span class=\"chem\">Y</span> 個出たら、プレイヤーは <span class=\"chem\">$Y^2</span> を受け取る（したがって 6 の目が 2 個なら <span class=\"chem\">$4</span>）。主催者はゲームが公平になる参加料を設定したい。この参加料を求めなさい (Find)。答えはドル単位で小数第 2 位まで求めること。</p>",
      hints: [
        // EN: Decode: the number of sixes is binomial, Y ~ B(5, 1/6). A fair price equals the expected payout, which here is E(Y²), not [E(Y)]².
        "解読：6 の目の個数は二項分布 Y ~ B(5, 1/6) に従います。公平な参加料は支払額の期待値に等しく、ここでは [E(Y)]² ではなく E(Y²) です。",
        // EN: Either tabulate y, P(Y = y) and y² P(Y = y) for y = 0 to 5 with the binomial pdf, or use E(Y²) = Var(Y) + [E(Y)]².
        "二項分布の pdf で y = 0 から 5 まで y、P(Y = y)、y² P(Y = y) の表を作るか、E(Y²) = Var(Y) + [E(Y)]² を使います。",
        // EN: E(Y) = 5/6 and Var(Y) = 5(1/6)(5/6) = 25/36.
        "E(Y) = 5/6、Var(Y) = 5(1/6)(5/6) = 25/36。",
      ],
      // EN: <p><b>Decode:</b> the payout is <span class="chem">Y^2</span> with <span class="chem">Y ~ B(5, 1/6)</span>; fair price = <span class="chem">E(Y^2)</span> <b>[M1]</b>.<br><span class="chem">E(Y) = 5/6</span>, <span class="chem">Var(Y) = 5(1/6)(5/6) = 25/36</span> <b>[A1 A1]</b>.<br><span class="chem">E(Y^2) = Var(Y) + [E(Y)]^2 = 25/36 + 25/36 = 50/36</span> <b>[M1 A1]</b>.<br>Fair price <span class="chem">= $1.39</span> (1.3888…) <b>[A1]</b>. (A GDC table of <span class="chem">y^2 P(Y = y)</span> gives the same total.)</p>
      solution: "<p><b>解読：</b>支払額は <span class=\"chem\">Y^2</span> で <span class=\"chem\">Y ~ B(5, 1/6)</span>；公平な参加料 = <span class=\"chem\">E(Y^2)</span> <b>[M1]</b>。<br><span class=\"chem\">E(Y) = 5/6</span>、<span class=\"chem\">Var(Y) = 5(1/6)(5/6) = 25/36</span> <b>[A1 A1]</b>。<br><span class=\"chem\">E(Y^2) = Var(Y) + [E(Y)]^2 = 25/36 + 25/36 = 50/36</span> <b>[M1 A1]</b>。<br>公平な参加料 <span class=\"chem\">= $1.39</span>（1.3888…） <b>[A1]</b>。（GDC で <span class=\"chem\">y^2 P(Y = y)</span> の表を作っても同じ合計になります。）</p>",
    },

    // ── t4-2-q051 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q051": {
      // EN: <p>The reaction times of drivers in a simulator are normally distributed with mean <span class="chem">72</span> hundredths of a second and standard deviation <span class="chem">6.5</span> hundredths of a second. Find the interquartile range of the reaction times, in hundredths of a second.</p>
      stem: "<p>シミュレーターでの運転者の反応時間は、平均 <span class=\"chem\">72</span>（100 分の 1 秒単位）、標準偏差 <span class=\"chem\">6.5</span>（100 分の 1 秒単位）の正規分布に従う。反応時間の四分位範囲を 100 分の 1 秒単位で求めなさい (Find)。</p>",
      hints: [
        // EN: The quartiles are the values with 25% and 75% of the distribution below them.
        "四分位数は、分布の 25% と 75% がそれより下にある値です。",
        // EN: Use the inverse normal with area 0.25 and 0.75 (μ = 72, σ = 6.5), then subtract.
        "面積 0.25 と 0.75 で逆正規分布（μ = 72、σ = 6.5）を使い、引き算します。",
      ],
      // EN: <p><span class="chem">Q_1 = 67.6158</span> (inverse normal, area 0.25) <b>[M1]</b> and <span class="chem">Q_3 = 76.3842</span> (area 0.75) <b>[A1]</b>.<br>IQR <span class="chem">= 76.3842 - 67.6158 = 8.77</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">Q_1 = 67.6158</span>（逆正規分布、面積 0.25） <b>[M1]</b>、<span class=\"chem\">Q_3 = 76.3842</span>（面積 0.75） <b>[A1]</b>。<br>IQR <span class=\"chem\">= 76.3842 - 67.6158 = 8.77</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q052 · numeric · exam · SL · SL 4.8, 4.11 · 4 marks
    "t4-2-q052": {
      // EN: <p>A basketball player scores from <span class="chem">25%</span> of her three-point attempts, independently. In a match she takes <span class="chem">10</span> three-point attempts and scores at least one. Find the probability that she scores at least three.</p>
      stem: "<p>あるバスケットボール選手は、3 ポイントシュートの <span class=\"chem\">25%</span> を互いに独立に成功させる。ある試合で彼女は 3 ポイントシュートを <span class=\"chem\">10</span> 本打ち、少なくとも 1 本成功させた。彼女が少なくとも 3 本成功させた確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "and scores at least one" is information you are given, so this is P(X ≥ 3 | X ≥ 1) with X ~ B(10, 0.25).
        "解読：「少なくとも 1 本成功させた」は与えられた情報なので、X ~ B(10, 0.25) として P(X ≥ 3 | X ≥ 1) を求めます。",
        // EN: X ≥ 3 lies inside X ≥ 1, so the numerator is just P(X ≥ 3).
        "X ≥ 3 は X ≥ 1 に含まれるので、分子は P(X ≥ 3) そのものです。",
        // EN: P(X ≥ 3) = 1 − P(X ≤ 2) and P(X ≥ 1) = 1 − P(X = 0).
        "P(X ≥ 3) = 1 − P(X ≤ 2)、P(X ≥ 1) = 1 − P(X = 0)。",
      ],
      // EN: <p><span class="chem">P(X ≥ 3 | X ≥ 1) = P(X ≥ 3)/P(X ≥ 1)</span> <b>[M1]</b>.<br><span class="chem">P(X ≥ 3) = 1 - 0.525593 = 0.474407</span> <b>[A1]</b>, <span class="chem">P(X ≥ 1) = 1 - 0.75^{10} = 0.943686</span> <b>[A1]</b>.<br>Ratio <span class="chem">= 0.502717 ≈ 0.503</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(X ≥ 3 | X ≥ 1) = P(X ≥ 3)/P(X ≥ 1)</span> <b>[M1]</b>。<br><span class=\"chem\">P(X ≥ 3) = 1 - 0.525593 = 0.474407</span> <b>[A1]</b>、<span class=\"chem\">P(X ≥ 1) = 1 - 0.75^{10} = 0.943686</span> <b>[A1]</b>。<br>比 <span class=\"chem\">= 0.502717 ≈ 0.503</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q053 · short · challenge · SL · SL 4.8, 4.9, 4.12 · 10 marks
    "t4-2-q053": {
      // EN: <p>A machine makes bolts whose diameters are normally distributed with mean <span class="chem">μ</span> mm and standard deviation <span class="chem">σ</span> mm. A bolt is rejected if its diameter is less than <span class="chem">9.9</span> mm or more than <span class="chem">10.2</span> mm. Quality records show that <span class="chem">5%</span> of bolts are too narrow and <span class="chem">3%</span> are too wide.<br>(a) Find the value of <span class="chem">σ</span> and the value of <span class="chem">μ</span>. <strong>[4 marks]</strong><br>(b) Bolts are sold in packs of <span class="chem">50</span>, taken at random from the machine before inspection. Find the probability that a pack contains at most <span class="chem">3</span> bolts that would be rejected. <strong>[3 marks]</strong><br>(c) An engineer resets the machine so that <span class="chem">μ = 10.05</span> mm, with <span class="chem">σ</span> unchanged. Find the new percentage of bolts that are rejected. <strong>[3 marks]</strong></p>
      stem: "<p>ある機械が作るボルトの直径は、平均 <span class=\"chem\">μ</span> mm、標準偏差 <span class=\"chem\">σ</span> mm の正規分布に従う。直径が <span class=\"chem\">9.9</span> mm 未満または <span class=\"chem\">10.2</span> mm を超えるボルトは不合格となる。品質記録によると、ボルトの <span class=\"chem\">5%</span> が細すぎ、<span class=\"chem\">3%</span> が太すぎる。<br>(a) <span class=\"chem\">σ</span> の値と <span class=\"chem\">μ</span> の値を求めなさい (Find)。 <strong>[4 marks]</strong><br>(b) ボルトは <span class=\"chem\">50</span> 本入りのパックで販売され、検査前に機械から無作為に取られる。1 パックに含まれる不合格となるボルトが多くとも <span class=\"chem\">3</span> 本である確率を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) 技術者が機械を再設定し、<span class=\"chem\">σ</span> は変えずに <span class=\"chem\">μ = 10.05</span> mm とした。不合格となるボルトの新しい割合（%）を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is "inverse normal with both μ and σ unknown"; (b) hides a binomial (each bolt is rejected or not, with probability from the records); (c) is a fresh normal calculation with the new mean.
        "解読：(a) は「μ と σ がともに未知の逆正規分布」、(b) には二項分布が隠れていて（各ボルトは記録から得た確率で不合格かそうでないか）、(c) は新しい平均での正規分布の計算のやり直しです。",
        // EN: "3% too wide" means P(D &lt; 10.2) = 0.97. Form two equations (x − μ)/σ = z and solve them simultaneously.
        "「3% が太すぎる」は P(D &lt; 10.2) = 0.97 を意味します。(x − μ)/σ = z の形の方程式を 2 つ作り、連立して解きます。",
        // EN: In (c), 10.05 is exactly halfway between 9.9 and 10.2, so the two tails are equal.
        "(c) では、10.05 は 9.9 と 10.2 のちょうど中間なので、両側の裾は等しくなります。",
      ],
      // EN: <p><b>Decode:</b> two percentages → two z-scores → two linear equations; then a rejected bolt is a "success" in a binomial count.<br>(a) <span class="chem">z_1 = -1.644854</span>, <span class="chem">z_2 = 1.880794</span>. <span class="chem">9.9 - μ = -1.644854σ</span> and <span class="chem">10.2 - μ = 1.880794σ</span> ⇒ <span class="chem">0.3 = 3.525648σ ⇒ σ = 0.0850908</span>, <span class="chem">μ = 9.9 + 1.644854σ = 10.03996</span>.<br>(b) Each bolt is rejected with probability <span class="chem">0.08</span>, so <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425296 ≈ 0.425</span>.<br>(c) With <span class="chem">D ~ N(10.05, 0.0850908^2)</span>: <span class="chem">P(D &lt; 9.9) = P(D &gt; 10.2) = 0.0389651</span>, total <span class="chem">0.0779302</span>, about <span class="chem">7.79%</span>. Centring the mean between the limits lowers the rejection rate from 8%.</p>
      solution: "<p><b>解読：</b>2 つの百分率 → 2 つの z 値 → 2 つの 1 次方程式。次に、不合格のボルトを二項分布の個数における「成功」とみなします。<br>(a) <span class=\"chem\">z_1 = -1.644854</span>、<span class=\"chem\">z_2 = 1.880794</span>。<span class=\"chem\">9.9 - μ = -1.644854σ</span>、<span class=\"chem\">10.2 - μ = 1.880794σ</span> ⇒ <span class=\"chem\">0.3 = 3.525648σ ⇒ σ = 0.0850908</span>、<span class=\"chem\">μ = 9.9 + 1.644854σ = 10.03996</span>。<br>(b) 各ボルトは確率 <span class=\"chem\">0.08</span> で不合格となるので <span class=\"chem\">R ~ B(50, 0.08)</span>：<span class=\"chem\">P(R ≤ 3) = 0.425296 ≈ 0.425</span>。<br>(c) <span class=\"chem\">D ~ N(10.05, 0.0850908^2)</span> で <span class=\"chem\">P(D &lt; 9.9) = P(D &gt; 10.2) = 0.0389651</span>、合計 <span class=\"chem\">0.0779302</span>、約 <span class=\"chem\">7.79%</span>。平均を両限界の中央にすると、不合格率は 8% から下がります。</p>",
      // EN: <p>(a) <span class="chem">(9.9 - μ)/σ = -1.64485</span> and <span class="chem">(10.2 - μ)/σ = 1.88079</span> give <span class="chem">σ = 0.0851</span> mm (0.0850908…) and <span class="chem">μ = 10.0</span> mm (10.03996…).<br>(b) <span class="chem">R ~ B(50, 0.08)</span>: <span class="chem">P(R ≤ 3) = 0.425</span> (0.425296…).<br>(c) <span class="chem">P(D &lt; 9.9) + P(D &gt; 10.2) = 2(0.0389651) = 0.0779</span>, so about <span class="chem">7.79%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(9.9 - μ)/σ = -1.64485</span> と <span class=\"chem\">(10.2 - μ)/σ = 1.88079</span> から <span class=\"chem\">σ = 0.0851</span> mm（0.0850908…）、<span class=\"chem\">μ = 10.0</span> mm（10.03996…）。<br>(b) <span class=\"chem\">R ~ B(50, 0.08)</span>：<span class=\"chem\">P(R ≤ 3) = 0.425</span>（0.425296…）。<br>(c) <span class=\"chem\">P(D &lt; 9.9) + P(D &gt; 10.2) = 2(0.0389651) = 0.0779</span> なので、約 <span class=\"chem\">7.79%</span>。</p>",
      markscheme: [
        // EN: M1: (a) Forms two standardised equations (x − μ)/σ = z.
        "M1：(a) 標準化した方程式 (x − μ)/σ = z を 2 つ作る。",
        // EN: A1: (a) Correct z-values −1.64485 (area 0.05) and 1.88079 (area 0.97).
        "A1：(a) 正しい z の値 −1.64485（面積 0.05）と 1.88079（面積 0.97）。",
        // EN: A1: (a) σ = 0.0851 (0.0850908…).
        "A1：(a) σ = 0.0851（0.0850908…）。",
        // EN: A1: (a) μ = 10.0 (10.03996…).
        "A1：(a) μ = 10.0（10.03996…）。",
        // EN: R1: (b) Recognises p(reject) = 0.05 + 0.03 = 0.08.
        "R1：(b) p(reject) = 0.05 + 0.03 = 0.08 であることを認識する。",
        // EN: M1: (b) Uses R ~ B(50, 0.08) with the cumulative binomial for P(R ≤ 3).
        "M1：(b) R ~ B(50, 0.08) として P(R ≤ 3) に累積二項分布を使う。",
        // EN: A1: (b) 0.425.
        "A1：(b) 0.425。",
        // EN: M1: (c) Adds both tails P(D < 9.9) + P(D > 10.2) using N(10.05, σ²) with σ unrounded.
        "M1：(c) 丸めていない σ による N(10.05, σ²) を使い、両側の裾 P(D < 9.9) + P(D > 10.2) を足す。",
        // EN: A1: (c) Each tail is 0.0389651 (by symmetry, as 10.05 is midway between the limits).
        "A1：(c) 各裾は 0.0389651（10.05 は両限界の中間なので対称性より）。",
        // EN: A1: (c) 7.79% (0.0779302…).
        "A1：(c) 7.79%（0.0779302…）。",
      ],
    },

    // ── t4-2-q054 · numeric · exam · SL · SL 4.9, 4.11 · 4 marks
    "t4-2-q054": {
      // EN: <p>Scores <span class="chem">X</span> on a reasoning test are normally distributed with mean <span class="chem">100</span> and standard deviation <span class="chem">15</span>. Let <span class="chem">A</span> be the event <span class="chem">X &gt; 110</span> and <span class="chem">B</span> the event <span class="chem">X &lt; 120</span>. Find <span class="chem">P(A | B)</span>.</p>
      stem: "<p>ある推論テストの得点 <span class=\"chem\">X</span> は、平均 <span class=\"chem\">100</span>、標準偏差 <span class=\"chem\">15</span> の正規分布に従う。<span class=\"chem\">A</span> を事象 <span class=\"chem\">X &gt; 110</span>、<span class=\"chem\">B</span> を事象 <span class=\"chem\">X &lt; 120</span> とする。<span class=\"chem\">P(A | B)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: The intersection <span class="chem">A ∩ B</span> is the interval <span class="chem">110 &lt; X &lt; 120</span>.
        "共通部分 <span class=\"chem\">A ∩ B</span> は区間 <span class=\"chem\">110 &lt; X &lt; 120</span> です。",
        // EN: Divide <span class="chem">P(110 &lt; X &lt; 120)</span> by <span class="chem">P(X &lt; 120)</span>.
        "<span class=\"chem\">P(110 &lt; X &lt; 120)</span> を <span class=\"chem\">P(X &lt; 120)</span> で割ります。",
        // EN: Compare your answer with P(A) = 0.252: since they differ, A and B are not independent.
        "答えを P(A) = 0.252 と比べましょう：両者は異なるので、A と B は独立ではありません。",
      ],
      // EN: <p><span class="chem">P(A | B) = P(110 &lt; X &lt; 120)/P(X &lt; 120)</span> <b>[M1]</b>.<br><span class="chem">P(110 &lt; X &lt; 120) = 0.161281</span> <b>[A1]</b>, <span class="chem">P(X &lt; 120) = 0.908789</span> <b>[A1]</b>.<br><span class="chem">P(A | B) = 0.177468 ≈ 0.177</span> <b>[A1]</b>.<br>Note: <span class="chem">P(A) = 0.252 ≠ P(A | B)</span>, so <span class="chem">A</span> and <span class="chem">B</span> are not independent.</p>
      solution: "<p><span class=\"chem\">P(A | B) = P(110 &lt; X &lt; 120)/P(X &lt; 120)</span> <b>[M1]</b>。<br><span class=\"chem\">P(110 &lt; X &lt; 120) = 0.161281</span> <b>[A1]</b>、<span class=\"chem\">P(X &lt; 120) = 0.908789</span> <b>[A1]</b>。<br><span class=\"chem\">P(A | B) = 0.177468 ≈ 0.177</span> <b>[A1]</b>。<br>注意：<span class=\"chem\">P(A) = 0.252 ≠ P(A | B)</span> なので、<span class=\"chem\">A</span> と <span class=\"chem\">B</span> は独立ではありません。</p>",
    },

    // ── t4-2-q055 · numeric · challenge · SL · SL 4.8 · 5 marks
    "t4-2-q055": {
      // EN: <p>A printer jams on each page with the same probability <span class="chem">p</span>, independently. When it prints an <span class="chem">8</span>-page document, the probability that it jams at least once is <span class="chem">0.75</span>. Find the probability that it jams on exactly <span class="chem">2</span> of the <span class="chem">8</span> pages.</p>
      stem: "<p>あるプリンターは、各ページで他と独立に同じ確率 <span class=\"chem\">p</span> で紙詰まりを起こす。<span class=\"chem\">8</span> ページの文書を印刷するとき、少なくとも 1 回紙詰まりを起こす確率は <span class=\"chem\">0.75</span> である。<span class=\"chem\">8</span> ページのうちちょうど <span class=\"chem\">2</span> ページで紙詰まりを起こす確率を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the binomial parameter p is unknown; the "at least once" fact is an equation for p. Only after finding p can you answer the question asked.
        "解読：二項分布のパラメータ p が未知で、「少なくとも 1 回」という事実が p の方程式になります。p を求めてはじめて、問われている問題に答えられます。",
        // EN: 1 − (1 − p)⁸ = 0.75, so (1 − p)⁸ = 0.25.
        "1 − (1 − p)⁸ = 0.75 なので (1 − p)⁸ = 0.25。",
        // EN: Then use the binomial pdf for X ~ B(8, p) at x = 2, with p unrounded.
        "次に丸めていない p を用いて、X ~ B(8, p) の x = 2 での二項分布の pdf を使います。",
      ],
      // EN: <p><b>Decode:</b> solve for <span class="chem">p</span> first, then use <span class="chem">X ~ B(8, p)</span>.<br><span class="chem">P(X ≥ 1) = 1 - (1 - p)^8 = 0.75</span> <b>[M1]</b> <span class="chem">⇒ 1 - p = 0.25^{1/8} ⇒ p = 0.159104</span> <b>[A1]</b>.<br><span class="chem">P(X = 2) = ⁸C₂ p^2 (1 - p)^6</span> <b>[M1]</b> <span class="chem">= 28(0.159104)^2(0.840896)^6</span> <b>[A1]</b> <span class="chem">= 0.250595 ≈ 0.251</span> <b>[A1]</b>.</p>
      solution: "<p><b>解読：</b>まず <span class=\"chem\">p</span> を求め、次に <span class=\"chem\">X ~ B(8, p)</span> を使います。<br><span class=\"chem\">P(X ≥ 1) = 1 - (1 - p)^8 = 0.75</span> <b>[M1]</b> <span class=\"chem\">⇒ 1 - p = 0.25^{1/8} ⇒ p = 0.159104</span> <b>[A1]</b>。<br><span class=\"chem\">P(X = 2) = ⁸C₂ p^2 (1 - p)^6</span> <b>[M1]</b> <span class=\"chem\">= 28(0.159104)^2(0.840896)^6</span> <b>[A1]</b> <span class=\"chem\">= 0.250595 ≈ 0.251</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q056 · numeric · exam · AHL · AHL 4.14, SL 4.7 · 5 marks
    "t4-2-q056": {
      // EN: <p>A discrete random variable <span class="chem">X</span> has probability distribution <span class="chem">P(X = x) = k/x</span> for <span class="chem">x = 1, 2, 3, 4, 5</span>, where <span class="chem">k</span> is a constant. Find the standard deviation of <span class="chem">X</span>.</p>
      stem: "<p>離散型確率変数 <span class=\"chem\">X</span> の確率分布は、<span class=\"chem\">x = 1, 2, 3, 4, 5</span> に対して <span class=\"chem\">P(X = x) = k/x</span> である。ただし <span class=\"chem\">k</span> は定数である。<span class=\"chem\">X</span> の標準偏差を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">Σ P(X = x) = 1</span>: <span class="chem">k(1 + 1/2 + 1/3 + 1/4 + 1/5) = 1</span>.
        "<span class=\"chem\">Σ P(X = x) = 1</span> を使います：<span class=\"chem\">k(1 + 1/2 + 1/3 + 1/4 + 1/5) = 1</span>。",
        // EN: Put x in one GDC list and P(X = x) in another; the one-variable statistics with frequencies give the mean and σ directly.
        "GDC で x を 1 つのリストに、P(X = x) を別のリストに入力します。度数付きの 1 変数統計で平均と σ が直接得られます。",
        // EN: Or by hand: E(X) = Σ x(k/x) = 5k and E(X²) = Σ x²(k/x) = 15k.
        "または手計算で：E(X) = Σ x(k/x) = 5k、E(X²) = Σ x²(k/x) = 15k。",
      ],
      // EN: <p><span class="chem">k(137/60) = 1 ⇒ k = 60/137 = 0.437956</span> <b>[M1 A1]</b>.<br><span class="chem">E(X) = 5k = 2.18978</span>, <span class="chem">E(X^2) = k(1 + 2 + 3 + 4 + 5) = 15k = 6.56934</span> <b>[A1]</b>.<br><span class="chem">Var(X) = 6.56934 - 2.18978^2 = 1.77420</span> <b>[M1]</b>, so <span class="chem">σ = 1.33199 ≈ 1.33</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">k(137/60) = 1 ⇒ k = 60/137 = 0.437956</span> <b>[M1 A1]</b>。<br><span class=\"chem\">E(X) = 5k = 2.18978</span>、<span class=\"chem\">E(X^2) = k(1 + 2 + 3 + 4 + 5) = 15k = 6.56934</span> <b>[A1]</b>。<br><span class=\"chem\">Var(X) = 6.56934 - 2.18978^2 = 1.77420</span> <b>[M1]</b> なので、<span class=\"chem\">σ = 1.33199 ≈ 1.33</span> <b>[A1]</b>。</p>",
    },

    // ── t4-2-q057 · short · challenge · AHL · AHL 4.13, SL 4.8 · 9 marks
    "t4-2-q057": {
      // EN: <p>A magician has three coins. Coin F is fair, coin H lands heads with probability <span class="chem">0.7</span>, and coin T lands heads with probability <span class="chem">0.2</span>. She picks coin F with probability <span class="chem">1/2</span>, coin H with probability <span class="chem">1/3</span> and coin T with probability <span class="chem">1/6</span>, and tosses the chosen coin <span class="chem">8</span> times. It shows exactly <span class="chem">6</span> heads.<br>(a) For each coin, find the probability of exactly <span class="chem">6</span> heads in <span class="chem">8</span> tosses. <strong>[3 marks]</strong><br>(b) Find the probability that she chose coin H. <strong>[3 marks]</strong><br>(c) She tosses the same coin once more. Find the probability that it shows heads. <strong>[3 marks]</strong></p>
      stem: "<p>ある手品師が 3 枚の硬貨をもっている。硬貨 F は公正で、硬貨 H は確率 <span class=\"chem\">0.7</span> で表が出て、硬貨 T は確率 <span class=\"chem\">0.2</span> で表が出る。彼女は硬貨 F を確率 <span class=\"chem\">1/2</span>、硬貨 H を確率 <span class=\"chem\">1/3</span>、硬貨 T を確率 <span class=\"chem\">1/6</span> で選び、選んだ硬貨を <span class=\"chem\">8</span> 回投げる。表がちょうど <span class=\"chem\">6</span> 回出た。<br>(a) 各硬貨について、<span class=\"chem\">8</span> 回投げて表がちょうど <span class=\"chem\">6</span> 回出る確率を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) 彼女が硬貨 H を選んでいた確率を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) 彼女は同じ硬貨をもう 1 回投げる。表が出る確率を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the coin is a hidden cause and "6 heads in 8" is the evidence. Part (a) gives the likelihoods (binomial), (b) is Bayes' theorem with three events, and (c) needs ALL three updated probabilities.
        "解読：硬貨は隠れた原因で、「8 回中 6 回表」は証拠です。(a) で尤度（二項分布）が得られ、(b) は 3 つの事象によるベイズの定理、(c) では更新された 3 つの確率を「すべて」使う必要があります。",
        // EN: In (b), the denominator is the total probability of 6 heads, summed over the three coins with weights 1/2, 1/3, 1/6.
        "(b) の分母は表が 6 回出る全確率で、重み 1/2、1/3、1/6 で 3 枚の硬貨について足し合わせます。",
        // EN: In (c), P(head on toss 9) = Σ P(coin | 6 heads) × P(head | coin). Using the original weights 1/2, 1/3, 1/6 is the common mistake.
        "(c) では P(head on toss 9) = Σ P(coin | 6 heads) × P(head | coin)。元の重み 1/2、1/3、1/6 を使うのがよくある間違いです。",
      ],
      // EN: <p><b>Decode:</b> unknown cause (coin), observed data (6 heads in 8). Likelihoods are binomial; Bayes updates the prior weights.<br>(a) <span class="chem">P(6 | F) = ⁸C₆(0.5)^8 = 0.109375</span>, <span class="chem">P(6 | H) = ⁸C₆(0.7)^6(0.3)^2 = 0.296475</span>, <span class="chem">P(6 | T) = ⁸C₆(0.2)^6(0.8)^2 = 0.00114688</span>.<br>(b) <span class="chem">P(6) = 0.0546875 + 0.0988252 + 0.000191147 = 0.153704</span>; <span class="chem">P(H | 6) = 0.0988252/0.153704 = 0.642958 ≈ 0.643</span>.<br>(c) <span class="chem">P(F | 6) = 0.355798</span>, <span class="chem">P(T | 6) = 0.00124360</span>. <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628219 ≈ 0.628</span>.</p>
      solution: "<p><b>解読：</b>未知の原因（硬貨）と観測データ（8 回中 6 回表）。尤度は二項分布で、ベイズの定理により事前の重みを更新します。<br>(a) <span class=\"chem\">P(6 | F) = ⁸C₆(0.5)^8 = 0.109375</span>、<span class=\"chem\">P(6 | H) = ⁸C₆(0.7)^6(0.3)^2 = 0.296475</span>、<span class=\"chem\">P(6 | T) = ⁸C₆(0.2)^6(0.8)^2 = 0.00114688</span>。<br>(b) <span class=\"chem\">P(6) = 0.0546875 + 0.0988252 + 0.000191147 = 0.153704</span>；<span class=\"chem\">P(H | 6) = 0.0988252/0.153704 = 0.642958 ≈ 0.643</span>。<br>(c) <span class=\"chem\">P(F | 6) = 0.355798</span>、<span class=\"chem\">P(T | 6) = 0.00124360</span>。<span class=\"chem\">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628219 ≈ 0.628</span>。</p>",
      // EN: <p>(a) F: <span class="chem">0.109</span> (0.109375); H: <span class="chem">0.296</span> (0.296475…); T: <span class="chem">0.00115</span> (0.00114688).<br>(b) <span class="chem">P(6 heads) = 0.153704</span>, so <span class="chem">P(H | 6 heads) = (1/3)(0.296475)/0.153704 = 0.643</span>.<br>(c) Posteriors F 0.355798, H 0.642958, T 0.00124360; <span class="chem">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628</span>.</p>
      answer: "<p>(a) F：<span class=\"chem\">0.109</span>（0.109375）；H：<span class=\"chem\">0.296</span>（0.296475…）；T：<span class=\"chem\">0.00115</span>（0.00114688）。<br>(b) <span class=\"chem\">P(6 heads) = 0.153704</span> なので、<span class=\"chem\">P(H | 6 heads) = (1/3)(0.296475)/0.153704 = 0.643</span>。<br>(c) 事後確率 F 0.355798、H 0.642958、T 0.00124360；<span class=\"chem\">P(head) = 0.5(0.355798) + 0.7(0.642958) + 0.2(0.00124360) = 0.628</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses the binomial pdf B(8, p) at 6 for each coin.
        "M1：(a) 各硬貨について、二項分布 B(8, p) の pdf の 6 での値を使う。",
        // EN: A1: (a) F: 0.109375 and H: 0.296475.
        "A1：(a) F：0.109375、H：0.296475。",
        // EN: A1: (a) T: 0.00114688.
        "A1：(a) T：0.00114688。",
        // EN: M1: (b) Finds the total P(6 heads) = (1/2)(0.109375) + (1/3)(0.296475) + (1/6)(0.00114688).
        "M1：(b) 全確率 P(6 heads) = (1/2)(0.109375) + (1/3)(0.296475) + (1/6)(0.00114688) を求める。",
        // EN: A1: (b) P(6 heads) = 0.153704.
        "A1：(b) P(6 heads) = 0.153704。",
        // EN: A1: (b) P(H | 6 heads) = 0.643 (0.642958…).
        "A1：(b) P(H | 6 heads) = 0.643（0.642958…）。",
        // EN: M1: (c) Recognises the coin is unknown: weights each coin's P(head) by its posterior probability.
        "M1：(c) 硬貨が未知であることを認識し、各硬貨の P(head) をその事後確率で重み付けする。",
        // EN: A1: (c) Posteriors 0.356 (F) and 0.00124 (T) found as well as H.
        "A1：(c) H だけでなく事後確率 0.356 (F) と 0.00124 (T) も求める。",
        // EN: A1: (c) 0.628 (0.628219…).
        "A1：(c) 0.628（0.628219…）。",
      ],
    },

    // ── t4-2-q058 · short · challenge · AHL · AHL 4.14 · 19 marks
    "t4-2-q058": {
      // EN: <p>This investigation looks at the family of continuous random variables <span class="chem">X_n</span> with probability density functions <span class="chem">f_n(x) = (n + 1)x^n</span> for <span class="chem">0 ≤ x ≤ 1</span> (and <span class="chem">0</span> otherwise), where <span class="chem">n</span> is a non-negative integer.<br>(a) Show that <span class="chem">f_n</span> is a valid probability density function for every <span class="chem">n</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">E(X_1)</span>, <span class="chem">E(X_2)</span> and <span class="chem">E(X_3)</span>. <strong>[3 marks]</strong><br>(c) Conjecture a formula for <span class="chem">E(X_n)</span> in terms of <span class="chem">n</span>, and prove it. <strong>[3 marks]</strong><br>(d) Find the median of <span class="chem">X_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) For <span class="chem">n = 3</span>, calculate the mean and the median, and state which is larger. Explain this using the shape of the graph of <span class="chem">f_3</span>. <strong>[3 marks]</strong><br>(f) Show that <span class="chem">Var(X_n) = (n + 1)/((n + 2)^2(n + 3))</span>. <strong>[4 marks]</strong><br>(g) Hence describe what happens to the distribution of <span class="chem">X_n</span> as <span class="chem">n → ∞</span>. <strong>[2 marks]</strong></p>
      stem: "<p>この探究では、確率密度関数が <span class=\"chem\">0 ≤ x ≤ 1</span> で <span class=\"chem\">f_n(x) = (n + 1)x^n</span>（それ以外で <span class=\"chem\">0</span>）である連続型確率変数の族 <span class=\"chem\">X_n</span> を考える。ただし <span class=\"chem\">n</span> は 0 以上の整数である。<br>(a) すべての <span class=\"chem\">n</span> について <span class=\"chem\">f_n</span> が確率密度関数として妥当であることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">E(X_1)</span>、<span class=\"chem\">E(X_2)</span>、<span class=\"chem\">E(X_3)</span> を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">E(X_n)</span> を <span class=\"chem\">n</span> で表す公式を予想し (Conjecture)、それを証明しなさい (prove)。 <strong>[3 marks]</strong><br>(d) <span class=\"chem\">X_n</span> の中央値を <span class=\"chem\">n</span> の式で求めなさい (Find)。 <strong>[2 marks]</strong><br>(e) <span class=\"chem\">n = 3</span> のとき、平均と中央値を計算し (Calculate)、どちらが大きいかを答えなさい (State)。その理由を <span class=\"chem\">f_3</span> のグラフの形を用いて説明しなさい (Explain)。 <strong>[3 marks]</strong><br>(f) <span class=\"chem\">Var(X_n) = (n + 1)/((n + 2)^2(n + 3))</span> であることを示しなさい (Show that)。 <strong>[4 marks]</strong><br>(g) これを用いて (Hence)、<span class=\"chem\">n → ∞</span> のとき <span class=\"chem\">X_n</span> の分布がどうなるかを述べなさい (describe)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a staged investigation. Compute small cases, spot the pattern, then prove it with a general integral in n. Each part uses one of the standard definitions: total area 1, E(X) = ∫ x f(x) dx, median ∫_0^m f = 1/2, Var = E(X²) − [E(X)]².
        "解読：これは段階的な探究です。小さい場合を計算し、規則性を見つけ、n についての一般的な積分で証明します。各小問では標準的な定義を 1 つずつ使います：全面積 1、E(X) = ∫ x f(x) dx、中央値 ∫_0^m f = 1/2、Var = E(X²) − [E(X)]²。",
        // EN: For (b), E(X_1) = ∫_0^1 x · 2x dx. Write each answer as a fraction to see the pattern.
        "(b) では E(X_1) = ∫_0^1 x · 2x dx。規則性が見えるように、各答えを分数で書きましょう。",
        // EN: For (d), the integral from 0 to m is simply m^{n+1}.
        "(d) では、0 から m までの積分は単に m^{n+1} です。",
        // EN: For (f), expand (n + 2)² − (n + 1)(n + 3) carefully: it is a constant.
        "(f) では、(n + 2)² − (n + 1)(n + 3) を丁寧に展開しましょう：定数になります。",
      ],
      // EN: <p><b>Decode:</b> small cases → conjecture → general proof, using the definitions of a pdf, mean, median and variance for a continuous random variable.<br>(a) For <span class="chem">0 ≤ x ≤ 1</span>, <span class="chem">(n + 1)x^n ≥ 0</span>, and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = ∫_0^1 2x^2 dx = 2/3</span>, <span class="chem">E(X_2) = ∫_0^1 3x^3 dx = 3/4</span>, <span class="chem">E(X_3) = ∫_0^1 4x^4 dx = 4/5</span>.<br>(c) Pattern: <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">E(X_n) = ∫_0^1 (n + 1)x^{n+1} dx = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">∫_0^m (n + 1)x^n dx = m^{n+1} = 1/2 ⇒ m = 2^{-1/(n+1)}</span>.<br>(e) <span class="chem">n = 3</span>: mean <span class="chem">4/5 = 0.8</span>, median <span class="chem">2^{-1/4} = 0.840896 ≈ 0.841</span>. The median is larger: <span class="chem">f_3(x) = 4x^3</span> is small near <span class="chem">0</span> and large near <span class="chem">1</span>, giving a long left tail that drags the mean down.<br>(f) <span class="chem">E(X_n^2) = ∫_0^1 (n + 1)x^{n+2} dx = (n + 1)/(n + 3)</span>. Then <span class="chem">Var(X_n) = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3))</span>, and <span class="chem">(n^2 + 4n + 4) - (n^2 + 4n + 3) = 1</span>, giving <span class="chem">(n + 1)/((n + 2)^2(n + 3))</span>.<br>(g) The numerator grows like <span class="chem">n</span> and the denominator like <span class="chem">n^3</span>, so <span class="chem">Var(X_n) → 0</span>; with <span class="chem">E(X_n) → 1</span>, almost all the probability ends up just below <span class="chem">x = 1</span>.</p>
      solution: "<p><b>解読：</b>小さい場合 → 予想 → 一般的な証明。連続型確率変数の確率密度関数、平均、中央値、分散の定義を使います。<br>(a) <span class=\"chem\">0 ≤ x ≤ 1</span> で <span class=\"chem\">(n + 1)x^n ≥ 0</span>、かつ <span class=\"chem\">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>。<br>(b) <span class=\"chem\">E(X_1) = ∫_0^1 2x^2 dx = 2/3</span>、<span class=\"chem\">E(X_2) = ∫_0^1 3x^3 dx = 3/4</span>、<span class=\"chem\">E(X_3) = ∫_0^1 4x^4 dx = 4/5</span>。<br>(c) 規則性：<span class=\"chem\">E(X_n) = (n + 1)/(n + 2)</span>。証明：<span class=\"chem\">E(X_n) = ∫_0^1 (n + 1)x^{n+1} dx = (n + 1)/(n + 2)</span>。<br>(d) <span class=\"chem\">∫_0^m (n + 1)x^n dx = m^{n+1} = 1/2 ⇒ m = 2^{-1/(n+1)}</span>。<br>(e) <span class=\"chem\">n = 3</span>：平均 <span class=\"chem\">4/5 = 0.8</span>、中央値 <span class=\"chem\">2^{-1/4} = 0.840896 ≈ 0.841</span>。中央値のほうが大きくなります：<span class=\"chem\">f_3(x) = 4x^3</span> は <span class=\"chem\">0</span> の近くで小さく <span class=\"chem\">1</span> の近くで大きいので、左に長い裾ができ、平均を引き下げます。<br>(f) <span class=\"chem\">E(X_n^2) = ∫_0^1 (n + 1)x^{n+2} dx = (n + 1)/(n + 3)</span>。すると <span class=\"chem\">Var(X_n) = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3))</span> で、<span class=\"chem\">(n^2 + 4n + 4) - (n^2 + 4n + 3) = 1</span> なので <span class=\"chem\">(n + 1)/((n + 2)^2(n + 3))</span> が得られます。<br>(g) 分子は <span class=\"chem\">n</span> のように、分母は <span class=\"chem\">n^3</span> のように増加するので <span class=\"chem\">Var(X_n) → 0</span>。さらに <span class=\"chem\">E(X_n) → 1</span> なので、確率のほとんどすべてが <span class=\"chem\">x = 1</span> のすぐ下に集まります。</p>",
      // EN: <p>(a) <span class="chem">f_n(x) ≥ 0</span> on <span class="chem">[0, 1]</span> and <span class="chem">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>.<br>(b) <span class="chem">E(X_1) = 2/3</span>, <span class="chem">E(X_2) = 3/4</span>, <span class="chem">E(X_3) = 4/5</span>.<br>(c) Conjecture <span class="chem">E(X_n) = (n + 1)/(n + 2)</span>. Proof: <span class="chem">∫_0^1 x(n + 1)x^n dx = (n + 1)[x^{n+2}/(n + 2)]_0^1 = (n + 1)/(n + 2)</span>.<br>(d) <span class="chem">m^{n+1} = 1/2 ⇒ m = (1/2)^{1/(n+1)} = 2^{-1/(n+1)}</span>.<br>(e) Mean <span class="chem">0.8</span>, median <span class="chem">2^{-1/4} = 0.841</span>; the median is larger. The density increases towards <span class="chem">x = 1</span>, so the distribution has a long tail to the left (negative skew), which pulls the mean below the median.<br>(f) <span class="chem">E(X_n^2) = (n + 1)/(n + 3)</span>, so <span class="chem">Var = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3)) = (n + 1)/((n + 2)^2(n + 3))</span>, since <span class="chem">(n + 2)^2 - (n + 1)(n + 3) = 1</span>.<br>(g) <span class="chem">Var(X_n) → 0</span> while <span class="chem">E(X_n) → 1</span>: the probability becomes concentrated closer and closer to <span class="chem">x = 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">[0, 1]</span> で <span class=\"chem\">f_n(x) ≥ 0</span>、かつ <span class=\"chem\">∫_0^1 (n + 1)x^n dx = [x^{n+1}]_0^1 = 1</span>。<br>(b) <span class=\"chem\">E(X_1) = 2/3</span>、<span class=\"chem\">E(X_2) = 3/4</span>、<span class=\"chem\">E(X_3) = 4/5</span>。<br>(c) 予想 <span class=\"chem\">E(X_n) = (n + 1)/(n + 2)</span>。証明：<span class=\"chem\">∫_0^1 x(n + 1)x^n dx = (n + 1)[x^{n+2}/(n + 2)]_0^1 = (n + 1)/(n + 2)</span>。<br>(d) <span class=\"chem\">m^{n+1} = 1/2 ⇒ m = (1/2)^{1/(n+1)} = 2^{-1/(n+1)}</span>。<br>(e) 平均 <span class=\"chem\">0.8</span>、中央値 <span class=\"chem\">2^{-1/4} = 0.841</span>；中央値のほうが大きい。密度は <span class=\"chem\">x = 1</span> に向かって増加するので、分布は左に長い裾をもち（負の歪み）、平均が中央値より下に引き下げられる。<br>(f) <span class=\"chem\">E(X_n^2) = (n + 1)/(n + 3)</span> なので <span class=\"chem\">Var = (n + 1)/(n + 3) - (n + 1)^2/(n + 2)^2 = (n + 1)[(n + 2)^2 - (n + 1)(n + 3)]/((n + 2)^2(n + 3)) = (n + 1)/((n + 2)^2(n + 3))</span>。これは <span class=\"chem\">(n + 2)^2 - (n + 1)(n + 3) = 1</span> による。<br>(g) <span class=\"chem\">Var(X_n) → 0</span> かつ <span class=\"chem\">E(X_n) → 1</span>：確率は <span class=\"chem\">x = 1</span> のごく近くにどんどん集中していく。</p>",
      markscheme: [
        // EN: M1: (a) Integrates: ∫_0^1 (n + 1)xⁿ dx = [xⁿ⁺¹]_0^1.
        "M1：(a) 積分する：∫_0^1 (n + 1)xⁿ dx = [xⁿ⁺¹]_0^1。",
        // EN: R1: (a) States f_n(x) ≥ 0 on [0, 1] and the integral equals 1, so f_n is a valid pdf (AG).
        "R1：(a) [0, 1] で f_n(x) ≥ 0 かつ積分が 1 に等しいことを述べ、f_n が確率密度関数として妥当である (AG)。",
        // EN: A1: (b) E(X_1) = 2/3.
        "A1：(b) E(X_1) = 2/3。",
        // EN: A1: (b) E(X_2) = 3/4.
        "A1：(b) E(X_2) = 3/4。",
        // EN: A1: (b) E(X_3) = 4/5.
        "A1：(b) E(X_3) = 4/5。",
        // EN: A1: (c) Conjecture E(X_n) = (n + 1)/(n + 2).
        "A1：(c) 予想 E(X_n) = (n + 1)/(n + 2)。",
        // EN: M1: (c) Writes E(X_n) = ∫_0^1 (n + 1)xⁿ⁺¹ dx.
        "M1：(c) E(X_n) = ∫_0^1 (n + 1)xⁿ⁺¹ dx と書く。",
        // EN: A1: (c) Evaluates to (n + 1)/(n + 2), proving the conjecture for all n.
        "A1：(c) 計算して (n + 1)/(n + 2) を得て、すべての n について予想を証明する。",
        // EN: M1: (d) Sets ∫_0^m (n + 1)xⁿ dx = mⁿ⁺¹ = 1/2.
        "M1：(d) ∫_0^m (n + 1)xⁿ dx = mⁿ⁺¹ = 1/2 とおく。",
        // EN: A1: (d) m = 2^(−1/(n+1)).
        "A1：(d) m = 2^(−1/(n+1))。",
        // EN: A1: (e) Mean = 0.8.
        "A1：(e) 平均 = 0.8。",
        // EN: A1: (e) Median = 2^(−1/4) = 0.841.
        "A1：(e) 中央値 = 2^(−1/4) = 0.841。",
        // EN: R1: (e) Median is larger; the density rises towards x = 1, so the long tail is on the left (negative skew) and the mean is pulled down.
        "R1：(e) 中央値のほうが大きい。密度は x = 1 に向かって増加するので、長い裾は左側にあり（負の歪み）、平均が引き下げられる。",
        // EN: M1: (f) Writes E(X_n²) = ∫_0^1 (n + 1)xⁿ⁺² dx.
        "M1：(f) E(X_n²) = ∫_0^1 (n + 1)xⁿ⁺² dx と書く。",
        // EN: A1: (f) E(X_n²) = (n + 1)/(n + 3).
        "A1：(f) E(X_n²) = (n + 1)/(n + 3)。",
        // EN: M1: (f) Uses Var = E(X_n²) − [E(X_n)]² and combines over the common denominator (n + 2)²(n + 3).
        "M1：(f) Var = E(X_n²) − [E(X_n)]² を使い、共通の分母 (n + 2)²(n + 3) でまとめる。",
        // EN: A1: (f) Uses (n + 2)² − (n + 1)(n + 3) = 1 to reach the given result (AG).
        "A1：(f) (n + 2)² − (n + 1)(n + 3) = 1 を使って与えられた結果に到達する (AG)。",
        // EN: A1: (g) Var(X_n) → 0 (and E(X_n) → 1) as n → ∞.
        "A1：(g) n → ∞ のとき Var(X_n) → 0（かつ E(X_n) → 1）。",
        // EN: R1: (g) Interprets: the distribution concentrates at (just below) x = 1.
        "R1：(g) 解釈：分布は x = 1 に（そのすぐ下に）集中する。",
      ],
    },

    // ── t4-2-q059 · short · challenge · AHL · AHL 4.13 · 15 marks
    "t4-2-q059": {
      // EN: <p>A screening test for a condition <span class="chem">D</span> gives a positive result for <span class="chem">95%</span> of people who have the condition and for <span class="chem">5%</span> of people who do not. In a city, <span class="chem">1%</span> of people have the condition. Assume that, for a given person, repeated test results are independent of each other once their condition status is known.<br>(a) A person tests positive once. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(b) The person is tested a second time and is positive again. Find the probability that they have the condition. <strong>[3 marks]</strong><br>(c) Show that after <span class="chem">k</span> positive results in a row, <span class="chem">P(D | k positives) = 0.01(0.95)^k / (0.01(0.95)^k + 0.99(0.05)^k)</span>. <strong>[2 marks]</strong><br>(d) Hence show that the odds <span class="chem">P(D | k positives) / P(D′ | k positives) = 19^k/99</span>. <strong>[2 marks]</strong><br>(e) Find the smallest number of consecutive positive results needed for <span class="chem">P(D | k positives)</span> to exceed <span class="chem">0.999</span>. <strong>[3 marks]</strong><br>(f) In a different city the proportion with the condition is <span class="chem">p</span>. Find the set of values of <span class="chem">p</span> for which a single positive test makes it more likely than not that the person has the condition. <strong>[2 marks]</strong></p>
      stem: "<p>ある病気 <span class=\"chem\">D</span> のスクリーニング検査は、その病気にかかっている人の <span class=\"chem\">95%</span>、かかっていない人の <span class=\"chem\">5%</span> に陽性の結果を出す。ある都市では、<span class=\"chem\">1%</span> の人がその病気にかかっている。同じ人について、病気の有無がわかっているもとでは、繰り返しの検査結果は互いに独立であると仮定する。<br>(a) ある人が 1 回検査で陽性になった。その人が病気にかかっている確率を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) その人が 2 回目の検査を受け、再び陽性になった。その人が病気にかかっている確率を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">k</span> 回続けて陽性になったあと、<span class=\"chem\">P(D | k positives) = 0.01(0.95)^k / (0.01(0.95)^k + 0.99(0.05)^k)</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(d) これを用いて (Hence)、オッズ (odds) <span class=\"chem\">P(D | k positives) / P(D′ | k positives) = 19^k/99</span> であることを示しなさい (show that)。 <strong>[2 marks]</strong><br>(e) <span class=\"chem\">P(D | k positives)</span> が <span class=\"chem\">0.999</span> を超えるために必要な、連続した陽性結果の最小の回数を求めなさい (Find)。 <strong>[3 marks]</strong><br>(f) 別の都市では、病気にかかっている人の割合は <span class=\"chem\">p</span> である。1 回の陽性検査によって、その人が病気にかかっている可能性のほうがかかっていない可能性より高くなるような <span class=\"chem\">p</span> の値の範囲を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: each part is Bayes' theorem with the two-event partition {D, D′}. The evidence grows from one positive to k positives; "independent once the status is known" lets you multiply the test probabilities along each branch.
        "解読：どの小問も、2 つの事象による分割 {D, D′} を用いたベイズの定理です。証拠が 1 回の陽性から k 回の陽性へと増えていきます。「病気の有無がわかっているもとでは独立」なので、各枝に沿って検査の確率を掛け合わせられます。",
        // EN: For (a), the denominator is P(+) = P(D)P(+ | D) + P(D′)P(+ | D′).
        "(a) では、分母は P(+) = P(D)P(+ | D) + P(D′)P(+ | D′) です。",
        // EN: For (d), both conditional probabilities share the same denominator, so the odds are a ratio of the two numerators.
        "(d) では、2 つの条件付き確率は分母が同じなので、オッズは 2 つの分子の比になります。",
        // EN: For (e), P &gt; 0.999 is the same as odds &gt; 0.999/0.001 = 999.
        "(e) では、P &gt; 0.999 はオッズ &gt; 0.999/0.001 = 999 と同じです。",
      ],
      // EN: <p><b>Decode:</b> repeated Bayes updating on the partition {D, D′}; odds turn the updating into a multiplication by 19 per positive result.<br>(a) <span class="chem">P(+) = 0.0095 + 0.0495 = 0.059</span>, <span class="chem">P(D | +) = 0.0095/0.059 = 0.161017 ≈ 0.161</span>.<br>(b) <span class="chem">P(++ ∩ D) = 0.01(0.9025) = 0.009025</span>, <span class="chem">P(++ ∩ D′) = 0.99(0.0025) = 0.002475</span>, so <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.784783 ≈ 0.785</span>.<br>(c) Given <span class="chem">D</span>, the <span class="chem">k</span> results are independent, each positive with probability <span class="chem">0.95</span>, so <span class="chem">P(k+ | D) = 0.95^k</span>; similarly <span class="chem">P(k+ | D′) = 0.05^k</span>. Bayes' theorem gives the stated formula.<br>(d) <span class="chem">P(D | k+)/P(D′ | k+) = 0.01(0.95)^k/(0.99(0.05)^k) = (1/99)(19)^k</span>.<br>(e) <span class="chem">P &gt; 0.999 ⇔ odds &gt; 999 ⇔ 19^k &gt; 98901 ⇔ k &gt; ln 98901/ln 19 = 3.906</span>. Check: <span class="chem">k = 3</span> gives odds <span class="chem">69.3</span> (P = 0.986); <span class="chem">k = 4</span> gives odds <span class="chem">1316</span> (P = 0.99924). So <span class="chem">k = 4</span>.<br>(f) <span class="chem">P(D | +) &gt; 1/2 ⇔ 0.95p &gt; 0.05(1 - p) ⇔ p &gt; 0.05</span>.</p>
      solution: "<p><b>解読：</b>分割 {D, D′} によるベイズ更新の繰り返しです。オッズを使うと、陽性結果 1 回ごとの更新が 19 倍の掛け算になります。<br>(a) <span class=\"chem\">P(+) = 0.0095 + 0.0495 = 0.059</span>、<span class=\"chem\">P(D | +) = 0.0095/0.059 = 0.161017 ≈ 0.161</span>。<br>(b) <span class=\"chem\">P(++ ∩ D) = 0.01(0.9025) = 0.009025</span>、<span class=\"chem\">P(++ ∩ D′) = 0.99(0.0025) = 0.002475</span> なので <span class=\"chem\">P(D | ++) = 0.009025/0.0115 = 0.784783 ≈ 0.785</span>。<br>(c) <span class=\"chem\">D</span> のもとで <span class=\"chem\">k</span> 回の結果は独立で、それぞれ確率 <span class=\"chem\">0.95</span> で陽性なので <span class=\"chem\">P(k+ | D) = 0.95^k</span>。同様に <span class=\"chem\">P(k+ | D′) = 0.05^k</span>。ベイズの定理から与えられた式が得られます。<br>(d) <span class=\"chem\">P(D | k+)/P(D′ | k+) = 0.01(0.95)^k/(0.99(0.05)^k) = (1/99)(19)^k</span>。<br>(e) <span class=\"chem\">P &gt; 0.999 ⇔ odds &gt; 999 ⇔ 19^k &gt; 98901 ⇔ k &gt; ln 98901/ln 19 = 3.906</span>。確認：<span class=\"chem\">k = 3</span> ではオッズ <span class=\"chem\">69.3</span>（P = 0.986）、<span class=\"chem\">k = 4</span> ではオッズ <span class=\"chem\">1316</span>（P = 0.99924）。よって <span class=\"chem\">k = 4</span>。<br>(f) <span class=\"chem\">P(D | +) &gt; 1/2 ⇔ 0.95p &gt; 0.05(1 - p) ⇔ p &gt; 0.05</span>。</p>",
      // EN: <p>(a) <span class="chem">P(+) = 0.01(0.95) + 0.99(0.05) = 0.059</span>; <span class="chem">P(D | +) = 0.0095/0.059 = 0.161</span>.<br>(b) <span class="chem">P(++) = 0.01(0.95)^2 + 0.99(0.05)^2 = 0.0115</span>; <span class="chem">P(D | ++) = 0.009025/0.0115 = 0.785</span>.<br>(c) By conditional independence <span class="chem">P(k+ | D) = 0.95^k</span> and <span class="chem">P(k+ | D′) = 0.05^k</span>; Bayes gives the result.<br>(d) <span class="chem">P(D′ | k+)</span> has numerator <span class="chem">0.99(0.05)^k</span> over the same denominator, so the odds are <span class="chem">(0.01/0.99)(0.95/0.05)^k = 19^k/99</span>.<br>(e) Need odds <span class="chem">&gt; 999</span>: <span class="chem">19^k &gt; 98901 ⇒ k &gt; 3.906</span>, so <span class="chem">k = 4</span>.<br>(f) <span class="chem">0.95p &gt; 0.05(1 - p) ⇒ p &gt; 0.05</span>, so <span class="chem">0.05 &lt; p ≤ 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(+) = 0.01(0.95) + 0.99(0.05) = 0.059</span>；<span class=\"chem\">P(D | +) = 0.0095/0.059 = 0.161</span>。<br>(b) <span class=\"chem\">P(++) = 0.01(0.95)^2 + 0.99(0.05)^2 = 0.0115</span>；<span class=\"chem\">P(D | ++) = 0.009025/0.0115 = 0.785</span>。<br>(c) 条件付き独立性より <span class=\"chem\">P(k+ | D) = 0.95^k</span>、<span class=\"chem\">P(k+ | D′) = 0.05^k</span>；ベイズの定理から結果が得られる。<br>(d) <span class=\"chem\">P(D′ | k+)</span> は分子が <span class=\"chem\">0.99(0.05)^k</span> で分母は同じなので、オッズは <span class=\"chem\">(0.01/0.99)(0.95/0.05)^k = 19^k/99</span>。<br>(e) オッズ <span class=\"chem\">&gt; 999</span> が必要：<span class=\"chem\">19^k &gt; 98901 ⇒ k &gt; 3.906</span> なので <span class=\"chem\">k = 4</span>。<br>(f) <span class=\"chem\">0.95p &gt; 0.05(1 - p) ⇒ p &gt; 0.05</span> なので <span class=\"chem\">0.05 &lt; p ≤ 1</span>。</p>",
      markscheme: [
        // EN: M1: (a) Uses total probability P(+) = 0.01 × 0.95 + 0.99 × 0.05.
        "M1：(a) 全確率 P(+) = 0.01 × 0.95 + 0.99 × 0.05 を使う。",
        // EN: A1: (a) P(+) = 0.059.
        "A1：(a) P(+) = 0.059。",
        // EN: A1: (a) P(D | +) = 0.161 (0.161017…).
        "A1：(a) P(D | +) = 0.161（0.161017…）。",
        // EN: M1: (b) Uses P(++ | D) = 0.95² and P(++ | D′) = 0.05² (or updates the prior to 0.161017).
        "M1：(b) P(++ | D) = 0.95² と P(++ | D′) = 0.05² を使う（または事前確率を 0.161017 に更新する）。",
        // EN: A1: (b) P(++) = 0.0115.
        "A1：(b) P(++) = 0.0115。",
        // EN: A1: (b) P(D | ++) = 0.785 (0.784783…).
        "A1：(b) P(D | ++) = 0.785（0.784783…）。",
        // EN: M1: (c) States P(k positives | D) = 0.95^k and P(k positives | D′) = 0.05^k by conditional independence.
        "M1：(c) 条件付き独立性により P(k positives | D) = 0.95^k、P(k positives | D′) = 0.05^k と述べる。",
        // EN: A1: (c) Substitutes into Bayes' theorem to obtain the given expression (AG).
        "A1：(c) ベイズの定理に代入して与えられた式を得る (AG)。",
        // EN: M1: (d) Writes P(D′ | k positives) = 0.99(0.05)^k/(same denominator) and divides.
        "M1：(d) P(D′ | k positives) = 0.99(0.05)^k/(same denominator) と書いて割る。",
        // EN: A1: (d) Simplifies (0.01/0.99)(0.95/0.05)^k = 19^k/99 (AG).
        "A1：(d) (0.01/0.99)(0.95/0.05)^k = 19^k/99 と簡単にする (AG)。",
        // EN: M1: (e) Converts P > 0.999 into odds > 999 (or solves the inequality directly).
        "M1：(e) P > 0.999 をオッズ > 999 に変換する（または不等式を直接解く）。",
        // EN: A1: (e) 19^k > 98901, so k > ln 98901/ln 19 = 3.906…
        "A1：(e) 19^k > 98901 なので k > ln 98901/ln 19 = 3.906…",
        // EN: A1: (e) k = 4.
        "A1：(e) k = 4。",
        // EN: M1: (f) Sets 0.95p/(0.95p + 0.05(1 − p)) > 0.5, or 0.95p > 0.05(1 − p).
        "M1：(f) 0.95p/(0.95p + 0.05(1 − p)) > 0.5、または 0.95p > 0.05(1 − p) とおく。",
        // EN: A1: (f) p > 0.05 (with p ≤ 1).
        "A1：(f) p > 0.05（ただし p ≤ 1）。",
      ],
    },

    // ── t4-2-q060 · short · challenge · AHL · AHL 4.14, SL 4.7 · 17 marks
    "t4-2-q060": {
      // EN: <p>This investigation finds the variance of a discrete uniform random variable. Let <span class="chem">X</span> take each of the values <span class="chem">1, 2, …, n</span> with probability <span class="chem">1/n</span>.<br>(a) Find <span class="chem">Var(X)</span> for <span class="chem">n = 2</span>, <span class="chem">n = 3</span> and <span class="chem">n = 4</span>. <strong>[3 marks]</strong><br>(b) Verify that your answers fit the formula <span class="chem">Var(X) = (n^2 - 1)/12</span>. <strong>[1 mark]</strong><br>(c) Using <span class="chem">Σ_{r=1}^n r = n(n + 1)/2</span> and <span class="chem">Σ_{r=1}^n r^2 = n(n + 1)(2n + 1)/6</span>, prove the formula in (b). <strong>[4 marks]</strong><br>(d) A fair spinner has <span class="chem">n</span> equal sectors labelled <span class="chem">5, 10, 15, …, 5n</span>. Write down the mean and variance of the score in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(e) Another fair spinner has equal sectors labelled <span class="chem">3, 7, 11, …</span>, each label <span class="chem">4</span> more than the previous one. The variance of its score is <span class="chem">160</span>. Find the number of sectors. <strong>[3 marks]</strong><br>(f) Find the mean score of the spinner in (e). <strong>[1 mark]</strong><br>(g) Let <span class="chem">U</span> be a continuous random variable with constant density <span class="chem">1/n</span> on <span class="chem">0 ≤ u ≤ n</span>. Show that <span class="chem">Var(U) = n^2/12</span>, and comment on <span class="chem">Var(X)/Var(U)</span> for large <span class="chem">n</span>. <strong>[3 marks]</strong></p>
      stem: "<p>この探究では、離散型一様確率変数の分散を求める。<span class=\"chem\">X</span> は値 <span class=\"chem\">1, 2, …, n</span> をそれぞれ確率 <span class=\"chem\">1/n</span> でとるとする。<br>(a) <span class=\"chem\">n = 2</span>、<span class=\"chem\">n = 3</span>、<span class=\"chem\">n = 4</span> のときの <span class=\"chem\">Var(X)</span> を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) あなたの答えが公式 <span class=\"chem\">Var(X) = (n^2 - 1)/12</span> に合うことを確かめなさい (Verify)。 <strong>[1 mark]</strong><br>(c) <span class=\"chem\">Σ_{r=1}^n r = n(n + 1)/2</span> と <span class=\"chem\">Σ_{r=1}^n r^2 = n(n + 1)(2n + 1)/6</span> を用いて、(b) の公式を証明しなさい (prove)。 <strong>[4 marks]</strong><br>(d) 公正なルーレットに、<span class=\"chem\">5, 10, 15, …, 5n</span> と書かれた <span class=\"chem\">n</span> 個の等しい扇形がある。得点の平均と分散を <span class=\"chem\">n</span> で表して書きなさい (Write down)。 <strong>[2 marks]</strong><br>(e) 別の公正なルーレットには、<span class=\"chem\">3, 7, 11, …</span> と書かれた等しい扇形があり、各数はその前の数より <span class=\"chem\">4</span> 大きい。その得点の分散は <span class=\"chem\">160</span> である。扇形の個数を求めなさい (Find)。 <strong>[3 marks]</strong><br>(f) (e) のルーレットの得点の平均を求めなさい (Find)。 <strong>[1 mark]</strong><br>(g) <span class=\"chem\">U</span> を、<span class=\"chem\">0 ≤ u ≤ n</span> で一定の密度 <span class=\"chem\">1/n</span> をもつ連続型確率変数とする。<span class=\"chem\">Var(U) = n^2/12</span> であることを示し (Show that)、<span class=\"chem\">n</span> が大きいときの <span class=\"chem\">Var(X)/Var(U)</span> について論じなさい (comment on)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: an investigation in three stages: small cases, then a general proof using the two sum formulae, then applications using the linear-transformation rules E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X).
        "解読：3 段階の探究です：小さい場合、次に 2 つの和の公式を使った一般的な証明、そして 1 次変換の規則 E(aX + b) = aE(X) + b と Var(aX + b) = a²Var(X) を使った応用です。",
        // EN: For n = 3: E(X) = 2, E(X²) = (1 + 4 + 9)/3 = 14/3, so Var = 14/3 − 4.
        "n = 3 のとき：E(X) = 2、E(X²) = (1 + 4 + 9)/3 = 14/3 なので Var = 14/3 − 4。",
        // EN: For (e), write the k-th label as 4k − 1: the score is a linear function of X.
        "(e) では、k 番目の数を 4k − 1 と書きます：得点は X の 1 次関数です。",
        // EN: For (g), U is continuous: use integrals instead of sums.
        "(g) では U は連続型なので、和の代わりに積分を使います。",
      ],
      // EN: <p><b>Decode:</b> compute → conjecture (given) → prove with sum formulae → apply with <span class="chem">aX + b</span> → compare with the continuous version.<br>(a) <span class="chem">n = 2</span>: <span class="chem">E = 3/2</span>, <span class="chem">E(X^2) = 5/2</span>, Var <span class="chem">= 5/2 - 9/4 = 1/4</span>. <span class="chem">n = 3</span>: <span class="chem">14/3 - 4 = 2/3</span>. <span class="chem">n = 4</span>: <span class="chem">E = 5/2</span>, <span class="chem">E(X^2) = 30/4</span>, Var <span class="chem">= 15/2 - 25/4 = 5/4</span>.<br>(b) <span class="chem">(4 - 1)/12 = 1/4</span>, <span class="chem">(9 - 1)/12 = 2/3</span>, <span class="chem">(16 - 1)/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (1/n)(n(n + 1)/2) = (n + 1)/2</span>; <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>. <span class="chem">Var(X) = (n + 1)(2n + 1)/6 - (n + 1)^2/4 = (n + 1)(4n + 2 - 3n - 3)/12 = (n + 1)(n - 1)/12 = (n^2 - 1)/12</span>.<br>(d) Score <span class="chem">5X</span>: <span class="chem">E = 5(n + 1)/2</span>, <span class="chem">Var = 25(n^2 - 1)/12</span>.<br>(e) The labels are <span class="chem">4k - 1</span> for <span class="chem">k = 1, …, n</span>, so <span class="chem">Y = 4X - 1</span> and <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 - 1 = 120 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(11 + 1)/2 - 1 = 23</span>.<br>(g) <span class="chem">E(U) = ∫_0^n u/n du = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. Then <span class="chem">Var(X)/Var(U) = (n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>
      solution: "<p><b>解読：</b>計算 → 予想（与えられている）→ 和の公式で証明 → <span class=\"chem\">aX + b</span> で応用 → 連続型の場合と比較。<br>(a) <span class=\"chem\">n = 2</span>：<span class=\"chem\">E = 3/2</span>、<span class=\"chem\">E(X^2) = 5/2</span>、Var <span class=\"chem\">= 5/2 - 9/4 = 1/4</span>。<span class=\"chem\">n = 3</span>：<span class=\"chem\">14/3 - 4 = 2/3</span>。<span class=\"chem\">n = 4</span>：<span class=\"chem\">E = 5/2</span>、<span class=\"chem\">E(X^2) = 30/4</span>、Var <span class=\"chem\">= 15/2 - 25/4 = 5/4</span>。<br>(b) <span class=\"chem\">(4 - 1)/12 = 1/4</span>、<span class=\"chem\">(9 - 1)/12 = 2/3</span>、<span class=\"chem\">(16 - 1)/12 = 5/4</span>。<br>(c) <span class=\"chem\">E(X) = (1/n)(n(n + 1)/2) = (n + 1)/2</span>；<span class=\"chem\">E(X^2) = (n + 1)(2n + 1)/6</span>。<span class=\"chem\">Var(X) = (n + 1)(2n + 1)/6 - (n + 1)^2/4 = (n + 1)(4n + 2 - 3n - 3)/12 = (n + 1)(n - 1)/12 = (n^2 - 1)/12</span>。<br>(d) 得点 <span class=\"chem\">5X</span>：<span class=\"chem\">E = 5(n + 1)/2</span>、<span class=\"chem\">Var = 25(n^2 - 1)/12</span>。<br>(e) 数は <span class=\"chem\">k = 1, …, n</span> に対して <span class=\"chem\">4k - 1</span> なので <span class=\"chem\">Y = 4X - 1</span>、<span class=\"chem\">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 - 1 = 120 ⇒ n = 11</span>。<br>(f) <span class=\"chem\">E(Y) = 4(11 + 1)/2 - 1 = 23</span>。<br>(g) <span class=\"chem\">E(U) = ∫_0^n u/n du = n/2</span>、<span class=\"chem\">E(U^2) = ∫_0^n u^2/n du = n^2/3</span> なので <span class=\"chem\">Var(U) = n^2/3 - n^2/4 = n^2/12</span>。すると <span class=\"chem\">Var(X)/Var(U) = (n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>。</p>",
      // EN: <p>(a) <span class="chem">n = 2</span>: <span class="chem">1/4</span>; <span class="chem">n = 3</span>: <span class="chem">2/3</span>; <span class="chem">n = 4</span>: <span class="chem">5/4</span>.<br>(b) <span class="chem">3/12 = 1/4</span>, <span class="chem">8/12 = 2/3</span>, <span class="chem">15/12 = 5/4</span>.<br>(c) <span class="chem">E(X) = (n + 1)/2</span>, <span class="chem">E(X^2) = (n + 1)(2n + 1)/6</span>, <span class="chem">Var(X) = (n + 1)[2(2n + 1) - 3(n + 1)]/12 = (n + 1)(n - 1)/12</span>.<br>(d) Score <span class="chem">= 5X</span>: mean <span class="chem">5(n + 1)/2</span>, variance <span class="chem">25(n^2 - 1)/12</span>.<br>(e) Score <span class="chem">Y = 4X - 1</span>, <span class="chem">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 = 121 ⇒ n = 11</span>.<br>(f) <span class="chem">E(Y) = 4(6) - 1 = 23</span>.<br>(g) <span class="chem">E(U) = n/2</span>, <span class="chem">E(U^2) = ∫_0^n u^2/n du = n^2/3</span>, so <span class="chem">Var(U) = n^2/3 - n^2/4 = n^2/12</span>. The ratio <span class="chem">(n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">n = 2</span>：<span class=\"chem\">1/4</span>；<span class=\"chem\">n = 3</span>：<span class=\"chem\">2/3</span>；<span class=\"chem\">n = 4</span>：<span class=\"chem\">5/4</span>。<br>(b) <span class=\"chem\">3/12 = 1/4</span>、<span class=\"chem\">8/12 = 2/3</span>、<span class=\"chem\">15/12 = 5/4</span>。<br>(c) <span class=\"chem\">E(X) = (n + 1)/2</span>、<span class=\"chem\">E(X^2) = (n + 1)(2n + 1)/6</span>、<span class=\"chem\">Var(X) = (n + 1)[2(2n + 1) - 3(n + 1)]/12 = (n + 1)(n - 1)/12</span>。<br>(d) 得点 <span class=\"chem\">= 5X</span>：平均 <span class=\"chem\">5(n + 1)/2</span>、分散 <span class=\"chem\">25(n^2 - 1)/12</span>。<br>(e) 得点 <span class=\"chem\">Y = 4X - 1</span>、<span class=\"chem\">Var(Y) = 16(n^2 - 1)/12 = 160 ⇒ n^2 = 121 ⇒ n = 11</span>。<br>(f) <span class=\"chem\">E(Y) = 4(6) - 1 = 23</span>。<br>(g) <span class=\"chem\">E(U) = n/2</span>、<span class=\"chem\">E(U^2) = ∫_0^n u^2/n du = n^2/3</span> なので <span class=\"chem\">Var(U) = n^2/3 - n^2/4 = n^2/12</span>。比 <span class=\"chem\">(n^2 - 1)/n^2 = 1 - 1/n^2 → 1</span>。</p>",
      markscheme: [
        // EN: A1: (a) n = 2: Var = 1/4.
        "A1：(a) n = 2：Var = 1/4。",
        // EN: A1: (a) n = 3: Var = 2/3.
        "A1：(a) n = 3：Var = 2/3。",
        // EN: A1: (a) n = 4: Var = 5/4.
        "A1：(a) n = 4：Var = 5/4。",
        // EN: A1: (b) Substitutes n = 2, 3, 4 into (n² − 1)/12 and obtains 1/4, 2/3, 5/4.
        "A1：(b) n = 2, 3, 4 を (n² − 1)/12 に代入して 1/4、2/3、5/4 を得る。",
        // EN: M1: (c) Writes E(X) = (1/n)Σr and E(X²) = (1/n)Σr².
        "M1：(c) E(X) = (1/n)Σr、E(X²) = (1/n)Σr² と書く。",
        // EN: A1: (c) E(X) = (n + 1)/2.
        "A1：(c) E(X) = (n + 1)/2。",
        // EN: A1: (c) E(X²) = (n + 1)(2n + 1)/6.
        "A1：(c) E(X²) = (n + 1)(2n + 1)/6。",
        // EN: A1: (c) Simplifies Var = (n + 1)(2n + 1)/6 − (n + 1)²/4 to (n² − 1)/12 (AG).
        "A1：(c) Var = (n + 1)(2n + 1)/6 − (n + 1)²/4 を (n² − 1)/12 に簡単にする (AG)。",
        // EN: A1: (d) Mean 5(n + 1)/2.
        "A1：(d) 平均 5(n + 1)/2。",
        // EN: A1: (d) Variance 25(n² − 1)/12.
        "A1：(d) 分散 25(n² − 1)/12。",
        // EN: M1: (e) Recognises the score is Y = 4X − 1.
        "M1：(e) 得点が Y = 4X − 1 であることを認識する。",
        // EN: M1: (e) Uses Var(Y) = 16 Var(X): 16(n² − 1)/12 = 160.
        "M1：(e) Var(Y) = 16 Var(X) を使う：16(n² − 1)/12 = 160。",
        // EN: A1: (e) n = 11.
        "A1：(e) n = 11。",
        // EN: A1: (f) E(Y) = 4E(X) − 1 = 23.
        "A1：(f) E(Y) = 4E(X) − 1 = 23。",
        // EN: M1: (g) Finds E(U²) = ∫_0^n u²/n du = n²/3 (with E(U) = n/2).
        "M1：(g) E(U²) = ∫_0^n u²/n du = n²/3 を求める（E(U) = n/2 とともに）。",
        // EN: A1: (g) Var(U) = n²/3 − n²/4 = n²/12 (AG).
        "A1：(g) Var(U) = n²/3 − n²/4 = n²/12 (AG)。",
        // EN: R1: (g) Var(X)/Var(U) = 1 − 1/n² → 1 as n → ∞: for large n the discrete and continuous uniform models have almost the same spread.
        "R1：(g) n → ∞ のとき Var(X)/Var(U) = 1 − 1/n² → 1：n が大きいとき、離散型と連続型の一様分布モデルの散らばりはほぼ同じになる。",
      ],
    },

  }
});
