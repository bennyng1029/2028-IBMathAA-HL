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

    // ── t4-2-q005 · mcq · exam · SL · SL 4.8 · 3 marks
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
        // EN (option C): You multiplied 6 × (1/3)⁴ = 6/81 = 2/27 or forgot the (2/3)² factor for the two Tails.
        "2": "6 × (1/3)⁴ = 6/81 = 2/27 を計算したか、裏が 2 回出る (2/3)² を掛け忘れています。",
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
        // EN: If events <span class="chem">A</span> and <span class="chem">B</span> are independent, then <span class="chem">P(A | B) = P(A)</span>.
        "事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が独立ならば、<span class=\"chem\">P(A | B) = P(A)</span> である。",
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
        // EN: Evaluate <span class="chem">1 - binomcdf(10, 0.10565, 2)</span> and round the final probability to 3 significant figures (<span class="chem">0.0799</span>).
        "<span class=\"chem\">1 - binomcdf(10, 0.10565, 2)</span> を計算し、最終的な確率を有効数字 3 桁（<span class=\"chem\">0.0799</span>）に丸める。",
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

    // ── t4-2-q012 · numeric · foundation · AHL · AHL 4.14 · 3 marks
    "t4-2-q012": {
      // EN: <p>A random variable <span class="chem">X</span> has expected value <span class="chem">E(X) = 4</span> and variance <span class="chem">Var(X) = 5</span>. Calculate <span class="chem">Var(3X - 7)</span>.</p>
      stem: "<p>確率変数 <span class=\"chem\">X</span> の期待値が <span class=\"chem\">E(X) = 4</span>、分散が <span class=\"chem\">Var(X) = 5</span> である。<span class=\"chem\">Var(3X - 7)</span> を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Recall the linear transformation rule for variance: <span class="chem">Var(aX + b) = a^2 Var(X)</span>.
        "分散の 1 次変換の公式 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span> を思い出しましょう。",
        // EN: Notice that subtracting <span class="chem">7</span> does not affect the variance.
        "<span class=\"chem\">7</span> を引いても分散には影響しないことに注意しましょう。",
      ],
      // EN: <p>Using <span class="chem">Var(aX + b) = a^2 Var(X)</span> with <span class="chem">a = 3, b = -7</span>:<br><span class="chem">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A2]</b>.</p>
      solution: "<p><span class=\"chem\">a = 3, b = -7</span> として <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span> を使うと：<br><span class=\"chem\">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A2]</b>。</p>",
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

    // ── t4-2-q015 · mcq · exam · AHL · AHL 4.14 · 3 marks
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
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = x / 8</span> for <span class="chem">0 ≤ x ≤ 4</span>, and <span class="chem">f(x) = 0</span> otherwise. Find the <strong>median</strong> <span class="chem">m</span> of <span class="chem">X</span> (you may type an exact radical such as <span class="mono">sqrt(8)</span> or a 3 s.f. decimal).</p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数が <span class=\"chem\">0 ≤ x ≤ 4</span> で <span class=\"chem\">f(x) = x / 8</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<span class=\"chem\">X</span> の<strong>中央値</strong> <span class=\"chem\">m</span> を求めなさい (Find)（<span class=\"mono\">sqrt(8)</span> のような正確な根号、または有効数字 3 桁の小数で入力できます）。</p>",
      hints: [
        // EN: The median <span class="chem">m</span> satisfies <span class="chem">∫_0^m (x / 8) dx = 0.5</span>.
        "中央値 <span class=\"chem\">m</span> は <span class=\"chem\">∫_0^m (x / 8) dx = 0.5</span> を満たします。",
        // EN: Solve <span class="chem">m^2 / 16 = 0.5</span> for <span class="chem">m &gt; 0</span>.
        "<span class=\"chem\">m^2 / 16 = 0.5</span> を <span class=\"chem\">m &gt; 0</span> について解きます。",
      ],
      // EN: <p>Setting the cumulative integral equal to <span class="chem">0.5</span>:<br><span class="chem">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class="chem">m^2 = 8 ⇒ m = √8 = 2√2 ≈ 2.83</span> (since <span class="chem">0 ≤ m ≤ 4</span>) <b>[M1 A1]</b>.</p>
      solution: "<p>累積積分を <span class=\"chem\">0.5</span> とおくと：<br><span class=\"chem\">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>。<br><span class=\"chem\">m^2 = 8 ⇒ m = √8 = 2√2 ≈ 2.83</span>（<span class=\"chem\">0 ≤ m ≤ 4</span> より） <b>[M1 A1]</b>。</p>",
    },

    // ── t4-2-q017 · numeric · challenge · AHL · AHL 4.14 · 5 marks
    "t4-2-q017": {
      // EN: <p>A continuous random variable <span class="chem">X</span> has probability density function <span class="chem">f(x) = 3x^2</span> for <span class="chem">0 ≤ x ≤ 1</span>, and <span class="chem">f(x) = 0</span> otherwise. Find <span class="chem">Var(X)</span> (type an exact fraction such as <span class="mono">3/80</span> or a 3 s.f. decimal).</p>
      stem: "<p>連続型確率変数 <span class=\"chem\">X</span> の確率密度関数が <span class=\"chem\">0 ≤ x ≤ 1</span> で <span class=\"chem\">f(x) = 3x^2</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<span class=\"chem\">Var(X)</span> を求めなさい (Find)（<span class=\"mono\">3/80</span> のような正確な分数、または有効数字 3 桁の小数で入力してください）。</p>",
      hints: [
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
        // EN: A1: Integrates correctly to k [3x²/2 − x³/3]_0^3 = (9/2)k = 1.
        "A1：正しく積分して k [3x²/2 − x³/3]_0^3 = (9/2)k = 1 を得る。",
        // EN: A1: Concludes k = 2/9.
        "A1：k = 2/9 と結論づける。",
        // EN: M1: Rewrites P(X > 1 | X < 2) as P(1 < X < 2) / P(X < 2).
        "M1：P(X > 1 | X < 2) を P(1 < X < 2) / P(X < 2) と書き換える。",
        // EN: A1: Evaluates P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27.
        "A1：P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27 を計算する。",
        // EN: A1: Evaluates P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27.
        "A1：P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27 を計算する。",
        // EN: A1: Simplifies the ratio to 13/20 (or 0.65).
        "A1：比を簡単にして 13/20（または 0.65）を得る。",
      ],
    },

  }
});
