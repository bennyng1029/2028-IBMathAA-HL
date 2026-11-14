/* t1-1.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't1-1.q', {
  questions: {

    // ── t1-1-q001 · mcq · foundation · SL · SL 1.1 · 2 marks
    "t1-1-q001": {
      // EN: <p>Let <span class="chem">A = 3.2 × 10^5</span> and <span class="chem">B = 8.0 × 10^{-3}</span>. Find the value of <span class="chem">A / B</span> in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> is an integer.</p>
      stem: "<p><span class=\"chem\">A = 3.2 × 10^5</span>、<span class=\"chem\">B = 8.0 × 10^{-3}</span> とする。<span class=\"chem\">A / B</span> の値を <span class=\"chem\">a × 10^k</span>（<span class=\"chem\">1 &lt;= a &lt; 10</span>、<span class=\"chem\">k</span> は整数）の形で求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">4.0 × 10^7</span>
        "<span class=\"chem\">4.0 × 10^7</span>",
        // EN: <span class="chem">0.4 × 10^8</span>
        "<span class=\"chem\">0.4 × 10^8</span>",
        // EN: <span class="chem">4.0 × 10^2</span>
        "<span class=\"chem\">4.0 × 10^2</span>",
        // EN: <span class="chem">4.0 × 10^8</span>
        "<span class=\"chem\">4.0 × 10^8</span>",
      ],
      hints: [
        // EN: Divide the coefficients and subtract the powers of 10 separately: <span class="chem">(3.2 / 8.0) × 10^{5 - (-3)}</span>.
        "係数どうしを割り、10 の指数どうしを別々に引きます：<span class=\"chem\">(3.2 / 8.0) × 10^{5 - (-3)}</span>。",
        // EN: Adjust <span class="chem">0.4 × 10^8</span> so the leading number lies between 1 and 10.
        "先頭の数が 1 以上 10 未満になるように <span class=\"chem\">0.4 × 10^8</span> を調整します。",
      ],
      // EN: <div class="worked__math"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> / <i>B</i> = (3.2 / 8.0) × 10<sup>5 − (−3)</sup> = 0.4 × 10<sup>8</sup> = <b>4.0 × 10<sup>7</sup></b></div>",
      misconception: {
        // EN (option B): In standard form <span class="chem">a × 10^k</span>, the coefficient must satisfy <span class="chem">1 &lt;= a &lt; 10</span>. Write <span class="chem">0.4 × 10^8</span> as <span class="chem">4.0 × 10^7</span>.
        "1": "指数表記 <span class=\"chem\">a × 10^k</span> では、係数は <span class=\"chem\">1 &lt;= a &lt; 10</span> を満たす必要があります。<span class=\"chem\">0.4 × 10^8</span> を <span class=\"chem\">4.0 × 10^7</span> に直しましょう。",
        // EN (option C): When dividing powers of 10, subtract the bottom exponent: <span class="chem">5 - (-3) = 8</span>, not <span class="chem">5 - 3 = 2</span>.
        "2": "10 の累乗を割るときは分母の指数を引きます：<span class=\"chem\">5 - 3 = 2</span> ではなく、<span class=\"chem\">5 - (-3) = 8</span> です。",
        // EN (option D): Since <span class="chem">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span>, the exponent decreases from 8 to 7, not 8.
        "3": "<span class=\"chem\">3.2 / 8.0 = 0.4 = 4.0 × 10^{-1}</span> なので、指数は 8 のままではなく 8 から 7 へ 1 つ減ります。",
      },
    },

    // ── t1-1-q002 · numeric · foundation · SL · SL 1.2 · 3 marks
    "t1-1-q002": {
      // EN: <p>In an arithmetic sequence, the fourth term is <span class="chem">u_4 = 19</span> and the tenth term is <span class="chem">u_{10} = 43</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>ある等差数列において、第 4 項が <span class=\"chem\">u_4 = 19</span>、第 10 項が <span class=\"chem\">u_{10} = 43</span> である。初項 <span class=\"chem\">u_1</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: From <span class="chem">u_4</span> to <span class="chem">u_{10}</span> there are <span class="chem">10 - 4 = 6</span> steps of size <span class="chem">d</span>.
        "<span class=\"chem\">u_4</span> から <span class=\"chem\">u_{10}</span> までは、公差 <span class=\"chem\">d</span> が <span class=\"chem\">10 - 4 = 6</span> 回分増えています。",
        // EN: Once you find <span class="chem">d</span>, use <span class="chem">u_4 = u_1 + 3d = 19</span> to solve for <span class=\"chem\">u_1</span>.
        "<span class=\"chem\">d</span> を求めたら、<span class=\"chem\">u_4 = u_1 + 3d = 19</span> に代入して <span class=\"chem\">u_1</span> を求めます。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class="worked__math"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>10</sub> − <i>u</i><sub>4</sub> = 6<i>d</i> = 43 − 19 = 24 ⇒ <i>d</i> = 4</div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>u</i><sub>4</sub> − 3<i>d</i> = 19 − 12 = <b>7</b></div>",
    },

    // ── t1-1-q003 · mcq · foundation · SL · SL 1.2 · 2 marks
    "t1-1-q003": {
      // EN: <p>How many terms are in the sum <span class="chem">Σ_{k=4}^{19} (5k - 2)</span>, and what is the first term of this sum?</p>
      stem: "<p>和 <span class=\"chem\">Σ_{k=4}^{19} (5k - 2)</span> にはいくつの項が含まれ、その初項（最初の項）はいくらですか？</p>",
      options: [
        // EN: 15 terms, first term is 18
        "15 項、初項は 18",
        // EN: 16 terms, first term is 18
        "16 項、初項は 18",
        // EN: 16 terms, first term is 3
        "16 項、初項は 3",
        // EN: 19 terms, first term is 18
        "19 項、初項は 18",
      ],
      hints: [
        // EN: The number of integers from <span class="chem">a</span> to <span class="chem">b</span> inclusive is <span class="chem">b - a + 1</span>.
        "<span class=\"chem\">a</span> から <span class=\"chem\">b</span> までの整数の個数は <span class=\"chem\">b - a + 1</span> です。",
        // EN: Substitute the bottom index <span class="chem">k = 4</span> into <span class="chem">5k - 2</span> to find the first term.
        "シグマの下端 <span class=\"chem\">k = 4</span> を <span class=\"chem\">5k - 2</span> に代入して最初の項を求めます。",
      ],
      // EN: <p>There are <span class="chem">19 - 4 + 1 = 16</span> terms. Substituting <span class="chem">k = 4</span> gives the first term <span class="chem">5(4) - 2 = 18</span>.</p>
      solution: "<p>項数は <span class=\"chem\">19 - 4 + 1 = 16</span> 項です。<span class=\"chem\">k = 4</span> を代入すると、最初の項は <span class=\"chem\">5(4) - 2 = 18</span> となります。</p>",
      misconception: {
        // EN (option A): Counting from <span class="chem">k = 4</span> to <span class="chem">k = 19</span> inclusive gives <span class="chem">19 - 4 + 1 = 16</span> terms, not <span class="chem">19 - 4 = 15</span>.
        "0": "<span class=\"chem\">k = 4</span> から <span class=\"chem\">k = 19</span> まで数えると、<span class=\"chem\">19 - 4 = 15</span> ではなく <span class=\"chem\">19 - 4 + 1 = 16</span> 項になります。",
        // EN (option C): The lower limit of the sigma notation is <span class="chem">k = 4</span>, not <span class="chem">k = 1</span>. Substitute <span class="chem">k = 4</span> to get <span class="chem">5(4) - 2 = 18</span>.
        "2": "シグマ記号の下端は <span class=\"chem\">k = 1</span> ではなく <span class=\"chem\">k = 4</span> です。<span class=\"chem\">k = 4</span> を代入して <span class=\"chem\">5(4) - 2 = 18</span> になります。",
        // EN (option D): The sum starts at <span class="chem">k = 4</span>, so the terms for <span class="chem">k = 1, 2, 3</span> are not included.
        "3": "和は <span class=\"chem\">k = 4</span> から始まるため、<span class=\"chem\">k = 1, 2, 3</span> の項は含まれません。",
      },
    },

    // ── t1-1-q004 · numeric · foundation · SL · SL 1.8 · 3 marks
    "t1-1-q004": {
      // EN: <p>A convergent geometric series has first term <span class="chem">u_1 = 36</span> and common ratio <span class="chem">r = -1/3</span>. Calculate the sum to infinity <span class="chem">S_infty</span>.</p>
      stem: "<p>収束する等比級数の初項が <span class=\"chem\">u_1 = 36</span>、公比が <span class=\"chem\">r = -1/3</span> である。無限等比級数の和 <span class=\"chem\">S_infty</span> を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Since <span class="chem">|r| = 1/3 &lt; 1</span>, the infinite series converges.
        "<span class=\"chem\">|r| = 1/3 &lt; 1</span> なので、この無限級数は収束します。",
        // EN: Use <span class="chem">S_infty = u_1 / (1 - r)</span> and watch the double negative in <span class="chem">1 - (-1/3)</span>.
        "<span class=\"chem\">S_infty = u_1 / (1 - r)</span> を使い、<span class=\"chem\">1 - (-1/3)</span> の二重のマイナスに注意しましょう。",
      ],
      // EN: <div class="worked__math"><i>S</i><sub>∞</sub> = <span class="frac"><span>36</span><span>1 − (−1/3)</span></span> = <span class="frac"><span>36</span><span>4/3</span></span> = <b>27</b></div>
      solution: "<div class=\"worked__math\"><i>S</i><sub>∞</sub> = <span class=\"frac\"><span>36</span><span>1 − (−1/3)</span></span> = <span class=\"frac\"><span>36</span><span>4/3</span></span> = <b>27</b></div>",
    },

    // ── t1-1-q005 · numeric · foundation · SL · SL 1.4 · 3 marks
    "t1-1-q005": {
      // EN: <p>Maya invests 4500 USD in an account paying a nominal annual interest rate of 4.8%, compounded quarterly. Calculate the value of her investment after 6 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Maya は名目年利率 4.8%、四半期ごと複利の口座に 4500 USD を預け入れた。6 年後の預金残高を計算し (Calculate)、小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: Quarterly compounding means <span class="chem">k = 4</span> compounding periods per year.
        "四半期ごと（quarterly）の複利は、1 年あたりの複利計算回数が <span class=\"chem\">k = 4</span> であることを意味します。",
        // EN: Substitute <span class="chem">PV = 4500</span>, <span class="chem">r = 4.8</span>, <span class="chem">k = 4</span>, <span class="chem">n = 6</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>.
        "<span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span> に <span class=\"chem\">PV = 4500</span>、<span class=\"chem\">r = 4.8</span>、<span class=\"chem\">k = 4</span>、<span class=\"chem\">n = 6</span> を代入します。",
      ],
      // EN: <div class="worked__math"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>Correct to 2 decimal places, this is <strong>5991.63 USD</strong>.</p>
      solution: "<div class=\"worked__math\"><i>FV</i> = 4500 × (1 + 4.8 / 400)<sup>4×6</sup> = 4500 × (1.012)<sup>24</sup> ≈ 5991.6276 USD</div><p>小数第 2 位まで求めると <strong>5991.63 USD</strong> になります。</p>",
    },

    // ── t1-1-q006 · multi · foundation · SL · SL 1.8 · 2 marks
    "t1-1-q006": {
      // EN: <p>For which of the following geometric sequences does the sum to infinity <span class="chem">S_infty</span> exist? Select all that apply.</p>
      stem: "<p>次の等比数列のうち、無限等比級数の和 <span class=\"chem\">S_infty</span> が存在するものをすべて選びなさい。</p>",
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
        "等比級数が有限の無限和に収束するための必要十分条件は <span class=\"chem\">|r| &lt; 1</span>（つまり <span class=\"chem\">-1 &lt; r &lt; 1</span>）です。",
        // EN: Find <span class="chem">r = u_2 / u_1</span> for each sequence and check whether <span class="chem">|r| &lt; 1</span>.
        "各数列について <span class=\"chem\">r = u_2 / u_1</span> を求め、<span class=\"chem\">|r| &lt; 1</span> かどうか確かめます。",
      ],
      // EN: <p>The first sequence has <span class="chem">r = -60/100 = -0.6</span> (<span class="chem">|r| = 0.6 &lt; 1</span>) and the third has <span class="chem">r = 3/4</span> (<span class="chem">|r| = 0.75 &lt; 1</span>). Both converge.</p>
      solution: "<p>1 つ目の数列は <span class=\"chem\">r = -60/100 = -0.6</span>（<span class=\"chem\">|r| = 0.6 &lt; 1</span>）、3 つ目は <span class=\"chem\">r = 3/4</span>（<span class=\"chem\">|r| = 0.75 &lt; 1</span>）であり、どちらも収束します。</p>",
      misconception: {
        // EN (option B): Here <span class="chem">r = 1.05</span>. Since <span class="chem">|r| &gt; 1</span>, the terms grow without bound and the sum diverges.
        "1": "ここでは <span class=\"chem\">r = 1.05</span> です。<span class=\"chem\">|r| &gt; 1</span> なので項は限りなく大きくなり、和は発散します。",
        // EN (option D): Here <span class="chem">r = -1</span>. For convergence we strictly need <span class="chem">|r| &lt; 1</span>; when <span class="chem">r = -1</span> the partial sums oscillate between 8 and 0 without approaching a single limit.
        "3": "ここでは <span class=\"chem\">r = -1</span> です。収束するには <span class=\"chem\">|r| &lt; 1</span> が必要であり、<span class=\"chem\">r = -1</span> のときは部分和が 8 と 0 の間を振動して 1 つの極限に近づきません。",
      },
    },

    // ── t1-1-q007 · numeric · exam · SL · SL 1.2 · 4 marks
    "t1-1-q007": {
      // EN: <p>Calculate the exact value of the arithmetic series <span class="chem">Σ_{k=5}^{24} (3k - 7)</span>.</p>
      stem: "<p>等差級数 <span class=\"chem\">Σ_{k=5}^{24} (3k - 7)</span> の厳密値（正確な値）を計算しなさい (Calculate)。</p>",
      hints: [
        // EN: First count the number of terms: from <span class="chem">k = 5</span> to <span class="chem">k = 24</span> inclusive there are <span class="chem">24 - 5 + 1 = 20</span> terms.
        "まず項数を数えます：<span class=\"chem\">k = 5</span> から <span class=\"chem\">k = 24</span> までは <span class=\"chem\">24 - 5 + 1 = 20</span> 項あります。",
        // EN: Find the first term in the sum (<span class="chem">k = 5</span>) and the last term in the sum (<span class="chem">k = 24</span>), then use <span class="chem">S = (N/2)(first + last)</span>.
        "和の最初の項（<span class=\"chem\">k = 5</span>）と最後の項（<span class=\"chem\">k = 24</span>）を求め、<span class=\"chem\">S = (N/2)(first + last)</span>（初項 + 末項）を使います。",
      ],
      // EN: <div class="worked__math">Number of terms <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class="worked__math">First term (<i>k</i> = 5): 3(5) − 7 = 8; Last term (<i>k</i> = 24): 3(24) − 7 = 65 <b>[A1]</b></div><div class="worked__math"><i>S</i> = <span class="frac"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">項数 <i>N</i> = 24 − 5 + 1 = 20 <b>[A1]</b></div><div class=\"worked__math\">最初の項 (<i>k</i> = 5): 3(5) − 7 = 8; 最後の項 (<i>k</i> = 24): 3(24) − 7 = 65 <b>[A1]</b></div><div class=\"worked__math\"><i>S</i> = <span class=\"frac\"><span>20</span><span>2</span></span>(8 + 65) = 10 × 73 = <b>730</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q008 · mcq · exam · SL · SL 1.2 · 4 marks
    "t1-1-q008": {
      // EN: <p>The sum of the first <span class="chem">n</span> terms of a sequence is given by <span class="chem">S_n = 2n^2 + 5n</span> for all <span class="chem">n &gt;= 1</span>. Find an expression for the <span class="chem">n</span>-th term <span class="chem">u_n</span>.</p>
      stem: "<p>ある数列の初項から第 <span class=\"chem\">n</span> 項までの和が、すべての <span class=\"chem\">n &gt;= 1</span> に対して <span class=\"chem\">S_n = 2n^2 + 5n</span> で与えられている。第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span> の式を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">u_n = 4n + 3</span>
        "<span class=\"chem\">u_n = 4n + 3</span>",
        // EN: <span class="chem">u_n = 4n + 5</span>
        "<span class=\"chem\">u_n = 4n + 5</span>",
        // EN: <span class="chem">u_n = 4n + 7</span>
        "<span class=\"chem\">u_n = 4n + 7</span>",
        // EN: <span class="chem">u_n = 2n + 5</span>
        "<span class=\"chem\">u_n = 2n + 5</span>",
      ],
      hints: [
        // EN: Evaluate <span class="chem">u_1 = S_1</span> and <span class="chem">S_2 = u_1 + u_2</span> to find <span class="chem">u_1</span> and <span class="chem">u_2</span>.
        "<span class=\"chem\">u_1 = S_1</span> と <span class=\"chem\">S_2 = u_1 + u_2</span> を計算して <span class=\"chem\">u_1</span> と <span class=\"chem\">u_2</span> を求めます。",
        // EN: Alternatively, simplify <span class="chem">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span>.
        "あるいは、<span class=\"chem\">u_n = S_n - S_{n-1} = (2n^2 + 5n) - (2(n-1)^2 + 5(n-1))</span> を整理しても求められます。",
      ],
      // EN: <div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class="worked__math"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class="worked__math"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>
      solution: "<div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>1</sub> = 2(1)<sup>2</sup> + 5(1) = 7</div><div class=\"worked__math\"><i>S</i><sub>2</sub> = 2(4) + 10 = 18 ⇒ <i>u</i><sub>2</sub> = <i>S</i><sub>2</sub> − <i>S</i><sub>1</sub> = 11 ⇒ <i>d</i> = 11 − 7 = 4</div><div class=\"worked__math\"><i>u</i><sub><i>n</i></sub> = 7 + (<i>n</i> − 1)(4) = <b>4<i>n</i> + 3</b></div>",
      misconception: {
        // EN (option B): Taking the derivative of <span class="chem">2n^2 + 5n</span> gives <span class="chem">4n + 5</span>, which does not match <span class="chem">u_1 = S_1 = 7</span>.
        "1": "<span class=\"chem\">2n^2 + 5n</span> を微分すると <span class=\"chem\">4n + 5</span> になりますが、これでは <span class=\"chem\">u_1 = S_1 = 7</span> と一致しません。",
        // EN (option C): Check the sign when expanding <span class="chem">-2(n - 1)^2 = -2n^2 + 4n - 2</span>. Writing <span class="chem">+2</span> instead gives <span class="chem">4n + 7</span>. Test <span class="chem">n = 1</span>: <span class="chem">u_1 = S_1 = 7</span>, but <span class="chem">4(1) + 7 = 11</span>.
        "2": "<span class=\"chem\">-2(n - 1)^2 = -2n^2 + 4n - 2</span> を展開するときの符号を確認しましょう。<span class=\"chem\">+2</span> と書くと <span class=\"chem\">4n + 7</span> になってしまいます。<span class=\"chem\">n = 1</span> で確かめると <span class=\"chem\">u_1 = S_1 = 7</span> ですが、<span class=\"chem\">4(1) + 7 = 11</span> です。",
        // EN (option D): Dividing <span class="chem">S_n</span> by <span class="chem">n</span> gives the average of the first <span class="chem">n</span> terms, not the <span class="chem">n</span>-th term <span class="chem">u_n</span>.
        "3": "<span class=\"chem\">S_n</span> を <span class=\"chem\">n</span> で割ると初項から第 <span class=\"chem\">n</span> 項までの平均になり、第 <span class=\"chem\">n</span> 項 <span class=\"chem\">u_n</span> にはなりません。",
      },
    },

    // ── t1-1-q009 · numeric · exam · SL · SL 1.3 · 6 marks
    "t1-1-q009": {
      // EN: <p>The terms <span class="chem">3k + 1</span>, <span class="chem">4k - 12</span>, and <span class="chem">19 - 3k</span> are consecutive terms of a geometric sequence. Given that the infinite series formed by this sequence converges, find the value of the common ratio <span class="chem">r</span>.</p>
      stem: "<p><span class=\"chem\">3k + 1</span>、<span class=\"chem\">4k - 12</span>、<span class=\"chem\">19 - 3k</span> は等比数列の連続する 3 項である。この数列から作られる無限級数が収束するとき、公比 <span class=\"chem\">r</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: For three consecutive geometric terms, equate the common ratios: <span class="chem">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span>.
        "等比数列の連続する 3 項では公比が等しいので、<span class=\"chem\">(4k - 12)/(3k + 1) = (19 - 3k)/(4k - 12)</span> とおきます。",
        // EN: Cross-multiply to form a quadratic in <span class="chem">k</span>, find both possible values of <span class="chem">k</span>, and test which one gives <span class="chem">|r| &lt; 1</span>.
        "分母を払って <span class=\"chem\">k</span> の二次方程式を作り、2 つの <span class=\"chem\">k</span> の解を求めたあと、どちらが <span class=\"chem\">|r| &lt; 1</span> を満たすか確かめます。",
      ],
      // EN: <div class="worked__math">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class="worked__math">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class="worked__math">If <i>k</i> = 1, the terms are 4, −8, 16 so <i>r</i> = −2 (diverges since |<i>r</i>| &gt; 1). If <i>k</i> = 5, the terms are 16, 8, 4 so <b><i>r</i> = 0.5</b> (converges since |<i>r</i>| &lt; 1). <b>[R1 A1]</b></div>
      solution: "<div class=\"worked__math\">(4<i>k</i> − 12)<sup>2</sup> = (3<i>k</i> + 1)(19 − 3<i>k</i>) ⇒ 16<i>k</i><sup>2</sup> − 96<i>k</i> + 144 = −9<i>k</i><sup>2</sup> + 54<i>k</i> + 19 <b>[M1 A1]</b></div><div class=\"worked__math\">25<i>k</i><sup>2</sup> − 150<i>k</i> + 125 = 0 ⇒ <i>k</i><sup>2</sup> − 6<i>k</i> + 5 = 0 ⇒ (<i>k</i> − 1)(<i>k</i> − 5) = 0 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>k</i> = 1 のとき、3 項は 4, −8, 16 となり <i>r</i> = −2（|<i>r</i>| &gt; 1 なので発散）。<i>k</i> = 5 のとき、3 項は 16, 8, 4 となり <b><i>r</i> = 0.5</b>（|<i>r</i>| &lt; 1 なので収束）。 <b>[R1 A1]</b></div>",
    },

    // ── t1-1-q010 · numeric · exam · SL · SL 1.3 · 5 marks
    "t1-1-q010": {
      // EN: <p>A geometric series has first term <span class="chem">u_1 = 5</span> and common ratio <span class="chem">r = 1.4</span>. Find the least number of terms <span class="chem">n</span> required for the sum <span class="chem">S_n</span> to exceed 1500.</p>
      stem: "<p>初項 <span class=\"chem\">u_1 = 5</span>、公比 <span class=\"chem\">r = 1.4</span> の等比級数がある。和 <span class=\"chem\">S_n</span> が 1500 を超えるために必要な最小の項数 <span class=\"chem\">n</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the sum inequality: <span class="chem">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span>.
        "和の不等式 <span class=\"chem\">5(1.4^n - 1) / (1.4 - 1) &gt; 1500</span> を立てます。",
        // EN: Rearrange to isolate <span class="chem">1.4^n &gt; 121</span>, take logarithms, and round up to the next integer.
        "式を変形して <span class=\"chem\">1.4^n &gt; 121</span> とし、対数をとって次の整数に切り上げます。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p>Since <span class="chem">n</span> must be a positive integer, the least number of terms is <strong>15</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>5(1.4<sup><i>n</i></sup> − 1)</span><span>0.4</span></span> &gt; 1500 ⇒ 1.4<sup><i>n</i></sup> − 1 &gt; 120 ⇒ 1.4<sup><i>n</i></sup> &gt; 121 <b>[M1 A1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln 121</span><span>ln 1.4</span></span> ≈ 14.25 <b>[M1 A1]</b></div><p><span class=\"chem\">n</span> は正の整数なので、最小の項数は <strong>15</strong> です。 <b>[A1]</b></p>",
    },

    // ── t1-1-q011 · numeric · exam · SL · SL 1.8 · 5 marks
    "t1-1-q011": {
      // EN: <p>In a convergent geometric series with positive terms, the sum to infinity is <span class="chem">S_infty = 64</span> and the sum of the first three terms is <span class="chem">S_3 = 37</span>. Find the first term <span class="chem">u_1</span>.</p>
      stem: "<p>すべての項が正である収束する等比級数において、無限和が <span class=\"chem\">S_infty = 64</span>、初項から第 3 項までの和が <span class=\"chem\">S_3 = 37</span> である。初項 <span class=\"chem\">u_1</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Divide <span class="chem">S_3 = u_1(1 - r^3)/(1 - r)</span> by <span class="chem">S_infty = u_1/(1 - r)</span> to eliminate <span class="chem">u_1</span> immediately.
        "<span class=\"chem\">S_3 = u_1(1 - r^3)/(1 - r)</span> を <span class=\"chem\">S_infty = u_1/(1 - r)</span> で割ると、<span class=\"chem\">u_1</span> をすぐに消去できます。",
        // EN: Solve <span class="chem">1 - r^3 = 37/64</span> for <span class="chem">r</span>, then use <span class="chem">u_1 = 64(1 - r)</span>.
        "<span class=\"chem\">1 - r^3 = 37/64</span> を <span class=\"chem\">r</span> について解き、<span class=\"chem\">u_1 = 64(1 - r)</span> を使います。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class="frac"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class="worked__math"><i>r</i><sup>3</sup> = 1 − <span class="frac"><span>37</span><span>64</span></span> = <span class="frac"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class="frac"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>S</i><sub>3</sub></span><span><i>S</i><sub>∞</sub></span></span> = 1 − <i>r</i><sup>3</sup> = <span class=\"frac\"><span>37</span><span>64</span></span> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>r</i><sup>3</sup> = 1 − <span class=\"frac\"><span>37</span><span>64</span></span> = <span class=\"frac\"><span>27</span><span>64</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>3</span><span>4</span></span> <b>[A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub> = <i>S</i><sub>∞</sub>(1 − <i>r</i>) = 64 × (1 − 3/4) = <b>16</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q012 · numeric · exam · SL · SL 1.4 · 4 marks
    "t1-1-q012": {
      // EN: <p>A delivery van is purchased new for 38 000 EUR and depreciates by 16% of its value each year. Find the number of complete years it takes for the value of the van to fall below 12 000 EUR.</p>
      stem: "<p>新車で 38 000 EUR で購入した配送バンは、毎年その価値が 16% ずつ減価償却される。バンの価値が 12 000 EUR 未満になるまでにかかる丸年数（complete years）を求めなさい (Find)。</p>",
      hints: [
        // EN: Losing 16% of its value each year means the value is multiplied by <span class="chem">r = 1 - 0.16 = 0.84</span> each year.
        "毎年 16% ずつ価値が減るということは、毎年 <span class=\"chem\">r = 1 - 0.16 = 0.84</span> 倍になるということです。",
        // EN: Solve <span class="chem">38000(0.84)^n &lt; 12000</span>. Remember that dividing by <span class="chem">ln(0.84) &lt; 0</span> reverses the inequality sign.
        "<span class=\"chem\">38000(0.84)^n &lt; 12000</span> を解きます。<span class=\"chem\">ln(0.84) &lt; 0</span> で割るときに不等号の向きが逆になる点に注意しましょう。",
      ],
      // EN: <div class="worked__math">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class="frac"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class="worked__math"><i>n</i> &gt; <span class="frac"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 years <b>[M1 A1]</b></div><p>It takes <strong>7</strong> complete years. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">38000 × (0.84)<sup><i>n</i></sup> &lt; 12000 ⇒ (0.84)<sup><i>n</i></sup> &lt; <span class=\"frac\"><span>6</span><span>19</span></span> <b>[M1]</b></div><div class=\"worked__math\"><i>n</i> &gt; <span class=\"frac\"><span>ln(6/19)</span><span>ln(0.84)</span></span> ≈ 6.61 年 <b>[M1 A1]</b></div><p>丸 <strong>7</strong> 年かかります。 <b>[A1]</b></p>",
    },

    // ── t1-1-q013 · order · exam · SL · SL 1.8 · 4 marks
    "t1-1-q013": {
      // EN: <p>Arrange these steps in the correct logical order to solve <span class="chem">Σ_{k=1}^infty 12 r^{k-1} = 16</span> and verify convergence.</p>
      stem: "<p><span class=\"chem\">Σ_{k=1}^infty 12 r^{k-1} = 16</span> を解き、収束することを確かめる (Verify) ための手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Identify the first term <span class="chem">u_1 = 12</span> (when <span class="chem">k = 1</span>) and common ratio <span class="chem">r</span>.
        "初項 <span class=\"chem\">u_1 = 12</span>（<span class=\"chem\">k = 1</span> のとき）と公比 <span class=\"chem\">r</span> を特定する。",
        // EN: Substitute into the infinite geometric sum formula: <span class="chem">12 / (1 - r) = 16</span>.
        "無限等比級数の和の公式に代入する：<span class=\"chem\">12 / (1 - r) = 16</span>。",
        // EN: Rearrange to <span class=\"chem">1 - r = 12/16 = 3/4</span> and solve to get <span class=\"chem">r = 1/4</span>.
        "<span class=\"chem\">1 - r = 12/16 = 3/4</span> と変形し、解いて <span class=\"chem\">r = 1/4</span> を得る。",
        // EN: Verify that <span class="chem">|r| = 1/4 &lt; 1</span> so the infinite series is valid and convergent.
        "<span class=\"chem\">|r| = 1/4 &lt; 1</span> であることを確かめ、この無限級数が有効で収束することを確認する。",
      ],
      hints: [
        // EN: First extract <span class="chem">u_1</span> and <span class="chem">r</span> from the sigma notation.
        "まずシグマ記号から <span class=\"chem\">u_1</span> と <span class=\"chem\">r</span> を読み取ります。",
        // EN: After solving the equation for <span class="chem">r</span>, always verify the convergence condition <span class="chem">|r| &lt; 1</span>.
        "<span class=\"chem\">r</span> について方程式を解いたあと、必ず収束条件 <span class=\"chem\">|r| &lt; 1</span> を確認します。",
      ],
      // EN: <p>Setting <span class="chem">k = 1</span> gives <span class="chem">u_1 = 12</span>. Applying <span class="chem">S_infty = u_1/(1-r) = 16</span> yields <span class="chem">1 - r = 3/4</span> so <span class="chem">r = 1/4</span>, which satisfies <span class="chem">|r| &lt; 1</span>.</p>
      solution: "<p><span class=\"chem\">k = 1</span> とすると <span class=\"chem\">u_1 = 12</span> です。<span class=\"chem\">S_infty = u_1/(1-r) = 16</span> を適用すると <span class=\"chem\">1 - r = 3/4</span> より <span class=\"chem\">r = 1/4</span> となり、<span class=\"chem\">|r| &lt; 1</span> を満たします。</p>",
    },

    // ── t1-1-q014 · short · exam · SL · SL 1.2 · 6 marks
    "t1-1-q014": {
      // EN: <p>An arithmetic sequence has first term <span class="chem">u_1 = 9</span> and common difference <span class="chem">d = 2</span>. A geometric sequence has first term <span class="chem">v_1 = 2</span> and common ratio <span class="chem">r = 2</span>. Find the value of <span class="chem">n</span> for which the sum of the first <span class="chem">n</span> terms of the arithmetic sequence equals the 7th term of the geometric sequence.</p>
      stem: "<p>初項 <span class=\"chem\">u_1 = 9</span>、公差 <span class=\"chem\">d = 2</span> の等差数列と、初項 <span class=\"chem\">v_1 = 2</span>、公比 <span class=\"chem\">r = 2</span> の等比数列がある。等差数列の初項から第 <span class=\"chem\">n</span> 項までの和が、等比数列の第 7 項と等しくなるような <span class=\"chem\">n</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: First compute <span class="chem">v_7 = v_1 r^6</span>.
        "まず <span class=\"chem\">v_7 = v_1 r^6</span> を計算します。",
        // EN: Set <span class="chem">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> and solve the resulting quadratic for <span class="chem">n &gt; 0</span>.
        "<span class=\"chem\">S_n = (n/2)(2u_1 + (n-1)d) = 128</span> とおき、得られた二次方程式を <span class=\"chem\">n &gt; 0</span> の範囲で解きます。",
      ],
      // EN: <p>Equating <span class="chem">S_n = n(n + 8)</span> to <span class="chem">v_7 = 128</span> gives <span class="chem">n^2 + 8n - 128 = 0</span>, which factorizes as <span class="chem">(n + 16)(n - 8) = 0</span>. Since <span class="chem">n</span> is a positive integer, <span class="chem">n = 8</span>.</p>
      solution: "<p><span class=\"chem\">S_n = n(n + 8)</span> を <span class=\"chem\">v_7 = 128</span> と等置すると <span class=\"chem\">n^2 + 8n - 128 = 0</span> となり、<span class=\"chem\">(n + 16)(n - 8) = 0</span> と因数分解できます。<span class=\"chem\">n</span> は正の整数なので、<span class=\"chem\">n = 8</span> です。</p>",
      // EN: <div class="worked__math"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class="worked__math"><i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class="frac"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class="worked__math"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>
      answer: "<div class=\"worked__math\"><i>v</i><sub>7</sub> = 2 × 2<sup>6</sup> = 128</div><div class=\"worked__math\"><i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2(9) + (<i>n</i> − 1)2) = <span class=\"frac\"><span><i>n</i></span><span>2</span></span>(2<i>n</i> + 16) = <i>n</i>(<i>n</i> + 8)</div><div class=\"worked__math\"><i>n</i>(<i>n</i> + 8) = 128  ⇒  <i>n</i><sup>2</sup> + 8<i>n</i> − 128 = 0  ⇒  (<i>n</i> + 16)(<i>n</i> − 8) = 0  ⇒  <b><i>n</i> = 8</b></div>",
      markscheme: [
        // EN: M1: Uses the geometric <span class="chem">n</span>-th term formula <span class="chem">v_7 = v_1 r^6</span>.
        "M1：等比数列の第 <span class=\"chem\">n</span> 項の公式 <span class=\"chem\">v_7 = v_1 r^6</span> を用いる。",
        // EN: A1: <span class="chem">v_7 = 2 × 2^6 = 128</span>.
        "A1：<span class=\"chem\">v_7 = 2 × 2^6 = 128</span>。",
        // EN: M1: Substitutes <span class="chem">u_1 = 9</span> and <span class="chem">d = 2</span> into <span class="chem">S_n = (n/2)(2u_1 + (n - 1)d)</span> and sets it equal to 128.
        "M1：<span class=\"chem\">S_n = (n/2)(2u_1 + (n - 1)d)</span> に <span class=\"chem\">u_1 = 9</span> と <span class=\"chem\">d = 2</span> を代入し、128 と等しいとおく。",
        // EN: A1: Simplifies to <span class="chem">n(n + 8) = 128</span>, i.e. <span class="chem">n^2 + 8n - 128 = 0</span>.
        "A1：<span class=\"chem\">n(n + 8) = 128</span>、すなわち <span class=\"chem\">n^2 + 8n - 128 = 0</span> に整理する。",
        // EN: M1: Factorizes as <span class="chem">(n + 16)(n - 8) = 0</span> or uses the quadratic formula.
        "M1：<span class=\"chem\">(n + 16)(n - 8) = 0</span> と因数分解するか、解の公式を使う。",
        // EN: A1: Selects <span class="chem">n = 8</span> (rejecting <span class="chem">n = -16</span> since <span class="chem">n</span> is a positive integer).
        "A1：<span class=\"chem\">n = 8</span> を選ぶ（<span class=\"chem\">n</span> は正の整数であるため <span class=\"chem\">n = -16</span> を除外する）。",
      ],
    },

    // ── t1-1-q015 · numeric · challenge · SL · SL 1.3 · 5 marks
    "t1-1-q015": {
      // EN: <p>The first, fourth, and tenth terms of a non-constant arithmetic sequence form the first three consecutive terms of a geometric sequence. Find the common ratio <span class="chem">r</span> of the geometric sequence.</p>
      stem: "<p>定数列ではない等差数列の第 1 項、第 4 項、第 10 項が、ある等比数列の初項から連続する 3 項になっている。この等比数列の公比 <span class=\"chem\">r</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “non-constant” means <span class="chem">d != 0</span>, which you will need when you divide. “Form a geometric sequence” gives one equation: the middle term squared equals the product of the other two.
        "解読：「定数列ではない」は <span class=\"chem\">d != 0</span> を意味し、後で割り算をするときに必要になります。「等比数列をなす」から方程式が 1 つ得られます：真ん中の項の 2 乗は、残り 2 つの項の積に等しくなります。",
        // EN: Write the three arithmetic terms in terms of <span class="chem">u_1</span> and <span class="chem">d</span>: <span class="chem">u_1</span>, <span class="chem">u_1 + 3d</span>, and <span class="chem">u_1 + 9d</span>.
        "等差数列の 3 つの項を <span class=\"chem\">u_1</span> と <span class=\"chem\">d</span> で表します：<span class=\"chem\">u_1</span>、<span class=\"chem\">u_1 + 3d</span>、<span class=\"chem\">u_1 + 9d</span>。",
        // EN: Since they form a geometric sequence, equate the ratio: <span class="chem">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> and solve for <span class="chem">u_1</span> in terms of <span class="chem">d</span> (knowing <span class="chem">d != 0</span>).
        "これらが等比数列をなすため、公比を等置して <span class=\"chem\">(u_1 + 3d)/u_1 = (u_1 + 9d)/(u_1 + 3d)</span> とし、<span class=\"chem\">d != 0</span> を使って <span class=\"chem\">u_1</span> を <span class=\"chem\">d</span> で表します。",
      ],
      // EN: <div class="worked__math">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class="worked__math"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class="worked__math">Since <i>d</i> ≠ 0, <i>u</i><sub>1</sub> = 3<i>d</i>. Then <i>r</i> = <span class="frac"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class="frac"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>
      solution: "<div class=\"worked__math\">(<i>u</i><sub>1</sub> + 3<i>d</i>)<sup>2</sup> = <i>u</i><sub>1</sub>(<i>u</i><sub>1</sub> + 9<i>d</i>) <b>[M1 A1]</b></div><div class=\"worked__math\"><i>u</i><sub>1</sub><sup>2</sup> + 6<i>u</i><sub>1</sub><i>d</i> + 9<i>d</i><sup>2</sup> = <i>u</i><sub>1</sub><sup>2</sup> + 9<i>u</i><sub>1</sub><i>d</i> ⇒ 9<i>d</i><sup>2</sup> = 3<i>u</i><sub>1</sub><i>d</i> <b>[M1]</b></div><div class=\"worked__math\"><i>d</i> ≠ 0 より <i>u</i><sub>1</sub> = 3<i>d</i>。よって <i>r</i> = <span class=\"frac\"><span><i>u</i><sub>1</sub> + 3<i>d</i></span><span><i>u</i><sub>1</sub></span></span> = <span class=\"frac\"><span>6<i>d</i></span><span>3<i>d</i></span></span> = <b>2</b> <b>[A1 A1]</b></div>",
    },

    // ── t1-1-q016 · numeric · challenge · SL · SL 1.3 · 4 marks
    "t1-1-q016": {
      // EN: <p>At the <strong>start</strong> of every year, Leo deposits 2000 USD into a savings plan that pays 5% interest per annum compounded annually. Find the total value of the savings plan at the <strong>end</strong> of the 10th year. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Leo は毎年<strong>初め</strong>に、年利 5%（年 1 回複利）の積立プランに 2000 USD を預け入れる。10 年目の<strong>終わり</strong>における積立合計額を求めなさい (Find)。小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: Decode: regular deposits make a geometric series, not a single compound-interest calculation. “At the start of every year” means each deposit earns interest in the year it is made, so count how many years of interest each deposit receives.
        "解読：毎年の積立は 1 回の複利計算ではなく、等比級数になります。「毎年初め」とは、各積立がその年のうちから利息を得ることを意味するので、各積立が何年分の利息を受け取るかを数えましょう。",
        // EN: Draw a timeline! The 10th deposit (made at the start of year 10) earns interest for 1 full year, so its final value is <span class="chem">2000(1.05)^1</span>. The 1st deposit earns interest for 10 full years: <span class="chem">2000(1.05)^{10}</span>.
        "時系列の図を描きましょう。10 回目の積立（10 年目の初め）は丸 1 年分の利息がつくので <span class=\"chem\">2000(1.05)^1</span> になり、1 回目の積立は丸 10 年分の利息がついて <span class=\"chem\">2000(1.05)^{10}</span> になります。",
        // EN: Sum the 10 geometric terms with first term <span class="chem">a = 2000(1.05) = 2100</span>, ratio <span class="chem">r = 1.05</span>, and <span class="chem">n = 10</span>.
        "初項 <span class=\"chem\">a = 2000(1.05) = 2100</span>、公比 <span class=\"chem\">r = 1.05</span>、項数 <span class=\"chem\">n = 10</span> の 10 個の項からなる等比級数の和を計算します。",
      ],
      // EN: <div class="worked__math">Total = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class="worked__math"><i>S</i><sub>10</sub> = <span class="frac"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>
      solution: "<div class=\"worked__math\">合計 = 2000(1.05)<sup>1</sup> + 2000(1.05)<sup>2</sup> + … + 2000(1.05)<sup>10</sup> <b>[M1 A1]</b></div><div class=\"worked__math\"><i>S</i><sub>10</sub> = <span class=\"frac\"><span>2000(1.05)(1.05<sup>10</sup> − 1)</span><span>1.05 − 1</span></span> = 42000(1.05<sup>10</sup> − 1) ≈ <b>26 413.57 USD</b> <b>[M1 A1]</b></div>",
    },

    // ── t1-1-q017 · short · challenge · SL · SL 1.8 · 7 marks
    "t1-1-q017": {
      // EN: <p>Consider the infinite geometric series <span class="chem">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span>.<br>(a) Find the set of values of <span class="chem">x</span> for which the series converges. <strong>[4]</strong><br>(b) Find the value of <span class="chem">x</span> in this set for which the sum to infinity is equal to <span class="chem">2</span>. <strong>[3]</strong></p>
      stem: "<p>無限等比級数 <span class=\"chem\">Σ_{n=1}^infty (2x - 1)(x^2 - 3)^{n-1}</span> を考える。<br>(a) この級数が収束するような <span class=\"chem\">x</span> の値の範囲を求めなさい (Find)。 <strong>[4]</strong><br>(b) この範囲内で、無限和が <span class=\"chem\">2</span> に等しくなる <span class=\"chem\">x</span> の値を求めなさい (Find)。 <strong>[3]</strong></p>",
      hints: [
        // EN: Decode: compare the terms for <span class="chem">n = 1</span> and <span class="chem">n = 2</span>: the first term is <span class="chem">2x - 1</span> and the common ratio is <span class="chem">x^2 - 3</span>. Part (a) is the condition <span class="chem">|r| &lt; 1</span>; in part (b) the answer must lie in the set from (a).
        "解読：<span class=\"chem\">n = 1</span> と <span class=\"chem\">n = 2</span> の項を比べると、初項は <span class=\"chem\">2x - 1</span>、公比は <span class=\"chem\">x^2 - 3</span> です。(a) は条件 <span class=\"chem\">|r| &lt; 1</span> そのものであり、(b) の答えは (a) で求めた範囲に入っていなければなりません。",
        // EN: For part (a), solve the double inequality <span class="chem">-1 &lt; x^2 - 3 &lt; 1</span> by adding 3 to all parts.
        "(a) では、連立不等式 <span class=\"chem\">-1 &lt; x^2 - 3 &lt; 1</span> の各辺に 3 を足して解きます。",
        // EN: For part (b), solve <span class="chem">(2x - 1)/(4 - x^2) = 2</span> and check which root satisfies <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "(b) では、<span class=\"chem\">(2x - 1)/(4 - x^2) = 2</span> を解き、どちらの解が <span class=\"chem\">2 &lt; x^2 &lt; 4</span> を満たすか確かめます。",
      ],
      // EN: <p>Note that for <span class="chem">x = (-1 + sqrt(19))/2</span>, we have <span class="chem">2x^2 = 9 - 2x = 10 - sqrt(19)</span>, so <span class="chem">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span>, which lies strictly between 2 and 4.</p>
      solution: "<p><span class=\"chem\">x = (-1 + sqrt(19))/2</span> のとき <span class=\"chem\">2x^2 = 9 - 2x = 10 - sqrt(19)</span> となるので、<span class=\"chem\">x^2 = 5 - sqrt(19)/2 ≈ 2.82</span> となり、確かに 2 と 4 の間にあります。</p>",
      // EN: <div class="worked__math">(a) Common ratio <i>r</i> = <i>x</i><sup>2</sup> − 3. Convergence requires |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4.</div><div class="worked__math">Thus −2 &lt; <i>x</i> &lt; −√2  or  √2 &lt; <i>x</i> &lt; 2.</div><div class="worked__math">(b) <span class="frac"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class="frac"><span>−1 + √19</span><span>2</span></span></b></div>
      answer: "<div class=\"worked__math\">(a) 公比 <i>r</i> = <i>x</i><sup>2</sup> − 3。収束するには |<i>x</i><sup>2</sup> − 3| &lt; 1  ⇔  2 &lt; <i>x</i><sup>2</sup> &lt; 4 が必要。</div><div class=\"worked__math\">よって −2 &lt; <i>x</i> &lt; −√2  または  √2 &lt; <i>x</i> &lt; 2。</div><div class=\"worked__math\">(b) <span class=\"frac\"><span>2<i>x</i> − 1</span><span>1 − (<i>x</i><sup>2</sup> − 3)</span></span> = 2  ⇒  2<i>x</i> − 1 = 8 − 2<i>x</i><sup>2</sup>  ⇒  2<i>x</i><sup>2</sup> + 2<i>x</i> − 9 = 0  ⇒  <b><i>x</i> = <span class=\"frac\"><span>−1 + √19</span><span>2</span></span></b></div>",
      markscheme: [
        // EN: M1: Identifies the common ratio <span class="chem">r = x^2 - 3</span> and sets <span class="chem">|x^2 - 3| &lt; 1</span>.
        "M1：公比 <span class=\"chem\">r = x^2 - 3</span> を見抜き、<span class=\"chem\">|x^2 - 3| &lt; 1</span> とおく。",
        // EN: A1: Rewrites the inequality as <span class="chem">2 &lt; x^2 &lt; 4</span>.
        "A1：不等式を <span class=\"chem\">2 &lt; x^2 &lt; 4</span> と書き直す。",
        // EN: A1: Obtains the interval <span class="chem">-2 &lt; x &lt; -sqrt(2)</span>.
        "A1：区間 <span class=\"chem\">-2 &lt; x &lt; -sqrt(2)</span> を求める。",
        // EN: A1: Obtains the interval <span class="chem">sqrt(2) &lt; x &lt; 2</span>.
        "A1：区間 <span class=\"chem\">sqrt(2) &lt; x &lt; 2</span> を求める。",
        // EN: M1: Sets <span class="chem">S_infty = (2x - 1)/(4 - x^2) = 2</span> and rearranges to <span class="chem">2x^2 + 2x - 9 = 0</span>.
        "M1：<span class=\"chem\">S_infty = (2x - 1)/(4 - x^2) = 2</span> とおき、<span class=\"chem\">2x^2 + 2x - 9 = 0</span> に整理する。",
        // EN: A1: Finds the roots <span class="chem">x = (-1 +- sqrt(19))/2</span>.
        "A1：解 <span class=\"chem\">x = (-1 +- sqrt(19))/2</span> を求める。",
        // EN: R1: Rejects <span class="chem">(-1 - sqrt(19))/2 ≈ -2.68</span> (outside the interval) and keeps <span class="chem">x = (-1 + sqrt(19))/2 ≈ 1.68</span> (inside <span class="chem">(sqrt(2), 2)</span>).
        "R1：<span class=\"chem\">(-1 - sqrt(19))/2 ≈ -2.68</span>（範囲外）を除外し、<span class=\"chem\">x = (-1 + sqrt(19))/2 ≈ 1.68</span>（<span class=\"chem\">(sqrt(2), 2)</span> の範囲内）を残す。",
      ],
    },

    // ── t1-1-q018 · numeric · exam · SL · SL 1.4 · 3 marks
    "t1-1-q018": {
      // EN: <p>Ines invests 5000 EUR in an account that pays 4% interest per annum, compounded annually. The annual inflation rate is expected to be 2.5% throughout. Using the real interest rate <span class="chem">(4 - 2.5)%</span>, find the real value of her investment after 8 years. Give your answer correct to 2 decimal places.</p>
      stem: "<p>Ines は年利率 4%、年 1 回複利の口座に 5000 EUR を預け入れた。年間のインフレ率は期間中ずっと 2.5% と見込まれている。実質金利 <span class=\"chem\">(4 - 2.5)%</span> を用いて、8 年後の投資の実質価値を求め (Find)、小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: The real value removes the effect of inflation, so use the interest rate minus the inflation rate: <span class="chem">r = 4 - 2.5 = 1.5</span>.
        "実質価値はインフレの影響を取り除いた価値なので、利率からインフレ率を引いた値を使います：<span class=\"chem\">r = 4 - 2.5 = 1.5</span>。",
        // EN: Substitute <span class="chem">PV = 5000</span>, <span class="chem">r = 1.5</span>, <span class="chem">k = 1</span>, <span class="chem">n = 8</span> into <span class="chem">FV = PV(1 + r/(100k))^{kn}</span>, or use the Finance Solver with <span class="mono">I% = 1.5</span>.
        "<span class=\"chem\">FV = PV(1 + r/(100k))^{kn}</span> に <span class=\"chem\">PV = 5000</span>、<span class=\"chem\">r = 1.5</span>、<span class=\"chem\">k = 1</span>、<span class=\"chem\">n = 8</span> を代入するか、Finance Solver で <span class=\"mono\">I% = 1.5</span> とします。",
      ],
      // EN: <div class="worked__math">Real rate = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class="worked__math">Real value = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>Correct to 2 decimal places, the real value is <strong>5632.46 EUR</strong>. <b>[A1]</b></p>
      solution: "<div class=\"worked__math\">実質金利 = 4% − 2.5% = 1.5%   <b>[M1]</b></div><div class=\"worked__math\">実質価値 = 5000 × (1.015)<sup>8</sup> ≈ 5632.4629 EUR   <b>[M1]</b></div><p>小数第 2 位まで求めると、実質価値は <strong>5632.46 EUR</strong> です。<b>[A1]</b></p>",
    },
  }
});
