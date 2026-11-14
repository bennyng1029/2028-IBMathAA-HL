/* t4-2 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't4-2', {
  strings: {

    // page title (browser tab)
    "4.2 Probability, distributions, Bayes and continuous RVs | Analysis Lab": "4.2 확률, 확률분포, 베이즈 정리와 연속확률변수 | Analysis Lab",

    // Probability, distributions, Bayes and continuous RVs > page header > p
    "Topic 4.2 · SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14": "Topic 4.2 · SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14",

    // Probability, distributions, Bayes and continuous RVs > page header > h1
    "Probability, distributions, Bayes and continuous RVs": "확률, 확률분포, 베이즈 정리와 연속확률변수",

    // Probability, distributions, Bayes and continuous RVs > page header > span
    "How do we update probabilities when new evidence arrives, and how do discrete sums become continuous integrals when outcomes vary smoothly?": "새로운 증거가 주어졌을 때 확률을 어떻게 갱신하며, 결과가 연속적으로 변할 때 이산적인 합이 어떻게 연속적인 적분으로 바뀔까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > span
    "Use Venn diagrams, tree diagrams, and the addition rule <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>; distinguish mutually exclusive (<span class=\"chem\">P(A ∩ B) = 0</span>) from independent (<span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>) events, and evaluate conditional probabilities <span class=\"chem\">P(A | B)</span>.": "벤 다이어그램, 수형도, 덧셈정리 <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>를 사용하고, 배반사건(<span class=\"chem\">P(A ∩ B) = 0</span>)과 독립사건(<span class=\"chem\">P(A ∩ B) = P(A)P(B)</span>)을 구분하며, 조건부확률 <span class=\"chem\">P(A | B)</span>를 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Verify discrete probability distributions (<span class=\"chem\">Σ P(X = x) = 1</span>), calculate expected value <span class=\"chem\">E(X) = Σ x P(X = x)</span>, and determine whether a game is fair (<span class=\"chem\">E(gain) = 0</span>).": "이산확률분포의 조건(<span class=\"chem\">Σ P(X = x) = 1</span>)을 확인하고, 기댓값 <span class=\"chem\">E(X) = Σ x P(X = x)</span>을 계산하며, 게임이 공정한지(<span class=\"chem\">E(gain) = 0</span>) 판별할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Model fixed-trial experiments with the Binomial distribution <span class=\"chem\">X ~ B(n, p)</span>, compute probabilities by formula and GDC, and solve minimum-trial problems <span class=\"chem\">1 - (1 - p)^n &gt; c</span>.": "고정된 시행 횟수 실험을 이항분포 <span class=\"chem\">X ~ B(n, p)</span>로 모델링하고, 공식과 GDC로 확률을 계산하며, 최소 시행 횟수 문제 <span class=\"chem\">1 - (1 - p)^n &gt; c</span>를 풀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Compute Normal probabilities and inverse Normal quantiles, standardize to <span class=\"chem\">Z = (X - μ)/σ ~ N(0, 1)</span> to find unknown <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span>, and link Normal probabilities into Binomial or conditional models.": "정규분포 확률과 역정규분포 분위수를 계산하고, <span class=\"chem\">Z = (X - μ)/σ ~ N(0, 1)</span>로 표준화해 미지의 <span class=\"chem\">μ</span>와 <span class=\"chem\">σ</span>를 구하며, 정규분포 확률을 이항분포나 조건부 모델과 연결할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Apply Bayes' theorem <span class=\"chem\">P(B_i | A)</span> for up to three partitioning events <span class=\"chem\">B_1, B_2, B_3</span> to reverse conditional probabilities.": "최대 3개의 분할 사건 <span class=\"chem\">B_1, B_2, B_3</span>에 대해 베이즈 정리 <span class=\"chem\">P(B_i | A)</span>를 적용해 조건부확률의 방향을 뒤집을 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Compute discrete variance <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>, apply linear transformations <span class=\"chem\">E(aX + b)</span> and <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>, and find the mode, median, mean, and variance of a continuous random variable from its PDF <span class=\"chem\">f(x)</span>.": "이산확률변수의 분산 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>과 선형 변환 <span class=\"chem\">E(aX + b)</span>, <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>을 계산하고, 확률밀도함수(PDF) <span class=\"chem\">f(x)</span>로부터 연속확률변수의 최빈값, 중앙값, 평균, 분산을 구할 수 있어요.",

    // Question decoder: spotting which probability tool to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which probability tool to use > h2
    "Question decoder: spotting which probability tool to use": "문제 디코더: 어떤 확률 도구를 쓸지 바로 찾기",

    // Question decoder: spotting which probability tool to use > p
    "Probability exam questions hide their mathematical structure inside everyday stories. Scan the wording for these trigger phrases before writing your first line of working.": "확률 시험 문제는 수학적 구조를 일상적인 이야기 속에 숨겨 놓아요. 첫 줄을 쓰기 전에 문제 문구에서 아래 핵심 표현을 먼저 찾아보세요.",

    // Question decoder: spotting which probability tool to use > table > caption
    "Question decoder — Probability, distributions, Bayes' theorem and continuous RVs": "문제 디코더 — 확률, 확률분포, 베이즈 정리와 연속확률변수",

    // Question decoder: spotting which probability tool to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which probability tool to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which probability tool to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which probability tool to use > table > th
    "“Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <strong>mutually exclusive</strong>” vs “<strong>independent</strong>”": "“사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 <strong>배반(mutually exclusive)</strong>이다” vs “<strong>독립(independent)</strong>이다”",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Mutually exclusive</strong>: cannot happen together, so <span class=\"chem\">P(A ∩ B) = 0</span>.<br><strong>Independent</strong>: one does not affect the other, so <span class=\"chem\">P(A ∩ B) = P(A)P(B)</span> (and <span class=\"chem\">P(A | B) = P(A)</span>).": "<strong>배반사건</strong>: 동시에 일어날 수 없으므로 <span class=\"chem\">P(A ∩ B) = 0</span>.<br><strong>독립사건</strong>: 서로 영향을 주지 않으므로 <span class=\"chem\">P(A ∩ B) = P(A)P(B)</span> (그리고 <span class=\"chem\">P(A | B) = P(A)</span>).",

    // Question decoder: spotting which probability tool to use > table > td
    "Substitute <span class=\"chem\">P(A ∩ B) = 0</span> or <span class=\"chem\">P(A)P(B)</span> into <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>. Never confuse the two!": "<span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>에 <span class=\"chem\">P(A ∩ B) = 0</span> 또는 <span class=\"chem\">P(A)P(B)</span>를 대입하세요. 둘을 절대 혼동하지 마세요!",

    // Question decoder: spotting which probability tool to use > table > th
    "“<strong>Given that</strong> / knowing that / among those who…”": "“<strong>…일 때 / …라는 조건에서 (Given that)</strong> / …한 사람 중에서…”",

    // Question decoder: spotting which probability tool to use > table > td
    "Conditional probability <span class=\"chem\">P(A | B) = P(A ∩ B) / P(B)</span>, where <span class=\"chem\">B</span> is the known condition.": "조건부확률 <span class=\"chem\">P(A | B) = P(A ∩ B) / P(B)</span>를 쓰세요 (<span class=\"chem\">B</span>가 주어진 조건이에요).",

    // Question decoder: spotting which probability tool to use > table > td
    "Write the fraction <span class=\"chem\">P(A ∩ B) / P(B)</span> explicitly—even inside a Normal or Binomial question (e.g., <span class=\"chem\">P(X &gt; 15 | X &gt; 10) = P(X &gt; 15) / P(X &gt; 10)</span>)!": "정규분포나 이항분포 문제 안에서도 분수 <span class=\"chem\">P(A ∩ B) / P(B)</span>를 분명히 적으세요 (예: <span class=\"chem\">P(X &gt; 15 | X &gt; 10) = P(X &gt; 15) / P(X &gt; 10)</span>)!",

    // Question decoder: spotting which probability tool to use > table > th
    "“Stage 1 priors <span class=\"chem\">P(B_i)</span> and stage 2 conditionals <span class=\"chem\">P(A | B_i)</span> are given; find <span class=\"chem\">P(B_i | A)</span>”": "“1단계 사전확률 <span class=\"chem\">P(B_i)</span>와 2단계 조건부확률 <span class=\"chem\">P(A | B_i)</span>가 주어졌을 때 <span class=\"chem\">P(B_i | A)</span>를 구하시오”",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Bayes' theorem</strong> (reversing the tree): divide the single desired path <span class=\"chem\">P(B_i)P(A | B_i)</span> by the sum of all paths reaching <span class=\"chem\">A</span>.": "<strong>베이즈 정리</strong> (수형도 뒤집기): 원하는 단일 경로 <span class=\"chem\">P(B_i)P(A | B_i)</span>를 <span class=\"chem\">A</span>에 도달하는 모든 경로의 합으로 나누세요.",

    // Question decoder: spotting which probability tool to use > table > td
    "Draw a two-stage tree diagram, multiply along each branch to <span class=\"chem\">A</span>, and form <span class=\"chem\">P(B_i ∩ A) / P(A)</span>.": "2단계 수형도를 그리고 <span class=\"chem\">A</span>로 가는 각 가지를 곱한 뒤 <span class=\"chem\">P(B_i ∩ A) / P(A)</span>를 세우세요.",

    // Question decoder: spotting which probability tool to use > table > th
    "“Fixed number of <span class=\"chem\">n</span> independent trials with constant success probability <span class=\"chem\">p</span>”": "“성공 확률 <span class=\"chem\">p</span>가 일정한 <span class=\"chem\">n</span>회의 독립시행”",

    // Question decoder: spotting which probability tool to use > table > td
    "Binomial distribution <span class=\"chem\">X ~ B(n, p)</span> with <span class=\"chem\">P(X = r) = nCr p^r (1 - p)^{n-r}</span>, <span class=\"chem\">E(X) = np</span>, <span class=\"chem\">Var(X) = np(1 - p)</span>.": "이항분포 <span class=\"chem\">X ~ B(n, p)</span>: <span class=\"chem\">P(X = r) = nCr p^r (1 - p)^{n-r}</span>, <span class=\"chem\">E(X) = np</span>, <span class=\"chem\">Var(X) = np(1 - p)</span>.",

    // Question decoder: spotting which probability tool to use > table > td
    "<strong>Paper 1</strong>: Use <span class=\"chem\">nCr p^r (1 - p)^{n-r}</span>.<br><strong>Paper 2</strong>: Watch out for <span class=\"mono\">binomcdf</span>: <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span>!": "<strong>Paper 1</strong>: <span class=\"chem\">nCr p^r (1 - p)^{n-r}</span>를 쓰세요.<br><strong>Paper 2</strong>: <span class=\"mono\">binomcdf</span>에 주의하세요: <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span>!",

    // Question decoder: spotting which probability tool to use > table > th
    "“Find the minimum number of trials <span class=\"chem\">n</span> such that <span class=\"chem\">P(at least one success) &gt; 0.95</span>”": "“<span class=\"chem\">P(at least one success) &gt; 0.95</span> (적어도 한 번 성공할 확률 &gt; 0.95)가 되도록 하는 최소 시행 횟수 <span class=\"chem\">n</span>을 구하시오”",

    // Question decoder: spotting which probability tool to use > table > td
    "Use the complement: <span class=\"chem\">P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)^n &gt; 0.95 ⇒ (1 - p)^n &lt; 0.05</span>.": "여사건을 쓰세요: <span class=\"chem\">P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)^n &gt; 0.95 ⇒ (1 - p)^n &lt; 0.05</span>.",

    // Question decoder: spotting which probability tool to use > table > td
    "Solve <span class=\"chem\">n &gt; ln(0.05) / ln(1 - p)</span> (remembering <span class=\"chem\">ln(1 - p) &lt; 0</span> flips the inequality!) or inspect a GDC table, then round <strong>up</strong> to the next integer.": "<span class=\"chem\">n &gt; ln(0.05) / ln(1 - p)</span>를 풀고 (<span class=\"chem\">ln(1 - p) &lt; 0</span>이므로 부등호 방향이 바뀜!) 또는 GDC 표를 확인한 뒤 다음 정수로 <strong>올림</strong>하세요.",

    // Question decoder: spotting which probability tool to use > table > th
    "“Continuous measurement <span class=\"chem\">X ~ N(μ, σ^2)</span> with unknown <span class=\"chem\">μ</span> or <span class=\"chem\">σ</span>”": "“미지의 <span class=\"chem\">μ</span> 또는 <span class=\"chem\">σ</span>를 갖는 연속 측정값 <span class=\"chem\">X ~ N(μ, σ^2)</span>”",

    // Question decoder: spotting which probability tool to use > table > td
    "Standardize to <span class=\"chem\">Z ~ N(0, 1)</span> using <span class=\"chem\">z = (x - μ) / σ</span>, where <span class=\"chem\">z = invNorm(left-tail area)</span>.": "<span class=\"chem\">z = (x - μ) / σ</span>를 이용해 <span class=\"chem\">Z ~ N(0, 1)</span>로 표준화하세요 (<span class=\"chem\">z = invNorm(left-tail area)</span>, 왼쪽 꼬리 넓이).",

    // Question decoder: spotting which probability tool to use > table > td
    "Write <span class=\"chem\">x - μ = z σ</span>. If both <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span> are unknown, set up two linear equations and solve simultaneously.": "<span class=\"chem\">x - μ = z σ</span>로 쓰세요. <span class=\"chem\">μ</span>와 <span class=\"chem\">σ</span>가 모두 미지수이면 두 일차방정식을 세워 연립하세요.",

    // Question decoder: spotting which probability tool to use > not needed for IB > p
    "<strong>What is NOT in the IB Math AA syllabus (SL or HL):</strong> The Poisson distribution, Central Limit Theorem (sample mean distribution <span class=\"chem\">X̄ ~ N(μ, σ^2/n)</span>), confidence intervals, and linear combinations of <em>two</em> independent random variables (<span class=\"chem\">aX + bY</span>) are in IB Math AI HL, <strong>not</strong> IB Math AA. AA never combines two random variables; HL students meet only transformations of a single random variable (<span class=\"chem\">aX + b</span>, AHL 4.14).": "<strong>IB Math AA (SL, HL 모두) 시험 범위 외 내용:</strong> 푸아송 분포, 중심극한정리(표본평균의 분포 <span class=\"chem\">X̄ ~ N(μ, σ^2/n)</span>), 신뢰구간, 그리고 <em>두</em> 독립 확률변수의 선형 결합(<span class=\"chem\">aX + bY</span>)은 IB Math AI HL 범위이지 IB Math AA 범위가 <strong>아니에요</strong>. AA에서는 두 확률변수를 결합하지 않으며, HL 학생은 단일 확률변수의 변환(<span class=\"chem\">aX + b</span>, AHL 4.14)만 배워요.",

    // Combined events, independence and conditional probability > data-toc attribute
    "Events & conditional": "사건과 조건부확률",

    // Combined events, independence and conditional probability > h2
    "Combined events, independence and conditional probability": "사건의 연산, 독립성과 조건부확률",
    "If an experiment is repeated <span class=\"chem\">n</span> times and event <span class=\"chem\">A</span> has probability <span class=\"chem\">P(A)</span> on each trial, the <strong>expected number of occurrences</strong> of <span class=\"chem\">A</span> is <span class=\"chem\">n · P(A)</span>. For example, if a fair die is rolled <span class=\"chem\">60</span> times, the expected number of sixes is <span class=\"chem\">60 × 1/6 = 10</span>. This is a long-run average, so it does not have to be a whole number.": "어떤 시행을 <span class=\"chem\">n</span>번 반복하고 매번 사건 <span class=\"chem\">A</span>의 확률이 <span class=\"chem\">P(A)</span>이면, <span class=\"chem\">A</span>의 <strong>기대 발생 횟수</strong>는 <span class=\"chem\">n · P(A)</span>예요. 예를 들어 공정한 주사위를 <span class=\"chem\">60</span>번 던지면 6이 나오는 기대 횟수는 <span class=\"chem\">60 × 1/6 = 10</span>이에요. 이것은 장기적인 평균이므로 정수가 아니어도 돼요.",

    // Combined events, independence and conditional probability > p
    "For any two events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> in a sample space <span class=\"chem\">U</span>, the probability of their union (at least one occurring) and the conditional probability of <span class=\"chem\">A</span> given <span class=\"chem\">B</span> are connected by two fundamental identities in your Formula Booklet:": "표본공간 <span class=\"chem\">U</span>의 임의의 두 사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>에 대해, 합사건(적어도 하나가 일어남)의 확률과 <span class=\"chem\">B</span>가 일어났을 때 <span class=\"chem\">A</span>의 조건부확률은 공식집의 두 기본 항등식으로 연결돼요:",

    // Combined events, independence and conditional probability > equation > dd
    "probability that <span class=\"chem\">A</span> or <span class=\"chem\">B</span> (or both) occurs": "<span class=\"chem\">A</span> 또는 <span class=\"chem\">B</span>(또는 둘 다)가 일어날 확률",

    // Combined events, independence and conditional probability > equation > dd
    "probability that both <span class=\"chem\">A</span> and <span class=\"chem\">B</span> occur together": "<span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 동시에 일어날 확률",

    // Combined events, independence and conditional probability > equation > dd
    "probability of <span class=\"chem\">A</span> occurring given that <span class=\"chem\">B</span> occurs (we know <span class=\"chem\">B</span> is true; it need not happen first)": "<span class=\"chem\">B</span>가 일어났다는 조건에서 <span class=\"chem\">A</span>가 일어날 확률 (<span class=\"chem\">B</span>가 참임을 안다는 뜻이며, 먼저 일어날 필요는 없음)",

    // Combined events, independence and conditional probability > common mistake > p
    "<strong>Never confuse Mutually Exclusive with Independent:</strong> Two events with non-zero probabilities (<span class=\"chem\">P(A) &gt; 0, P(B) &gt; 0</span>) can <strong>never</strong> be both mutually exclusive and independent! If <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <dfn data-def=\"Two events that cannot occur at the same time, so P(A ∩ B) = 0.\">mutually exclusive</dfn>, then <span class=\"chem\">P(A ∩ B) = 0</span>. If they are <dfn data-def=\"Two events where the occurrence of one does not change the probability of the other, so P(A ∩ B) = P(A)P(B).\">independent</dfn>, then <span class=\"chem\">P(A ∩ B) = P(A)P(B) &gt; 0</span>.": "<strong>배반사건과 독립사건을 절대 혼동하지 마세요:</strong> 확률이 0보다 큰 두 사건(<span class=\"chem\">P(A) &gt; 0, P(B) &gt; 0</span>)은 <strong>절대로</strong> 배반이면서 동시에 독립일 수 없어요! <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 <dfn data-def=\"Two events that cannot occur at the same time, so P(A ∩ B) = 0.\">배반사건 <span class=\"en-term\">(mutually exclusive)</span></dfn>이면 <span class=\"chem\">P(A ∩ B) = 0</span>이고, <dfn data-def=\"Two events where the occurrence of one does not change the probability of the other, so P(A ∩ B) = P(A)P(B).\">독립사건 <span class=\"en-term\">(independent)</span></dfn>이면 <span class=\"chem\">P(A ∩ B) = P(A)P(B) &gt; 0</span>이에요.",

    // Combined events, independence and conditional probability > common mistake > data-def attribute
    "Two events that cannot occur at the same time, so P(A ∩ B) = 0.": "동시에 일어날 수 없는 두 사건 (P(A ∩ B) = 0).",

    // Combined events, independence and conditional probability > common mistake > data-def attribute
    "Two events where the occurrence of one does not change the probability of the other, so P(A ∩ B) = P(A)P(B).": "한 사건의 발생 여부가 다른 사건의 확률에 영향을 주지 않는 두 사건 (P(A ∩ B) = P(A)P(B)).",

    // Combined events, independence and conditional probability > p
    "When solving Venn diagram problems, always fill in the <strong>intersection <span class=\"chem\">P(A ∩ B)</span> first</strong>, then subtract <span class=\"chem\">P(A ∩ B)</span> from <span class=\"chem\">P(A)</span> and <span class=\"chem\">P(B)</span> to get the crescent regions <span class=\"chem\">P(A ∩ B')</span> and <span class=\"chem\">P(A' ∩ B)</span>.": "벤 다이어그램 문제를 풀 때는 항상 <strong>교집합 <span class=\"chem\">P(A ∩ B)</span>부터 먼저 채운 뒤</strong>, <span class=\"chem\">P(A)</span>와 <span class=\"chem\">P(B)</span>에서 <span class=\"chem\">P(A ∩ B)</span>를 빼서 초승달 영역 <span class=\"chem\">P(A ∩ B')</span>와 <span class=\"chem\">P(A' ∩ B)</span>를 구하세요.",

    // Combined events, independence and conditional probability > worked example > h3
    "Solving for an unknown probability using independence and conditional probability": "독립성과 조건부확률을 이용해 미지의 확률 구하기",

    // Combined events, independence and conditional probability > worked example > p
    "Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are independent with <span class=\"chem\">P(A) = 0.4</span> and <span class=\"chem\">P(A ∪ B) = 0.7</span>.<br> (a) Find <span class=\"chem\">P(B)</span>. <strong>[3 marks]</strong><br> (b) Find <span class=\"chem\">P(A' | B')</span> (the probability that <span class=\"chem\">A</span> does not occur given that <span class=\"chem\">B</span> does not occur). <strong>[2 marks]</strong>": "두 사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>는 독립이고 <span class=\"chem\">P(A) = 0.4</span>, <span class=\"chem\">P(A ∪ B) = 0.7</span>이다.<br> (a) <span class=\"chem\">P(B)</span>를 구하시오 (Find). <strong>[3 marks]</strong><br> (b) <span class=\"chem\">P(A' | B')</span> (<span class=\"chem\">B</span>가 일어나지 않았을 때 <span class=\"chem\">A</span>가 일어나지 않을 확률)를 구하시오 (Find). <strong>[2 marks]</strong>",

    // Combined events, independence and conditional probability > worked example > data-title attribute
    "(a) Substitute P(A ∩ B) = P(A)P(B) into the union formula": "(a) 합사건 공식에 P(A ∩ B) = P(A)P(B) 대입하기",

    // Combined events, independence and conditional probability > worked example > p
    "Independence means P(A ∩ B) = 0.4 P(B).": "독립이므로 P(A ∩ B) = 0.4 P(B)예요.",

    // Combined events, independence and conditional probability > worked example > data-title attribute
    "(b) Use conditional probability (or independence of complements)": "(b) 조건부확률(또는 여사건의 독립성) 사용하기",

    // Combined events, independence and conditional probability > worked example > p
    "Outside the union A ∪ B lies A′ ∩ B′, which has probability 1 − P(A ∪ B) = 0.3. (Or note that if A and B are independent, A′ and B′ are also independent!)": "합집합 A ∪ B의 바깥 영역이 A′ ∩ B′이므로 확률은 1 − P(A ∪ B) = 0.3이에요. (또는 A와 B가 독립이면 A′과 B′도 독립임을 이용할 수 있어요!)",

    // Combined events, independence and conditional probability > try it > p
    "Given that <span class=\"chem\">P(A) = 0.5</span>, <span class=\"chem\">P(B) = 0.6</span>, and <span class=\"chem\">P(A ∪ B) = 0.86</span>, calculate the conditional probability <span class=\"chem\">P(A | B)</span>.": "<span class=\"chem\">P(A) = 0.5</span>, <span class=\"chem\">P(B) = 0.6</span>, <span class=\"chem\">P(A ∪ B) = 0.86</span>일 때, 조건부확률 <span class=\"chem\">P(A | B)</span>를 계산하시오 (Calculate).",

    // Combined events, independence and conditional probability > try it > li
    "First find <span class=\"chem\">P(A ∩ B) = P(A) + P(B) - P(A ∪ B)</span>.": "먼저 <span class=\"chem\">P(A ∩ B) = P(A) + P(B) - P(A ∪ B)</span>를 구하세요.",

    // Combined events, independence and conditional probability > try it > li
    "Now divide <span class=\"chem\">P(A ∩ B) = 0.24</span> by <span class=\"chem\">P(B) = 0.6</span>.": "이제 <span class=\"chem\">P(A ∩ B) = 0.24</span>를 <span class=\"chem\">P(B) = 0.6</span>으로 나누세요.",

    // Discrete random variables and the Binomial distribution > data-toc attribute
    "Discrete & Binomial": "이산확률변수와 이항분포",

    // Discrete random variables and the Binomial distribution > h2
    "Discrete random variables and the Binomial distribution": "이산확률변수와 이항분포",

    // Discrete random variables and the Binomial distribution > p
    "A discrete random variable <span class=\"chem\">X</span> takes distinct values <span class=\"chem\">x_1, x_2, ...</span> with probabilities <span class=\"chem\">P(X = x_i) ≥ 0</span> whose sum must equal <span class=\"chem\">1</span>. Its long-run average is the <strong>expected value</strong> <span class=\"chem\">E(X)</span>:": "이산확률변수 <span class=\"chem\">X</span>는 확률 <span class=\"chem\">P(X = x_i) ≥ 0</span>을 갖는 구별되는 값 <span class=\"chem\">x_1, x_2, ...</span>를 취하며, 모든 확률의 합은 반드시 <span class=\"chem\">1</span>이어야 해요. 장기적인 평균은 <strong>기댓값</strong> <span class=\"chem\">E(X)</span>예요:",

    // Discrete random variables and the Binomial distribution > equation > dd
    "probability mass function (every probability is in <span class=\"chem\">[0, 1]</span> and total sum is <span class=\"chem\">1</span>)": "확률질량함수 (모든 확률은 <span class=\"chem\">[0, 1]</span>에 속하고 총합은 <span class=\"chem\">1</span>)",

    // Discrete random variables and the Binomial distribution > equation > dd
    "expected value (mean <span class=\"chem\">μ</span>); in a <strong>fair game</strong>, <span class=\"chem\">E(net gain) = 0</span>": "기댓값 (평균 <span class=\"chem\">μ</span>); <strong>공정한 게임</strong>에서는 <span class=\"chem\">E(net gain) = 0</span>",

    // Discrete random variables and the Binomial distribution > h3
    "The Binomial distribution <span class=\"chem\">X ~ B(n, p)</span>": "이항분포 <span class=\"chem\">X ~ B(n, p)</span>",

    // Discrete random variables and the Binomial distribution > p
    "When an experiment consists of <span class=\"chem\">n</span> independent trials, each having only two outcomes (<em>success</em> with constant probability <span class=\"chem\">p</span> and <em>failure</em> with probability <span class=\"chem\">q = 1 - p</span>), the total number of successes <span class=\"chem\">X</span> follows a <strong>Binomial distribution</strong> <span class=\"chem\">X ~ B(n, p)</span>:": "실험이 <span class=\"chem\">n</span>회의 독립시행으로 이루어져 있고 각 시행의 결과가 두 가지(일정한 확률 <span class=\"chem\">p</span>의 <em>성공</em>과 확률 <span class=\"chem\">q = 1 - p</span>의 <em>실패</em>)뿐일 때, 총 성공 횟수 <span class=\"chem\">X</span>는 <strong>이항분포</strong> <span class=\"chem\">X ~ B(n, p)</span>를 따라요:",

    // Discrete random variables and the Binomial distribution > equation > maths line
    "<i>P</i>(<i>X</i> = <i>r</i>) = <span class=\"chem\">nCr</span> <i>p</i><sup><i>r</i></sup>(1 − <i>p</i>)<sup><i>n</i>−<i>r</i></sup> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>np</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>np</i>(1 − <i>p</i>)": "<i>P</i>(<i>X</i> = <i>r</i>) = <span class=\"chem\">nCr</span> <i>p</i><sup><i>r</i></sup>(1 − <i>p</i>)<sup><i>n</i>−<i>r</i></sup> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>np</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>np</i>(1 − <i>p</i>)",

    // Discrete random variables and the Binomial distribution > equation > dd
    "number of independent trials <span class=\"chem\">n</span> and probability of success <span class=\"chem\">p</span> on each trial": "독립시행 횟수 <span class=\"chem\">n</span>과 각 시행에서의 성공 확률 <span class=\"chem\">p</span>",

    // Discrete random variables and the Binomial distribution > equation > dd
    "number of successes (<span class=\"chem\">r = 0, 1, 2, ..., n</span>)": "성공 횟수 (<span class=\"chem\">r = 0, 1, 2, ..., n</span>)",

    // Discrete random variables and the Binomial distribution > common mistake > p
    "<strong>GDC <span class=\"mono\">binomcdf</span> Inequality Trap:</strong> On TI and Casio calculators, <span class=\"mono\">binomcdf(n, p, k)</span> always calculates <span class=\"chem\">P(X ≤ k)</span> (up to and including <span class=\"chem\">k</span>). For other inequalities with discrete integers, rewrite them in terms of <span class=\"chem\">≤</span> first:<br> • <span class=\"chem\">P(X &lt; k) = P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X &gt; k) = 1 - P(X ≤ k)</span>": "<strong>GDC <span class=\"mono\">binomcdf</span> 부등호 함정:</strong> TI 및 Casio 계산기에서 <span class=\"mono\">binomcdf(n, p, k)</span>는 항상 <span class=\"chem\">P(X ≤ k)</span> (<span class=\"chem\">k</span> 이하 포함)를 계산해요. 이산 정수의 다른 부등식은 먼저 <span class=\"chem\">≤</span> 꼴로 고쳐 쓰세요:<br> • <span class=\"chem\">P(X &lt; k) = P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X ≥ k) = 1 - P(X ≤ k - 1)</span><br> • <span class=\"chem\">P(X &gt; k) = 1 - P(X ≤ k)</span>",

    // Discrete random variables and the Binomial distribution > worked example > h3
    "Binomial probabilities and finding the minimum number of trials n": "이항분포 확률과 최소 시행 횟수 n 구하기",

    // Discrete random variables and the Binomial distribution > worked example > p
    "An archer hits the bullseye on any shot with constant probability <span class=\"chem\">p = 0.25</span>, independently of other shots.<br> (a) In <span class=\"chem\">8</span> shots, find the probability that the archer hits the bullseye <strong>at least 3 times</strong>. <strong>[3 marks]</strong><br> (b) Find the minimum number of shots <span class=\"chem\">n</span> required so that the probability of hitting the bullseye <strong>at least once</strong> is greater than <span class=\"chem\">0.99</span>. <strong>[4 marks]</strong>": "어떤 양궁 선수가 다른 화살과 독립적으로 매번 일정한 확률 <span class=\"chem\">p = 0.25</span>로 과녁 정중앙을 맞힌다.<br> (a) <span class=\"chem\">8</span>발을 쏠 때, 과녁 정중앙을 <strong>적어도 3번</strong> 맞힐 확률을 구하시오 (Find). <strong>[3 marks]</strong><br> (b) 과녁 정중앙을 <strong>적어도 한 번</strong> 맞힐 확률이 <span class=\"chem\">0.99</span>보다 크도록 하는 최소 발사 횟수 <span class=\"chem\">n</span>을 구하시오 (Find). <strong>[4 marks]</strong>",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "(a) Define X ~ B(8, 0.25) and rewrite P(X ≥ 3) using the complement": "(a) X ~ B(8, 0.25)를 정의하고 여사건으로 P(X ≥ 3) 고쳐 쓰기",

    // Discrete random variables and the Binomial distribution > worked example > p
    "On a GDC, binomcdf computes P(X ≤ k), so P(X ≥ 3) = 1 − P(X ≤ 2).": "GDC에서 binomcdf는 P(X ≤ k)를 계산하므로 P(X ≥ 3) = 1 − P(X ≤ 2)예요.",

    // Discrete random variables and the Binomial distribution > worked example > maths line
    "Let <i>X</i> ~ B(8, 0.25). <i>P</i>(<i>X</i> ≥ 3) = 1 − <i>P</i>(<i>X</i> ≤ 2) <b>[M1]</b>": "<i>X</i> ~ B(8, 0.25)라 하자. <i>P</i>(<i>X</i> ≥ 3) = 1 − <i>P</i>(<i>X</i> ≤ 2) <b>[M1]</b>",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "(b) Set up the complement inequality 1 − P(Y = 0) > 0.99 for Y ~ B(n, 0.25)": "(b) Y ~ B(n, 0.25)에 대해 여사건 부등식 1 − P(Y = 0) > 0.99 세우기",

    // Discrete random variables and the Binomial distribution > worked example > p
    "“At least once” is the complement of “zero hits in all n shots,” which has probability (1 − 0.25)ⁿ = 0.75ⁿ.": "“적어도 한 번”은 “n발 모두 한 번도 못 맞힘”의 여사건이므로 확률은 (1 − 0.25)ⁿ = 0.75ⁿ이에요.",

    // Discrete random variables and the Binomial distribution > worked example > data-title attribute
    "Solve using logarithms and round UP to the next integer": "로그로 풀고 다음 정수로 올림하기",

    // Discrete random variables and the Binomial distribution > worked example > p
    "Dividing by ln(0.75) &lt; 0 reverses the inequality sign. Since n must be an integer, always round up.": "ln(0.75) &lt; 0으로 나누면 부등호 방향이 반대로 바뀌어요. n은 정수여야 하므로 항상 올림하세요.",

    // Discrete random variables and the Binomial distribution > worked example > maths line
    "Therefore, the minimum number of shots is <i>n</i> = <b>17</b>. <b>[A1]</b>": "따라서 최소 발사 횟수는 <i>n</i> = <b>17</b>이에요. <b>[A1]</b>",

    // Discrete random variables and the Binomial distribution > worked example > p
    "(a) 0.321; (b) n = 17 shots": "(a) 0.321; (b) n = 17발",

    // Discrete random variables and the Binomial distribution > try it > p
    "A spinner has probability <span class=\"chem\">p = 0.20</span> of landing on red on each spin. If it is spun <span class=\"chem\">n = 10</span> times independently, calculate the probability of obtaining <strong>at least 3</strong> reds, giving your answer to 3 s.f.": "한 번 돌릴 때마다 빨간색이 나올 확률이 <span class=\"chem\">p = 0.20</span>인 회전판이 있어요. 독립적으로 <span class=\"chem\">n = 10</span>번 돌릴 때 빨간색이 <strong>적어도 3번</strong> 나올 확률을 계산하고 (Calculate) 유효숫자 3자리로 답하시오.",

    // Discrete random variables and the Binomial distribution > try it > li
    "Rewrite <span class=\"chem\">P(X ≥ 3) = 1 - P(X ≤ 2)</span> where <span class=\"chem\">X ~ B(10, 0.20)</span>.": "<span class=\"chem\">X ~ B(10, 0.20)</span>에 대해 <span class=\"chem\">P(X ≥ 3) = 1 - P(X ≤ 2)</span>로 고쳐 쓰세요.",

    // Discrete random variables and the Binomial distribution > try it > li
    "Using <span class=\"mono\">binomcdf(10, 0.20, 2) = 0.6778</span>, subtract from <span class=\"chem\">1</span>.": "<span class=\"mono\">binomcdf(10, 0.20, 2) = 0.6778</span>을 이용해 <span class=\"chem\">1</span>에서 빼세요.",

    // The Normal distribution and standardization (z-scores) > data-toc attribute
    "Normal & z-scores": "정규분포와 표준화(z-점수)",

    // The Normal distribution and standardization (z-scores) > h2
    "The Normal distribution and standardization (<span class=\"chem\">z</span>-scores)": "정규분포와 표준화 (<span class=\"chem\">z</span>-점수)",

    // The Normal distribution and standardization (z-scores) > p
    "A continuous random variable <span class=\"chem\">X ~ N(μ, σ^2)</span> has a symmetric, bell-shaped probability curve centered at the mean <span class=\"chem\">μ</span> (= median = mode), with total area under the curve equal to <span class=\"chem\">1</span>. Notice that for any continuous random variable, the probability of a single exact point is zero (<span class=\"chem\">P(X = a) = 0</span>), so <span class=\"chem\">P(X &lt; a) = P(X ≤ a)</span>.": "연속확률변수 <span class=\"chem\">X ~ N(μ, σ^2)</span>는 평균 <span class=\"chem\">μ</span> (= 중앙값 = 최빈값)를 중심으로 대칭인 종 모양의 확률 곡선을 가지며, 곡선 아래 전체 넓이는 <span class=\"chem\">1</span>이에요. 모든 연속확률변수에서는 한 점에서의 확률이 0(<span class=\"chem\">P(X = a) = 0</span>)이므로 <span class=\"chem\">P(X &lt; a) = P(X ≤ a)</span>예요.",

    // The Normal distribution and standardization (z-scores) > p
    "When <span class=\"chem\">μ</span> or <span class=\"chem\">σ</span> is unknown, transform <span class=\"chem\">X</span> into the <strong>standard normal variable</strong> <span class=\"chem\">Z ~ N(0, 1)</span>:": "<span class=\"chem\">μ</span> 또는 <span class=\"chem\">σ</span>를 모를 때는 <span class=\"chem\">X</span>를 <strong>표준정규확률변수</strong> <span class=\"chem\">Z ~ N(0, 1)</span>로 변환하세요:",

    // The Normal distribution and standardization (z-scores) > equation > dd
    "number of standard deviations <span class=\"chem\">x</span> lies above (<span class=\"chem\">z &gt; 0</span>) or below (<span class=\"chem\">z &lt; 0</span>) the mean <span class=\"chem\">μ</span>": "<span class=\"chem\">x</span>가 평균 <span class=\"chem\">μ</span>보다 위(<span class=\"chem\">z &gt; 0</span>) 또는 아래(<span class=\"chem\">z &lt; 0</span>)에 있는 표준편차의 배수",

    // The Normal distribution and standardization (z-scores) > equation > dt
    "invNorm(p)": "invNorm(p)",

    // The Normal distribution and standardization (z-scores) > equation > dd
    "returns the <span class=\"chem\">z</span>-score having <strong>left-tail area</strong> <span class=\"chem\">P(Z &lt; z) = p</span>": "<strong>왼쪽 꼬리 넓이</strong>가 <span class=\"chem\">P(Z &lt; z) = p</span>인 <span class=\"chem\">z</span>-점수를 반환해요",

    // The Normal distribution and standardization (z-scores) > widget > data-title attribute
    "Interactive Normal distribution and z-score shaded tail calculator": "대화형 정규분포 및 z-점수 넓이 계산기",

    // The Normal distribution and standardization (z-scores) > widget > figcaption
    "Switch between left-tail <span class=\"chem\">P(X &lt; b)</span>, right-tail <span class=\"chem\">P(X &gt; a)</span>, and interval <span class=\"chem\">P(a &lt; X &lt; b)</span> modes. Adjust <span class=\"chem\">μ</span>, <span class=\"chem\">σ</span>, <span class=\"chem\">a</span>, and <span class=\"chem\">b</span> to see how each boundary maps to its standardized <span class=\"chem\">z</span>-score <span class=\"chem\">z = (x - μ)/σ</span>.": "왼쪽 꼬리 <span class=\"chem\">P(X &lt; b)</span>, 오른쪽 꼬리 <span class=\"chem\">P(X &gt; a)</span>, 구간 <span class=\"chem\">P(a &lt; X &lt; b)</span> 모드를 전환해 보세요. <span class=\"chem\">μ</span>, <span class=\"chem\">σ</span>, <span class=\"chem\">a</span>, <span class=\"chem\">b</span>를 조절해 각 경계가 표준화된 <span class=\"chem\">z</span>-점수 <span class=\"chem\">z = (x - μ)/σ</span>로 어떻게 대응되는지 확인하세요.",

    // The Normal distribution and standardization (z-scores) > exam tip (shown in English + translation) > p
    "<strong>Classic Paper 2 Chain (Normal → Binomial / Conditional):</strong> Part (a) asks for a Normal probability <span class=\"chem\">p = P(X &gt; k)</span> for <em>one</em> randomly chosen item. Part (b) then picks a sample of <span class=\"chem\">n</span> independent items and asks for the probability that <em>at least <span class=\"chem\">r</span></em> of them satisfy <span class=\"chem\">X &gt; k</span>. Recognize this immediately as a transition from <span class=\"chem\">X ~ N(μ, σ^2)</span> to a new Binomial variable <span class=\"chem\">Y ~ B(n, p)</span>—and keep at least 5 significant figures of <span class=\"chem\">p</span> in your GDC for Part (b)!": "<strong>전형적인 Paper 2 연계 문제 (정규분포 → 이항분포 / 조건부확률):</strong> (a)에서 무작위로 뽑은 <em>1개</em>에 대한 정규분포 확률 <span class=\"chem\">p = P(X &gt; k)</span>를 묻고, (b)에서 독립적인 <span class=\"chem\">n</span>개의 표본 중 <em>적어도 <span class=\"chem\">r</span>개</em>가 <span class=\"chem\">X &gt; k</span>를 만족할 확률을 물어요. 즉시 <span class=\"chem\">X ~ N(μ, σ^2)</span>에서 새로운 이항분포 변수 <span class=\"chem\">Y ~ B(n, p)</span>로 넘어가는 문제임을 알아차리고, (b)를 위해 GDC에 <span class=\"chem\">p</span>를 최소 유효숫자 5자리까지 저장해 두세요!",

    // The Normal distribution and standardization (z-scores) > worked example > h3
    "Finding unknown μ and σ using z-scores and simultaneous equations": "z-점수와 연립방정식으로 미지의 μ와 σ 구하기",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "The lengths of steel rods follow a Normal distribution <span class=\"chem\">X ~ N(μ, σ^2)</span>. It is known that <span class=\"chem\">10%</span> of the rods are shorter than <span class=\"chem\">45.0</span> cm and <span class=\"chem\">5%</span> of the rods are longer than <span class=\"chem\">58.0</span> cm. Find <span class=\"chem\">μ</span> and <span class=\"chem\">σ</span> to 3 significant figures. <strong>[5 marks]</strong>": "강철 막대의 길이는 정규분포 <span class=\"chem\">X ~ N(μ, σ^2)</span>를 따른다. 막대의 <span class=\"chem\">10%</span>는 <span class=\"chem\">45.0</span> cm보다 짧고, <span class=\"chem\">5%</span>는 <span class=\"chem\">58.0</span> cm보다 길다. <span class=\"chem\">μ</span>와 <span class=\"chem\">σ</span>를 구하고 (Find) 유효숫자 3자리로 답하시오. <strong>[5 marks]</strong>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Convert both probabilities into left-tail areas and find z₁, z₂": "두 확률을 왼쪽 꼬리 넓이로 바꾸고 z₁, z₂ 구하기",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Standard invNorm uses the area to the LEFT of the boundary. Since P(X &gt; 58) = 0.05, the area to the left of 58 is 0.95.": "표준 invNorm은 경계 왼쪽의 넓이를 사용해요. P(X &gt; 58) = 0.05이므로 58 왼쪽의 넓이는 0.95예요.",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "<i>P</i>(<i>X</i> &lt; 45) = 0.10 ⇒ <i>z</i><sub>1</sub> = invNorm(0.10) = −1.28155 <b>[A1]</b>": "<i>P</i>(<i>X</i> &lt; 45) = 0.10 ⇒ <i>z</i><sub>1</sub> = invNorm(0.10) = −1.28155 <b>[A1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "<i>P</i>(<i>X</i> &lt; 58) = 0.95 ⇒ <i>z</i><sub>2</sub> = invNorm(0.95) = +1.64485 <b>[A1]</b>": "<i>P</i>(<i>X</i> &lt; 58) = 0.95 ⇒ <i>z</i><sub>2</sub> = invNorm(0.95) = +1.64485 <b>[A1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Form two linear equations using x − μ = zσ": "x − μ = zσ를 이용해 두 일차방정식 세우기",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Substituting (x₁, z₁) and (x₂, z₂) into (x − μ)/σ = z gives a 2 × 2 linear system.": "(x₁, z₁)과 (x₂, z₂)를 (x − μ)/σ = z에 대입하면 2 × 2 연립일차방정식이 돼요.",

    // The Normal distribution and standardization (z-scores) > worked example > maths line
    "(1) 45 − <i>μ</i> = −1.28155<i>σ</i> and (2) 58 − <i>μ</i> = 1.64485<i>σ</i> <b>[M1]</b>": "(1) 45 − <i>μ</i> = −1.28155<i>σ</i> 그리고 (2) 58 − <i>μ</i> = 1.64485<i>σ</i> <b>[M1]</b>",

    // The Normal distribution and standardization (z-scores) > worked example > data-title attribute
    "Subtract equation (1) from equation (2) to solve for σ and μ": "식 (2)에서 식 (1)을 빼서 σ와 μ 구하기",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "Subtracting eliminates μ immediately.": "빼면 μ가 바로 소거돼요.",

    // The Normal distribution and standardization (z-scores) > worked example > p
    "μ = 50.7 cm, σ = 4.44 cm": "μ = 50.7 cm, σ = 4.44 cm",

    // The Normal distribution and standardization (z-scores) > try it > p
    "A normal random variable <span class=\"chem\">X ~ N(μ, σ^2)</span> has mean <span class=\"chem\">μ = 50</span>. Given that <span class=\"chem\">P(X &gt; 65) = P(Z &gt; 1.5)</span>, find the standard deviation <span class=\"chem\">σ</span>.": "정규확률변수 <span class=\"chem\">X ~ N(μ, σ^2)</span>의 평균이 <span class=\"chem\">μ = 50</span>이에요. <span class=\"chem\">P(X &gt; 65) = P(Z &gt; 1.5)</span>일 때 표준편차 <span class=\"chem\">σ</span>를 구하시오 (Find).",

    // The Normal distribution and standardization (z-scores) > try it > li
    "Standardize <span class=\"chem\">x = 65</span> using <span class=\"chem\">z = (x - μ) / σ</span>.": "<span class=\"chem\">z = (x - μ) / σ</span>를 이용해 <span class=\"chem\">x = 65</span>를 표준화하세요.",

    // The Normal distribution and standardization (z-scores) > try it > li
    "Solve <span class=\"chem\">(65 - 50) / σ = 1.5</span> for <span class=\"chem\">σ</span>.": "<span class=\"chem\">(65 - 50) / σ = 1.5</span>에서 <span class=\"chem\">σ</span>를 구하세요.",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > data-toc attribute
    "Bayes & continuous RVs": "베이즈 정리와 연속확률변수",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > h2
    "Bayes' theorem, discrete variance and continuous random variables": "베이즈 정리, 이산확률변수의 분산과 연속확률변수",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > p
    "When the sample space is partitioned into up to three mutually exclusive and exhaustive events <span class=\"chem\">B_1, B_2, B_3</span> (so <span class=\"chem\">P(B_1) + P(B_2) + P(B_3) = 1</span>) and you are told that an event <span class=\"chem\">A</span> is true, <strong>Bayes' theorem</strong> updates the <strong>prior</strong> probability <span class=\"chem\">P(B_i)</span> (before the information about <span class=\"chem\">A</span> is used) to the <strong>posterior</strong> probability <span class=\"chem\">P(B_i | A)</span> (after taking <span class=\"chem\">A</span> into account):": "표본공간이 서로 배반이고 전체를 분할하는 최대 3개의 사건 <span class=\"chem\">B_1, B_2, B_3</span> (<span class=\"chem\">P(B_1) + P(B_2) + P(B_3) = 1</span>)로 나뉘고 사건 <span class=\"chem\">A</span>가 참이라는 정보를 얻었을 때, <strong>베이즈 정리</strong>는 <strong>사전</strong>확률 <span class=\"chem\">P(B_i)</span>(<span class=\"chem\">A</span>에 대한 정보를 쓰기 전)를 <strong>사후</strong>확률 <span class=\"chem\">P(B_i | A)</span>(<span class=\"chem\">A</span>를 고려한 후)로 갱신해요:",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Numerator": "분자",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "joint probability <span class=\"chem\">P(B_i ∩ A)</span> along the single tree branch through <span class=\"chem\">B_i</span> to <span class=\"chem\">A</span>": "<span class=\"chem\">B_i</span>를 거쳐 <span class=\"chem\">A</span>로 가는 단일 수형도 경로의 결합확률 <span class=\"chem\">P(B_i ∩ A)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Denominator": "분모",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "total probability <span class=\"chem\">P(A)</span> summed over all branches that end at <span class=\"chem\">A</span>": "<span class=\"chem\">A</span>로 끝나는 모든 경로의 확률을 합한 전체 확률 <span class=\"chem\">P(A)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > widget > Additional HL > data-title attribute
    "Interactive Bayes' theorem diagnostic tree and posterior updater": "대화형 베이즈 정리 진단 수형도 및 사후확률 갱신기",

    // Bayes' theorem, discrete variance and continuous random vari > widget > Additional HL > figcaption
    "Explore the classic medical testing paradox: when a condition is rare (<span class=\"chem\">P(B) = 0.05</span>), even a test with <span class=\"chem\">95%</span> sensitivity and a <span class=\"chem\">10%</span> false-positive rate yields a posterior probability <span class=\"chem\">P(B | A) ≈ 33.3%</span> because false positives from the large healthy group (<span class=\"chem\">95%</span>) outnumber true positives!": "유명한 의학 검사 역설을 살펴보세요: 질환이 드물 때(<span class=\"chem\">P(B) = 0.05</span>), 민감도가 <span class=\"chem\">95%</span>이고 위양성률이 <span class=\"chem\">10%</span>인 검사라도 사후확률은 <span class=\"chem\">P(B | A) ≈ 33.3%</span>에 불과해요. 건강한 집단(<span class=\"chem\">95%</span>)이 훨씬 크기 때문에 위양성 건수가 진양성 건수보다 많기 때문이에요!",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > h3
    "Variance, linear transformations and continuous probability density functions": "분산, 선형 변환과 연속 확률밀도함수(PDF)",

    // Bayes' theorem, discrete variance and continuous random vari > Additional HL > p
    "For a <strong>discrete</strong> random variable <span class=\"chem\">X</span>, or a <strong>continuous</strong> random variable <span class=\"chem\">X</span> with probability density function (PDF) <span class=\"chem\">f(x)</span>, expectation and variance follow parallel sum and integral formulas:": "<strong>이산</strong>확률변수 <span class=\"chem\">X</span>와 확률밀도함수(PDF) <span class=\"chem\">f(x)</span>를 갖는 <strong>연속</strong>확률변수 <span class=\"chem\">X</span>에 대해, 기댓값과 분산은 합과 적분으로 서로 대응되는 공식을 따라요:",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > maths line
    "<i>f</i>(<i>x</i>) ≥ 0, &nbsp; ∫<sub>−∞</sub><sup>∞</sup> <i>f</i>(<i>x</i>) d<i>x</i> = 1 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>μ</i> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i> <i>f</i>(<i>x</i>) d<i>x</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − <i>μ</i><sup>2</sup> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i><sup>2</sup> <i>f</i>(<i>x</i>) d<i>x</i> − <i>μ</i><sup>2</sup>": "<i>f</i>(<i>x</i>) ≥ 0, &nbsp; ∫<sub>−∞</sub><sup>∞</sup> <i>f</i>(<i>x</i>) d<i>x</i> = 1 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>E</i>(<i>X</i>) = <i>μ</i> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i> <i>f</i>(<i>x</i>) d<i>x</i> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − <i>μ</i><sup>2</sup> = ∫<sub>−∞</sub><sup>∞</sup> <i>x</i><sup>2</sup> <i>f</i>(<i>x</i>) d<i>x</i> − <i>μ</i><sup>2</sup>",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Mode": "최빈값 (Mode)",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "the value of <span class=\"chem\">x</span> in the domain where <span class=\"chem\">f(x)</span> attains its <strong>global maximum</strong> (check <span class=\"chem\">f'(x) = 0</span> AND domain endpoints!)": "정의역 안에서 <span class=\"chem\">f(x)</span>가 <strong>전역 최댓값</strong>을 갖는 <span class=\"chem\">x</span> 값 (<span class=\"chem\">f'(x) = 0</span>과 정의역의 양 끝점을 모두 확인하세요!)",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "Median m": "중앙값 m",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "the value <span class=\"chem\">m</span> satisfying <span class=\"chem\">∫_{-∞}^m f(x) dx = 0.5</span> (similarly <span class=\"chem\">0.25</span> for <span class=\"chem\">Q_1</span> and <span class=\"chem\">0.75</span> for <span class=\"chem\">Q_3</span>)": "<span class=\"chem\">∫_{-∞}^m f(x) dx = 0.5</span>를 만족하는 <span class=\"chem\">m</span> (<span class=\"chem\">Q_1</span>은 <span class=\"chem\">0.25</span>, <span class=\"chem\">Q_3</span>은 <span class=\"chem\">0.75</span>)",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dt
    "aX + b": "aX + b",

    // Bayes' theorem, discrete variance and continuous random vari > equation > Additional HL > dd
    "<span class=\"chem\">E(aX + b) = a E(X) + b</span> and <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>": "<span class=\"chem\">E(aX + b) = a E(X) + b</span> 그리고 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>",

    // Bayes' theorem, discrete variance and continuous random vari > common mistake > Additional HL > p
    "<strong>Endpoint Mode Trap:</strong> Students often set <span class=\"chem\">f'(x) = 0</span> without checking whether the stationary point is actually in the domain or whether an endpoint is higher. If <span class=\"chem\">f(x) = (3/8)x^2</span> on <span class=\"chem\">0 ≤ x ≤ 2</span>, then <span class=\"chem\">f(x)</span> is strictly increasing on <span class=\"chem\">[0, 2]</span>, so its <strong>mode is at the right endpoint <span class=\"chem\">x = 2</span></strong> (not at <span class=\"chem\">x = 0</span> where <span class=\"chem\">f'(0) = 0</span>)!": "<strong>끝점 최빈값 함정:</strong> 많은 학생이 정류점이 실제로 최댓값인지, 끝점이 더 높은지 확인하지 않고 <span class=\"chem\">f'(x) = 0</span>만 풀어요. 만약 <span class=\"chem\">0 ≤ x ≤ 2</span>에서 <span class=\"chem\">f(x) = (3/8)x^2</span>이라면, <span class=\"chem\">f(x)</span>는 <span class=\"chem\">[0, 2]</span>에서 순증가하므로 <strong>최빈값은 오른쪽 끝점 <span class=\"chem\">x = 2</span></strong>예요 (<span class=\"chem\">f'(0) = 0</span>인 <span class=\"chem\">x = 0</span>이 아니에요)!",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > h3
    "Analyzing a continuous random variable: constant k, mode, mean and variance": "연속확률변수 분석: 상수 k, 최빈값, 평균과 분산",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = kx(2 - x)</span> for <span class=\"chem\">0 ≤ x ≤ 2</span>, and <span class=\"chem\">f(x) = 0</span> otherwise.<br> (a) Show that <span class=\"chem\">k = 3/4</span> and state the mode of <span class=\"chem\">X</span>. <strong>[3 marks]</strong><br> (b) Find <span class=\"chem\">E(X)</span> and <span class=\"chem\">Var(X)</span>. <strong>[4 marks]</strong><br> (c) Hence find <span class=\"chem\">Var(5X - 3)</span>. <strong>[2 marks]</strong>": "연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수가 <span class=\"chem\">0 ≤ x ≤ 2</span>에서 <span class=\"chem\">f(x) = kx(2 - x)</span>이고 그 외에서는 <span class=\"chem\">f(x) = 0</span>이다.<br> (a) <span class=\"chem\">k = 3/4</span>임을 보이고 (Show that) <span class=\"chem\">X</span>의 최빈값을 답하시오 (state). <strong>[3 marks]</strong><br> (b) <span class=\"chem\">E(X)</span>와 <span class=\"chem\">Var(X)</span>를 구하시오 (Find). <strong>[4 marks]</strong><br> (c) 이를 이용하여 (Hence) <span class=\"chem\">Var(5X - 3)</span>을 구하시오. <strong>[2 marks]</strong>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(a) Integrate f(x) over [0, 2] and set equal to 1": "(a) [0, 2]에서 f(x)를 적분해 1과 같다고 놓기",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "Total area under any valid PDF must equal 1.": "올바른 PDF 아래 전체 넓이는 항상 1이어야 해요.",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Since <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i>(2 − <i>x</i>) is a downward parabola symmetric about <i>x</i> = 1, the <b>mode is <i>x</i> = 1</b>. <b>[A1]</b>": "<i>f</i>(<i>x</i>) = <span class=\"frac\"><span>3</span><span>4</span></span><i>x</i>(2 − <i>x</i>)는 <i>x</i> = 1에 대해 대칭인 위로 볼록한 포물선이므로 <b>최빈값은 <i>x</i> = 1</b>이에요. <b>[A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(b) Find E(X) by symmetry (or integration) and compute E(X²)": "(b) 대칭성(또는 적분)으로 E(X)를 구하고 E(X²) 계산하기",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "By symmetry about x = 1 on [0, 2], E(X) = 1. Then Var(X) = ∫ x² f(x) dx − [E(X)]².": "[0, 2]에서 x = 1에 대한 대칭성으로 E(X) = 1이에요. 그다음 Var(X) = ∫ x² f(x) dx − [E(X)]²을 구해요.",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup> = <span class=\"frac\"><span>6</span><span>5</span></span> − 1<sup>2</sup> = <b><span class=\"frac\"><span>1</span><span>5</span></span></b> (or 0.2) <b>[A1]</b>": "Var(<i>X</i>) = <i>E</i>(<i>X</i><sup>2</sup>) − [<i>E</i>(<i>X</i>)]<sup>2</sup> = <span class=\"frac\"><span>6</span><span>5</span></span> − 1<sup>2</sup> = <b><span class=\"frac\"><span>1</span><span>5</span></span></b> (또는 0.2) <b>[A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > data-title attribute
    "(c) Apply the linear transformation rule Var(aX + b) = a² Var(X)": "(c) 선형 변환 공식 Var(aX + b) = a² Var(X) 적용하기",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "Subtracting 3 does not change variance; multiplying by 5 multiplies variance by 5² = 25.": "3을 빼는 것은 분산을 바꾸지 않고, 5를 곱하면 분산은 5² = 25배가 돼요.",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > maths line
    "Var(5<i>X</i> − 3) = 5<sup>2</sup> Var(<i>X</i>) = 25 × <span class=\"frac\"><span>1</span><span>5</span></span> = <b>5</b> <b>[M1 A1]</b>": "Var(5<i>X</i> − 3) = 5<sup>2</sup> Var(<i>X</i>) = 25 × <span class=\"frac\"><span>1</span><span>5</span></span> = <b>5</b> <b>[M1 A1]</b>",

    // Bayes' theorem, discrete variance and continuous random vari > worked example > Additional HL > p
    "(a) k = 3/4, mode = 1; (b) E(X) = 1, Var(X) = 1/5; (c) Var(5X − 3) = 5": "(a) k = 3/4, 최빈값 = 1; (b) E(X) = 1, Var(X) = 1/5; (c) Var(5X − 3) = 5",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > p
    "In a factory, Machine <span class=\"chem\">B_1</span> produces <span class=\"chem\">60%</span> of bolts (with a <span class=\"chem\">2%</span> defective rate) and Machine <span class=\"chem\">B_2</span> produces <span class=\"chem\">40%</span> of bolts (with a <span class=\"chem\">5%</span> defective rate). Given that a randomly chosen bolt is defective (<span class=\"chem\">D</span>), use Bayes' theorem to find the probability <span class=\"chem\">P(B_1 | D)</span> that it was made by Machine <span class=\"chem\">B_1</span>.": "어떤 공장에서 기계 <span class=\"chem\">B_1</span>은 전체 볼트의 <span class=\"chem\">60%</span>를 생산하며(불량률 <span class=\"chem\">2%</span>), 기계 <span class=\"chem\">B_2</span>는 <span class=\"chem\">40%</span>를 생산해요(불량률 <span class=\"chem\">5%</span>). 무작위로 뽑은 볼트가 불량(<span class=\"chem\">D</span>)일 때, 베이즈 정리를 이용해 이 볼트가 기계 <span class=\"chem\">B_1</span>에서 만들어졌을 확률 <span class=\"chem\">P(B_1 | D)</span>를 구하시오 (Find).",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > li
    "Compute the two defective path probabilities: <span class=\"chem\">P(B_1 ∩ D) = 0.60 × 0.02 = 0.012</span> and <span class=\"chem\">P(B_2 ∩ D) = 0.40 × 0.05 = 0.020</span>.": "두 불량 경로의 확률을 계산하세요: <span class=\"chem\">P(B_1 ∩ D) = 0.60 × 0.02 = 0.012</span>, <span class=\"chem\">P(B_2 ∩ D) = 0.40 × 0.05 = 0.020</span>.",

    // Bayes' theorem, discrete variance and continuous random vari > try it > Additional HL > li
    "Divide <span class=\"chem\">0.012</span> by the total defective probability <span class=\"chem\">0.012 + 0.020 = 0.032</span>.": "<span class=\"chem\">0.012</span>를 전체 불량 확률 <span class=\"chem\">0.012 + 0.020 = 0.032</span>로 나누세요.",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "실전 연습",

    // widget string (assets/js/widgets-t4-2.js)
    "Probability region": "확률 영역",

    // widget string (assets/js/widgets-t4-2.js)
    "Between: P(a < X < b)": "구간: P(a < X < b)",

    // widget string (assets/js/widgets-t4-2.js)
    "Left tail: P(X < b)": "왼쪽 꼬리: P(X < b)",

    // widget string (assets/js/widgets-t4-2.js)
    "Right tail: P(X > a)": "오른쪽 꼬리: P(X > a)",

    // widget string (assets/js/widgets-t4-2.js)
    "Mean μ": "평균 μ",

    // widget string (assets/js/widgets-t4-2.js)
    "Standard deviation σ": "표준편차 σ",

    // widget string (assets/js/widgets-t4-2.js)
    "Bound a": "하한 a",

    // widget string (assets/js/widgets-t4-2.js)
    "Bound b": "상한 b",

    // widget string (assets/js/widgets-t4-2.js)
    "Standardized z-score(s)": "표준화 z-점수",

    // widget string (assets/js/widgets-t4-2.js)
    "Shaded probability area": "색칠된 확률 넓이",

    // widget string (assets/js/widgets-t4-2.js)
    "GDC syntax": "GDC 입력식",

    // widget string (assets/js/widgets-t4-2.js)
    "Normal distribution curve with shaded probability area and z-score markers": "색칠된 확률 넓이와 z-점수 표시가 있는 정규분포 곡선",

    // widget string (assets/js/widgets-t4-2.js)
    "x (with standardized z = (x − μ)/σ)": "x (표준화 z = (x − μ)/σ)",

    // widget string (assets/js/widgets-t4-2.js)
    "Area": "넓이",

    // widget string (assets/js/widgets-t4-2.js)
    "Prior P(B) (base rate)": "사전확률 P(B) (기저율)",

    // widget string (assets/js/widgets-t4-2.js)
    "Sensitivity P(A | B)": "민감도 P(A | B)",

    // widget string (assets/js/widgets-t4-2.js)
    "False positive P(A | B′)": "위양성률 P(A | B′)",

    // widget string (assets/js/widgets-t4-2.js)
    "Two paths to outcome A": "결과 A로 가는 두 경로",

    // widget string (assets/js/widgets-t4-2.js)
    "Total probability P(A)": "전체 확률 P(A)",

    // widget string (assets/js/widgets-t4-2.js)
    "Bayes posterior P(B | A)": "베이즈 사후확률 P(B | A)",

    // widget string (assets/js/widgets-t4-2.js)
    "Two-stage probability tree diagram and Bayes posterior proportion bar": "2단계 확률 수형도와 베이즈 사후확률 비율 막대",

    // widget string (assets/js/widgets-t4-2.js)
    "Among all A outcomes: P(B | A) =": "모든 A 결과 중에서: P(B | A) =",

    // widget string (assets/js/widgets-t4-2.js)
    "green": "초록색",

    // widget string (assets/js/widgets-t4-2.js)
    "red": "빨간색",

  }
});
