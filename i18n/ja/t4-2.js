/* t4-2 — ja translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't4-2', {
  strings: {

    // page title (browser tab)
    "4.2 Probability, distributions, Bayes and continuous RVs | Analysis Lab": "4.2 確率・確率分布・ベイズの定理・連続型確率変数 | Analysis Lab",

    // Probability, distributions, Bayes and continuous RVs > page header > p
    "Topic 4.2 · SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14": "Topic 4.2 · SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14",

    // Probability, distributions, Bayes and continuous RVs > page header > h1
    "Probability, distributions, Bayes and continuous RVs": "確率・確率分布・ベイズの定理・連続型確率変数",

    // Probability, distributions, Bayes and continuous RVs > page header > span
    "How do we update probabilities when new evidence arrives, and how do discrete sums become continuous integrals when outcomes vary smoothly?": "新しい情報が得られたとき確率をどのように更新し、結果が連続的に変化するとき離散的な和はどのように連続的な積分へと変わるのでしょうか？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "チェックリスト",

    // What you need to be able to do > h2
    "What you need to be able to do": "できるようになること",

    // What you need to be able to do > checklist > span
    "Use Venn diagrams, tree diagrams, and the addition rule <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>; distinguish mutually exclusive (<span class=\"chem\">P(A ∩ B) = 0</span>) from independent (<span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>) events, and evaluate conditional probabilities <span class=\"chem\">P(A | B)</span>.": "ベン図、樹形図、加法定理 <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span> を使い、排反事象（<span class=\"chem\">P(A ∩ B) = 0</span>）と独立な事象（<span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>）を区別し、条件付き確率 <span class=\"chem\">P(A | B)</span> を計算できる。",

    // What you need to be able to do > checklist > span
    "Verify discrete probability distributions (<span class=\"chem\">Σ P(X = x) = 1</span>), calculate expected value <span class=\"chem\">E(X) = Σ x P(X = x)</span>, and determine whether a game is fair (<span class=\"chem\">E(gain) = 0</span>).": "離散型確率分布（<span class=\"chem\">Σ P(X = x) = 1</span>）を確認し、期待値 <span class=\"chem\">E(X) = Σ x P(X = x)</span> を計算し、ゲームが公平か（<span class=\"chem\">E(gain) = 0</span>）を判定できる。",

    // What you need to be able to do > checklist > span
    "Model fixed-trial experiments with the Binomial distribution <span class=\"chem\">X ~ B(n, p)</span>, compute probabilities by formula and GDC, and solve minimum-trial problems <span class=\"chem\">1 - (1 - p)^n &gt; c</span>.": "固定回数の試行を二項分布 <span class=\"chem\">X ~ B(n, p)</span> でモデル化し、公式や GDC で確率を計算し、最小試行回数の問題 <span class=\"chem\">1 - (1 - p)^n &gt; c</span> を解ける。",

    // What you need to be able to do > checklist > span
    "Compute Normal probabilities and inverse Normal quantiles, standardize to <span class=\"chem\">Z = (X - μ)/σ ~ N(0, 1)</span> to find unknown <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span>, and link Normal probabilities into Binomial or conditional models.": "正規分布の確率と逆正規分位数を計算し、<span class=\"chem\">Z = (X - μ)/σ ~ N(0, 1)</span> に標準化して未知の <span class=\"chem\">μ</span> と <span class=\"chem\">σ</span> を求め、正規分布の確率を二項分布や条件付き確率モデルと結びつけられる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply Bayes' theorem <span class=\"chem\">P(B_i | A)</span> for up to three partitioning events <span class=\"chem\">B_1, B_2, B_3</span> to reverse conditional probabilities.": "最大 3 つの分割事象 <span class=\"chem\">B_1, B_2, B_3</span> に対してベイズの定理 <span class=\"chem\">P(B_i | A)</span> を適用し、条件付き確率の向きを反転できる。",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute discrete variance <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>, apply linear transformations <span class=\"chem\">E(aX + b)</span> and <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>, and find the mode, median, mean, and variance of a continuous random variable from its PDF <span class=\"chem\">f(x)</span>.": "離散型確率変数の分散 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span> を計算し、1 次変換 <span class=\"chem\">E(aX + b)</span> や <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span> を適用でき、確率密度関数 <span class=\"chem\">f(x)</span> から連続型確率変数の最頻値・中央値・平均・分散を求められる。",

    // Question decoder: spotting which probability tool to use > data-toc attribute
    "Question decoder": "問題デコーダー",

    // Question decoder: spotting which probability tool to use > h2
    "Question decoder: spotting which probability tool to use": "問題デコーダー：使うべき確率ツールを見抜く",

    // Question decoder: spotting which probability tool to use > p
    "Probability exam questions hide their mathematical structure inside everyday stories. Scan the wording for these trigger phrases before writing your first line of working.": "確率の試験問題は日常的な文章の中に数学的構造を隠しています。最初の式を書く前に、問題文から次のキーワードを探しましょう。",

    // Question decoder: spotting which probability tool to use > table > caption
    "Question decoder — Probability, distributions, Bayes' theorem and continuous RVs": "問題デコーダー — 確率・確率分布・ベイズの定理・連続型確率変数",

    // Question decoder: spotting which probability tool to use > table > th
    "What the exam question says": "試験問題に書かれている表現",

    // Question decoder: spotting which probability tool to use > table > th
    "What it means (formula &amp; setup)": "数学的な意味（公式と立式）",

    // Question decoder: spotting which probability tool to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（電卓不可）vs Paper 2（GDC 可）",

    // Question decoder: spotting which probability tool to use > table > th
    "“Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <strong>mutually exclusive</strong>” vs “<strong>independent</strong>”": "「事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は<strong>排反</strong>である」 vs 「<strong>独立</strong>である」",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Mutually exclusive</strong>: cannot happen together, so <span class=\"chem\">P(A ∩ B) = 0</span>.<br><strong>Independent</strong>: one does not affect the other, so <span class=\"chem\">P(A ∩ B) = P(A)P(B)</span> (and <span class=\"chem\">P(A | B) = P(A)</span>).": "<strong>排反事象</strong>：同時に起こらないので <span class=\"chem\">P(A ∩ B) = 0</span>。<br><strong>独立な事象</strong>：一方が他方に影響しないので <span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>（かつ <span class=\"chem\">P(A | B) = P(A)</span>）。",

    // Question decoder: spotting which probability tool to use > table > td
    "Substitute <span class=\"chem\">P(A ∩ B) = 0</span> or <span class=\"chem\">P(A)P(B)</span> into <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>. Never confuse the two!": "<span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span> に <span class=\"chem\">P(A ∩ B) = 0</span> または <span class=\"chem\">P(A)P(B)</span> を代入します。この 2 つを決して混同しないでください！",

    // Question decoder: spotting which probability tool to use > table > th
    "“<strong>Given that</strong> / knowing that / among those who…”": "「<strong>〜であるとき</strong> / 〜であることがわかっているとき / 〜のうち…」",

    // Question decoder: spotting which probability tool to use > table > td
    "Conditional probability <span class=\"chem\">P(A | B) = P(A ∩ B) / P(B)</span>, where <span class=\"chem\">B</span> is the known condition.": "条件付き確率 <span class=\"chem\">P(A | B) = P(A ∩ B) / P(B)</span>（<span class=\"chem\">B</span> が既知の条件）。",

    // Question decoder: spotting which probability tool to use > table > td
    "Write the fraction <span class=\"chem\">P(A ∩ B) / P(B)</span> explicitly—even inside a Normal or Binomial question (e.g., <span class=\"chem\">P(X &gt; 15 | X &gt; 10) = P(X &gt; 15) / P(X &gt; 10)</span>)!": "正規分布や二項分布の問題であっても、分数 <span class=\"chem\">P(A ∩ B) / P(B)</span> を明示的に書きましょう（例：<span class=\"chem\">P(X &gt; 15 | X &gt; 10) = P(X &gt; 15) / P(X &gt; 10)</span>）！",

    // Question decoder: spotting which probability tool to use > table > th
    "“Stage 1 priors <span class=\"chem\">P(B_i)</span> and stage 2 conditionals <span class=\"chem\">P(A | B_i)</span> are given; find <span class=\"chem\">P(B_i | A)</span>”": "「第 1 段階の事前確率 <span class=\"chem\">P(B_i)</span> と第 2 段階の条件付き確率 <span class=\"chem\">P(A | B_i)</span> が与えられ、<span class=\"chem\">P(B_i | A)</span> を求める」",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Bayes' theorem</strong> (reversing the tree): divide the single desired path <span class=\"chem\">P(B_i)P(A | B_i)</span> by the sum of all paths reaching <span class=\"chem\">A</span>.": "<strong>ベイズの定理</strong>（樹形図の逆向き）：求める 1 つの経路 <span class=\"chem\">P(B_i)P(A | B_i)</span> を、<span class=\"chem\">A</span> に到達するすべての経路の和で割ります。",

    // Question decoder: spotting which probability tool to use > table > td
    "Draw a two-stage tree diagram, multiply along each branch to <span class=\"chem\">A</span>, and form <span class=\"chem\">P(B_i ∩ A) / P(A)</span>.": "2 段階の樹形図を描き、<span class=\"chem\">A</span> に至る各枝に沿って確率を掛け、分数 <span class=\"chem\">P(B_i ∩ A) / P(A)</span> を作ります。",

    // Question decoder: spotting which probability tool to use > table > th
    "“Fixed number of <span class=\"chem\">n</span> independent trials with constant success probability <span class=\"chem\">p</span>”": "「成功確率 <span class=\"chem\">p</span> が一定の独立な <span class=\"chem\">n</span> 回の反復試行」",

    // Question decoder: spotting which probability tool to use > table > td
    "Binomial distribution <span class=\"chem\">X ~ B(n, p)</span> with <span class=\"chem\">P(X = r) = nCr p^r (1 - p)^{n-r}</span>, <span class=\"chem\">E(X) = np</span>, <span class=\"chem\">Var(X) = np(1 - p)</span>.": "二項分布 <span class=\"chem\">X ~ B(n, p)</span>：<span class=\"chem\">P(X = r) = nCr p^r (1 - p)^{n-r}</span>、<span class=\"chem\">E(X) = np</span>、<span class=\"chem\">Var(X) = np(1 - p)</span>。",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Paper 1</strong>: Use <span class=\"chem\">nCr p^r (1 - p)^{n-r}</span>.<br><strong>Paper 2</strong>: Watch out for <span class=\"mono\">binomcdf</span>: <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span>!": "<strong>Paper 1</strong>：<span class=\"chem\">nCr p^r (1 - p)^{n-r}</span> を使います。<br><strong>Paper 2</strong>：<span class=\"mono\">binomcdf</span> に注意：<span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span>！",

    // Question decoder: spotting which probability tool to use > table > th
    "“Find the minimum number of trials <span class=\"chem\">n</span> such that <span class=\"chem\">P(at least one success) &gt; 0.95</span>”": "「<span class=\"chem\">P(at least one success) &gt; 0.95</span>（少なくとも 1 回成功する確率 &gt; 0.95）となる最小の試行回数 <span class=\"chem\">n</span> を求めよ」",

    // Question decoder: spotting which probability tool to use > table > td
    "Use the complement: <span class=\"chem\">P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)^n &gt; 0.95 ⇒ (1 - p)^n &lt; 0.05</span>.": "余事象を使います：<span class=\"chem\">P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)^n &gt; 0.95 ⇒ (1 - p)^n &lt; 0.05</span>。",

    // Question decoder: spotting which probability tool to use > table > td
    "Solve <span class=\"chem\">n &gt; ln(0.05) / ln(1 - p)</span> (remembering <span class=\"chem\">ln(1 - p) &lt; 0</span> flips the inequality!) or inspect a GDC table, then round <strong>up</strong> to the next integer.": "<span class=\"chem\">n &gt; ln(0.05) / ln(1 - p)</span> を解き（<span class=\"chem\">ln(1 - p) &lt; 0</span> で不等号が反転することに注意！）、または GDC の表を確認して、次の整数へ<strong>切り上げ</strong>ます。",

    // Question decoder: spotting which probability tool to use > table > th
    "“Continuous measurement <span class=\"chem\">X ~ N(μ, σ^2)</span> with unknown <span class=\"chem\">μ</span> or <span class=\"chem\">σ</span>”": "「<span class=\"chem\">μ</span> または <span class=\"chem\">σ</span> が未知の連続測定値 <span class=\"chem\">X ~ N(μ, σ^2)</span>」",

    // Question decoder: spotting which probability tool to use > table > td
    "Standardize to <span class=\"chem\">Z ~ N(0, 1)</span> using <span class=\"chem\">z = (x - μ) / σ</span>, where <span class=\"chem\">z = invNorm(left-tail area)</span>.": "<span class=\"chem\">z = (x - μ) / σ</span> を使って <span class=\"chem\">Z ~ N(0, 1)</span> に標準化します（<span class=\"chem\">z = invNorm(left-tail area)</span>）。",

    // Question decoder: spotting which probability tool to use > table > td
    "Write <span class=\"chem\">x - μ = z σ</span>. If both <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span> are unknown, set up two linear equations and solve simultaneously.": "<span class=\"chem\">x - μ = z σ</span> と書きます。<span class=\"chem\">μ</span> と <span class=\"chem\">σ</span> の両方が未知のときは、2 つの連立一次方程式を立てて解きます。",

    // Question decoder: spotting which probability tool to use > not needed for IB > p
    "<strong>What is NOT in the IB Math AA HL syllabus:</strong> The Poisson distribution, Central Limit Theorem (sample mean distribution <span class=\"chem\">X̄ ~ N(μ, σ^2/n)</span>), confidence intervals, and linear combinations of <em>two</em> independent random variables (<span class=\"chem\">aX + bY</span>) are in IB Math AI HL, <strong>not</strong> IB Math AA HL. In AA HL 4.14, linear transformations apply only to a single random variable (<span class=\"chem\">aX + b</span>).": "<strong>IB Math AA HL の範囲外のもの：</strong> ポアソン分布、中心極限定理（標本平均の分布 <span class=\"chem\">X̄ ~ N(μ, σ^2/n)</span>）、信頼区間、および<em>2 つ</em>の独立な確率変数の線形結合（<span class=\"chem\">aX + bY</span>）は IB Math AI HL の範囲であり、IB Math AA HL では<strong>ありません</strong>。AA HL 4.14 では、1 次変換は単一の確率変数（<span class=\"chem\">aX + b</span>）にのみ適用されます。",

    // Combined events, independence and conditional probability > data-toc attribute
    "Events & conditional": "事象と条件付き確率",

    // Combined events, independence and conditional probability > h2
    "Combined events, independence and conditional probability": "複合事象・独立性と条件付き確率",

    // Combined events, independence and conditional probability > p
    "For any two events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> in a sample space <span class=\"chem\">U</span>, the probability of their union (at least one occurring) and the conditional probability of <span class=\"chem\">A</span> given <span class=\"chem\">B</span> are connected by two fundamental identities in your Formula Booklet:": "標本空間 <span class=\"chem\">U</span> 内の任意の 2 つの事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> について、和事象（少なくとも一方が起こる）の確率と <span class=\"chem\">B</span> が起こったもとでの <span class=\"chem\">A</span> の条件付き確率は、公式集にある 2 つの基本公式で結ばれています：",

    // Combined events, independence and conditional probability > equation > dd
    "probability that <span class=\"chem\">A</span> or <span class=\"chem\">B</span> (or both) occurs": "<span class=\"chem\">A</span> または <span class=\"chem\">B</span>（あるいは両方）が起こる確率",

    // Combined events, independence and conditional probability > equation > dd
    "probability that both <span class=\"chem\">A</span> and <span class=\"chem\">B</span> occur together": "<span class=\"chem\">A</span> と <span class=\"chem\">B</span> が同時に起こる確率",

    // Combined events, independence and conditional probability > equation > dd
    "probability of <span class=\"chem\">A</span> occurring given that <span class=\"chem\">B</span> has already occurred": "<span class=\"chem\">B</span> がすでに起こったという条件のもとで <span class=\"chem\">A</span> が起こる確率",

    // Combined events, independence and conditional probability > common mistake > p
    "<strong>Never confuse Mutually Exclusive with Independent:</strong> Two events with non-zero probabilities (<span class=\"chem\">P(A) &gt; 0, P(B) &gt; 0</span>) can <strong>never</strong> be both mutually exclusive and independent! If <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <dfn data-def=\"Two events that cannot occur at the same time, so P(A ∩ B) = 0.\">mutually exclusive</dfn>, then <span class=\"chem\">P(A ∩ B) = 0</span>. If they are <dfn data-def=\"Two events where the occurrence of one does not change the probability of the other, so P(A ∩ B) = P(A)P(B).\">independent</dfn>, then <span class=\"chem\">P(A ∩ B) = P(A)P(B) &gt; 0</span>.": "<strong>排反と独立を絶対に混同しない：</strong> 確率が正の 2 つの事象（<span class=\"chem\">P(A) &gt; 0, P(B) &gt; 0</span>）が、排反かつ独立になることは<strong>絶対に</strong>ありません！<span class=\"chem\">A</span> と <span class=\"chem\">B</span> が<dfn data-def=\"同時に起こることがない 2 つの事象。P(A ∩ B) = 0。\">排反事象 <span class=\"en-term\">(mutually exclusive)</span></dfn>なら <span class=\"chem\">P(A ∩ B) = 0</span> です。一方、<dfn data-def=\"一方の事象が起こることが他方の確率に影響しない 2 つの事象。P(A ∩ B) = P(A)P(B)。\">独立 <span class=\"en-term\">(independent)</span></dfn>なら <span class=\"chem\">P(A ∩ B) = P(A)P(B) &gt; 0</span> です。",

    // Combined events, independence and conditional probability > common mistake > data-def attribute
    "Two events that cannot occur at the same time, so P(A ∩ B) = 0.": "同時に起こることがない 2 つの事象。P(A ∩ B) = 0。",

    // Combined events, independence and conditional probability > common mistake > data-def attribute
    "Two events where the occurrence of one does not change the probability of the other, so P(A ∩ B) = P(A)P(B).": "一方の事象が起こることが他方の確率に影響しない 2 つの事象。P(A ∩ B) = P(A)P(B)。",

    // Combined events, independence and conditional probability > p
    "When solving Venn diagram problems, always fill in the <strong>intersection <span class=\"chem\">P(A ∩ B)</span> first</strong>, then subtract <span class=\"chem\">P(A ∩ B)</span> from <span class=\"chem\">P(A)</span> and <span class=\"chem\">P(B)</span> to get the crescent regions <span class=\"chem\">P(A ∩ B')</span> and <span class=\"chem\">P(A' ∩ B)</span>.": "ベン図の問題を解くときは、必ず<strong>共通部分 <span class=\"chem\">P(A ∩ B)</span> を最初に埋め</strong>、それから <span class=\"chem\">P(A)</span> と <span class=\"chem\">P(B)</span> から <span class=\"chem\">P(A ∩ B)</span> を引いて三日月型の領域 <span class=\"chem\">P(A ∩ B')</span> と <span class=\"chem\">P(A' ∩ B)</span> を求めましょう。",

    // Combined events, independence and conditional probability > worked example > h3
    "Solving for an unknown probability using independence and conditional probability": "独立性と条件付き確率を使って未知の確率を求める",

    // Combined events, independence and conditional probability > worked example > p
    "Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are independent with <span class=\"chem\">P(A) = 0.4</span> and <span class=\"chem\">P(A ∪ B) = 0.7</span>.<br> (a) Find <span class=\"chem\">P(B)</span>. <strong>[3 marks]</strong><br> (b) Find <span class=\"chem\">P(A' | B')</span> (the probability that <span class=\"chem\">A</span> does not occur given that <span class=\"chem\">B</span> does not occur). <strong>[2 marks]</strong>": "事象 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は独立であり、<span class=\"chem\">P(A) = 0.4</span>、<span class=\"chem\">P(A ∪ B) = 0.7</span> である。<br> (a) <span class=\"chem\">P(B)</span> を求めなさい (Find)。 <strong>[3 marks]</strong><br> (b) <span class=\"chem\">P(A' | B')</span>（<span class=\"chem\">B</span> が起こらないときに <span class=\"chem\">A</span> が起こらない確率）を求めなさい (Find)。 <strong>[2 marks]</strong>",

    // Combined events, independence and conditional probability > worked example > data-title attribute
    "(a) Substitute P(A ∩ B) = P(A)P(B) into the union formula": "(a) 和事象の公式に P(A ∩ B) = P(A)P(B) を代入する",

    // Combined events, independence and conditional probability > worked example > p
    "Independence means P(A ∩ B) = 0.4 P(B).": "独立なので P(A ∩ B) = 0.4 P(B) です。",

    // Combined events, independence and conditional probability > worked example > data-title attribute
    "(b) Use conditional probability (or independence of complements)": "(b) 条件付き確率（または余事象の独立性）を使う",

    // Combined events, independence and conditional probability > worked example > p
    "Outside the union A ∪ B lies A′ ∩ B′, which has probability 1 − P(A ∪ B) = 0.3. (Or note that if A and B are independent, A′ and B′ are also independent!)": "和事象 A ∪ B の外側が A′ ∩ B′ であり、その確率は 1 − P(A ∪ B) = 0.3 です。（あるいは、A と B が独立なら A′ と B′ も独立であることも使えます！）",

    // Combined events, independence and conditional probability > try it > p
    "Given that <span class=\"chem\">P(A) = 0.5</span>, <span class=\"chem\">P(B) = 0.6</span>, and <span class=\"chem\">P(A ∪ B) = 0.86</span>, calculate the conditional probability <span class=\"chem\">P(A | B)</span>.": "<span class=\"chem\">P(A) = 0.5</span>、<span class=\"chem\">P(B) = 0.6</span>、<span class=\"chem\">P(A ∪ B) = 0.86</span> のとき、条件付き確率 <span class=\"chem\">P(A | B)</span> を計算しなさい (Calculate)。",

    // Combined events, independence and conditional probability > try it > li
    "First find <span class=\"chem\">P(A ∩ B) = P(A) + P(B) - P(A ∪ B)</span>.": "まず <span class=\"chem\">P(A ∩ B) = P(A) + P(B) - P(A ∪ B)</span> を求めます。",

    // Combined events, independence and conditional probability > try it > li
    "Now divide <span class=\"chem\">P(A ∩ B) = 0.24</span> by <span class=\"chem\">P(B) = 0.6</span>.": "次に <span class=\"chem\">P(A ∩ B) = 0.24</span> を <span class=\"chem\">P(B) = 0.6</span> で割ります。",

    // Discrete random variables and the Binomial distribution > data-toc attribute
    "Discrete & Binomial": "離散確率変数と二項分布",

    // Discrete random variables and the Binomial distribution > h2
    "Discrete random variables and the Binomial distribution": "離散型確率変数と二項分布",

    // Discrete random variables and the Binomial distribution > p
    "A discrete random variable <span class=\"chem\">X</span> takes distinct values <span class=\"chem\">x_1, x_2, ...</span> with probabilities <span class=\"chem\">P(X = x_i) ≥ 0</span> whose sum must equal <span class=\"chem\">1</span>. Its long-run average is the <strong>expected value</strong> <span class=\"chem\">E(X)</span>:": "離散型確率変数 <span class=\"chem\">X</span> は飛び飛びの値 <span class=\"chem\">x_1, x_2, ...</span> をとり、それぞれの確率 <span class=\"chem\">P(X = x_i) ≥ 0</span> の総和は <span class=\"chem\">1</span> でなければなりません。その長期的な平均が<strong>期待値</strong> <span class=\"chem\">E(X)</span> です：",

    // Discrete random variables and the Binomial distribution > equation > dd
    "probability mass function (every probability is in <span class=\"chem\">[0, 1]</span> and total sum is <span class=\"chem\">1</span>)": "確率質量関数（各確率は <span class=\"chem\">[0, 1]</span> にあり、総和は <span class=\"chem\">1</span>）",

    // Discrete random variables and the Binomial distribution > equation > dd
    "expected value (mean <span class=\"chem\">μ</span>); in a <strong>fair game</strong>, <span class=\"chem\">E(net gain) = 0</span>": "期待値（平均 <span class=\"chem\">μ</span>）；<strong>公平なゲーム</strong>では <span class=\"chem\">E(net gain) = 0</span>",

    // Discrete random variables and the Binomial distribution > h3
    "The Binomial distribution <span class=\"chem\">X ~ B(n, p)</span>": "二項分布 <span class=\"chem\">X ~ B(n, p)</span>",

    // Discrete random variables and the Binomial distribution > p
    "When an experiment consists of <span class=\"chem\">n</span> independent trials, each having only two outcomes (<em>success</em> with constant probability <span class=\"chem\">p</span> and <em>failure</em> with probability <span class=\"chem\">q = 1 - p</span>), the total number of successes <span class=\"chem\">X</span> follows a <strong>Binomial distribution</strong> <span class=\"chem\">X ~ B(n, p)</span>:": "実験が <span class=\"chem\">n</span> 回の独立な試行からなり、各試行の結果が 2 通り（一定の確率 <span class=\"chem\">p</span> の<em>成功</em>と確率 <span class=\"chem\">q = 1 - p</span> の<em>失敗</em>）しかないとき、成功回数 <span class=\"chem\">X</span> は<strong>二項分布</strong> <span class=\"chem\">X ~ B(n, p)</span> に従います：",

    // Discrete random variables and the Binomial distribution > equation > maths line
    "<i>P</i>(<i>X</i> = <i>r</i>) = <span class=\"chem\">nCr</span> <i>p</i><sup><i>r</i></sup>(1 − <i>p</i>)<sup><i>n</i>−<i>r</i></sup> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>np</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>np</i>(1 − <i>p</i>)": "<i>P</i>(<i>X</i> = <i>r</i>) = <span class=\"chem\">nCr</span> <i>p</i><sup><i>r</i></sup>(1 − <i>p</i>)<sup><i>n</i>−<i>r</i></sup> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>np</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>np</i>(1 − <i>p</i>)",

    // Discrete random variables and the Binomial distribution > equation > dd
    "number of independent trials <span class=\"chem\">n</span> and probability of success <span class=\"chem\">p</span> on each trial": "独立な試行回数 <span class=\"chem\">n</span> と各試行での成功確率 <span class=\"chem\">p</span>",

    // Discrete random variables and the Binomial distribution > equation > dd
    "number of successes (<span class=\"chem\">r = 0, 1, 2, ..., n</span>)": "成功回数（<span class=\"chem\">r = 0, 1, 2, ..., n</span>）",

    // Discrete random variables and the Binomial distribution > common mistake > p
    "<strong>GDC <span class=\"mono\">binomcdf</span> Inequality Trap:</strong> On TI and Casio calculators, <span class=\"mono\">binomcdf(n, p, k)</span> always calculates <span class=\"chem\">P(X ≤ k)</span> (up to and including <span class=\"chem\">k</span>). For other inequalities with discrete integers, rewrite them in terms of <span class=\"chem\">≤</span> first:<br> • <span class=\"chem\">P(X &lt; k) = P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X &gt; k) = 1 - P(X ≤ k)</span>": "<strong>GDC <span class=\"mono\">binomcdf</span> の不等号の罠：</strong> TI や Casio の電卓では、<span class=\"mono\">binomcdf(n, p, k)</span> は常に <span class=\"chem\">P(X ≤ k)</span>（<span class=\"chem\">k</span> 以下）を計算します。離散整数の他の不等号は、最初に <span class=\"chem\">≤</span> の形に書き換えましょう：<br> • <span class=\"chem\">P(X &lt; k) = P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X &gt; k) = 1 - P(X ≤ k)</span>",

    // Discrete random variables and the Binomial distribution > worked example > h3
    "Binomial probabilities and finding the minimum number of trials n": "二項分布の確率と最小試行回数 n の求め方",

    // Discrete random variables and the Binomial distribution > worked example > p
    "An archer hits the bullseye on any shot with constant probability <span class=\"chem\">p = 0.25</span>, independently of other shots.<br> (a) In <span class=\"chem\">8</span> shots, find the probability that the archer hits the bullseye <strong>at least 3 times</strong>. <strong>[3 marks]</strong><br> (b) Find the minimum number of shots <span class=\"chem\">n</span> required so that the probability of hitting the bullseye <strong>at least once</strong> is greater than <span class=\"chem\">0.99</span>. <strong>[4 marks]</strong>": "弓道選手が各射で一定の確率 <span class=\"chem\">p = 0.25</span> で独立に的の中心（ブルズアイ）に命中させる。<br> (a) <span class=\"chem\">8</span> 回射るとき、<strong>少なくとも 3 回</strong>命中する確率を求めなさい (Find)。 <strong>[3 marks]</strong><br> (b) <strong>少なくとも 1 回</strong>命中する確率が <span class=\"chem\">0.99</span> より大きくなるために必要な最小の試行回数 <span class=\"chem\">n</span> を求めなさい (Find)。 <strong>[4 marks]</strong>",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "(a) Define X ~ B(8, 0.25) and rewrite P(X ≥ 3) using the complement": "(a) X ~ B(8, 0.25) と定義し、余事象を使って P(X ≥ 3) を書き換える",

    // Discrete random variables and the Binomial distribution > worked example > p
    "On a GDC, binomcdf computes P(X ≤ k), so P(X ≥ 3) = 1 − P(X ≤ 2).": "GDC では binomcdf が P(X ≤ k) を計算するので、P(X ≥ 3) = 1 − P(X ≤ 2) とします。",

    // Discrete random variables and the Binomial distribution > worked example > maths line
    "Let <i>X</i> ~ B(8, 0.25). <i>P</i>(<i>X</i> ≥ 3) = 1 − <i>P</i>(<i>X</i> ≤ 2) <b>[M1]</b>": "<i>X</i> ~ B(8, 0.25) とおく。 <i>P</i>(<i>X</i> ≥ 3) = 1 − <i>P</i>(<i>X</i> ≤ 2) <b>[M1]</b>",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "(b) Set up the complement inequality 1 − P(Y = 0) > 0.99 for Y ~ B(n, 0.25)": "(b) Y ~ B(n, 0.25) について余事象の不等式 1 − P(Y = 0) > 0.99 を立てる",

    // Discrete random variables and the Binomial distribution > worked example > p
    "“At least once” is the complement of “zero hits in all n shots,” which has probability (1 − 0.25)ⁿ = 0.75ⁿ.": "「少なくとも 1 回」は「n 回すべて外れる」の余事象であり、その確率は (1 − 0.25)ⁿ = 0.75ⁿ です。",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "Solve using logarithms and round UP to the next integer": "対数を使って解き、次の整数へ切り上げる",

    // Discrete random variables and the Binomial distribution > worked example > p
    "Dividing by ln(0.75) &lt; 0 reverses the inequality sign. Since n must be an integer, always round up.": "ln(0.75) &lt; 0 で割ると不等号の向きが反転します。n は整数でなければならないので、必ず切り上げます。",

    // Discrete random variables and the Binomial distribution > worked example > maths line
    "Therefore, the minimum number of shots is <i>n</i> = <b>17</b>. <b>[A1]</b>": "したがって、最小の試行回数は <i>n</i> = <b>17</b> である。 <b>[A1]</b>",

    // Discrete random variables and the Binomial distribution > worked example > p
    "(a) 0.321; (b) n = 17 shots": "(a) 0.321；(b) n = 17 回",

    // Discrete random variables and the Binomial distribution > try it > p
    "A biased five-sided spinner has probability <span class=\"chem\">p = 0.20</span> of landing on red on each spin. If it is spun <span class=\"chem\">n = 10</span> times independently, calculate the probability of obtaining <strong>at least 3</strong> reds, giving your answer to 3 s.f.": "偏りのある五角形スピナーが各回転で赤に止まる確率は <span class=\"chem\">p = 0.20</span> である。独立に <span class=\"chem\">n = 10</span> 回回すとき、赤が<strong>少なくとも 3 回</strong>出る確率を計算し、有効数字 3 桁で答えなさい。",

    // Discrete random variables and the Binomial distribution > try it > li
    "Rewrite <span class=\"chem\">P(X ≥ 3) = 1 - P(X ≤ 2)</span> where <span class=\"chem\">X ~ B(10, 0.20)</span>.": "<span class=\"chem\">X ~ B(10, 0.20)</span> として <span class=\"chem\">P(X ≥ 3) = 1 - P(X ≤ 2)</span> と書き換えます。",

    // Discrete random variables and the Binomial distribution > try it > li
    "Using <span class=\"mono\">binomcdf(10, 0.20, 2) = 0.6778</span>, subtract from <span class=\"chem\">1</span>.": "<span class=\"mono\">binomcdf(10, 0.20, 2) = 0.6778</span> を使って <span class=\"chem\">1</span> から引きます。",

    // The Normal distribution and standardization (z-scores) > data-toc attribute
    "Normal & z-scores": "正規分布と標準化",

    // The Normal distribution and standardization (z-scores) > h2
    "The Normal distribution and standardization (<span class=\"chem\">z</span>-scores)": "正規分布と標準化（<span class=\"chem\">z</span> 値）",

    // The Normal distribution and standardization (z-scores) > p
    "A continuous random variable <span class=\"chem\">X ~ N(μ, σ^2)</span> has a symmetric, bell-shaped probability curve centered at the mean <span class=\"chem\">μ</span> (= median = mode), with total area under the curve equal to <span class=\"chem\">1</span>. Notice that for any continuous random variable, the probability of a single exact point is zero (<span class=\"chem\">P(X = a) = 0</span>), so <span class=\"chem\">P(X &lt; a) = P(X ≤ a)</span>.": "連続型確率変数 <span class=\"chem\">X ~ N(μ, σ^2)</span> は、平均 <span class=\"chem\">μ</span>（＝中央値＝最頻値）を中心とする左右対称の釣り鐘型の確率曲線をもち、曲線の下の全面積は <span class=\"chem\">1</span> です。任意の連続型確率変数では、1 点の確率はゼロ（<span class=\"chem\">P(X = a) = 0</span>）なので、<span class=\"chem\">P(X &lt; a) = P(X ≤ a)</span> となります。",

    // The Normal distribution and standardization (z-scores) > p
    "When <span class=\"chem\">μ</span> or <span class=\"chem\">σ</span> is unknown, transform <span class=\"chem\">X</span> into the <strong>standard normal variable</strong> <span class=\"chem\">Z ~ N(0, 1)</span>:": "<span class=\"chem\">μ</span> または <span class=\"chem\">σ</span> が未知のときは、<span class=\"chem\">X</span> を<strong>標準正規確率変数</strong> <span class=\"chem\">Z ~ N(0, 1)</span> に変換します：",

    // The Normal distribution and standardization (z-scores) > equation > dd
    "number of standard deviations <span class=\"chem\">x</span> lies above (<span class=\"chem\">z &gt; 0</span>) or below (<span class=\"chem\">z &lt; 0</span>) the mean <span class=\"chem\">μ</span>": "<span class=\"chem\">x</span> が平均 <span class=\"chem\">μ</span> から上（<span class=\"chem\">z &gt; 0</span>）または下（<span class=\"chem\">z &lt; 0</span>）に標準偏差何個分離れているか",

    // The Normal distribution and standardization (z-scores) > equation > dt
    "invNorm(p)": "invNorm(p)",

    // The Normal distribution and standardization (z-scores) > equation > dd
    "returns the <span class=\"chem\">z</span>-score having <strong>left-tail area</strong> <span class=\"chem\">P(Z &lt; z) = p</span>": "<strong>左側の面積</strong> <span class=\"chem\">P(Z &lt; z) = p</span> となる <span class=\"chem\">z</span> 値を返す",

    // The Normal distribution and standardization (z-scores) > widget > data-title attribute
    "Interactive Normal distribution and z-score shaded tail calculator": "正規分布と z 値・面積のインタラクティブ計算ツール",

    // The Normal distribution and standardization (z-scores) > widget > figcaption
    "Switch between left-tail <span class=\"chem\">P(X &lt; b)</span>, right-tail <span class=\"chem\">P(X &gt; a)</span>, and interval <span class=\"chem\">P(a &lt; X &lt; b)</span> modes. Adjust <span class=\"chem\">μ</span>, <span class=\"chem\">σ</span>, <span class=\"chem\">a</span>, and <span class=\"chem\">b</span> to see how each boundary maps to its standardized <span class=\"chem\">z</span>-score <span class=\"chem\">z = (x - μ)/σ</span>.": "左裾 <span class=\"chem\">P(X &lt; b)</span>、右裾 <span class=\"chem\">P(X &gt; a)</span>、区間 <span class=\"chem\">P(a &lt; X &lt; b)</span> モードを切り替えてみましょう。<span class=\"chem\">μ</span>、<span class=\"chem\">σ</span>、<span class=\"chem\">a</span>、<span class=\"chem\">b</span> を動かすと、各境界が標準化された <span class=\"chem\">z</span> 値 <span class=\"chem\">z = (x - μ)/σ</span> にどう対応するかがわかります。",

    // The Normal distribution and standardization (z-scores) > exam tip (shown in English + translation) > p
    "<strong>Classic Paper 2 Chain (Normal → Binomial / Conditional):</strong> Part (a) asks for a Normal probability <span class=\"chem\">p = P(X &gt; k)</span> for <em>one</em> randomly chosen item. Part (b) then picks a sample of <span class=\"chem\">n</span> independent items and asks for the probability that <em>at least <span class=\"chem\">r</span></em> of them satisfy <span class=\"chem\">X &gt; k</span>. Recognize this immediately as a transition from <span class=\"chem\">X ~ N(μ, σ^2)</span> to a new Binomial variable <span class=\"chem\">Y ~ B(n, p)</span>—and keep at least 5 significant figures of <span class=\"chem\">p</span> in your GDC for Part (b)!": "<strong>Paper 2 の定番リレー（正規分布 → 二項分布 / 条件付き確率）：</strong> (a) で無作為に選んだ <em>1 個</em> に対する正規分布の確率 <span class=\"chem\">p = P(X &gt; k)</span> を求めさせ、(b) で独立な <span class=\"chem\">n</span> 個の標本のうち<em>少なくとも <span class=\"chem\">r</span> 個</em>が <span class=\"chem\">X &gt; k</span> を満たす確率を問う問題です。<span class=\"chem\">X ~ N(μ, σ^2)</span> から新しい二項確率変数 <span class=\"chem\">Y ~ B(n, p)</span> への切り替えをすぐに見抜き、(b) のために <span class=\"chem\">p</span> を GDC で少なくとも有効数字 5 桁保持しましょう！",

    // The Normal distribution and standardization (z-scores) > worked example > h3
    "Finding unknown μ and σ using z-scores and simultaneous equations": "z 値と連立方程式を使って未知の μ と σ を求める",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "The lengths of steel rods follow a Normal distribution <span class=\"chem\">X ~ N(μ, σ^2)</span>. It is known that <span class=\"chem\">10%</span> of the rods are shorter than <span class=\"chem\">45.0</span> cm and <span class=\"chem\">5%</span> of the rods are longer than <span class=\"chem\">58.0</span> cm. Find <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span> to 3 significant figures. <strong>[5 marks]</strong>": "鋼鉄の棒の長さは正規分布 <span class=\"chem\">X ~ N(μ, σ^2)</span> に従う。棒の <span class=\"chem\">10%</span> が <span class=\"chem\">45.0</span> cm より短く、<span class=\"chem\">5%</span> が <span class=\"chem\">58.0</span> cm より長いことがわかっている。<span class=\"chem\">μ</span> と <span class=\"chem\">σ</span> を有効数字 3 桁で求めなさい (Find)。 <strong>[5 marks]</strong>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Convert both probabilities into left-tail areas and find z₁, z₂": "両方の確率を左側の面積に変換し、z₁ と z₂ を求める",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Standard invNorm uses the area to the LEFT of the boundary. Since P(X &gt; 58) = 0.05, the area to the left of 58 is 0.95.": "標準的な invNorm は境界の左側の面積を使います。P(X &gt; 58) = 0.05 なので、58 の左側の面積は 0.95 です。",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "<i>P</i>(<i>X</i> &lt; 45) = 0.10 ⇒ <i>z</i><sub>1</sub> = invNorm(0.10) = −1.28155 <b>[A1]</b>": "<i>P</i>(<i>X</i> &lt; 45) = 0.10 ⇒ <i>z</i><sub>1</sub> = invNorm(0.10) = −1.28155 <b>[A1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "<i>P</i>(<i>X</i> &lt; 58) = 0.95 ⇒ <i>z</i><sub>2</sub> = invNorm(0.95) = +1.64485 <b>[A1]</b>": "<i>P</i>(<i>X</i> &lt; 58) = 0.95 ⇒ <i>z</i><sub>2</sub> = invNorm(0.95) = +1.64485 <b>[A1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Form two linear equations using x − μ = zσ": "x − μ = zσ を使って 2 つの一次方程式を立てる",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Substituting (x₁, z₁) and (x₂, z₂) into (x − μ)/σ = z gives a 2 × 2 linear system.": "(x₁, z₁) と (x₂, z₂) を (x − μ)/σ = z に代入すると 2 × 2 の連立一次方程式が得られます。",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "(1) 45 − <i>μ</i> = −1.28155<i>σ</i> and (2) 58 − <i>μ</i> = 1.64485<i>σ</i> <b>[M1]</b>": "(1) 45 − <i>μ</i> = −1.28155<i>σ</i> かつ (2) 58 − <i>μ</i> = 1.64485<i>σ</i> <b>[M1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Subtract equation (1) from equation (2) to solve for σ and μ": "式 (2) から式 (1) を引いて σ と μ を求める",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Subtracting eliminates μ immediately.": "引き算すると μ がすぐに消去されます。",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "μ = 50.7 cm, σ = 4.44 cm": "μ = 50.7 cm、σ = 4.44 cm",

    // The Normal distribution and standardization (z-scores) > try it > p
    "A normal random variable <span class=\"chem\">X ~ N(μ, σ^2)</span> has mean <span class=\"chem\">μ = 50</span>. Given that <span class=\"chem\">P(X &gt; 65) = P(Z &gt; 1.5)</span>, find the standard deviation <span class=\"chem\">σ</span>.": "正規確率変数 <span class=\"chem\">X ~ N(μ, σ^2)</span> の平均が <span class=\"chem\">μ = 50</span> である。<span class=\"chem\">P(X &gt; 65) = P(Z &gt; 1.5)</span> のとき、標準偏差 <span class=\"chem\">σ</span> を求めなさい (Find)。",

    // The Normal distribution and standardization (z-scores) > try it > li
    "Standardize <span class=\"chem\">x = 65</span> using <span class=\"chem\">z = (x - μ) / σ</span>.": "<span class=\"chem\">z = (x - μ) / σ</span> を使って <span class=\"chem\">x = 65</span> を標準化します。",

    // The Normal distribution and standardization (z-scores) > try it > li
    "Solve <span class=\"chem\">(65 - 50) / σ = 1.5</span> for <span class=\"chem\">σ</span>.": "<span class=\"chem\">(65 - 50) / σ = 1.5</span> を <span class=\"chem\">σ</span> について解きます。",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > data-toc attribute
    "Bayes & continuous RVs": "ベイズの定理と連続型確率変数",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > h2
    "Bayes' theorem, discrete variance and continuous random variables": "ベイズの定理・離散変数の分散と連続型確率変数",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > p
    "When the sample space is partitioned into up to three mutually exclusive and exhaustive events <span class=\"chem\">B_1, B_2, B_3</span> (so <span class=\"chem\">P(B_1) + P(B_2) + P(B_3) = 1</span>) and you observe a subsequent event <span class=\"chem\">A</span>, <strong>Bayes' theorem</strong> updates the prior probability <span class=\"chem\">P(B_i)</span> to the posterior probability <span class=\"chem\">P(B_i | A)</span>:": "標本空間が最大 3 つの互いに排反で網羅的な事象 <span class=\"chem\">B_1, B_2, B_3</span> に分割され（<span class=\"chem\">P(B_1) + P(B_2) + P(B_3) = 1</span>）、その後に事象 <span class=\"chem\">A</span> が観測されたとき、<strong>ベイズの定理</strong>は事前確率 <span class=\"chem\">P(B_i)</span> を事後確率 <span class=\"chem\">P(B_i | A)</span> へと更新します：",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Numerator": "分子",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "joint probability <span class=\"chem\">P(B_i ∩ A)</span> along the single tree branch through <span class=\"chem\">B_i</span> to <span class=\"chem\">A</span>": "樹形図で <span class=\"chem\">B_i</span> を通って <span class=\"chem\">A</span> に至る 1 つの枝の同時確率 <span class=\"chem\">P(B_i ∩ A)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Denominator": "分母",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "total probability <span class=\"chem\">P(A)</span> summed over all branches that end at <span class=\"chem\">A</span>": "<span class=\"chem\">A</span> で終わるすべての枝の確率を合計した全確率 <span class=\"chem\">P(A)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > widget > Additional HL > data-title attribute
    "Interactive Bayes' theorem diagnostic tree and posterior updater": "ベイズの定理・診断樹形図＆事後確率アップデーター",

    // Bayes' theorem, discrete variance and continuous random vari > widget > Additional HL > figcaption
    "Explore the classic medical testing paradox: when a condition is rare (<span class=\"chem\">P(B) = 0.05</span>), even a test with <span class=\"chem\">95%</span> sensitivity and a <span class=\"chem\">10%</span> false-positive rate yields a posterior probability <span class=\"chem\">P(B | A) ≈ 33.3%</span> because false positives from the large healthy group (<span class=\"chem\">95%</span>) outnumber true positives!": "有名な医療検査のパラドックスを試してみましょう：疾患がまれ（<span class=\"chem\">P(B) = 0.05</span>）なとき、感度 <span class=\"chem\">95%</span>・偽陽性率 <span class=\"chem\">10%</span> の検査でも、事後確率 <span class=\"chem\">P(B | A) ≈ 33.3%</span> にしかなりません。なぜなら、人数の多い健康なグループ（<span class=\"chem\">95%</span>）から出る偽陽性が真陽性を上回るからです！",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > h3
    "Variance, linear transformations and continuous probability density functions": "分散・1 次変換と連続型確率密度関数",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > p
    "For a <strong>discrete</strong> random variable <span class=\"chem\">X</span>, or a <strong>continuous</strong> random variable <span class=\"chem\">X</span> with probability density function (PDF) <span class=\"chem\">f(x)</span>, expectation and variance follow parallel sum and integral formulas:": "<strong>離散型</strong>確率変数 <span class=\"chem\">X</span>、または確率密度関数（PDF）<span class=\"chem\">f(x)</span> をもつ<strong>連続型</strong>確率変数 <span class=\"chem\">X</span> について、期待値と分散は対応する和と積分の公式に従います：",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > maths line
    "<i>f</i>(<i>x</i>) ≥ 0, &nbsp; ∫<sub>−∞</sub><sup>∞</sup> <i>f</i>(<i>x</i>) d<i>x</i> = 1 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>μ</i> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i> <i>f</i>(<i>x</i>) d<i>x</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − <i>μ</i><sup>2</sup> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i><sup>2</sup> <i>f</i>(<i>x</i>) d<i>x</i> − <i>μ</i><sup>2</sup>": "<i>f</i>(<i>x</i>) ≥ 0, &nbsp; ∫<sub>−∞</sub><sup>∞</sup> <i>f</i>(<i>x</i>) d<i>x</i> = 1 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>μ</i> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i> <i>f</i>(<i>x</i>) d<i>x</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − <i>μ</i><sup>2</sup> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i><sup>2</sup> <i>f</i>(<i>x</i>) d<i>x</i> − <i>μ</i><sup>2</sup>",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Mode": "最頻値（モード）",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "the value of <span class=\"chem\">x</span> in the domain where <span class=\"chem\">f(x)</span> attains its <strong>global maximum</strong> (check <span class=\"chem\">f'(x) = 0</span> AND domain endpoints!)": "定義域内で <span class=\"chem\">f(x)</span> が<strong>最大値</strong>をとる <span class=\"chem\">x</span> の値（<span class=\"chem\">f'(x) = 0</span> と定義域の端点を両方確認！）",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Median m": "中央値 m",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "the value <span class=\"chem\">m</span> satisfying <span class=\"chem\">∫_{-∞}^m f(x) dx = 0.5</span> (similarly <span class=\"chem\">0.25</span> for <span class=\"chem\">Q_1</span> and <span class=\"chem\">0.75</span> for <span class=\"chem\">Q_3</span>)": "<span class=\"chem\">∫_{-∞}^m f(x) dx = 0.5</span> を満たす値 <span class=\"chem\">m</span>（同様に <span class=\"chem\">Q_1</span> は <span class=\"chem\">0.25</span>、<span class=\"chem\">Q_3</span> は <span class=\"chem\">0.75</span>）",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "aX + b": "aX + b",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "<span class=\"chem\">E(aX + b) = a E(X) + b</span> and <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>": "<span class=\"chem\">E(aX + b) = a E(X) + b</span> かつ <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > common mistake > Additional HL > p
    "<strong>Endpoint Mode Trap:</strong> Students often set <span class=\"chem\">f'(x) = 0</span> without checking whether the stationary point is actually in the domain or whether an endpoint is higher. If <span class=\"chem\">f(x) = (3/8)x^2</span> on <span class=\"chem\">0 ≤ x ≤ 2</span>, then <span class=\"chem\">f(x)</span> is strictly increasing on <span class=\"chem\">[0, 2]</span>, so its <strong>mode is at the right endpoint <span class=\"chem\">x = 2</span></strong> (not at <span class=\"chem\">x = 0</span> where <span class=\"chem\">f'(0) = 0</span>)!": "<strong>端点における最頻値の罠：</strong> 停留点が本当に定義域内にあるか、あるいは端点の方が高くないかを確認せずに <span class=\"chem\">f'(x) = 0</span> を解きがちです。<span class=\"chem\">0 ≤ x ≤ 2</span> で <span class=\"chem\">f(x) = (3/8)x^2</span> のとき、<span class=\"chem\">f(x)</span> は <span class=\"chem\">[0, 2]</span> で単調増加なので、<strong>最頻値は右端 <span class=\"chem\">x = 2</span></strong> です（<span class=\"chem\">f'(0) = 0</span> となる <span class=\"chem\">x = 0</span> ではありません）！",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > h3
    "Analyzing a continuous random variable: constant k, median, mean and variance": "連続型確率変数の分析：定数 k・中央値・平均・分散",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = kx(2 - x)</span> for <span class=\"chem\">0 ≤ x ≤ 2</span>, and <span class=\"chem\">f(x) = 0</span> otherwise.<br> (a) Show that <span class=\"chem\">k = 3/4</span> and state the mode of <span class=\"chem\">X</span>. <strong>[3 marks]</strong><br> (b) Find <span class=\"chem\">E(X)</span> and <span class=\"chem\">Var(X)</span>. <strong>[4 marks]</strong><br> (c) Hence find <span class=\"chem\">Var(5X - 3)</span>. <strong>[2 marks]</strong>": "連続型確率変数 <span class=\"chem\">X</span> の確率密度関数が <span class=\"chem\">0 ≤ x ≤ 2</span> で <span class=\"chem\">f(x) = kx(2 - x)</span>、それ以外で <span class=\"chem\">f(x) = 0</span> である。<br> (a) <span class=\"chem\">k = 3/4</span> であることを示し (Show that)、<span class=\"chem\">X</span> の最頻値を述べなさい (state)。 <strong>[3 marks]</strong><br> (b) <span class=\"chem\">E(X)</span> と <span class=\"chem\">Var(X)</span> を求めなさい (Find)。 <strong>[4 marks]</strong><br> (c) これを用いて (Hence) <span class=\"chem\">Var(5X - 3)</span> を求めなさい (Find)。 <strong>[2 marks]</strong>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(a) Integrate f(x) over [0, 2] and set equal to 1": "(a) f(x) を [0, 2] で積分して 1 とおく",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "Total area under any valid PDF must equal 1.": "確率密度関数の下の全面積は必ず 1 でなければなりません。",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Since <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i>(2 − <i>x</i>) is a downward parabola symmetric about <i>x</i> = 1, the <b>mode is <i>x</i> = 1</b>. <b>[A1]</b>": "<i>f</i>(<i>x</i>) = <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i>(2 − <i>x</i>) は <i>x</i> = 1 に関して対称な上に凸の放物線なので、<b>最頻値は <i>x</i> = 1</b> である。 <b>[A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(b) Find E(X) by symmetry (or integration) and compute E(X²)": "(b) 対称性（または積分）から E(X) を求め、E(X²) を計算する",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "By symmetry about x = 1 on [0, 2], E(X) = 1. Then Var(X) = ∫ x² f(x) dx − [E(X)]².": "[0, 2] 上で x = 1 に関して対称なので E(X) = 1。よって Var(X) = ∫ x² f(x) dx − [E(X)]²。",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup> = <span class=\"frac\"><span>6</span><span>5</span></span> − 1<sup>2</sup> = <b><span class=\"frac\"><span>1</span><span>5</span></span></b> (or 0.2) <b>[A1]</b>": "Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup> = <span class=\"frac\"><span>6</span><span>5</span></span> − 1<sup>2</sup> = <b><span class=\"frac\"><span>1</span><span>5</span></span></b> （または 0.2） <b>[A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(c) Apply the linear transformation rule Var(aX + b) = a² Var(X)": "(c) 1 次変換の公式 Var(aX + b) = a² Var(X) を適用する",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "Subtracting 3 does not change variance; multiplying by 5 multiplies variance by 5² = 25.": "3 を引いても分散は変わらず、5 を掛けると分散は 5² = 25 倍になります。",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Var(5<i>X</i> − 3) = 5<sup>2</sup> Var(<i>X</i>) = 25 × <span class=\"frac\"><span>1</span><span>5</span></span> = <b>5</b> <b>[M1 A1]</b>": "Var(5<i>X</i> − 3) = 5<sup>2</sup> Var(<i>X</i>) = 25 × <span class=\"frac\"><span>1</span><span>5</span></span> = <b>5</b> <b>[M1 A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "(a) k = 3/4, mode = 1; (b) E(X) = 1, Var(X) = 1/5; (c) Var(5X − 3) = 5": "(a) k = 3/4、最頻値 = 1；(b) E(X) = 1、Var(X) = 1/5；(c) Var(5X − 3) = 5",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > p
    "In a factory, Machine <span class=\"chem\">B_1</span> produces <span class=\"chem\">60%</span> of bolts (with a <span class=\"chem\">2%</span> defective rate) and Machine <span class=\"chem\">B_2</span> produces <span class=\"chem\">40%</span> of bolts (with a <span class=\"chem\">5%</span> defective rate). Given that a randomly chosen bolt is defective (<span class=\"chem\">D</span>), use Bayes' theorem to find the probability <span class=\"chem\">P(B_1 | D)</span> that it was made by Machine <span class=\"chem\">B_1</span>.": "ある工場で、機械 <span class=\"chem\">B_1</span> はボルトの <span class=\"chem\">60%</span> を製造し（不良率 <span class=\"chem\">2%</span>）、機械 <span class=\"chem\">B_2</span> は <span class=\"chem\">40%</span> を製造している（不良率 <span class=\"chem\">5%</span>）。無作為に選んだ 1 本のボルトが不良品（<span class=\"chem\">D</span>）であったとき、それが機械 <span class=\"chem\">B_1</span> で作られた確率 <span class=\"chem\">P(B_1 | D)</span> をベイズの定理で求めなさい (Find)。",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > li
    "Compute the two defective path probabilities: <span class=\"chem\">P(B_1 ∩ D) = 0.60 × 0.02 = 0.012</span> and <span class=\"chem\">P(B_2 ∩ D) = 0.40 × 0.05 = 0.020</span>.": "不良品に至る 2 つの経路の確率を計算します：<span class=\"chem\">P(B_1 ∩ D) = 0.60 × 0.02 = 0.012</span> と <span class=\"chem\">P(B_2 ∩ D) = 0.40 × 0.05 = 0.020</span>。",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > li
    "Divide <span class=\"chem\">0.012</span> by the total defective probability <span class=\"chem\">0.012 + 0.020 = 0.032</span>.": "<span class=\"chem\">0.012</span> を全体の不良率 <span class=\"chem\">0.012 + 0.020 = 0.032</span> で割ります。",

    // Quick practice > data-toc attribute
    "Practice": "演習",

    // Quick practice > h2
    "Quick practice": "確認問題",

    // widget string (assets/js/widgets-t4-2.js)
    "Probability region": "確率領域",

    // widget string (assets/js/widgets-t4-2.js)
    "Between: P(a < X < b)": "区間：P(a < X < b)",

    // widget string (assets/js/widgets-t4-2.js)
    "Left tail: P(X < b)": "左裾：P(X < b)",

    // widget string (assets/js/widgets-t4-2.js)
    "Right tail: P(X > a)": "右裾：P(X > a)",

    // widget string (assets/js/widgets-t4-2.js)
    "Mean μ": "平均 μ",

    // widget string (assets/js/widgets-t4-2.js)
    "Standard deviation σ": "標準偏差 σ",

    // widget string (assets/js/widgets-t4-2.js)
    "Bound a": "境界 a",

    // widget string (assets/js/widgets-t4-2.js)
    "Bound b": "境界 b",

    // widget string (assets/js/widgets-t4-2.js)
    "Standardized z-score(s)": "標準化された z 値",

    // widget string (assets/js/widgets-t4-2.js)
    "Shaded probability area": "塗りつぶされた確率（面積）",

    // widget string (assets/js/widgets-t4-2.js)
    "GDC syntax": "GDC 入力式",

    // widget string (assets/js/widgets-t4-2.js)
    "Normal distribution curve with shaded probability area and z-score markers": "確率領域と z 値マーカー付きの正規分布曲線",

    // widget string (assets/js/widgets-t4-2.js)
    "Prior P(B) (base rate)": "事前確率 P(B)（基礎率）",

    // widget string (assets/js/widgets-t4-2.js)
    "Sensitivity P(A | B)": "感度 P(A | B)",

    // widget string (assets/js/widgets-t4-2.js)
    "False positive P(A | B′)": "偽陽性率 P(A | B′)",

    // widget string (assets/js/widgets-t4-2.js)
    "Two paths to outcome A": "結果 A への 2 つの経路",

    // widget string (assets/js/widgets-t4-2.js)
    "Total probability P(A)": "全確率 P(A)",

    // widget string (assets/js/widgets-t4-2.js)
    "Bayes posterior P(B | A)": "ベイズの事後確率 P(B | A)",

    // widget string (assets/js/widgets-t4-2.js)
    "Two-stage probability tree diagram and Bayes posterior proportion bar": "2 段階の確率樹形図とベイズの事後確率の割合バー",

    // widget string (assets/js/widgets-t4-2.js)
    "Among all A outcomes: P(B | A) =": "すべての A のうち：P(B | A) =",

    // widget string (assets/js/widgets-t4-2.js)
    "green": "緑",

    // widget string (assets/js/widgets-t4-2.js)
    "red": "赤",

  }
});
