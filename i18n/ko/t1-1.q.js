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
