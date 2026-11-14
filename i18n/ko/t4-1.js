/* t4-1 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't4-1', {
  strings: {

    // page title (browser tab)
    "4.1 Descriptive statistics, correlation and regression | Analysis Lab": "4.1 기술통계, 상관관계와 회귀분석 | Analysis Lab",

    // Descriptive statistics, correlation and regression > page header > p
    "Topic 4.1 · SL 4.1–4.4, 4.10": "Topic 4.1 · SL 4.1–4.4, 4.10",

    // Descriptive statistics, correlation and regression > page header > h1
    "Descriptive statistics, correlation and regression": "기술통계, 상관관계와 회귀분석",

    // Descriptive statistics, correlation and regression > page header > span
    "How do we summarize center, spread, and linear relationships in noisy data—and why does the direction of prediction change the regression line we must use?": "잡음이 섞인 자료에서 중심, 산포도, 선형 관계를 어떻게 요약할 수 있을까요—그리고 예측 방향에 따라 사용해야 하는 회귀직선이 왜 달라질까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > span
    "Distinguish population vs sample and discrete vs continuous data, and compare simple random, systematic, stratified, quota, and convenience sampling.": "모집단과 표본, 이산자료와 연속자료를 구분하고 단순무작위, 계통, 층화, 할당, 편의 표집을 비교할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Interpret histograms, cumulative frequency graphs, and box-and-whisker plots, compare two distributions using box plots, and test formally for outliers using <span class=\"chem\">[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]</span>.": "히스토그램, 누적도수분포다각형, 상자수염그림을 해석하고, 상자수염그림으로 두 분포를 비교하며, <span class=\"chem\">[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]</span>로 이상치를 판정할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Estimate the mean <span class=\"chem\">x̄</span> and population standard deviation <span class=\"chem\">σ</span> from grouped frequency tables using mid-interval values.": "도수분포표에서 계급값을 이용해 평균 <span class=\"chem\">x̄</span>와 모표준편차 <span class=\"chem\">σ</span>를 추정할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the new mean, variance, standard deviation, and <span class=\"chem\">IQR</span> after linear coding <span class=\"chem\">Y = aX + b</span> (<span class=\"chem\">ȳ = a x̄ + b</span>, <span class=\"chem\">σ_Y = |a|σ_X</span>).": "선형 변환 <span class=\"chem\">Y = aX + b</span> 후의 새로운 평균, 분산, 표준편차, <span class=\"chem\">IQR</span>을 구할 수 있어요 (<span class=\"chem\">ȳ = a x̄ + b</span>, <span class=\"chem\">σ_Y = |a|σ_X</span>).",

    // What you need to be able to do > checklist > span
    "Find Pearson's correlation coefficient <span class=\"chem\">r</span> and the regression line from raw data on a GDC, interpret <span class=\"chem\">r</span> and the parameters <span class=\"chem\">a</span> and <span class=\"chem\">b</span> in context, and judge whether a prediction is reliable using correlation strength and interpolation vs extrapolation.": "원자료로부터 GDC로 피어슨 상관계수 <span class=\"chem\">r</span>과 회귀직선을 구하고, <span class=\"chem\">r</span>과 매개변수 <span class=\"chem\">a</span>, <span class=\"chem\">b</span>를 맥락에 맞게 해석하며, 상관관계의 강도와 내삽 vs 외삽을 이용해 예측의 신뢰성을 판단할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Choose between the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> (<span class=\"chem\">y = ax + b</span>) and <span class=\"chem\">x</span> on <span class=\"chem\">y</span> (<span class=\"chem\">x = cy + d</span>), and use their intersection at the mean point <span class=\"chem\">(x̄, ȳ)</span>.": "<span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span>의 회귀직선(<span class=\"chem\">y = ax + b</span>)과 <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>의 회귀직선(<span class=\"chem\">x = cy + d</span>) 중 알맞은 것을 고르고, 두 직선의 교점인 평균점 <span class=\"chem\">(x̄, ȳ)</span>을 활용할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 공식을 쓸지 바로 찾기",

    // Question decoder: spotting which technique to use > p
    "Topic 4.1 questions test whether you know which summary measure, outlier rule, or regression line matches the wording of the prompt. Use this table to translate exam phrases directly into your working.": "Topic 4.1 문제는 문제 문구에 맞는 대푯값·산포도, 이상치 기준, 또는 회귀직선을 고를 줄 아는지 평가해요. 아래 표를 보고 시험 표현을 풀이 식으로 바로 연결해 보세요.",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Descriptive statistics, correlation and regression": "문제 디코더 — 기술통계, 상관관계와 회귀분석",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "“Estimate <span class=\"chem\">y</span> when <span class=\"chem\">x = x_0</span>”": "“<span class=\"chem\">x = x_0</span>일 때 <span class=\"chem\">y</span>를 추정하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Use the regression line of <strong><span class=\"chem\">y</span> on <span class=\"chem\">x</span></strong>: <span class=\"chem\">y = ax + b</span> (minimizes vertical squared residuals).": "<strong><span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span></strong>의 회귀직선 <span class=\"chem\">y = ax + b</span>를 쓰세요 (수직 잔차 제곱합을 최소화).",

    // Question decoder: spotting which technique to use > table > td
    "Substitute <span class=\"chem\">x = x_0</span> into <span class=\"chem\">y = ax + b</span>. On GDC, run <span class=\"mono\">LinReg(ax+b)</span> with <span class=\"mono\">Xlist = L1, Ylist = L2</span>.": "<span class=\"chem\">y = ax + b</span>에 <span class=\"chem\">x = x_0</span>을 대입하세요. GDC에서는 <span class=\"mono\">Xlist = L1, Ylist = L2</span>로 <span class=\"mono\">LinReg(ax+b)</span>를 실행하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Estimate <span class=\"chem\">x</span> when <span class=\"chem\">y = y_0</span>” (when neither variable is controlled)": "“<span class=\"chem\">y = y_0</span>일 때 <span class=\"chem\">x</span>를 추정하시오” (어느 변수도 통제되지 않은 경우)",

    // Question decoder: spotting which technique to use > table > td
    "Use the regression line of <strong><span class=\"chem\">x</span> on <span class=\"chem\">y</span></strong>: <span class=\"chem\">x = cy + d</span> (minimizes horizontal squared residuals).": "<strong><span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span></strong>의 회귀직선 <span class=\"chem\">x = cy + d</span>를 쓰세요 (수평 잔차 제곱합을 최소화).",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Never</strong> rearrange <span class=\"chem\">y = ax + b</span> to solve for <span class=\"chem\">x</span>! On GDC, swap the lists in <span class=\"mono\">LinReg(ax+b)</span>: set <span class=\"mono\">Xlist = L2 (y), Ylist = L1 (x)</span>.": "<strong>절대로</strong> <span class=\"chem\">y = ax + b</span>를 <span class=\"chem\">x</span>에 대해 이항해 풀지 마세요! GDC에서는 <span class=\"mono\">LinReg(ax+b)</span>에서 리스트를 바꾸어 <span class=\"mono\">Xlist = L2 (y), Ylist = L1 (x)</span>로 설정하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Given both regression lines <span class=\"chem\">y = ax + b</span> and <span class=\"chem\">x = cy + d</span>, find <span class=\"chem\">x̄</span> and <span class=\"chem\">ȳ</span>”": "“두 회귀직선 <span class=\"chem\">y = ax + b</span>와 <span class=\"chem\">x = cy + d</span>가 주어졌을 때 <span class=\"chem\">x̄</span>와 <span class=\"chem\">ȳ</span>를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Both regression lines <strong>always</strong> intersect at the mean point <span class=\"chem\">(x̄, ȳ)</span>.": "두 회귀직선은 <strong>항상</strong> 평균점 <span class=\"chem\">(x̄, ȳ)</span>에서 만나요.",

    // Question decoder: spotting which technique to use > table > td
    "Solve the two linear equations simultaneously for <span class=\"chem\">x</span> and <span class=\"chem\">y</span> (by substitution on Paper 1, or graph/system solver on Paper 2).": "두 일차방정식을 연립해 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 구하세요 (Paper 1에서는 대입법, Paper 2에서는 그래프/연립방정식 풀이 기능 사용).",

    // Question decoder: spotting which technique to use > table > th
    "“Determine whether <span class=\"chem\">v</span> is an outlier”": "“<span class=\"chem\">v</span>가 이상치인지 판별하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Compute <span class=\"chem\">IQR = Q_3 - Q_1</span>, lower fence <span class=\"chem\">Q_1 - 1.5 IQR</span>, and upper fence <span class=\"chem\">Q_3 + 1.5 IQR</span>.": "<span class=\"chem\">IQR = Q_3 - Q_1</span>, 아래쪽 울타리 <span class=\"chem\">Q_1 - 1.5 IQR</span>, 위쪽 울타리 <span class=\"chem\">Q_3 + 1.5 IQR</span>을 계산하세요.",

    // Question decoder: spotting which technique to use > table > td
    "Write down the numerical value of the relevant fence and explicitly compare <span class=\"chem\">v &lt; Q_1 - 1.5 IQR</span> or <span class=\"chem\">v &gt; Q_3 + 1.5 IQR</span> for the reasoning mark <b>[R1]</b>.": "논리 점수 <b>[R1]</b>을 받으려면 해당 울타리의 수치를 적고 <span class=\"chem\">v &lt; Q_1 - 1.5 IQR</span> 또는 <span class=\"chem\">v &gt; Q_3 + 1.5 IQR</span>임을 분명히 비교해 적으세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Comment on the validity / reliability of your estimate”": "“추정값의 타당성 / 신뢰성에 대해 논하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Check two conditions: <strong>1.</strong> Is <span class=\"chem\">|r|</span> close to <span class=\"chem\">1</span>? <strong>2.</strong> Is the input inside the observed data range (<strong>interpolation</strong>) or outside it (<strong>extrapolation</strong>)?": "두 가지 조건을 확인하세요: <strong>1.</strong> <span class=\"chem\">|r|</span>이 <span class=\"chem\">1</span>에 가까운가요? <strong>2.</strong> 입력값이 관측된 자료 범위 안(<strong>내삽</strong>)에 있나요, 밖(<strong>외삽</strong>)에 있나요?",

    // Question decoder: spotting which technique to use > table > td
    "If the input lies outside <span class=\"chem\">[x_{min}, x_{max}]</span>, state: <em>“Unreliable because it requires extrapolation outside the range of the data.”</em>": "입력값이 <span class=\"chem\">[x_{min}, x_{max}]</span> 밖에 있다면 이렇게 답하세요: <em>“자료의 범위를 벗어난 외삽(extrapolation)이 필요하므로 신뢰할 수 없다.”</em>",

    // Question decoder: spotting which technique to use > table > th
    "“Each data value <span class=\"chem\">x</span> is transformed to <span class=\"chem\">y = ax + b</span>”": "“각 자료값 <span class=\"chem\">x</span>가 <span class=\"chem\">y = ax + b</span>로 변환된다”",

    // Question decoder: spotting which technique to use > table > td
    "Mean/median/quartiles scale and shift: <span class=\"chem\">ȳ = a x̄ + b</span> (if <span class=\"chem\">a &lt; 0</span>, <span class=\"chem\">Q_1</span> and <span class=\"chem\">Q_3</span> swap). Spread measures only scale by <span class=\"chem\">|a|</span>: <span class=\"chem\">σ_y = |a|σ_x</span>, <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.": "평균·중앙값·사분위수는 배수와 이동을 모두 적용해요: <span class=\"chem\">ȳ = a x̄ + b</span> (<span class=\"chem\">a &lt; 0</span>이면 <span class=\"chem\">Q_1</span>과 <span class=\"chem\">Q_3</span>이 서로 바뀌어요). 산포도는 <span class=\"chem\">|a|</span>배만 돼요: <span class=\"chem\">σ_y = |a|σ_x</span>, <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.",

    // Question decoder: spotting which technique to use > table > td
    "Adding <span class=\"chem\">b</span> has <strong>zero effect</strong> on standard deviation, variance, or <span class=\"chem\">IQR</span>. If <span class=\"chem\">a &lt; 0</span>, use <span class=\"chem\">|a|</span> (the standard deviation never becomes negative).": "<span class=\"chem\">b</span>를 더하는 것은 표준편차, 분산, <span class=\"chem\">IQR</span>에 <strong>아무 영향이 없어요</strong>. <span class=\"chem\">a &lt; 0</span>이면 <span class=\"chem\">|a|</span>를 사용하세요 (표준편차는 절대 음수가 되지 않아요).",

    // Question decoder: spotting which technique to use > not needed for IB > p
    "<strong>What is NOT in the IB Math AA HL syllabus:</strong> Hypothesis testing (<span class=\"chem\">χ^2</span> tests of independence, <span class=\"chem\">χ^2</span> goodness-of-fit, <span class=\"chem\">t</span>-tests, <span class=\"chem\">z</span>-tests), Spearman's rank correlation <span class=\"chem\">r_s</span> and unbiased sample variance <span class=\"chem\">s_{n-1}^2</span> belong to IB Math AI. Calculating Pearson's <span class=\"chem\">r</span> or regression slopes by hand from summation formulas is not required in AA: use your GDC. In IB Math AA, you always find <span class=\"chem\">r</span>, <span class=\"chem\">σ_x</span>, and regression equations directly from your GDC or from summary clues.": "<strong>IB Math AA HL 시험 범위 외 내용:</strong> 가설검정(<span class=\"chem\">χ^2</span> 독립성 검정, <span class=\"chem\">χ^2</span> 적합도 검정, <span class=\"chem\">t</span>검정, <span class=\"chem\">z</span>검정), 스피어만 순위상관계수 <span class=\"chem\">r_s</span>, 불편표본분산 <span class=\"chem\">s_{n-1}^2</span>은 IB Math AI 범위예요. 합 공식을 써서 손으로 피어슨 <span class=\"chem\">r</span>이나 회귀 계수를 계산하는 것은 AA에서 요구하지 않아요: GDC를 사용하세요. IB Math AA에서는 항상 GDC나 요약 정보로 <span class=\"chem\">r</span>, <span class=\"chem\">σ_x</span>, 회귀방정식을 구해요.",

    // Sampling methods, cumulative frequency and box plots > data-toc attribute
    "Sampling & box plots": "표집과 상자수염그림",

    // Sampling methods, cumulative frequency and box plots > h2
    "Sampling methods, cumulative frequency and box plots": "표집 방법, 누적도수 그래프와 상자수염그림",

    // Sampling methods, cumulative frequency and box plots > p
    "A <dfn data-def=\"The complete set of all individuals, items, or measurements of interest in a statistical study.\">population</dfn> is the entire group you want to describe, whereas a <dfn data-def=\"A subset of the population selected for observation and measurement.\">sample</dfn> is a smaller subset you actually measure. Data can be <strong>discrete</strong> (counted in exact steps, such as number of siblings) or <strong>continuous</strong> (measured on a continuous scale, such as height or reaction time).": "<dfn data-def=\"The complete set of all individuals, items, or measurements of interest in a statistical study.\">모집단 <span class=\"en-term\">(population)</span></dfn>은 설명하고자 하는 전체 집단이고, <dfn data-def=\"A subset of the population selected for observation and measurement.\">표본 <span class=\"en-term\">(sample)</span></dfn>은 실제로 측정하기 위해 뽑은 작은 부분집합이에요. 자료는 <strong>이산자료</strong>(형제자매 수처럼 셀 수 있는 값) 또는 <strong>연속자료</strong>(키나 반응 시간처럼 연속적인 눈금 위에서 재는 값)로 나뉘어요.",

    // Sampling methods, cumulative frequency and box plots > data-def attribute
    "The complete set of all individuals, items, or measurements of interest in a statistical study.": "통계 조사의 대상이 되는 모든 개체, 항목 또는 측정값 전체의 집합.",

    // Sampling methods, cumulative frequency and box plots > data-def attribute
    "A subset of the population selected for observation and measurement.": "관찰과 측정을 위해 모집단에서 선택한 부분집합.",

    // Sampling methods, cumulative frequency and box plots > table > caption
    "Comparison of the five IB sampling techniques (SL 4.1)": "IB 5가지 표집 방법 비교 (SL 4.1)",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Sampling method": "표집 방법",

    // Sampling methods, cumulative frequency and box plots > table > th
    "How the sample is chosen": "표본 추출 방식",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Key strength &amp; main source of bias": "핵심 장점 및 주요 편향 원인",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Simple random": "단순무작위 표집",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Every member of the population (and every subset of size <span class=\"chem\">n</span>) has an equal probability of being chosen, using a random number generator.": "난수 생성기 등을 사용해 모집단의 모든 구성원(및 크기 <span class=\"chem\">n</span>인 모든 부분집합)이 선택될 확률이 같도록 뽑아요.",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Unbiased in expectation, but requires a complete list (sampling frame) of the entire population.": "기댓값 측면에서 편향이 없지만, 전체 모집단의 완전한 명단(표집틀)이 필요해요.",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Systematic": "계통 표집",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Pick a random starting point among the first <span class=\"chem\">k</span> items, then select every <span class=\"chem\">k</span>-th member (<span class=\"chem\">k = N / n</span>) along an ordered list.": "처음 <span class=\"chem\">k</span>개 중에서 무작위로 시작점을 정한 뒤, 정렬된 명단에서 <span class=\"chem\">k</span>번째마다(<span class=\"chem\">k = N / n</span>) 뽑아요.",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Fast and evenly spread, but biased if the list has a hidden periodic cycle matching <span class=\"chem\">k</span>.": "빠르고 고르게 분포하지만, 명단에 <span class=\"chem\">k</span>와 일치하는 숨겨진 주기가 있으면 편향돼요.",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Stratified": "층화 표집",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Divide the population into distinct subgroups (<em>strata</em>) and take a <strong>simple random sample</strong> from each stratum proportional to its size: <span class=\"chem\">n_i = (N_i / N) × n</span>.": "모집단을 서로 다른 소집단(<em>층</em>)으로 나눈 뒤 각 층의 크기에 비례해 <strong>단순무작위 표집</strong>을 해요: <span class=\"chem\">n_i = (N_i / N) × n</span>.",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Guarantees proportional representation of every subgroup; still requires a full list within each stratum.": "모든 소집단이 비율대로 반영되지만, 여전히 각 층 내부의 전체 명단이 필요해요.",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Quota": "할당 표집",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Divide the population into subgroups like stratified sampling, but select subjects <strong>non-randomly</strong> (by convenience) until each subgroup quota is filled.": "층화 표집처럼 소집단으로 나누지만, 각 소집단의 할당량이 채워질 때까지 <strong>비무작위로</strong>(편의에 따라) 대상을 골라요.",

    // Sampling methods, cumulative frequency and box plots > table > td
    "No population list needed, but prone to interviewer selection bias.": "모집단 명단이 필요 없지만, 조사자의 선택 편향이 생기기 쉬워요.",

    // Sampling methods, cumulative frequency and box plots > table > th
    "Convenience": "편의 표집",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Poll whichever individuals are easiest to reach first (e.g., the first 20 students walking into the library).": "가장 먼저 닿기 쉬운 사람들을 조사해요 (예: 도서관에 들어오는 첫 20명의 학생).",

    // Sampling methods, cumulative frequency and box plots > table > td
    "Quickest method, but severely biased because the sample rarely represents the whole population.": "가장 빠르지만 표본이 전체 모집단을 대표하지 못하므로 편향이 매우 커요.",

    // Sampling methods, cumulative frequency and box plots > h3
    "Cumulative frequency graphs, quartiles and formal outlier fences": "누적도수 그래프, 사분위수와 공식 이상치 울타리",

    // Sampling methods, cumulative frequency and box plots > p
    "For grouped continuous data, a <strong>histogram</strong> plots class intervals on the horizontal axis and frequency on the vertical axis (with no gaps between bars). A <strong>cumulative frequency graph</strong> plots the running total of frequencies against the <strong>upper boundary</strong> of each class interval.": "계급으로 묶인 연속자료에서 <strong>히스토그램</strong>은 가로축에 계급 구간, 세로축에 도수를 그려요 (막대 사이 빈틈 없음). <strong>누적도수 그래프</strong>는 각 계급 구간의 <strong>위쪽 경계값</strong>에 누적 도수를 대응시켜 그려요.",

    // Sampling methods, cumulative frequency and box plots > p
    "From a cumulative frequency curve of <span class=\"chem\">n</span> total observations, read off horizontal lines at:": "전체 관측값이 <span class=\"chem\">n</span>개인 누적도수 곡선에서는 다음 수평선에서 값을 읽어요:",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Lower quartile <span class=\"chem\">Q_1</span></strong>: <span class=\"chem\">25%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.25n</span>)": "<strong>제1사분위수 <span class=\"chem\">Q_1</span></strong>: <span class=\"chem\">n</span>의 <span class=\"chem\">25%</span> (<span class=\"chem\">0.25n</span>)",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Median <span class=\"chem\">M</span> (or <span class=\"chem\">Q_2</span>)</strong>: <span class=\"chem\">50%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.50n</span>)": "<strong>중앙값 <span class=\"chem\">M</span> (또는 <span class=\"chem\">Q_2</span>)</strong>: <span class=\"chem\">n</span>의 <span class=\"chem\">50%</span> (<span class=\"chem\">0.50n</span>)",

    // Sampling methods, cumulative frequency and box plots > li
    "<strong>Upper quartile <span class=\"chem\">Q_3</span></strong>: <span class=\"chem\">75%</span> of <span class=\"chem\">n</span> (<span class=\"chem\">0.75n</span>)": "<strong>제3사분위수 <span class=\"chem\">Q_3</span></strong>: <span class=\"chem\">n</span>의 <span class=\"chem\">75%</span> (<span class=\"chem\">0.75n</span>)",

    // Sampling methods, cumulative frequency and box plots > equation > maths line
    "IQR = <i>Q</i><sub>3</sub> − <i>Q</i><sub>1</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Lower fence = <i>Q</i><sub>1</sub> − 1.5 × IQR &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Upper fence = <i>Q</i><sub>3</sub> + 1.5 × IQR": "IQR = <i>Q</i><sub>3</sub> − <i>Q</i><sub>1</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 아래쪽 울타리 = <i>Q</i><sub>1</sub> − 1.5 × IQR &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 위쪽 울타리 = <i>Q</i><sub>3</sub> + 1.5 × IQR",

    // Sampling methods, cumulative frequency and box plots > equation > dt
    "IQR": "IQR",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "interquartile range (spread of the middle 50% of data)": "사분위수 범위 (자료 가운데 50%의 퍼진 정도)",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "lower quartile (25th percentile) and upper quartile (75th percentile)": "제1사분위수 (25번째 백분위수)와 제3사분위수 (75번째 백분위수)",

    // Sampling methods, cumulative frequency and box plots > equation > dt
    // widget string (assets/js/widgets-t4-1.js)
    "Outlier": "이상치",

    // Sampling methods, cumulative frequency and box plots > equation > dd
    "any data value strictly below the lower fence or strictly above the upper fence": "아래쪽 울타리보다 엄격히 작거나 위쪽 울타리보다 엄격히 큰 자료값",

    // Sampling methods, cumulative frequency and box plots > formula booklet note > p
    "<strong>Formula Booklet check (SL 4.2):</strong> <span class=\"chem\">IQR = Q_3 - Q_1</span> is in your Formula Booklet, but the outlier fence multipliers <span class=\"chem\">Q_1 - 1.5 × IQR</span> and <span class=\"chem\">Q_3 + 1.5 × IQR</span> are <strong>not printed in the booklet</strong>—memorize the <span class=\"chem\">1.5 × IQR</span> rule!": "<strong>공식집 확인 (SL 4.2):</strong> <span class=\"chem\">IQR = Q_3 - Q_1</span>은 공식집에 있지만, 이상치 울타리 <span class=\"chem\">Q_1 - 1.5 × IQR</span>과 <span class=\"chem\">Q_3 + 1.5 × IQR</span>은 <strong>공식집에 없어요</strong>—<span class=\"chem\">1.5 × IQR</span> 규칙을 꼭 외우세요!",

    // Sampling methods, cumulative frequency and box plots > widget > data-title attribute
    "Interactive box plot, quartiles and 1.5 × IQR outlier detector": "대화형 상자수염그림, 사분위수 및 1.5 × IQR 이상치 판별기",

    // Sampling methods, cumulative frequency and box plots > widget > figcaption
    "Drag the 11th data value <span class=\"chem\">x_{11}</span> across the dashed <span class=\"chem\">1.5 × IQR</span> fences. Notice that when <span class=\"chem\">x_{11}</span> crosses the upper fence, the right whisker snaps back to the largest non-outlier in the dataset while <span class=\"chem\">x_{11}</span> is marked separately as an outlier.": "11번째 자료값 <span class=\"chem\">x_{11}</span>을 점선 <span class=\"chem\">1.5 × IQR</span> 울타리 너머로 드래그해 보세요. <span class=\"chem\">x_{11}</span>이 위쪽 울타리를 넘어가면 오른쪽 수염이 이상치가 아닌 가장 큰 값으로 줄어들고 <span class=\"chem\">x_{11}</span>은 이상치로 따로 표시돼요.",

    // Sampling methods, cumulative frequency and box plots > worked example > h3
    "Testing for outliers and adjusting box-plot whiskers": "이상치 판별과 상자수염그림의 수염 조정하기",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "The reaction times (in milliseconds) of 15 athletes have minimum <span class=\"chem\">142</span>, lower quartile <span class=\"chem\">Q_1 = 180</span>, median <span class=\"chem\">196</span>, upper quartile <span class=\"chem\">Q_3 = 212</span>, and two largest values <span class=\"chem\">254</span> and <span class=\"chem\">268</span>. Determine which, if any, of the extreme values are outliers, and state the endpoints of the two whiskers on a box-and-whisker plot. <strong>[5 marks]</strong>": "운동선수 15명의 반응 시간(밀리초)의 최솟값은 <span class=\"chem\">142</span>, 제1사분위수 <span class=\"chem\">Q_1 = 180</span>, 중앙값 <span class=\"chem\">196</span>, 제3사분위수 <span class=\"chem\">Q_3 = 212</span>, 가장 큰 두 값은 <span class=\"chem\">254</span>와 <span class=\"chem\">268</span>이다. 극단값 중 이상치가 있는지 판별하고 (Determine), 상자수염그림에서 두 수염의 끝점을 답하시오 (State). <strong>[5 marks]</strong>",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Calculate the interquartile range (IQR)": "사분위수 범위 (IQR) 계산하기",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "The outlier fences depend on IQR = Q₃ − Q₁.": "이상치 울타리는 IQR = Q₃ − Q₁에 의해 정해져요.",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Compute both 1.5 × IQR outlier fences": "1.5 × IQR 이상치 울타리 두 개 계산하기",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Any value below Q₁ − 1.5(IQR) or above Q₃ + 1.5(IQR) is classified as an outlier.": "Q₁ − 1.5(IQR)보다 작거나 Q₃ + 1.5(IQR)보다 큰 값은 이상치로 분류돼요.",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Lower fence = 180 − 48 = 132, Upper fence = 212 + 48 = 260 <b>[M1 A1]</b>": "아래쪽 울타리 = 180 − 48 = 132, 위쪽 울타리 = 212 + 48 = 260 <b>[M1 A1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > data-title attribute
    "Compare the minimum and the two largest values against the fences": "최솟값과 가장 큰 두 값을 울타리와 비교하기",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Whiskers extend to the most extreme data points that are NOT outliers.": "수염은 이상치가 아닌 자료값 중 가장 극단적인 점까지 뻗어요.",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Since 142 ≥ 132, the minimum 142 is <b>not</b> a lower outlier (left whisker ends at 142). <b>[R1]</b>": "142 ≥ 132이므로 최솟값 142는 아래쪽 이상치가 <b>아니에요</b> (왼쪽 수염 끝은 142). <b>[R1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > maths line
    "Since 268 &gt; 260 but 254 ≤ 260, <b>268 is an outlier</b> and the right whisker ends at <b>254</b>. <b>[A1]</b>": "268 &gt; 260이지만 254 ≤ 260이므로 <b>268은 이상치</b>이고 오른쪽 수염 끝은 <b>254</b>예요. <b>[A1]</b>",

    // Sampling methods, cumulative frequency and box plots > worked example > p
    "Only 268 is an outlier; the whiskers end at 142 and 254.": "268만 이상치이며, 두 수염의 끝점은 142와 254예요.",

    // Sampling methods, cumulative frequency and box plots > try it > p
    "A dataset has lower quartile <span class=\"chem\">Q_1 = 35</span> and upper quartile <span class=\"chem\">Q_3 = 53</span>. Calculate the upper outlier fence <span class=\"chem\">Q_3 + 1.5 × IQR</span>.": "어떤 자료의 제1사분위수가 <span class=\"chem\">Q_1 = 35</span>이고 제3사분위수가 <span class=\"chem\">Q_3 = 53</span>이에요. 위쪽 이상치 울타리 <span class=\"chem\">Q_3 + 1.5 × IQR</span>을 계산하시오 (Calculate).",

    // Sampling methods, cumulative frequency and box plots > try it > li
    "First find <span class=\"chem\">IQR = Q_3 - Q_1 = 53 - 35</span>.": "먼저 <span class=\"chem\">IQR = Q_3 - Q_1 = 53 - 35</span>를 구하세요.",

    // Sampling methods, cumulative frequency and box plots > try it > li
    "Multiply <span class=\"chem\">IQR = 18</span> by <span class=\"chem\">1.5</span> and add the result to <span class=\"chem\">Q_3 = 53</span>.": "<span class=\"chem\">IQR = 18</span>에 <span class=\"chem\">1.5</span>를 곱한 뒤 <span class=\"chem\">Q_3 = 53</span>에 더하세요.",

    // Sampling methods, cumulative frequency and box plots > try it > maths line
    "Upper fence = 53 + 1.5(18) = 53 + 27 = <b>80</b>": "위쪽 울타리 = 53 + 1.5(18) = 53 + 27 = <b>80</b>",

    // Measures of center, standard deviation and linear coding > data-toc attribute
    "Mean, SD & coding": "평균, 표준편차와 선형 변환",

    // Measures of center, standard deviation and linear coding > h2
    "Measures of center, standard deviation and linear coding": "대푯값, 표준편차와 선형 변환",

    // Measures of center, standard deviation and linear coding > p
    "For a dataset with values <span class=\"chem\">x_1, x_2, ..., x_k</span> occurring with frequencies <span class=\"chem\">f_1, f_2, ..., f_k</span> (where <span class=\"chem\">n = Σ f_i</span>), the mean <span class=\"chem\">x̄</span> and population standard deviation <span class=\"chem\">σ</span> measure the center and typical distance from the mean:": "자료값 <span class=\"chem\">x_1, x_2, ..., x_k</span>가 도수 <span class=\"chem\">f_1, f_2, ..., f_k</span> (<span class=\"chem\">n = Σ f_i</span>)로 나타날 때, 평균 <span class=\"chem\">x̄</span>와 모표준편차 <span class=\"chem\">σ</span>는 중심과 평균으로부터의 전형적인 거리를 나타내요:",

    // Measures of center, standard deviation and linear coding > equation > dt
    "x<sub>i</sub>": "x<sub>i</sub>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "data value (or <strong>mid-interval value</strong> for grouped data)": "자료값 (도수분포표에서는 <strong>계급값</strong>)",

    // Measures of center, standard deviation and linear coding > equation > dt
    "f<sub>i</sub>": "f<sub>i</sub>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "frequency of class <span class=\"chem\">i</span>, with total sample size <span class=\"chem\">n = Σ f_i</span>": "계급 <span class=\"chem\">i</span>의 도수, 전체 표본 크기 <span class=\"chem\">n = Σ f_i</span>",

    // Measures of center, standard deviation and linear coding > equation > dd
    "population standard deviation and population variance": "모표준편차와 모분산",

    // Measures of center, standard deviation and linear coding > common mistake > p
    "<strong>GDC Trap — Always read <span class=\"mono\">σx</span>, never <span class=\"mono\">sx</span>:</strong> When you run <span class=\"mono\">1-Var Stats</span> on your GDC, it displays two standard deviations: <span class=\"mono\">sx</span> (which divides by <span class=\"chem\">n - 1</span>) and <span class=\"mono\">σx</span> (which divides by <span class=\"chem\">n</span>). In IB Math AA (both SL and HL), the standard deviation of a dataset is defined as <strong><span class=\"mono\">σx</span></strong>. For grouped tables, enter the class <strong>midpoints</strong> in <span class=\"mono\">L1</span> and the frequencies in <span class=\"mono\">L2</span> (<span class=\"mono\">FreqList: L2</span>).": "<strong>GDC 함정 — 항상 <span class=\"mono\">sx</span>가 아니라 <span class=\"mono\">σx</span>를 읽으세요:</strong> GDC에서 <span class=\"mono\">1-Var Stats</span>를 실행하면 두 가지 표준편차가 나와요: <span class=\"mono\">sx</span> (<span class=\"chem\">n - 1</span>로 나눔)와 <span class=\"mono\">σx</span> (<span class=\"chem\">n</span>으로 나눔). IB Math AA (SL·HL 모두)에서 자료의 표준편차는 <strong><span class=\"mono\">σx</span></strong>로 정의돼요. 도수분포표에서는 <span class=\"mono\">L1</span>에 계급의 <strong>계급값</strong>을, <span class=\"mono\">L2</span>에 도수를 넣으세요 (<span class=\"mono\">FreqList: L2</span>).",

    // Measures of center, standard deviation and linear coding > h3
    "Linear coding: shifting by <span class=\"chem\">+b</span> vs scaling by <span class=\"chem\">×a</span>": "선형 변환: <span class=\"chem\">+b</span> 평행이동 vs <span class=\"chem\">×a</span> 배수 변환",

    // Measures of center, standard deviation and linear coding > p
    "Suppose every value <span class=\"chem\">x_i</span> in a dataset is transformed by the linear rule <span class=\"chem\">y_i = a x_i + b</span> (for example, converting temperatures from Celsius to Fahrenheit or rescaling exam marks):": "자료의 모든 값 <span class=\"chem\">x_i</span>가 선형 규칙 <span class=\"chem\">y_i = a x_i + b</span>에 의해 변환된다고 하자 (예: 섭씨 온도를 화씨로 바꾸거나 시험 점수를 조정할 때):",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Measures of position (mean, median, mode, <span class=\"chem\">Q_1, Q_3</span>)</strong> are multiplied by <span class=\"chem\">a</span> <em>and</em> shifted by <span class=\"chem\">+b</span>: <span class=\"chem\">ȳ = a x̄ + b</span>. If <span class=\"chem\">a &lt; 0</span> the order reverses: the new <span class=\"chem\">Q_1</span> is <span class=\"chem\">aQ_3 + b</span> and the new <span class=\"chem\">Q_3</span> is <span class=\"chem\">aQ_1 + b</span>.": "<strong>위치 척도 (평균, 중앙값, 최빈값, <span class=\"chem\">Q_1, Q_3</span>)</strong>는 <span class=\"chem\">a</span>를 곱하고 <em>동시에</em> <span class=\"chem\">+b</span>만큼 이동해요: <span class=\"chem\">ȳ = a x̄ + b</span>. <span class=\"chem\">a &lt; 0</span>이면 순서가 뒤집혀서 새로운 <span class=\"chem\">Q_1</span>은 <span class=\"chem\">aQ_3 + b</span>, 새로운 <span class=\"chem\">Q_3</span>은 <span class=\"chem\">aQ_1 + b</span>가 돼요.",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Measures of spread (standard deviation <span class=\"chem\">σ</span>, <span class=\"chem\">IQR</span>, range)</strong> are multiplied by <span class=\"chem\">|a|</span> and are <strong>completely unaffected by <span class=\"chem\">+b</span></strong>: <span class=\"chem\">σ_y = |a|σ_x</span> and <span class=\"chem\">IQR_y = |a|IQR_x</span>.": "<strong>산포도 (표준편차 <span class=\"chem\">σ</span>, <span class=\"chem\">IQR</span>, 범위)</strong>는 <span class=\"chem\">|a|</span>배가 되며 <strong><span class=\"chem\">+b</span>의 영향을 전혀 받지 않아요</strong>: <span class=\"chem\">σ_y = |a|σ_x</span>, <span class=\"chem\">IQR_y = |a|IQR_x</span>.",

    // Measures of center, standard deviation and linear coding > li
    "<strong>Variance <span class=\"chem\">σ^2</span></strong> is multiplied by <span class=\"chem\">a^2</span> (and unaffected by <span class=\"chem\">+b</span>): <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.": "<strong>분산 <span class=\"chem\">σ^2</span></strong>은 <span class=\"chem\">a^2</span>배가 돼요 (<span class=\"chem\">+b</span>의 영향 없음): <span class=\"chem\">σ_y^2 = a^2 σ_x^2</span>.",

    // Measures of center, standard deviation and linear coding > worked example > h3
    "Paper 1 linear coding and finding ∑x² from mean and variance": "Paper 1 선형 변환 및 평균과 분산으로 ∑x² 구하기",

    // Measures of center, standard deviation and linear coding > worked example > p
    "A sample of <span class=\"chem\">n = 10</span> measurements <span class=\"chem\">x_1, x_2, ..., x_{10}</span> has mean <span class=\"chem\">x̄ = 6</span> and standard deviation <span class=\"chem\">σ_x = 2</span>.<br> (a) Find the mean, standard deviation, and variance of the coded dataset <span class=\"chem\">y_i = 20 - 3x_i</span>. <strong>[3 marks]</strong><br> (b) Find the value of <span class=\"chem\">∑_{i=1}^{10} x_i^2</span>. <strong>[3 marks]</strong>": "<span class=\"chem\">n = 10</span>개의 측정값 <span class=\"chem\">x_1, x_2, ..., x_{10}</span>의 평균이 <span class=\"chem\">x̄ = 6</span>이고 표준편차가 <span class=\"chem\">σ_x = 2</span>이다.<br> (a) 변환된 자료 <span class=\"chem\">y_i = 20 - 3x_i</span>의 평균, 표준편차, 분산을 구하시오 (Find). <strong>[3 marks]</strong><br> (b) <span class=\"chem\">∑_{i=1}^{10} x_i^2</span>의 값을 구하시오 (Find). <strong>[3 marks]</strong>",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "(a) Apply linear coding with a = −3 and b = 20": "(a) a = −3, b = 20으로 선형 변환 적용하기",

    // Measures of center, standard deviation and linear coding > worked example > p
    "The mean follows the full linear rule, whereas standard deviation scales by |−3| = +3 (never negative!).": "평균은 선형 규칙 전체를 따르지만, 표준편차는 |−3| = +3배가 돼요 (절대 음수가 아니에요!).",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "(b) Use the variance identity σ² = (∑x² / n) − x̄²": "(b) 분산 공식 σ² = (∑x² / n) − x̄² 사용하기",

    // Measures of center, standard deviation and linear coding > worked example > p
    "Writing variance in terms of the mean of the squares lets us solve directly for ∑x².": "분산을 제곱의 평균으로 나타내면 ∑x²을 바로 풀 수 있어요.",

    // Measures of center, standard deviation and linear coding > worked example > data-title attribute
    "Solve for ∑x²": "∑x² 구하기",

    // Measures of center, standard deviation and linear coding > worked example > p
    "Add 36 to both sides and multiply by n = 10.": "양변에 36을 더하고 n = 10을 곱하세요.",

    // Measures of center, standard deviation and linear coding > try it > p
    "A dataset <span class=\"chem\">X</span> has mean <span class=\"chem\">15</span> and standard deviation <span class=\"chem\">σ_X = 3</span>. Every value is transformed by <span class=\"chem\">Y = 100 - 4X</span>. Find the standard deviation <span class=\"chem\">σ_Y</span> of the transformed dataset.": "자료 <span class=\"chem\">X</span>의 평균이 <span class=\"chem\">15</span>이고 표준편차가 <span class=\"chem\">σ_X = 3</span>이에요. 모든 값을 <span class=\"chem\">Y = 100 - 4X</span>로 변환했을 때 변환된 자료의 표준편차 <span class=\"chem\">σ_Y</span>를 구하시오 (Find).",

    // Measures of center, standard deviation and linear coding > try it > li
    "Adding <span class=\"chem\">100</span> shifts the data without changing its spread.": "<span class=\"chem\">100</span>을 더하면 자료가 평행이동할 뿐 산포도는 변하지 않아요.",

    // Measures of center, standard deviation and linear coding > try it > li
    "Multiplying by <span class=\"chem\">-4</span> scales the standard deviation by <span class=\"chem\">|-4| = 4</span>.": "<span class=\"chem\">-4</span>를 곱하면 표준편차는 <span class=\"chem\">|-4| = 4</span>배가 돼요.",

    // Correlation and the two least-squares regression lines > data-toc attribute
    "Correlation & regression": "상관관계와 회귀직선",

    // Correlation and the two least-squares regression lines > h2
    "Correlation and the two least-squares regression lines": "상관관계와 두 최소제곱 회귀직선",

    // Correlation and the two least-squares regression lines > p
    "<dfn data-def=\"A measure of the strength and direction of the linear relationship between two quantitative variables x and y, satisfying −1 ≤ r ≤ 1.\">Pearson's product-moment correlation coefficient</dfn> <span class=\"chem\">r</span> measures how closely bivariate data points <span class=\"chem\">(x_i, y_i)</span> cluster around a straight line:": "<dfn data-def=\"A measure of the strength and direction of the linear relationship between two quantitative variables x and y, satisfying −1 ≤ r ≤ 1.\">피어슨 상관계수 <span class=\"en-term\">(Pearson's product-moment correlation coefficient)</span></dfn> <span class=\"chem\">r</span>은 이변량 자료점 <span class=\"chem\">(x_i, y_i)</span>가 직선 주위에 얼마나 밀집해 있는지 측정해요:",

    // Correlation and the two least-squares regression lines > data-def attribute
    "A measure of the strength and direction of the linear relationship between two quantitative variables x and y, satisfying −1 ≤ r ≤ 1.": "두 양적 변수 x와 y 사이의 선형 관계의 강도와 방향을 나타내는 측도 (−1 ≤ r ≤ 1).",

    // Correlation and the two least-squares regression lines > li
    "<span class=\"chem\">r = +1</span>: perfect positive linear correlation; <span class=\"chem\">r = -1</span>: perfect negative linear correlation; <span class=\"chem\">r = 0</span>: no linear correlation.": "<span class=\"chem\">r = +1</span>: 완벽한 양의 선형 상관관계; <span class=\"chem\">r = -1</span>: 완벽한 음의 선형 상관관계; <span class=\"chem\">r = 0</span>: 선형 상관관계 없음.",

    // Correlation and the two least-squares regression lines > li
    "<strong>Rough guide to strength</strong> (a rule of thumb only; IB does not define fixed cut-offs): <span class=\"chem\">0.75 ≤ |r| ≤ 1</span> (strong), <span class=\"chem\">0.5 ≤ |r| &lt; 0.75</span> (moderate), <span class=\"chem\">|r| &lt; 0.5</span> (weak).": "<strong>강도의 대략적인 기준</strong> (경험적 기준일 뿐이며, IB는 고정된 경계값을 정하지 않아요): <span class=\"chem\">0.75 ≤ |r| ≤ 1</span> (강함), <span class=\"chem\">0.5 ≤ |r| &lt; 0.75</span> (보통), <span class=\"chem\">|r| &lt; 0.5</span> (약함).",
    "Interpreting the gradient <span class=\"chem\">a</span> and the intercept <span class=\"chem\">b</span>": "기울기 <span class=\"chem\">a</span>와 절편 <span class=\"chem\">b</span> 해석하기",
    "On a scatter diagram, a line of best fit drawn by eye should pass through the mean point <span class=\"chem\">(x̄, ȳ)</span>. In the exam you find <span class=\"chem\">r</span> and the regression line <span class=\"chem\">y = ax + b</span> from the raw data on your GDC (<span class=\"mono\">LinReg(ax+b)</span>), and then interpret the parameters in context:": "산점도에서 눈대중으로 그린 최적선은 평균점 <span class=\"chem\">(x̄, ȳ)</span>을 지나야 해요. 시험에서는 원자료로부터 GDC(<span class=\"mono\">LinReg(ax+b)</span>)로 <span class=\"chem\">r</span>과 회귀직선 <span class=\"chem\">y = ax + b</span>를 구한 다음, 매개변수를 맥락에 맞게 해석해요:",
    "<strong>Gradient <span class=\"chem\">a</span></strong>: the estimated change in <span class=\"chem\">y</span> for each increase of one unit in <span class=\"chem\">x</span> (for example, “each extra hour of revision is associated with about <span class=\"chem\">a</span> more marks”).": "<strong>기울기 <span class=\"chem\">a</span></strong>: <span class=\"chem\">x</span>가 한 단위 증가할 때마다 <span class=\"chem\">y</span>의 추정 변화량이에요 (예: \"복습을 한 시간 더 할 때마다 점수가 약 <span class=\"chem\">a</span>점 더 높은 경향이 있다\").",
    "<strong>Intercept <span class=\"chem\">b</span></strong>: the estimated value of <span class=\"chem\">y</span> when <span class=\"chem\">x = 0</span>. It is only meaningful if <span class=\"chem\">x = 0</span> lies within the range of the data; otherwise it is an extrapolation and should not be interpreted.": "<strong>절편 <span class=\"chem\">b</span></strong>: <span class=\"chem\">x = 0</span>일 때 <span class=\"chem\">y</span>의 추정값이에요. <span class=\"chem\">x = 0</span>이 자료의 범위 안에 있을 때만 의미가 있고, 그렇지 않으면 외삽이므로 해석하면 안 돼요.",
    "Comparing two distributions with box plots": "상자수염그림으로 두 분포 비교하기",
    "To compare two box plots, comment on a measure of <strong>centre</strong> (compare the medians) and a measure of <strong>spread</strong> (compare the <span class=\"chem\">IQR</span>s or ranges), and say what each comparison means in context. For example: “Class B has the higher median, so Class B generally scored higher; Class A has the larger <span class=\"chem\">IQR</span>, so the middle 50% of Class A's scores are more spread out.”": "두 상자수염그림을 비교할 때는 <strong>중심</strong>의 척도(중앙값 비교)와 <strong>퍼짐</strong>의 척도(<span class=\"chem\">IQR</span>나 범위 비교)를 모두 언급하고, 각 비교가 맥락에서 무엇을 뜻하는지 말해야 해요. 예: \"B반의 중앙값이 더 높으므로 B반이 대체로 점수가 더 높다. A반의 <span class=\"chem\">IQR</span>가 더 크므로 A반의 가운데 50% 점수가 더 퍼져 있다.\"",

    // Correlation and the two least-squares regression lines > li
    "<strong>Linear coding on <span class=\"chem\">r</span></strong>: Rescaling <span class=\"chem\">x</span> or <span class=\"chem\">y</span> by positive multipliers leaves <span class=\"chem\">r</span> <strong>unchanged</strong>. Multiplying one variable by a negative constant flips the sign of <span class=\"chem\">r</span>.": "<strong>선형 변환이 <span class=\"chem\">r</span>에 미치는 영향</strong>: <span class=\"chem\">x</span>나 <span class=\"chem\">y</span>에 양수를 곱해도 <span class=\"chem\">r</span>은 <strong>변하지 않아요</strong>. 한 변수에 음수 상수를 곱하면 <span class=\"chem\">r</span>의 부호가 반대로 바뀌어요.",

    // Correlation and the two least-squares regression lines > h3
    "Why there are two different regression lines (<span class=\"chem\">y</span> on <span class=\"chem\">x</span> vs <span class=\"chem\">x</span> on <span class=\"chem\">y</span>)": "왜 두 개의 서로 다른 회귀직선(<span class=\"chem\">x</span>에 대한 <span class=\"chem\">y</span> vs <span class=\"chem\">y</span>에 대한 <span class=\"chem\">x</span>)이 존재할까?",

    // Correlation and the two least-squares regression lines > p
    "When neither <span class=\"chem\">x</span> nor <span class=\"chem\">y</span> is controlled in an experiment (for example, height <span class=\"chem\">x</span> and arm span <span class=\"chem\">y</span> of students), there are <strong>two</strong> least-squares regression lines:": "실험에서 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span> 중 어느 쪽도 통제되지 않았을 때(예: 학생들의 키 <span class=\"chem\">x</span>와 팔 길이 <span class=\"chem\">y</span>), <strong>두 개</strong>의 최소제곱 회귀직선이 있어요:",

    // Correlation and the two least-squares regression lines > equation > maths line
    "<i>y</i> on <i>x</i>: &nbsp; <i>y</i> − <i>ȳ</i> = <i>a</i>(<i>x</i> − <i>x̄</i>) &nbsp; (<i>y</i> = <i>ax</i> + <i>b</i>) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>x</i> on <i>y</i>: &nbsp; <i>x</i> − <i>x̄</i> = <i>c</i>(<i>y</i> − <i>ȳ</i>) &nbsp; (<i>x</i> = <i>cy</i> + <i>d</i>)": "<i>y</i> on <i>x</i>: &nbsp; <i>y</i> − <i>ȳ</i> = <i>a</i>(<i>x</i> − <i>x̄</i>) &nbsp; (<i>y</i> = <i>ax</i> + <i>b</i>) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <i>x</i> on <i>y</i>: &nbsp; <i>x</i> − <i>x̄</i> = <i>c</i>(<i>y</i> − <i>ȳ</i>) &nbsp; (<i>x</i> = <i>cy</i> + <i>d</i>)",

    // Correlation and the two least-squares regression lines > equation > dt
    "y on x": "y on x",

    // Correlation and the two least-squares regression lines > equation > dd
    "minimizes squared <strong>vertical</strong> distances; use to estimate <span class=\"chem\">y</span> from a given <span class=\"chem\">x</span>": "<strong>수직</strong> 거리의 제곱합을 최소화; 주어진 <span class=\"chem\">x</span>로부터 <span class=\"chem\">y</span>를 추정할 때 사용",

    // Correlation and the two least-squares regression lines > equation > dt
    "x on y": "x on y",

    // Correlation and the two least-squares regression lines > equation > dd
    "minimizes squared <strong>horizontal</strong> distances; use to estimate <span class=\"chem\">x</span> from a given <span class=\"chem\">y</span>": "<strong>수평</strong> 거리의 제곱합을 최소화; 주어진 <span class=\"chem\">y</span>로부터 <span class=\"chem\">x</span>를 추정할 때 사용",

    // Correlation and the two least-squares regression lines > equation > dd
    "the mean point where <strong>both regression lines always intersect</strong>": "<strong>두 회귀직선이 항상 만나는</strong> 평균점",

    // Correlation and the two least-squares regression lines > key idea > p
    "<strong>Extension (beyond the AA guide). Why the two lines only coincide when <span class=\"chem\">|r| = 1</span>:</strong> The gradient of the <span class=\"chem\">y</span> on <span class=\"chem\">x</span> line is <span class=\"chem\">a = r(σ_y / σ_x)</span>, while the coefficient of <span class=\"chem\">y</span> in the <span class=\"chem\">x</span> on <span class=\"chem\">y</span> line is <span class=\"chem\">c = r(σ_x / σ_y)</span>. Multiplying them gives <span class=\"chem\">a · c = r^2</span>! Therefore, the two lines are identical if and only if <span class=\"chem\">r^2 = 1</span> (<span class=\"chem\">r = ±1</span>), and they always cross at the mean point <span class=\"chem\">(x̄, ȳ)</span>. The identities <span class=\"chem\">a = r(σ_y / σ_x)</span> and <span class=\"chem\">a · c = r^2</span> are not in the AA guide or the formula booklet: in the exam, <span class=\"chem\">r</span> comes from your GDC.": "<strong>심화 (AA 지침 범위 밖). 두 직선이 <span class=\"chem\">|r| = 1</span>일 때만 일치하는 이유:</strong> <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 직선의 기울기는 <span class=\"chem\">a = r(σ_y / σ_x)</span>이고, <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 직선에서 <span class=\"chem\">y</span>의 계수는 <span class=\"chem\">c = r(σ_x / σ_y)</span>예요. 두 값을 곱하면 <span class=\"chem\">a · c = r^2</span>이 돼요! 따라서 두 직선은 <span class=\"chem\">r^2 = 1</span> (<span class=\"chem\">r = ±1</span>)일 때만 일치하며, 언제나 평균점 <span class=\"chem\">(x̄, ȳ)</span>에서 만나요. 항등식 <span class=\"chem\">a = r(σ_y / σ_x)</span>와 <span class=\"chem\">a · c = r^2</span>은 AA 지침이나 공식집에 없어요: 시험에서는 <span class=\"chem\">r</span>을 GDC로 구해요.",

    // Correlation and the two least-squares regression lines > widget > data-title attribute
    "Interactive y-on-x vs x-on-y regression explorer": "대화형 y-on-x vs x-on-y 회귀직선 탐색기",

    // Correlation and the two least-squares regression lines > widget > figcaption
    "Adjust the correlation slider <span class=\"chem\">r</span>. Notice how both lines always pivot through the green mean point <span class=\"chem\">(x̄, ȳ) = (5, 6)</span>. When <span class=\"chem\">|r| = 1</span>, the solid <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> line and dashed <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> line merge into one; as <span class=\"chem\">|r| → 0</span>, they scissor apart until they are perpendicular at <span class=\"chem\">r = 0</span>.": "상관계수 슬라이더 <span class=\"chem\">r</span>을 조절해 보세요. 두 직선이 항상 초록색 평균점 <span class=\"chem\">(x̄, ȳ) = (5, 6)</span>을 중심으로 회전해요. <span class=\"chem\">|r| = 1</span>일 때는 실선 <span class=\"chem\">y</span>-on-<span class=\"chem\">x</span> 직선과 점선 <span class=\"chem\">x</span>-on-<span class=\"chem\">y</span> 직선이 하나로 합쳐지고, <span class=\"chem\">|r| → 0</span>이 되면 가위처럼 벌어져 <span class=\"chem\">r = 0</span>에서 서로 수직이 돼요.",

    // Correlation and the two least-squares regression lines > worked example > h3
    "Using both regression lines to find the mean point and predict x from y": "두 회귀직선으로 평균점 구하기 및 y로부터 x 예측하기",

    // Correlation and the two least-squares regression lines > worked example > p
    "For a bivariate dataset <span class=\"chem\">(x, y)</span> with <span class=\"chem\">10 ≤ x ≤ 30</span> and <span class=\"chem\">15 ≤ y ≤ 45</span>, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 1.2x + 6</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.6y + 2</span>.<br> (a) Find the mean values <span class=\"chem\">x̄</span> and <span class=\"chem\">ȳ</span>. <strong>[3 marks]</strong><br> (b) <em>(Extension, beyond the AA guide)</em> Find Pearson's correlation coefficient <span class=\"chem\">r</span>. <strong>[2 marks]</strong><br> (c) Estimate <span class=\"chem\">x</span> when <span class=\"chem\">y = 25</span>, and explain why your estimate is reliable. <strong>[3 marks]</strong>": "<span class=\"chem\">10 ≤ x ≤ 30</span>이고 <span class=\"chem\">15 ≤ y ≤ 45</span>인 이변량 자료 <span class=\"chem\">(x, y)</span>에 대해, <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선은 <span class=\"chem\">y = 1.2x + 6</span>이고 <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선은 <span class=\"chem\">x = 0.6y + 2</span>이다.<br> (a) 평균값 <span class=\"chem\">x̄</span>와 <span class=\"chem\">ȳ</span>를 구하시오 (Find). <strong>[3 marks]</strong><br> (b) <em>(심화, AA 지침 범위 밖)</em> 피어슨 상관계수 <span class=\"chem\">r</span>을 구하시오 (Find). <strong>[2 marks]</strong><br> (c) <span class=\"chem\">y = 25</span>일 때 <span class=\"chem\">x</span>를 추정하고, 추정값이 신뢰할 수 있는 이유를 설명하시오. <strong>[3 marks]</strong>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(a) Solve the two regression equations simultaneously for (x̄, ȳ)": "(a) 두 회귀방정식을 연립해 (x̄, ȳ) 구하기",

    // Correlation and the two least-squares regression lines > worked example > p
    "Both regression lines pass through the mean point (x̄, ȳ).": "두 회귀직선은 모두 평균점 (x̄, ȳ)를 지나요.",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "Substitute <i>ȳ</i> = 1.2<i>x̄</i> + 6 into <i>x̄</i> = 0.6<i>ȳ</i> + 2: <b>[M1]</b>": "<i>ȳ</i> = 1.2<i>x̄</i> + 6을 <i>x̄</i> = 0.6<i>ȳ</i> + 2에 대입: <b>[M1]</b>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(b) Extension: use a · c = r² and match the sign of the slopes": "(b) 심화: a · c = r²을 쓰고 기울기의 부호 맞추기",

    // Correlation and the two least-squares regression lines > worked example > p
    "Extension only: in the exam r comes from the GDC. Since a = 1.2 &gt; 0 and c = 0.6 &gt; 0, the correlation is positive and r² = a · c.": "심화 내용: 시험에서는 r을 GDC로 구해요. a = 1.2 &gt; 0이고 c = 0.6 &gt; 0이므로 상관관계는 양수이고 r² = a · c예요.",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "<i>r</i><sup>2</sup> = 1.2 × 0.6 = 0.72 ⇒ <i>r</i> = +√0.72 ≈ <b>0.849</b> (or <span class=\"frac\"><span>3√2</span><span>5</span></span>) <b>[M1 A1]</b>": "<i>r</i><sup>2</sup> = 1.2 × 0.6 = 0.72 ⇒ <i>r</i> = +√0.72 ≈ <b>0.849</b> (또는 <span class=\"frac\"><span>3√2</span><span>5</span></span>) <b>[M1 A1]</b>",

    // Correlation and the two least-squares regression lines > worked example > data-title attribute
    "(c) Use the x on y line to estimate x when y = 25": "(c) y = 25일 때 x를 추정하기 위해 x on y 직선 사용하기",

    // Correlation and the two least-squares regression lines > worked example > p
    "Because y = 25 is given and x is being predicted, we must use the x on y line.": "y = 25가 주어지고 x를 예측하므로 반드시 x on y 직선을 써야 해요.",

    // Correlation and the two least-squares regression lines > worked example > maths line
    "Reliable because <i>r</i> ≈ 0.849 indicates strong positive correlation AND <i>y</i> = 25 lies within [15, 45] (<b>interpolation</b>). <b>[R1]</b>": "<i>r</i> ≈ 0.849가 강한 양의 상관관계를 나타내고, <i>y</i> = 25가 [15, 45] 안에 있으므로 (<b>내삽</b>) 신뢰할 수 있어요. <b>[R1]</b>",

    // Correlation and the two least-squares regression lines > worked example > p
    "(a) x̄ = 20, ȳ = 30; (b) r ≈ 0.849; (c) x = 17 (reliable by strong correlation and interpolation)": "(a) x̄ = 20, ȳ = 30; (b) r ≈ 0.849; (c) x = 17 (강한 상관관계와 내삽이므로 신뢰 가능)",

    // Correlation and the two least-squares regression lines > try it > p
    "For a bivariate dataset, the regression line of <span class=\"chem\">y</span> on <span class=\"chem\">x</span> is <span class=\"chem\">y = 2x + 10</span> and the regression line of <span class=\"chem\">x</span> on <span class=\"chem\">y</span> is <span class=\"chem\">x = 0.4y + 8</span>. Calculate the value of <span class=\"chem\">ȳ</span> (the mean of <span class=\"chem\">y</span>).": "이변량 자료에서 <span class=\"chem\">y</span> on <span class=\"chem\">x</span> 회귀직선은 <span class=\"chem\">y = 2x + 10</span>이고 <span class=\"chem\">x</span> on <span class=\"chem\">y</span> 회귀직선은 <span class=\"chem\">x = 0.4y + 8</span>이에요. <span class=\"chem\">ȳ</span> (<span class=\"chem\">y</span>의 평균) 값을 계산하시오 (Calculate).",

    // Correlation and the two least-squares regression lines > try it > li
    "Both lines intersect at <span class=\"chem\">(x̄, ȳ)</span>, so substitute <span class=\"chem\">x̄ = 0.4ȳ + 8</span> into <span class=\"chem\">ȳ = 2x̄ + 10</span>.": "두 직선은 <span class=\"chem\">(x̄, ȳ)</span>에서 만나므로 <span class=\"chem\">x̄ = 0.4ȳ + 8</span>을 <span class=\"chem\">ȳ = 2x̄ + 10</span>에 대입하세요.",

    // Correlation and the two least-squares regression lines > try it > li
    "Solve <span class=\"chem\">ȳ = 2(0.4ȳ + 8) + 10 = 0.8ȳ + 26</span> for <span class=\"chem\">ȳ</span>.": "<span class=\"chem\">ȳ = 2(0.4ȳ + 8) + 10 = 0.8ȳ + 26</span>에서 <span class=\"chem\">ȳ</span>를 구하세요.",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "실전 연습",

    // widget string (assets/js/widgets-t4-1.js)
    "Base dataset (10 values)": "기본 자료 (10개 값)",

    // widget string (assets/js/widgets-t4-1.js)
    "Balanced sample": "균형 잡힌 표본",

    // widget string (assets/js/widgets-t4-1.js)
    "Right-skewed sample": "오른쪽 꼬리가 긴 표본",

    // widget string (assets/js/widgets-t4-1.js)
    "Compact low-IQR sample": "밀집된 낮은 IQR 표본",

    // widget string (assets/js/widgets-t4-1.js)
    "11th data value x₁₁": "11번째 자료값 x₁₁",

    // widget string (assets/js/widgets-t4-1.js)
    "Constant shift +k": "상수 이동 +k",

    // widget string (assets/js/widgets-t4-1.js)
    "Five-number summary": "다섯 수치 요약",

    // widget string (assets/js/widgets-t4-1.js)
    "IQR & outlier fences": "IQR과 이상치 울타리",

    // widget string (assets/js/widgets-t4-1.js)
    "Outlier test for x₁₁": "x₁₁ 이상치 판별",

    // widget string (assets/js/widgets-t4-1.js)
    "Box-and-whisker plot with 1.5 IQR lower and upper outlier fences": "1.5 IQR 아래·위 이상치 울타리가 표시된 상자수염그림",

    // widget string (assets/js/widgets-t4-1.js)
    "Upper outlier — whisker stops at": "위쪽 이상치 — 수염이 멈추는 지점:",

    // widget string (assets/js/widgets-t4-1.js)
    "Lower outlier — whisker stops at": "아래쪽 이상치 — 수염이 멈추는 지점:",

    // widget string (assets/js/widgets-t4-1.js)
    "Not an outlier": "이상치가 아님",

    // widget string (assets/js/widgets-t4-1.js)
    "Correlation r": "상관계수 r",

    // widget string (assets/js/widgets-t4-1.js)
    "Target y₀ (to predict x)": "목표 y₀ (x 예측용)",

    // widget string (assets/js/widgets-t4-1.js)
    "y on x line (predict y from x)": "y on x 직선 (x로 y 예측)",

    // widget string (assets/js/widgets-t4-1.js)
    "x on y line (predict x from y)": "x on y 직선 (y로 x 예측)",

    // widget string (assets/js/widgets-t4-1.js)
    "Estimate of x when y = y₀": "y = y₀일 때 x의 추정값",

    // widget string (assets/js/widgets-t4-1.js)
    "lines coincide since |r| = 1": "|r| = 1이므로 두 직선 일치",

    // widget string (assets/js/widgets-t4-1.js)
    "r = 0: lines are perpendicular!": "r = 0: 두 직선이 수직이에요!",

    // widget string (assets/js/widgets-t4-1.js)
    "via x on y": "x on y 직선 이용",

    // widget string (assets/js/widgets-t4-1.js)
    "wrong if rearranging y on x": "y on x를 이항하면 오답",

    // widget string (assets/js/widgets-t4-1.js)
    "y on x (predict y)": "y on x (y 예측)",

    // widget string (assets/js/widgets-t4-1.js)
    "x on y (predict x)": "x on y (x 예측)",

    // widget string (assets/js/widgets-t4-1.js)
    "Scatter plot with y-on-x and x-on-y regression lines intersecting at the mean point": "평균점에서 만나는 y-on-x와 x-on-y 회귀직선이 있는 산점도",

  }
});
