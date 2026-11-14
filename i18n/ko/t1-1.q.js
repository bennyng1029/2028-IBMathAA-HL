/* t1-1.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-1.q', {
  questions: {

    // ── t1-1-q001 · mcq · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q001": {
      // EN: <p>Let <span class="chem">A = 3.2 × 10^5</span> and <span class="chem">B = 8.0 × 10^{-3}</span>. Find the value of <span class="chem">A / B</span> in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>
      stem: "<p><span class=\"chem\">A = 3.2 × 10^5</span>이고 <span class=\"chem\">B = 8.0 × 10^{-3}</span>일 때, <span class=\"chem\">A / B</span>의 값을 <span class=\"chem\">a × 10^k</span> (<span class=\"chem\">1 &lt;= a &lt; 10</span>, <span class=\"chem\">k</span>는 정수) 꼴로 구하시오 (Find).</p>",
      options: [
        // EN: <span class="chem">4.0 × 10^7</span>
        "<span class=\"chem\">4.0 × 10^7</span>",
        // EN: <span class="chem">0.4 × 10^8</span>
        "<span class=\"chem\">0.4 × 10^8</span>",
        // EN: <span class=\"chem">4.0 × 10^2</span>
        "<span class=\"chem\">4.0 × 10^2</span>",
        // EN: <span class="chem">4.0 × 10^8</span>
        "<span class=\"chem\">4.0 × 10^8</span>",
      ],
      hints: [
        // EN: Divide the coefficients and subtract the powers of 10 separately: <span class="chem">(3.2 / 8.0) × 10^{5 - (-3)}</span>.
        "계수끼리 나누고 10의 거듭제곱의 지수는 따로 빼세요: <span class=\"chem\">(3.2 / 8.0) × 10^{5 - (-3)}</span>.",
        // EN: Adjust <span class="chem">0.4 × 10^8</span> so the leading number lies between 1 and 10.
        "앞의 수가 1 이상 10 미만이 되도록 <span class=\"chem\">0.4 × 10^8</span>을 조정하세요.",
      ],
      // EN: <div class="worked__math"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>",
      misconception: {
        // EN (option B): In standard form <span class="chem">a × 10^k</span>, the coefficient must satisfy <span class="chem">1 &lt;= a &lt; 10</span>. Write <span class="chem">0.4 × 10^8</span> as <span class="chem">4.0 × 10^7</span>.
        "1": "과학적 표기법 <span class=\"chem\">a × 10^k</span>에서 계수는 반드시 <span class=\"chem\">1 &lt;= a &lt; 10</span>을 만족해야 해요. <span class=\"chem\">0.4 × 10^8</span>을 <span class=\"chem\">4.0 × 10^7</span>로 고쳐 써야 해요.",
        // EN (option C): When dividing powers of 10, subtract the bottom exponent: <span class="chem">5 - (-3) = 8</span>, not <span class="chem">5 - 3 = 2</span>.
        "2": "10의 거듭제곱을 나눌 때는 분모의 지수를 빼야 해요: <span class=\"chem\">5 - 3 = 2</span>가 아니라 <span class=\"chem\">5 - (-3) = 8</span>이에요.",
        // EN (option D): Since <span class="chem">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span>, the exponent decreases from 8 to 7, not 8.
        "3": "<span class=\"chem\">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span>이므로, 지수는 8에서 7로 줄어들어야 하며 8이 아니에요.",
      },
    },

    // ── t1-1-q002 · numeric · foundation · SL · SL 1.2 · 3 marks
    "t1-1-q002": {
      // EN: <p>In an arithmetic sequence, the fourth term is <span class="chem">u_4 = 19</span> and the tenth term is <span class="chem">u_{10} = 43</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>등차수열에서 제4항이 <span class=\"chem\">u_4 = 19</span>이고 제10항이 <span class=\"chem\">u_{10} = 43</span>일 때, 첫째항 <span class=\"chem\">u_1</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: From <span class="chem">u_4</span> to <span class="chem">u_{10}</span> there are <span class="chem">10 - 4 = 6</span> steps of size <span class="chem">d</span>.
        "<span class=\"chem\">u_4</span>에서 <span class=\"chem\">u_{10}</span>까지는 공차 <span class=\"chem\">d</span>만큼 <span class=\"chem\">10 - 4 = 6</span>번 이동해요.",
        // EN: Once you find <span class="chem">d</span>, use <span class="chem">u_4 = u_1 + 3d = 19</span> to solve for <span class="chem">u_1</span>.
        "<span class=\"chem\">d</span>를 구한 뒤 <span class=\"chem\">u_4 = u_1 + 3d = 19</span>에 대입해 <span class=\"chem\">u_1</span>을 구하세요.",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class="worked__math"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>",
    },

    // ── t1-1-q003 · mcq · foundation · SL · SL 1.2 · 2 marks
    "t1-1-q003": {
      // EN: <p>How many terms are in the sum <span class="chem">Σ_{k=4}^{19} (5k - 2)</span>, and what is the first term of this sum?</p>
      stem: "<p>합 <span class=\"chem\">Σ_{k=4}^{19} (5k - 2)</span>에는 항이 몇 개 있으며, 이 합의 첫째항은 얼마인가요?</p>",
      options: [
        // EN: 15 terms, first term is 18
        "항 15개, 첫째항 18",
        // EN: 16 terms, first term is 18
        "항 16개, 첫째항 18",
        // EN: 16 terms, first term is 3
        "항 16개, 첫째항 3",
        // EN: 19 terms, first term is 18
        "항 19개, 첫째항 18",
      ],
      hints: [
        // EN: The number of integers from <span class="chem">a</span> to <span class="chem">b</span> inclusive is <span class="chem">b - a + 1</span>.
        "<span class=\"chem\">a</span>부터 <span class=\"chem\">b</span>까지의 정수 개수는 <span class=\"chem\">b - a + 1</span>개예요.",
        // EN: Substitute the bottom index <span class="chem">k = 4</span> into <span class="chem">5k - 2</span> to find the first term.
        "아래끝 <span class=\"chem\">k = 4</span>를 <span class=\"chem\">5k - 2</span>에 대입해 첫째항을 구하세요.",
      ],
      // EN: <p>There are <span class="chem">19 - 4 + 1 = 16</span> terms. Substituting <span class="chem">k = 4</span> gives the first term <span class="chem">5(4) - 2 = 18</span>.</p>
      solution: "<p>항의 개수는 <span class=\"chem\">19 - 4 + 1 = 16</span>개예요. <span class=\"chem\">k = 4</span>를 대입하면 첫째항은 <span class=\"chem\">5(4) - 2 = 18</span>이에요.</p>",
      misconception: {
        // EN (option A): Counting from <span class="chem">k = 4</span> to <span class="chem">k = 19</span> inclusive gives <span class="chem">19 - 4 + 1 = 16</span> terms, not <span class="chem">19 - 4 = 15</span>.
        "0": "<span class=\"chem\">k = 4</span>부터 <span class=\"chem\">k = 19</span>까지 양끝을 모두 포함해 세면 <span class=\"chem\">19 - 4 = 15</span>가 아니라 <span class=\"chem\">19 - 4 + 1 = 16</span>개예요.",
        // EN (option C): The lower limit of the sigma notation is <span class="chem">k = 4</span>, not <span class="chem">k = 1</span>. Substitute <span class="chem">k = 4</span> to get <span class="chem">5(4) - 2 = 18</span>.
        "2": "합의 기호의 아래끝은 <span class=\"chem\">k = 1</span>이 아니라 <span class=\"chem\">k = 4</span>예요. <span class=\"chem\">k = 4</span>를 대입해 <span class=\"chem\">5(4) - 2 = 18</span>을 구해야 해요.",
        // EN (option D): The sum starts at <span class="chem">k = 4</span>, so the terms for <span class="chem">k = 1, 2, 3</span> are not included.
        "3": "합이 <span class=\"chem\">k = 4</span>부터 시작하므로 <span class=\"chem\">k = 1, 2, 3</span>에 해당하는 항은 포함되지 않아요.",
      },
    },

    // ── t1-1-q004 · numeric · foundation · SL · SL 1.8 · 3 marks
    "t1-1-q004": {
      // EN: <p>A convergent geometric series has first term <span class="chem">u_1 = 36</span> and common ratio <span class="chem">r = -1/3</span>. Calculate the sum to infinity <span class="chem">S_infty</span>.</p>
      stem: "<p>수렴하는 등비급수의 첫째항이 <span class=\"chem\">u_1 = 36</span>이고 공비가 <span class=\"chem\">r = -1/3</span>일 때, 등비급수의 합 <span class=\"chem\">S_infty</span>를 계산하시오 (Calculate).</p>",
      hints: [
        // EN: Since <span class="chem">|r| = 1/3 &lt; 1</span>, the infinite series converges.
        "<span class=\"chem\">|r| = 1/3 &lt; 1</span>이므로 이 무한급수는 수렴해요.",
        // EN: Use <span class="chem">S_infty = u_1 / (1 - r)</span> and watch the double negative in <span class="chem">1 - (-1/3)</span>.
        "<span class=\"chem\">S_infty = u_1 / (1 - r)</span> 공식을 사용하고, <span class=\"chem\">1 - (-1/3)</span>의 부호에 주의하세요.",
      ],
      // EN: <div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>36</span><span>1 − (−1/3)</span></span> = <span class="frac"><span>36</span><span>4/3</span></span> = <b>27</b></div>
      solution: "<div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>36</span><span>1 − (−1/3)</span></span> = <span class=\"frac\"><span>36</span><span>4/3</span></span> = <b>27</b></div>",
    },

    // ── t1-1-q005 · numeric · foundation · SL · SL 1.4 · 3 marks
    "t1-1-q005": {
      // EN: <p>Maya invests 4500 USD in an account paying a nominal annual interest rate of 4.8%, compounded quarterly. Calculate the value of her investment after 6 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Maya는 명목 연이율 4.8%의 분기 복리 계좌에 4500 USD를 투자했어요. 6년 후 투자금의 가치를 계산하시오 (Calculate). 답은 소수점 아래 2자리까지 나타내시오.</p>",
      hints: [
        // EN: Quarterly compounding means <span class="chem">k = 4</span> compounding periods per year.
        "분기 복리는 연간 복리 횟수가 <span class=\"chem\">k = 4</span>임을 뜻해요.",
        // EN: Substitute <span class="chem">PV = 4500</span>, <span class="chem">r = 4.8</span>, <span class="chem">k = 4</span>, <span class="chem">n = 6</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>.
        "<span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span>에 <span class=\"chem\">PV = 4500</span>, <span class=\"chem\">r = 4.8</span>, <span class=\"chem\">k = 4</span>, <span class=\"chem\">n = 6</span>을 대입하세요.",
      ],
      // EN: <div class="worked__math"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>Correct to 2 decimal places, this is <strong>5991.63 USD</strong>.</p>
      solution: "<div class=\"worked__math\"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>소수점 아래 2자리까지 나타내면 <strong>5991.63 USD</strong>예요.</p>",
    },

    // ── t1-1-q006 · multi · foundation · SL · SL 1.8 · 2 marks
    "t1-1-q006": {
      // EN: <p>For which of the following geometric sequences does the sum to infinity <span class="chem">S_infty</span> exist? Select all that apply.</p>
      stem: "<p>다음 중 등비급수의 합 <span class=\"chem\">S_infty</span>가 존재하는 등비수열을 모두 고르시오.</p>",
      options: [
        // EN: <span class="chem">100, -60, 36, -21.6, ...</span>
        "<span class=\"chem\">100, -60, 36, -21.6, ...</span>",
        // EN: <span class="chem">1, 1.05, 1.1025, ...</span>
        "<span class=\"chem\">1, 1.05, 1.1025, ...</span>",
        // EN: <span class="chem">u_n = 12 × (3/4)^{n-1}</span>
        "<span class=\"chem\">u_n = 12 × (3/4)^{n-1}</span>",
        // EN: <span class="chem">8, -8, 8, -8, ...</span>
        "<span class=\"chem\">8, -8, 8, -8, ...</span>",
      ],
      hints: [
        // EN: A geometric series converges to a finite sum to infinity if and only if <span class="chem">|r| &lt; 1</span> (that is, <span class="chem">-1 &lt; r &lt; 1</span>).
        "등비급수가 유한한 합으로 수렴할 필요충분조건은 <span class=\"chem\">|r| &lt; 1</span>(즉, <span class=\"chem\">-1 &lt; r &lt; 1</span>)이에요.",
        // EN: Find <span class="chem">r = u_2 / u_1</span> for each sequence and check whether <span class="chem">|r| &lt; 1</span>.
        "각 수열의 공비 <span class=\"chem\">r = u_2 / u_1</span>을 구해 <span class=\"chem\">|r| &lt; 1</span>인지 확인하세요.",
      ],
      // EN: <p>The first sequence has <span class="chem">r = -60/100 = -0.6</span> (<span class="chem">|r| = 0.6 &lt; 1</span>) and the third has <span class="chem">r = 3/4</span> (<span class=\"chem\">|r| = 0.75 &lt; 1</span>). Both converge.</p>
      solution: "<p>첫 번째 수열은 <span class=\"chem\">r = -60/100 = -0.6</span> (<span class=\"chem\">|r| = 0.6 &lt; 1</span>)이고, 세 번째 수열은 <span class=\"chem\">r = 3/4</span> (<span class=\"chem\">|r| = 0.75 &lt; 1</span>)이므로 두 수열 모두 수렴해요.</p>",
      misconception: {
        // EN (option B): Here <span class="chem">r = 1.05</span>. Since <span class="chem">|r| &gt; 1</span>, the terms grow without bound and the sum diverges.
        "1": "여기서는 <span class=\"chem\">r = 1.05</span>예요. <span class=\"chem\">|r| &gt; 1</span>이므로 항이 한없이 커져 급수가 발산해요.",
        // EN (option D): Here <span class="chem">r = -1</span>. For convergence we strictly need <span class="chem">|r| &lt; 1</span>; when <span class="chem">r = -1</span> the partial sums oscillate between 8 and 0 without approaching a single limit.
        "3": "여기서는 <span class=\"chem\">r = -1</span>이에요. 수렴하려면 등호 없이 <span class=\"chem\">|r| &lt; 1</span>이어야 해요. <span class=\"chem\">r = -1</span>이면 부분합이 8과 0 사이를 진동해 하나의 극한값에 수렴하지 않아요.",
      },
    },

    // ── t1-1-q007 · numeric · exam · SL · SL 1.2 · 4 marks
    "t1-1-q007": {
      // EN: <p>Calculate the exact value of the arithmetic series <span class="chem">Σ_{k=5}^{24} (3k - 7)</span>.</p>
      stem: "<p>등차급수 <span class=\"chem\">Σ_{k=5}^{24} (3k - 7)</span>의 정확한 값(exact value)을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: First count the number of terms: from <span class="chem">k = 5</span> to <span class="chem">k = 24</span> inclusive there are <span class="chem">24 - 5 + 1 = 20</span> terms.
        "먼저 항의 개수를 세세요: <span class=\"chem\">k = 5</span>부터 <span class=\"chem\">k = 24</span>까지 양끝을 포함해 <span class=\"chem\">24 - 5 + 1 = 20</span>개의 항이 있어요.",
        // EN: Find the first term in the sum (<span class="chem">k = 5</span>) and the last term in the sum (<span class="chem">k = 24</span>), then use <span class="chem">S = (N/2)(first + last)</span>.
        "이 합의 첫째항(<span class=\"chem\">k = 5</span>)과 끝항(<span class=\"chem\">k = 24</span>)을 구한 뒤 <span class=\"chem\">S = (N/2)(first + last)</span>를 사용하세요.",
      ],
      // EN: <div class="worked__math">Number of terms <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class="worked__math">First term (<i>k</i> = 5): 3(5) − 7 = 8; Last term (<i>k</i> = 24): 3(24) − 7 = 65 <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">항의 개수 <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class=\"worked__math\">첫째항 (<i>k</i> = 5): 3(5) − 7 = 8; 끝항 (<i>k</i> = 24): 3(24) − 7 = 65 <b>[A1]</b></div><div class=\"worked__math\"><i>S</i> = <span class=\"frac\"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q008 · mcq · exam · SL · SL 1.2 · 4 marks
    "t1-1-q008": {
      // EN: <p>The sum of the first <span class="chem">n</span> terms of a sequence is given by <span class="chem">S_n = 2n^2 + 5n</span> for all <span class="chem">n &gt;= 1</span>. Find an expression for the <span class="chem">n</span>-th term <span class="chem">u_n</span>.</p>
      stem: "<p>모든 <span class=\"chem\">n &gt;= 1</span>에 대하여 수열의 첫째항부터 제<span class=\"chem\">n</span>항까지의 합이 <span class=\"chem\">S_n = 2n^2 + 5n</span>으로 주어졌어요. 제<span class=\"chem\">n</span>항 <span class=\"chem\">u_n</span>의 식을 구하시오 (Find).</p>",
      options: [
        // EN: <span class="chem">u_n = 4n + 3</span>
        "<span class=\"chem\">u_n = 4n + 3</span>",
        // EN: <span class="chem">u_n = 4n + 5</span>
        "<span class=\"chem\">u_n = 4n + 5</span>",
        // EN: <span class=\"chem">u_n = 4n + 7</span>
        "<span class=\"chem\">u_n = 4n + 7</span>",
        // EN: <span class="chem">u_n = 2n + 5</span>
        "<span class=\"chem\">u_n = 2n + 5</span>",
      ],
      hints: [
        // EN: Evaluate <span class="chem">u_1 = S_1</span> and <span class="chem">S_2 = u_1 + u_2</span> to find <span class="chem">u_1</span> and <span class="chem">u_2</span>.
        "<span class=\"chem\">u_1 = S_1</span>과 <span class=\"chem\">S_2 = u_1 + u_2</span>를 계산해 <span class=\"chem\">u_1</span>과 <span class=\"chem\">u_2</span>를 구하세요.",
        // EN: Alternatively, simplify <span class="chem">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span>.
        "또는 <span class=\"chem\">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span>을 직접 정리해 보세요.",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class="worked__math"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class="worked__math"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class=\"worked__math\"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class=\"worked__math\"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>",
      misconception: {
        // EN (option B): Taking the derivative of <span class="chem">2n^2 + 5n</span> gives <span class="chem">4n + 5</span>, which does not match <span class="chem">u_1 = S_1 = 7</span>.
        "1": "<span class=\"chem\">2n^2 + 5n</span>을 미분하면 <span class=\"chem\">4n + 5</span>가 나오지만, 이는 <span class=\"chem\">u_1 = S_1 = 7</span>과 맞지 않아요.",
        // EN (option C): Check the sign when expanding <span class="chem">-2(n - 1)^2 = -2n^2 + 4n - 2</span>. Writing <span class="chem">+2</span> instead gives <span class="chem">4n + 7</span>. Test <span class="chem">n = 1</span>: <span class="chem">u_1 = S_1 = 7</span>, but <span class="chem">4(1) + 7 = 11</span>.
        "2": "<span class=\"chem\">-2(n - 1)^2 = -2n^2 + 4n - 2</span>를 전개할 때 부호를 확인하세요. <span class=\"chem\">+2</span>로 쓰면 <span class=\"chem\">4n + 7</span>가 돼요. <span class=\"chem\">n = 1</span>을 대입해 보면 <span class=\"chem\">u_1 = S_1 = 7</span>이지만 <span class=\"chem\">4(1) + 7 = 11</span>이에요.",
        // EN (option D): Dividing <span class="chem">S_n</span> by <span class="chem">n</span> gives the average of the first <span class="chem">n</span> terms, not the <span class="chem">n</span>-th term <span class="chem">u_n</span>.
        "3": "<span class=\"chem\">S_n</span>을 <span class=\"chem\">n</span>으로 나누면 첫째항부터 제<span class=\"chem\">n</span>항까지의 평균이 나오지, 제<span class=\"chem\">n</span>항 <span class=\"chem\">u_n</span>이 아니에요.",
      },
    },

    // ── t1-1-q009 · numeric · exam · SL · SL 1.3 · 6 marks
    "t1-1-q009": {
      // EN: <p>The terms <span class="chem">3k + 1</span>, <span class="chem">4k - 12</span>, and <span class="chem">19 - 3k</span> are consecutive terms of a geometric sequence. Given that the infinite series formed by this sequence converges, find the value of the common ratio <span class="chem">r</span>.</p>
      stem: "<p>세 항 <span class=\"chem\">3k + 1</span>, <span class=\"chem\">4k - 12</span>, <span class=\"chem\">19 - 3k</span>가 등비수열의 연속하는 세 항이에요. 이 수열로 이루어진 무한급수가 수렴할 때, 공비 <span class=\"chem\">r</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: For three consecutive geometric terms, equate the common ratios: <span class="chem">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span>.
        "등비수열의 연속하는 세 항이므로 공비가 같음을 이용하세요: <span class=\"chem\">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span>.",
        // EN: Cross-multiply to form a quadratic in <span class="chem">k</span>, find both possible values of <span class="chem">k</span>, and test which one gives <span class="chem">|r| &lt; 1</span>.
        "대각선으로 곱해 <span class=\"chem\">k</span>에 대한 이차방정식을 만들고 두 <span class=\"chem\">k</span> 값을 구한 뒤, 어느 값이 <span class=\"chem\">|r| &lt; 1</span>을 만족하는지 확인하세요.",
      ],
      // EN: <div class="worked__math">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class="worked__math">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class="worked__math">If <i>k</i> = 1, the terms are 4, −8, 16 so <i>r</i> = −2 (diverges since |<i>r</i>| &gt; 1). If <i>k</i> = 5, the terms are 16, 8, 4 so <b><i>r</i> = 0.5</b> (converges since |<i>r</i>| &lt; 1). <b>[R1 A1]</b></div>
      solution: "<div class=\"worked__math\">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class=\"worked__math\">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>k</i> = 1이면 세 항은 4, −8, 16이므로 <i>r</i> = −2 (|<i>r</i>| &gt; 1이므로 발산). <i>k</i> = 5이면 세 항은 16, 8, 4이므로 <b><i>r</i> = 0.5</b> (|<i>r</i>| &lt; 1이므로 수렴). <b>[R1 A1]</b></div>",
    },

    // ── t1-1-q010 · numeric · exam · SL · SL 1.3 · 5 marks
    "t1-1-q010": {
      // EN: <p>A geometric series has first term <span class="chem">u_1 = 5</span> and common ratio <span class="chem">r = 1.4</span>. Find the least number of terms <span class="chem">n</span> required for the sum <span class="chem">S_n</span> to exceed 1500.</p>
      stem: "<p>첫째항이 <span class=\"chem\">u_1 = 5</span>이고 공비가 <span class=\"chem\">r = 1.4</span>인 등비급수에서, 합 <span class=\"chem\">S_n</span>이 1500을 초과하기 위한 최소 항의 개수 <span class=\"chem\">n</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the sum inequality: <span class="chem">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span>.
        "합의 부등식을 세우세요: <span class=\"chem\">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span>.",
        // EN: Rearrange to isolate <span class="chem">1.4^n &gt; 121</span>, take logarithms, and round up to the next integer.
        "식을 정리해 <span class=\"chem\">1.4^n &gt; 121</span>을 만든 뒤, 로그를 취하고 다음 정수로 올림하세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p>Since <span class="chem">n</span> must be a positive integer, the least number of terms is <strong>15</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p><span class=\"chem\">n</span>은 양의 정수여야 하므로 최소 항의 개수는 <strong>15</strong>예요. <b>[A1]</b></p>",
    },

    // ── t1-1-q011 · numeric · exam · SL · SL 1.8 · 5 marks
    "t1-1-q011": {
      // EN: <p>In a convergent geometric series with positive terms, the sum to infinity is <span class="chem">S_infty = 64</span> and the sum of the first three terms is <span class="chem">S_3 = 37</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>모든 항이 양수이고 수렴하는 등비급수에서 등비급수의 합이 <span class=\"chem\">S_infty = 64</span>이고 첫째항부터 제3항까지의 합이 <span class=\"chem\">S_3 = 37</span>이에요. 첫째항 <span class=\"chem\">u_1</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Divide <span class="chem">S_3 = u_1(1 - r^3)/(1 - r)</span> by <span class="chem">S_infty = u_1/(1 - r)</span> to eliminate <span class="chem">u_1</span> immediately.
        "<span class=\"chem\">S_3 = u_1(1 - r^3)/(1 - r)</span>을 <span class=\"chem\">S_infty = u_1/(1 - r)</span>로 나누면 <span class=\"chem\">u_1</span>을 바로 소거할 수 있어요.",
        // EN: Solve <span class="chem">1 - r^3 = 37/64</span> for <span class="chem">r</span>, then use <span class="chem">u_1 = 64(1 - r)</span>.
        "<span class=\"chem\">1 - r^3 = 37/64</span>에서 <span class=\"chem\">r</span>을 구한 뒤, <span class=\"chem\">u_1 = 64(1 - r)</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class="frac"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>r</i><sup>3</sup> = 1 − <span class="frac"><span>37</span><span>64</span></span> = <span class="frac"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class="frac"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class=\"frac\"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i><sup>3</sup> = 1 − <span class=\"frac\"><span>37</span><span>64</span></span> = <span class=\"frac\"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q012 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q012": {
      // EN: <p>A delivery van is purchased new for 38 000 EUR and depreciates by 16% of its value each year. Find the number of complete years it takes for the value of the van to fall below 12 000 EUR.</p>
      stem: "<p>새 배송용 밴을 38 000 EUR에 구입했고, 매년 가치가 16%씩 감가상각돼요. 이 밴의 가치가 12 000 EUR 미만으로 떨어지는 데 걸리는 꽉 찬 년수(complete years)를 구하시오 (Find).</p>",
      hints: [
        // EN: Losing 16% of its value each year means the value is multiplied by <span class="chem">r = 1 - 0.16 = 0.84</span> each year.
        "매년 가치가 16%씩 감소한다는 것은 매년 <span class=\"chem\">r = 1 - 0.16 = 0.84</span>가 곱해진다는 뜻이에요.",
        // EN: Solve <span class="chem">38000(0.84)^n &lt; 12000</span>. Remember that dividing by <span class="chem">ln(0.84) &lt; 0</span> reverses the inequality sign.
        "<span class=\"chem\">38000(0.84)^n &lt; 12000</span>을 푸세요. <span class=\"chem\">ln(0.84) &lt; 0</span>으로 나눌 때 부등호 방향이 반대로 바뀐다는 점을 기억하세요.",
      ],
      // EN: <div class="worked__math">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class="frac"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 years <b>[M1 A1]</b></div><p>It takes <strong>7</strong> complete years. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class=\"frac\"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61년 <b>[M1 A1]</b></div><p>꽉 찬 <strong>7</strong>년이 걸려요. <b>[A1]</b></p>",
    },

    // ── t1-1-q013 · order · exam · SL · SL 1.8 · 4 marks
    "t1-1-q013": {
      // EN: <p>Arrange these steps in the correct logical order to solve <span class="chem">Σ_{k=1}^infty 12 r^{k-1} = 16</span> and verify convergence.</p>
      stem: "<p><span class=\"chem\">Σ_{k=1}^infty 12 r^{k-1} = 16</span>을 풀고 수렴 여부를 확인하는 올바른 논리적 순서로 단계를 배열하시오.</p>",
      options: [
        // EN: Identify the first term <span class="chem">u_1 = 12</span> (when <span class="chem">k = 1</span>) and common ratio <span class="chem">r</span>.
        "첫째항 <span class=\"chem\">u_1 = 12</span> (<span class=\"chem\">k = 1</span>일 때)과 공비 <span class=\"chem\">r</span>을 파악해요.",
        // EN: Substitute into the infinite geometric sum formula: <span class="chem">12 / (1 - r) = 16</span>.
        "등비급수의 합 공식에 대입해요: <span class=\"chem\">12 / (1 - r) = 16</span>.",
        // EN: Rearrange to <span class=\"chem">1 - r = 12/16 = 3/4</span> and solve to get <span class=\"chem">r = 1/4</span>.
        "식을 정리해 <span class=\"chem\">1 - r = 12/16 = 3/4</span>을 얻고, 풀어서 <span class=\"chem\">r = 1/4</span>을 구해요.",
        // EN: Verify that <span class="chem">|r| = 1/4 &lt; 1</span> so the infinite series is valid and convergent.
        "<span class=\"chem\">|r| = 1/4 &lt; 1</span>임을 확인하여 무한급수가 타당하고 수렴함을 보여요.",
      ],
      hints: [
        // EN: First extract <span class="chem">u_1</span> and <span class="chem">r</span> from the sigma notation.
        "먼저 합의 기호에서 <span class=\"chem\">u_1</span>과 <span class=\"chem\">r</span>을 찾아내세요.",
        // EN: After solving the equation for <span class="chem">r</span>, always verify the convergence condition <span class="chem">|r| &lt; 1</span>.
        "<span class=\"chem\">r</span>에 대한 방정식을 푼 뒤에는 항상 수렴 조건 <span class=\"chem\">|r| &lt; 1</span>을 확인해야 해요.",
      ],
      // EN: <p>Setting <span class="chem">k = 1</span> gives <span class="chem">u_1 = 12</span>. Applying <span class="chem">S_infty = u_1/(1-r) = 16</span> yields <span class="chem">1 - r = 3/4</span> so <span class="chem">r = 1/4</span>, which satisfies <span class="chem">|r| &lt; 1</span>.</p>
      solution: "<p><span class=\"chem\">k = 1</span>을 대입하면 <span class=\"chem\">u_1 = 12</span>예요. <span class=\"chem\">S_infty = u_1/(1-r) = 16</span>을 적용하면 <span class=\"chem\">1 - r = 3/4</span>이므로 <span class=\"chem\">r = 1/4</span>이 되고, 이는 <span class=\"chem\">|r| &lt; 1</span>을 만족해요.</p>",
    },

    // ── t1-1-q014 · short · exam · SL · SL 1.2 · 6 marks
    "t1-1-q014": {
      // EN: <p>An arithmetic sequence has first term <span class="chem">u_1 = 9</span> and common difference <span class="chem">d = 2</span>. A geometric sequence has first term <span class="chem">v_1 = 2</span> and common ratio <span class="chem">r = 2</span>. Find the value of <span class="chem">n</span> for which the sum of the first <span class="chem">n</span> terms of the arithmetic sequence equals the 7th term of the geometric sequence.</p>
      stem: "<p>등차수열의 첫째항이 <span class=\"chem\">u_1 = 9</span>, 공차가 <span class=\"chem\">d = 2</span>이에요. 등비수열의 첫째항이 <span class=\"chem\">v_1 = 2</span>, 공비가 <span class=\"chem\">r = 2</span>예요. 등차수열의 첫째항부터 제<span class=\"chem\">n</span>항까지의 합이 등비수열의 제7항과 같아지는 <span class=\"chem\">n</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: First compute <span class="chem">v_7 = v_1 r^6</span>.
        "먼저 <span class=\"chem\">v_7 = v_1 r^6</span>을 계산하세요.",
        // EN: Set <span class="chem">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> and solve the resulting quadratic for <span class="chem">n &gt; 0</span>.
        "<span class=\"chem\">S_n = (n/2)(2u_1 + (n-1)d) = 128</span>로 두고 얻어진 이차방정식을 <span class=\"chem\">n &gt; 0</span> 조건으로 푸세요.",
      ],
      // EN: <p>Equating <span class="chem">S_n = n(n + 8)</span> to <span class="chem">v_7 = 128</span> gives <span class="chem">n^2 + 8n - 128 = 0</span>, which factorizes as <span class="chem">(n + 16)(n - 8) = 0</span>. Since <span class="chem">n</span> is a positive integer, <span class="chem">n = 8</span>.</p>
      solution: "<p><span class=\"chem\">S_n = n(n + 8)</span>를 <span class=\"chem\">v_7 = 128</span>과 같다고 두면 <span class=\"chem\">n^2 + 8n - 128 = 0</span>이 되고, <span class=\"chem\">(n + 16)(n - 8) = 0</span>으로 인수분해돼요. <span class=\"chem\">n</span>은 양의 정수이므로 <span class=\"chem\">n = 8</span>이에요.</p>",
      // EN: <div class="worked__math"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class="frac"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class="worked__math"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>
      answer: "<div class=\"worked__math\"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class=\"worked__math\"><i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class=\"worked__math\"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>",
      markscheme: [
        // EN: M1: Uses the geometric <span class="chem">n</span>-th term formula <span class="chem">v_7 = v_1 r^6</span>.
        "M1: 등비수열의 제<span class=\"chem\">n</span>항 공식 <span class=\"chem\">v_7 = v_1 r^6</span>을 이용함.",
        // EN: A1: <span class="chem">v_7 = 2 × 2^6 = 128</span>.
        "A1: <span class=\"chem\">v_7 = 2 × 2^6 = 128</span>.",
        // EN: M1: Substitutes <span class="chem">u_1 = 9</span> and <span class="chem">d = 2</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 128.
        "M1: <span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span>에 <span class=\"chem\">u_1 = 9</span>와 <span class=\"chem\">d = 2</span>를 대입하고 128과 같다고 둠.",
        // EN: A1: Simplifies to <span class="chem">n(n + 8) = 128</span>, i.e. <span class="chem">n^2 + 8n - 128 = 0</span>.
        "A1: <span class=\"chem\">n(n + 8) = 128</span>, 즉 <span class=\"chem\">n^2 + 8n - 128 = 0</span>으로 정리함.",
        // EN: M1: Factorizes as <span class="chem">(n + 16)(n - 8) = 0</span> or uses the quadratic formula.
        "M1: <span class=\"chem\">(n + 16)(n - 8) = 0</span>으로 인수분해하거나 근의 공식을 사용함.",
        // EN: A1: Selects <span class="chem">n = 8</span> (rejecting <span class="chem">n = -16</span> since <span class="chem">n</span> is a positive integer).
        "A1: <span class=\"chem\">n = 8</span>을 선택함 (<span class=\"chem\">n</span>이 양의 정수이므로 <span class=\"chem\">n = -16</span>은 제외).",
      ],
    },

    // ── t1-1-q015 · numeric · challenge · SL · SL 1.3 · 5 marks
    "t1-1-q015": {
      // EN: <p>The first, fourth, and tenth terms of a non-constant arithmetic sequence form the first three consecutive terms of a geometric sequence. Find the common ratio <span class="chem">r</span> of the geometric sequence.</p>
      stem: "<p>공차가 0이 아닌 등차수열의 제1항, 제4항, 제10항이 이 순서대로 등비수열의 첫 세 항을 이뤄요. 이 등비수열의 공비 <span class=\"chem\">r</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “non-constant” means <span class="chem">d != 0</span>, which you will need when you divide. “Form a geometric sequence” gives one equation: the middle term squared equals the product of the other two.
        "해석: \"상수열이 아니다\"는 <span class=\"chem\">d != 0</span>이라는 뜻이며, 나중에 나눌 때 필요합니다. \"등비수열을 이룬다\"에서 방정식 하나가 나옵니다: 가운데 항의 제곱은 나머지 두 항의 곱과 같습니다.",
        // EN: Write the three arithmetic terms in terms of <span class="chem">u_1</span> and <span class="chem">d</span>: <span class="chem">u_1</span>, <span class="chem">u_1 + 3d</span>, and <span class="chem">u_1 + 9d</span>.
        "등차수열의 세 항을 <span class=\"chem\">u_1</span>과 <span class=\"chem\">d</span>로 나타내세요: <span class=\"chem\">u_1</span>, <span class=\"chem\">u_1 + 3d</span>, <span class=\"chem\">u_1 + 9d</span>.",
        // EN: Since they form a geometric sequence, equate the ratio: <span class="chem">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> and solve for <span class="chem">u_1</span> in terms of <span class="chem">d</span> (knowing <span class=\"chem">d != 0</span>).
        "등비수열을 이루므로 비가 같음을 이용하세요: <span class=\"chem\">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span>에서 <span class=\"chem\">d != 0</span>임을 이용해 <span class=\"chem\">u_1</span>을 <span class=\"chem\">d</span>로 나타내세요.",
      ],
      // EN: <div class="worked__math">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class="worked__math">Since <i>d</i> ≠ 0, <i>u</i><sub>1</sub> = 3<i>d</i>. Then <i>r</i> = <span class="frac"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class="frac"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>
      solution: "<div class=\"worked__math\">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class=\"worked__math\"><i>d</i> ≠ 0이므로 <i>u</i><sub>1</sub> = 3<i>d</i>예요. 따라서 <i>r</i> = <span class=\"frac\"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class=\"frac\"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>",
    },

    // ── t1-1-q016 · numeric · challenge · SL · SL 1.3 · 4 marks
    "t1-1-q016": {
      // EN: <p>At the <strong>start</strong> of every year, Leo deposits 2000 USD into a savings plan that pays 5% interest per annum compounded annually. Find the total value of the savings plan at the <strong>end</strong> of the 10th year. Give your answer correct to 2 decimal places.</p>
      stem: "<p>매년 <strong>초</strong>에 Leo는 연이율 5%의 연 복리 저축 상품에 2000 USD씩 입금해요. 10년째 <strong>말</strong>에 이 저축 상품의 총액(원리합계)을 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오.</p>",
      hints: [
        // EN: Decode: regular deposits make a geometric series, not a single compound-interest calculation. “At the start of every year” means each deposit earns interest in the year it is made, so count how many years of interest each deposit receives.
        "해석: 정기 적립은 한 번의 복리 계산이 아니라 등비급수를 이룹니다. \"매년 초\"는 각 적립금이 입금된 그해부터 이자를 받는다는 뜻이므로, 각 적립금이 몇 년 치 이자를 받는지 세어 보세요.",
        // EN: Draw a timeline! The 10th deposit (made at the start of year 10) earns interest for 1 full year, so its final value is <span class="chem">2000(1.05)^1</span>. The 1st deposit earns interest for 10 full years: <span class="chem">2000(1.05)^{10}</span>.
        "시간선을 그려 보세요! 10번째 입금액(10년째 초 입금)은 1년 동안 이자가 붙어 <span class=\"chem\">2000(1.05)^1</span>이 되고, 1번째 입금액은 10년 동안 이자가 붙어 <span class=\"chem\">2000(1.05)^{10}</span>이 돼요.",
        // EN: Sum the 10 geometric terms with first term <span class="chem">a = 2000(1.05) = 2100</span>, ratio <span class="chem">r = 1.05</span>, and <span class="chem">n = 10</span>.
        "첫째항 <span class=\"chem\">a = 2000(1.05) = 2100</span>, 공비 <span class=\"chem\">r = 1.05</span>, 항수 <span class=\"chem\">n = 10</span>인 등비급수 10개 항의 합을 구하세요.",
      ],
      // EN: <div class="worked__math">Total = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>10</sub> = <span class="frac"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">총액 = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>S</i><sub>10</sub> = <span class=\"frac\"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q017 · short · challenge · SL · SL 1.8 · 7 marks
    "t1-1-q017": {
      // EN: <p>Consider the infinite geometric series <span class="chem">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>.<br>(a) Find the set of values of <span class="chem">x</span> for which the series converges. <strong>[4]</strong><br>(b) Find the value of <span class="chem">x</span> in this set for which the sum to infinity is equal to <span class="chem">2</span>. <strong>[3]</strong></p>
      stem: "<p>무한등비급수 <span class=\"chem\">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>을 생각하자.<br>(a) 이 급수가 수렴하는 <span class=\"chem\">x</span>의 값의 집합을 구하시오 (Find). <strong>[4]</strong><br>(b) 이 집합 안에서 등비급수의 합이 <span class=\"chem\">2</span>가 되는 <span class=\"chem\">x</span>의 값을 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: compare the terms for <span class="chem">n = 1</span> and <span class="chem">n = 2</span>: the first term is <span class="chem">2x - 1</span> and the common ratio is <span class="chem">x^2 - 3</span>. Part (a) is the condition <span class="chem">|r| &lt; 1</span>; in part (b) the answer must lie in the set from (a).
        "해석: <span class=\"chem\">n = 1</span>과 <span class=\"chem\">n = 2</span>일 때의 항을 비교하면 첫째항은 <span class=\"chem\">2x - 1</span>, 공비는 <span class=\"chem\">x^2 - 3</span>입니다. (a)는 조건 <span class=\"chem\">|r| &lt; 1</span>이고, (b)의 답은 (a)에서 구한 범위 안에 있어야 합니다.",
        // EN: For part (a), solve the double inequality <span class="chem">-1 &lt; x^2 - 3 &lt; 1</span> by adding 3 to all parts.
        "(a)에서는 연립부등식 <span class=\"chem\">-1 &lt; x^2 - 3 &lt; 1</span>의 각 변에 3을 더해 푸세요.",
        // EN: For part (b), solve <span class="chem">(2x - 1)/(4 - x^2) = 2</span> and check which root satisfies <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "(b)에서는 <span class=\"chem\">(2x - 1)/(4 - x^2) = 2</span>를 풀고 어느 근이 <span class=\"chem\">2 &lt; x^2 &lt; 4</span>를 만족하는지 확인하세요.",
      ],
      // EN: <p>Note that for <span class="chem">x = (-1 + sqrt(19))/2</span>, we have <span class="chem">2x^2 = 9 - 2x = 10 - sqrt(19)</span>, so <span class="chem">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>, which lies strictly between 2 and 4.</p>
      solution: "<p><span class=\"chem\">x = (-1 + sqrt(19))/2</span>일 때 <span class=\"chem\">2x^2 = 9 - 2x = 10 - sqrt(19)</span>이므로 <span class=\"chem\">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>가 되어 2와 4 사이에 정확히 들어가요.</p>",
      // EN: <div class="worked__math">(a) Common ratio <i>r</i> = <i>x</i><sup>2</sup> − 3. Convergence requires |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4.</div><div class="worked__math">Thus −2 &lt; <i>x</i> &lt; −√2  or  √2 &lt; <i>x</i> &lt; 2.</div><div class="worked__math">(b) <span class="frac"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class="frac"><span>−1 + √19</span><span>2</span></span></b></div>
      answer: "<div class=\"worked__math\">(a) 공비 <i>r</i> = <i>x</i><sup>2</sup> − 3. 수렴 조건은 |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4.</div><div class=\"worked__math\">따라서 −2 &lt; <i>x</i> &lt; −√2  또는  √2 &lt; <i>x</i> &lt; 2.</div><div class=\"worked__math\">(b) <span class=\"frac\"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class=\"frac\"><span>−1 + √19</span><span>2</span></span></b></div>",
      markscheme: [
        // EN: M1: Identifies the common ratio <span class="chem">r = x^2 - 3</span> and sets <span class="chem">|x^2 - 3| &lt; 1</span>.
        "M1: 공비 <span class=\"chem\">r = x^2 - 3</span>을 파악하고 <span class=\"chem\">|x^2 - 3| &lt; 1</span>을 세움.",
        // EN: A1: Rewrites the inequality as <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "A1: 부등식을 <span class=\"chem\">2 &lt; x^2 &lt; 4</span>로 고쳐 씀.",
        // EN: A1: Obtains the interval <span class="chem">-2 &lt; x &lt; -sqrt(2)</span>.
        "A1: 구간 <span class=\"chem\">-2 &lt; x &lt; -sqrt(2)</span>를 구함.",
        // EN: A1: Obtains the interval <span class="chem">sqrt(2) &lt; x &lt; 2</span>.
        "A1: 구간 <span class=\"chem\">sqrt(2) &lt; x &lt; 2</span>를 구함.",
        // EN: M1: Sets <span class="chem">S_infty = (2x - 1)/(4 - x^2) = 2</span> and rearranges to <span class="chem">2x^2 + 2x - 9 = 0</span>.
        "M1: <span class=\"chem\">S_infty = (2x - 1)/(4 - x^2) = 2</span>로 두고 <span class=\"chem\">2x^2 + 2x - 9 = 0</span>으로 정리함.",
        // EN: A1: Finds the roots <span class="chem">x = (-1 +- sqrt(19))/2</span>.
        "A1: 근 <span class=\"chem\">x = (-1 +- sqrt(19))/2</span>를 구함.",
        // EN: R1: Rejects <span class="chem">(-1 - sqrt(19))/2 ≈ -2.68</span> (outside the interval) and keeps <span class="chem">x = (-1 + sqrt(19))/2 ≈ 1.68</span> (inside <span class="chem">(sqrt(2), 2)</span>).
        "R1: <span class=\"chem\">(-1 - sqrt(19))/2 ≈ -2.68</span> (구간 밖)을 제외하고 <span class=\"chem\">x = (-1 + sqrt(19))/2 ≈ 1.68</span> (<span class=\"chem\">(sqrt(2), 2)</span> 안)을 선택함.",
      ],
    },

    // ── t1-1-q018 · numeric · exam · SL · SL 1.4 · 3 marks
    "t1-1-q018": {
      // EN: <p>Ines invests 5000 EUR in an account that pays 4% interest per annum, compounded annually. The annual inflation rate is expected to be 2.5% throughout. Using the real interest rate <span class="chem">(4 - 2.5)%</span>, find the real value of her investment after 8 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Ines는 연이율 4%, 연 복리 계좌에 5000 EUR를 투자했어요. 연간 인플레이션율은 계속 2.5%로 예상돼요. 실질 이자율 <span class=\"chem\">(4 - 2.5)%</span>를 이용해 8년 후 투자의 실질 가치를 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오.</p>",
      hints: [
        // EN: The real value removes the effect of inflation, so use the interest rate minus the inflation rate: <span class="chem">r = 4 - 2.5 = 1.5</span>.
        "실질 가치는 인플레이션의 영향을 뺀 값이므로 이자율에서 인플레이션율을 뺀 값을 사용해요: <span class=\"chem\">r = 4 - 2.5 = 1.5</span>.",
        // EN: Substitute <span class="chem">PV = 5000</span>, <span class="chem">r = 1.5</span>, <span class="chem">k = 1</span>, <span class="chem">n = 8</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>, or use the Finance Solver with <span class="mono">I% = 1.5</span>.
        "<span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span>에 <span class=\"chem\">PV = 5000</span>, <span class=\"chem\">r = 1.5</span>, <span class=\"chem\">k = 1</span>, <span class=\"chem\">n = 8</span>을 대입하거나 Finance Solver에서 <span class=\"mono\">I% = 1.5</span>로 두세요.",
      ],
      // EN: <div class="worked__math">Real rate = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class="worked__math">Real value = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>Correct to 2 decimal places, the real value is <strong>5632.46 EUR</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">실질 이자율 = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class=\"worked__math\">실질 가치 = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>소수점 아래 2자리까지 나타내면 실질 가치는 <strong>5632.46 EUR</strong>예요. <b>[A1]</b></p>",
    },
  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't1-1.q', {
  questions: {

    // ── t1-1-q019 · numeric · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q019": {
      // EN: <p>The number <span class="chem">(3.6 × 10^4) × (5.0 × 10^{-9})</span> can be written in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>수 <span class=\"chem\">(3.6 × 10^4) × (5.0 × 10^{-9})</span>는 <span class=\"chem\">a × 10^k</span> (<span class=\"chem\">1 &lt;= a &lt; 10</span>, <span class=\"chem\">k</span>는 정수) 꼴로 나타낼 수 있어요. <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Multiply the leading numbers and add the powers of 10 separately: <span class="chem">(3.6 × 5.0) × 10^{4 + (-9)}</span>.
        "앞의 수끼리 곱하고 10의 지수끼리는 따로 더하세요: <span class=\"chem\">(3.6 × 5.0) × 10^{4 + (-9)}</span>.",
        // EN: The product of the leading numbers is greater than 10, so move one factor of 10 into the power.
        "앞의 수끼리의 곱이 10보다 크므로 10을 하나 지수 쪽으로 옮기세요.",
      ],
      // EN: <div class="worked__math">(3.6 × 5.0) × 10<sup>4 − 9</sup> = 18 × 10<sup>−5</sup> <b>[M1]</b></div><div class="worked__math">18 × 10<sup>−5</sup> = 1.8 × 10<sup>1</sup> × 10<sup>−5</sup> = 1.8 × 10<sup>−4</sup>, so <b><i>k</i> = −4</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(3.6 × 5.0) × 10<sup>4 − 9</sup> = 18 × 10<sup>−5</sup>   <b>[M1]</b></div><div class=\"worked__math\">18 × 10<sup>−5</sup> = 1.8 × 10<sup>1</sup> × 10<sup>−5</sup> = 1.8 × 10<sup>−4</sup>, 따라서 <b><i>k</i> = −4</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q020 · numeric · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q020": {
      // EN: <p>One light year is <span class="chem">9.461 × 10^{15}</span> metres. A star is 4.24 light years from the Sun. Calculate this distance in metres. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer, with <span class="chem">a</span> correct to 3 significant figures.</p>
      stem: "<p>1광년은 <span class=\"chem\">9.461 × 10^{15}</span>미터예요. 어떤 별은 태양으로부터 4.24광년 떨어져 있어요. 이 거리를 미터 단위로 계산하시오 (Calculate). 답은 <span class=\"chem\">a × 10^k</span> (<span class=\"chem\">1 &lt;= a &lt; 10</span>, <span class=\"chem\">k</span>는 정수) 꼴로 나타내고, <span class=\"chem\">a</span>는 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Multiply: distance = <span class="chem">4.24 × 9.461 × 10^{15}</span>. On the GDC, enter the power of 10 with the <span class="mono">EE</span> (or <span class="mono">×10ˣ</span>) key.
        "곱하세요: 거리 = <span class=\"chem\">4.24 × 9.461 × 10^{15}</span>. GDC에서는 10의 거듭제곱을 <span class=\"mono\">EE</span> (또는 <span class=\"mono\">×10ˣ</span>) 키로 입력해요.",
        // EN: Round the leading number to 3 significant figures and check that it lies between 1 and 10.
        "앞의 수를 유효숫자 3자리로 반올림하고, 그 수가 1과 10 사이에 있는지 확인하세요.",
      ],
      // EN: <div class="worked__math">4.24 × 9.461 × 10<sup>15</sup> = 40.114… × 10<sup>15</sup> <b>[M1]</b></div><div class="worked__math">= 4.0114… × 10<sup>16</sup> ≈ <b>4.01 × 10<sup>16</sup> m</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">4.24 × 9.461 × 10<sup>15</sup> = 40.114… × 10<sup>15</sup>   <b>[M1]</b></div><div class=\"worked__math\">= 4.0114… × 10<sup>16</sup> ≈ <b>4.01 × 10<sup>16</sup> m</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q021 · numeric · foundation · SL · SL 1.3 · 3 marks
    "t1-1-q021": {
      // EN: <p>In a geometric sequence, <span class="chem">u_2 = 6</span> and <span class="chem">u_5 = 162</span>. Find <span class="chem">u_7</span>.</p>
      stem: "<p>어떤 등비수열에서 <span class=\"chem\">u_2 = 6</span>, <span class=\"chem\">u_5 = 162</span>예요. <span class=\"chem\">u_7</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: From <span class="chem">u_2</span> to <span class="chem">u_5</span> you multiply by <span class="chem">r</span> three times, so <span class="chem">r^3 = 162/6</span>.
        "<span class=\"chem\">u_2</span>에서 <span class=\"chem\">u_5</span>까지는 <span class=\"chem\">r</span>을 세 번 곱하므로 <span class=\"chem\">r^3 = 162/6</span>이에요.",
        // EN: Once you have <span class="chem">r</span>, go from <span class="chem">u_2</span> to <span class="chem">u_7</span>: that is five more multiplications by <span class="chem">r</span>.
        "<span class=\"chem\">r</span>을 구했으면 <span class=\"chem\">u_2</span>에서 <span class=\"chem\">u_7</span>으로 가세요: <span class=\"chem\">r</span>을 다섯 번 더 곱하면 돼요.",
      ],
      // EN: <div class="worked__math"><i>r</i><sup>3</sup> = <span class="frac"><span>162</span><span>6</span></span> = 27 <b>[M1]</b></div><div class="worked__math"><i>r</i> = 3 <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>7</sub> = <i>u</i><sub>2</sub><i>r</i><sup>5</sup> = 6 × 243 = <b>1458</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>r</i><sup>3</sup> = <span class=\"frac\"><span>162</span><span>6</span></span> = 27   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>7</sub> = <i>u</i><sub>2</sub><i>r</i><sup>5</sup> = 6 × 243 = <b>1458</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q022 · numeric · foundation · SL · SL 1.4 · 3 marks
    "t1-1-q022": {
      // EN: <p>A laptop is bought for 1850 GBP. Its value decreases by 22% each year. Calculate its value after 4 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>노트북을 1850 GBP에 샀어요. 노트북의 가치는 매년 22%씩 감소해요. 4년 후의 가치를 계산하시오 (Calculate). 답은 소수점 아래 2자리까지 나타내시오.</p>",
      hints: [
        // EN: Losing 22% each year means the value is multiplied by <span class="chem">1 - 0.22 = 0.78</span> each year.
        "매년 22%씩 줄어든다는 것은 가치에 매년 <span class=\"chem\">1 - 0.22 = 0.78</span>을 곱한다는 뜻이에요.",
        // EN: Value after 4 years <span class="chem">= 1850 × 0.78^4</span>. On the Finance Solver: <span class="mono">N = 4, I% = −22, PV = −1850, PMT = 0, P/Y = C/Y = 1</span>, solve for FV.
        "4년 후의 가치 <span class=\"chem\">= 1850 × 0.78^4</span>. Finance Solver에서는 <span class=\"mono\">N = 4, I% = −22, PV = −1850, PMT = 0, P/Y = C/Y = 1</span>로 두고 FV를 구하세요.",
      ],
      // EN: <div class="worked__math">Multiplier = 1 − 0.22 = 0.78 <b>[M1]</b></div><div class="worked__math"><i>V</i> = 1850 × 0.78<sup>4</sup> <b>[M1]</b></div><div class="worked__math">= 684.778… ≈ <b>684.78 GBP</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">곱하는 수(배율) = 1 − 0.22 = 0.78   <b>[M1]</b></div><div class=\"worked__math\"><i>V</i> = 1850 × 0.78<sup>4</sup>   <b>[M1]</b></div><div class=\"worked__math\">= 684.778… ≈ <b>684.78 GBP</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q023 · numeric · exam · SL · SL 1.2 · 5 marks
    "t1-1-q023": {
      // EN: <p>Given that <span class="chem">Σ_{r=1}^{n} (4r + 3) = 1375</span>, find the value of <span class="chem">n</span>.</p>
      stem: "<p><span class=\"chem\">Σ_{r=1}^{n} (4r + 3) = 1375</span>일 때, <span class=\"chem\">n</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write out the first two terms (<span class="chem">r = 1, 2</span>): the sum is arithmetic with first term 7 and common difference 4.
        "처음 두 항(<span class=\"chem\">r = 1, 2</span>)을 써 보세요: 이 합은 첫째항이 7, 공차가 4인 등차급수예요.",
        // EN: Use <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span>, simplify to a quadratic in <span class="chem">n</span> and factorize.
        "<span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span>를 이용해 <span class=\"chem\">n</span>에 대한 이차방정식으로 정리하고 인수분해하세요.",
        // EN: You should reach <span class="chem">2n^2 + 5n - 1375 = 0</span>. Remember that <span class="chem">n</span> is a positive integer.
        "<span class=\"chem\">2n^2 + 5n - 1375 = 0</span>이 나와야 해요. <span class=\"chem\">n</span>은 양의 정수라는 점을 기억하세요.",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = 7, <i>d</i> = 4 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(14 + 4(<i>n</i> − 1)) = 2<i>n</i><sup>2</sup> + 5<i>n</i> <b>[M1 A1]</b></div><div class="worked__math">2<i>n</i><sup>2</sup> + 5<i>n</i> − 1375 = 0 ⇒ (2<i>n</i> + 55)(<i>n</i> − 25) = 0 <b>[M1]</b></div><div class="worked__math">Since <i>n</i> is a positive integer, <b><i>n</i> = 25</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = 7, <i>d</i> = 4   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(14 + 4(<i>n</i> − 1)) = 2<i>n</i><sup>2</sup> + 5<i>n</i>   <b>[M1 A1]</b></div><div class=\"worked__math\">2<i>n</i><sup>2</sup> + 5<i>n</i> − 1375 = 0  ⇒  (2<i>n</i> + 55)(<i>n</i> − 25) = 0   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i>은 양의 정수이므로 <b><i>n</i> = 25</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q024 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q024": {
      // EN: <p>A theatre has 30 rows of seats. The front row has 18 seats, and each row has 3 more seats than the row in front of it.</p><p>(a) Write down the number of seats in the second row. <strong>[1]</strong><br>(b) Find the number of seats in the back row. <strong>[2]</strong><br>(c) Find the total number of seats in the theatre. <strong>[2]</strong><br>(d) For a small concert, only the first <span class="chem">n</span> rows (starting from the front) are opened. Find the least value of <span class="chem">n</span> for which at least 1000 seats are available. <strong>[3]</strong></p>
      stem: "<p>어떤 극장에는 좌석이 30줄 있어요. 맨 앞줄에는 좌석이 18개 있고, 각 줄은 바로 앞줄보다 좌석이 3개씩 더 많아요.</p><p>(a) 둘째 줄의 좌석 수를 쓰시오 (Write down). <strong>[1]</strong><br>(b) 맨 뒷줄의 좌석 수를 구하시오 (Find). <strong>[2]</strong><br>(c) 극장의 전체 좌석 수를 구하시오 (Find). <strong>[2]</strong><br>(d) 작은 음악회에서는 (맨 앞줄부터) 처음 <span class=\"chem\">n</span>개의 줄만 개방해요. 이용할 수 있는 좌석이 1000개 이상이 되는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: the numbers of seats in the rows form an arithmetic sequence with <span class="chem">u_1 = 18</span> and <span class="chem">d = 3</span>. Parts (b) and (c) use <span class="chem">u_n</span> and <span class="chem">S_n</span>; part (d) asks for the least <span class="chem">n</span> with <span class="chem">S_n &gt;= 1000</span>.
        "해석: 각 줄의 좌석 수는 <span class=\"chem\">u_1 = 18</span>, <span class=\"chem\">d = 3</span>인 등차수열을 이룹니다. (b)와 (c)에서는 <span class=\"chem\">u_n</span>과 <span class=\"chem\">S_n</span>을 이용하고, (d)에서는 <span class=\"chem\">S_n &gt;= 1000</span>을 만족하는 가장 작은 <span class=\"chem\">n</span>을 구합니다.",
        // EN: For (d), write <span class="chem">S_n = (n/2)(36 + 3(n - 1))</span> and use the GDC: graph it against <span class="chem">y = 1000</span>, or look down a table of values.
        "(d)에서는 <span class=\"chem\">S_n = (n/2)(36 + 3(n - 1))</span>로 쓰고 GDC를 이용하세요: <span class=\"chem\">y = 1000</span>과 함께 그래프를 그리거나 값의 표를 차례로 살펴보세요.",
        // EN: The root of <span class="chem">S_n = 1000</span> is not a whole number. Round up, because <span class="chem">n</span> is a number of rows.
        "<span class=\"chem\">S_n = 1000</span>의 근은 정수가 아니에요. <span class=\"chem\">n</span>은 줄의 개수이므로 올림하세요.",
      ],
      // EN: <p>The decoding step: "each row has 3 more seats" means an arithmetic sequence. Then (b) is a term, (c) is a sum, and (d) is an inequality in <span class="chem">n</span>. The equation <span class="chem">3n^2 + 33n - 2000 = 0</span> has positive root <span class="chem">n ≈ 20.9</span>, so 20 rows give only 930 seats and 21 rows give 1008. The least value is <span class="chem">n = 21</span>.</p>
      solution: "<p>해석 단계: \"각 줄은 좌석이 3개씩 더 많다\"는 등차수열을 뜻해요. 그러면 (b)는 항, (c)는 합, (d)는 <span class=\"chem\">n</span>에 대한 부등식이에요. 방정식 <span class=\"chem\">3n^2 + 33n - 2000 = 0</span>의 양의 근은 <span class=\"chem\">n ≈ 20.9</span>이므로 20줄이면 좌석이 930개뿐이고 21줄이면 1008개예요. 최솟값은 <span class=\"chem\">n = 21</span>이에요.</p>",
      // EN: <div class="worked__math">(a) 18 + 3 = <b>21</b></div><div class="worked__math">(b) <i>u</i><sub>30</sub> = 18 + 29 × 3 = <b>105</b></div><div class="worked__math">(c) <i>S</i><sub>30</sub> = <span class="frac"><span>30</span><span>2</span></span>(18 + 105) = <b>1845</b></div><div class="worked__math">(d) <span class="frac"><span><i>n</i></span><span>2</span></span>(36 + 3(<i>n</i> − 1)) ≥ 1000. GDC: <i>S</i><sub>20</sub> = 930, <i>S</i><sub>21</sub> = 1008 (or the root <i>n</i> ≈ 20.9), so <b><i>n</i> = 21</b></div>
      answer: "<div class=\"worked__math\">(a) 18 + 3 = <b>21</b></div><div class=\"worked__math\">(b) <i>u</i><sub>30</sub> = 18 + 29 × 3 = <b>105</b></div><div class=\"worked__math\">(c) <i>S</i><sub>30</sub> = <span class=\"frac\"><span>30</span><span>2</span></span>(18 + 105) = <b>1845</b></div><div class=\"worked__math\">(d) <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(36 + 3(<i>n</i> − 1)) ≥ 1000. GDC: <i>S</i><sub>20</sub> = 930, <i>S</i><sub>21</sub> = 1008 (또는 근 <i>n</i> ≈ 20.9), 따라서 <b><i>n</i> = 21</b></div>",
      markscheme: [
        // EN: A1: (a) 21 seats.
        "A1: (a) 좌석 21개.",
        // EN: M1: (b) Uses <span class="chem">u_{30} = u_1 + 29d</span> with <span class="chem">u_1 = 18</span>, <span class="chem">d = 3</span>.
        "M1: (b) <span class=\"chem\">u_1 = 18</span>, <span class=\"chem\">d = 3</span>으로 <span class=\"chem\">u_{30} = u_1 + 29d</span>를 이용함.",
        // EN: A1: (b) 105 seats.
        "A1: (b) 좌석 105개.",
        // EN: M1: (c) Uses <span class="chem">S_{30} = (30/2)(18 + 105)</span> or <span class="chem">(30/2)(36 + 29 × 3)</span>.
        "M1: (c) <span class=\"chem\">S_{30} = (30/2)(18 + 105)</span> 또는 <span class=\"chem\">(30/2)(36 + 29 × 3)</span>을 이용함.",
        // EN: A1: (c) 1845 seats.
        "A1: (c) 좌석 1845개.",
        // EN: M1: (d) Sets up <span class="chem">(n/2)(36 + 3(n - 1)) &gt;= 1000</span> (an equation is acceptable).
        "M1: (d) <span class=\"chem\">(n/2)(36 + 3(n - 1)) &gt;= 1000</span>을 세움 (방정식도 인정).",
        // EN: A1: (d) Uses the GDC: root <span class="chem">n ≈ 20.9</span>, or the table values <span class="chem">S_{20} = 930</span> and <span class="chem">S_{21} = 1008</span>.
        "A1: (d) GDC를 이용함: 근 <span class=\"chem\">n ≈ 20.9</span>, 또는 표의 값 <span class=\"chem\">S_{20} = 930</span>과 <span class=\"chem\">S_{21} = 1008</span>.",
        // EN: A1: (d) <span class="chem">n = 21</span>.
        "A1: (d) <span class=\"chem\">n = 21</span>.",
      ],
    },

    // ── t1-1-q025 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q025": {
      // EN: <p>The fifth term of an arithmetic sequence is 23 and the sum of the first 12 terms is 348.</p><p>(a) Show that <span class="chem">2u_1 + 11d = 58</span>. <strong>[2]</strong><br>(b) Find the value of <span class="chem">u_1</span> and the value of <span class="chem">d</span>. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">u_n &gt; 500</span>. <strong>[3]</strong></p>
      stem: "<p>어떤 등차수열의 제5항은 23이고, 첫째항부터 제12항까지의 합은 348이에요.</p><p>(a) <span class=\"chem\">2u_1 + 11d = 58</span>임을 보이시오 (Show that). <strong>[2]</strong><br>(b) <span class=\"chem\">u_1</span>의 값과 <span class=\"chem\">d</span>의 값을 구하시오 (Find). <strong>[3]</strong><br>(c) <span class=\"chem\">u_n &gt; 500</span>을 만족하는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: For (a), the only formula involving a sum of 12 terms is <span class="chem">S_{12} = (12/2)(2u_1 + 11d)</span>.
        "(a)에서 12개 항의 합이 들어 있는 공식은 <span class=\"chem\">S_{12} = (12/2)(2u_1 + 11d)</span>뿐이에요.",
        // EN: For (b), "the fifth term is 23" gives a second equation, <span class="chem">u_1 + 4d = 23</span>. Solve the pair simultaneously.
        "(b)에서 \"제5항은 23\"으로부터 두 번째 방정식 <span class=\"chem\">u_1 + 4d = 23</span>을 얻어요. 두 식을 연립하여 푸세요.",
        // EN: For (c), solve <span class="chem">u_n = 500</span>, then choose the next integer above the root.
        "(c)에서는 <span class=\"chem\">u_n = 500</span>을 풀고, 그 근보다 큰 바로 다음 정수를 고르세요.",
      ],
      // EN: <p>Two facts give two equations: <span class="chem">u_1 + 4d = 23</span> and <span class="chem">2u_1 + 11d = 58</span>. Doubling the first and subtracting gives <span class="chem">3d = 12</span>, so <span class="chem">d = 4</span> and <span class="chem">u_1 = 7</span>. Then <span class="chem">u_n = 4n + 3</span>, and <span class="chem">4n + 3 &gt; 500</span> gives <span class="chem">n &gt; 124.25</span>, so the least value is <span class="chem">n = 125</span>. Check: <span class="chem">u_{124} = 499</span> and <span class="chem">u_{125} = 503</span>.</p>
      solution: "<p>두 조건에서 두 방정식을 얻어요: <span class=\"chem\">u_1 + 4d = 23</span>과 <span class=\"chem\">2u_1 + 11d = 58</span>. 첫 번째 식을 2배 해서 빼면 <span class=\"chem\">3d = 12</span>이므로 <span class=\"chem\">d = 4</span>, <span class=\"chem\">u_1 = 7</span>이에요. 그러면 <span class=\"chem\">u_n = 4n + 3</span>이고, <span class=\"chem\">4n + 3 &gt; 500</span>에서 <span class=\"chem\">n &gt; 124.25</span>이므로 최솟값은 <span class=\"chem\">n = 125</span>예요. 확인: <span class=\"chem\">u_{124} = 499</span>, <span class=\"chem\">u_{125} = 503</span>.</p>",
      // EN: <div class="worked__math">(a) <i>S</i><sub>12</sub> = <span class="frac"><span>12</span><span>2</span></span>(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348 ⇒ 6(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348 ⇒ 2<i>u</i><sub>1</sub> + 11<i>d</i> = 58</div><div class="worked__math">(b) <i>u</i><sub>1</sub> + 4<i>d</i> = 23, so 2<i>u</i><sub>1</sub> + 8<i>d</i> = 46. Subtracting: 3<i>d</i> = 12, so <b><i>d</i> = 4</b> and <b><i>u</i><sub>1</sub> = 7</b></div><div class="worked__math">(c) 7 + 4(<i>n</i> − 1) &gt; 500 ⇒ 4<i>n</i> + 3 &gt; 500 ⇒ <i>n</i> &gt; 124.25, so <b><i>n</i> = 125</b></div>
      answer: "<div class=\"worked__math\">(a) <i>S</i><sub>12</sub> = <span class=\"frac\"><span>12</span><span>2</span></span>(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  6(2<i>u</i><sub>1</sub> + 11<i>d</i>) = 348  ⇒  2<i>u</i><sub>1</sub> + 11<i>d</i> = 58</div><div class=\"worked__math\">(b) <i>u</i><sub>1</sub> + 4<i>d</i> = 23이므로 2<i>u</i><sub>1</sub> + 8<i>d</i> = 46. 빼면 3<i>d</i> = 12, 따라서 <b><i>d</i> = 4</b>, <b><i>u</i><sub>1</sub> = 7</b></div><div class=\"worked__math\">(c) 7 + 4(<i>n</i> − 1) &gt; 500  ⇒  4<i>n</i> + 3 &gt; 500  ⇒  <i>n</i> &gt; 124.25, 따라서 <b><i>n</i> = 125</b></div>",
      markscheme: [
        // EN: M1: (a) Substitutes <span class="chem">n = 12</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 348.
        "M1: (a) <span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span>에 <span class=\"chem\">n = 12</span>를 대입하고 348과 같다고 둠.",
        // EN: A1: (a) Obtains <span class="chem">6(2u_1 + 11d) = 348</span>, which leads to the given result <span class="chem">2u_1 + 11d = 58</span> (the given line itself earns no mark).
        "A1: (a) <span class=\"chem\">6(2u_1 + 11d) = 348</span>을 얻어 주어진 결과 <span class=\"chem\">2u_1 + 11d = 58</span>을 이끌어 냄 (주어진 식 자체에는 점수 없음).",
        // EN: M1: (b) Writes <span class="chem">u_1 + 4d = 23</span> and solves it simultaneously with <span class="chem">2u_1 + 11d = 58</span>.
        "M1: (b) <span class=\"chem\">u_1 + 4d = 23</span>을 쓰고 <span class=\"chem\">2u_1 + 11d = 58</span>과 연립하여 풂.",
        // EN: A1: (b) <span class="chem">d = 4</span>.
        "A1: (b) <span class=\"chem\">d = 4</span>.",
        // EN: A1: (b) <span class="chem">u_1 = 7</span>.
        "A1: (b) <span class=\"chem\">u_1 = 7</span>.",
        // EN: M1: (c) Sets up <span class="chem">7 + 4(n - 1) &gt; 500</span> (an equation is acceptable).
        "M1: (c) <span class=\"chem\">7 + 4(n - 1) &gt; 500</span>을 세움 (방정식도 인정).",
        // EN: A1: (c) <span class="chem">n &gt; 124.25</span> (or <span class="chem">n = 124.25</span>).
        "A1: (c) <span class=\"chem\">n &gt; 124.25</span> (또는 <span class=\"chem\">n = 124.25</span>).",
        // EN: A1: (c) <span class="chem">n = 125</span>.
        "A1: (c) <span class=\"chem\">n = 125</span>.",
      ],
    },

    // ── t1-1-q026 · short · exam · SL · SL 1.2 · 8 marks
    "t1-1-q026": {
      // EN: <p>A science fair had 1210 visitors in year 1, 1295 in year 2, 1388 in year 3, 1462 in year 4 and 1550 in year 5.</p><p>(a) Explain why the numbers of visitors do not form an arithmetic sequence. <strong>[1]</strong><br>(b) Show that the mean of the four year-on-year increases is 85. <strong>[2]</strong><br>The organisers model the number of visitors in year <span class="chem">n</span> by the arithmetic sequence <span class="chem">u_n = 1210 + 85(n - 1)</span>.<br>(c) Use the model to predict the number of visitors in year 10. <strong>[2]</strong><br>(d) Use the model to predict the total number of visitors in the first 10 years. <strong>[2]</strong><br>(e) Explain why the model may not be reliable for predicting the number of visitors in year 30. <strong>[1]</strong></p>
      stem: "<p>어떤 과학 박람회의 방문객 수는 1년째 1210명, 2년째 1295명, 3년째 1388명, 4년째 1462명, 5년째 1550명이었어요.</p><p>(a) 방문객 수가 등차수열을 이루지 않는 이유를 설명하시오 (Explain). <strong>[1]</strong><br>(b) 전년 대비 네 증가량의 평균이 85임을 보이시오 (Show that). <strong>[2]</strong><br>주최 측은 <span class=\"chem\">n</span>년째의 방문객 수를 등차수열 <span class=\"chem\">u_n = 1210 + 85(n - 1)</span>로 모델링해요.<br>(c) 이 모델을 이용해 10년째의 방문객 수를 예측하시오. <strong>[2]</strong><br>(d) 이 모델을 이용해 처음 10년 동안의 전체 방문객 수를 예측하시오. <strong>[2]</strong><br>(e) 이 모델이 30년째의 방문객 수를 예측하는 데 신뢰할 수 없을 수도 있는 이유를 설명하시오 (Explain). <strong>[1]</strong></p>",
      hints: [
        // EN: Decode: real data are only roughly arithmetic. The question asks you to test for a common difference, build an arithmetic model from the average difference, and then use <span class="chem">u_n</span> and <span class="chem">S_n</span> of the model.
        "해석: 실제 데이터는 대략적으로만 등차예요. 이 문제는 공차가 있는지 확인하고, 평균 차로 등차수열 모델을 만든 다음, 그 모델의 <span class=\"chem\">u_n</span>과 <span class=\"chem\">S_n</span>을 이용하라는 거예요.",
        // EN: For (a), work out the four differences between consecutive years.
        "(a)에서는 이웃한 해 사이의 네 차를 계산하세요.",
        // EN: For (d), the model is arithmetic, so <span class="chem">S_{10} = (10/2)(u_1 + u_{10})</span> uses your answer to (c).
        "(d)에서 모델은 등차수열이므로 <span class=\"chem\">S_{10} = (10/2)(u_1 + u_{10})</span>에 (c)의 답을 이용해요.",
      ],
      // EN: <p>Decoding: the context is a model that is "not perfectly arithmetic". The differences 85, 93, 74, 88 are not constant, so the data are not exactly arithmetic, but they are close to a constant 85 on average. Using <span class="chem">d = 85</span> gives <span class="chem">u_{10} = 1975</span> and <span class="chem">S_{10} = 5(1210 + 1975) = 15925</span>. Predictions far outside the data range (extrapolation) are less reliable.</p>
      solution: "<p>해석: 이 상황은 \"완벽하게 등차는 아닌\" 모델이에요. 차 85, 93, 74, 88은 일정하지 않으므로 데이터는 정확히 등차는 아니지만, 평균적으로는 일정한 값 85에 가까워요. <span class=\"chem\">d = 85</span>를 이용하면 <span class=\"chem\">u_{10} = 1975</span>, <span class=\"chem\">S_{10} = 5(1210 + 1975) = 15925</span>예요. 데이터 범위를 훨씬 벗어난 예측(외삽)은 신뢰도가 떨어져요.</p>",
      // EN: <div class="worked__math">(a) The increases are 85, 93, 74, 88: they are not constant.</div><div class="worked__math">(b) <span class="frac"><span>85 + 93 + 74 + 88</span><span>4</span></span> = <span class="frac"><span>340</span><span>4</span></span> = 85 (equivalently <span class="frac"><span>1550 − 1210</span><span>4</span></span>)</div><div class="worked__math">(c) <i>u</i><sub>10</sub> = 1210 + 9 × 85 = <b>1975</b></div><div class="worked__math">(d) <i>S</i><sub>10</sub> = <span class="frac"><span>10</span><span>2</span></span>(1210 + 1975) = <b>15 925</b></div><div class="worked__math">(e) Year 30 is far outside the data (years 1 to 5), and the real increases vary from year to year, so the error can build up.</div>
      answer: "<div class=\"worked__math\">(a) 증가량은 85, 93, 74, 88로 일정하지 않음.</div><div class=\"worked__math\">(b) <span class=\"frac\"><span>85 + 93 + 74 + 88</span><span>4</span></span> = <span class=\"frac\"><span>340</span><span>4</span></span> = 85 (같은 방법으로 <span class=\"frac\"><span>1550 − 1210</span><span>4</span></span>)</div><div class=\"worked__math\">(c) <i>u</i><sub>10</sub> = 1210 + 9 × 85 = <b>1975</b></div><div class=\"worked__math\">(d) <i>S</i><sub>10</sub> = <span class=\"frac\"><span>10</span><span>2</span></span>(1210 + 1975) = <b>15 925</b></div><div class=\"worked__math\">(e) 30년째는 데이터(1년째부터 5년째)를 훨씬 벗어나 있고, 실제 증가량은 해마다 달라지므로 오차가 누적될 수 있음.</div>",
      markscheme: [
        // EN: R1: (a) States that the differences (85, 93, 74, 88) are not all equal, so there is no common difference.
        "R1: (a) 차(85, 93, 74, 88)가 모두 같지는 않으므로 공차가 없다고 서술함.",
        // EN: M1: (b) Adds the four increases (or uses <span class="chem">1550 - 1210</span>) and divides by 4.
        "M1: (b) 네 증가량을 더하고(또는 <span class=\"chem\">1550 - 1210</span>을 이용하고) 4로 나눔.",
        // EN: A1: (b) Obtains the total increase <span class="chem">340</span>, so <span class="chem">340/4 = 85</span> (the given result itself earns no mark).
        "A1: (b) 전체 증가량 <span class=\"chem\">340</span>을 얻어 <span class=\"chem\">340/4 = 85</span> (주어진 결과 자체에는 점수 없음).",
        // EN: M1: (c) Substitutes <span class="chem">n = 10</span>: <span class="chem">1210 + 9 × 85</span>.
        "M1: (c) <span class=\"chem\">n = 10</span>을 대입함: <span class=\"chem\">1210 + 9 × 85</span>.",
        // EN: A1: (c) 1975 visitors.
        "A1: (c) 방문객 1975명.",
        // EN: M1: (d) Uses <span class="chem">S_{10} = (10/2)(1210 + 1975)</span> or <span class="chem">(10/2)(2 × 1210 + 9 × 85)</span>.
        "M1: (d) <span class=\"chem\">S_{10} = (10/2)(1210 + 1975)</span> 또는 <span class=\"chem\">(10/2)(2 × 1210 + 9 × 85)</span>를 이용함.",
        // EN: A1: (d) 15 925 visitors.
        "A1: (d) 방문객 15 925명.",
        // EN: R1: (e) Any valid reason, e.g. extrapolation far beyond the 5 years of data, or the real increases are not constant.
        "R1: (e) 타당한 이유면 인정, 예: 5년치 데이터를 훨씬 넘어선 외삽이거나, 실제 증가량이 일정하지 않음.",
      ],
    },

    // ── t1-1-q027 · numeric · challenge · SL · SL 1.2, 1.3 · 5 marks
    "t1-1-q027": {
      // EN: <p>Priya is offered two jobs. In Offer A, the annual salary is 42 000 EUR in the first year and rises by 1500 EUR each year after that. In Offer B, the annual salary is 38 000 EUR in the first year and rises by 5% each year after that. Find the first year in which the annual salary in Offer B is greater than the annual salary in Offer A.</p>
      stem: "<p>Priya는 두 가지 일자리 제안을 받았어요. 제안 A는 첫해 연봉이 42 000 EUR이고 그 후 매년 1500 EUR씩 올라요. 제안 B는 첫해 연봉이 38 000 EUR이고 그 후 매년 5%씩 올라요. 제안 B의 연봉이 제안 A의 연봉보다 처음으로 많아지는 해를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: Offer A is an arithmetic sequence and Offer B is a geometric sequence. You must find the least integer <span class="chem">n</span> for which the <span class="chem">n</span>-th term of B is bigger than the <span class="chem">n</span>-th term of A (salaries in one year, not totals).
        "해석: 제안 A는 등차수열, 제안 B는 등비수열이에요. B의 제<span class=\"chem\">n</span>항이 A의 제<span class=\"chem\">n</span>항보다 커지는 가장 작은 정수 <span class=\"chem\">n</span>을 구해야 해요 (합계가 아니라 한 해의 연봉을 비교).",
        // EN: Write <span class="chem">A_n = 42000 + 1500(n - 1)</span> and <span class="chem">B_n = 38000(1.05)^{n-1}</span>. Note the power is <span class="chem">n - 1</span>: there is no rise in year 1.
        "<span class=\"chem\">A_n = 42000 + 1500(n - 1)</span>, <span class=\"chem\">B_n = 38000(1.05)^{n-1}</span>로 쓰세요. 지수가 <span class=\"chem\">n - 1</span>임에 주의하세요: 1년째에는 인상이 없어요.",
        // EN: This inequality mixes a linear and an exponential expression, so solve it with the GDC: graph both and find the intersection, or compare a table of values.
        "이 부등식은 일차식과 지수식이 섞여 있으므로 GDC로 푸세요: 두 그래프를 그려 교점을 찾거나 값의 표를 비교하세요.",
      ],
      // EN: <p>Decoding: "rises by 1500 each year" is arithmetic, "rises by 5% each year" is geometric, and "annual salary" means individual terms.</p><div class="worked__math"><i>A</i><sub><i>n</i></sub> = 42000 + 1500(<i>n</i> − 1) <b>[M1]</b></div><div class="worked__math"><i>B</i><sub><i>n</i></sub> = 38000(1.05)<sup><i>n</i>−1</sup> <b>[M1]</b></div><div class="worked__math">GDC table or graph of <i>B</i><sub><i>n</i></sub> − <i>A</i><sub><i>n</i></sub> <b>[M1]</b></div><div class="worked__math">Year 7: <i>A</i> = 51 000, <i>B</i> = 50 923.63; year 8: <i>A</i> = 52 500, <i>B</i> = 53 469.82 <b>[A1]</b></div><div class="worked__math">First year: <b>year 8</b> <b>[A1]</b></div>
      solution: "<p>해석: \"매년 1500씩 오른다\"는 등차, \"매년 5%씩 오른다\"는 등비이고, \"연봉\"은 각각의 항을 뜻해요.</p><div class=\"worked__math\"><i>A</i><sub><i>n</i></sub> = 42000 + 1500(<i>n</i> − 1)   <b>[M1]</b></div><div class=\"worked__math\"><i>B</i><sub><i>n</i></sub> = 38000(1.05)<sup><i>n</i>−1</sup>   <b>[M1]</b></div><div class=\"worked__math\"><i>B</i><sub><i>n</i></sub> − <i>A</i><sub><i>n</i></sub>의 GDC 표 또는 그래프   <b>[M1]</b></div><div class=\"worked__math\">7년째: <i>A</i> = 51 000, <i>B</i> = 50 923.63; 8년째: <i>A</i> = 52 500, <i>B</i> = 53 469.82   <b>[A1]</b></div><div class=\"worked__math\">처음으로 많아지는 해: <b>8년째</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q028 · numeric · challenge · SL · SL 1.2, 1.3 · 5 marks
    "t1-1-q028": {
      // EN: <p>A sports club offers two membership plans. On Plan P, the fee is 300 GBP for the first year and goes up by 25 GBP every year after that. On Plan Q, the fee is 240 GBP for the first year and goes up by 8% every year after that. Ravi intends to stay a member for <span class="chem">N</span> complete years. Find the largest value of <span class="chem">N</span> for which the total amount Ravi pays on Plan Q is less than the total amount he would pay on Plan P.</p>
      stem: "<p>어떤 스포츠 클럽에는 두 가지 회원 요금제가 있어요. 요금제 P는 첫해 회비가 300 GBP이고 그 후 매년 25 GBP씩 올라요. 요금제 Q는 첫해 회비가 240 GBP이고 그 후 매년 8%씩 올라요. Ravi는 꽉 찬 <span class=\"chem\">N</span>년 동안 회원으로 있을 생각이에요. Ravi가 요금제 Q로 내는 총액이 요금제 P로 낼 총액보다 적어지는 <span class=\"chem\">N</span>의 최댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this time "total amount paid" means you compare sums, not single fees. Plan P gives an arithmetic series, Plan Q a geometric series. You want the largest <span class="chem">N</span> with <span class="chem">S_Q(N) &lt; S_P(N)</span>.
        "해석: 이번에는 \"낸 총액\"이므로 한 해의 회비가 아니라 합을 비교해요. 요금제 P는 등차급수, 요금제 Q는 등비급수가 돼요. <span class=\"chem\">S_Q(N) &lt; S_P(N)</span>을 만족하는 가장 큰 <span class=\"chem\">N</span>을 구해야 해요.",
        // EN: Write <span class="chem">S_P = (N/2)(600 + 25(N - 1))</span> and <span class="chem">S_Q = 240(1.08^N - 1)/0.08</span>.
        "<span class=\"chem\">S_P = (N/2)(600 + 25(N - 1))</span>, <span class=\"chem\">S_Q = 240(1.08^N - 1)/0.08</span>로 쓰세요.",
        // EN: Use a GDC table of both sums (or graph their difference) and look for the last year in which Plan Q is still cheaper.
        "GDC로 두 합의 표를 만들고(또는 두 합의 차를 그래프로 그리고) 요금제 Q가 아직 더 싼 마지막 해를 찾으세요.",
      ],
      // EN: <p>Decoding: "total amount" means sums; P is arithmetic (<span class="chem">u_1 = 300</span>, <span class="chem">d = 25</span>) and Q is geometric (<span class="chem">u_1 = 240</span>, <span class="chem">r = 1.08</span>). Q starts cheaper but grows faster.</p><div class="worked__math"><i>S</i><sub>P</sub>(<i>N</i>) = <span class="frac"><span><i>N</i></span><span>2</span></span>(600 + 25(<i>N</i> − 1)) <b>[M1]</b></div><div class="worked__math"><i>S</i><sub>Q</sub>(<i>N</i>) = <span class="frac"><span>240(1.08<sup><i>N</i></sup> − 1)</span><span>0.08</span></span> <b>[M1]</b></div><div class="worked__math">GDC table: <i>N</i> = 19: <i>S</i><sub>P</sub> = 9975, <i>S</i><sub>Q</sub> = 9947.10 <b>[M1 A1]</b></div><div class="worked__math"><i>N</i> = 20: <i>S</i><sub>P</sub> = 10 750, <i>S</i><sub>Q</sub> = 10 982.87, so the largest value is <b><i>N</i> = 19</b> <b>[A1]</b></div>
      solution: "<p>해석: \"총액\"은 합을 뜻해요. P는 등차(<span class=\"chem\">u_1 = 300</span>, <span class=\"chem\">d = 25</span>), Q는 등비(<span class=\"chem\">u_1 = 240</span>, <span class=\"chem\">r = 1.08</span>)예요. Q는 처음에는 더 싸지만 더 빠르게 늘어나요.</p><div class=\"worked__math\"><i>S</i><sub>P</sub>(<i>N</i>) = <span class=\"frac\"><span><i>N</i></span><span>2</span></span>(600 + 25(<i>N</i> − 1))   <b>[M1]</b></div><div class=\"worked__math\"><i>S</i><sub>Q</sub>(<i>N</i>) = <span class=\"frac\"><span>240(1.08<sup><i>N</i></sup> − 1)</span><span>0.08</span></span>   <b>[M1]</b></div><div class=\"worked__math\">GDC 표: <i>N</i> = 19: <i>S</i><sub>P</sub> = 9975, <i>S</i><sub>Q</sub> = 9947.10   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>N</i> = 20: <i>S</i><sub>P</sub> = 10 750, <i>S</i><sub>Q</sub> = 10 982.87, 따라서 최댓값은 <b><i>N</i> = 19</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q029 · numeric · exam · SL · SL 1.3 · 4 marks
    "t1-1-q029": {
      // EN: <p>Find the value of <span class="chem">Σ_{k=3}^{10} 5 × 2^k</span>.</p>
      stem: "<p><span class=\"chem\">Σ_{k=3}^{10} 5 × 2^k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Substitute <span class="chem">k = 3</span> and <span class="chem">k = 4</span> to find the first term and the common ratio.
        "<span class=\"chem\">k = 3</span>과 <span class=\"chem\">k = 4</span>를 대입해 첫째항과 공비를 구하세요.",
        // EN: There are <span class="chem">10 - 3 + 1 = 8</span> terms. Use <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>.
        "항은 모두 <span class=\"chem\">10 - 3 + 1 = 8</span>개예요. <span class=\"chem\">S_n = u_1(r^n - 1)/(r - 1)</span>을 이용하세요.",
      ],
      // EN: <div class="worked__math">First term (<i>k</i> = 3): 5 × 8 = 40; <i>r</i> = 2 <b>[A1]</b></div><div class="worked__math">Number of terms = 10 − 3 + 1 = 8 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>8</sub> = <span class="frac"><span>40(2<sup>8</sup> − 1)</span><span>2 − 1</span></span> = 40 × 255 <b>[M1]</b></div><div class="worked__math">= <b>10 200</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">첫째항(<i>k</i> = 3): 5 × 8 = 40; <i>r</i> = 2   <b>[A1]</b></div><div class=\"worked__math\">항의 개수 = 10 − 3 + 1 = 8   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>8</sub> = <span class=\"frac\"><span>40(2<sup>8</sup> − 1)</span><span>2 − 1</span></span> = 40 × 255   <b>[M1]</b></div><div class=\"worked__math\">= <b>10 200</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q030 · numeric · exam · SL · SL 1.3 · 3 marks
    "t1-1-q030": {
      // EN: <p>Calculate <span class="chem">Σ_{k=1}^{20} 150(0.93)^k</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">Σ_{k=1}^{20} 150(0.93)^k</span>를 계산하시오 (Calculate). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Careful: the power is <span class="chem">k</span>, not <span class="chem">k - 1</span>, so the first term (<span class="chem">k = 1</span>) is <span class="chem">150 × 0.93 = 139.5</span>.
        "주의: 지수가 <span class=\"chem\">k - 1</span>이 아니라 <span class=\"chem\">k</span>이므로 첫째항(<span class=\"chem\">k = 1</span>)은 <span class=\"chem\">150 × 0.93 = 139.5</span>예요.",
        // EN: Use <span class="chem">S_{20} = 139.5(1 - 0.93^{20})/(1 - 0.93)</span>, or type the sum directly into the GDC with the <span class="mono">Σ</span> template.
        "<span class=\"chem\">S_{20} = 139.5(1 - 0.93^{20})/(1 - 0.93)</span>을 이용하거나, GDC의 <span class=\"mono\">Σ</span> 템플릿으로 합을 직접 입력하세요.",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = 139.5, <i>r</i> = 0.93, 20 terms <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>20</sub> = <span class="frac"><span>139.5(1 − 0.93<sup>20</sup>)</span><span>0.07</span></span> <b>[M1]</b></div><div class="worked__math">= 1526.05… ≈ <b>1530</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = 139.5, <i>r</i> = 0.93, 20개 항   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>20</sub> = <span class=\"frac\"><span>139.5(1 − 0.93<sup>20</sup>)</span><span>0.07</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 1526.05… ≈ <b>1530</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q031 · numeric · exam · SL · SL 1.3 · 5 marks
    "t1-1-q031": {
      // EN: <p>A geometric sequence has positive terms. The third term is 7.2 and the seventh term is 1.2. Find the sum of the first 15 terms. Give your answer correct to 3 significant figures.</p>
      stem: "<p>어떤 등비수열의 모든 항은 양수예요. 제3항은 7.2이고 제7항은 1.2예요. 첫째항부터 제15항까지의 합을 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: From <span class="chem">u_3</span> to <span class="chem">u_7</span> you multiply by <span class="chem">r</span> four times: <span class="chem">r^4 = 1.2/7.2</span>.
        "<span class=\"chem\">u_3</span>에서 <span class=\"chem\">u_7</span>까지는 <span class=\"chem\">r</span>을 네 번 곱해요: <span class=\"chem\">r^4 = 1.2/7.2</span>.",
        // EN: The terms are positive, so take the positive fourth root. Keep the full GDC value of <span class="chem">r</span> stored in memory.
        "모든 항이 양수이므로 양의 네제곱근을 택하세요. GDC에서 얻은 <span class=\"chem\">r</span>의 값은 반올림하지 말고 메모리에 저장해 두세요.",
        // EN: Find <span class="chem">u_1 = u_3 / r^2</span>, then <span class="chem">S_{15} = u_1(1 - r^{15})/(1 - r)</span>.
        "<span class=\"chem\">u_1 = u_3 / r^2</span>을 구한 다음 <span class=\"chem\">S_{15} = u_1(1 - r^{15})/(1 - r)</span>을 구하세요.",
      ],
      // EN: <div class="worked__math"><i>r</i><sup>4</sup> = <span class="frac"><span>1.2</span><span>7.2</span></span> = <span class="frac"><span>1</span><span>6</span></span> <b>[M1]</b></div><div class="worked__math"><i>r</i> = 0.638943… (positive terms) <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>7.2</span><span><i>r</i><sup>2</sup></span></span> = 17.6363… <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>15</sub> = <span class="frac"><span>17.6363…(1 − <i>r</i><sup>15</sup>)</span><span>1 − <i>r</i></span></span> <b>[M1]</b></div><div class="worked__math">= 48.787… ≈ <b>48.8</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>r</i><sup>4</sup> = <span class=\"frac\"><span>1.2</span><span>7.2</span></span> = <span class=\"frac\"><span>1</span><span>6</span></span>   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 0.638943… (모든 항이 양수)   <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <span class=\"frac\"><span>7.2</span><span><i>r</i><sup>2</sup></span></span> = 17.6363…   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>15</sub> = <span class=\"frac\"><span>17.6363…(1 − <i>r</i><sup>15</sup>)</span><span>1 − <i>r</i></span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 48.787… ≈ <b>48.8</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q032 · short · challenge · SL · SL 1.3, 1.8 · 12 marks
    "t1-1-q032": {
      // EN: <p>A ball is dropped from a height of 3.2 m onto a hard floor. After each bounce, it rises to 78% of the height it fell from.</p><p>(a) Find the height the ball reaches after the third bounce. <strong>[2]</strong><br>(b) Find the number of the first bounce after which the ball rises to a height of less than 10 cm. <strong>[3]</strong><br>(c) Find the total vertical distance the ball has travelled from the moment it is dropped until it hits the floor for the 12th time. <strong>[4]</strong><br>(d) Show that, however long the ball keeps bouncing, the total vertical distance it travels is less than 26 m. <strong>[3]</strong></p>
      stem: "<p>공을 3.2 m 높이에서 단단한 바닥으로 떨어뜨려요. 공은 튈 때마다 떨어진 높이의 78%까지 올라가요.</p><p>(a) 세 번째로 튄 후 공이 도달하는 높이를 구하시오 (Find). <strong>[2]</strong><br>(b) 튄 후의 높이가 처음으로 10 cm 미만이 되는 것은 몇 번째 튐인지 구하시오 (Find). <strong>[3]</strong><br>(c) 공을 떨어뜨린 순간부터 공이 12번째로 바닥에 닿을 때까지 공이 이동한 수직 방향의 총거리를 구하시오 (Find). <strong>[4]</strong><br>(d) 공이 아무리 오래 튀더라도 공이 이동하는 수직 방향의 총거리는 26 m 미만임을 보이시오 (Show that). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: the rebound heights form a geometric sequence <span class="chem">3.2 × 0.78^k</span>. Part (b) hides a unit change (10 cm = 0.1 m). In part (c), the ball travels each rebound height twice (up and down), but the first 3.2 m only once.
        "해석: 튀어 오른 높이는 등비수열 <span class=\"chem\">3.2 × 0.78^k</span>를 이뤄요. (b)에는 단위 변환(10 cm = 0.1 m)이 숨어 있어요. (c)에서 공은 각 튀어 오른 높이를 두 번(올라갈 때와 내려올 때) 이동하지만, 처음의 3.2 m는 한 번만 이동해요.",
        // EN: Count carefully for (c): the 1st impact ends the first drop; between the 1st and 12th impacts there are 11 rebounds.
        "(c)에서는 주의해서 세세요: 1번째로 바닥에 닿을 때 처음 낙하가 끝나고, 1번째와 12번째 닿음 사이에는 11번 튀어 올라요.",
        // EN: For (d), replace the finite sum of rebound heights by the sum to infinity, since <span class="chem">|0.78| &lt; 1</span>.
        "(d)에서는 <span class=\"chem\">|0.78| &lt; 1</span>이므로 튀어 오른 높이의 유한 합을 무한급수의 합으로 바꾸세요.",
      ],
      // EN: <p>Decoding: "rises to 78% of the height it fell from" is a geometric sequence of heights <span class="chem">h_k = 3.2(0.78)^k</span>. The distance is not a single geometric series. It is the first drop plus two copies of the rebound series. In (b), use metres throughout. In (c), the 12th impact comes after 11 rebounds, giving <span class="chem">D = 3.2 + 2 × 10.6078… = 24.4 m</span>. In (d), the limit is <span class="chem">3.2 + 2 × 2.496/0.22 = 25.89 m</span>, which bounds every partial total.</p>
      solution: "<p>해석: \"떨어진 높이의 78%까지 올라간다\"는 높이의 등비수열 <span class=\"chem\">h_k = 3.2(0.78)^k</span>예요. 거리는 하나의 등비급수가 아니라, 처음 낙하에 튀어 오른 높이의 급수 두 개를 더한 것이에요. (b)에서는 처음부터 끝까지 미터를 사용하세요. (c)에서 12번째 닿음은 11번 튀어 오른 다음이므로 <span class=\"chem\">D = 3.2 + 2 × 10.6078… = 24.4 m</span>예요. (d)에서 극한은 <span class=\"chem\">3.2 + 2 × 2.496/0.22 = 25.89 m</span>이고, 이 값이 모든 중간 총거리의 상한이 돼요.</p>",
      // EN: <div class="worked__math">(a) 3.2 × 0.78<sup>3</sup> = 1.518… ≈ <b>1.52 m</b></div><div class="worked__math">(b) 3.2 × 0.78<sup><i>k</i></sup> &lt; 0.1 ⇒ <i>k</i> &gt; 13.95 (after bounce 13: 0.127 m; after bounce 14: 0.0987 m), so <b>bounce 14</b></div><div class="worked__math">(c) <i>D</i> = 3.2 + 2(2.496 + 2.496 × 0.78 + … ) with 11 terms = 3.2 + 2 × <span class="frac"><span>2.496(1 − 0.78<sup>11</sup>)</span><span>0.22</span></span> = 24.4155… ≈ <b>24.4 m</b></div><div class="worked__math">(d) 3.2 + 2 × <span class="frac"><span>2.496</span><span>0.22</span></span> = 25.89… &lt; 26</div>
      answer: "<div class=\"worked__math\">(a) 3.2 × 0.78<sup>3</sup> = 1.518… ≈ <b>1.52 m</b></div><div class=\"worked__math\">(b) 3.2 × 0.78<sup><i>k</i></sup> &lt; 0.1  ⇒  <i>k</i> &gt; 13.95 (13번째 튐 후: 0.127 m, 14번째 튐 후: 0.0987 m), 따라서 <b>14번째 튐</b></div><div class=\"worked__math\">(c) <i>D</i> = 3.2 + 2(2.496 + 2.496 × 0.78 + … ) (11개 항) = 3.2 + 2 × <span class=\"frac\"><span>2.496(1 − 0.78<sup>11</sup>)</span><span>0.22</span></span> = 24.4155… ≈ <b>24.4 m</b></div><div class=\"worked__math\">(d) 3.2 + 2 × <span class=\"frac\"><span>2.496</span><span>0.22</span></span> = 25.89… &lt; 26</div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">3.2 × 0.78^3</span>.
        "M1: (a) <span class=\"chem\">3.2 × 0.78^3</span>을 이용함.",
        // EN: A1: (a) 1.52 m (1.5185…).
        "A1: (a) 1.52 m (1.5185…).",
        // EN: M1: (b) Converts 10 cm to 0.1 m and sets up <span class="chem">3.2 × 0.78^k &lt; 0.1</span>.
        "M1: (b) 10 cm를 0.1 m로 바꾸고 <span class=\"chem\">3.2 × 0.78^k &lt; 0.1</span>을 세움.",
        // EN: A1: (b) <span class="chem">k &gt; 13.95</span>, or heights 0.127 m (bounce 13) and 0.0987 m (bounce 14).
        "A1: (b) <span class=\"chem\">k &gt; 13.95</span>, 또는 높이 0.127 m (13번째 튐)와 0.0987 m (14번째 튐).",
        // EN: A1: (b) Bounce 14.
        "A1: (b) 14번째 튐.",
        // EN: M1: (c) Recognizes that the distance is the first drop 3.2 m plus twice each rebound height (up and down), with 11 rebounds before the 12th impact.
        "M1: (c) 거리는 처음 낙하 3.2 m에 각 튀어 오른 높이의 2배(올라갈 때와 내려올 때)를 더한 것이며, 12번째 닿기 전까지 11번 튀어 오른다는 것을 파악함.",
        // EN: A1: (c) Geometric series of rebound heights with first term 2.496, ratio 0.78 and 11 terms.
        "A1: (c) 첫째항 2.496, 공비 0.78, 11개 항인 튀어 오른 높이의 등비급수.",
        // EN: M1: (c) Uses <span class="chem">3.2 + 2 × 2.496(1 - 0.78^{11})/(1 - 0.78)</span>.
        "M1: (c) <span class=\"chem\">3.2 + 2 × 2.496(1 - 0.78^{11})/(1 - 0.78)</span>을 이용함.",
        // EN: A1: (c) 24.4 m (24.415…).
        "A1: (c) 24.4 m (24.415…).",
        // EN: M1: (d) Uses the sum to infinity of the rebound heights, <span class="chem">2.496/(1 - 0.78) = 11.345…</span>.
        "M1: (d) 튀어 오른 높이의 등비급수의 합 <span class=\"chem\">2.496/(1 - 0.78) = 11.345…</span>를 이용함.",
        // EN: A1: (d) Total distance <span class="chem">3.2 + 2 × 11.345… = 25.89…</span>.
        "A1: (d) 총거리 <span class=\"chem\">3.2 + 2 × 11.345… = 25.89…</span>.",
        // EN: R1: (d) The total distance after any number of bounces is a partial sum that increases towards 25.89… m, so it is always less than 26 m.
        "R1: (d) 몇 번 튄 후의 총거리든 25.89… m를 향해 증가하는 부분합이므로 항상 26 m 미만임.",
      ],
    },

    // ── t1-1-q033 · numeric · exam · SL · SL 1.3 · 4 marks
    "t1-1-q033": {
      // EN: <p>A geometric series has first term 40 and common ratio 0.85. Find the least number of terms for which the sum of the series exceeds 250.</p>
      stem: "<p>첫째항이 40이고 공비가 0.85인 등비급수가 있어요. 급수의 합이 250을 넘게 되는 최소 항수를 구하시오 (Find).</p>",
      hints: [
        // EN: Set up <span class="chem">40(1 - 0.85^n)/(1 - 0.85) &gt; 250</span>.
        "<span class=\"chem\">40(1 - 0.85^n)/(1 - 0.85) &gt; 250</span>을 세우세요.",
        // EN: Solve with the GDC (graph or table of <span class="chem">S_n</span>), or rearrange to <span class="chem">0.85^n &lt; 0.0625</span> and use logarithms. Dividing by <span class="chem">ln 0.85 &lt; 0</span> reverses the inequality.
        "GDC(<span class=\"chem\">S_n</span>의 그래프나 표)로 풀거나, <span class=\"chem\">0.85^n &lt; 0.0625</span>로 정리한 뒤 로그를 이용하세요. <span class=\"chem\">ln 0.85 &lt; 0</span>으로 나누면 부등호의 방향이 바뀌어요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>40(1 − 0.85<sup><i>n</i></sup>)</span><span>0.15</span></span> &gt; 250 <b>[M1]</b></div><div class="worked__math">0.85<sup><i>n</i></sup> &lt; 0.0625 (or table: <i>S</i><sub>17</sub> = 249.84, <i>S</i><sub>18</sub> = 252.36) <b>[A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 0.0625</span><span>ln 0.85</span></span> ≈ 17.06 <b>[M1]</b></div><div class="worked__math">Least number of terms = <b>18</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>40(1 − 0.85<sup><i>n</i></sup>)</span><span>0.15</span></span> &gt; 250   <b>[M1]</b></div><div class=\"worked__math\">0.85<sup><i>n</i></sup> &lt; 0.0625 (또는 표: <i>S</i><sub>17</sub> = 249.84, <i>S</i><sub>18</sub> = 252.36)   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 0.0625</span><span>ln 0.85</span></span> ≈ 17.06   <b>[M1]</b></div><div class=\"worked__math\">최소 항수 = <b>18</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q034 · numeric · challenge · SL · SL 1.3, 1.8 · 5 marks
    "t1-1-q034": {
      // EN: <p>A charity starts a fundraising campaign with a target of 7000 USD. It receives 500 USD in the first week. In each following week it receives 6% less than in the week before. The campaign runs until the target is reached. Find the week in which the target is reached.</p>
      stem: "<p>어떤 자선 단체가 목표액 7000 USD로 모금 활동을 시작해요. 첫째 주에 500 USD를 받아요. 그다음 주부터는 매주 전주보다 6% 적게 받아요. 모금 활동은 목표액에 도달할 때까지 계속돼요. 목표액에 도달하는 것은 몇째 주인지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the weekly amounts form a geometric sequence with <span class="chem">r = 0.94</span>, and "target reached" is about the running total <span class="chem">S_n</span>. Check first that the target can be reached at all: since <span class="chem">r &lt; 1</span>, the total can never exceed <span class="chem">S_infty</span>.
        "해석: 매주 받는 금액은 <span class=\"chem\">r = 0.94</span>인 등비수열을 이루고, \"목표액 도달\"은 누적 합계 <span class=\"chem\">S_n</span>에 관한 조건이에요. 먼저 목표액에 도달할 수 있기는 한지 확인하세요: <span class=\"chem\">r &lt; 1</span>이므로 누적 합계는 절대 <span class=\"chem\">S_infty</span>를 넘을 수 없어요.",
        // EN: <span class="chem">S_infty = 500/0.06 ≈ 8333</span>, which is more than 7000, so the target is reached eventually. Now solve <span class="chem">500(1 - 0.94^n)/0.06 &gt;= 7000</span>.
        "<span class=\"chem\">S_infty = 500/0.06 ≈ 8333</span>은 7000보다 크므로 결국 목표액에 도달해요. 이제 <span class=\"chem\">500(1 - 0.94^n)/0.06 &gt;= 7000</span>을 푸세요.",
        // EN: Rearrange to <span class="chem">0.94^n &lt;= 0.16</span>, or use a GDC table of <span class="chem">S_n</span>.
        "<span class=\"chem\">0.94^n &lt;= 0.16</span>으로 정리하거나 <span class=\"chem\">S_n</span>의 GDC 표를 이용하세요.",
      ],
      // EN: <p>Decoding: a weekly amount that falls by a fixed percentage is geometric (<span class="chem">u_1 = 500</span>, <span class="chem">r = 0.94</span>), and the target refers to the total.</p><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>500</span><span>0.06</span></span> = 8333.33 &gt; 7000, so the target can be reached <b>[R1]</b></div><div class="worked__math"><span class="frac"><span>500(1 − 0.94<sup><i>n</i></sup>)</span><span>0.06</span></span> ≥ 7000 <b>[M1]</b></div><div class="worked__math">0.94<sup><i>n</i></sup> ≤ 0.16 <b>[A1]</b></div><div class="worked__math"><i>n</i> ≥ 29.6 (table: <i>S</i><sub>29</sub> = 6948.09, <i>S</i><sub>30</sub> = 7031.20) <b>[A1]</b></div><div class="worked__math">The target is reached in <b>week 30</b> <b>[A1]</b></div>
      solution: "<p>해석: 매주 일정한 비율로 줄어드는 금액은 등비수열(<span class=\"chem\">u_1 = 500</span>, <span class=\"chem\">r = 0.94</span>)이고, 목표액은 합계에 관한 조건이에요.</p><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>500</span><span>0.06</span></span> = 8333.33 &gt; 7000, 따라서 목표액에 도달할 수 있음   <b>[R1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span>500(1 − 0.94<sup><i>n</i></sup>)</span><span>0.06</span></span> ≥ 7000   <b>[M1]</b></div><div class=\"worked__math\">0.94<sup><i>n</i></sup> ≤ 0.16   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> ≥ 29.6 (표: <i>S</i><sub>29</sub> = 6948.09, <i>S</i><sub>30</sub> = 7031.20)   <b>[A1]</b></div><div class=\"worked__math\">목표액에 도달하는 것은 <b>30째 주</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q035 · short · exam · SL · SL 1.3 · 6 marks
    "t1-1-q035": {
      // EN: <p>The sum of the first <span class="chem">n</span> terms of a sequence is <span class="chem">S_n = 3^{n+1} - 3</span>, for <span class="chem">n &gt;= 1</span>.</p><p>(a) Write down the value of <span class="chem">u_1</span>. <strong>[1]</strong><br>(b) Show that <span class="chem">u_n = 2 × 3^n</span>. <strong>[3]</strong><br>(c) Hence deduce that the sequence is geometric, and write down its common ratio. <strong>[2]</strong></p>
      stem: "<p>어떤 수열의 첫째항부터 제<span class=\"chem\">n</span>항까지의 합은 <span class=\"chem\">S_n = 3^{n+1} - 3</span> (<span class=\"chem\">n &gt;= 1</span>)이에요.</p><p>(a) <span class=\"chem\">u_1</span>의 값을 쓰시오 (Write down). <strong>[1]</strong><br>(b) <span class=\"chem\">u_n = 2 × 3^n</span>임을 보이시오 (Show that). <strong>[3]</strong><br>(c) 이를 이용하여 이 수열이 등비수열임을 추론하고 (Hence deduce), 그 공비를 쓰시오. <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: you are given the sum formula, not the term formula. The <span class="chem">n</span>-th term is what is added to go from <span class="chem">S_{n-1}</span> to <span class="chem">S_n</span>.
        "해석: 주어진 것은 일반항 공식이 아니라 합의 공식이에요. 제<span class=\"chem\">n</span>항은 <span class=\"chem\">S_{n-1}</span>에서 <span class=\"chem\">S_n</span>이 될 때 더해지는 값이에요.",
        // EN: Write <span class="chem">u_n = S_n - S_{n-1}</span> and replace <span class="chem">n</span> by <span class="chem">n - 1</span> carefully: <span class="chem">S_{n-1} = 3^n - 3</span>.
        "<span class=\"chem\">u_n = S_n - S_{n-1}</span>로 쓰고 <span class=\"chem\">n</span>을 <span class=\"chem\">n - 1</span>로 조심해서 바꾸세요: <span class=\"chem\">S_{n-1} = 3^n - 3</span>.",
        // EN: To deduce "geometric", show that <span class="chem">u_{n+1}/u_n</span> is a constant.
        "\"등비\"임을 추론하려면 <span class=\"chem\">u_{n+1}/u_n</span>이 상수임을 보이세요.",
      ],
      // EN: <p>Decoding: a formula for <span class="chem">S_n</span> is given, so the terms come from differences of sums. <span class="chem">u_n = S_n - S_{n-1} = 3^{n+1} - 3^n = 2 × 3^n</span> (this also gives <span class="chem">u_1 = 6</span>, matching <span class="chem">S_1</span>). The ratio of consecutive terms is always 3, so the sequence is geometric with <span class="chem">r = 3</span>.</p>
      solution: "<p>해석: <span class=\"chem\">S_n</span>의 공식이 주어졌으므로 항은 합의 차로 구해요. <span class=\"chem\">u_n = S_n - S_{n-1} = 3^{n+1} - 3^n = 2 × 3^n</span> (이로부터 <span class=\"chem\">u_1 = 6</span>도 나오며 <span class=\"chem\">S_1</span>과 일치해요). 이웃한 두 항의 비가 항상 3이므로 이 수열은 <span class=\"chem\">r = 3</span>인 등비수열이에요.</p>",
      // EN: <div class="worked__math">(a) <i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 9 − 3 = <b>6</b></div><div class="worked__math">(b) <i>u</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (3<sup><i>n</i>+1</sup> − 3) − (3<sup><i>n</i></sup> − 3) = 3<sup><i>n</i></sup>(3 − 1) = 2 × 3<sup><i>n</i></sup></div><div class="worked__math">(c) <span class="frac"><span><i>u</i><sub><i>n</i>+1</sub></span><span><i>u</i><sub><i>n</i></sub></span></span> = <span class="frac"><span>2 × 3<sup><i>n</i>+1</sup></span><span>2 × 3<sup><i>n</i></sup></span></span> = 3, a constant, so the sequence is geometric with <b><i>r</i> = 3</b></div>
      answer: "<div class=\"worked__math\">(a) <i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 9 − 3 = <b>6</b></div><div class=\"worked__math\">(b) <i>u</i><sub><i>n</i></sub> = <i>S</i><sub><i>n</i></sub> − <i>S</i><sub><i>n</i>−1</sub> = (3<sup><i>n</i>+1</sup> − 3) − (3<sup><i>n</i></sup> − 3) = 3<sup><i>n</i></sup>(3 − 1) = 2 × 3<sup><i>n</i></sup></div><div class=\"worked__math\">(c) <span class=\"frac\"><span><i>u</i><sub><i>n</i>+1</sub></span><span><i>u</i><sub><i>n</i></sub></span></span> = <span class=\"frac\"><span>2 × 3<sup><i>n</i>+1</sup></span><span>2 × 3<sup><i>n</i></sup></span></span> = 3으로 상수이므로, 이 수열은 등비수열이고 <b><i>r</i> = 3</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">u_1 = 6</span>.
        "A1: (a) <span class=\"chem\">u_1 = 6</span>.",
        // EN: M1: (b) Uses <span class="chem">u_n = S_n - S_{n-1}</span>.
        "M1: (b) <span class=\"chem\">u_n = S_n - S_{n-1}</span>을 이용함.",
        // EN: A1: (b) <span class="chem">(3^{n+1} - 3) - (3^n - 3) = 3^{n+1} - 3^n</span>.
        "A1: (b) <span class=\"chem\">(3^{n+1} - 3) - (3^n - 3) = 3^{n+1} - 3^n</span>.",
        // EN: A1: (b) Factorizes <span class="chem">3^n(3 - 1)</span>, leading to the given result <span class="chem">2 × 3^n</span> (the given line itself earns no mark).
        "A1: (b) <span class=\"chem\">3^n(3 - 1)</span>로 인수분해하여 주어진 결과 <span class=\"chem\">2 × 3^n</span>을 이끌어 냄 (주어진 식 자체에는 점수 없음).",
        // EN: R1: (c) Shows that <span class="chem">u_{n+1}/u_n = 3</span>, which does not depend on <span class="chem">n</span>, so the sequence is geometric.
        "R1: (c) <span class=\"chem\">u_{n+1}/u_n = 3</span>이 <span class=\"chem\">n</span>에 관계없음을 보이고, 따라서 수열이 등비수열이라고 함.",
        // EN: A1: (c) <span class="chem">r = 3</span>.
        "A1: (c) <span class=\"chem\">r = 3</span>.",
      ],
    },

    // ── t1-1-q036 · numeric · exam · SL · SL 1.2, 1.3 · 4 marks
    "t1-1-q036": {
      // EN: <p>Calculate <span class="chem">Σ_{k=1}^{25} (3k + 2(1.1)^k)</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">Σ_{k=1}^{25} (3k + 2(1.1)^k)</span>를 계산하시오 (Calculate). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: The sum splits into two sums: <span class="chem">Σ 3k</span> (arithmetic) plus <span class="chem">Σ 2(1.1)^k</span> (geometric).
        "이 합은 두 합으로 나눌 수 있어요: <span class=\"chem\">Σ 3k</span>(등차)와 <span class=\"chem\">Σ 2(1.1)^k</span>(등비).",
        // EN: Arithmetic part: 25 terms from 3 to 75. Geometric part: first term <span class="chem">2.2</span>, ratio 1.1, 25 terms. Or enter the whole sum with the GDC <span class="mono">Σ</span> template.
        "등차 부분: 3부터 75까지 25개 항. 등비 부분: 첫째항 <span class=\"chem\">2.2</span>, 공비 1.1, 25개 항. 또는 GDC의 <span class=\"mono\">Σ</span> 템플릿으로 합 전체를 입력하세요.",
      ],
      // EN: <div class="worked__math">Σ 3<i>k</i> = <span class="frac"><span>25</span><span>2</span></span>(3 + 75) = 975 <b>[M1 A1]</b></div><div class="worked__math">Σ 2(1.1)<sup><i>k</i></sup> = <span class="frac"><span>2.2(1.1<sup>25</sup> − 1)</span><span>0.1</span></span> = 216.363… <b>[A1]</b></div><div class="worked__math">Total = 1191.36… ≈ <b>1190</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">Σ 3<i>k</i> = <span class=\"frac\"><span>25</span><span>2</span></span>(3 + 75) = 975   <b>[M1 A1]</b></div><div class=\"worked__math\">Σ 2(1.1)<sup><i>k</i></sup> = <span class=\"frac\"><span>2.2(1.1<sup>25</sup> − 1)</span><span>0.1</span></span> = 216.363…   <b>[A1]</b></div><div class=\"worked__math\">합계 = 1191.36… ≈ <b>1190</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q037 · numeric · challenge · SL · SL 1.8 · 5 marks
    "t1-1-q037": {
      // EN: <p>The number <span class="chem">x = 0.2454545…</span> has the block of digits "45" repeating for ever after the first decimal place. By writing <span class="chem">x</span> using an infinite geometric series, find the exact value of <span class="chem">x</span> as a fraction in its lowest terms.</p>
      stem: "<p>수 <span class=\"chem\">x = 0.2454545…</span>는 소수점 아래 첫째 자리 다음부터 숫자 묶음 \"45\"가 끝없이 반복돼요. <span class=\"chem\">x</span>를 무한등비급수로 나타내어 <span class=\"chem\">x</span>의 정확한 값을 기약분수로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: a recurring decimal is a sum of infinitely many pieces that shrink by the same factor. Here the non-repeating part 0.2 must be kept separate from the repeating part.
        "해석: 순환소수는 같은 비율로 작아지는 무한히 많은 조각의 합이에요. 여기서는 반복되지 않는 부분 0.2를 반복되는 부분과 따로 다뤄야 해요.",
        // EN: Write <span class="chem">x = 0.2 + 0.045 + 0.00045 + 0.0000045 + …</span>. After 0.2, each piece is the previous one multiplied by <span class="chem">0.01</span>.
        "<span class=\"chem\">x = 0.2 + 0.045 + 0.00045 + 0.0000045 + …</span>로 쓰세요. 0.2 다음부터는 각 조각이 앞 조각에 <span class=\"chem\">0.01</span>을 곱한 값이에요.",
        // EN: Sum the geometric part with <span class="chem">S_infty = 0.045/(1 - 0.01)</span>, then add 0.2 and simplify.
        "등비 부분의 합을 <span class=\"chem\">S_infty = 0.045/(1 - 0.01)</span>로 구한 다음 0.2를 더하고 간단히 하세요.",
      ],
      // EN: <p>Decoding: the repeating block "45" occupies two decimal places, so the ratio is <span class="chem">10^{-2}</span>. The leading 2 does not repeat, so it is not part of the series.</p><div class="worked__math"><i>x</i> = 0.2 + (0.045 + 0.00045 + …) <b>[M1]</b></div><div class="worked__math">Geometric part: <i>u</i><sub>1</sub> = 0.045, <i>r</i> = 0.01 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>0.045</span><span>0.99</span></span> <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>45</span><span>990</span></span> = <span class="frac"><span>1</span><span>22</span></span> <b>[A1]</b></div><div class="worked__math"><i>x</i> = <span class="frac"><span>1</span><span>5</span></span> + <span class="frac"><span>1</span><span>22</span></span> = <b><span class="frac"><span>27</span><span>110</span></span></b> <b>[A1]</b></div>
      solution: "<p>해석: 반복되는 묶음 \"45\"는 소수 두 자리를 차지하므로 공비는 <span class=\"chem\">10^{-2}</span>예요. 맨 앞의 2는 반복되지 않으므로 급수에 포함되지 않아요.</p><div class=\"worked__math\"><i>x</i> = 0.2 + (0.045 + 0.00045 + …)   <b>[M1]</b></div><div class=\"worked__math\">등비 부분: <i>u</i><sub>1</sub> = 0.045, <i>r</i> = 0.01   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>0.045</span><span>0.99</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <span class=\"frac\"><span>45</span><span>990</span></span> = <span class=\"frac\"><span>1</span><span>22</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = <span class=\"frac\"><span>1</span><span>5</span></span> + <span class=\"frac\"><span>1</span><span>22</span></span> = <b><span class=\"frac\"><span>27</span><span>110</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q038 · numeric · exam · SL · SL 1.8 · 4 marks
    "t1-1-q038": {
      // EN: <p>The sum to infinity of a geometric series is three times its first term. The second term of the series is 8. Find the sum to infinity.</p>
      stem: "<p>어떤 등비급수의 합은 그 첫째항의 세 배예요. 이 급수의 제2항은 8이에요. 이 등비급수의 합을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "three times its first term" is the equation <span class="chem">u_1/(1 - r) = 3u_1</span>. It gives <span class="chem">r</span> without knowing <span class="chem">u_1</span>.
        "해석: \"첫째항의 세 배\"는 방정식 <span class=\"chem\">u_1/(1 - r) = 3u_1</span>이에요. 이 식으로 <span class=\"chem\">u_1</span>을 몰라도 <span class=\"chem\">r</span>을 구할 수 있어요.",
        // EN: Divide both sides by <span class="chem">u_1</span> (it cannot be 0) to get <span class="chem">1 - r = 1/3</span>.
        "양변을 <span class=\"chem\">u_1</span>(0이 될 수 없음)로 나누면 <span class=\"chem\">1 - r = 1/3</span>이에요.",
        // EN: Then use <span class="chem">u_2 = u_1 r = 8</span> to find <span class="chem">u_1</span>.
        "그다음 <span class=\"chem\">u_2 = u_1 r = 8</span>을 이용해 <span class=\"chem\">u_1</span>을 구하세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 3<i>u</i><sub>1</sub> ⇒ 1 − <i>r</i> = <span class="frac"><span>1</span><span>3</span></span> ⇒ <i>r</i> = <span class="frac"><span>2</span><span>3</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <span class="frac"><span>8</span><span>2/3</span></span> = 12 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = 3 × 12 = <b>36</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 3<i>u</i><sub>1</sub>  ⇒  1 − <i>r</i> = <span class=\"frac\"><span>1</span><span>3</span></span>  ⇒  <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <span class=\"frac\"><span>8</span><span>2/3</span></span> = 12   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = 3 × 12 = <b>36</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q039 · numeric · challenge · SL · SL 1.8 · 6 marks
    "t1-1-q039": {
      // EN: <p>A convergent geometric series has sum to infinity 20. A second series is formed by squaring every term of the first series; its sum to infinity is 80. Find the exact value of the first term of the original series.</p>
      stem: "<p>수렴하는 어떤 등비급수의 합이 20이에요. 이 급수의 모든 항을 제곱하여 두 번째 급수를 만들면 그 합은 80이에요. 원래 급수의 첫째항의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: squaring each term of <span class="chem">u_1, u_1 r, u_1 r^2, …</span> gives another geometric series, <span class="chem">u_1^2, u_1^2 r^2, …</span>, with first term <span class="chem">u_1^2</span> and ratio <span class="chem">r^2</span>. You get two equations in <span class="chem">u_1</span> and <span class="chem">r</span>.
        "해석: <span class=\"chem\">u_1, u_1 r, u_1 r^2, …</span>의 각 항을 제곱하면 첫째항이 <span class=\"chem\">u_1^2</span>, 공비가 <span class=\"chem\">r^2</span>인 또 다른 등비급수 <span class=\"chem\">u_1^2, u_1^2 r^2, …</span>이 돼요. <span class=\"chem\">u_1</span>과 <span class=\"chem\">r</span>에 대한 방정식 두 개를 얻어요.",
        // EN: The equations are <span class="chem">u_1/(1 - r) = 20</span> and <span class="chem">u_1^2/(1 - r^2) = 80</span>. Factorize <span class="chem">1 - r^2 = (1 - r)(1 + r)</span>.
        "방정식은 <span class=\"chem\">u_1/(1 - r) = 20</span>과 <span class=\"chem\">u_1^2/(1 - r^2) = 80</span>이에요. <span class=\"chem\">1 - r^2 = (1 - r)(1 + r)</span>로 인수분해하세요.",
        // EN: Dividing the second equation by the first gives <span class="chem">u_1/(1 + r) = 4</span>. Now solve the two linear equations.
        "두 번째 방정식을 첫 번째 방정식으로 나누면 <span class=\"chem\">u_1/(1 + r) = 4</span>예요. 이제 두 일차방정식을 푸세요.",
      ],
      // EN: <p>Decoding: "squaring every term" gives a new geometric series with ratio <span class="chem">r^2</span>; it converges because <span class="chem">|r| &lt; 1</span>.</p><div class="worked__math">New series: first term <i>u</i><sub>1</sub><sup>2</sup>, ratio <i>r</i><sup>2</sup> <b>[M1]</b></div><div class="worked__math"><span class="frac"><span><i>u</i><sub>1</sub><sup>2</sup></span><span>1 − <i>r</i><sup>2</sup></span></span> = 80 and <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 20 <b>[A1]</b></div><div class="worked__math">Dividing, using 1 − <i>r</i><sup>2</sup> = (1 − <i>r</i>)(1 + <i>r</i>): <span class="frac"><span><i>u</i><sub>1</sub></span><span>1 + <i>r</i></span></span> = 4 <b>[M1]</b></div><div class="worked__math">20(1 − <i>r</i>) = 4(1 + <i>r</i>) ⇒ <i>r</i> = <span class="frac"><span>2</span><span>3</span></span> <b>[A1]</b></div><div class="worked__math">|<i>r</i>| &lt; 1, so both series do converge <b>[R1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = 20(1 − <span class="frac"><span>2</span><span>3</span></span>) = <b><span class="frac"><span>20</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<p>해석: \"모든 항을 제곱하면\" 공비가 <span class=\"chem\">r^2</span>인 새 등비급수가 되고, <span class=\"chem\">|r| &lt; 1</span>이므로 수렴해요.</p><div class=\"worked__math\">새 급수: 첫째항 <i>u</i><sub>1</sub><sup>2</sup>, 공비 <i>r</i><sup>2</sup>   <b>[M1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span><i>u</i><sub>1</sub><sup>2</sup></span><span>1 − <i>r</i><sup>2</sup></span></span> = 80, <span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 − <i>r</i></span></span> = 20   <b>[A1]</b></div><div class=\"worked__math\">1 − <i>r</i><sup>2</sup> = (1 − <i>r</i>)(1 + <i>r</i>)를 이용해 나누면: <span class=\"frac\"><span><i>u</i><sub>1</sub></span><span>1 + <i>r</i></span></span> = 4   <b>[M1]</b></div><div class=\"worked__math\">20(1 − <i>r</i>) = 4(1 + <i>r</i>)  ⇒  <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span>   <b>[A1]</b></div><div class=\"worked__math\">|<i>r</i>| &lt; 1이므로 두 급수 모두 실제로 수렴함   <b>[R1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = 20(1 − <span class=\"frac\"><span>2</span><span>3</span></span>) = <b><span class=\"frac\"><span>20</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q040 · short · exam · SL · SL 1.3, 1.8 · 8 marks
    "t1-1-q040": {
      // EN: <p>A geometric series has first term 14.6 and second term 11.388.</p><p>(a) Write down the common ratio. <strong>[1]</strong><br>(b) Explain why the series has a sum to infinity, and find it. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.5</span>. <strong>[4]</strong></p>
      stem: "<p>첫째항이 14.6이고 제2항이 11.388인 등비급수가 있어요.</p><p>(a) 공비를 쓰시오 (Write down). <strong>[1]</strong><br>(b) 이 급수의 합이 존재하는 이유를 설명하고 (Explain), 그 합을 구하시오. <strong>[3]</strong><br>(c) <span class=\"chem\">S_infty - S_n &lt; 0.5</span>를 만족하는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Find). <strong>[4]</strong></p>",
      hints: [
        // EN: Divide the second term by the first to get <span class="chem">r</span>.
        "제2항을 첫째항으로 나누면 <span class=\"chem\">r</span>이에요.",
        // EN: Use the unrounded value of <span class="chem">S_infty</span> in part (c). The gap <span class="chem">S_infty - S_n</span> simplifies to <span class="chem">S_infty r^n</span>: it is the sum of all the terms after the <span class="chem">n</span>-th.
        "(c)에서는 반올림하지 않은 <span class=\"chem\">S_infty</span>의 값을 사용하세요. 차 <span class=\"chem\">S_infty - S_n</span>은 <span class=\"chem\">S_infty r^n</span>으로 간단해져요: 이는 제<span class=\"chem\">n</span>항 이후 모든 항의 합이에요.",
        // EN: Solve <span class="chem">66.36… × 0.78^n &lt; 0.5</span> with logarithms or a GDC table, and round up.
        "<span class=\"chem\">66.36… × 0.78^n &lt; 0.5</span>를 로그나 GDC 표로 풀고 올림하세요.",
      ],
      // EN: <p><span class="chem">S_infty - S_n = u_1/(1 - r) - u_1(1 - r^n)/(1 - r) = u_1 r^n/(1 - r) = S_infty r^n</span>. So we need <span class="chem">0.78^n &lt; 0.5/66.3636… ≈ 0.007534</span>, giving <span class="chem">n &gt; ln(0.007534)/ln(0.78) ≈ 19.67</span>. The least integer is <span class="chem">n = 20</span>.</p>
      solution: "<p><span class=\"chem\">S_infty - S_n = u_1/(1 - r) - u_1(1 - r^n)/(1 - r) = u_1 r^n/(1 - r) = S_infty r^n</span>. 따라서 <span class=\"chem\">0.78^n &lt; 0.5/66.3636… ≈ 0.007534</span>여야 하고, <span class=\"chem\">n &gt; ln(0.007534)/ln(0.78) ≈ 19.67</span>이에요. 가장 작은 정수는 <span class=\"chem\">n = 20</span>이에요.</p>",
      // EN: <div class="worked__math">(a) <i>r</i> = <span class="frac"><span>11.388</span><span>14.6</span></span> = <b>0.78</b></div><div class="worked__math">(b) |<i>r</i>| = 0.78 &lt; 1, so the series converges. <i>S</i><sub>∞</sub> = <span class="frac"><span>14.6</span><span>1 − 0.78</span></span> = 66.3636… ≈ <b>66.4</b></div><div class="worked__math">(c) <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = <i>S</i><sub>∞</sub> × 0.78<sup><i>n</i></sup> &lt; 0.5 ⇒ 0.78<sup><i>n</i></sup> &lt; 0.007534… ⇒ <i>n</i> &gt; 19.67…, so <b><i>n</i> = 20</b></div>
      answer: "<div class=\"worked__math\">(a) <i>r</i> = <span class=\"frac\"><span>11.388</span><span>14.6</span></span> = <b>0.78</b></div><div class=\"worked__math\">(b) |<i>r</i>| = 0.78 &lt; 1이므로 이 급수는 수렴함. <i>S</i><sub>∞</sub> = <span class=\"frac\"><span>14.6</span><span>1 − 0.78</span></span> = 66.3636… ≈ <b>66.4</b></div><div class=\"worked__math\">(c) <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = <i>S</i><sub>∞</sub> × 0.78<sup><i>n</i></sup> &lt; 0.5  ⇒  0.78<sup><i>n</i></sup> &lt; 0.007534…  ⇒  <i>n</i> &gt; 19.67…, 따라서 <b><i>n</i> = 20</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">r = 0.78</span>.
        "A1: (a) <span class=\"chem\">r = 0.78</span>.",
        // EN: R1: (b) <span class="chem">|r| &lt; 1</span>, so the series converges.
        "R1: (b) <span class=\"chem\">|r| &lt; 1</span>이므로 이 급수는 수렴함.",
        // EN: M1: (b) Uses <span class="chem">S_infty = 14.6/(1 - 0.78)</span>.
        "M1: (b) <span class=\"chem\">S_infty = 14.6/(1 - 0.78)</span>을 이용함.",
        // EN: A1: (b) <span class="chem">S_infty = 66.4</span> (66.3636…).
        "A1: (b) <span class=\"chem\">S_infty = 66.4</span> (66.3636…).",
        // EN: M1: (c) Writes <span class="chem">S_infty - S_n = S_infty r^n</span>, or sets up <span class="chem">66.36… - 14.6(1 - 0.78^n)/0.22 &lt; 0.5</span>.
        "M1: (c) <span class=\"chem\">S_infty - S_n = S_infty r^n</span>으로 쓰거나 <span class=\"chem\">66.36… - 14.6(1 - 0.78^n)/0.22 &lt; 0.5</span>를 세움.",
        // EN: A1: (c) <span class="chem">0.78^n &lt; 0.5/66.36… = 0.00753…</span> (or a correct GDC graph/table).
        "A1: (c) <span class=\"chem\">0.78^n &lt; 0.5/66.36… = 0.00753…</span> (또는 올바른 GDC 그래프/표).",
        // EN: A1: (c) <span class="chem">n &gt; 19.67</span> (or <span class="chem">S_infty - S_{19} = 0.591</span> and <span class="chem">S_infty - S_{20} = 0.461</span>).
        "A1: (c) <span class=\"chem\">n &gt; 19.67</span> (또는 <span class=\"chem\">S_infty - S_{19} = 0.591</span>과 <span class=\"chem\">S_infty - S_{20} = 0.461</span>).",
        // EN: A1: (c) <span class="chem">n = 20</span>.
        "A1: (c) <span class=\"chem\">n = 20</span>.",
      ],
    },

    // ── t1-1-q041 · numeric · challenge · SL · SL 1.8 · 5 marks
    "t1-1-q041": {
      // EN: <p>A square has side length 10 cm. A second square is drawn by joining the midpoints of the sides of the first square. A third square is drawn by joining the midpoints of the sides of the second square, and the process continues for ever. Find the exact total of the perimeters of all the squares. Give your answer in the form <span class="chem">a + b sqrt(2)</span>, where <span class="chem">a, b</span> are integers.</p>
      stem: "<p>한 변의 길이가 10 cm인 정사각형이 있어요. 첫 번째 정사각형의 각 변의 중점을 이어 두 번째 정사각형을 그려요. 두 번째 정사각형의 각 변의 중점을 이어 세 번째 정사각형을 그리고, 이 과정을 끝없이 계속해요. 모든 정사각형의 둘레의 총합의 정확한 값을 구하시오 (Find). 답은 <span class=\"chem\">a + b sqrt(2)</span> (<span class=\"chem\">a, b</span>는 정수) 꼴로 나타내시오.</p>",
      hints: [
        // EN: Decode: the perimeters form an infinite geometric series. The task is to find the ratio from the geometry, then use <span class="chem">S_infty</span> and simplify the surd.
        "해석: 둘레들은 무한등비급수를 이뤄요. 도형에서 공비를 구한 다음 <span class=\"chem\">S_infty</span>를 이용하고 근호를 간단히 하는 것이 과제예요.",
        // EN: The second square’s side joins two midpoints 5 cm from a corner, so its length is <span class="chem">sqrt(5^2 + 5^2) = 5 sqrt(2)</span>. Each side is <span class="chem">1/sqrt(2)</span> times the previous one.
        "두 번째 정사각형의 변은 한 꼭짓점에서 5 cm 떨어진 두 중점을 이으므로 그 길이는 <span class=\"chem\">sqrt(5^2 + 5^2) = 5 sqrt(2)</span>예요. 각 변은 앞 변의 <span class=\"chem\">1/sqrt(2)</span>배예요.",
        // EN: Sum <span class="chem">40 + 40/sqrt(2) + …</span> with <span class="chem">S_infty = 40/(1 - 1/sqrt(2))</span>, then rationalize the denominator.
        "<span class=\"chem\">40 + 40/sqrt(2) + …</span>의 합을 <span class=\"chem\">S_infty = 40/(1 - 1/sqrt(2))</span>로 구한 다음 분모를 유리화하세요.",
      ],
      // EN: <p>Decoding: "continues for ever" signals a sum to infinity; the common ratio comes from Pythagoras.</p><div class="worked__math">Second side = √(5<sup>2</sup> + 5<sup>2</sup>) = 5√2, so <i>r</i> = <span class="frac"><span>5√2</span><span>10</span></span> = <span class="frac"><span>1</span><span>√2</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>40</span><span>1 − 1/√2</span></span> = <span class="frac"><span>40√2</span><span>√2 − 1</span></span> <b>[M1]</b></div><div class="worked__math">= <span class="frac"><span>40√2(√2 + 1)</span><span>(√2 − 1)(√2 + 1)</span></span> <b>[M1]</b></div><div class="worked__math">= <b>80 + 40√2 cm</b> <b>[A1]</b></div>
      solution: "<p>해석: \"끝없이 계속한다\"는 등비급수의 합을 구하라는 신호이고, 공비는 피타고라스 정리에서 나와요.</p><div class=\"worked__math\">두 번째 변 = √(5<sup>2</sup> + 5<sup>2</sup>) = 5√2, 따라서 <i>r</i> = <span class=\"frac\"><span>5√2</span><span>10</span></span> = <span class=\"frac\"><span>1</span><span>√2</span></span>   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>40</span><span>1 − 1/√2</span></span> = <span class=\"frac\"><span>40√2</span><span>√2 − 1</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <span class=\"frac\"><span>40√2(√2 + 1)</span><span>(√2 − 1)(√2 + 1)</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <b>80 + 40√2 cm</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q042 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q042": {
      // EN: <p>Kemal invests 12 000 TRY in an account that pays a nominal annual interest rate of 3.6%, compounded monthly. Find the least number of complete months after which the value of the investment exceeds 15 000 TRY.</p>
      stem: "<p>Kemal은 명목 연이율 3.6%, 월 복리인 계좌에 12 000 TRY를 투자해요. 투자의 가치가 15 000 TRY를 넘게 되는 것은 최소 몇 개월(꽉 찬 개월 수) 후인지 구하시오 (Find).</p>",
      hints: [
        // EN: Monthly compounding: each month the value is multiplied by <span class="chem">1 + 3.6/1200 = 1.003</span>.
        "월 복리: 매달 가치에 <span class=\"chem\">1 + 3.6/1200 = 1.003</span>을 곱해요.",
        // EN: Solve <span class="chem">12000(1.003)^m &gt; 15000</span>, where <span class="chem">m</span> is the number of months. Use logarithms, a GDC table, or the Finance Solver (<span class="mono">I% = 3.6, PV = −12000, FV = 15000, P/Y = C/Y = 12</span>, solve for N).
        "<span class=\"chem\">m</span>을 개월 수로 하여 <span class=\"chem\">12000(1.003)^m &gt; 15000</span>을 푸세요. 로그, GDC 표 또는 Finance Solver(<span class=\"mono\">I% = 3.6, PV = −12000, FV = 15000, P/Y = C/Y = 12</span>로 두고 N을 구함)를 이용하세요.",
        // EN: The root is not a whole number. Round up.
        "근이 정수가 아니므로 올림하세요.",
      ],
      // EN: <div class="worked__math">12000(1 + <span class="frac"><span>3.6</span><span>1200</span></span>)<sup><i>m</i></sup> &gt; 15000 ⇒ 1.003<sup><i>m</i></sup> &gt; 1.25 <b>[M1 A1]</b></div><div class="worked__math"><i>m</i> &gt; <span class="frac"><span>ln 1.25</span><span>ln 1.003</span></span> ≈ 74.49 <b>[A1]</b></div><div class="worked__math">Least number of complete months = <b>75</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">12000(1 + <span class=\"frac\"><span>3.6</span><span>1200</span></span>)<sup><i>m</i></sup> &gt; 15000  ⇒  1.003<sup><i>m</i></sup> &gt; 1.25   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>m</i> &gt; <span class=\"frac\"><span>ln 1.25</span><span>ln 1.003</span></span> ≈ 74.49   <b>[A1]</b></div><div class=\"worked__math\">최소 개월 수 = <b>75</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q043 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q043": {
      // EN: <p>An investment of 8000 CHF grows to 10 500 CHF after 6 years, with interest compounded quarterly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>8000 CHF의 투자금이 고정된 명목 연이율 <span class=\"chem\">r%</span>, 분기 복리로 6년 후 10 500 CHF로 늘어났어요. <span class=\"chem\">r</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Quarterly compounding over 6 years: <span class="chem">k = 4</span> and <span class="chem">kn = 24</span> periods.
        "6년 동안 분기 복리: <span class=\"chem\">k = 4</span>, 기간 수는 <span class=\"chem\">kn = 24</span>예요.",
        // EN: Solve <span class="chem">8000(1 + r/400)^{24} = 10500</span> for <span class="chem">r</span>, or use the Finance Solver with <span class="mono">N = 24, PV = −8000, FV = 10500, P/Y = C/Y = 4</span> and solve for <span class="mono">I%</span>.
        "<span class=\"chem\">8000(1 + r/400)^{24} = 10500</span>을 <span class=\"chem\">r</span>에 대해 풀거나, Finance Solver에서 <span class=\"mono\">N = 24, PV = −8000, FV = 10500, P/Y = C/Y = 4</span>로 두고 <span class=\"mono\">I%</span>를 구하세요.",
      ],
      // EN: <div class="worked__math">8000(1 + <span class="frac"><span><i>r</i></span><span>400</span></span>)<sup>24</sup> = 10500 <b>[M1 A1]</b></div><div class="worked__math">1 + <span class="frac"><span><i>r</i></span><span>400</span></span> = 1.3125<sup>1/24</sup> = 1.011395… <b>[M1]</b></div><div class="worked__math"><i>r</i> = 4.558… ≈ <b>4.56</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">8000(1 + <span class=\"frac\"><span><i>r</i></span><span>400</span></span>)<sup>24</sup> = 10500   <b>[M1 A1]</b></div><div class=\"worked__math\">1 + <span class=\"frac\"><span><i>r</i></span><span>400</span></span> = 1.3125<sup>1/24</sup> = 1.011395…   <b>[M1]</b></div><div class=\"worked__math\"><i>r</i> = 4.558… ≈ <b>4.56</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q044 · numeric · exam · SL · SL 1.4 · 5 marks
    "t1-1-q044": {
      // EN: <p>Sofia has 5000 EUR to invest for 10 years. Account X pays a nominal annual rate of 4.2%, compounded monthly. Account Y pays 4.3% per year, compounded annually. Find how much more the better of the two accounts is worth after 10 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Sofia는 5000 EUR를 10년 동안 투자하려고 해요. 계좌 X는 명목 연이율 4.2%, 월 복리예요. 계좌 Y는 연이율 4.3%, 연 복리예요. 10년 후 두 계좌 중 더 유리한 계좌가 다른 계좌보다 얼마나 더 많은지 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오.</p>",
      hints: [
        // EN: Decode: the account with the higher rate is not automatically better, because the other one compounds more often. Find both final values, then subtract the smaller from the larger.
        "해석: 이율이 더 높은 계좌가 저절로 더 유리한 것은 아니에요. 다른 계좌가 복리 계산을 더 자주 하기 때문이에요. 두 계좌의 최종 가치를 구한 다음 큰 값에서 작은 값을 빼세요.",
        // EN: Account X: <span class="chem">5000(1 + 4.2/1200)^{120}</span>. Account Y: <span class="chem">5000(1.043)^{10}</span>.
        "계좌 X: <span class=\"chem\">5000(1 + 4.2/1200)^{120}</span>. 계좌 Y: <span class=\"chem\">5000(1.043)^{10}</span>.",
        // EN: Keep full GDC values and round only the final difference.
        "GDC의 값은 반올림하지 말고 그대로 두었다가 마지막 차만 반올림하세요.",
      ],
      // EN: <div class="worked__math">X: 5000(1 + <span class="frac"><span>4.2</span><span>1200</span></span>)<sup>120</sup> = 7604.229… <b>[M1 A1]</b></div><div class="worked__math">Y: 5000(1.043)<sup>10</sup> = 7617.510… <b>[A1]</b></div><div class="worked__math">Y is better by 7617.510… − 7604.229… = 13.281… <b>[M1]</b></div><div class="worked__math">≈ <b>13.28 EUR</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">X: 5000(1 + <span class=\"frac\"><span>4.2</span><span>1200</span></span>)<sup>120</sup> = 7604.229…   <b>[M1 A1]</b></div><div class=\"worked__math\">Y: 5000(1.043)<sup>10</sup> = 7617.510…   <b>[A1]</b></div><div class=\"worked__math\">Y가 7617.510… − 7604.229… = 13.281…만큼 더 유리함   <b>[M1]</b></div><div class=\"worked__math\">≈ <b>13.28 EUR</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q045 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q045": {
      // EN: <p>Omar invests 20 000 USD for 7 years at a nominal annual interest rate of 5.1%, compounded half-yearly. Inflation is expected to be 2.8% per year, so an amount <span class="chem">V</span> in 7 years’ time will be worth <span class="chem">V / 1.028^7</span> in today’s money. Find the real value of Omar’s investment after 7 years, in today’s money. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Omar는 20 000 USD를 명목 연이율 5.1%, 반년 복리로 7년 동안 투자해요. 인플레이션율은 연 2.8%로 예상되므로 7년 후의 금액 <span class=\"chem\">V</span>는 현재 화폐 가치로 <span class=\"chem\">V / 1.028^7</span>에 해당해요. 7년 후 Omar의 투자의 실질 가치를 현재 화폐 가치로 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오.</p>",
      hints: [
        // EN: First find the future value: half-yearly means <span class="chem">k = 2</span>, so <span class="chem">V = 20000(1 + 5.1/200)^{14}</span>.
        "먼저 미래가치를 구하세요: 반년 복리이므로 <span class=\"chem\">k = 2</span>, 따라서 <span class=\"chem\">V = 20000(1 + 5.1/200)^{14}</span>예요.",
        // EN: Then remove the effect of inflation by dividing by <span class="chem">1.028^7</span>. Do not round <span class="chem">V</span> before dividing.
        "그다음 <span class=\"chem\">1.028^7</span>로 나누어 인플레이션의 영향을 없애세요. 나누기 전에 <span class=\"chem\">V</span>를 반올림하지 마세요.",
      ],
      // EN: <div class="worked__math"><i>V</i> = 20000(1 + <span class="frac"><span>5.1</span><span>200</span></span>)<sup>14</sup> = 28453.08… <b>[M1 A1]</b></div><div class="worked__math">Real value = <span class="frac"><span>28453.08…</span><span>1.028<sup>7</sup></span></span> <b>[M1]</b></div><div class="worked__math">= 23451.871… ≈ <b>23 451.87 USD</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>V</i> = 20000(1 + <span class=\"frac\"><span>5.1</span><span>200</span></span>)<sup>14</sup> = 28453.08…   <b>[M1 A1]</b></div><div class=\"worked__math\">실질 가치 = <span class=\"frac\"><span>28453.08…</span><span>1.028<sup>7</sup></span></span>   <b>[M1]</b></div><div class=\"worked__math\">= 23451.871… ≈ <b>23 451.87 USD</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q046 · numeric · challenge · SL · SL 1.4 · 4 marks
    "t1-1-q046": {
      // EN: <p>A website lists a five-year-old car for 14 500 GBP. The same model cost 32 000 GBP when new. Assume that the car has lost the same percentage of its value every year. Find this annual percentage rate of depreciation. Give your answer correct to 3 significant figures.</p>
      stem: "<p>어떤 웹사이트에 출고된 지 5년 된 자동차가 14 500 GBP에 올라와 있어요. 같은 모델의 신차 가격은 32 000 GBP였어요. 이 자동차는 매년 가치의 같은 백분율을 잃었다고 가정해요. 이 연간 감가상각률(%)을 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: "the same percentage every year" is annual depreciation, a geometric model. The unknown is the rate <span class="chem">r</span>, not the final value.
        "해석: \"매년 같은 백분율\"은 연간 감가상각으로, 등비 모델이에요. 미지수는 최종 가치가 아니라 비율 <span class=\"chem\">r</span>이에요.",
        // EN: Solve <span class="chem">32000(1 - r/100)^5 = 14500</span>, or use the Finance Solver with <span class="mono">N = 5, PV = −32000, FV = 14500, PMT = 0</span>, solving for <span class="mono">I%</span> (it will be negative).
        "<span class=\"chem\">32000(1 - r/100)^5 = 14500</span>을 풀거나, Finance Solver에서 <span class=\"mono\">N = 5, PV = −32000, FV = 14500, PMT = 0</span>으로 두고 <span class=\"mono\">I%</span>를 구하세요 (음수가 나와요).",
        // EN: The depreciation rate is the size of the negative <span class="mono">I%</span>, i.e. <span class="chem">100(1 - (14500/32000)^{1/5})</span>.
        "감가상각률은 음수인 <span class=\"mono\">I%</span>의 크기, 즉 <span class=\"chem\">100(1 - (14500/32000)^{1/5})</span>이에요.",
      ],
      // EN: <p>Decoding: annual depreciation at <span class="chem">r%</span> multiplies the value by <span class="chem">(1 - r/100)</span> each year, so the 5-year multiplier is <span class="chem">14500/32000</span>.</p><div class="worked__math">32000(1 − <span class="frac"><span><i>r</i></span><span>100</span></span>)<sup>5</sup> = 14500 <b>[M1]</b></div><div class="worked__math">1 − <span class="frac"><span><i>r</i></span><span>100</span></span> = (0.453125)<sup>1/5</sup> = 0.853578… <b>[M1 A1]</b></div><div class="worked__math"><i>r</i> = 14.64… ≈ <b>14.6%</b> <b>[A1]</b></div>
      solution: "<p>해석: 연 <span class=\"chem\">r%</span>의 감가상각은 가치에 매년 <span class=\"chem\">(1 - r/100)</span>을 곱하므로, 5년 동안의 배율은 <span class=\"chem\">14500/32000</span>이에요.</p><div class=\"worked__math\">32000(1 − <span class=\"frac\"><span><i>r</i></span><span>100</span></span>)<sup>5</sup> = 14500   <b>[M1]</b></div><div class=\"worked__math\">1 − <span class=\"frac\"><span><i>r</i></span><span>100</span></span> = (0.453125)<sup>1/5</sup> = 0.853578…   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i> = 14.64… ≈ <b>14.6%</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q047 · short · challenge · SL · SL 1.4 · 8 marks
    "t1-1-q047": {
      // EN: <p>Ana invests 6000 EUR at 4.5% per year, compounded annually. On the same day, Ben invests 7500 EUR at a nominal annual rate of 3.2%, compounded monthly.</p><p>(a) Find the value of Ana’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the value of Ben’s investment after 10 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(c) Ana’s investment will eventually be worth more than Ben’s. Find the least number of complete years after which this happens. <strong>[4]</strong></p>
      stem: "<p>Ana는 6000 EUR를 연이율 4.5%, 연 복리로 투자해요. 같은 날 Ben은 7500 EUR를 명목 연이율 3.2%, 월 복리로 투자해요.</p><p>(a) 10년 후 Ana의 투자의 가치를 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오. <strong>[2]</strong><br>(b) 10년 후 Ben의 투자의 가치를 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오. <strong>[2]</strong><br>(c) Ana의 투자는 결국 Ben의 투자보다 가치가 커져요. 그렇게 되는 것은 최소 몇 년(꽉 찬 햇수) 후인지 구하시오 (Find). <strong>[4]</strong></p>",
      hints: [
        // EN: Decode: two compound-interest models with different compounding periods. Part (c) asks for the first whole number of years after which Ana’s value is bigger, so it is an inequality to solve with the GDC.
        "해석: 복리 계산 주기가 다른 두 복리 모델이에요. (c)는 Ana의 가치가 더 커지는 첫 번째 정수 햇수를 묻고 있으므로 GDC로 풀어야 하는 부등식이에요.",
        // EN: Ben’s value after <span class="chem">n</span> years is <span class="chem">7500(1 + 0.032/12)^{12n}</span>; his monthly compounding makes the exponent <span class="chem">12n</span>.
        "<span class=\"chem\">n</span>년 후 Ben의 가치는 <span class=\"chem\">7500(1 + 0.032/12)^{12n}</span>이에요. 월 복리이므로 지수가 <span class=\"chem\">12n</span>이 돼요.",
        // EN: Graph <span class="chem">y = 6000(1.045)^x</span> and <span class="chem">y = 7500(1.0026667)^{12x}</span> and find the intersection, then round up.
        "<span class=\"chem\">y = 6000(1.045)^x</span>와 <span class=\"chem\">y = 7500(1.0026667)^{12x}</span>의 그래프를 그려 교점을 찾은 다음 올림하세요.",
      ],
      // EN: <p>Decoding: Ana starts lower but has the higher effective rate, so her curve overtakes Ben’s. The intersection of the two models is at <span class="chem">n ≈ 18.5</span>; since values are compared after complete years, check 18 and 19. Ana is first ahead after <strong>19</strong> years.</p>
      solution: "<p>해석: Ana는 시작 금액이 더 적지만 실효 이율이 더 높으므로 그 곡선이 Ben의 곡선을 따라잡아요. 두 모델의 교점은 <span class=\"chem\">n ≈ 18.5</span>예요. 꽉 찬 햇수 후의 가치를 비교하므로 18과 19를 확인하세요. Ana가 처음으로 앞서는 것은 <strong>19</strong>년 후예요.</p>",
      // EN: <div class="worked__math">(a) 6000 × 1.045<sup>10</sup> = <b>9317.82 EUR</b></div><div class="worked__math">(b) 7500(1 + 0.032/12)<sup>120</sup> = <b>10 324.06 EUR</b></div><div class="worked__math">(c) 6000(1.045)<sup><i>n</i></sup> &gt; 7500(1 + 0.032/12)<sup>12<i>n</i></sup>: intersection at <i>n</i> ≈ 18.5. After 18 years: 13 250.87 &lt; 13 331.59; after 19 years: 13 847.16 &gt; 13 764.51. So <b>19 years</b></div>
      answer: "<div class=\"worked__math\">(a) 6000 × 1.045<sup>10</sup> = <b>9317.82 EUR</b></div><div class=\"worked__math\">(b) 7500(1 + 0.032/12)<sup>120</sup> = <b>10 324.06 EUR</b></div><div class=\"worked__math\">(c) 6000(1.045)<sup><i>n</i></sup> &gt; 7500(1 + 0.032/12)<sup>12<i>n</i></sup>: 교점은 <i>n</i> ≈ 18.5. 18년 후: 13 250.87 &lt; 13 331.59, 19년 후: 13 847.16 &gt; 13 764.51. 따라서 <b>19년</b></div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">6000(1.045)^{10}</span>.
        "M1: (a) <span class=\"chem\">6000(1.045)^{10}</span>을 이용함.",
        // EN: A1: (a) 9317.82 EUR.
        "A1: (a) 9317.82 EUR.",
        // EN: M1: (b) Uses <span class="chem">7500(1 + 3.2/1200)^{120}</span> (monthly: 120 periods).
        "M1: (b) <span class=\"chem\">7500(1 + 3.2/1200)^{120}</span>을 이용함 (월 복리: 120기간).",
        // EN: A1: (b) 10 324.06 EUR.
        "A1: (b) 10 324.06 EUR.",
        // EN: M1: (c) Sets up <span class="chem">6000(1.045)^n &gt; 7500(1 + 0.032/12)^{12n}</span> (an equation is acceptable).
        "M1: (c) <span class=\"chem\">6000(1.045)^n &gt; 7500(1 + 0.032/12)^{12n}</span>을 세움 (방정식도 인정).",
        // EN: M1: (c) Uses the GDC to solve: graph intersection or table of both values.
        "M1: (c) GDC를 이용해 풂: 그래프의 교점 또는 두 값의 표.",
        // EN: A1: (c) <span class="chem">n ≈ 18.5</span>, or values after 18 years (13 250.87, 13 331.59) and 19 years (13 847.16, 13 764.51).
        "A1: (c) <span class=\"chem\">n ≈ 18.5</span>, 또는 18년 후(13 250.87, 13 331.59)와 19년 후(13 847.16, 13 764.51)의 값.",
        // EN: A1: (c) 19 years.
        "A1: (c) 19년.",
      ],
    },

    // ── t1-1-q048 · numeric · challenge · SL · SL 1.4 · 5 marks
    "t1-1-q048": {
      // EN: <p>Mei keeps savings of 15 000 SGD in an account that pays 2.2% per year, compounded annually. Inflation is 3.1% per year, so an amount <span class="chem">V</span> in <span class="chem">n</span> years’ time is worth <span class="chem">V / 1.031^n</span> in today’s money. Mei makes no deposits or withdrawals. Find the least number of complete years after which the real value of her savings, in today’s money, is below 13 000 SGD.</p>
      stem: "<p>Mei는 15 000 SGD의 저축액을 연이율 2.2%, 연 복리인 계좌에 넣어 두고 있어요. 인플레이션율은 연 3.1%이므로 <span class=\"chem\">n</span>년 후의 금액 <span class=\"chem\">V</span>는 현재 화폐 가치로 <span class=\"chem\">V / 1.031^n</span>에 해당해요. Mei는 입금이나 출금을 하지 않아요. 현재 화폐 가치로 본 저축액의 실질 가치가 13 000 SGD보다 낮아지는 것은 최소 몇 년(꽉 찬 햇수) 후인지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the account balance grows, but inflation grows faster, so the <em>real</em> value falls. You need the least whole <span class="chem">n</span> for which the real value is below 13 000.
        "해석: 계좌 잔액은 늘어나지만 인플레이션이 더 빠르게 진행되므로 <em>실질</em> 가치는 떨어져요. 실질 가치가 13 000보다 낮아지는 가장 작은 정수 <span class=\"chem\">n</span>을 구해야 해요.",
        // EN: Real value after <span class="chem">n</span> years <span class="chem">= 15000(1.022)^n / 1.031^n = 15000(1.022/1.031)^n</span>.
        "<span class=\"chem\">n</span>년 후의 실질 가치 <span class=\"chem\">= 15000(1.022)^n / 1.031^n = 15000(1.022/1.031)^n</span>.",
        // EN: Solve <span class="chem">15000(1.022/1.031)^n &lt; 13000</span> with logarithms or a GDC table. The base is less than 1, so dividing by its logarithm reverses the inequality.
        "<span class=\"chem\">15000(1.022/1.031)^n &lt; 13000</span>을 로그나 GDC 표로 푸세요. 밑이 1보다 작으므로 그 로그로 나누면 부등호의 방향이 바뀌어요.",
      ],
      // EN: <p>Decoding: "real value" means the balance adjusted for inflation; it falls because 2.2% &lt; 3.1%.</p><div class="worked__math">Real value = <span class="frac"><span>15000(1.022)<sup><i>n</i></sup></span><span>1.031<sup><i>n</i></sup></span></span> <b>[M1]</b></div><div class="worked__math">15000(1.022/1.031)<sup><i>n</i></sup> &lt; 13000 <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(13/15)</span><span>ln(1.022/1.031)</span></span> ≈ 16.3 <b>[A1]</b></div><div class="worked__math">Check: after 16 years 13 036.68; after 17 years 12 922.88 <b>[A1]</b></div><div class="worked__math">Least number of complete years = <b>17</b> <b>[A1]</b></div>
      solution: "<p>해석: \"실질 가치\"는 인플레이션을 반영해 조정한 잔액이에요. 2.2% &lt; 3.1%이므로 실질 가치는 떨어져요.</p><div class=\"worked__math\">실질 가치 = <span class=\"frac\"><span>15000(1.022)<sup><i>n</i></sup></span><span>1.031<sup><i>n</i></sup></span></span>   <b>[M1]</b></div><div class=\"worked__math\">15000(1.022/1.031)<sup><i>n</i></sup> &lt; 13000   <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(13/15)</span><span>ln(1.022/1.031)</span></span> ≈ 16.3   <b>[A1]</b></div><div class=\"worked__math\">확인: 16년 후 13 036.68, 17년 후 12 922.88   <b>[A1]</b></div><div class=\"worked__math\">최소 햇수 = <b>17</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q049 · short · exam · SL · SL 1.4 · 8 marks
    "t1-1-q049": {
      // EN: <p>A company buys a machine for 85 000 AUD. The value of the machine depreciates by 12% each year.</p><p>(a) Find the value of the machine after 3 years. Give your answer correct to 2 decimal places. <strong>[2]</strong><br>(b) Find the number of complete years after which the value of the machine first falls below 30 000 AUD. <strong>[3]</strong><br>At the same time as it buys the machine, the company invests 40 000 AUD at a nominal annual rate of 3.9%, compounded monthly.<br>(c) Find the least number of complete years after which the investment is worth more than the machine. <strong>[3]</strong></p>
      stem: "<p>어떤 회사가 기계를 85 000 AUD에 사요. 기계의 가치는 매년 12%씩 감가상각돼요.</p><p>(a) 3년 후 기계의 가치를 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오. <strong>[2]</strong><br>(b) 기계의 가치가 처음으로 30 000 AUD보다 낮아지는 것은 몇 년(꽉 찬 햇수) 후인지 구하시오 (Find). <strong>[3]</strong><br>기계를 사는 것과 동시에 회사는 40 000 AUD를 명목 연이율 3.9%, 월 복리로 투자해요.<br>(c) 투자의 가치가 기계의 가치보다 커지는 것은 최소 몇 년(꽉 찬 햇수) 후인지 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: (a) and (b) are depreciation (multiplier 0.88 per year); (c) compares a growing investment with a shrinking value, and asks for the first whole year in which the investment is bigger.
        "해석: (a)와 (b)는 감가상각(매년 배율 0.88)이에요. (c)는 늘어나는 투자와 줄어드는 가치를 비교하여 투자가 더 커지는 첫 번째 정수 햇수를 묻고 있어요.",
        // EN: For (b) and (c), use a GDC table with <span class="chem">x</span> = number of years, or graph both sides and find the intersection.
        "(b)와 (c)에서는 <span class=\"chem\">x</span> = 햇수로 둔 GDC 표를 이용하거나, 양변의 그래프를 그려 교점을 찾으세요.",
        // EN: For (c), the investment after <span class="chem">n</span> years is <span class="chem">40000(1 + 0.039/12)^{12n}</span>: monthly compounding means <span class="chem">12n</span> periods.
        "(c)에서 <span class=\"chem\">n</span>년 후 투자의 가치는 <span class=\"chem\">40000(1 + 0.039/12)^{12n}</span>이에요: 월 복리이므로 기간 수는 <span class=\"chem\">12n</span>이에요.",
      ],
      // EN: <p>Decoding: there are two models, depreciation <span class="chem">M(n) = 85000(0.88)^n</span> and monthly compound growth <span class="chem">I(n) = 40000(1.00325)^{12n}</span>. For (b), <span class="chem">n &gt; ln(30/85)/ln(0.88) ≈ 8.15</span>, so the answer is 9 years. For (c), the graphs meet at <span class="chem">n ≈ 4.52</span>, so the investment is first worth more after 5 complete years.</p>
      solution: "<p>해석: 두 모델이 있어요. 감가상각 <span class=\"chem\">M(n) = 85000(0.88)^n</span>과 월 복리 증가 <span class=\"chem\">I(n) = 40000(1.00325)^{12n}</span>이에요. (b)에서 <span class=\"chem\">n &gt; ln(30/85)/ln(0.88) ≈ 8.15</span>이므로 답은 9년이에요. (c)에서 두 그래프는 <span class=\"chem\">n ≈ 4.52</span>에서 만나므로, 투자의 가치가 처음으로 더 커지는 것은 꽉 찬 5년 후예요.</p>",
      // EN: <div class="worked__math">(a) 85000 × 0.88<sup>3</sup> = <b>57 925.12 AUD</b></div><div class="worked__math">(b) 85000 × 0.88<sup><i>n</i></sup> &lt; 30000 ⇒ <i>n</i> &gt; 8.15; after 8 years 30 568.93, after 9 years 26 900.66, so <b>9 years</b></div><div class="worked__math">(c) 40000(1 + 0.039/12)<sup>12<i>n</i></sup> &gt; 85000 × 0.88<sup><i>n</i></sup> ⇒ <i>n</i> &gt; 4.52; after 4 years 46 741.22 &lt; 50 974.11, after 5 years 48 597.07 &gt; 44 857.21, so <b>5 years</b></div>
      answer: "<div class=\"worked__math\">(a) 85000 × 0.88<sup>3</sup> = <b>57 925.12 AUD</b></div><div class=\"worked__math\">(b) 85000 × 0.88<sup><i>n</i></sup> &lt; 30000  ⇒  <i>n</i> &gt; 8.15; 8년 후 30 568.93, 9년 후 26 900.66, 따라서 <b>9년</b></div><div class=\"worked__math\">(c) 40000(1 + 0.039/12)<sup>12<i>n</i></sup> &gt; 85000 × 0.88<sup><i>n</i></sup>  ⇒  <i>n</i> &gt; 4.52; 4년 후 46 741.22 &lt; 50 974.11, 5년 후 48 597.07 &gt; 44 857.21, 따라서 <b>5년</b></div>",
      markscheme: [
        // EN: M1: (a) Uses <span class="chem">85000 × 0.88^3</span> (or the Finance Solver with <span class="mono">I% = −12</span>).
        "M1: (a) <span class=\"chem\">85000 × 0.88^3</span>을 이용함 (또는 Finance Solver에서 <span class=\"mono\">I% = −12</span>).",
        // EN: A1: (a) 57 925.12 AUD.
        "A1: (a) 57 925.12 AUD.",
        // EN: M1: (b) Sets up <span class="chem">85000 × 0.88^n &lt; 30000</span> (an equation is acceptable).
        "M1: (b) <span class=\"chem\">85000 × 0.88^n &lt; 30000</span>을 세움 (방정식도 인정).",
        // EN: A1: (b) <span class="chem">n &gt; 8.15</span>, or the values after 8 and 9 years (30 568.93 and 26 900.66).
        "A1: (b) <span class=\"chem\">n &gt; 8.15</span>, 또는 8년 후와 9년 후의 값(30 568.93과 26 900.66).",
        // EN: A1: (b) 9 years.
        "A1: (b) 9년.",
        // EN: M1: (c) Sets up <span class="chem">40000(1 + 0.039/12)^{12n} &gt; 85000 × 0.88^n</span> (an equation is acceptable).
        "M1: (c) <span class=\"chem\">40000(1 + 0.039/12)^{12n} &gt; 85000 × 0.88^n</span>을 세움 (방정식도 인정).",
        // EN: A1: (c) Uses the GDC: intersection at <span class="chem">n ≈ 4.52</span>, or both values after 4 and 5 years.
        "A1: (c) GDC를 이용함: 교점 <span class=\"chem\">n ≈ 4.52</span>, 또는 4년 후와 5년 후의 두 값.",
        // EN: A1: (c) 5 years.
        "A1: (c) 5년.",
      ],
    },

    // ── t1-1-q050 · numeric · exam · SL · SL 1.4 · 3 marks
    "t1-1-q050": {
      // EN: <p>Lena wants to have 25 000 EUR in 8 years’ time. She finds an account paying a nominal annual interest rate of 4.75%, compounded quarterly. Find the amount she must invest now. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Lena는 8년 후에 25 000 EUR를 갖고 싶어요. 명목 연이율 4.75%, 분기 복리인 계좌를 찾았어요. 지금 투자해야 하는 금액을 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오.</p>",
      hints: [
        // EN: This time the future value is known and the present value is unknown: <span class="chem">PV(1 + 4.75/400)^{32} = 25000</span>.
        "이번에는 미래가치를 알고 현재가치를 모르는 경우예요: <span class=\"chem\">PV(1 + 4.75/400)^{32} = 25000</span>.",
        // EN: Divide, or use the Finance Solver with <span class="mono">N = 32, I% = 4.75, FV = 25000, P/Y = C/Y = 4</span>, solving for PV (it shows as negative, an outflow).
        "나누거나, Finance Solver에서 <span class=\"mono\">N = 32, I% = 4.75, FV = 25000, P/Y = C/Y = 4</span>로 두고 PV를 구하세요 (지출이므로 음수로 표시돼요).",
      ],
      // EN: <div class="worked__math"><i>PV</i>(1 + <span class="frac"><span>4.75</span><span>400</span></span>)<sup>32</sup> = 25000 <b>[M1]</b></div><div class="worked__math"><i>PV</i> = <span class="frac"><span>25000</span><span>1.011875<sup>32</sup></span></span> <b>[A1]</b></div><div class="worked__math">= 17134.849… ≈ <b>17 134.85 EUR</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><i>PV</i>(1 + <span class=\"frac\"><span>4.75</span><span>400</span></span>)<sup>32</sup> = 25000   <b>[M1]</b></div><div class=\"worked__math\"><i>PV</i> = <span class=\"frac\"><span>25000</span><span>1.011875<sup>32</sup></span></span>   <b>[A1]</b></div><div class=\"worked__math\">= 17134.849… ≈ <b>17 134.85 EUR</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q051 · numeric · challenge · SL · SL 1.4 · 4 marks
    "t1-1-q051": {
      // EN: <p>A bank advertises a savings account with the slogan "Double your money in 9 years". Interest is compounded monthly at a fixed nominal annual rate of <span class="chem">r%</span>. Find the value of <span class="chem">r</span> that makes the slogan exactly true. Give your answer correct to 3 significant figures.</p>
      stem: "<p>어떤 은행이 \"9년 만에 돈이 두 배로\"라는 광고 문구로 저축 계좌를 홍보해요. 이자는 고정된 명목 연이율 <span class=\"chem\">r%</span>, 월 복리로 계산돼요. 이 광고 문구가 정확히 성립하게 하는 <span class=\"chem\">r</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: no amount is given because none is needed. "Double your money" means <span class="chem">FV = 2PV</span> for any starting amount, so <span class="chem">PV</span> cancels. The unknown is the rate.
        "해석: 금액이 주어지지 않은 것은 필요 없기 때문이에요. \"돈이 두 배로\"는 어떤 원금이든 <span class=\"chem\">FV = 2PV</span>라는 뜻이므로 <span class=\"chem\">PV</span>는 약분되어 없어져요. 미지수는 이율이에요.",
        // EN: Monthly compounding for 9 years gives 108 periods: <span class="chem">(1 + r/1200)^{108} = 2</span>.
        "9년 동안 월 복리이면 기간 수는 108이에요: <span class=\"chem\">(1 + r/1200)^{108} = 2</span>.",
        // EN: Take the 108th root, or use the Finance Solver with <span class="mono">N = 108, PV = −1, FV = 2, P/Y = C/Y = 12</span>, solving for <span class="mono">I%</span>.
        "108제곱근을 구하거나, Finance Solver에서 <span class=\"mono\">N = 108, PV = −1, FV = 2, P/Y = C/Y = 12</span>로 두고 <span class=\"mono\">I%</span>를 구하세요.",
      ],
      // EN: <p>Decoding: choose any <span class="chem">PV</span> (for example 1); the condition is <span class="chem">FV = 2PV</span>.</p><div class="worked__math"><i>PV</i>(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2<i>PV</i> <b>[M1]</b></div><div class="worked__math">(1 + <span class="frac"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2 <b>[A1]</b></div><div class="worked__math"><i>r</i> = 1200(2<sup>1/108</sup> − 1) <b>[M1]</b></div><div class="worked__math">= 7.726… ≈ <b>7.73</b> <b>[A1]</b></div>
      solution: "<p>해석: 아무 <span class=\"chem\">PV</span>나 고르세요(예: 1). 조건은 <span class=\"chem\">FV = 2PV</span>예요.</p><div class=\"worked__math\"><i>PV</i>(1 + <span class=\"frac\"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2<i>PV</i>   <b>[M1]</b></div><div class=\"worked__math\">(1 + <span class=\"frac\"><span><i>r</i></span><span>1200</span></span>)<sup>108</sup> = 2   <b>[A1]</b></div><div class=\"worked__math\"><i>r</i> = 1200(2<sup>1/108</sup> − 1)   <b>[M1]</b></div><div class=\"worked__math\">= 7.726… ≈ <b>7.73</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q052 · short · challenge · SL · SL 1.3, 1.4 · 8 marks
    "t1-1-q052": {
      // EN: <p>On 1 January every year, starting in year 1, Tomás deposits 1200 EUR into a savings account. The account pays 3% interest per year, compounded annually, and interest is added on 31 December. He makes no withdrawals.</p><p>(a) Show that the value of the account immediately after the third deposit is 3709.08 EUR. <strong>[2]</strong><br>(b) Show that the value of the account immediately after the <span class="chem">n</span>-th deposit is <span class="chem">40000(1.03^n - 1)</span> EUR. <strong>[3]</strong><br>(c) Find the least value of <span class="chem">n</span> for which the value immediately after the <span class="chem">n</span>-th deposit exceeds 30 000 EUR. <strong>[3]</strong></p>
      stem: "<p>1년째부터 매년 1월 1일에 Tomás는 저축 계좌에 1200 EUR를 입금해요. 이 계좌는 연이율 3%, 연 복리이고, 이자는 12월 31일에 더해져요. 그는 출금을 하지 않아요.</p><p>(a) 세 번째 입금 직후 계좌의 가치가 3709.08 EUR임을 보이시오 (Show that). <strong>[2]</strong><br>(b) <span class=\"chem\">n</span>번째 입금 직후 계좌의 가치가 <span class=\"chem\">40000(1.03^n - 1)</span> EUR임을 보이시오 (Show that). <strong>[3]</strong><br>(c) <span class=\"chem\">n</span>번째 입금 직후의 가치가 30 000 EUR를 넘게 되는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: this is regular saving, which in Math AA is a geometric series in disguise (not a Finance Solver annuity). Each deposit grows separately; list what each deposit is worth at the moment of the <span class="chem">n</span>-th deposit.
        "해석: 이것은 정기 적금으로, Math AA에서는 모습을 바꾼 등비급수예요 (Finance Solver의 연금이 아니에요). 각 입금액은 따로따로 불어나므로, <span class=\"chem\">n</span>번째 입금 시점에 각 입금액이 얼마가 되어 있는지 나열해 보세요.",
        // EN: Immediately after the <span class="chem">n</span>-th deposit, the newest deposit has earned no interest, the one before it one year’s interest, …, and the first one <span class="chem">n - 1</span> years’ interest.
        "<span class=\"chem\">n</span>번째 입금 직후에는 가장 최근 입금액은 아직 이자가 없고, 그 바로 앞의 입금액은 1년 치 이자, …, 첫 번째 입금액은 <span class=\"chem\">n - 1</span>년 치 이자가 붙어 있어요.",
        // EN: Sum <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span> with <span class="chem">S_n = u_1(r^n - 1)/(r - 1)</span>, then solve the inequality in (c) with logarithms or a GDC table.
        "<span class=\"chem\">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span>의 합을 <span class=\"chem\">S_n = u_1(r^n - 1)/(r - 1)</span>로 구한 다음, (c)의 부등식을 로그나 GDC 표로 푸세요.",
      ],
      // EN: <p>Decoding: the account value is a sum of separately compounding deposits, which is a geometric series with first term 1200 and ratio 1.03. Immediately after the 3rd deposit the value is <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200 = 3709.08</span>. In general, <span class="chem">S_n = 1200(1.03^n - 1)/0.03 = 40000(1.03^n - 1)</span>. Then <span class="chem">1.03^n &gt; 1.75</span> gives <span class="chem">n &gt; ln 1.75/ln 1.03 ≈ 18.93</span>, so <span class="chem">n = 19</span>.</p>
      solution: "<p>해석: 계좌의 가치는 따로따로 복리로 불어나는 입금액들의 합으로, 첫째항이 1200, 공비가 1.03인 등비급수예요. 3번째 입금 직후의 가치는 <span class=\"chem\">1200(1.03)^2 + 1200(1.03) + 1200 = 3709.08</span>이에요. 일반적으로 <span class=\"chem\">S_n = 1200(1.03^n - 1)/0.03 = 40000(1.03^n - 1)</span>이에요. 그러면 <span class=\"chem\">1.03^n &gt; 1.75</span>에서 <span class=\"chem\">n &gt; ln 1.75/ln 1.03 ≈ 18.93</span>이므로 <span class=\"chem\">n = 19</span>예요.</p>",
      // EN: <div class="worked__math">(a) 1200(1.03)<sup>2</sup> + 1200(1.03) + 1200 = 1273.08 + 1236 + 1200 = 3709.08</div><div class="worked__math">(b) 1200 + 1200(1.03) + … + 1200(1.03)<sup><i>n</i>−1</sup> = <span class="frac"><span>1200(1.03<sup><i>n</i></sup> − 1)</span><span>1.03 − 1</span></span> = 40000(1.03<sup><i>n</i></sup> − 1)</div><div class="worked__math">(c) 40000(1.03<sup><i>n</i></sup> − 1) &gt; 30000 ⇒ 1.03<sup><i>n</i></sup> &gt; 1.75 ⇒ <i>n</i> &gt; 18.93, so <b><i>n</i> = 19</b></div>
      answer: "<div class=\"worked__math\">(a) 1200(1.03)<sup>2</sup> + 1200(1.03) + 1200 = 1273.08 + 1236 + 1200 = 3709.08</div><div class=\"worked__math\">(b) 1200 + 1200(1.03) + … + 1200(1.03)<sup><i>n</i>−1</sup> = <span class=\"frac\"><span>1200(1.03<sup><i>n</i></sup> − 1)</span><span>1.03 − 1</span></span> = 40000(1.03<sup><i>n</i></sup> − 1)</div><div class=\"worked__math\">(c) 40000(1.03<sup><i>n</i></sup> − 1) &gt; 30000  ⇒  1.03<sup><i>n</i></sup> &gt; 1.75  ⇒  <i>n</i> &gt; 18.93, 따라서 <b><i>n</i> = 19</b></div>",
      markscheme: [
        // EN: M1: (a) Recognizes that the first deposit has earned interest twice and the second once: <span class="chem">1200(1.03)^2 + 1200(1.03) + 1200</span>.
        "M1: (a) 첫 번째 입금액은 이자가 두 번, 두 번째 입금액은 한 번 붙었음을 파악함: <span class=\"chem\">1200(1.03)^2 + 1200(1.03) + 1200</span>.",
        // EN: A1: (a) <span class="chem">1273.08 + 1236 + 1200</span>, which gives the stated 3709.08 (the given value itself earns no mark).
        "A1: (a) <span class=\"chem\">1273.08 + 1236 + 1200</span>, 이로부터 주어진 값 3709.08이 나옴 (주어진 값 자체에는 점수 없음).",
        // EN: M1: (b) Writes the value as the geometric series <span class="chem">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span>.
        "M1: (b) 가치를 등비급수 <span class=\"chem\">1200 + 1200(1.03) + … + 1200(1.03)^{n-1}</span>로 씀.",
        // EN: A1: (b) Identifies first term 1200, ratio 1.03 and <span class="chem">n</span> terms.
        "A1: (b) 첫째항 1200, 공비 1.03, 항수 <span class=\"chem\">n</span>을 파악함.",
        // EN: A1: (b) <span class="chem">1200(1.03^n - 1)/0.03</span>, which leads to the given result (the given line itself earns no mark).
        "A1: (b) <span class=\"chem\">1200(1.03^n - 1)/0.03</span>, 이로부터 주어진 결과를 이끌어 냄 (주어진 식 자체에는 점수 없음).",
        // EN: M1: (c) Sets up <span class="chem">40000(1.03^n - 1) &gt; 30000</span> (an equation is acceptable).
        "M1: (c) <span class=\"chem\">40000(1.03^n - 1) &gt; 30000</span>을 세움 (방정식도 인정).",
        // EN: A1: (c) <span class="chem">1.03^n &gt; 1.75</span>, so <span class="chem">n &gt; 18.93</span> (or GDC values 28 097.32 for <span class="chem">n = 18</span> and 30 140.24 for <span class="chem">n = 19</span>).
        "A1: (c) <span class=\"chem\">1.03^n &gt; 1.75</span>, 따라서 <span class=\"chem\">n &gt; 18.93</span> (또는 GDC 값: <span class=\"chem\">n = 18</span>일 때 28 097.32, <span class=\"chem\">n = 19</span>일 때 30 140.24).",
        // EN: A1: (c) <span class="chem">n = 19</span>.
        "A1: (c) <span class=\"chem\">n = 19</span>.",
      ],
    },

    // ── t1-1-q053 · short · exam · SL · SL 1.4 · 6 marks
    "t1-1-q053": {
      // EN: <p>A printing machine is bought for 50 000 USD. Its value depreciates by 20% each year.</p><p>(a) Write down an expression for the value of the machine after <span class="chem">n</span> years. <strong>[1]</strong><br>(b) Find the value of the machine after 2 years. <strong>[2]</strong><br>(c) Find the least number of complete years after which the machine is worth less than half of its original value. <strong>[3]</strong></p>
      stem: "<p>인쇄기를 50 000 USD에 샀어요. 인쇄기의 가치는 매년 20%씩 감가상각돼요.</p><p>(a) <span class=\"chem\">n</span>년 후 인쇄기의 가치를 나타내는 식을 쓰시오 (Write down). <strong>[1]</strong><br>(b) 2년 후 인쇄기의 가치를 구하시오 (Find). <strong>[2]</strong><br>(c) 인쇄기의 가치가 처음 가치의 절반보다 작아지는 것은 최소 몇 년(꽉 찬 햇수) 후인지 구하시오 (Find). <strong>[3]</strong></p>",
      hints: [
        // EN: A 20% loss each year means multiplying by 0.8 each year.
        "매년 20%씩 줄어든다는 것은 매년 0.8을 곱한다는 뜻이에요.",
        // EN: On Paper 1, compute powers of 0.8 by hand: <span class="chem">0.8^2 = 0.64</span>, <span class="chem">0.8^3 = 0.512</span>, …
        "Paper 1에서는 0.8의 거듭제곱을 손으로 계산하세요: <span class=\"chem\">0.8^2 = 0.64</span>, <span class=\"chem\">0.8^3 = 0.512</span>, …",
        // EN: "Less than half" is strict: 0.512 is still more than 0.5.
        "\"절반보다 작다\"는 등호를 포함하지 않아요: 0.512는 아직 0.5보다 커요.",
      ],
      // EN: <p>The value after <span class="chem">n</span> years is <span class="chem">50000(0.8)^n</span>. Half of the original value is 25 000, so we need <span class="chem">0.8^n &lt; 0.5</span>. After 3 years the value is 25 600, which is still above half; after 4 years it is 20 480. The answer is 4 complete years.</p>
      solution: "<p><span class=\"chem\">n</span>년 후의 가치는 <span class=\"chem\">50000(0.8)^n</span>이에요. 처음 가치의 절반은 25 000이므로 <span class=\"chem\">0.8^n &lt; 0.5</span>여야 해요. 3년 후의 가치는 25 600으로 아직 절반보다 크고, 4년 후에는 20 480이에요. 답은 꽉 찬 4년이에요.</p>",
      // EN: <div class="worked__math">(a) <b>50 000 × 0.8<sup><i>n</i></sup></b></div><div class="worked__math">(b) 50 000 × 0.64 = <b>32 000 USD</b></div><div class="worked__math">(c) Need 0.8<sup><i>n</i></sup> &lt; 0.5. 0.8<sup>3</sup> = 0.512 (value 25 600, not yet below 25 000); 0.8<sup>4</sup> = 0.4096 (value 20 480). So <b>4 years</b></div>
      answer: "<div class=\"worked__math\">(a) <b>50 000 × 0.8<sup><i>n</i></sup></b></div><div class=\"worked__math\">(b) 50 000 × 0.64 = <b>32 000 USD</b></div><div class=\"worked__math\">(c) 0.8<sup><i>n</i></sup> &lt; 0.5여야 함. 0.8<sup>3</sup> = 0.512 (가치 25 600, 아직 25 000보다 작지 않음); 0.8<sup>4</sup> = 0.4096 (가치 20 480). 따라서 <b>4년</b></div>",
      markscheme: [
        // EN: A1: (a) <span class="chem">50000 × 0.8^n</span> (or equivalent).
        "A1: (a) <span class=\"chem\">50000 × 0.8^n</span> (또는 동치인 식).",
        // EN: M1: (b) Substitutes <span class="chem">n = 2</span>: <span class="chem">50000 × 0.8^2</span>.
        "M1: (b) <span class=\"chem\">n = 2</span>를 대입함: <span class=\"chem\">50000 × 0.8^2</span>.",
        // EN: A1: (b) 32 000 USD.
        "A1: (b) 32 000 USD.",
        // EN: M1: (c) Sets up <span class="chem">50000 × 0.8^n &lt; 25000</span>, i.e. <span class="chem">0.8^n &lt; 0.5</span>.
        "M1: (c) <span class=\"chem\">50000 × 0.8^n &lt; 25000</span>, 즉 <span class=\"chem\">0.8^n &lt; 0.5</span>를 세움.",
        // EN: A1: (c) Evaluates <span class="chem">0.8^3 = 0.512</span> and <span class="chem">0.8^4 = 0.4096</span> (or the values 25 600 and 20 480).
        "A1: (c) <span class=\"chem\">0.8^3 = 0.512</span>와 <span class=\"chem\">0.8^4 = 0.4096</span>을 계산함 (또는 값 25 600과 20 480).",
        // EN: A1: (c) 4 years.
        "A1: (c) 4년.",
      ],
    },

    // ── t1-1-q054 · numeric · exam · SL · SL 1.1 · 3 marks
    "t1-1-q054": {
      // EN: <p>Find the value of <span class="chem">(2.4 × 10^{-3})^2 / (1.6 × 10^{-8})</span>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>
      stem: "<p><span class=\"chem\">(2.4 × 10^{-3})^2 / (1.6 × 10^{-8})</span>의 값을 구하시오 (Find). 답은 <span class=\"chem\">a × 10^k</span> (<span class=\"chem\">1 &lt;= a &lt; 10</span>, <span class=\"chem\">k</span>는 정수) 꼴로 나타내시오.</p>",
      hints: [
        // EN: Square both parts of the bracket: <span class="chem">(2.4)^2 × (10^{-3})^2</span>.
        "괄호 안의 두 부분을 모두 제곱하세요: <span class=\"chem\">(2.4)^2 × (10^{-3})^2</span>.",
        // EN: Then divide the leading numbers and subtract the powers of 10: <span class="chem">-6 - (-8) = 2</span>.
        "그다음 앞의 수끼리 나누고 10의 지수끼리 빼세요: <span class=\"chem\">-6 - (-8) = 2</span>.",
      ],
      // EN: <div class="worked__math">(2.4 × 10<sup>−3</sup>)<sup>2</sup> = 5.76 × 10<sup>−6</sup> <b>[A1]</b></div><div class="worked__math"><span class="frac"><span>5.76 × 10<sup>−6</sup></span><span>1.6 × 10<sup>−8</sup></span></span> = 3.6 × 10<sup>−6 − (−8)</sup> <b>[M1]</b></div><div class="worked__math">= <b>3.6 × 10<sup>2</sup></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">(2.4 × 10<sup>−3</sup>)<sup>2</sup> = 5.76 × 10<sup>−6</sup>   <b>[A1]</b></div><div class=\"worked__math\"><span class=\"frac\"><span>5.76 × 10<sup>−6</sup></span><span>1.6 × 10<sup>−8</sup></span></span> = 3.6 × 10<sup>−6 − (−8)</sup>   <b>[M1]</b></div><div class=\"worked__math\">= <b>3.6 × 10<sup>2</sup></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q055 · numeric · challenge · SL · SL 1.1, 1.3 · 5 marks
    "t1-1-q055": {
      // EN: <p>At the start of 2020, a company stored <span class="chem">3.2 × 10^{15}</span> bytes of data. The amount stored at the start of each year is 28% greater than at the start of the previous year. Find the first year at the start of which the amount stored exceeds <span class="chem">1.0 × 10^{18}</span> bytes.</p>
      stem: "<p>2020년 초에 어떤 회사는 <span class=\"chem\">3.2 × 10^{15}</span>바이트의 데이터를 저장하고 있었어요. 매년 초에 저장된 양은 그 전해 초보다 28% 많아요. 연초에 저장된 양이 처음으로 <span class=\"chem\">1.0 × 10^{18}</span>바이트를 넘는 해를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is a geometric sequence in standard-form numbers. The question asks for a calendar year, not for <span class="chem">n</span>, so decide what <span class="chem">n</span> means first: let <span class="chem">n</span> be the number of years after the start of 2020.
        "해석: 이것은 과학적 표기법으로 나타낸 수들의 등비수열이에요. 문제는 <span class=\"chem\">n</span>이 아니라 연도를 묻고 있으므로 먼저 <span class=\"chem\">n</span>의 의미를 정하세요: <span class=\"chem\">n</span>을 2020년 초 이후 지난 햇수로 두세요.",
        // EN: Solve <span class="chem">3.2 × 10^{15} × 1.28^n &gt; 1.0 × 10^{18}</span>, i.e. <span class="chem">1.28^n &gt; 312.5</span>.
        "<span class=\"chem\">3.2 × 10^{15} × 1.28^n &gt; 1.0 × 10^{18}</span>, 즉 <span class=\"chem\">1.28^n &gt; 312.5</span>를 푸세요.",
        // EN: Round <span class="chem">n</span> up to an integer, then add it to 2020.
        "<span class=\"chem\">n</span>을 정수로 올림한 다음 2020에 더하세요.",
      ],
      // EN: <p>Decoding: the amount at the start of 2020 + <span class="chem">n</span> is <span class="chem">3.2 × 10^{15} × 1.28^n</span> (so 2020 corresponds to <span class="chem">n = 0</span>, not <span class="chem">n = 1</span>).</p><div class="worked__math">3.2 × 10<sup>15</sup> × 1.28<sup><i>n</i></sup> &gt; 10<sup>18</sup> ⇒ 1.28<sup><i>n</i></sup> &gt; 312.5 <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 312.5</span><span>ln 1.28</span></span> ≈ 23.27 <b>[A1]</b></div><div class="worked__math"><i>n</i> = 24 (check: <i>n</i> = 23 gives 9.35 × 10<sup>17</sup>, <i>n</i> = 24 gives 1.20 × 10<sup>18</sup>) <b>[A1]</b></div><div class="worked__math">Year: 2020 + 24 = <b>2044</b> <b>[A1]</b></div>
      solution: "<p>해석: 2020 + <span class=\"chem\">n</span>년 초의 양은 <span class=\"chem\">3.2 × 10^{15} × 1.28^n</span>이에요 (따라서 2020년은 <span class=\"chem\">n = 1</span>이 아니라 <span class=\"chem\">n = 0</span>에 해당해요).</p><div class=\"worked__math\">3.2 × 10<sup>15</sup> × 1.28<sup><i>n</i></sup> &gt; 10<sup>18</sup>  ⇒  1.28<sup><i>n</i></sup> &gt; 312.5   <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 312.5</span><span>ln 1.28</span></span> ≈ 23.27   <b>[A1]</b></div><div class=\"worked__math\"><i>n</i> = 24 (확인: <i>n</i> = 23일 때 9.35 × 10<sup>17</sup>, <i>n</i> = 24일 때 1.20 × 10<sup>18</sup>)   <b>[A1]</b></div><div class=\"worked__math\">연도: 2020 + 24 = <b>2044</b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q056 · short · challenge · SL · SL 1.2, 1.3 · 9 marks
    "t1-1-q056": {
      // EN: <p>An arithmetic sequence <span class="chem">u_n</span> has common difference <span class="chem">d</span>, and a geometric sequence <span class="chem">v_n</span> has common ratio <span class="chem">r</span>. The geometric sequence is not constant. Both sequences have first term 3. The third term of the arithmetic sequence equals the second term of the geometric sequence, and the seventh term of the arithmetic sequence equals the third term of the geometric sequence.</p><p>(a) Show that <span class="chem">r^2 - 3r + 2 = 0</span>. <strong>[3]</strong><br>(b) Find the value of <span class="chem">r</span> and the value of <span class="chem">d</span>. <strong>[4]</strong><br>(c) Find <span class="chem">Σ_{k=1}^{20} u_k</span>. <strong>[2]</strong></p>
      stem: "<p>등차수열 <span class=\"chem\">u_n</span>의 공차는 <span class=\"chem\">d</span>이고, 등비수열 <span class=\"chem\">v_n</span>의 공비는 <span class=\"chem\">r</span>이에요. 이 등비수열은 상수열이 아니에요. 두 수열의 첫째항은 모두 3이에요. 등차수열의 제3항은 등비수열의 제2항과 같고, 등차수열의 제7항은 등비수열의 제3항과 같아요.</p><p>(a) <span class=\"chem\">r^2 - 3r + 2 = 0</span>임을 보이시오 (Show that). <strong>[3]</strong><br>(b) <span class=\"chem\">r</span>의 값과 <span class=\"chem\">d</span>의 값을 구하시오 (Find). <strong>[4]</strong><br>(c) <span class=\"chem\">Σ_{k=1}^{20} u_k</span>를 구하시오 (Find). <strong>[2]</strong></p>",
      hints: [
        // EN: Decode: translate each sentence into an equation using <span class="chem">u_n = 3 + (n - 1)d</span> and <span class="chem">v_n = 3r^{n-1}</span>. The phrase "not constant" is a hidden condition: it rules out <span class="chem">r = 1</span>.
        "해석: <span class=\"chem\">u_n = 3 + (n - 1)d</span>와 <span class=\"chem\">v_n = 3r^{n-1}</span>을 이용해 각 문장을 방정식으로 바꾸세요. \"상수열이 아니다\"라는 말은 숨은 조건으로, <span class=\"chem\">r = 1</span>을 제외해요.",
        // EN: Third arithmetic term: <span class="chem">3 + 2d</span>; second geometric term: <span class="chem">3r</span>. Seventh arithmetic term: <span class="chem">3 + 6d</span>; third geometric term: <span class="chem">3r^2</span>.
        "등차수열의 제3항: <span class=\"chem\">3 + 2d</span>, 등비수열의 제2항: <span class=\"chem\">3r</span>. 등차수열의 제7항: <span class=\"chem\">3 + 6d</span>, 등비수열의 제3항: <span class=\"chem\">3r^2</span>.",
        // EN: Make <span class="chem">d</span> the subject of the first equation and substitute into the second.
        "첫 번째 방정식을 <span class=\"chem\">d</span>에 대해 정리하고 두 번째 방정식에 대입하세요.",
      ],
      // EN: <p>Decoding: four "term equals term" facts become two equations; "not constant" eliminates the root <span class="chem">r = 1</span> (which would give <span class="chem">d = 0</span> and two constant sequences). With <span class="chem">r = 2</span>, <span class="chem">d = 3/2</span>: check <span class="chem">u_3 = 6 = v_2</span> and <span class="chem">u_7 = 12 = v_3</span>. Then <span class="chem">S_{20} = 345</span>.</p>
      solution: "<p>해석: \"항이 항과 같다\"는 네 가지 정보가 두 방정식이 돼요. \"상수열이 아니다\"는 근 <span class=\"chem\">r = 1</span>(<span class=\"chem\">d = 0</span>이 되어 두 수열이 모두 상수열이 됨)을 제외해요. <span class=\"chem\">r = 2</span>, <span class=\"chem\">d = 3/2</span>일 때 <span class=\"chem\">u_3 = 6 = v_2</span>, <span class=\"chem\">u_7 = 12 = v_3</span>을 확인하세요. 그러면 <span class=\"chem\">S_{20} = 345</span>예요.</p>",
      // EN: <div class="worked__math">(a) 3 + 2<i>d</i> = 3<i>r</i> and 3 + 6<i>d</i> = 3<i>r</i><sup>2</sup>. From the first, <i>d</i> = <span class="frac"><span>3(<i>r</i> − 1)</span><span>2</span></span>; substituting: 3 + 9(<i>r</i> − 1) = 3<i>r</i><sup>2</sup> ⇒ 3<i>r</i><sup>2</sup> − 9<i>r</i> + 6 = 0 ⇒ <i>r</i><sup>2</sup> − 3<i>r</i> + 2 = 0</div><div class="worked__math">(b) (<i>r</i> − 1)(<i>r</i> − 2) = 0. <i>r</i> = 1 would make the geometric sequence constant, so <b><i>r</i> = 2</b> and <b><i>d</i> = <span class="frac"><span>3</span><span>2</span></span></b></div><div class="worked__math">(c) <span class="frac"><span>20</span><span>2</span></span>(2 × 3 + 19 × <span class="frac"><span>3</span><span>2</span></span>) = 10 × 34.5 = <b>345</b></div>
      answer: "<div class=\"worked__math\">(a) 3 + 2<i>d</i> = 3<i>r</i>, 3 + 6<i>d</i> = 3<i>r</i><sup>2</sup>. 첫 번째 식에서 <i>d</i> = <span class=\"frac\"><span>3(<i>r</i> − 1)</span><span>2</span></span>; 대입하면: 3 + 9(<i>r</i> − 1) = 3<i>r</i><sup>2</sup>  ⇒  3<i>r</i><sup>2</sup> − 9<i>r</i> + 6 = 0  ⇒  <i>r</i><sup>2</sup> − 3<i>r</i> + 2 = 0</div><div class=\"worked__math\">(b) (<i>r</i> − 1)(<i>r</i> − 2) = 0. <i>r</i> = 1이면 등비수열이 상수열이 되므로 <b><i>r</i> = 2</b>, <b><i>d</i> = <span class=\"frac\"><span>3</span><span>2</span></span></b></div><div class=\"worked__math\">(c) <span class=\"frac\"><span>20</span><span>2</span></span>(2 × 3 + 19 × <span class=\"frac\"><span>3</span><span>2</span></span>) = 10 × 34.5 = <b>345</b></div>",
      markscheme: [
        // EN: M1: (a) Writes both conditions: <span class="chem">3 + 2d = 3r</span> and <span class="chem">3 + 6d = 3r^2</span>.
        "M1: (a) 두 조건을 씀: <span class=\"chem\">3 + 2d = 3r</span>, <span class=\"chem\">3 + 6d = 3r^2</span>.",
        // EN: M1: (a) Eliminates <span class="chem">d</span>, e.g. <span class="chem">d = 3(r - 1)/2</span> substituted into the second equation.
        "M1: (a) <span class=\"chem\">d</span>를 소거함, 예: <span class=\"chem\">d = 3(r - 1)/2</span>를 두 번째 방정식에 대입.",
        // EN: A1: (a) <span class="chem">3 + 9(r - 1) = 3r^2</span> or <span class="chem">3r^2 - 9r + 6 = 0</span>, which leads to the given equation (the given line itself earns no mark).
        "A1: (a) <span class=\"chem\">3 + 9(r - 1) = 3r^2</span> 또는 <span class=\"chem\">3r^2 - 9r + 6 = 0</span>, 이로부터 주어진 방정식을 이끌어 냄 (주어진 식 자체에는 점수 없음).",
        // EN: M1: (b) Factorizes: <span class="chem">(r - 1)(r - 2) = 0</span>.
        "M1: (b) 인수분해함: <span class=\"chem\">(r - 1)(r - 2) = 0</span>.",
        // EN: R1: (b) Rejects <span class="chem">r = 1</span> because the geometric sequence is not constant.
        "R1: (b) 등비수열이 상수열이 아니므로 <span class=\"chem\">r = 1</span>을 제외함.",
        // EN: A1: (b) <span class="chem">r = 2</span>.
        "A1: (b) <span class=\"chem\">r = 2</span>.",
        // EN: A1: (b) <span class="chem">d = 3/2</span>.
        "A1: (b) <span class=\"chem\">d = 3/2</span>.",
        // EN: M1: (c) Uses <span class="chem">S_{20} = (20/2)(2 × 3 + 19 × 3/2)</span>.
        "M1: (c) <span class=\"chem\">S_{20} = (20/2)(2 × 3 + 19 × 3/2)</span>를 이용함.",
        // EN: A1: (c) 345.
        "A1: (c) 345.",
      ],
    },

    // ── t1-1-q057 · numeric · exam · SL · SL 1.8 · 4 marks
    "t1-1-q057": {
      // EN: <p>Find the exact value of <span class="chem">Σ_{k=2}^{infty} 5(-2/3)^k</span>.</p>
      stem: "<p><span class=\"chem\">Σ_{k=2}^{infty} 5(-2/3)^k</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The sum starts at <span class="chem">k = 2</span>, so the first term is <span class="chem">5(-2/3)^2 = 20/9</span>, not 5.
        "합이 <span class=\"chem\">k = 2</span>부터 시작하므로 첫째항은 5가 아니라 <span class=\"chem\">5(-2/3)^2 = 20/9</span>예요.",
        // EN: The common ratio is <span class="chem">-2/3</span>, and <span class="chem">|-2/3| &lt; 1</span>. Use <span class="chem">S_infty = u_1/(1 - r)</span> and take care with <span class="chem">1 - (-2/3)</span>.
        "공비는 <span class=\"chem\">-2/3</span>이고 <span class=\"chem\">|-2/3| &lt; 1</span>이에요. <span class=\"chem\">S_infty = u_1/(1 - r)</span>을 이용하고 <span class=\"chem\">1 - (-2/3)</span>의 계산에 주의하세요.",
      ],
      // EN: <div class="worked__math">First term (<i>k</i> = 2): 5 × <span class="frac"><span>4</span><span>9</span></span> = <span class="frac"><span>20</span><span>9</span></span> <b>[A1]</b></div><div class="worked__math"><i>r</i> = −<span class="frac"><span>2</span><span>3</span></span>, |<i>r</i>| &lt; 1 <b>[A1]</b></div><div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>20/9</span><span>1 + 2/3</span></span> = <span class="frac"><span>20</span><span>9</span></span> × <span class="frac"><span>3</span><span>5</span></span> <b>[M1]</b></div><div class="worked__math">= <b><span class="frac"><span>4</span><span>3</span></span></b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">첫째항(<i>k</i> = 2): 5 × <span class=\"frac\"><span>4</span><span>9</span></span> = <span class=\"frac\"><span>20</span><span>9</span></span>   <b>[A1]</b></div><div class=\"worked__math\"><i>r</i> = −<span class=\"frac\"><span>2</span><span>3</span></span>, |<i>r</i>| &lt; 1   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>20/9</span><span>1 + 2/3</span></span> = <span class=\"frac\"><span>20</span><span>9</span></span> × <span class=\"frac\"><span>3</span><span>5</span></span>   <b>[M1]</b></div><div class=\"worked__math\">= <b><span class=\"frac\"><span>4</span><span>3</span></span></b>   <b>[A1]</b></div>",
    },

    // ── t1-1-q058 · short · exam · SL · SL 1.3, 1.8 · 7 marks
    "t1-1-q058": {
      // EN: <p>Consider the geometric series <span class="chem">Σ_{k=1}^{n} 6(1/2)^k</span>, whose sum is <span class="chem">S_n</span>.</p><p>(a) Find the sum to infinity <span class="chem">S_infty</span> of the series. <strong>[2]</strong><br>(b) Show that <span class="chem">S_infty - S_n = 6(1/2)^n</span>. <strong>[2]</strong><br>(c) Hence find the least value of <span class="chem">n</span> for which <span class="chem">S_infty - S_n &lt; 0.01</span>. <strong>[3]</strong></p>
      stem: "<p>등비급수 <span class=\"chem\">Σ_{k=1}^{n} 6(1/2)^k</span>를 생각하고, 그 합을 <span class=\"chem\">S_n</span>이라 하자.</p><p>(a) 이 급수의 합 <span class=\"chem\">S_infty</span>를 구하시오 (Find). <strong>[2]</strong><br>(b) <span class=\"chem\">S_infty - S_n = 6(1/2)^n</span>임을 보이시오 (Show that). <strong>[2]</strong><br>(c) 이를 이용하여 <span class=\"chem\">S_infty - S_n &lt; 0.01</span>을 만족하는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Hence find). <strong>[3]</strong></p>",
      hints: [
        // EN: The sum starts at <span class="chem">k = 1</span>, so the first term is <span class="chem">6 × 1/2 = 3</span>.
        "합이 <span class=\"chem\">k = 1</span>부터 시작하므로 첫째항은 <span class=\"chem\">6 × 1/2 = 3</span>이에요.",
        // EN: For (b), write <span class="chem">S_n</span> with the finite geometric formula and subtract it from 6.
        "(b)에서는 유한 등비급수의 합 공식으로 <span class=\"chem\">S_n</span>을 쓰고 6에서 빼세요.",
        // EN: For (c) on Paper 1, multiply out: <span class="chem">(1/2)^n &lt; 1/600</span> means <span class="chem">2^n &gt; 600</span>. List powers of 2.
        "Paper 1의 (c)에서는 식을 정리하세요: <span class=\"chem\">(1/2)^n &lt; 1/600</span>은 <span class=\"chem\">2^n &gt; 600</span>이라는 뜻이에요. 2의 거듭제곱을 나열하세요.",
      ],
      // EN: <p><span class="chem">S_infty - S_n</span> is the "tail" of the series, the terms after the <span class="chem">n</span>-th. Here it equals <span class="chem">6(1/2)^n</span>. The condition becomes <span class="chem">2^n &gt; 600</span>. Since <span class="chem">2^9 = 512</span> is too small and <span class="chem">2^{10} = 1024</span> works, the least value is <span class="chem">n = 10</span>.</p>
      solution: "<p><span class=\"chem\">S_infty - S_n</span>은 급수의 \"꼬리\", 즉 제<span class=\"chem\">n</span>항 이후의 항들이에요. 여기서는 <span class=\"chem\">6(1/2)^n</span>과 같아요. 조건은 <span class=\"chem\">2^n &gt; 600</span>이 돼요. <span class=\"chem\">2^9 = 512</span>는 너무 작고 <span class=\"chem\">2^{10} = 1024</span>는 만족하므로 최솟값은 <span class=\"chem\">n = 10</span>이에요.</p>",
      // EN: <div class="worked__math">(a) <i>u</i><sub>1</sub> = 3, <i>r</i> = <span class="frac"><span>1</span><span>2</span></span>: <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>1/2</span></span> = <b>6</b></div><div class="worked__math">(b) <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>3(1 − (1/2)<sup><i>n</i></sup>)</span><span>1/2</span></span> = 6 − 6(1/2)<sup><i>n</i></sup>, so <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = 6(1/2)<sup><i>n</i></sup></div><div class="worked__math">(c) 6(1/2)<sup><i>n</i></sup> &lt; 0.01 ⇔ 2<sup><i>n</i></sup> &gt; 600. Since 2<sup>9</sup> = 512 and 2<sup>10</sup> = 1024, <b><i>n</i> = 10</b></div>
      answer: "<div class=\"worked__math\">(a) <i>u</i><sub>1</sub> = 3, <i>r</i> = <span class=\"frac\"><span>1</span><span>2</span></span>: <i>S</i><sub>∞</sub> = <span class=\"frac\"><span>3</span><span>1/2</span></span> = <b>6</b></div><div class=\"worked__math\">(b) <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span>3(1 − (1/2)<sup><i>n</i></sup>)</span><span>1/2</span></span> = 6 − 6(1/2)<sup><i>n</i></sup>, 따라서 <i>S</i><sub>∞</sub> − <i>S</i><sub><i>n</i></sub> = 6(1/2)<sup><i>n</i></sup></div><div class=\"worked__math\">(c) 6(1/2)<sup><i>n</i></sup> &lt; 0.01  ⇔  2<sup><i>n</i></sup> &gt; 600. 2<sup>9</sup> = 512이고 2<sup>10</sup> = 1024이므로 <b><i>n</i> = 10</b></div>",
      markscheme: [
        // EN: A1: (a) Identifies <span class="chem">u_1 = 3</span> and <span class="chem">r = 1/2</span>.
        "A1: (a) <span class=\"chem\">u_1 = 3</span>과 <span class=\"chem\">r = 1/2</span>을 파악함.",
        // EN: A1: (a) <span class="chem">S_infty = 6</span>.
        "A1: (a) <span class=\"chem\">S_infty = 6</span>.",
        // EN: M1: (b) Uses <span class="chem">S_n = 3(1 - (1/2)^n)/(1 - 1/2)</span>.
        "M1: (b) <span class=\"chem\">S_n = 3(1 - (1/2)^n)/(1 - 1/2)</span>을 이용함.",
        // EN: A1: (b) <span class="chem">S_n = 6 - 6(1/2)^n</span>, which leads to the given result (the given line itself earns no mark).
        "A1: (b) <span class=\"chem\">S_n = 6 - 6(1/2)^n</span>, 이로부터 주어진 결과를 이끌어 냄 (주어진 식 자체에는 점수 없음).",
        // EN: M1: (c) Sets <span class="chem">6(1/2)^n &lt; 0.01</span> and rearranges to <span class="chem">2^n &gt; 600</span>.
        "M1: (c) <span class=\"chem\">6(1/2)^n &lt; 0.01</span>로 두고 <span class=\"chem\">2^n &gt; 600</span>으로 정리함.",
        // EN: A1: (c) Compares powers of 2: <span class="chem">2^9 = 512 &lt; 600 &lt; 1024 = 2^{10}</span>.
        "A1: (c) 2의 거듭제곱을 비교함: <span class=\"chem\">2^9 = 512 &lt; 600 &lt; 1024 = 2^{10}</span>.",
        // EN: A1: (c) <span class="chem">n = 10</span>.
        "A1: (c) <span class=\"chem\">n = 10</span>.",
      ],
    },

    // ── t1-1-q059 · numeric · challenge · SL · SL 1.2 · 5 marks
    "t1-1-q059": {
      // EN: <p>Find the sum of all the odd integers between 100 and 500 that are multiples of 7.</p>
      stem: "<p>100과 500 사이의 홀수 중에서 7의 배수인 것을 모두 더한 합을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the numbers you want are 7 × (odd number). Consecutive ones differ by 14, not 7, so they form an arithmetic sequence with <span class="chem">d = 14</span>. You need its first term, last term and number of terms.
        "해석: 구하는 수는 7 × (홀수)예요. 이웃한 두 수의 차는 7이 아니라 14이므로 <span class=\"chem\">d = 14</span>인 등차수열을 이뤄요. 첫째항, 끝항, 항의 개수가 필요해요.",
        // EN: The first multiple of 7 above 100 is 105 (odd). The last multiple of 7 below 500 is 497 (odd).
        "100보다 큰 첫 번째 7의 배수는 105(홀수)예요. 500보다 작은 마지막 7의 배수는 497(홀수)예요.",
        // EN: Number of terms <span class="chem">= (497 - 105)/14 + 1</span>. Then use <span class="chem">S = (N/2)(first + last)</span>.
        "항의 개수 <span class=\"chem\">= (497 - 105)/14 + 1</span>. 그다음 <span class=\"chem\">S = (N/2)(first + last)</span>(첫째항 + 끝항)를 이용하세요.",
      ],
      // EN: <p>Decoding: "odd multiples of 7" skip every other multiple of 7, so the common difference is 14.</p><div class="worked__math">Arithmetic sequence 105, 119, 133, …, 497 with <i>d</i> = 14 <b>[R1]</b></div><div class="worked__math">First term 105, last term 497 <b>[A1]</b></div><div class="worked__math"><i>N</i> = <span class="frac"><span>497 − 105</span><span>14</span></span> + 1 = 29 <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>29</span><span>2</span></span>(105 + 497) <b>[M1]</b></div><div class="worked__math">= 29 × 301 = <b>8729</b> <b>[A1]</b></div>
      solution: "<p>해석: \"7의 배수인 홀수\"는 7의 배수를 하나씩 건너뛰므로 공차는 14예요.</p><div class=\"worked__math\">등차수열 105, 119, 133, …, 497, <i>d</i> = 14   <b>[R1]</b></div><div class=\"worked__math\">첫째항 105, 끝항 497   <b>[A1]</b></div><div class=\"worked__math\"><i>N</i> = <span class=\"frac\"><span>497 − 105</span><span>14</span></span> + 1 = 29   <b>[A1]</b></div><div class=\"worked__math\"><i>S</i> = <span class=\"frac\"><span>29</span><span>2</span></span>(105 + 497)   <b>[M1]</b></div><div class=\"worked__math\">= 29 × 301 = <b>8729</b>   <b>[A1]</b></div>",
    },

  }
});
