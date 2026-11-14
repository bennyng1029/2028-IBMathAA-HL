# Syllabus & Exam Research: Topics 1 and 2 — Number & Algebra, Functions

**Course**: IB Diploma Programme Mathematics: Analysis and Approaches Higher Level (AA HL)  
**Target Examination**: **May 2028** (Governed by the *Mathematics: analysis and approaches guide*, First assessment May 2021, Final assessment November 2028, and the current *Mathematics: analysis and approaches formula booklet* (first examinations 2021))  
**Site Pages Covered**: `t1-1` to `t1-5` (Topic 1) and `t2-1` to `t2-3` (Topic 2)

---

## 0. Curriculum Authority, May 2028 Verification & Assessment Rules

### 0.1 Why the 2021–2028 Guide Governs May 2028
- The current IB DP *Mathematics: analysis and approaches guide* (published February 2019, first assessment May 2021) remains in force through **November 2028**.
- The next AA course (first teaching August 2027) has its **first assessment in May 2029**. Its detailed content is not covered here: the 2029 course may change or drop some content, but for May 2028 everything in the current guide is examinable.
- Therefore, **May 2028** AA HL students are examined strictly on the **2021–2028 syllabus** (SL core + AHL extensions across Topics 1–5) and use the current **IB Mathematics: analysis and approaches formula booklet** (first examinations 2021; check the latest version on the Programme Resource Centre).
- Students may see online notes about the 2029 course. They do not apply to May 2028: every subtopic in the current guide is examinable.

### 0.2 Assessment Blueprint & Rounding Conventions
- **Paper 1 (2 hours, 110 marks, 30%)**: **No calculator allowed**. Clean copy of the AA Formula Booklet provided. Section A: compulsory short-response questions; Section B: compulsory extended-response questions. Questions demand exact algebraic values ($\frac{\sqrt{3}}{2}$, $\ln 5$, $2\pi$, $3 - 4i$) or clean integer/fractional arithmetic.
- **Paper 2 (2 hours, 110 marks, 30%)**: **Graphic Display Calculator (GDC) required**. Clean copy of the AA Formula Booklet provided. Section A: short-response; Section B: extended-response.
- **Paper 3 (1 hour, 55 marks, 20%)**: **GDC required**. Clean copy of the AA Formula Booklet provided. Two compulsory extended investigative problem-solving questions (typically 25–30 marks each) that guide the candidate through a structured mathematical discovery ("Hence, or otherwise...").
- **IB 3 Significant Figures (3 s.f.) Rule**: Unless a question specifies otherwise (e.g., *"Give your answer in the form $a + b\sqrt{c}$"*, *"Give your answer to the nearest integer"*, or *"to 2 decimal places"* for currency), all non-exact numerical answers must be given **exact or accurate to 3 significant figures**. Intermediate values in multi-step calculations must be stored unrounded on the GDC (or carried to at least 5–6 s.f.) to avoid premature rounding penalties.

### 0.3 Markscheme Codes Used Across Worked Examples
- **M1**: Method mark — awarded for setting up a valid mathematical method (e.g., substituting into the correct formula, equating discriminant to zero, writing an augmented matrix row operation), even if an arithmetic slip follows.
- **A1**: Accuracy mark — awarded for a correct intermediate or final value, conditional on the preceding **M1** (unless marked **N2/N3** for no-working GDC answers).
- **R1**: Reasoning mark — awarded for an explicit justification, verification of a base case, or domain/sign explanation (required in `Show that`, `Justify`, and `Proof by induction` questions).
- **(M1) / (A1)**: Implied marks — awarded automatically if the final answer is correct, but visible working secures them if the final answer is wrong.
- **AG**: Answer Given — in `Show that ...` questions, the final line is printed in the question stem. Students usually lose the final mark(s) if they skip the algebraic step right before the printed result, or work backwards from the given result without reversing the logic.

---

## 1. Topic 1: Number and Algebra (19 SL hrs + 20 AHL hrs = 39 HL hrs)

### Map to Site Topic Pages (`t1-1` to `t1-5`)

| Page ID | Page Title | Syllabus Subtopics Covered | Level |
|---|---|---|---|
| `t1-1` | Sequences, series and financial models | SL 1.1, 1.2, 1.3, 1.4, 1.8 | SL+HL |
| `t1-2` | Exponents, logarithms and the binomial theorem | SL 1.5, 1.7, 1.9 | SL+HL |
| `t1-3` | Counting, partial fractions and extended binomials | AHL 1.10, 1.11 | AHL |
| `t1-4` | Complex numbers and De Moivre's theorem | AHL 1.12, 1.13, 1.14 | AHL |
| `t1-5` | Mathematical proof and systems of linear equations | SL 1.6 + AHL 1.15, 1.16 | SL+HL |

---

### Page `t1-1`: Sequences, Series and Financial Models (SL 1.1–1.4, 1.8)

#### Official Syllabus Scope (Paraphrased)
- **SL 1.1 Standard form**: Operations with numbers in the form $a \times 10^k$, where $1 \le a < 10$ and $k \in \mathbb{Z}$.
- **SL 1.2 Arithmetic sequences and series**: Use of the $n$-th term formula $u_n$ and sum of the first $n$ terms $S_n$; sigma notation $\sum_{r=1}^{n} u_r$; applications to modelling linear growth/decay and simple arithmetic patterns; analysis of common difference $d = u_{n} - u_{n-1}$.
- **SL 1.3 Geometric sequences and series**: Use of the $n$-th term formula $u_n$ and finite sum $S_n$; sigma notation for geometric series; applications to exponential growth/decay and repeating patterns.
- **SL 1.4 Financial applications of geometric sequences and series**: Compound interest, annual depreciation, and real-value (inflation-adjusted) calculations. Calculations of future value $FV$, present value $PV$, nominal annual interest rate $r\%$, compounding periods per year $k$ (yearly, half-yearly, quarterly or monthly), and number of years $n$, using the formula or technology (including the GDC financial package / TVM solver). Questions asking students to derive the formula will not be set. *(Annuities and loan amortization are Mathematics: applications and interpretation content, not AA.)*
- **SL 1.8 Sum of infinite convergent geometric sequences**: Convergence condition $|r| < 1$ (with $r \neq 0$); use of $S_\infty = \frac{u_1}{1 - r}$.

#### Exact IB Formula Booklet Formulas (Section 1.2, 1.3, 1.4, 1.8)
- **The $n$-th term of an arithmetic sequence**:
  $$u_n = u_1 + (n - 1)d$$
- **The sum of $n$ terms of an arithmetic sequence**:
  $$S_n = \frac{n}{2}(2u_1 + (n - 1)d) = \frac{n}{2}(u_1 + u_n)$$
- **The $n$-th term of a geometric sequence**:
  $$u_n = u_1 r^{n - 1}$$
- **The sum of $n$ terms of a finite geometric sequence**:
  $$S_n = \frac{u_1(r^n - 1)}{r - 1} = \frac{u_1(1 - r^n)}{1 - r}, \quad r \neq 1$$
- **Compound interest**:
  $$FV = PV \times \left(1 + \frac{r}{100k}\right)^{kn}$$
  where $FV$ is the future value, $PV$ is the present value, $n$ is the number of years, $k$ is the number of compounding periods per year, and $r\%$ is the nominal annual rate of interest.
- **The sum of an infinite geometric sequence**:
  $$S_\infty = \frac{u_1}{1 - r}, \quad |r| < 1$$
- **Not in Formula Booklet (Must Memorize)**:
  - Recovering the $n$-th term from a cumulative sum formula: $u_1 = S_1$ and $u_n = S_n - S_{n-1}$ for $n \ge 2$.
  - Consecutive terms condition:
    - Arithmetic: $u_2 - u_1 = u_3 - u_2 \iff 2u_2 = u_1 + u_3$.
    - Geometric: $\frac{u_2}{u_1} = \frac{u_3}{u_2} \iff u_2^2 = u_1 u_3$.
  - Number of terms in sigma notation $\sum_{r=a}^{b} f(r)$ is $(b - a + 1)$, **not** $(b - a)$.

#### Question Decoder (`t1-1`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Increases by a fixed amount each year / month"* | **Arithmetic sequence** ($d$ is constant). | Write $u_1$ and $d$; substitute into $u_n = u_1 + (n-1)d$ or $S_n$. |
| *"Increases by $p\%$ each year"* / *"Loses $p\%$ of its value each year"* | **Geometric sequence** with $r = 1 + \frac{p}{100}$ or $r = 1 - \frac{p}{100}$. | Watch index shift: after $t$ years have elapsed, it is $u_1 r^t$ (which is the $(t+1)$-th term if $u_1$ is at $t=0$). |
| *"Find the total amount produced / saved over the first $n$ years"* | **Sum of series $S_n$** (not $u_n$). | Identify arithmetic vs geometric; apply $S_n$. Regular deposits with interest (annuities) are not AA content; if a question builds one step by step, sum the geometric series. |
| *"The terms $a, b, c$ are consecutive terms of an arithmetic/geometric sequence"* | Equate common difference ($b - a = c - b$) or common ratio ($\frac{b}{a} = \frac{c}{b}$). | Solve resulting quadratic; check if any root makes $u_k = 0$ or violates *"distinct terms"* / *"convergent series"*. |
| *"Given that $S_n = 3n^2 + 5n$, find $u_n$"* | Use $u_n = S_n - S_{n-1}$ (or evaluate $u_1 = S_1$, $u_2 = S_2 - S_1$, $d = u_2 - u_1$). | P1: Expand $3n^2+5n - [3(n-1)^2+5(n-1)]$ carefully or find $u_1=8, S_2=22 \implies u_2=14 \implies d=6$. |
| *"The series converges"* / *"Find the sum to infinity"* | Geometric series with **$|r| < 1$** ($-1 < r < 1, r \neq 0$). | Set up inequality $|r| < 1$ to filter extraneous roots for $r$, then compute $S_\infty = \frac{u_1}{1-r}$. |
| *"Find the least number of terms for which the sum exceeds $K$"* | Inequality $S_n > K$ where $n \in \mathbb{Z}^+$. | **P1**: Rearrange to $r^n > C$ or $r^n < C$ and take logs (remembering $\ln r < 0$ flips inequality if $0 < r < 1$). **P2**: Graph $y = S_x - K$, use table of values or intersection, and **always round up** to the next integer $n$. |
| *"Compounded monthly / quarterly"* | Compound interest formula $FV = PV\left(1 + \frac{r}{100k}\right)^{kn}$ or the TVM solver. | On Paper 2, write down the TVM inputs you used (`N, I%, PV, FV, P/Y, C/Y`) so the method can be credited. Enter `PV` and `FV` with opposite signs. |

#### Common Student Mistakes (`callout--mistake`)
1. **Counting terms in $\sum_{k=3}^{12}$**: Students subtract $12 - 3 = 9$ instead of $12 - 3 + 1 = 10$ terms, or forget that the "first term" $u_1$ of the sum is evaluated at the lower limit $k = 3$, not $k = 1$.
2. **Fencepost error in years vs terms**: If a car costs $\$25\,000$ new ($t = 0$) and depreciates by $15\%$ per year, its value *at the end of year 5* is $25\,000(0.85)^5$, not $25\,000(0.85)^4$. Always write a mini timeline: $t=0$ (new), $t=1$ (after 1 yr), ..., $t=5$ (after 5 yrs).
3. **Forgetting to reject invalid $r$**: When a quadratic gives $r = \frac{3}{2}$ and $r = -\frac{2}{3}$ for a sequence whose sum to infinity exists, students forget to reject $r = \frac{3}{2}$ because $|r| < 1$ is required for convergence.
4. **Sign reversal when dividing by $\ln r$ for $0 < r < 1$**: Solving $(0.8)^n < 0.05 \implies n \ln(0.8) < \ln(0.05) \implies n > \frac{\ln(0.05)}{\ln(0.8)}$ because $\ln(0.8) < 0$.

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **General convergence tests**: You do **not** need the Ratio Test, Root Test, Integral Test, Comparison Test, Alternating Series Test, or $p$-series test ($\sum \frac{1}{n^p}$). In IB AA HL Topic 1, infinite series convergence is tested **only** for geometric series ($|r| < 1$) (and Maclaurin power series in Topic 5.19).
- **Arithmetico-geometric series & recurrence relations**: General linear recurrence relations ($u_{n+2} = a u_{n+1} + b u_n$ via characteristic equations) and arithmetico-geometric sums $\sum n r^n$ are **not** in the syllabus unless scaffolded step-by-step in Paper 3.
- **Continuous compounding $P e^{rt}$ in SL 1.4**: The financial formula in 1.4 uses discrete compounding periods $k$; continuous exponential growth $P_0 e^{kt}$ belongs to Topic 2.9 / Topic 5.

---

### Page `t1-2`: Exponents, Logarithms and the Binomial Theorem (SL 1.5, 1.7, 1.9)

#### Official Syllabus Scope (Paraphrased)
- **SL 1.5 Laws of exponents with integer exponents; introduction to logarithms**: Logarithms with base 10 and base $e$ ($\ln x$); the equivalence $a^x = b \iff x = \log_a b$ ($a > 0, a \neq 1, b > 0$); numerical evaluation of logarithms using technology.
- **SL 1.7 Laws of exponents with rational exponents and laws of logarithms**: $a^{m/n} = \sqrt[n]{a^m}$; product, quotient, and power laws of logarithms; change of base formula $\log_a x = \frac{\log_b x}{\log_b a}$; solving exponential and logarithmic equations (including disguised quadratics in $a^x$ or $\log_a x$).
- **SL 1.9 The binomial theorem for $n \in \mathbb{Z}^+$**: Expansion of $(a + b)^n$ for positive integers $n$; Pascal's triangle; combinations $\binom{n}{r} = {}^n\text{C}_r$; finding a specific term or coefficient in an expansion.

#### Exact IB Formula Booklet Formulas (Section 1.5, 1.7, 1.9)
- **Exponents and logarithms**:
  $$a^x = b \iff x = \log_a b, \quad \text{where } a > 0, b > 0, a \neq 1$$
- **Laws of logarithms**:
  $$\log_a xy = \log_a x + \log_a y$$
  $$\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$$
  $$\log_a x^m = m \log_a x$$
  $$\log_a x = \frac{\log_b x}{\log_b a}$$
- **Binomial theorem ($n \in \mathbb{N}$)**:
  $$(a + b)^n = a^n + {}^n\text{C}_1 a^{n-1}b + \dots + {}^n\text{C}_r a^{n-r}b^r + \dots + b^n$$
  $${}^n\text{C}_r = \frac{n!}{r!(n - r)!}$$
- **Not in Formula Booklet (Must Memorize)**:
  - Fundamental identities: $\log_a 1 = 0$, $\log_a a = 1$, $\log_a\left(\frac{1}{x}\right) = -\log_a x$, and $\log_{a^k}(x) = \frac{1}{k}\log_a x$. ($a^{\log_a x} = x$ and $\log_a a^x = x$ are printed in the booklet under SL 2.9.)
  - General $(r+1)$-th term of $(a+b)^n$: $T_{r+1} = \binom{n}{r} a^{n-r} b^r$.

#### Question Decoder (`t1-2`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Solve $4^x - 6(2^x) + 8 = 0$"* / *"Solve $e^{2x} - 5e^x + 6 = 0$"* | **Disguised quadratic** in $u = 2^x$ or $u = e^x$. | Let $u = a^x$ ($u > 0$). Factor the quadratic in $u$, reject any $u \le 0$, then solve $a^x = u \implies x = \log_a u$. |
| *"Solve $\log_2 x + \log_x 2 = \frac{5}{2}$"* / *"Logs with different bases"* | **Change of base** to the smaller base (or base $e$ / base 2). | Write $\log_x 2 = \frac{\log_2 2}{\log_2 x} = \frac{1}{\log_2 x}$, let $u = \log_2 x$, and solve the quadratic $u + \frac{1}{u} = \frac{5}{2}$. |
| *"Find the constant term"* / *"Find the term independent of $x$"* | The term in the binomial expansion where the **net power of $x$ is $0$**. | Write the general term $\binom{n}{r} a^{n-r} b^r$, collect all $x$-powers into a single exponent, set that exponent $= 0$ to find $r$, then substitute $r$. |
| *"Find the coefficient of $x^k$ in $(1+2x)(3-x)^6$"* | **Product of two polynomials**: split the first factor and match powers from the binomial expansion. | Coefficient of $x^k = 1 \cdot [\text{coeff of } x^k \text{ in } (3-x)^6] + 2 \cdot [\text{coeff of } x^{k-1} \text{ in } (3-x)^6]$. |
| *"Express $\ln(a^2\sqrt{b})$ in terms of $p = \ln a$ and $q = \ln b$"* | Apply log laws to split products, quotients, and fractional powers. | $\ln(a^2 b^{1/2}) = 2\ln a + \frac{1}{2}\ln b = 2p + \frac{1}{2}q$. |

#### Common Student Mistakes (`callout--mistake`)
1. **Fake log distribution**: Writing $\log_a(x + y) = \log_a x + \log_a y$ or $\frac{\log_a x}{\log_a y} = \log_a(x - y)$ or $(\ln x)^2 = 2\ln x$. Note that $(\ln x)^2 = (\ln x)(\ln x)$, whereas $\ln(x^2) = 2\ln x$.
2. **Forgetting domain checks on log equations**: Solving $\log_2(x - 1) + \log_2(x - 3) = 3 \implies (x-1)(x-3) = 8 \implies x = 5$ or $x = -1$. Students must reject $x = -1$ because arguments $x - 1 > 0$ and $x - 3 > 0$ require $x > 3$.
3. **Dropping negative signs or coefficients inside $(b)^r$**: In $(2x - \frac{3}{x^2})^8$, the general term has $(2x)^{8-r}(-3x^{-2})^r = 2^{8-r}(-3)^r x^{8-3r}$. Students often write $2 \cdot x^{8-r}$ (forgetting $2^{8-r}$) or drop $(-3)^r$.
4. **Confusing "term" vs "coefficient"**: The *term* in $x^3$ is $160x^3$; the *coefficient* of $x^3$ is $160$.

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Multinomial theorem**: Expansions of $(a + b + c)^n$ using multinomial coefficients $\frac{n!}{i!j!k!}$ are **not** in the syllabus (if a trinomial $(1 + x + x^2)^n$ appears, it is only for small powers or grouped as $[1 + x(1+x)]^n$).
- **Combinatorial identities via calculus**: Proving $\sum r \binom{n}{r} = n 2^{n-1}$ by differentiating $(1+x)^n$ is not standard Topic 1 content unless fully guided in Paper 3.

---

### Page `t1-3`: Counting Principles, Partial Fractions and Extended Binomials (AHL 1.10, 1.11)

#### Official Syllabus Scope (Paraphrased)
- **AHL 1.10 Counting principles, permutations and combinations; extension of the binomial theorem**: Fundamental counting principle (multiplication and addition principles); factorial notation $n!$; permutations ${}^n\text{P}_r$ (ordered arrangements) and combinations ${}^n\text{C}_r$ (unordered selections), by formula and technology; algebraic manipulation of factorials in equations (e.g., solving ${}^n\text{C}_2 = 28$). Permutations where some objects are identical, and circular arrangements, are not required.
  - Extension of the binomial theorem to fractional and negative indices: expansion of $(1 + x)^n$ and $(a + bx)^n = a^n\left(1 + \frac{b}{a}x\right)^n$ for $n \in \mathbb{Q}$; interval of convergence $|x| < 1$ (or $|x| < \left|\frac{a}{b}\right|$).
- **AHL 1.11 Partial fractions**: Decomposition of rational expressions with **a maximum of two distinct linear terms** in the denominator, **with degree of numerator less than the degree of the denominator**: $\frac{px + q}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b}$. Improper fractions (numerator degree $\ge$ denominator degree) are not required.

#### Exact IB Formula Booklet Formulas (Section 1.10, 1.11)
- **Permutations and combinations**:
  $${}^n\text{P}_r = \frac{n!}{(n - r)!}$$
  $${}^n\text{C}_r = \frac{n!}{r!(n - r)!}$$
- **Binomial theorem for $n \in \mathbb{Q}$** (printed under AHL 1.10 in later versions of the booklet; not in version 1.0, so check your copy):
  $$(a + b)^n = a^n\left(1 + n\left(\frac{b}{a}\right) + \frac{n(n - 1)}{2!}\left(\frac{b}{a}\right)^2 + \dots\right)$$
- **Not in Formula Booklet (Must Memorize)**:
  - Interval of validity for $(a + bx)^n$: valid for $\left|\frac{bx}{a}\right| < 1 \iff |x| < \left|\frac{a}{b}\right|$.
  - Symmetry and Pascal's identity: $\binom{n}{r} = \binom{n}{n-r}$ and $\binom{n}{r} + \binom{n}{r+1} = \binom{n+1}{r+1}$.

#### Question Decoder (`t1-3`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"How many ways can $r$ items be chosen from $n$..."* (committee, hand of cards, subset) | **Order does NOT matter $\implies$ Combinations ${}^n\text{C}_r$**. | Use multiplication across independent groups (e.g., 3 boys AND 2 girls: $\binom{B}{3}\binom{G}{2}$) and addition across mutually exclusive cases. |
| *"How many codes / passwords / seating arrangements in a row..."* | **Order DOES matter $\implies$ Permutations ${}^n\text{P}_r$** or slot-filling. | Draw slots `[ ][ ][ ]` and fill the most restricted slot first (e.g., even digit at the end). |
| *"Items A and B must be together"* | **Glue / Block method**: treat `(AB)` as 1 single super-item. | Arrange $(n - 1)$ objects in $(n - 1)!$ ways, then multiply by $2!$ (or $k!$) for internal arrangements inside the block. |
| *"Items A and B must NOT be together"* | **Complement method** (for 2 items) or **Gap / Insertion method** (for $\ge 3$ separated items). | For 2 items: $\text{Total} - \text{Together} = n! - (n-1)!2!$. For $k \ge 3$ separated items: arrange the other $(n-k)$ items first creating $(n-k+1)$ gaps, then place the $k$ items into the gaps in ${}^{n-k+1}\text{P}_k$ ways. |
| *"At least one..."* / *"Not all from the same group"* | **Complement method**: $\text{Total unconstrained} - \text{Forbidden cases}$. | Much faster and less error-prone than listing 4+ separate valid cases. |
| *"Find the first three terms in the expansion of $(4 - 3x)^{-1/2}$"* | **Factor out $a^n$ first!** $(4-3x)^{-1/2} = 4^{-1/2}\left(1 - \frac{3}{4}x\right)^{-1/2}$. | Never substitute $n = -1/2$ into $\binom{n}{r}$ on a calculator; use $1 + nu + \frac{n(n-1)}{2!}u^2 + \frac{n(n-1)(n-2)}{3!}u^3$ with $u = -\frac{3}{4}x$. |
| *"State the set of values of $x$ for which the expansion is valid"* | Set $|u| < 1$ where $u = \frac{b}{a}x$. If multiplying/adding two expansions, take the **intersection** (smaller radius). | For $(4 - 3x)^{-1/2}$, $\left|-\frac{3}{4}x\right| < 1 \implies |x| < \frac{4}{3}$. |
| *"Express $\frac{5x+1}{(x-1)(x+2)}$ in partial fractions, and hence find its binomial expansion"* | Decompose into $\frac{A}{x-1} + \frac{B}{x+2}$, then expand each term as $(a+bx)^{-1}$ and combine like powers of $x$. | Use Heaviside cover-up ($x=1$ and $x=-2$) to get $A, B$ in 10 seconds! Remember $\frac{1}{x-1} = -(1-x)^{-1}$ and $\frac{1}{2+x} = \frac{1}{2}\left(1+\frac{x}{2}\right)^{-1}$. |

#### Common Student Mistakes (`callout--mistake`)
1. **Using subtraction for separated items when $k \ge 3$**: For *"3 vowels must not be adjacent"*, students compute $\text{Total} - (\text{all 3 vowels together})$. That is wrong because it still counts arrangements where 2 vowels are adjacent and 1 is separate! Always use the **Gap Method** when 3 or more items must be mutually separated.
2. **Forgetting $a^n$ when factoring $(a + bx)^n$**: Students write $(8 + 4x)^{1/3} = 8\left(1 + \frac{1}{2}x\right)^{1/3}$ instead of $8^{1/3}\left(1 + \frac{1}{2}x\right)^{1/3} = 2\left(1 + \frac{1}{2}x\right)^{1/3}$.
3. **Double-counting in "at least" slot problems**: Selecting 1 required item in $\binom{4}{1}$ ways and then picking 2 more from the remaining $(n-1)$ items counts $\{A_1, A_2, B_1\}$ twice (once with $A_1$ picked first, once with $A_2$ picked first). Always split into mutually exclusive exact counts or use the complement!

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Partial fractions with repeated linear factors or irreducible quadratic factors**: The IB AA HL guide (AHL 1.11) explicitly restricts partial fractions to denominators of the form $(ax+b)(cx+d)$ with **at most two distinct linear factors**, with **degree of numerator less than the degree of the denominator**. Improper fractions such as $\frac{px^2+qx+r}{(ax+b)(cx+d)} = A + \frac{B}{ax+b} + \frac{C}{cx+d}$ are also not required. You do **not** need $\frac{A}{x-a} + \frac{B}{(x-a)^2}$ (repeated linear) or $\frac{Ax+B}{x^2+c^2}$ (irreducible quadratic), which AI tools and UK A-Level resources heavily emphasize.
- **Permutations of indistinct objects / circular arrangements / Stars and Bars / Derangements**: Multiset permutations $\frac{n!}{n_1!n_2!}$, circular arrangements $(n-1)!$, Stars-and-Bars $\binom{n+k-1}{k-1}$, and derangements are **not** required in AA.

---

### Page `t1-4`: Complex Numbers and De Moivre's Theorem (AHL 1.12, 1.13, 1.14)

#### Official Syllabus Scope (Paraphrased)
- **AHL 1.12 Cartesian form of complex numbers**: Definition of $i$ via $i^2 = -1$; Cartesian form $z = a + bi$; real part $\operatorname{Re}(z) = a$, imaginary part $\operatorname{Im}(z) = b$; complex conjugate $z^* = a - bi$; arithmetic operations ($+, -, \times, \div$) including rationalizing the denominator using $z z^* = |z|^2 = a^2 + b^2$; complex roots of quadratic equations with real coefficients and $b^2 - 4ac < 0$.
- **AHL 1.13 Modulus-argument (polar) and Euler (exponential) forms**: Modulus $|z| = r = \sqrt{a^2 + b^2}$ and argument $\arg(z) = \theta$ (normally principal argument $-\pi < \theta \le \pi$ or $0 \le \theta < 2\pi$ as specified); polar form $z = r(\cos\theta + i\sin\theta) = r\operatorname{cis}\theta$; Euler form $z = re^{i\theta}$; representation on the Argand diagram; geometric interpretation of multiplication (multiply moduli, add arguments) and division (divide moduli, subtract arguments).
- **AHL 1.14 Complex conjugate roots; De Moivre's theorem and powers/roots of complex numbers**: Complex conjugate roots of quadratic and polynomial equations with real coefficients; De Moivre's theorem $[r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta)$ for $n \in \mathbb{Q}$; proof by mathematical induction for $n \in \mathbb{Z}^+$; finding the $n$-th roots of a complex number (including the $n$-th roots of unity $z^n = 1$); geometric representation of $n$-th roots as vertices of a regular $n$-gon on the Argand diagram; using De Moivre's theorem to derive multiple-angle trigonometric identities ($\cos n\theta, \sin n\theta$) and powers of $\sin\theta, \cos\theta$.

#### Exact IB Formula Booklet Formulas (Section 1.12, 1.13, 1.14)
- **Complex numbers**:
  $$z = a + bi$$
- **Modulus-argument (polar) and exponential (Euler) form**:
  $$z = r(\cos\theta + i\sin\theta) = re^{i\theta} = r\operatorname{cis}\theta$$
- **De Moivre's theorem**:
  $$[r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta) = r^n e^{in\theta} = r^n\operatorname{cis} n\theta$$
- **Not in Formula Booklet (Must Memorize)**:
  - Complex conjugate properties: $(z_1 \pm z_2)^* = z_1^* \pm z_2^*$, $(z_1 z_2)^* = z_1^* z_2^*$, $\left(\frac{z_1}{z_2}\right)^* = \frac{z_1^*}{z_2^*}$, and $z z^* = |z|^2 = a^2 + b^2$.
  - Quadratic factor formed by a conjugate pair $z = a \pm bi$ (or $r e^{\pm i\theta}$):
    $$(x - z)(x - z^*) = x^2 - (z + z^*)x + zz^* = x^2 - 2ax + (a^2 + b^2) = x^2 - (2r\cos\theta)x + r^2$$
  - All $n$ distinct roots of $z^n = r e^{i\theta}$:
    $$z_k = r^{1/n} \exp\left(i\frac{\theta + 2\pi k}{n}\right), \quad k = 0, 1, 2, \dots, n - 1$$
  - Sum of the $n$-th roots of unity ($1 + \omega + \omega^2 + \dots + \omega^{n-1} = 0$ for $\omega = e^{2\pi i/n}$).
  - Euler bridge identities for Paper 3 / trig derivations: If $z = \cos\theta + i\sin\theta$, then $z^n + z^{-n} = 2\cos n\theta$ and $z^n - z^{-n} = 2i\sin n\theta$.

#### Question Decoder (`t1-4`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Given that $2 - 3i$ is a root of $P(z) = 0$ where $P(z)$ has real coefficients..."* | **Conjugate Root Theorem**: $2 + 3i$ is immediately a second root! | Form the real quadratic factor $(z - (2-3i))(z - (2+3i)) = z^2 - 4z + 13$, then divide $P(z)$ by $z^2 - 4z + 13$ (or compare coefficients) to find the remaining roots. |
| *"Calculate $(1 - \sqrt{3}i)^{12}$"* / *"Find the least positive integer $n$ such that $z^n$ is real / purely imaginary"* | **Convert to polar/Euler form first** and apply **De Moivre's theorem**. Never expand high powers in Cartesian form! | $1 - \sqrt{3}i = 2e^{-i\pi/3}$. Then $z^n = 2^n e^{-in\pi/3}$. Real $\iff \sin(n\theta) = 0 \implies n\theta = k\pi$. Purely imaginary (and non-zero) $\iff \cos(n\theta) = 0 \implies n\theta = \frac{\pi}{2} + k\pi$. |
| *"Solve $z^n = w$"* (e.g., $z^4 = -8 + 8\sqrt{3}i$) | Write $w = r e^{i(\theta + 2\pi k)}$ and take the $n$-th root for $k = 0, 1, \dots, n-1$. | Adjust any angle outside $(-\pi, \pi]$ by adding/subtracting $2\pi$. On the Argand diagram, the $n$ roots lie on a circle of radius $r^{1/n}$ spaced by $\frac{2\pi}{n}$ radians, forming a regular $n$-gon. |
| *"Express $\cos 4\theta$ in terms of $\cos\theta$"* | Expand $(\cos\theta + i\sin\theta)^4$ by the binomial theorem, equate the **real part** to $\cos 4\theta$ (De Moivre), and replace $\sin^2\theta$ with $1 - \cos^2\theta$. | Imaginary part gives $\sin 4\theta$; dividing gives $\tan 4\theta = \frac{\operatorname{Im}}{\operatorname{Re}}$. |
| *"Express $\cos^4\theta$ in the form $A\cos 4\theta + B\cos 2\theta + C$ (hence integrate)"* | Use $2\cos\theta = z + z^{-1}$, expand $(z + z^{-1})^4$, and group $\left(z^k + z^{-k}\right) = 2\cos k\theta$. | $(2\cos\theta)^4 = 16\cos^4\theta = (z^4+z^{-4}) + 4(z^2+z^{-2}) + 6 = 2\cos 4\theta + 8\cos 2\theta + 6$. |
| *"Given $w = e^{2\pi i/5}$, simplify $1 + w + w^2 + w^3 + w^4$"* | **Roots of unity sum $= 0$** (or geometric series $\frac{1 - w^5}{1 - w} = 0$ since $w^5 = 1, w \neq 1$). | Frequently used in Paper 3 to deduce exact values like $\cos\left(\frac{2\pi}{5}\right) + \cos\left(\frac{4\pi}{5}\right) = -\frac{1}{2}$. |

#### Common Student Mistakes (`callout--mistake`)
1. **Thinking $\operatorname{Im}(a + bi) = bi$**: The imaginary part $\operatorname{Im}(z)$ is the **real number** $b$, **never** $bi$. Writing $\operatorname{Im}(3 - 4i) = -4i$ loses the accuracy mark.
2. **Wrong quadrant for $\arg(z)$**: Using $\theta = \arctan(b/a)$ blindly gives an angle in Quadrant I or IV. For $-1 + i$ (Quadrant II), $\arg(-1+i) = \frac{3\pi}{4}$, not $-\frac{\pi}{4}$. For $-1 - \sqrt{3}i$ (Quadrant III), $\arg = -\frac{2\pi}{3}$, not $\frac{\pi}{3}$. Always sketch a 2-second Argand diagram first!
3. **Finding only one root of $z^n = w$**: Taking $\frac{\theta}{n}$ without adding $+\frac{2\pi k}{n}$ misses $n-1$ roots.
4. **Assuming Conjugate Root Theorem holds when coefficients are complex**: $P(z) = 0$ has conjugate root pairs **only** if all coefficients of $P(z)$ are **real**.

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Complex loci on the Argand plane**: Unlike UK Further Maths or the pre-2021 HL Options, general complex loci equations such as $|z - z_1| = k|z - z_2|$ (Apollonius circles) or $\arg\left(\frac{z - z_1}{z - z_2}\right) = \alpha$ (circular arcs) are **not** required as standalone syllabus topics in AA HL (though simple $|z - a| = r$ or $|z - a| = |z - b|$ can be interpreted geometrically as distance if defined in a question).
- **Complex logarithms, complex trigonometric functions ($\sin z, \cos z$ for $z \in \mathbb{C}$), and contour integration**: University complex analysis is completely outside IB scope.

---

### Page `t1-5`: Mathematical Proof and Systems of Linear Equations (SL 1.6 + AHL 1.15, 1.16)

#### Official Syllabus Scope (Paraphrased)
- **SL 1.6 Simple deductive proof (numerical and algebraic)**: How to lay out a logical left-hand-side to right-hand-side (`LHS` $\to$ `RHS`) proof; the symbols and notation for equality ($=$) and identity ($\equiv$); proving identities; parity arguments (even $2k$, odd $2k+1$, consecutive integers, multiples).
- **AHL 1.15 Proof by mathematical induction, proof by contradiction, and use of counterexamples**:
  - **Mathematical induction** ($n \in \mathbb{Z}^+$): Series summation formulas, divisibility statements (e.g., $f(n)$ is divisible by $m$), higher derivatives (Topic 5 link), De Moivre's theorem, sequence closed forms.
  - **Proof by contradiction**: Irrationality of $\sqrt{2}$ (or $\sqrt{p}$), $\log_2 5$, infinity of primes, parity contradictions.
  - **Disproof by counterexample**: Providing a single explicit value that satisfies the hypothesis of a statement but violates its conclusion. *(Examinable in full in May 2028.)*
- **AHL 1.16 Solutions of systems of linear equations (up to 3 variables)**: Solution of $2 \times 2$ and $3 \times 3$ linear systems using both algebraic and technological methods (e.g. row reduction, by hand or on the GDC); identifying conditions for a **unique solution**, **no solution** (inconsistent system), or **infinitely many solutions** (dependent system, expressed in parametric form with parameter $t \in \mathbb{R}$); link to the geometric intersection of planes in Topic 3.18.

#### Exact IB Formula Booklet Formulas
- *None in Topic 1.6 / 1.15 / 1.16* — all proof structures and row-reduction steps must be known by heart.

#### Mandatory IB Proof by Induction Template (Earns Full Marks Every Time)
1. **Proposition statement** (optional but helpful): Let $P(n)$ be the statement that $\dots$ for $n \in \mathbb{Z}^+$.
2. **Base Case ($n = 1$, or initial $n_0$)**: Show explicitly that $\text{LHS} = \dots$ and $\text{RHS} = \dots$, so $\text{LHS} = \text{RHS}$ (or show $f(1) = m \times (\text{integer})$). State: *"Hence $P(1)$ is true."* (**R1**)
3. **Inductive Hypothesis**: State: *"Assume $P(k)$ is true for some $k \in \mathbb{Z}^+$"* and write out the equation for $n = k$ (for divisibility: *"Assume $f(k) = m A$ for some $A \in \mathbb{Z}$"*). (**M1**)
4. **Inductive Step ($n = k + 1$)**: Consider $n = k + 1$. Explicitly substitute the inductive hypothesis for $n = k$ and factor/simplify algebraically until it matches the exact target form with $(k + 1)$ in place of $n$. (**M1 A1 A1**)
5. **Conclusion Sentence (Mandatory for the final R1 mark!)**:
   > *"Since $P(1)$ is true, and $P(k)$ being true implies $P(k+1)$ is true, by the principle of mathematical induction, $P(n)$ is true for all $n \in \mathbb{Z}^+$."*

#### Question Decoder (`t1-5`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Prove by mathematical induction that $\sum_{r=1}^n u_r = f(n)$"* | Split $\sum_{r=1}^{k+1} u_r = \left(\sum_{r=1}^k u_r\right) + u_{k+1} = f(k) + u_{k+1}$. | Factor out common linear or exponential factors early! Never expand a cubic if $(k+1)$ can be factored out first. |
| *"Prove by mathematical induction that $a^{n} + b^n$ is divisible by $m$"* | Let $f(k) = mA$ ($A \in \mathbb{Z}$), isolate the highest-power term $a^k = mA - b^k$, and substitute into $f(k+1)$. | Avoids guessing clever algebraic tricks: $f(k+1) = a \cdot a^k + \dots = a(mA - b^k) + \dots$ automatically factors out $m$! |
| *"Prove by contradiction that $\sqrt{p}$ (or $\log_a b$) is irrational"* | Assume the negation: $\sqrt{p} = \frac{a}{b}$ where $a, b \in \mathbb{Z}, b \neq 0$ and **$\gcd(a,b) = 1$ (coprime / in lowest terms)**. | Square both sides $\implies a^2 = pb^2 \implies p \mid a \implies a = pk \implies p \mid b$, contradicting $\gcd(a,b) = 1$. |
| *"Find the value(s) of $k$ for which the system of equations has no solution / infinitely many solutions / a unique solution"* | Reduce the $3 \times 3$ augmented matrix to **row-echelon form** where the bottom row is $[0 \quad 0 \quad g(k) \mid h(k)]$. | - **Unique solution**: $g(k) \neq 0$.<br>- **No solution**: $g(k) = 0$ AND $h(k) \neq 0$.<br>- **Infinite solutions**: $g(k) = 0$ AND $h(k) = 0$. (To find the general solution, let $z = t \in \mathbb{R}$ and back-substitute). |

#### Common Student Mistakes (`callout--mistake`)
1. **Writing "Assume $P(n)$ is true for all $n$" in induction**: If you assume it is true for *all* $n$, you have assumed what you are trying to prove! You must write *"Assume $P(k)$ is true for **some** $k \in \mathbb{Z}^+$"* — writing *"for all $k$"* can cost marks (typically the mark for the inductive hypothesis).
2. **Omitting "coprime / no common factors" in $\sqrt{p}$ contradiction proofs**: Without stating $\gcd(a,b) = 1$ at the start, showing that $a$ and $b$ are both divisible by $p$ does not create a contradiction!
3. **Dividing by an expression containing the parameter $k$ during row reduction**: Dividing a row by $(k - 2)$ silently assumes $k \neq 2$ and loses the exact singular case the question is testing! Only multiply rows by non-zero constants during parameter reduction until the final row is isolated.

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Matrices, determinants, Cramer's rule, inverse matrices $A^{-1}$, eigenvalues and eigenvectors**: In the 2021–2028 curriculum, matrices belong **exclusively to IB Math AI HL**, **not** AA HL! AI tutors routinely tell AA HL students to take the $3 \times 3$ determinant $\det(A) = 0$ to find when a $3 \times 3$ system is singular. While $\det(A) = 0$ can be used as a fast rough check for when $g(k) = 0$, it **cannot** distinguish between *no solution* and *infinitely many solutions*—row reduction of the augmented matrix (or another valid method, such as checking consistency by substitution) is needed for that. The guide expects both algebraic and technological methods, so any valid method earns credit.
- **Strong induction**: Standard IB AA HL induction questions only require assuming $P(k)$ to prove $P(k+1)$ (unless a two-term recurrence is explicitly scaffolded in Paper 3).

---

## 2. Topic 2: Functions (21 SL hrs + 11 AHL hrs = 32 HL hrs)

### Map to Site Topic Pages (`t2-1` to `t2-3`)

| Page ID | Page Title | Syllabus Subtopics Covered | Level |
|---|---|---|---|
| `t2-1` | Lines, functions, domains, inverses and composites | SL 2.1, 2.2, 2.3, 2.4, 2.5 | SL+HL |
| `t2-2` | Quadratics, rational, exponential and log models | SL 2.6, 2.7, 2.8, 2.9, 2.10 | SL+HL |
| `t2-3` | Transformations, polynomials and modulus functions | SL 2.11 + AHL 2.12, 2.13, 2.14, 2.15, 2.16 | SL+HL |

---

### Page `t2-1`: Lines, Functions, Domains, Inverses and Composites (SL 2.1–2.5)

#### Official Syllabus Scope (Paraphrased)
- **SL 2.1 Equations of straight lines**: Gradient formula $m$; forms $y = mx + c$ (gradient-intercept), $y - y_1 = m(x - x_1)$ (point-gradient), and $ax + by + d = 0$ (general form with integer coefficients); parallel lines ($m_1 = m_2$) and perpendicular lines ($m_1 m_2 = -1$).
- **SL 2.2 Concept of a function, domain, range and graph**: Function notation $f(x)$, $v(t)$, $f: x \mapsto y$; vertical line test; natural (maximal) domain and restricted domain; finding the range analytically and graphically; functions as mathematical models; informal concept that an inverse function reverses or undoes the effect of a function; inverse function $f^{-1}(x)$ as a reflection in the line $y = x$. (Restricting a domain so that an inverse exists is AHL 2.14.)
- **SL 2.3 The graph of a function**: Creating a sketch from information given or a context, including transferring a graph from screen to paper; using technology to graph functions, including their sums and differences.
- **SL 2.4 Key features of graphs and GDC technology**: Finding domain, range, maxima, minima, intercepts, asymptotes, and intersections using GDC.
- **SL 2.5 Composite functions and identity function**: $(f \circ g)(x) = f(g(x))$; condition for the existence of $f \circ g$ ($\text{Range}(g) \subseteq \text{Domain}(f)$); identity property $(f \circ f^{-1})(x) = (f^{-1} \circ f)(x) = x$; finding an inverse function algebraically and stating its domain and range.

#### Exact IB Formula Booklet Formulas (Section 2.1)
- **Equations of a straight line**:
  $$y = mx + c; \quad ax + by + d = 0; \quad y - y_1 = m(x - x_1)$$
- **Gradient formula**:
  $$m = \frac{y_2 - y_1}{x_2 - x_1}$$
- **Not in Formula Booklet (Must Memorize)**:
  - Composite function: $(f \circ g)(x) = f(g(x))$.
  - Identity and inverse relation: $(f \circ f^{-1})(x) = (f^{-1} \circ f)(x) = x$.
  - Perpendicular gradients: $m_1 m_2 = -1 \iff m_2 = -\frac{1}{m_1}$.
  - Domain-Range swap for inverses: $\text{Domain}(f^{-1}) = \text{Range}(f)$ and $\text{Range}(f^{-1}) = \text{Domain}(f)$.
  - Self-inverse functions (AHL 2.14, extension beyond SL): $f^{-1}(x) = f(x) \iff f(f(x)) = x$ (their graphs are symmetric about $y = x$, e.g., $f(x) = \frac{ax + b}{cx - a}$).
  - Existence of composite $(f \circ g)(x)$: requires $\text{Range}(g) \subseteq \text{Domain}(f)$.

#### Question Decoder (`t2-1`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Find the equation of the perpendicular bisector of $[AB]$"* | Line passing through the **midpoint $M$** of $[AB]$ with gradient **$m_\perp = -\frac{1}{m_{AB}}$**. | Compute $M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$ and $m_{AB}$, then use $y - y_M = m_\perp(x - x_M)$. Convert to $ax+by+d=0$ if requested! |
| *"State the largest possible domain of $f$"* | Check the 3 domain killers: **Denominators $\neq 0$**, **Even roots $\ge 0$**, **Log arguments $> 0$**. | Combine conditions using interval or inequality notation (e.g., $\ln(4 - x^2)$ requires $4 - x^2 > 0 \implies -2 < x < 2$). |
| *"Explain why $f$ does not have an inverse"* / *"Find the smallest value of $k$ such that $f$ for $x \ge k$ has an inverse"* (domain restriction: AHL 2.14) | $f$ must be **one-to-one** (pass the horizontal line test). For a quadratic or turning-point curve, $k$ is the **$x$-coordinate of the vertex / local extremum**. | State: *"$f$ is not one-to-one (many-to-one) / fails the horizontal line test."* Set $k = h$ (the vertex $x$-coordinate). |
| *"Find $f^{-1}(a)$"* (where $a$ is a specific number) | Do **not** waste time finding the formula for $f^{-1}(x)$ if it's messy—just **solve $f(x) = a$**! | Since $f^{-1}(a) = x \iff f(x) = a$, solve $f(x) = a$ within $\text{Domain}(f)$. |
| *"Solve $f(x) = f^{-1}(x)$"* | Intersections of $y = f(x)$ and $y = f^{-1}(x)$ (for an increasing function) lie on the line **$y = x$**! | Solve the much simpler equation **$f(x) = x$** instead of equating $f(x)$ to a radical/fractional inverse. |
| *"Explain why $(f \circ g)(x)$ is not defined for all $x$ in the domain of $g$"* | **Range-Domain mismatch**: $\text{Range}(g) \not\subseteq \text{Domain}(f)$. | Find $\text{Range}(g)$ and show explicitly that some outputs of $g(x)$ fall outside $\text{Domain}(f)$. |

#### Common Student Mistakes (`callout--mistake`)
1. **Reversing composite order**: Reading $(f \circ g)(x)$ left-to-right and substituting $f(x)$ into $g$ instead of substituting the inner function $g(x)$ into the outer function $f$. Always rewrite $(f \circ g)(x)$ as $f(g(x))$ on line 1!
2. **Choosing the wrong sign when inverting a quadratic**: If $f(x) = (x - 3)^2 + 1$ for $x \le 3$, then swapping $x$ and $y$ gives $(y - 3)^2 = x - 1 \implies y = 3 \pm \sqrt{x - 1}$. Because $\text{Range}(f^{-1}) = \text{Domain}(f)$ has $y \le 3$, you **must** choose the minus sign: $f^{-1}(x) = 3 - \sqrt{x - 1}$ for $x \ge 1$.
3. **Finding the range of $f$ using only endpoints**: If $f(x)$ has a local maximum or minimum *inside* the restricted domain $[a, b]$, plugging in only $f(a)$ and $f(b)$ gives the wrong range. Always check turning points!

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Formal set-theoretic definitions of injective, surjective, bijective, and codomain**: You need the words *one-to-one* and *many-to-one* (and you may see *injective*), but formal proofs of surjectivity onto a separate codomain $B \neq \text{Range}(f)$ are **not** examined in AA HL.

---

### Page `t2-2`: Quadratics, Rational, Exponential and Logarithmic Models (SL 2.6–2.10)

#### Official Syllabus Scope (Paraphrased)
- **SL 2.6 Quadratic functions and models**: Standard form $f(x) = ax^2 + bx + c$; vertex (completed-square) form $f(x) = a(x - h)^2 + k$ with vertex $(h, k)$; factored (intercept) form $f(x) = a(x - p)(x - q)$ with $x$-intercepts $(p, 0)$ and $(q, 0)$; axis of symmetry $x = -\frac{b}{2a} = \frac{p+q}{2}$.
- **SL 2.7 Quadratic equations and inequalities, and the discriminant**: Quadratic formula; discriminant $\Delta = b^2 - 4ac$ for nature of roots ($\Delta > 0$: two distinct real roots; $\Delta = 0$: one repeated real root / equal roots; $\Delta < 0$: no real roots / two complex conjugate roots in AHL); solving quadratic inequalities using sign diagrams or parabolic sketches.
- **SL 2.8 Reciprocal and linear-over-linear rational functions**: $f(x) = \frac{k}{x}$ and $f(x) = \frac{ax + b}{cx + d}$; equations of vertical asymptote $x = -\frac{d}{c}$ and horizontal asymptote $y = \frac{a}{c}$; domain and range; the self-inverse nature of $\frac{1}{x}$. (The general self-inverse condition for $\frac{ax+b}{cx+d}$ is AHL 2.14.)
- **SL 2.9 Exponential and logarithmic functions and their graphs**: $f(x) = a^x$, $f(x) = e^x$, $f(x) = \log_a x$, $f(x) = \ln x$ as inverse pairs; horizontal asymptotes of exponential graphs and vertical asymptotes of logarithmic graphs; exponential growth and decay modelling.
- **SL 2.10 Solving equations both graphically and analytically**: Using GDC to solve $f(x) = g(x)$ when no algebraic closed form exists (e.g., $e^{-x} = x^2 - 2$).

#### Exact IB Formula Booklet Formulas (Section 2.6, 2.7, 2.9)
- **Axis of symmetry of the graph of a quadratic function**:
  $$f(x) = ax^2 + bx + c \implies \text{axis of symmetry is } x = -\frac{b}{2a}$$
- **Solutions of a quadratic equation**:
  $$ax^2 + bx + c = 0 \implies x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}, \quad a \neq 0$$
- **Discriminant**:
  $$\Delta = b^2 - 4ac$$
- **Exponential and logarithmic functions (SL 2.9)**:
  $$a^x = e^{x\ln a}; \quad \log_a a^x = x = a^{\log_a x}, \quad \text{where } a, x > 0, a \neq 1$$
- **Not in Formula Booklet (Must Memorize)**:
  - Vertex form: $f(x) = a(x - h)^2 + k$ has vertex $(h, k)$ and axis of symmetry $x = h$.
  - Factored form: $f(x) = a(x - p)(x - q)$ has $x$-intercepts $p, q$ and axis of symmetry $x = \frac{p + q}{2}$.
  - Linear-over-linear rational function $f(x) = \frac{ax + b}{cx + d}$ ($c \neq 0$):
    - Vertical asymptote (VA): **$x = -\frac{d}{c}$** (set denominator $= 0$).
    - Horizontal asymptote (HA): **$y = \frac{a}{c}$** (ratio of leading $x$-coefficients).

#### Question Decoder (`t2-2`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"The line $y = mx + c$ is tangent to / touches the curve $y = ax^2 + bx + d$"* | Equate $ax^2 + bx + d = mx + c$, rearrange to $Ax^2 + Bx + C = 0$, and set **$\Delta = B^2 - 4AC = 0$**. | Faster than calculus when parameters are in both terms; also works for conic/rational intersections. |
| *"The quadratic $kx^2 + 4x + (k-3)$ is always positive ($> 0$ for all $x \in \mathbb{R}$)"* | **Two conditions**: Parabola opens up (**$a > 0$**) AND never touches the $x$-axis (**$\Delta < 0$**). | Solve $k > 0$ and $16 - 4k(k-3) < 0$ simultaneously! (If *"always negative"*, require $a < 0$ AND $\Delta < 0$). |
| *"Express $\frac{ax+b}{cx+d}$ in the form $A + \frac{B}{cx+d}$"* | **Algebraic division / Trick the numerator**: write $ax + b = \frac{a}{c}(cx + d) + B$ and split the fraction. | Immediately reveals the horizontal asymptote $y = A$, vertical asymptote $x = -\frac{d}{c}$, and transformations from $\frac{1}{x}$. |
| *"Find the initial population / temperature"* | Substitute **$t = 0$** (remembering $e^0 = 1$). | Check whether the constant $C$ is the initial value or if $P(0) = A + B e^0 = A + B$. |
| *"Find the long-term / limiting value of $P(t) = A + B e^{-kt}$ ($k > 0$)"* | Take the limit as $t \to \infty$: since $e^{-kt} \to 0$, $P(t) \to A$ (the **horizontal asymptote**). | State *"As $t \to \infty, e^{-kt} \to 0$, so $P \to A$"* to earn the reasoning mark. |

#### Common Student Mistakes (`callout--mistake`)
1. **Writing an asymptote as a number instead of an equation**: Writing *"Vertical asymptote $= 3$"* or *"VA: $3$"* usually loses the mark! An asymptote is a line, so you **must** write **$x = 3$** for a vertical asymptote and **$y = 2$** for a horizontal asymptote.
2. **Taking square roots across a quadratic inequality**: Writing $x^2 > 9 \implies x > \pm 3$ is meaningless and wrong. Sketch the parabola $y = x^2 - 9$: it is above the axis for $x < -3$ or $x > 3$.
3. **Forgetting to check $a = 0$ when $a$ is a parameter in $ax^2 + bx + c$**: If a question asks when $(k-1)x^2 + 2(k-1)x + 3 > 0$ for all $x \in \mathbb{R}$, besides checking $k - 1 > 0$ and $\Delta < 0$, also check whether the degenerate linear case $k = 1$ ($3 > 0$, which is always true!) works.

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Focus-directrix conic sections**: Parabolas defined via focus and directrix, ellipses $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, and hyperbolas $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ are **not** in the IB AA HL syllabus.

---

### Page `t2-3`: Transformations, Polynomials, Rational Functions and Modulus Inequalities (SL 2.11 + AHL 2.12–2.16)

#### Official Syllabus Scope (Paraphrased)
- **SL 2.11 Transformations of graphs**: Translations $y = f(x) + b$ (vertical by $\binom{0}{b}$) and $y = f(x - a)$ (horizontal by $\binom{a}{0}$); reflections $y = -f(x)$ (in the $x$-axis) and $y = f(-x)$ (in the $y$-axis); vertical stretch $y = pf(x)$ (scale factor $p$) and horizontal stretch $y = f(qx)$ (scale factor $\frac{1}{q}$); composite transformations $y = af(b(x + c)) + d$.
- **AHL 2.12 Polynomial functions, graphs, roots, factor and remainder theorems**: The Remainder Theorem (when $P(x)$ is divided by $(ax - b)$, the remainder is $P\left(\frac{b}{a}\right)$); the Factor Theorem ($P(k) = 0 \iff (x - k)$ is a factor of $P(x)$); sum and product of roots of polynomial equations (Vieta's formulas) $\sum \alpha_i = -\frac{a_{n-1}}{a_n}$ and $\prod \alpha_i = (-1)^n \frac{a_0}{a_n}$; multiplicity of roots and graphical behaviour at the $x$-axis (single root crosses, double root is tangent, triple root has a horizontal point of inflexion).
- **AHL 2.13 Rational functions**: Functions of the form $f(x) = \frac{ax + b}{cx^2 + dx + e}$ and $f(x) = \frac{ax^2 + bx + c}{dx + e}$; vertical, horizontal, and **oblique (slant) asymptotes** ($y = mx + c$ via polynomial division when $\deg(\text{num}) = \deg(\text{denom}) + 1$).
- **AHL 2.14 Odd and even functions; finding inverses with domain restriction; self-inverse functions**: Even functions $f(-x) = f(x)$ (symmetric about the $y$-axis); odd functions $f(-x) = -f(x)$ (rotational symmetry of order 2 about the origin); finding the inverse function $f^{-1}(x)$, including domain restriction (e.g. the largest domain for which an inverse exists); self-inverse functions, $f(f(x)) = x$.
- **AHL 2.15 Solutions of $g(x) \ge f(x)$ both graphically and analytically**: Using technology (graphs) to solve inequalities with no analytic method; solving polynomial and rational inequalities analytically without cross-multiplying by expressions of unknown sign.
- **AHL 2.16 Modulus, reciprocal and squared graph transformations**: Sketching $y = |f(x)|$, $y = f(|x|)$, $y = \frac{1}{f(x)}$, $y = f(ax + b)$ (check the exact list in the guide), $y = [f(x)]^2$, and solving equations and inequalities involving modulus functions.

#### Exact IB Formula Booklet Formulas (Section 2.12)
- **Sum and product of the roots of polynomial equations of the form $\sum_{r=0}^{n} a_r x^r = 0$**:
  $$\text{Sum is } \frac{-a_{n-1}}{a_n}; \quad \text{product is } \frac{(-1)^n a_0}{a_n}$$
- **Not in Formula Booklet (Must Memorize)**:
  - Remainder Theorem: Remainder of $P(x) \div (x - k)$ is $P(k)$; remainder of $P(x) \div (ax - b)$ is $P\left(\frac{b}{a}\right)$.
  - For a cubic $a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0$ with roots $\alpha, \beta, \gamma$:
    $$\alpha + \beta + \gamma = -\frac{a_2}{a_3}, \quad \alpha\beta + \beta\gamma + \gamma\alpha = +\frac{a_1}{a_3}, \quad \alpha\beta\gamma = -\frac{a_0}{a_3}$$
  - Useful symmetric root identities:
    - $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$
    - $\alpha^2 + \beta^2 + \gamma^2 = (\alpha + \beta + \gamma)^2 - 2(\alpha\beta + \beta\gamma + \gamma\alpha)$
    - $\frac{1}{\alpha} + \frac{1}{\beta} + \frac{1}{\gamma} = \frac{\alpha\beta + \beta\gamma + \gamma\alpha}{\alpha\beta\gamma}$

#### Master Guide to Graph Transformations (`t2-3`)

1. **Order of horizontal transformations in $y = f(bx + c)$**:
   - **Method A (Inside-Out / Unedited)**: Translate horizontally by $\binom{-c}{0}$ **first**, then stretch horizontally by scale factor $\frac{1}{b}$.
   - **Method B (Factored form $y = f\left(b\left(x + \frac{c}{b}\right)\right)$ — Recommended!)**: Stretch horizontally by scale factor $\frac{1}{b}$ **first**, then translate horizontally by $\binom{-c/b}{0}$.
   - **Coordinate tracking shortcut**: For any point $(x_0, y_0)$ on $y = f(x)$, the corresponding point $(x_{\text{new}}, y_{\text{new}})$ on $y = a f(bx + c) + d$ satisfies $bx_{\text{new}} + c = x_0 \implies x_{\text{new}} = \frac{x_0 - c}{b}$ and $y_{\text{new}} = a y_0 + d$.
2. **AHL 2.16 Function Graph Transformations**:
   - **$y = |f(x)|$**: Keep the portion of $y = f(x)$ where $f(x) \ge 0$ unchanged; reflect any portion below the $x$-axis ($f(x) < 0$) upwards across the $x$-axis. Sharp corners appear at simple $x$-intercepts!
   - **$y = f(|x|)$**: Erase the entire left half ($x < 0$) of the graph; keep the right half ($x \ge 0$) and reflect that right half across the $y$-axis onto $x < 0$. The resulting graph is always **even**.
   - **$y = \frac{1}{f(x)}$ (Reciprocal graph checklist)**:
     1. **$x$-intercepts of $f(x)$ become vertical asymptotes** of $\frac{1}{f(x)}$ ($f(x) = 0 \implies x = c$ is a VA).
     2. **Vertical asymptotes of $f(x)$ become $x$-intercepts** (removable/zero approaches).
     3. **Horizontal asymptote $y = k \neq 0$ becomes $y = \frac{1}{k}$**; if $f(x) \to \pm\infty$, then $\frac{1}{f(x)} \to 0^\pm$ (HA $y = 0$).
     4. **Invariant points**: Points where $f(x) = 1$ or $f(x) = -1$ stay in the exact same position!
     5. **Local maxima and minima swap roles**: A local maximum $(a, M)$ with $M > 0$ becomes a local minimum $\left(a, \frac{1}{M}\right)$, and vice versa.

#### Question Decoder (`t2-3`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"When $P(x)$ is divided by $(x-1)(x+2)$, the remainder is $ax + b$"* | Write $P(x) = Q(x)(x-1)(x+2) + ax + b$, then plug in **$x = 1$** and **$x = -2$** to get two linear equations for $a$ and $b$. | Never try to do long division on an unknown polynomial $P(x)$! |
| *"Find the equation of the oblique asymptote of $f(x) = \frac{2x^2 - 3x + 5}{x - 2}$"* | Perform **polynomial long division** (or synthetic division): $\frac{2x^2 - 3x + 5}{x - 2} = 2x + 1 + \frac{7}{x - 2}$. | As $x \to \pm\infty$, $\frac{7}{x-2} \to 0$, so the oblique asymptote is **$y = 2x + 1$**. |
| *"Find the range of $f(x) = \frac{x^2 - x + 1}{x - 1}$ without calculus"* | **Discriminant method**: Let $y = \frac{x^2 - x + 1}{x - 1}$, rearrange to $x^2 - (y+1)x + (y+1) = 0$. Since $x \in \mathbb{R}$, set **$\Delta_x \ge 0$**! | $\Delta = (y+1)^2 - 4(y+1) = (y+1)(y-3) \ge 0 \implies y \le -1$ or $y \ge 3$. Works on Paper 1 even before learning Topic 5! |
| *"Solve $\frac{2x - 1}{x + 3} \ge 1$ analytically"* | **Never cross-multiply by $(x+3)$**! Move everything to one side: $\frac{2x-1}{x+3} - 1 \ge 0 \implies \frac{x - 4}{x + 3} \ge 0$ (or multiply by $(x+3)^2 > 0$). | Critical values are $x = 4$ (zero, included) and $x = -3$ (VA, **strictly excluded**: $x < -3$ or $x \ge 4$). |
| *"Solve $|2x - 3| < |x + 1|$"* | Since both sides are non-negative, **square both sides**: $(2x - 3)^2 < (x + 1)^2 \implies 3x^2 - 14x + 8 < 0$, or sketch both V-graphs and find intersections. | Squaring works cleanly when both sides are moduli; if one side is NOT a modulus (e.g., $|2x - 3| = x - 1$), check that $x - 1 \ge 0$ to reject extraneous roots! |

#### Common Student Mistakes (`callout--mistake`)
1. **Cross-multiplying rational inequalities by $(cx + d)$**: Multiplying $\frac{x+2}{x-3} < 2$ by $(x-3)$ assumes $x - 3 > 0$ and completely misses the branch where $x < 3$. Always subtract 2 to get a single fraction $\frac{8 - x}{x - 3} < 0$, or multiply both sides by $(x - 3)^2$.
2. **Confusing $y = |f(x)|$ and $y = f(|x|)$**: Remember: $|f(x)|$ puts the modulus on the *output* $y$ (so $y \ge 0$, reflect bottom up); $f(|x|)$ puts the modulus on the *input* $x$ (so $x < 0$ mirrors $x > 0$).
3. **Sign error on Product of Roots**: For an **even**-degree polynomial ($n = 2, 4$), $(-1)^n \frac{a_0}{a_n} = +\frac{a_0}{a_n}$, whereas for an **odd**-degree polynomial ($n = 3$), $(-1)^3 \frac{a_0}{a_3} = -\frac{a_0}{a_3}$. Remember alternating signs going down the coefficients: $-, +, -, +, \dots$

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Descartes' Rule of Signs & Rational Root Theorem proofs**: You do not need formal proofs of the Rational Root Theorem or Descartes' Rule of Signs. On Paper 1, any integer/simple rational root needed to factor a cubic or quartic is either small ($\pm 1, \pm 2, \pm 3$) or hinted by the question structure.
- **Non-linear (curved) asymptotes from a degree difference $\ge 2$**: In AHL 2.13, rational functions are limited to $\frac{\text{linear}}{\text{quadratic}}$ and $\frac{\text{quadratic}}{\text{linear}}$. Non-linear (parabolic) asymptotes from $\frac{\text{cubic}}{\text{linear}}$ are not in the syllabus.
