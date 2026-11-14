# Analysis Lab 한국어 용어집 (English → 한국어)

**Analysis Lab — IB Mathematics: Analysis and Approaches HL (May 2028)**을 한국어로 번역할 때 따르는 **유일한 용어 및 문체 기준**입니다.

- **독자**: 16~18세 고등학생(DP1·DP2 학생). 시험은 영어로 치르며, 개념 이해와 문제 해법 패턴 정리에 한국어 오버레이를 활용합니다.
- **용어 기준**: 대한민국 교육부 2015·2022 개정 교육과정 고등학교 수학(공통수학, 대수, 미적분 I·II, 확률과 통계, 기하) 교과서 표준 용어 및 대한수학회 수학용어집을 따릅니다.

---

## 1. 문체 및 표기 안내

1. **말투 (해요체)**:
   - 친절하고 명쾌한 과외 선생님 말투인 **해요체**(…해요, …예요, …할 수 있어요)를 씁니다.
   - 표 머리글, 버튼, 짧은 라벨은 명사형으로 끝냅니다(예: `정답 확인`, `다음 단계`).
   - 강조에는 `<strong>`을 쓰며 한글 기울임꼴은 쓰지 않습니다(수식 변수 `<i>x</i>`, `<i>n</i>`은 그대로 유지).
2. **영어 핵심 용어 및 지시어 병기 (시험은 영어)**:
   - 핵심 정의(`<dfn>`)가 처음 나올 때는 반드시 `<span class="en-term">(English term)</span>`을 함께 보여 줍니다:
     `<dfn>등차수열 <span class="en-term">(arithmetic sequence)</span></dfn>`
   - 문제의 지시어(Command terms)도 처음 중요하게 쓰일 때 영어를 괄호로 덧붙입니다:
     `보이시오 (Show that)`, `이를 이용하여 (Hence)`, `구하시오 (Find)`.
3. **숫자·수식·문장 부호**:
   - 한국어는 **반각** 문장 부호(`. , : ( ) ?`)를 씁니다.
   - 자연로그는 한국 교과서에서도 $\ln x$로 쓰므로 IB 표기 그대로 유지합니다.
   - **유효숫자 3자리(3 s.f.) 규칙**: 한국 수능/내신에서는 주로 정확한 값(무리수·분수)만 답하지만, IB(특히 Paper 2·3)에서는 특별한 지시가 없으면 **정확한 값 또는 유효숫자 3자리(3 s.f.)**로 반올림해 답합니다.

---

## 2. 사이트 UI·시험 제도·지시어 (Command Terms)

| English | 한국어 | 메모 |
|---|---|---|
| worked example | 예제 | 단계별 풀이 |
| question decoder | 문제 디코더 (해법 선택 가이드) | 문제 표현을 보고 어떤 공식을 쓸지 찾는 표 |
| try it | 직접 해 보기 | |
| hint | 힌트 | |
| common mistake | 흔한 실수 | `callout--mistake` |
| exam tip | 시험 팁 | `callout--exam` (영어+한국어 병기) |
| key idea | 핵심 개념 | `callout--key` |
| not needed for IB | IB 시험 범위 외 | `callout--scope` (AI 학습 시 과잉 학습 방지) |
| in your formula booklet | 공식집(Formula booklet)에 수록 | `callout--booklet` |
| formula booklet | 공식집 (Formula booklet) | |
| graphic display calculator (GDC) | 그래픽 계산기 (GDC) | Paper 2·Paper 3 필수 |
| no calculator (Paper 1) | 계산기 사용 불가 (Paper 1) | |
| mathematical exploration (IA) | 수학적 탐구 (IA) | 내부 평가 (Internal Assessment) |
| markscheme | 채점 기준 (Markscheme) | M1, A1, R1, N2, AG 기호는 영어 그대로 유지 |
| method mark (M1) / accuracy mark (A1) / reasoning mark (R1) | 방법 점수 (M1) / 정확도 점수 (A1) / 논리 점수 (R1) | |
| answer given (AG) | 문제에 답이 주어짐 (AG) | "Show that" 문제에서 중간 과정을 생략하면 0점 |
| significant figures (3 s.f.) | 유효숫자 (유효숫자 3자리) | |
| decimal places (2 d.p.) | 소수점 아래 자리 (소수점 아래 둘째 자리) | |
| exact value | 정확한 값 (엄밀값) | $\frac{\sqrt{3}}{2}$, $\ln 5$, $2\pi$ 등 |
| **Write down** / **State** | **쓰시오 / 답하시오 (Write down / State)** | 별도의 풀이 과정 없이 바로 답 작성 |
| **Find** | **구하시오 (Find)** | 주요 풀이 단계를 보이며 답 도출 |
| **Determine** | **구하시오 / 결정하시오 (Determine)** | 유일한 답을 구함 |
| **Calculate** | **계산하시오 (Calculate)** | 계산 과정을 보이며 수치를 구함 |
| **Show that** | **보이시오 (Show that)** | 주어진 결과를 역산하지 않고 논리적으로 유도 |
| **Prove** | **증명하시오 (Prove)** | 논리적 단계로 증명 |
| **Verify** | **확인하시오 (Verify)** | 대입 등을 통해 성립함을 확인 |
| **Hence** | **이를 이용하여 (Hence)** | 반드시 바로 앞 소문항의 결과를 사용해 풀이 |
| **Hence, or otherwise** | **이를 이용하거나 다른 방법으로 (Hence, or otherwise)** | 앞 결과를 이용하는 것이 가장 빠름 |
| **Sketch** | **개형을 그리시오 (Sketch)** | 절편·극값·점근선 등 핵심 특징을 나타낸 그래프 |
| **Draw** | **그리시오 (Draw)** | 축과 눈금을 맞춰 정확하게 그린 그래프/도형 |
| **Deduce** | **추론하시오 (Deduce)** | 주어진 정보로부터 결론 도출 |
| **Justify** | **근거를 들어 설명하시오 (Justify)** | 타당한 수학적 이유 제시 |
| **Interpret** | **해석하시오 (Interpret)** | 문제의 실생활 맥락에 맞게 의미 설명 |

---

## 3. Topic 1: Number and Algebra (수와 대수·수열·복소수·증명)

| English | 한국어 (고등학교 수학 표준) | 메모 |
|---|---|---|
| standard form / scientific notation | 과학적 표기법 (유효숫자 표기) | $a \times 10^k \ (1 \le a < 10, k \in \mathbb{Z})$ |
| sequence / series | 수열 / 급수 | |
| general term / $n$-th term ($u_n$) | 일반항 / 제$n$항 | |
| arithmetic sequence / arithmetic series | 등차수열 / 등차급수 | |
| common difference ($d$) | 공차 | |
| geometric sequence / geometric series | 등비수열 / 등비급수 | |
| common ratio ($r$) | 공비 | |
| sum of the first $n$ terms ($S_n$) | 첫째항부터 제$n$항까지의 합 | |
| sum to infinity ($S_\infty$) / infinite geometric series | 등비급수의 합 ($S_\infty$) | 수렴 조건: $|r| < 1$ |
| converge (convergent) / diverge (divergent) | 수렴하다 / 발산하다 | |
| sigma notation ($\Sigma$) | 합의 기호 ($\Sigma$, 시그마 표기) | |
| compound interest / depreciation | 복리 / 감가상각 | 현재가치 ($PV$), 미래가치 ($FV$, 원리합계) |
| exponent (index) / laws of exponents | 지수 / 지수법칙 | 거듭제곱근 ($\sqrt[n]{a}$) |
| logarithm / laws of logarithms | 로그 / 로그의 성질 | 밑(base), 진수 조건(argument $> 0$) |
| natural logarithm ($\ln x$) / common logarithm ($\log_{10} x$) | 자연로그 ($\ln x$) / 상용로그 ($\log_{10} x$) | |
| change of base formula | 밑의 변환 공식 | $\log_a x = \frac{\log_b x}{\log_b a}$ |
| factorial ($n!$) | 계승 ($n!$, 팩토리얼) | |
| binomial theorem / binomial expansion | 이항정리 / 이항전개 | |
| Pascal's triangle | 파스칼의 삼각형 | |
| binomial coefficient | 이항계수 | $\binom{n}{r} = {}_n\text{C}_r$ |
| constant term / term independent of $x$ | 상수항 / $x$를 포함하지 않는 항 | |
| counting principles | 경우의 수 (곱의 법칙·합의 법칙) | |
| permutation (${}^n\text{P}_r$) | 순열 (${}_n\text{P}_r$) | 순서를 고려하여 나열 |
| combination (${}^n\text{C}_r$) | 조합 (${}_n\text{C}_r$) | 순서를 고려하지 않고 선택 |
| partial fractions | 부분분수 분해 | |
| complex number ($z = a + bi$) | 복소수 ($z = a + bi$) | 실수부 $\operatorname{Re}(z)$, 허수부 $\operatorname{Im}(z)$, 순허수(purely imaginary) |
| Cartesian form | 직교좌표 형식 ($a + bi$ 꼴) | |
| complex conjugate ($z^*$) | 켤레복소수 ($z^*$) | 켤레근 정리 (conjugate root theorem) |
| Argand diagram (complex plane) | 복소수평면 (아르강 그림) | 실수축(real axis), 허수축(imaginary axis) |
| modulus ($|z| = r$) / argument ($\arg(z) = \theta$) | 절댓값 ($|z| = r$) / 편각 ($\arg(z) = \theta$) | |
| modulus-argument form / polar form | 극형식 | $r(\cos\theta + i\sin\theta) = r\operatorname{cis}\theta$ |
| Euler form / exponential form | 오일러 형식 (지수 형식) | $re^{i\theta}$ |
| De Moivre's theorem | 드무아브르 정리 | |
| $n$-th roots of unity | $1$의 $n$제곱근 | 복소수평면 위에서 정$n$각형의 꼭짓점을 이룸 |
| deductive proof / identity | 연역적 증명 / 항등식 | 좌변 (LHS), 우변 (RHS) |
| mathematical induction | 수학적 귀납법 | 기본 단계 ($n=1$), 귀납 가정 ($n=k$) |
| proof by contradiction | 귀류법 | 서로소 (coprime) |
| counterexample | 반례 | |
| system of linear equations | 연립일차방정식 | 첨가행렬(augmented matrix), 가우스 소거법(Gaussian elimination) |
| unique solution / no solution / infinitely many solutions | 유일한 해 / 해가 없다 (불능) / 해가 무수히 많다 (부정) | |

---

## 4. Topic 2: Functions (함수와 그래프)

| English | 한국어 (고등학교 수학 표준) | 메모 |
|---|---|---|
| gradient (slope) | 기울기 | |
| $x$-intercept / $y$-intercept | $x$절편 / $y$절편 | 좌표축과의 교점 (axial intercepts) |
| parallel / perpendicular lines | 평행한 직선 / 수직인 직선 | 수직이등분선 (perpendicular bisector) |
| function | 함수 | |
| domain / range | 정의역 / 치역 | |
| one-to-one / many-to-one | 일대일함수 / 다대일함수 | 수평선 판정법 (horizontal line test) |
| composite function ($(f \circ g)(x)$) | 합성함수 ($(f \circ g)(x)$) | |
| inverse function ($f^{-1}(x)$) | 역함수 ($f^{-1}(x)$) | 직선 $y = x$에 대한 대칭 |
| identity function | 항등함수 | |
| quadratic function / parabola | 이차함수 / 포물선 | |
| vertex / axis of symmetry | 꼭짓점 / 대칭축 | |
| completing the square | 완전제곱식으로 변형 | $a(x - h)^2 + k$ |
| discriminant ($\Delta = b^2 - 4ac$) | 판별식 ($\Delta = b^2 - 4ac$) | 서로 다른 두 실근 ($\Delta > 0$), 중근 ($\Delta = 0$), 실근 없음 ($\Delta < 0$) |
| reciprocal function / rational function | 분수함수 / 유리함수 | |
| asymptote | 점근선 | 수직점근선(vertical), 수평점근선(horizontal), 사선점근선(oblique/slant) |
| exponential function / logarithmic function | 지수함수 / 로그함수 | 지수적 증가(exponential growth), 지수적 감소(exponential decay) |
| transformation of graphs | 그래프의 변환 | |
| translation / reflection / stretch | 평행이동 / 대칭이동 / 확대·축소 (신축) | |
| polynomial / degree / leading coefficient | 다항식 / 차수 / 최고차항의 계수 | 몫(quotient), 나머지(remainder) |
| remainder theorem / factor theorem | 나머지정리 / 인수정리 | |
| sum and product of roots (Vieta's formulas) | 근과 계수의 관계 | |
| even function / odd function | 짝함수(우함수) / 홀함수(기함수) | $y$축 대칭 / 원점 대칭 |
| modulus function / absolute value ($\|x\|$) | 절댓값 함수 ($\|x\|$) | |

---

## 5. Topic 3: Geometry and Trigonometry (기하와 삼각함수·공간벡터)

| English | 한국어 (고등학교 수학 표준) | 메모 |
|---|---|---|
| midpoint / distance between two points | 중점 / 두 점 사이의 거리 | |
| right pyramid / right cone / sphere / hemisphere | 직각뿔 / 직원뿔 / 구 / 반구 | 모선의 길이(slant height), 겉넓이(surface area), 부피(volume) |
| angle between a line and a plane / between two planes | 직선과 평면이 이루는 각 / 두 평면이 이루는 각 (이면각) | 정사영 (orthogonal projection) |
| sine rule / ambiguous case | 사인법칙 / 삼각형이 두 개 만들어지는 경우 (모호한 경우) | |
| cosine rule | 코사인법칙 | |
| angle of elevation / angle of depression | 올려다본 각 (앙각) / 내려다본 각 (부각) | |
| bearing (true bearing) | 방위각 | 북쪽을 기준으로 시계 방향으로 잰 각 ($000^\circ\sim 360^\circ$) |
| radian ($\text{rad}$) / radian measure | 라디안 ($\text{rad}$) / 호도법 | |
| arc length ($l = r\theta$) / area of a sector ($A = \frac{1}{2}r^2\theta$) | 호의 길이 / 부채꼴의 넓이 | 현(chord), 활꼴(segment) |
| unit circle / quadrant | 단위원 / 사분면 (제1~제4사분면) | |
| trigonometric identity | 삼각함수의 관계 (삼각항등식) | $\cos^2\theta + \sin^2\theta = 1$ |
| double-angle identities | 배각의 공식 (이배각 공식) | |
| compound-angle identities (addition theorems) | 삼각함수의 덧셈정리 | $\sin(A \pm B), \cos(A \pm B), \tan(A \pm B)$ |
| reciprocal trigonometric functions ($\sec, \operatorname{cosec}, \cot$) | 시컨트($\sec$)·코시컨트($\operatorname{cosec}$)·코탄젠트($\cot$) | |
| inverse trigonometric functions ($\arcsin, \arccos, \arctan$) | 역삼각함수 ($\arcsin, \arccos, \arctan$) | |
| periodic function | 주기함수 | 진폭(amplitude), 주기(period), 중심축(principal axis), 위상차(phase shift) |
| vector / scalar | 벡터 / 스칼라 (실수) | |
| position vector / displacement vector | 위치벡터 / 변위벡터 | |
| magnitude of a vector ($|\mathbf{v}|$) / unit vector ($\hat{\mathbf{v}}$) | 벡터의 크기 ($|\mathbf{v}|$) / 단위벡터 ($\hat{\mathbf{v}}$) | 기본 단위벡터 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ |
| collinear / coplanar | 한 직선 위에 있는 (공선) / 한 평면 위에 있는 (공면) | |
| scalar product / dot product ($\mathbf{v}\cdot\mathbf{w}$) | 내적 (스칼라곱, $\mathbf{v}\cdot\mathbf{w}$) | 수직 조건: $\mathbf{v}\cdot\mathbf{w} = 0$ |
| vector product / cross product ($\mathbf{v}\times\mathbf{w}$) | 외적 (벡터곱, $\mathbf{v}\times\mathbf{w}$) | 두 벡터 $\mathbf{v}, \mathbf{w}$에 모두 수직인 벡터 |
| vector equation of a line ($\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$) | 직선의 벡터방정식 | 방향벡터(direction vector), 매개변수 방정식(parametric form) |
| coincident / parallel / intersecting / skew lines | 일치하는 / 평행한 / 한 점에서 만나는 / 꼬인 위치에 있는 직선 | |
| normal vector ($\mathbf{n}$) / equation of a plane | 법선벡터 ($\mathbf{n}$) / 평면의 방정식 | 수선의 발 (foot of perpendicular) |

---

## 6. Topic 4: Statistics and Probability (통계와 확률)

| English | 한국어 (고등학교 수학 표준) | 메모 |
|---|---|---|
| population / sample / random sample | 모집단 / 표본 / 임의추출 표본 | 표본 편향 (sampling bias) |
| discrete data / continuous data | 이산 자료 / 연속 자료 | |
| frequency table / histogram | 도수분포표 / 히스토그램 | 누적도수분포 곡선 (cumulative frequency curve) |
| mean ($\bar{x}, \mu$) / median / mode | 평균 / 중앙값 / 최빈값 | 계급값 (mid-interval value) |
| quartile ($Q_1, Q_3$) / interquartile range ($\text{IQR}$) | 사분위수 (제1사분위수 $Q_1$, 제3사분위수 $Q_3$) / 사분위수 범위 ($\text{IQR}$) | 범위 (range) |
| box-and-whisker diagram (box plot) | 상자수염그림 (상자그림) | 이상치 (outlier) |
| variance ($\sigma^2, \operatorname{Var}(X)$) / standard deviation ($\sigma$) | 분산 ($\sigma^2, \operatorname{Var}(X)$) / 표준편차 ($\sigma$) | |
| scatter diagram / correlation coefficient ($r$) | 산점도 / 상관계수 ($r$) | 양의 상관관계·음의 상관관계 |
| regression line of $y$ on $x$ / $x$ on $y$ | $x$에 대한 $y$의 회귀직선 / $y$에 대한 $x$의 회귀직선 | 내삽(interpolation), 외삽(extrapolation) |
| trial / outcome / sample space ($U$) / event | 시행 / 결과 / 표본공간 ($U$) / 사건 | 여사건 ($A'$, complementary event) |
| Venn diagram / tree diagram | 벤다이어그램 / 수형도 | |
| mutually exclusive events / independent events | 배반사건 / 독립사건 | |
| conditional probability ($P(A \mid B)$) | 조건부확률 ($P(A \mid B)$) | |
| Bayes' theorem | 베이즈 정리 | |
| discrete random variable | 이산확률변수 | 확률질량함수·확률분포표 (probability distribution) |
| expected value / expectation ($E(X)$) | 기댓값 (평균, $E(X)$) | 공정한 게임 (fair game, $E = 0$) |
| binomial distribution ($\text{B}(n, p)$) | 이항분포 ($\text{B}(n, p)$) | 독립시행의 확률 |
| normal distribution ($\text{N}(\mu, \sigma^2)$) | 정규분포 ($\text{N}(\mu, \sigma^2)$) | 표준정규분포 ($\text{N}(0, 1)$), 표준화 ($Z = \frac{X-\mu}{\sigma}$) |
| continuous random variable / probability density function (PDF) | 연속확률변수 / 확률밀도함수 (PDF) | |

---

## 7. Topic 5: Calculus (미적분·미분방정식·급수)

| English | 한국어 (고등학교 수학 표준) | 메모 |
|---|---|---|
| limit ($\lim_{x\to a} f(x)$) / continuity / differentiability | 극한 / 연속성 / 미분가능성 | |
| differentiation from first principles | 미분계수의 정의를 이용한 미분 (도함수의 정의) | $f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$ |
| derivative ($f'(x), \frac{dy}{dx}$) / second derivative ($f''(x)$) | 도함수 (미분계수) / 이계도함수 | $n$계도함수 ($n$-th derivative) |
| tangent / normal (to a curve) | 접선 / 법선 | |
| increasing / decreasing function | 증가함수 / 감소함수 | 증감표 (sign diagram) |
| chain rule / product rule / quotient rule | 연쇄법칙 (합성함수의 미분법) / 곱의 미분법 / 몫의 미분법 | |
| stationary point | 정류점 ($f'(x) = 0$인 점) | |
| local maximum / local minimum | 극대 (극댓값) / 극소 (극솟값) | 극값(local extrema), 최댓값·최솟값(global maximum/minimum) |
| concavity (concave up / concave down) | 오목과 볼록 (아래로 볼록 / 위로 볼록) | ※영어 concave up = 아래로 볼록 ($f'' > 0$), concave down = 위로 볼록 ($f'' < 0$)! |
| point of inflexion (inflection) | 변곡점 | $f''(x) = 0$이고 좌우에서 $f''(x)$의 부호가 바뀌는 점 |
| optimization | 최대·최소 활용 (최적화) | |
| L'Hôpital's rule / indeterminate form | 로피탈의 정리 / 부정형 ($\frac{0}{0}, \frac{\infty}{\infty}$) | |
| implicit differentiation / related rates | 음함수의 미분법 / 관련 변화율 (시간에 대한 변화율) | |
| anti-differentiation / indefinite integral / definite integral | 부정적분 / 정적분 | 적분상수 ($+C$), 초기조건·경계조건 (initial / boundary condition) |
| integration by substitution / integration by parts | 치환적분법 / 부분적분법 | |
| area between two curves / volume of revolution | 두 곡선 사이의 넓이 / 회전체의 부피 | $x$축 둘레로 회전 ($V = \pi\int y^2\,dx$), $y$축 둘레로 회전 ($V = \pi\int x^2\,dy$) |
| kinematics | 속도와 거리 (운동학) | 위치·변위(displacement $s$), 속도(velocity $v$), 속력(speed $|v|$), 가속도(acceleration $a$), 실제로 움직인 거리(total distance $\int |v|\,dt$) |
| differential equation (DE) | 미분방정식 | 1계 미분방정식, 일반해(general solution), 특수해(particular solution) |
| Euler's method | 오일러 방법 | 단계 크기 (step length $h$) |
| separable differential equation | 변수분리형 미분방정식 | 변수분리법 |
| homogeneous differential equation ($y = vx$) | 동차 미분방정식 ($y = vx$) | |
| integrating factor ($e^{\int P(x)\,dx}$) | 적분인자 ($e^{\int P(x)\,dx}$) | 1계 선형 미분방정식 |
| Maclaurin series | 매클로린 급수 (매클로린 전개) | |
