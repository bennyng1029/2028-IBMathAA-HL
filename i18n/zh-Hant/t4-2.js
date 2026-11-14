/* t4-2 — zh-Hant translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't4-2', {
  strings: {

    // page title (browser tab)
    "4.2 Probability, distributions, Bayes and continuous RVs | Analysis Lab": "4.2 概率、分佈、貝葉斯定理與連續隨機變數 | Analysis Lab",

    // Probability, distributions, Bayes and continuous RVs > page header > p
    "Topic 4.2 · SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14": "課題 4.2 · SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14",

    // Probability, distributions, Bayes and continuous RVs > page header > h1
    "Probability, distributions, Bayes and continuous RVs": "概率、分佈、貝葉斯定理與連續隨機變數",

    // Probability, distributions, Bayes and continuous RVs > page header > span
    "How do we update probabilities when new evidence arrives, and how do discrete sums become continuous integrals when outcomes vary smoothly?": "當新證據出現時我們如何更新概率？又當結果平滑連續變化時，離散求和如何變成連續積分？",

    // What you need to be able to do > data-toc attribute
    "Checklist": "學習清單",

    // What you need to be able to do > h2
    "What you need to be able to do": "你需要掌握的能力",

    // What you need to be able to do > checklist > span
    "Use Venn diagrams, tree diagrams, and the addition rule <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>; distinguish mutually exclusive (<span class=\"chem\">P(A ∩ B) = 0</span>) from independent (<span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>) events, and evaluate conditional probabilities <span class=\"chem\">P(A | B)</span>.": "運用溫氏圖、樹形圖及加法法則 <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>；區分互斥事件（<span class=\"chem\">P(A ∩ B) = 0</span>）與獨立事件（<span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>），並計算條件概率 <span class=\"chem\">P(A | B)</span>。",

    // What you need to be able to do > checklist > span
    "Verify discrete probability distributions (<span class=\"chem\">Σ P(X = x) = 1</span>), calculate expected value <span class=\"chem\">E(X) = Σ x P(X = x)</span>, and determine whether a game is fair (<span class=\"chem\">E(gain) = 0</span>).": "驗證離散概率分佈（<span class=\"chem\">Σ P(X = x) = 1</span>）、計算期望值 <span class=\"chem\">E(X) = Σ x P(X = x)</span>，並判斷遊戲是否公平（<span class=\"chem\">E(gain) = 0</span>）。",

    // What you need to be able to do > checklist > span
    "Model fixed-trial experiments with the Binomial distribution <span class=\"chem\">X ~ B(n, p)</span>, compute probabilities by formula and GDC, and solve minimum-trial problems <span class=\"chem\">1 - (1 - p)^n &gt; c</span>.": "以二項分佈 <span class=\"chem\">X ~ B(n, p)</span> 模擬固定試驗次數的實驗、透過公式與 GDC 計算概率，並解最少試驗次數問題 <span class=\"chem\">1 - (1 - p)^n &gt; c</span>。",

    // What you need to be able to do > checklist > span
    "Compute Normal probabilities and inverse Normal quantiles, standardize to <span class=\"chem\">Z = (X - μ)/σ ~ N(0, 1)</span> to find unknown <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span>, and link Normal probabilities into Binomial or conditional models.": "計算正態分佈概率與逆正態分位數、標準化為 <span class=\"chem\">Z = (X - μ)/σ ~ N(0, 1)</span> 以求未知的 <span class=\"chem\">μ</span> 與 <span class=\"chem\">σ</span>，並把正態概率銜接至二項或條件模型。",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply Bayes' theorem <span class=\"chem\">P(B_i | A)</span> for up to three partitioning events <span class=\"chem\">B_1, B_2, B_3</span> to reverse conditional probabilities.": "對最多三個分割事件 <span class=\"chem\">B_1, B_2, B_3</span> 應用貝葉斯定理 <span class=\"chem\">P(B_i | A)</span>，以反轉條件概率。",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute discrete variance <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>, apply linear transformations <span class=\"chem\">E(aX + b)</span> and <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>, and find the mode, median, mean, and variance of a continuous random variable from its PDF <span class=\"chem\">f(x)</span>.": "計算離散方差 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>、應用線性變換 <span class=\"chem\">E(aX + b)</span> 與 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>，並從概率密度函數 <span class=\"chem\">f(x)</span> 求連續隨機變數的眾數、中位數、平均數與方差。",

    // Question decoder: spotting which probability tool to use > data-toc attribute
    "Question decoder": "題型解碼",

    // Question decoder: spotting which probability tool to use > h2
    "Question decoder: spotting which probability tool to use": "題型解碼：辨識應採用的概率工具",

    // Question decoder: spotting which probability tool to use > p
    "Probability exam questions hide their mathematical structure inside everyday stories. Scan the wording for these trigger phrases before writing your first line of working.": "概率考題常把數學結構藏在日常情境之中。動筆寫第一行算式前，先掃描題目中的這些關鍵字眼。",

    // Question decoder: spotting which probability tool to use > table > caption
    "Question decoder — Probability, distributions, Bayes' theorem and continuous RVs": "題型解碼 — 概率、分佈、貝葉斯定理與連續隨機變數",

    // Question decoder: spotting which probability tool to use > table > th
    "What the exam question says": "題目中的常見字眼",

    // Question decoder: spotting which probability tool to use > table > th
    "What it means (formula &amp; setup)": "實際含義（公式與列式）",

    // Question decoder: spotting which probability tool to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1（不可用計算機）與 Paper 2（可用 GDC）策略",

    // Question decoder: spotting which probability tool to use > table > th
    "“Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <strong>mutually exclusive</strong>” vs “<strong>independent</strong>”": "「事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> <strong>互斥</strong>」與「<strong>獨立</strong>」",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Mutually exclusive</strong>: cannot happen together, so <span class=\"chem\">P(A ∩ B) = 0</span>.<br><strong>Independent</strong>: one does not affect the other, so <span class=\"chem\">P(A ∩ B) = P(A)P(B)</span> (and <span class=\"chem\">P(A | B) = P(A)</span>).": "<strong>互斥</strong>：不能同時發生，故 <span class=\"chem\">P(A ∩ B) = 0</span>。<br><strong>獨立</strong>：互不影響，故 <span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>（且 <span class=\"chem\">P(A | B) = P(A)</span>）。",

    // Question decoder: spotting which probability tool to use > table > td
    "Substitute <span class=\"chem\">P(A ∩ B) = 0</span> or <span class=\"chem\">P(A)P(B)</span> into <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>. Never confuse the two!": "把 <span class=\"chem\">P(A ∩ B) = 0</span> 或 <span class=\"chem\">P(A)P(B)</span> 代入 <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>。切勿混淆兩者！",

    // Question decoder: spotting which probability tool to use > table > th
    "“<strong>Given that</strong> / knowing that / among those who…”": "「<strong>已知</strong>／在……當中……」",

    // Question decoder: spotting which probability tool to use > table > td
    "Conditional probability <span class=\"chem\">P(A | B) = P(A ∩ B) / P(B)</span>, where <span class=\"chem\">B</span> is the known condition.": "條件概率 <span class=\"chem\">P(A | B) = P(A ∩ B) / P(B)</span>，其中 <span class=\"chem\">B</span> 為已知條件。",

    // Question decoder: spotting which probability tool to use > table > td
    "Write the fraction <span class=\"chem\">P(A ∩ B) / P(B)</span> explicitly—even inside a Normal or Binomial question (e.g., <span class=\"chem\">P(X &gt; 15 | X &gt; 10) = P(X &gt; 15) / P(X &gt; 10)</span>)!": "明確寫出分數 <span class=\"chem\">P(A ∩ B) / P(B)</span>——即使在正態或二項分佈題目中亦然（例如 <span class=\"chem\">P(X &gt; 15 | X &gt; 10) = P(X &gt; 15) / P(X &gt; 10)</span>）！",

    // Question decoder: spotting which probability tool to use > table > th
    "“Stage 1 priors <span class=\"chem\">P(B_i)</span> and stage 2 conditionals <span class=\"chem\">P(A | B_i)</span> are given; find <span class=\"chem\">P(B_i | A)</span>”": "「已知第 1 階段先驗概率 <span class=\"chem\">P(B_i)</span> 與第 2 階段條件概率 <span class=\"chem\">P(A | B_i)</span>；求 <span class=\"chem\">P(B_i | A)</span>」",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Bayes' theorem</strong> (reversing the tree): divide the single desired path <span class=\"chem\">P(B_i)P(A | B_i)</span> by the sum of all paths reaching <span class=\"chem\">A</span>.": "<strong>貝葉斯定理</strong>（反轉樹形圖）：把目標單一路徑 <span class=\"chem\">P(B_i)P(A | B_i)</span> 除以所有通往 <span class=\"chem\">A</span> 的路徑總和。",

    // Question decoder: spotting which probability tool to use > table > td
    "Draw a two-stage tree diagram, multiply along each branch to <span class=\"chem\">A</span>, and form <span class=\"chem\">P(B_i ∩ A) / P(A)</span>.": "畫出兩階段樹形圖，沿每條通往 <span class=\"chem\">A</span> 的分支相乘，再組成 <span class=\"chem\">P(B_i ∩ A) / P(A)</span>。",

    // Question decoder: spotting which probability tool to use > table > th
    "“Fixed number of <span class=\"chem\">n</span> independent trials with constant success probability <span class=\"chem\">p</span>”": "「固定 <span class=\"chem\">n</span> 次獨立試驗，每次成功概率恒為 <span class=\"chem\">p</span>」",

    // Question decoder: spotting which probability tool to use > table > td
    "Binomial distribution <span class=\"chem\">X ~ B(n, p)</span> with <span class=\"chem\">P(X = r) = nCr p^r (1 - p)^{n-r}</span>, <span class=\"chem\">E(X) = np</span>, <span class=\"chem\">Var(X) = np(1 - p)</span>.": "二項分佈 <span class=\"chem\">X ~ B(n, p)</span>，其中 <span class=\"chem\">P(X = r) = nCr p^r (1 - p)^{n-r}</span>，<span class=\"chem\">E(X) = np</span>，<span class=\"chem\">Var(X) = np(1 - p)</span>。",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Paper 1</strong>: Use <span class=\"chem\">nCr p^r (1 - p)^{n-r}</span>.<br><strong>Paper 2</strong>: Watch out for <span class=\"mono\">binomcdf</span>: <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span>!": "<strong>Paper 1</strong>：使用 <span class=\"chem\">nCr p^r (1 - p)^{n-r}</span>。<br><strong>Paper 2</strong>：留意 <span class=\"mono\">binomcdf</span>：<span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span>！",

    // Question decoder: spotting which probability tool to use > table > th
    "“Find the minimum number of trials <span class=\"chem\">n</span> such that <span class=\"chem\">P(at least one success) &gt; 0.95</span>”": "「求最少試驗次數 <span class=\"chem\">n</span>，使得 <span class=\"chem\">P(at least one success) &gt; 0.95</span>（至少一次成功）」",

    // Question decoder: spotting which probability tool to use > table > td
    "Use the complement: <span class=\"chem\">P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)^n &gt; 0.95 ⇒ (1 - p)^n &lt; 0.05</span>.": "使用餘事件：<span class=\"chem\">P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)^n &gt; 0.95 ⇒ (1 - p)^n &lt; 0.05</span>。",

    // Question decoder: spotting which probability tool to use > table > td
    "Solve <span class=\"chem\">n &gt; ln(0.05) / ln(1 - p)</span> (remembering <span class=\"chem\">ln(1 - p) &lt; 0</span> flips the inequality!) or inspect a GDC table, then round <strong>up</strong> to the next integer.": "解 <span class=\"chem\">n &gt; ln(0.05) / ln(1 - p)</span>（緊記 <span class=\"chem\">ln(1 - p) &lt; 0</span> 會反轉不等號！）或查閱 GDC 數值表，然後<strong>向上</strong>進位至下一個整數。",

    // Question decoder: spotting which probability tool to use > table > th
    "“Continuous measurement <span class=\"chem\">X ~ N(μ, σ^2)</span> with unknown <span class=\"chem\">μ</span> or <span class=\"chem\">σ</span>”": "「連續量度 <span class=\"chem\">X ~ N(μ, σ^2)</span>，其中 <span class=\"chem\">μ</span> 或 <span class=\"chem\">σ</span> 未知」",

    // Question decoder: spotting which probability tool to use > table > td
    "Standardize to <span class=\"chem\">Z ~ N(0, 1)</span> using <span class=\"chem\">z = (x - μ) / σ</span>, where <span class=\"chem\">z = invNorm(left-tail area)</span>.": "使用 <span class=\"chem\">z = (x - μ) / σ</span> 標準化為 <span class=\"chem\">Z ~ N(0, 1)</span>，其中 <span class=\"chem\">z = invNorm(left-tail area)</span>（左尾面積）。",

    // Question decoder: spotting which probability tool to use > table > td
    "Write <span class=\"chem\">x - μ = z σ</span>. If both <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span> are unknown, set up two linear equations and solve simultaneously.": "寫出 <span class=\"chem\">x - μ = z σ</span>。若 <span class=\"chem\">μ</span> 與 <span class=\"chem\">σ</span> 均未知，列出兩條線性方程並聯立求解。",

    // Question decoder: spotting which probability tool to use > not needed for IB > p
    "<strong>What is NOT in the IB Math AA syllabus (SL or HL):</strong> The Poisson distribution, Central Limit Theorem (sample mean distribution <span class=\"chem\">X̄ ~ N(μ, σ^2/n)</span>), confidence intervals, and linear combinations of <em>two</em> independent random variables (<span class=\"chem\">aX + bY</span>) are in IB Math AI HL, <strong>not</strong> IB Math AA. AA never combines two random variables; HL students meet only transformations of a single random variable (<span class=\"chem\">aX + b</span>, AHL 4.14).": "<strong>IB Math AA 課程大綱（SL 或 HL）不涵蓋的內容：</strong>泊松分佈、中央極限定理（樣本平均分佈 <span class=\"chem\">X̄ ~ N(μ, σ^2/n)</span>）、置信區間，以及<em>兩個</em>獨立隨機變數的線性組合（<span class=\"chem\">aX + bY</span>），均屬 IB Math AI HL，而<strong>非</strong> IB Math AA。AA 從不組合兩個隨機變數；HL 學生只會學到單一隨機變數的變換（<span class=\"chem\">aX + b</span>，AHL 4.14）。",

    // Combined events, independence and conditional probability > data-toc attribute
    "Events & conditional": "事件與條件概率",

    // Combined events, independence and conditional probability > h2
    "Combined events, independence and conditional probability": "複合事件、獨立性與條件概率",
    "If an experiment is repeated <span class=\"chem\">n</span> times and event <span class=\"chem\">A</span> has probability <span class=\"chem\">P(A)</span> on each trial, the <strong>expected number of occurrences</strong> of <span class=\"chem\">A</span> is <span class=\"chem\">n · P(A)</span>. For example, if a fair die is rolled <span class=\"chem\">60</span> times, the expected number of sixes is <span class=\"chem\">60 × 1/6 = 10</span>. This is a long-run average, so it does not have to be a whole number.": "若一個試驗重複 <span class=\"chem\">n</span> 次，而事件 <span class=\"chem\">A</span> 每次發生的概率為 <span class=\"chem\">P(A)</span>，則 <span class=\"chem\">A</span> 的<strong>預期發生次數</strong>為 <span class=\"chem\">n · P(A)</span>。例如，把一顆公平骰子擲 <span class=\"chem\">60</span> 次，預期得到六點的次數為 <span class=\"chem\">60 × 1/6 = 10</span>。這是長遠的平均值，所以不一定是整數。",

    // Combined events, independence and conditional probability > p
    "For any two events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> in a sample space <span class=\"chem\">U</span>, the probability of their union (at least one occurring) and the conditional probability of <span class=\"chem\">A</span> given <span class=\"chem\">B</span> are connected by two fundamental identities in your Formula Booklet:": "對於樣本空間 <span class=\"chem\">U</span> 中的任意兩個事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span>，其併集（至少發生其一）的概率與已知 <span class=\"chem\">B</span> 時 <span class=\"chem\">A</span> 的條件概率，由公式手冊中的兩條基本恒等式相連：",

    // Combined events, independence and conditional probability > equation > dd
    "probability that <span class=\"chem\">A</span> or <span class=\"chem\">B</span> (or both) occurs": "<span class=\"chem\">A</span> 或 <span class=\"chem\">B</span>（或兩者）發生的概率",

    // Combined events, independence and conditional probability > equation > dd
    "probability that both <span class=\"chem\">A</span> and <span class=\"chem\">B</span> occur together": "<span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 同時發生的概率",

    // Combined events, independence and conditional probability > equation > dd
    "probability of <span class=\"chem\">A</span> occurring given that <span class=\"chem\">B</span> occurs (we know <span class=\"chem\">B</span> is true; it need not happen first)": "已知 <span class=\"chem\">B</span> 發生的條件下，<span class=\"chem\">A</span> 發生的概率（即已知 <span class=\"chem\">B</span> 成立，它不必先發生）",

    // Combined events, independence and conditional probability > common mistake > p
    "<strong>Never confuse Mutually Exclusive with Independent:</strong> Two events with non-zero probabilities (<span class=\"chem\">P(A) &gt; 0, P(B) &gt; 0</span>) can <strong>never</strong> be both mutually exclusive and independent! If <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <dfn data-def=\"Two events that cannot occur at the same time, so P(A ∩ B) = 0.\">mutually exclusive</dfn>, then <span class=\"chem\">P(A ∩ B) = 0</span>. If they are <dfn data-def=\"Two events where the occurrence of one does not change the probability of the other, so P(A ∩ B) = P(A)P(B).\">independent</dfn>, then <span class=\"chem\">P(A ∩ B) = P(A)P(B) &gt; 0</span>.": "<strong>切勿混淆互斥與獨立：</strong>兩個非零概率事件（<span class=\"chem\">P(A) &gt; 0, P(B) &gt; 0</span>）<strong>絕不能</strong>同時既互斥又獨立！若 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> <dfn data-def=\"兩個不能同時發生的事件，故 P(A ∩ B) = 0。\">互斥 <span class=\"en-term\">(mutually exclusive)</span></dfn>，則 <span class=\"chem\">P(A ∩ B) = 0</span>。若它們<dfn data-def=\"一個事件發生與否不改變另一事件發生概率的兩個事件，故 P(A ∩ B) = P(A)P(B)。\">獨立 <span class=\"en-term\">(independent)</span></dfn>，則 <span class=\"chem\">P(A ∩ B) = P(A)P(B) &gt; 0</span>。",

    // Combined events, independence and conditional probability > common mistake > data-def attribute
    "Two events that cannot occur at the same time, so P(A ∩ B) = 0.": "兩個不能同時發生的事件，故 P(A ∩ B) = 0。",

    // Combined events, independence and conditional probability > common mistake > data-def attribute
    "Two events where the occurrence of one does not change the probability of the other, so P(A ∩ B) = P(A)P(B).": "一個事件發生與否不改變另一事件發生概率的兩個事件，故 P(A ∩ B) = P(A)P(B)。",

    // Combined events, independence and conditional probability > p
    "When solving Venn diagram problems, always fill in the <strong>intersection <span class=\"chem\">P(A ∩ B)</span> first</strong>, then subtract <span class=\"chem\">P(A ∩ B)</span> from <span class=\"chem\">P(A)</span> and <span class=\"chem\">P(B)</span> to get the crescent regions <span class=\"chem\">P(A ∩ B')</span> and <span class=\"chem\">P(A' ∩ B)</span>.": "解溫氏圖題目時，務必<strong>先填入交集 <span class=\"chem\">P(A ∩ B)</span></strong>，然後從 <span class=\"chem\">P(A)</span> 與 <span class=\"chem\">P(B)</span> 減去 <span class=\"chem\">P(A ∩ B)</span> 以求月牙區域 <span class=\"chem\">P(A ∩ B')</span> 與 <span class=\"chem\">P(A' ∩ B)</span>。",

    // Combined events, independence and conditional probability > worked example > h3
    "Solving for an unknown probability using independence and conditional probability": "運用獨立性與條件概率求未知概率",

    // Combined events, independence and conditional probability > worked example > p
    "Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are independent with <span class=\"chem\">P(A) = 0.4</span> and <span class=\"chem\">P(A ∪ B) = 0.7</span>.<br> (a) Find <span class=\"chem\">P(B)</span>. <strong>[3 marks]</strong><br> (b) Find <span class=\"chem\">P(A' | B')</span> (the probability that <span class=\"chem\">A</span> does not occur given that <span class=\"chem\">B</span> does not occur). <strong>[2 marks]</strong>": "事件 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 獨立，其中 <span class=\"chem\">P(A) = 0.4</span> 及 <span class=\"chem\">P(A ∪ B) = 0.7</span>。<br> (a) 求 (Find) <span class=\"chem\">P(B)</span>。<strong>[3 marks]</strong><br> (b) 求 (Find) <span class=\"chem\">P(A' | B')</span>（已知 <span class=\"chem\">B</span> 不發生下，<span class=\"chem\">A</span> 不發生的概率）。<strong>[2 marks]</strong>",

    // Combined events, independence and conditional probability > worked example > data-title attribute
    "(a) Substitute P(A ∩ B) = P(A)P(B) into the union formula": "(a) 將 P(A ∩ B) = P(A)P(B) 代入併集公式",

    // Combined events, independence and conditional probability > worked example > p
    "Independence means P(A ∩ B) = 0.4 P(B).": "獨立性代表 P(A ∩ B) = 0.4 P(B)。",

    // Combined events, independence and conditional probability > worked example > data-title attribute
    "(b) Use conditional probability (or independence of complements)": "(b) 運用條件概率（或餘事件的獨立性）",

    // Combined events, independence and conditional probability > worked example > p
    "Outside the union A ∪ B lies A′ ∩ B′, which has probability 1 − P(A ∪ B) = 0.3. (Or note that if A and B are independent, A′ and B′ are also independent!)": "併集 A ∪ B 以外是 A′ ∩ B′，其概率為 1 − P(A ∪ B) = 0.3。（或留意若 A 與 B 獨立，A′ 與 B′ 亦同樣獨立！）",

    // Combined events, independence and conditional probability > try it > p
    "Given that <span class=\"chem\">P(A) = 0.5</span>, <span class=\"chem\">P(B) = 0.6</span>, and <span class=\"chem\">P(A ∪ B) = 0.86</span>, calculate the conditional probability <span class=\"chem\">P(A | B)</span>.": "已知 <span class=\"chem\">P(A) = 0.5</span>、<span class=\"chem\">P(B) = 0.6</span> 及 <span class=\"chem\">P(A ∪ B) = 0.86</span>，計算 (calculate) 條件概率 <span class=\"chem\">P(A | B)</span>。",

    // Combined events, independence and conditional probability > try it > li
    "First find <span class=\"chem\">P(A ∩ B) = P(A) + P(B) - P(A ∪ B)</span>.": "先求 <span class=\"chem\">P(A ∩ B) = P(A) + P(B) - P(A ∪ B)</span>。",

    // Combined events, independence and conditional probability > try it > li
    "Now divide <span class=\"chem\">P(A ∩ B) = 0.24</span> by <span class=\"chem\">P(B) = 0.6</span>.": "現在把 <span class=\"chem\">P(A ∩ B) = 0.24</span> 除以 <span class=\"chem\">P(B) = 0.6</span>。",

    // Discrete random variables and the Binomial distribution > data-toc attribute
    "Discrete & Binomial": "離散變數與二項分佈",

    // Discrete random variables and the Binomial distribution > h2
    "Discrete random variables and the Binomial distribution": "離散隨機變數與二項分佈",

    // Discrete random variables and the Binomial distribution > p
    "A discrete random variable <span class=\"chem\">X</span> takes distinct values <span class=\"chem\">x_1, x_2, ...</span> with probabilities <span class=\"chem\">P(X = x_i) ≥ 0</span> whose sum must equal <span class=\"chem\">1</span>. Its long-run average is the <strong>expected value</strong> <span class=\"chem\">E(X)</span>:": "離散隨機變數 <span class=\"chem\">X</span> 取不同的離散值 <span class=\"chem\">x_1, x_2, ...</span>，其對應概率 <span class=\"chem\">P(X = x_i) ≥ 0</span> 之總和必須等於 <span class=\"chem\">1</span>。其長期平均值為<strong>期望值</strong> <span class=\"chem\">E(X)</span>：",

    // Discrete random variables and the Binomial distribution > equation > dd
    "probability mass function (every probability is in <span class=\"chem\">[0, 1]</span> and total sum is <span class=\"chem\">1</span>)": "概率質量函數（每個概率均在 <span class=\"chem\">[0, 1]</span> 內且總和為 <span class=\"chem\">1</span>）",

    // Discrete random variables and the Binomial distribution > equation > dd
    "expected value (mean <span class=\"chem\">μ</span>); in a <strong>fair game</strong>, <span class=\"chem\">E(net gain) = 0</span>": "期望值（平均數 <span class=\"chem\">μ</span>）；在<strong>公平遊戲</strong>中，<span class=\"chem\">E(net gain) = 0</span>",

    // Discrete random variables and the Binomial distribution > h3
    "The Binomial distribution <span class=\"chem\">X ~ B(n, p)</span>": "二項分佈 <span class=\"chem\">X ~ B(n, p)</span>",

    // Discrete random variables and the Binomial distribution > p
    "When an experiment consists of <span class=\"chem\">n</span> independent trials, each having only two outcomes (<em>success</em> with constant probability <span class=\"chem\">p</span> and <em>failure</em> with probability <span class=\"chem\">q = 1 - p</span>), the total number of successes <span class=\"chem\">X</span> follows a <strong>Binomial distribution</strong> <span class=\"chem\">X ~ B(n, p)</span>:": "當一項實驗由 <span class=\"chem\">n</span> 次獨立試驗組成，且每次試驗只有兩個結果（<em>成功</em>的恒定概率為 <span class=\"chem\">p</span>，<em>失敗</em>的概率為 <span class=\"chem\">q = 1 - p</span>）時，總成功次數 <span class=\"chem\">X</span> 服從<strong>二項分佈</strong> <span class=\"chem\">X ~ B(n, p)</span>：",

    // Discrete random variables and the Binomial distribution > equation > maths line
    "<i>P</i>(<i>X</i> = <i>r</i>) = <span class=\"chem\">nCr</span> <i>p</i><sup><i>r</i></sup>(1 − <i>p</i>)<sup><i>n</i>−<i>r</i></sup> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>np</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>np</i>(1 − <i>p</i>)": "<i>P</i>(<i>X</i> = <i>r</i>) = <span class=\"chem\">nCr</span> <i>p</i><sup><i>r</i></sup>(1 − <i>p</i>)<sup><i>n</i>−<i>r</i></sup> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>np</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>np</i>(1 − <i>p</i>)",

    // Discrete random variables and the Binomial distribution > equation > dd
    "number of independent trials <span class=\"chem\">n</span> and probability of success <span class=\"chem\">p</span> on each trial": "獨立試驗次數 <span class=\"chem\">n</span> 及每次試驗成功的概率 <span class=\"chem\">p</span>",

    // Discrete random variables and the Binomial distribution > equation > dd
    "number of successes (<span class=\"chem\">r = 0, 1, 2, ..., n</span>)": "成功次數（<span class=\"chem\">r = 0, 1, 2, ..., n</span>）",

    // Discrete random variables and the Binomial distribution > common mistake > p
    "<strong>GDC <span class=\"mono\">binomcdf</span> Inequality Trap:</strong> On TI and Casio calculators, <span class=\"mono\">binomcdf(n, p, k)</span> always calculates <span class=\"chem\">P(X ≤ k)</span> (up to and including <span class=\"chem\">k</span>). For other inequalities with discrete integers, rewrite them in terms of <span class=\"chem\">≤</span> first:<br> • <span class=\"chem\">P(X &lt; k) = P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X &gt; k) = 1 - P(X ≤ k)</span>": "<strong>GDC <span class=\"mono\">binomcdf</span> 不等號陷阱：</strong>在 TI 與 Casio 計算機上，<span class=\"mono\">binomcdf(n, p, k)</span> 永遠計算 <span class=\"chem\">P(X ≤ k)</span>（包含 <span class=\"chem\">k</span>）。對於離散整數的其他不等式，必須先改寫為 <span class=\"chem\">≤</span>：<br> • <span class=\"chem\">P(X &lt; k) = P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X &gt; k) = 1 - P(X ≤ k)</span>",

    // Discrete random variables and the Binomial distribution > worked example > h3
    "Binomial probabilities and finding the minimum number of trials n": "二項概率與求最少試驗次數 n",

    // Discrete random variables and the Binomial distribution > worked example > p
    "An archer hits the bullseye on any shot with constant probability <span class=\"chem\">p = 0.25</span>, independently of other shots.<br> (a) In <span class=\"chem\">8</span> shots, find the probability that the archer hits the bullseye <strong>at least 3 times</strong>. <strong>[3 marks]</strong><br> (b) Find the minimum number of shots <span class=\"chem\">n</span> required so that the probability of hitting the bullseye <strong>at least once</strong> is greater than <span class=\"chem\">0.99</span>. <strong>[4 marks]</strong>": "一名射箭手每次射箭命中紅心的概率恒為 <span class=\"chem\">p = 0.25</span>，各次射擊互相獨立。<br> (a) 在 <span class=\"chem\">8</span> 次射擊中，求 (find) 射箭手命中紅心<strong>至少 3 次</strong>的概率。<strong>[3 marks]</strong><br> (b) 求 (Find) 所需的最少射擊次數 <span class=\"chem\">n</span>，使命中紅心<strong>至少一次</strong>的概率大於 <span class=\"chem\">0.99</span>。<strong>[4 marks]</strong>",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "(a) Define X ~ B(8, 0.25) and rewrite P(X ≥ 3) using the complement": "(a) 定義 X ~ B(8, 0.25) 並利用餘事件改寫 P(X ≥ 3)",

    // Discrete random variables and the Binomial distribution > worked example > p
    "On a GDC, binomcdf computes P(X ≤ k), so P(X ≥ 3) = 1 − P(X ≤ 2).": "在 GDC 上，binomcdf 計算的是 P(X ≤ k)，故 P(X ≥ 3) = 1 − P(X ≤ 2)。",

    // Discrete random variables and the Binomial distribution > worked example > maths line
    "Let <i>X</i> ~ B(8, 0.25). <i>P</i>(<i>X</i> ≥ 3) = 1 − <i>P</i>(<i>X</i> ≤ 2) <b>[M1]</b>": "設 <i>X</i> ~ B(8, 0.25)。<i>P</i>(<i>X</i> ≥ 3) = 1 − <i>P</i>(<i>X</i> ≤ 2) <b>[M1]</b>",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "(b) Set up the complement inequality 1 − P(Y = 0) > 0.99 for Y ~ B(n, 0.25)": "(b) 對 Y ~ B(n, 0.25) 列出餘事件不等式 1 − P(Y = 0) > 0.99",

    // Discrete random variables and the Binomial distribution > worked example > p
    "“At least once” is the complement of “zero hits in all n shots,” which has probability (1 − 0.25)ⁿ = 0.75ⁿ.": "「至少一次」是「全部 n 次射擊皆不中」的餘事件，後者的概率為 (1 − 0.25)ⁿ = 0.75ⁿ。",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "Solve using logarithms and round UP to the next integer": "利用對數求解並向上進位至下一個整數",

    // Discrete random variables and the Binomial distribution > worked example > p
    "Dividing by ln(0.75) &lt; 0 reverses the inequality sign. Since n must be an integer, always round up.": "除以 ln(0.75) &lt; 0 會反轉不等號方向。由於 n 必須為整數，務必向上取整。",

    // Discrete random variables and the Binomial distribution > worked example > maths line
    "Therefore, the minimum number of shots is <i>n</i> = <b>17</b>. <b>[A1]</b>": "因此，最少射擊次數為 <i>n</i> = <b>17</b>。<b>[A1]</b>",

    // Discrete random variables and the Binomial distribution > worked example > p
    "(a) 0.321; (b) n = 17 shots": "(a) 0.321；(b) n = 17 次射擊",

    // Discrete random variables and the Binomial distribution > try it > p
    "A spinner has probability <span class=\"chem\">p = 0.20</span> of landing on red on each spin. If it is spun <span class=\"chem\">n = 10</span> times independently, calculate the probability of obtaining <strong>at least 3</strong> reds, giving your answer to 3 s.f.": "一個轉盤每次轉動停在紅色的概率為 <span class=\"chem\">p = 0.20</span>。若獨立轉動 <span class=\"chem\">n = 10</span> 次，計算 (calculate) 獲得<strong>至少 3 次</strong>紅色的概率，答案準確至 3 位有效數字。",

    // Discrete random variables and the Binomial distribution > try it > li
    "Rewrite <span class=\"chem\">P(X ≥ 3) = 1 - P(X ≤ 2)</span> where <span class=\"chem\">X ~ B(10, 0.20)</span>.": "改寫為 <span class=\"chem\">P(X ≥ 3) = 1 - P(X ≤ 2)</span>，其中 <span class=\"chem\">X ~ B(10, 0.20)</span>。",

    // Discrete random variables and the Binomial distribution > try it > li
    "Using <span class=\"mono\">binomcdf(10, 0.20, 2) = 0.6778</span>, subtract from <span class=\"chem\">1</span>.": "利用 <span class=\"mono\">binomcdf(10, 0.20, 2) = 0.6778</span>，從 <span class=\"chem\">1</span> 中減去該值。",

    // The Normal distribution and standardization (z-scores) > data-toc attribute
    "Normal & z-scores": "正態分佈與 z 分數",

    // The Normal distribution and standardization (z-scores) > h2
    "The Normal distribution and standardization (<span class=\"chem\">z</span>-scores)": "正態分佈與標準化（<span class=\"chem\">z</span> 分數）",

    // The Normal distribution and standardization (z-scores) > p
    "A continuous random variable <span class=\"chem\">X ~ N(μ, σ^2)</span> has a symmetric, bell-shaped probability curve centered at the mean <span class=\"chem\">μ</span> (= median = mode), with total area under the curve equal to <span class=\"chem\">1</span>. Notice that for any continuous random variable, the probability of a single exact point is zero (<span class=\"chem\">P(X = a) = 0</span>), so <span class=\"chem\">P(X &lt; a) = P(X ≤ a)</span>.": "連續隨機變數 <span class=\"chem\">X ~ N(μ, σ^2)</span> 具有以平均數 <span class=\"chem\">μ</span>（= 中位數 = 眾數）為中心的對稱鐘形概率曲線，曲線下的總面積等於 <span class=\"chem\">1</span>。留意對任何連續隨機變數而言，單一準確點的概率為零（<span class=\"chem\">P(X = a) = 0</span>），故 <span class=\"chem\">P(X &lt; a) = P(X ≤ a)</span>。",

    // The Normal distribution and standardization (z-scores) > p
    "When <span class=\"chem\">μ</span> or <span class=\"chem\">σ</span> is unknown, transform <span class=\"chem\">X</span> into the <strong>standard normal variable</strong> <span class=\"chem\">Z ~ N(0, 1)</span>:": "當 <span class=\"chem\">μ</span> 或 <span class=\"chem\">σ</span> 未知時，把 <span class=\"chem\">X</span> 變換為<strong>標準正態變數</strong> <span class=\"chem\">Z ~ N(0, 1)</span>：",

    // The Normal distribution and standardization (z-scores) > equation > dd
    "number of standard deviations <span class=\"chem\">x</span> lies above (<span class=\"chem\">z &gt; 0</span>) or below (<span class=\"chem\">z &lt; 0</span>) the mean <span class=\"chem\">μ</span>": "<span class=\"chem\">x</span> 高於（<span class=\"chem\">z &gt; 0</span>）或低於（<span class=\"chem\">z &lt; 0</span>）平均數 <span class=\"chem\">μ</span> 的標準差倍數",

    // The Normal distribution and standardization (z-scores) > equation > dt
    "invNorm(p)": "invNorm(p)",

    // The Normal distribution and standardization (z-scores) > equation > dd
    "returns the <span class=\"chem\">z</span>-score having <strong>left-tail area</strong> <span class=\"chem\">P(Z &lt; z) = p</span>": "傳回具有<strong>左尾面積</strong> <span class=\"chem\">P(Z &lt; z) = p</span> 的 <span class=\"chem\">z</span> 分數",

    // The Normal distribution and standardization (z-scores) > widget > data-title attribute
    "Interactive Normal distribution and z-score shaded tail calculator": "互動正態分佈與 z 分數陰影尾區計算器",

    // The Normal distribution and standardization (z-scores) > widget > figcaption
    "Switch between left-tail <span class=\"chem\">P(X &lt; b)</span>, right-tail <span class=\"chem\">P(X &gt; a)</span>, and interval <span class=\"chem\">P(a &lt; X &lt; b)</span> modes. Adjust <span class=\"chem\">μ</span>, <span class=\"chem\">σ</span>, <span class=\"chem\">a</span>, and <span class=\"chem\">b</span> to see how each boundary maps to its standardized <span class=\"chem\">z</span>-score <span class=\"chem\">z = (x - μ)/σ</span>.": "切換左尾 <span class=\"chem\">P(X &lt; b)</span>、右尾 <span class=\"chem\">P(X &gt; a)</span> 與區間 <span class=\"chem\">P(a &lt; X &lt; b)</span> 模式。調校 <span class=\"chem\">μ</span>、<span class=\"chem\">σ</span>、<span class=\"chem\">a</span> 與 <span class=\"chem\">b</span>，觀察每個邊界如何對應至其標準化 <span class=\"chem\">z</span> 分數 <span class=\"chem\">z = (x - μ)/σ</span>。",

    // The Normal distribution and standardization (z-scores) > exam tip (shown in English + translation) > p
    "<strong>Classic Paper 2 Chain (Normal → Binomial / Conditional):</strong> Part (a) asks for a Normal probability <span class=\"chem\">p = P(X &gt; k)</span> for <em>one</em> randomly chosen item. Part (b) then picks a sample of <span class=\"chem\">n</span> independent items and asks for the probability that <em>at least <span class=\"chem\">r</span></em> of them satisfy <span class=\"chem\">X &gt; k</span>. Recognize this immediately as a transition from <span class=\"chem\">X ~ N(μ, σ^2)</span> to a new Binomial variable <span class=\"chem\">Y ~ B(n, p)</span>—and keep at least 5 significant figures of <span class=\"chem\">p</span> in your GDC for Part (b)!": "<strong>經典 Paper 2 連環題型（正態 → 二項／條件概率）：</strong>(a) 部要求隨機抽取<em>一件</em>物品的正態概率 <span class=\"chem\">p = P(X &gt; k)</span>；(b) 部隨即抽取 <span class=\"chem\">n</span> 件獨立物品的樣本，求其中<em>至少 <span class=\"chem\">r</span></em> 件滿足 <span class=\"chem\">X &gt; k</span> 的概率。立即辨識這是由 <span class=\"chem\">X ~ N(μ, σ^2)</span> 過渡至新二項變數 <span class=\"chem\">Y ~ B(n, p)</span>——並在 GDC 中保留 <span class=\"chem\">p</span> 至少 5 位有效數字供 (b) 部使用！",

    // The Normal distribution and standardization (z-scores) > worked example > h3
    "Finding unknown μ and σ using z-scores and simultaneous equations": "利用 z 分數與聯立方程求未知的 μ 與 σ",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "The lengths of steel rods follow a Normal distribution <span class=\"chem\">X ~ N(μ, σ^2)</span>. It is known that <span class=\"chem\">10%</span> of the rods are shorter than <span class=\"chem\">45.0</span> cm and <span class=\"chem\">5%</span> of the rods are longer than <span class=\"chem\">58.0</span> cm. Find <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span> to 3 significant figures. <strong>[5 marks]</strong>": "鋼棒的長度服從正態分佈 <span class=\"chem\">X ~ N(μ, σ^2)</span>。已知有 <span class=\"chem\">10%</span> 的鋼棒短於 <span class=\"chem\">45.0</span> cm，而有 <span class=\"chem\">5%</span> 的鋼棒長於 <span class=\"chem\">58.0</span> cm。求 (Find) <span class=\"chem\">μ</span> 與 <span class=\"chem\">σ</span>（準確至 3 位有效數字）。<strong>[5 marks]</strong>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Convert both probabilities into left-tail areas and find z₁, z₂": "將兩個概率轉化為左尾面積並求 z₁, z₂",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Standard invNorm uses the area to the LEFT of the boundary. Since P(X &gt; 58) = 0.05, the area to the left of 58 is 0.95.": "標準 invNorm 使用邊界左側的面積。由於 P(X &gt; 58) = 0.05，58 左側的面積為 0.95。",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "<i>P</i>(<i>X</i> &lt; 45) = 0.10 ⇒ <i>z</i><sub>1</sub> = invNorm(0.10) = −1.28155 <b>[A1]</b>": "<i>P</i>(<i>X</i> &lt; 45) = 0.10 ⇒ <i>z</i><sub>1</sub> = invNorm(0.10) = −1.28155 <b>[A1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "<i>P</i>(<i>X</i> &lt; 58) = 0.95 ⇒ <i>z</i><sub>2</sub> = invNorm(0.95) = +1.64485 <b>[A1]</b>": "<i>P</i>(<i>X</i> &lt; 58) = 0.95 ⇒ <i>z</i><sub>2</sub> = invNorm(0.95) = +1.64485 <b>[A1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Form two linear equations using x − μ = zσ": "利用 x − μ = zσ 列出兩條線性方程",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Substituting (x₁, z₁) and (x₂, z₂) into (x − μ)/σ = z gives a 2 × 2 linear system.": "將 (x₁, z₁) 與 (x₂, z₂) 代入 (x − μ)/σ = z 得 2 × 2 線性方程組。",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "(1) 45 − <i>μ</i> = −1.28155<i>σ</i> and (2) 58 − <i>μ</i> = 1.64485<i>σ</i> <b>[M1]</b>": "(1) 45 − <i>μ</i> = −1.28155<i>σ</i> 與 (2) 58 − <i>μ</i> = 1.64485<i>σ</i> <b>[M1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Subtract equation (1) from equation (2) to solve for σ and μ": "從方程 (2) 減去方程 (1) 以解出 σ 與 μ",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Subtracting eliminates μ immediately.": "相減可立即消去 μ。",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "μ = 50.7 cm, σ = 4.44 cm": "μ = 50.7 cm, σ = 4.44 cm",

    // The Normal distribution and standardization (z-scores) > try it > p
    "A normal random variable <span class=\"chem\">X ~ N(μ, σ^2)</span> has mean <span class=\"chem\">μ = 50</span>. Given that <span class=\"chem\">P(X &gt; 65) = P(Z &gt; 1.5)</span>, find the standard deviation <span class=\"chem\">σ</span>.": "正態隨機變數 <span class=\"chem\">X ~ N(μ, σ^2)</span> 的平均數為 <span class=\"chem\">μ = 50</span>。已知 <span class=\"chem\">P(X &gt; 65) = P(Z &gt; 1.5)</span>，求 (find) 標準差 <span class=\"chem\">σ</span>。",

    // The Normal distribution and standardization (z-scores) > try it > li
    "Standardize <span class=\"chem\">x = 65</span> using <span class=\"chem\">z = (x - μ) / σ</span>.": "使用 <span class=\"chem\">z = (x - μ) / σ</span> 把 <span class=\"chem\">x = 65</span> 標準化。",

    // The Normal distribution and standardization (z-scores) > try it > li
    "Solve <span class=\"chem\">(65 - 50) / σ = 1.5</span> for <span class=\"chem\">σ</span>.": "解 <span class=\"chem\">(65 - 50) / σ = 1.5</span> 以求 <span class=\"chem\">σ</span>。",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > data-toc attribute
    "Bayes & continuous RVs": "貝葉斯與連續隨機變數",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > h2
    "Bayes' theorem, discrete variance and continuous random variables": "貝葉斯定理、離散方差與連續隨機變數",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > p
    "When the sample space is partitioned into up to three mutually exclusive and exhaustive events <span class=\"chem\">B_1, B_2, B_3</span> (so <span class=\"chem\">P(B_1) + P(B_2) + P(B_3) = 1</span>) and you are told that an event <span class=\"chem\">A</span> is true, <strong>Bayes' theorem</strong> updates the <strong>prior</strong> probability <span class=\"chem\">P(B_i)</span> (before the information about <span class=\"chem\">A</span> is used) to the <strong>posterior</strong> probability <span class=\"chem\">P(B_i | A)</span> (after taking <span class=\"chem\">A</span> into account):": "當樣本空間被分割為最多三個互斥且窮盡的事件 <span class=\"chem\">B_1, B_2, B_3</span>（故 <span class=\"chem\">P(B_1) + P(B_2) + P(B_3) = 1</span>），而你得知事件 <span class=\"chem\">A</span> 成立時，<strong>貝葉斯定理</strong>會把<strong>先驗</strong>概率 <span class=\"chem\">P(B_i)</span>（未使用關於 <span class=\"chem\">A</span> 的資訊之前）更新為<strong>後驗</strong>概率 <span class=\"chem\">P(B_i | A)</span>（考慮 <span class=\"chem\">A</span> 之後）：",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Numerator": "分子",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "joint probability <span class=\"chem\">P(B_i ∩ A)</span> along the single tree branch through <span class=\"chem\">B_i</span> to <span class=\"chem\">A</span>": "沿經過 <span class=\"chem\">B_i</span> 到 <span class=\"chem\">A</span> 的單一樹形分支之聯合概率 <span class=\"chem\">P(B_i ∩ A)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Denominator": "分母",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "total probability <span class=\"chem\">P(A)</span> summed over all branches that end at <span class=\"chem\">A</span>": "所有終止於 <span class=\"chem\">A</span> 的分支之和所得之全概率 <span class=\"chem\">P(A)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > widget > Additional HL > data-title attribute
    "Interactive Bayes' theorem diagnostic tree and posterior updater": "互動貝葉斯定理診斷樹與後驗概率更新器",

    // Bayes' theorem, discrete variance and continuous random vari > widget > Additional HL > figcaption
    "Explore the classic medical testing paradox: when a condition is rare (<span class=\"chem\">P(B) = 0.05</span>), even a test with <span class=\"chem\">95%</span> sensitivity and a <span class=\"chem\">10%</span> false-positive rate yields a posterior probability <span class=\"chem\">P(B | A) ≈ 33.3%</span> because false positives from the large healthy group (<span class=\"chem\">95%</span>) outnumber true positives!": "探索經典的醫學檢測悖論：當病症罕見時（<span class=\"chem\">P(B) = 0.05</span>），即使檢測具備 <span class=\"chem\">95%</span> 靈敏度及 <span class=\"chem\">10%</span> 假陽性率，後驗概率 <span class=\"chem\">P(B | A) ≈ 33.3%</span>，因為來自龐大健康群體（<span class=\"chem\">95%</span>）的假陽性人數仍多於真陽性人數！",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > h3
    "Variance, linear transformations and continuous probability density functions": "方差、線性變換與連續概率密度函數",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > p
    "For a <strong>discrete</strong> random variable <span class=\"chem\">X</span>, or a <strong>continuous</strong> random variable <span class=\"chem\">X</span> with probability density function (PDF) <span class=\"chem\">f(x)</span>, expectation and variance follow parallel sum and integral formulas:": "對於<strong>離散</strong>隨機變數 <span class=\"chem\">X</span>，或具有概率密度函數 (PDF) <span class=\"chem\">f(x)</span> 的<strong>連續</strong>隨機變數 <span class=\"chem\">X</span>，期望值與方差依循平行的求和與積分公式：",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > maths line
    "<i>f</i>(<i>x</i>) ≥ 0, &nbsp; ∫<sub>−∞</sub><sup>∞</sup> <i>f</i>(<i>x</i>) d<i>x</i> = 1 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>μ</i> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i> <i>f</i>(<i>x</i>) d<i>x</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − <i>μ</i><sup>2</sup> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i><sup>2</sup> <i>f</i>(<i>x</i>) d<i>x</i> − <i>μ</i><sup>2</sup>": "<i>f</i>(<i>x</i>) ≥ 0, &nbsp; ∫<sub>−∞</sub><sup>∞</sup> <i>f</i>(<i>x</i>) d<i>x</i> = 1 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>μ</i> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i> <i>f</i>(<i>x</i>) d<i>x</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − <i>μ</i><sup>2</sup> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i><sup>2</sup> <i>f</i>(<i>x</i>) d<i>x</i> − <i>μ</i><sup>2</sup>",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Mode": "眾數",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "the value of <span class=\"chem\">x</span> in the domain where <span class=\"chem\">f(x)</span> attains its <strong>global maximum</strong> (check <span class=\"chem\">f'(x) = 0</span> AND domain endpoints!)": "定義域內使 <span class=\"chem\">f(x)</span> 達到<strong>全局極大值</strong>的 <span class=\"chem\">x</span> 值（須同時檢查 <span class=\"chem\">f'(x) = 0</span> 與定義域端點！）",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Median m": "中位數 m",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "the value <span class=\"chem\">m</span> satisfying <span class=\"chem\">∫_{-∞}^m f(x) dx = 0.5</span> (similarly <span class=\"chem\">0.25</span> for <span class=\"chem\">Q_1</span> and <span class=\"chem\">0.75</span> for <span class=\"chem\">Q_3</span>)": "滿足 <span class=\"chem\">∫_{-∞}^m f(x) dx = 0.5</span> 的數值 <span class=\"chem\">m</span>（<span class=\"chem\">Q_1</span> 與 <span class=\"chem\">Q_3</span> 則分別對應 <span class=\"chem\">0.25</span> 與 <span class=\"chem\">0.75</span>）",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "aX + b": "aX + b",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "<span class=\"chem\">E(aX + b) = a E(X) + b</span> and <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>": "<span class=\"chem\">E(aX + b) = a E(X) + b</span> 及 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > common mistake > Additional HL > p
    "<strong>Endpoint Mode Trap:</strong> Students often set <span class=\"chem\">f'(x) = 0</span> without checking whether the stationary point is actually in the domain or whether an endpoint is higher. If <span class=\"chem\">f(x) = (3/8)x^2</span> on <span class=\"chem\">0 ≤ x ≤ 2</span>, then <span class=\"chem\">f(x)</span> is strictly increasing on <span class=\"chem\">[0, 2]</span>, so its <strong>mode is at the right endpoint <span class=\"chem\">x = 2</span></strong> (not at <span class=\"chem\">x = 0</span> where <span class=\"chem\">f'(0) = 0</span>)!": "<strong>端點眾數陷阱：</strong>學生常只令 <span class=\"chem\">f'(x) = 0</span>，卻未檢查駐點是否在定義域內，或端點是否更高。若在 <span class=\"chem\">0 ≤ x ≤ 2</span> 上 <span class=\"chem\">f(x) = (3/8)x^2</span>，則 <span class=\"chem\">f(x)</span> 在 <span class=\"chem\">[0, 2]</span> 上嚴格遞增，因此其<strong>眾數位於右端點 <span class=\"chem\">x = 2</span></strong>（而非 <span class=\"chem\">f'(0) = 0</span> 的 <span class=\"chem\">x = 0</span>）！",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > h3
    "Analyzing a continuous random variable: constant k, mode, mean and variance": "分析連續隨機變數：常數 k、眾數、平均數與方差",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = kx(2 - x)</span> for <span class=\"chem\">0 ≤ x ≤ 2</span>, and <span class=\"chem\">f(x) = 0</span> otherwise.<br> (a) Show that <span class=\"chem\">k = 3/4</span> and state the mode of <span class=\"chem\">X</span>. <strong>[3 marks]</strong><br> (b) Find <span class=\"chem\">E(X)</span> and <span class=\"chem\">Var(X)</span>. <strong>[4 marks]</strong><br> (c) Hence find <span class=\"chem\">Var(5X - 3)</span>. <strong>[2 marks]</strong>": "連續隨機變數 <span class=\"chem\">X</span> 的概率密度函數在 <span class=\"chem\">0 ≤ x ≤ 2</span> 時為 <span class=\"chem\">f(x) = kx(2 - x)</span>，其餘情況為 <span class=\"chem\">f(x) = 0</span>。<br> (a) 證明 (Show that) <span class=\"chem\">k = 3/4</span> 並寫出 (state) <span class=\"chem\">X</span> 的眾數。<strong>[3 marks]</strong><br> (b) 求 (Find) <span class=\"chem\">E(X)</span> 與 <span class=\"chem\">Var(X)</span>。<strong>[4 marks]</strong><br> (c) 由此求 (Hence find) <span class=\"chem\">Var(5X - 3)</span>。<strong>[2 marks]</strong>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(a) Integrate f(x) over [0, 2] and set equal to 1": "(a) 在 [0, 2] 上對 f(x) 積分並令其等於 1",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "Total area under any valid PDF must equal 1.": "任何有效 PDF 下的總面積必須等於 1。",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Since <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i>(2 − <i>x</i>) is a downward parabola symmetric about <i>x</i> = 1, the <b>mode is <i>x</i> = 1</b>. <b>[A1]</b>": "由於 <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i>(2 − <i>x</i>) 是關於 <i>x</i> = 1 對稱的開口向下拋物線，故<b>眾數為 <i>x</i> = 1</b>。<b>[A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(b) Find E(X) by symmetry (or integration) and compute E(X²)": "(b) 利用對稱性（或積分）求 E(X) 並計算 E(X²)",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "By symmetry about x = 1 on [0, 2], E(X) = 1. Then Var(X) = ∫ x² f(x) dx − [E(X)]².": "由在 [0, 2] 上關於 x = 1 的對稱性，E(X) = 1。然後 Var(X) = ∫ x² f(x) dx − [E(X)]²。",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup> = <span class=\"frac\"><span>6</span><span>5</span></span> − 1<sup>2</sup> = <b><span class=\"frac\"><span>1</span><span>5</span></span></b> (or 0.2) <b>[A1]</b>": "Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup> = <span class=\"frac\"><span>6</span><span>5</span></span> − 1<sup>2</sup> = <b><span class=\"frac\"><span>1</span><span>5</span></span></b>（或 0.2）<b>[A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(c) Apply the linear transformation rule Var(aX + b) = a² Var(X)": "(c) 應用線性變換法則 Var(aX + b) = a² Var(X)",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "Subtracting 3 does not change variance; multiplying by 5 multiplies variance by 5² = 25.": "減去 3 不改變方差；乘以 5 會使方差乘以 5² = 25。",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Var(5<i>X</i> − 3) = 5<sup>2</sup> Var(<i>X</i>) = 25 × <span class=\"frac\"><span>1</span><span>5</span></span> = <b>5</b> <b>[M1 A1]</b>": "Var(5<i>X</i> − 3) = 5<sup>2</sup> Var(<i>X</i>) = 25 × <span class=\"frac\"><span>1</span><span>5</span></span> = <b>5</b> <b>[M1 A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "(a) k = 3/4, mode = 1; (b) E(X) = 1, Var(X) = 1/5; (c) Var(5X − 3) = 5": "(a) k = 3/4, 眾數 = 1；(b) E(X) = 1, Var(X) = 1/5；(c) Var(5X − 3) = 5",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > p
    "In a factory, Machine <span class=\"chem\">B_1</span> produces <span class=\"chem\">60%</span> of bolts (with a <span class=\"chem\">2%</span> defective rate) and Machine <span class=\"chem\">B_2</span> produces <span class=\"chem\">40%</span> of bolts (with a <span class=\"chem\">5%</span> defective rate). Given that a randomly chosen bolt is defective (<span class=\"chem\">D</span>), use Bayes' theorem to find the probability <span class=\"chem\">P(B_1 | D)</span> that it was made by Machine <span class=\"chem\">B_1</span>.": "在一間工廠裏，機器 <span class=\"chem\">B_1</span> 生產 <span class=\"chem\">60%</span> 的螺栓（次品率為 <span class=\"chem\">2%</span>），機器 <span class=\"chem\">B_2</span> 生產 <span class=\"chem\">40%</span> 的螺栓（次品率為 <span class=\"chem\">5%</span>）。已知隨機抽選的一個螺栓是次品（<span class=\"chem\">D</span>），利用貝葉斯定理求 (find) 它是由機器 <span class=\"chem\">B_1</span> 製造的概率 <span class=\"chem\">P(B_1 | D)</span>。",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > li
    "Compute the two defective path probabilities: <span class=\"chem\">P(B_1 ∩ D) = 0.60 × 0.02 = 0.012</span> and <span class=\"chem\">P(B_2 ∩ D) = 0.40 × 0.05 = 0.020</span>.": "計算兩條次品路徑的概率：<span class=\"chem\">P(B_1 ∩ D) = 0.60 × 0.02 = 0.012</span> 及 <span class=\"chem\">P(B_2 ∩ D) = 0.40 × 0.05 = 0.020</span>。",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > li
    "Divide <span class=\"chem\">0.012</span> by the total defective probability <span class=\"chem\">0.012 + 0.020 = 0.032</span>.": "把 <span class=\"chem\">0.012</span> 除以總次品概率 <span class=\"chem\">0.012 + 0.020 = 0.032</span>。",

    // Quick practice > data-toc attribute
    "Practice": "練習",

    // Quick practice > h2
    "Quick practice": "快速練習",

    // widget string (assets/js/widgets-t4-2.js)
    "Probability region": "概率區域",

    // widget string (assets/js/widgets-t4-2.js)
    "Between: P(a < X < b)": "區間：P(a < X < b)",

    // widget string (assets/js/widgets-t4-2.js)
    "Left tail: P(X < b)": "左尾：P(X < b)",

    // widget string (assets/js/widgets-t4-2.js)
    "Right tail: P(X > a)": "右尾：P(X > a)",

    // widget string (assets/js/widgets-t4-2.js)
    "Mean μ": "平均數 μ",

    // widget string (assets/js/widgets-t4-2.js)
    "Standard deviation σ": "標準差 σ",

    // widget string (assets/js/widgets-t4-2.js)
    "Bound a": "下界 a",

    // widget string (assets/js/widgets-t4-2.js)
    "Bound b": "上界 b",

    // widget string (assets/js/widgets-t4-2.js)
    "Standardized z-score(s)": "標準化 z 分數",

    // widget string (assets/js/widgets-t4-2.js)
    "Shaded probability area": "陰影概率面積",

    // widget string (assets/js/widgets-t4-2.js)
    "GDC syntax": "GDC 語法",

    // widget string (assets/js/widgets-t4-2.js)
    "Normal distribution curve with shaded probability area and z-score markers": "附有陰影概率面積與 z 分數標記的正態分佈曲線",

    // widget string (assets/js/widgets-t4-2.js)
    "x (with standardized z = (x − μ)/σ)": "x（標準化 z = (x − μ)/σ）",

    // widget string (assets/js/widgets-t4-2.js)
    "Area": "面積",

    // widget string (assets/js/widgets-t4-2.js)
    "Prior P(B) (base rate)": "先驗概率 P(B)（基礎比率）",

    // widget string (assets/js/widgets-t4-2.js)
    "Sensitivity P(A | B)": "靈敏度 P(A | B)",

    // widget string (assets/js/widgets-t4-2.js)
    "False positive P(A | B′)": "假陽性率 P(A | B′)",

    // widget string (assets/js/widgets-t4-2.js)
    "Two paths to outcome A": "通往結果 A 的兩條路徑",

    // widget string (assets/js/widgets-t4-2.js)
    "Total probability P(A)": "全概率 P(A)",

    // widget string (assets/js/widgets-t4-2.js)
    "Bayes posterior P(B | A)": "貝葉斯後驗概率 P(B | A)",

    // widget string (assets/js/widgets-t4-2.js)
    "Two-stage probability tree diagram and Bayes posterior proportion bar": "兩階段概率樹形圖與貝葉斯後驗比例條",

    // widget string (assets/js/widgets-t4-2.js)
    "Among all A outcomes: P(B | A) =": "在所有結果 A 中：P(B | A) =",

    // widget string (assets/js/widgets-t4-2.js)
    "green": "綠色",

    // widget string (assets/js/widgets-t4-2.js)
    "red": "紅色",

  }
});
