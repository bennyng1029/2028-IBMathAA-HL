# Syllabus & Exam Research: Topics 3, 4 and 5 — Geometry & Trigonometry, Statistics & Probability, Calculus

**Course**: IB Diploma Programme Mathematics: Analysis and Approaches Higher Level (AA HL)  
**Target Examination**: **May 2028** (Governed by the *Mathematics: analysis and approaches guide*, First assessment May 2021, Final assessment November 2028, and the **Version 1.3 AA Formula Booklet**)  
**Site Pages Covered**: `t3-1` to `t3-3` (Topic 3), `t4-1` to `t4-2` (Topic 4), and `t5-1` to `t5-4` (Topic 5)

---

## 3. Topic 3: Geometry and Trigonometry (25 SL hrs + 26 AHL hrs = 51 HL hrs)

### Map to Site Topic Pages (`t3-1` to `t3-3`)

| Page ID | Page Title | Syllabus Subtopics Covered | Level |
|---|---|---|---|
| `t3-1` | 3D geometry, triangle trigonometry and radians | SL 3.1, 3.2, 3.3, 3.4 | SL+HL |
| `t3-2` | The unit circle, trig identities and periodic models | SL 3.5, 3.6, 3.7, 3.8 + AHL 3.9, 3.10, 3.11 | SL+HL |
| `t3-3` | Vectors, lines and planes in 3D space | AHL 3.12, 3.13, 3.14, 3.15, 3.16, 3.17, 3.18 | AHL |

---

### Page `t3-1`: 3D Geometry, Triangle Trigonometry and Radians (SL 3.1–3.4)

#### Official Syllabus Scope (Paraphrased)
- **SL 3.1 3D space, volume and surface area**: Distance between two points in 3D space $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$ and coordinates of the midpoint; volume and surface area of 3D solids including right pyramids, right cones, spheres, hemispheres, and combinations of solids; angle between a line and a plane, and between two planes (via right-angled triangles).
- **SL 3.2 Right-angled and non-right-angled triangle trigonometry**: Sine, cosine, and tangent ratios; the sine rule (including the **ambiguous case** $\text{SSA}$); the cosine rule; area of a triangle $\frac{1}{2}ab\sin C$.
- **SL 3.3 Applications of trigonometry**: Angles of elevation and depression; three-figure true bearings (measured clockwise from North, $000^\circ$ to $360^\circ$); construction of labelled diagrams from verbal descriptions.
- **SL 3.4 Radian measure, arcs and sectors**: Definition of radian measure and conversion between degrees and radians ($\pi\text{ rad} = 180^\circ$); arc length $l = r\theta$ and area of a sector $A = \frac{1}{2}r^2\theta$ (with $\theta$ in radians); area of a circular segment.

#### Exact IB Formula Booklet Formulas (Prior Learning + Section 3.1, 3.2, 3.4)
- **Prior Learning (Page 2 of Booklet)**:
  - Volume of a right-pyramid: $V = \frac{1}{3}Ah$, where $A$ is the area of the base and $h$ is the height.
  - Volume of a right cone: $V = \frac{1}{3}\pi r^2 h$; Area of the curved surface of a cone: $A = \pi rl$, where $l$ is the slant height.
  - Volume of a sphere: $V = \frac{4}{3}\pi r^3$; Surface area of a sphere: $A = 4\pi r^2$.
- **Distance between two points $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$**:
  $$d = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2}$$
- **Coordinates of the midpoint of a line segment with endpoints $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$**:
  $$\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2}\right)$$
- **Sine rule**:
  $$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$
- **Cosine rule**:
  $$c^2 = a^2 + b^2 - 2ab\cos C; \quad \cos C = \frac{a^2 + b^2 - c^2}{2ab}$$
- **Area of a triangle**:
  $$A = \frac{1}{2}ab\sin C$$
- **Length of an arc**:
  $$l = r\theta, \quad \text{where } r \text{ is the radius, } \theta \text{ is the angle measured in radians}$$
- **Area of a sector**:
  $$A = \frac{1}{2}r^2\theta, \quad \text{where } r \text{ is the radius, } \theta \text{ is the angle measured in radians}$$
- **Not in Formula Booklet (Must Memorize)**:
  - **Area of a circular segment**: $A_{\text{segment}} = A_{\text{sector}} - A_{\text{triangle}} = \frac{1}{2}r^2(\theta - \sin\theta)$ ($\theta$ in radians).
  - **Chord length** subtending angle $\theta$: $c = 2r\sin\left(\frac{\theta}{2}\right)$ or $\sqrt{2r^2(1 - \cos\theta)}$.

#### Question Decoder (`t3-1`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"There are two possible triangles $ABC$ / two possible values of $\hat{C}$"* | **Ambiguous case of the Sine Rule (SSA)**: If $\sin C = k$, the two angles are **$C_1 = \arcsin(k)$** (acute) and **$C_2 = 180^\circ - C_1$** (obtuse). | To find the two possible lengths of the third side $c$, use the third angle $B_1 = 180^\circ - A - C_1$ and $B_2 = 180^\circ - A - C_2$, or set up the Cosine Rule as a **quadratic in $c$**: $a^2 = b^2 + c^2 - 2bc\cos A$! |
| *"Find the angle between the edge $VA$ and the base $ABCD$"* | Drop a perpendicular from $V$ to $M$ on the base; find the angle $\angle VAM$ inside the right-angled triangle $VMA$. | Never use a slant face angle when asked for the angle with the base plane! |
| *"Ship $B$ is on a bearing of $135^\circ$ from $A$"* | Draw a North arrow **at $A$** and measure $135^\circ$ clockwise. Use co-interior angles ($180^\circ - \theta$) between parallel North lines at $A$ and $B$. | Back-bearing from $B$ to $A$ differs by $180^\circ$. |
| *"Find the area of the shaded region between two overlapping circles / a chord and an arc"* | Split into **Sectors minus Triangles** (or Segment area $\frac{1}{2}r^2(\theta - \sin\theta)$). | Check that your GDC is in **RADIANS** mode whenever using $\frac{1}{2}r^2\theta$! |

#### Common Student Mistakes (`callout--mistake`)
1. **Using degrees in $l = r\theta$ or $A = \frac{1}{2}r^2\theta$**: The booklet formulas $l = r\theta$ and $A = \frac{1}{2}r^2\theta$ work **only when $\theta$ is in radians**.
2. **Missing the obtuse angle in the Sine Rule**: $\arcsin$ on a GDC only returns the acute angle $C_1 \in [0, 90^\circ]$. In an $\text{SSA}$ triangle where the side opposite the given angle is shorter than the adjacent given side ($a < b$), always check whether $180^\circ - C_1 + A < 180^\circ$. Conversely, the Cosine Rule $\arccos$ automatically distinguishes acute ($\cos C > 0$) vs obtuse ($\cos C < 0$) angles!

---

### Page `t3-2`: The Unit Circle, Trigonometric Identities and Periodic Models (SL 3.5–3.8 + AHL 3.9–3.11)

#### Official Syllabus Scope (Paraphrased)
- **SL 3.5 The unit circle and exact trigonometric ratios**: Definitions of $\cos\theta$, $\sin\theta$ as $(x, y)$ coordinates on the unit circle, and $\tan\theta = \frac{\sin\theta}{\cos\theta}$ as the gradient of $OP$; exact values of $\sin, \cos, \tan$ for $0, \frac{\pi}{6}, \frac{\pi}{4}, \frac{\pi}{3}, \frac{\pi}{2}$ and their multiples in all four quadrants; supplementary/complementary symmetry identities.
- **SL 3.6 The Pythagorean identity and double-angle identities**: $\cos^2\theta + \sin^2\theta = 1$; double-angle identities for $\sin 2\theta$ and $\cos 2\theta$.
- **SL 3.7 Circular functions, transformations and periodic models**: Graphs of $\sin x, \cos x, \tan x$; composite sinusoidal models $f(x) = a\sin(b(x + c)) + d$ or $a\cos(b(x + c)) + d$; amplitude $|a|$, period $\frac{2\pi}{b}$ (or $\frac{360^\circ}{b}$), principal axis $y = d$, phase shift.
- **SL 3.8 Solving trigonometric equations in a finite interval**: Analytical and graphical solution of trig equations, including linear, quadratic, and double-angle equations, and changing the interval from $x \in [0, 2\pi]$ to $bx + c \in [c, 2b\pi + c]$.
- **AHL 3.9 Reciprocal trigonometric ratios and Pythagorean identities**: Definitions and graphs of $\sec\theta = \frac{1}{\cos\theta}$, $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, and $\cot\theta = \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}$; identities $1 + \tan^2\theta = \sec^2\theta$ and $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.
- **AHL 3.10 Compound angle identities and $\tan 2\theta$**: $\sin(A \pm B)$, $\cos(A \pm B)$, $\tan(A \pm B)$, and $\tan 2\theta$.
- **AHL 3.11 Symmetry properties and inverse trigonometric functions**: Restricted domains and ranges of $\arcsin x$, $\arccos x$, and $\arctan x$ so that they are one-to-one functions, and their graphs.

#### Exact IB Formula Booklet Formulas (Section 3.6, 3.9, 3.10)
- **Trigonometric identities (SL 3.6)**:
  $$\tan\theta = \frac{\sin\theta}{\cos\theta}$$
  $$\cos^2\theta + \sin^2\theta = 1$$
- **Double angle identities (SL 3.6)**:
  $$\sin 2\theta = 2\sin\theta\cos\theta$$
  $$\cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$$
- **Reciprocal trigonometric identities (AHL 3.9)**:
  $$\sec\theta = \frac{1}{\cos\theta}$$
  $$\operatorname{cosec}\theta = \frac{1}{\sin\theta}$$
  $$\cot\theta = \frac{1}{\tan\theta}$$
- **Pythagorean identities (AHL 3.9)**:
  $$1 + \tan^2\theta = \sec^2\theta$$
  $$1 + \cot^2\theta = \operatorname{cosec}^2\theta$$
- **Compound angle identities (AHL 3.10)**:
  $$\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$$
  $$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$$
  $$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$$
- **Double angle identity for $\tan$ (AHL 3.10)**:
  $$\tan 2\theta = \frac{2\tan\theta}{1 - \tan^2\theta}$$
- **Not in Formula Booklet (Must Memorize)**:
  - **Exact values table** for $\theta \in \left\{0, \frac{\pi}{6}, \frac{\pi}{4}, \frac{\pi}{3}, \frac{\pi}{2}\right\}$: $\sin\theta = \frac{\sqrt{0}}{2}, \frac{\sqrt{1}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, \frac{\sqrt{4}}{2}$.
  - **Sinusoidal model formulas** for $f(t) = a\sin(b(t - c)) + d$:
    $$|a| = \frac{y_{\max} - y_{\min}}{2}, \quad d = \frac{y_{\max} + y_{\min}}{2}, \quad \text{Period } T = \frac{2\pi}{b} \implies b = \frac{2\pi}{T}$$
  - **Principal domains and ranges of inverse trig functions (AHL 3.11)**:
    - $y = \arcsin x$: Domain $[-1, 1]$, Range $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$
    - $y = \arccos x$: Domain $[-1, 1]$, Range $[0, \pi]$
    - $y = \arctan x$: Domain $\mathbb{R}$, Range $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$
    - Key identity: $\arcsin x + \arccos x = \frac{\pi}{2}$ for all $x \in [-1, 1]$.

#### Question Decoder (`t3-2`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Given $\sin\theta = -\frac{3}{5}$ and $\pi < \theta < \frac{3\pi}{2}$, find $\cos 2\theta$ and $\tan 2\theta$"* | Draw a right triangle in the correct quadrant (or use $\cos^2\theta = 1 - \sin^2\theta$), assign the **correct sign for that quadrant**, then substitute into double-angle formulas. | Never try to evaluate $\theta$ itself on Paper 1! In Quadrant III, $\cos\theta < 0$ and $\tan\theta > 0$. |
| *"A ferris wheel / tide height has maximum $M$ at $t = t_1$ and minimum $m$ at $t = t_2$"* | **Half-period is $t_2 - t_1 \implies T = 2|t_2 - t_1|$**! Then $b = \frac{2\pi}{T}$, $a = \frac{M - m}{2}$, $d = \frac{M + m}{2}$. | If using $+a\cos(b(t - c)) + d$, the phase shift $c$ is simply $t_{\max}$ (the time of the first maximum)! |
| *"Solve $\sin(2x - \frac{\pi}{3}) = \frac{1}{2}$ for $0 \le x \le 2\pi$"* | **Transform the domain first**: let $u = 2x - \frac{\pi}{3} \in \left[-\frac{\pi}{3}, 4\pi - \frac{\pi}{3}\right]$. Find all solutions for $u$ in that interval before dividing by 2! | Dividing by 2 too early causes students to miss half the solutions in $[0, 2\pi]$. |
| *"Evaluate $\cos(\arcsin x)$ or $\tan(2\arccos x)$ algebraically"* | Let $\theta = \arcsin x \implies \sin\theta = x$ on a right triangle with hypotenuse 1, opposite $x$, adjacent $\sqrt{1 - x^2}$. | Gives $\cos(\arcsin x) = \sqrt{1 - x^2}$ immediately. |
| *"Solve $\arctan\left(\frac{1}{2}\right) + \arctan\left(\frac{1}{3}\right)$"* | Take $\tan$ of the sum using the compound-angle formula $\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}$, and check the quadrant of $A + B$. | $\tan(A+B) = \frac{1/2 + 1/3}{1 - 1/6} = 1$, and since $0 < A, B < \frac{\pi}{4}$, $A + B = \frac{\pi}{4}$. |

#### Common Student Mistakes (`callout--mistake`)
1. **Dividing both sides of a trig equation by $\sin x$ or $\cos x$**: In $\sin 2x = \sin x \implies 2\sin x\cos x = \sin x$, dividing by $\sin x$ loses all roots where $\sin x = 0$! Always move to one side and **factor**: $\sin x(2\cos x - 1) = 0$.
2. **Confusing half-period with full period in word problems**: The time from high tide to low tide is **half** a period ($\frac{T}{2}$), not a full period $T$.
3. **Thinking $\arccos(-x) = -\arccos(x)$**: Because the range of $\arccos$ is $[0, \pi]$, $\arccos(-x) = \pi - \arccos(x)$ (for example, $\arccos\left(-\frac{1}{2}\right) = \frac{2\pi}{3}$, not $-\frac{\pi}{3}$).

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Sum-to-product and product-to-sum (factor) formulas**: Formulas like $\sin A + \sin B = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$ and $\tan\left(\frac{\theta}{2}\right) = t$ ($t$-formulae) are **not** required to be memorized (if needed in Paper 3, they are given in the question stem to be proved via $\sin(A\pm B)$).
- **Harmonic form $R\sin(\theta + \alpha)$**: Not in the 2021–2028 AA HL syllabus (unless guided step-by-step by expanding $R\sin(\theta+\alpha)$).

---

### Page `t3-3`: Vectors, Lines and Planes in 3D Space (AHL 3.12–3.18)

#### Official Syllabus Scope (Paraphrased)
- **AHL 3.12 Concept of a vector and algebraic/geometric operations**: Position vectors $\overrightarrow{OA} = \mathbf{a}$ and displacement vectors $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$; column vector and $\mathbf{i}, \mathbf{j}, \mathbf{k}$ component forms; magnitude $|\mathbf{v}|$; unit vectors $\hat{\mathbf{v}} = \frac{\mathbf{v}}{|\mathbf{v}|}$; collinearity and parallel vectors ($\mathbf{v} = k\mathbf{w}$); rescaling vectors to represent velocity with given speed.
- **AHL 3.13 Scalar (dot) product of two vectors**: Algebraic and geometric definitions $\mathbf{v}\cdot\mathbf{w} = |\mathbf{v}||\mathbf{w}|\cos\theta$; angle between two vectors; perpendicularity condition $\mathbf{v}\cdot\mathbf{w} = 0$ (for non-zero vectors); properties $\mathbf{v}\cdot\mathbf{v} = |\mathbf{v}|^2$.
- **AHL 3.14 Vector equation of a line in 2D and 3D**: Vector form $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$, parametric form $x = x_0 + \lambda l, y = y_0 + \lambda m, z = z_0 + \lambda n$, and Cartesian form $\frac{x - x_0}{l} = \frac{y - y_0}{m} = \frac{z - z_0}{n}$; kinematic applications $\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{v}$ (constant velocity motion, closest approach).
- **AHL 3.15 Coincident, parallel, intersecting and skew lines**: Classifying a pair of 3D lines; finding the acute angle between two lines using their direction vectors; finding the point of intersection or proving two lines are skew; shortest distance from a point to a line (and between skew lines).
- **AHL 3.16 Vector (cross) product of two vectors**: Determinant / component definition of $\mathbf{v}\times\mathbf{w}$ and geometric magnitude $|\mathbf{v}\times\mathbf{w}| = |\mathbf{v}||\mathbf{w}|\sin\theta$; direction perpendicular to both $\mathbf{v}$ and $\mathbf{w}$ (right-hand rule); area of a triangle $\frac{1}{2}|\mathbf{v}\times\mathbf{w}|$ and area of a parallelogram $|\mathbf{v}\times\mathbf{w}|$; anti-commutativity $\mathbf{w}\times\mathbf{v} = -(\mathbf{v}\times\mathbf{w})$ and parallel test $\mathbf{v}\times\mathbf{w} = \mathbf{0}$.
- **AHL 3.17 Vector and Cartesian equations of a plane**: Vector parametric form $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$; normal form $\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n}$; Cartesian form $ax + by + cz = d$ where $\mathbf{n} = \begin{pmatrix}a\\b\\c\end{pmatrix}$ is the normal vector.
- **AHL 3.18 Intersections and angles involving lines and planes**: Intersection of a line and a plane; intersection of two or three planes (linking back to $3\times 3$ systems in AHL 1.16); angle between a line and a plane (using $\sin\phi = \frac{|\mathbf{b}\cdot\mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}$); angle between two planes (angle between their normals $\mathbf{n}_1$ and $\mathbf{n}_2$); shortest distance from a point to a plane (via foot of perpendicular).

#### Exact IB Formula Booklet Formulas (Section 3.12, 3.13, 3.14, 3.16, 3.17)
- **Magnitude of a vector**:
  $$|\mathbf{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$
- **Scalar product**:
  $$\mathbf{v}\cdot\mathbf{w} = v_1 w_1 + v_2 w_2 + v_3 w_3$$
  $$\mathbf{v}\cdot\mathbf{w} = |\mathbf{v}||\mathbf{w}|\cos\theta, \quad \text{where } \theta \text{ is the angle between } \mathbf{v} \text{ and } \mathbf{w}$$
- **Angle between two vectors**:
  $$\cos\theta = \frac{v_1 w_1 + v_2 w_2 + v_3 w_3}{|\mathbf{v}||\mathbf{w}|}$$
- **Vector equation of a line**:
  $$\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$$
- **Parametric form of the equation of a line**:
  $$x = x_0 + \lambda l, \quad y = y_0 + \lambda m, \quad z = z_0 + \lambda n$$
- **Cartesian equations of a line**:
  $$\frac{x - x_0}{l} = \frac{y - y_0}{m} = \frac{z - z_0}{n}$$
- **Vector product**:
  $$\mathbf{v}\times\mathbf{w} = \begin{pmatrix} v_2 w_3 - v_3 w_2 \\ v_3 w_1 - v_1 w_3 \\ v_1 w_2 - v_2 w_1 \end{pmatrix}$$
  $$|\mathbf{v}\times\mathbf{w}| = |\mathbf{v}||\mathbf{w}|\sin\theta, \quad \text{where } \theta \text{ is the angle between } \mathbf{v} \text{ and } \mathbf{w}$$
- **Area of a parallelogram**:
  $$A = |\mathbf{v}\times\mathbf{w}| \quad \text{where } \mathbf{v} \text{ and } \mathbf{w} \text{ form two adjacent sides of a parallelogram}$$
- **Vector equation of a plane**:
  $$\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$$
- **Equation of a plane (using the normal vector)**:
  $$\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n}$$
- **Cartesian equation of a plane**:
  $$ax + by + cz = d$$

#### Question Decoder (`t3-3`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Object $A$ moves with speed $s$ in the direction of vector $\mathbf{d}$"* | Velocity vector is **$\mathbf{v} = s\hat{\mathbf{d}} = \frac{s}{|\mathbf{d}|}\mathbf{d}$** (do NOT just use $\mathbf{d}$ as velocity unless $|\mathbf{d}| = s$!). | Position at time $t$: $\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{v}$. |
| *"Show that the two lines $L_1$ and $L_2$ are skew"* | 1. Show direction vectors are **not scalar multiples** ($\mathbf{b}_1 \neq k\mathbf{b}_2$, so not parallel).<br>2. Equate $x, y$ coordinates to solve for parameters $\lambda, \mu$, and show they **fail to satisfy the $z$-equation** (so no intersection). | **Crucial trap**: Even if two objects have paths that intersect at $P$, the objects **collide** only if they reach $P$ at the **same time $t_1 = t_2$**! |
| *"Find the shortest distance from point $P$ to line $L: \mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$"* | **Method 1 (Dot Product / Foot of $\perp$, best if coordinates of foot $F$ are also needed)**: Write $\overrightarrow{PF} = \mathbf{a} + \lambda\mathbf{b} - \mathbf{p}$, solve $\overrightarrow{PF}\cdot\mathbf{b} = 0$ for $\lambda$, then find $|\overrightarrow{PF}|$.<br>**Method 2 (Cross Product area)**: $d = \frac{|\overrightarrow{AP}\times\mathbf{b}|}{|\mathbf{b}|}$. | Method 1 also gives the exact coordinates of the foot $F$ and the reflection $P'$ of $P$ in $L$ via $\overrightarrow{OP'} = \overrightarrow{OP} + 2\overrightarrow{PF}$. |
| *"Find the Cartesian equation of the plane containing points $A, B, C$"* | Form two in-plane vectors $\overrightarrow{AB}$ and $\overrightarrow{AC}$, compute normal **$\mathbf{n} = \overrightarrow{AB}\times\overrightarrow{AC}$**, then plug into $\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n}$. | Divide out any common factor of $\mathbf{n}$ to keep numbers small! |
| *"Find the acute angle $\phi$ between line $L$ (direction $\mathbf{b}$) and plane $\Pi$ (normal $\mathbf{n}$)"* | The angle between $\mathbf{b}$ and $\mathbf{n}$ is $90^\circ - \phi$, so **$\sin\phi = \frac{|\mathbf{b}\cdot\mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}$**! | Using $\cos$ instead of $\sin$ finds the angle with the **normal**, not the plane! |
| *"Find the vector equation of the line of intersection of two planes"* | Solve the $2 \times 3$ system by setting $z = \lambda$ (or find one common point $A$ and take direction vector **$\mathbf{d} = \mathbf{n}_1\times\mathbf{n}_2$**). | Matches the parametric infinite-solutions case of AHL 1.16! |

#### Common Student Mistakes (`callout--mistake`)
1. **Using the same parameter letter $\lambda$ for two different lines**: When equating two lines to find their intersection, if both lines are written with $\lambda$, equating $\mathbf{a}_1 + \lambda\mathbf{b}_1 = \mathbf{a}_2 + \lambda\mathbf{b}_2$ falsely assumes the intersection occurs at the same parameter value! Always rename the second line's parameter to $\mu$.
2. **Sign error on the middle ($y$ / $\mathbf{j}$) component of $\mathbf{v}\times\mathbf{w}$**: In $3\times 3$ cofactor expansion, the $\mathbf{j}$ term has a minus sign: $-(v_1 w_3 - v_3 w_1) = v_3 w_1 - v_1 w_3$.
3. **Using $\overrightarrow{AB}\cdot\overrightarrow{BC}$ with tail-to-head vectors to find interior angle $\angle ABC$**: Angle $\angle ABC$ is the angle between vectors radiating **out from vertex $B$**, namely **$\overrightarrow{BA}$ and $\overrightarrow{BC}$** (not $\overrightarrow{AB}$ and $\overrightarrow{BC}$, which gives $180^\circ - \angle ABC$).

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Scalar triple product $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$ for volume of a parallelepiped / tetrahedron**: Not in the 2021–2028 AA HL Formula Booklet or syllabus (unless defined in a Paper 3 question).
- **Vector triple product $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$**: Outside the IB syllabus.

---

## 4. Topic 4: Statistics and Probability (27 SL hrs + 9 AHL hrs = 36 HL hrs)

### Map to Site Topic Pages (`t4-1` to `t4-2`)

| Page ID | Page Title | Syllabus Subtopics Covered | Level |
|---|---|---|---|
| `t4-1` | Descriptive statistics, correlation and regression | SL 4.1, 4.2, 4.3, 4.4, 4.10 | SL+HL |
| `t4-2` | Probability, distributions, Bayes and continuous RVs | SL 4.5, 4.6, 4.7, 4.8, 4.9, 4.11, 4.12 + AHL 4.13, 4.14 | SL+HL |

---

### Page `t4-1`: Descriptive Statistics, Correlation and Regression (SL 4.1–4.4, 4.10)

#### Official Syllabus Scope (Paraphrased)
- **SL 4.1 Concepts of population, sample, random sample, discrete and continuous data**: Reliability of data; sampling bias and outliers; sampling techniques (simple random, convenience, systematic, quota, stratified).
- **SL 4.2 Presentation of data**: Frequency tables and histograms (equal class intervals); cumulative frequency tables and cumulative frequency graphs (ogives) to estimate median, quartiles, percentiles, and interquartile range ($\text{IQR}$); box-and-whisker plots; formal outlier test ($< Q_1 - 1.5\times\text{IQR}$ or $> Q_3 + 1.5\times\text{IQR}$).
- **SL 4.3 Measures of central tendency and dispersion**: Mean $\bar{x}$, median, mode; estimate of mean from grouped data using mid-interval values; range, interquartile range $\text{IQR} = Q_3 - Q_1$, variance $\sigma^2$, and standard deviation $\sigma$ (population standard deviation $\sigma_n$ on GDC); effect of linear coding $y = ax + b$ on mean and standard deviation ($\bar{y} = a\bar{x} + b$, $\sigma_y = |a|\sigma_x$).
- **SL 4.4 Linear correlation of bivariate data**: Scatter diagrams; Pearson's product-moment correlation coefficient $r$ ($-1 \le r \le 1$); equation of the regression line of **$y$ on $x$** ($y - \bar{y} = m(x - \bar{x})$) for predicting $y$ from $x$; interpolation vs extrapolation; point $(\bar{x}, \bar{y})$ always lies on the regression line.
- **SL 4.10 Regression line of $x$ on $y$**: Equation of the regression line of **$x$ on $y$** ($x = cy + d$) for estimating $x$ from a given value of $y$. *(Note: Examinable in full in May 2028; retiring in May 2029).*

#### Exact IB Formula Booklet Formulas (Section 4.2, 4.3)
- **Interquartile range**:
  $$\text{IQR} = Q_3 - Q_1$$
- **Mean ($\bar{x}$) of a set of data**:
  $$\bar{x} = \frac{\sum_{i=1}^{k} f_i x_i}{n}, \quad \text{where } n = \sum_{i=1}^{k} f_i$$
- **Not in Formula Booklet (Must Memorize)**:
  - **Outlier boundaries**: Lower fence $= Q_1 - 1.5\times\text{IQR}$; Upper fence $= Q_3 + 1.5\times\text{IQR}$.
  - **Linear coding ($Y = aX + b$)**:
    $$\bar{y} = a\bar{x} + b, \quad \sigma_y = |a|\sigma_x, \quad \text{IQR}_y = |a|\text{IQR}_x, \quad \operatorname{Var}(Y) = a^2\operatorname{Var}(X)$$
    *(Adding a constant $b$ shifts location measures like mean/median/quartiles by $+b$, but has **zero effect** on spread measures like $\sigma$, $\operatorname{Var}$, $\text{IQR}$, or range!)*
  - **Both regression lines ($y$ on $x$ and $x$ on $y$) intersect at the mean point $(\bar{x}, \bar{y})$**.

#### Question Decoder (`t4-1`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Estimate $y$ when $x = x_0$"* vs *"Estimate $x$ when $y = y_0$"* | - **Given $x$, estimate $y$**: Use the **$y$ on $x$** regression line ($y = ax + b$).<br>- **Given $y$, estimate $x$**: Use the **$x$ on $y$** regression line ($x = cy + d$)! | **Never** plug $y = y_0$ into the $y$ on $x$ line and solve for $x$ (unless $r = \pm 1$). On GDC, swap `Xlist` and `Ylist` in `LinReg(ax+b)` to get the $x$ on $y$ line! |
| *"Comment on the validity / reliability of this estimate"* | Check two things:<br>1. **Strength of correlation** ($|r|$ close to 1).<br>2. **Interpolation vs Extrapolation** (whether the input value lies inside or outside the observed data range $[x_{\min}, x_{\max}]$). | If outside the data range, state: *"Unreliable because it is **extrapolation** outside the range of the given data."* |
| *"Every data value is multiplied by $-2$ and increased by $5$"* | Apply linear coding: $\text{New Mean} = -2\bar{x} + 5$, **$\text{New SD} = |-2|\sigma_x = 2\sigma_x$** (always positive!), $\text{New Variance} = (-2)^2 \sigma_x^2 = 4\sigma_x^2$. | Often tested on Paper 1! Also note that if $y = ax + b$ with $a < 0$, the correlation coefficient flips sign ($r \to -r$). |

#### Common Student Mistakes (`callout--mistake`)
1. **Using $s_x$ instead of $\sigma_x$ on GDC**: In IB AA (both SL and HL), unless unbiased estimation is explicitly asked (which is in AI, not AA), the standard deviation of a dataset is the population formula $\sigma_x$ (`σx` on TI / Casio), **not** `sx`.
2. **Negative standard deviation from negative coding**: When $Y = 100 - 3X$, students write $\sigma_Y = -3\sigma_X$ instead of $|-3|\sigma_X = 3\sigma_X$. Standard deviation and variance are **never negative**.
3. **Rearranging $y = ax + b$ to predict $x$ from $y$**: This is the single most common Topic 4 trap in IB AA. Always check which variable is given and which is being predicted!

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Hypothesis testing ($\chi^2$ test of independence, $\chi^2$ goodness-of-fit, $t$-tests, $z$-tests), Spearman's rank correlation $r_s$, Poisson distribution, and unbiased sample variance $s_{n-1}^2$**: All of these belong to **IB Math AI**, **not** IB Math AA! Do not study $\chi^2$ tables or $t$-tests for AA HL.

---

### Page `t4-2`: Probability, Distributions, Bayes' Theorem and Continuous Random Variables (SL 4.5–4.9, 4.11–4.12 + AHL 4.13–4.14)

#### Official Syllabus Scope (Paraphrased)
- **SL 4.5 Concepts of trial, outcome, equally likely outcomes, relative frequency and sample space**: $P(A) = \frac{n(A)}{n(U)}$; complementary events $P(A') = 1 - P(A)$; expected number of occurrences $n \cdot P(A)$.
- **SL 4.6 Combined events, conditional probability and independent events**: Venn diagrams, tree diagrams, sample space diagrams, and two-way tables; addition rule $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; mutually exclusive events ($P(A \cap B) = 0$); conditional probability $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$; independent events $P(A \cap B) = P(A)P(B)$.
- **SL 4.7 Discrete random variables and their probability distributions**: Condition $\sum P(X = x) = 1$; expected value (mean) $E(X) = \mu = \sum x P(X = x)$; concept of a **fair game** ($E(\text{net gain}) = 0$).
- **SL 4.8 Binomial distribution $X \sim \text{B}(n, p)$**: Conditions for a binomial model ($n$ independent trials, two outcomes success/failure, constant probability $p$ of success); mean $E(X) = np$ and variance $\operatorname{Var}(X) = np(1 - p)$; calculating binomial probabilities via formula (P1) and GDC `binomPdf` / `binomCdf` (P2).
- **SL 4.9 Normal distribution $X \sim \text{N}(\mu, \sigma^2)$ and curves**: Properties of the bell curve; probabilities via GDC `normalcdf`; inverse normal `invNorm` when probability is given.
- **SL 4.11 Conditional probability in context**: Reversing tree branches and combining Binomial/Normal probabilities with conditional probability $P(A \mid B)$.
- **SL 4.12 Standardization of normal variables ($z$-values)**: $Z = \frac{X - \mu}{\sigma} \sim \text{N}(0, 1)$; using $z$-scores to find unknown mean $\mu$, unknown standard deviation $\sigma$, or both (via simultaneous linear equations).
- **AHL 4.13 Bayes' theorem**: Use of Bayes' theorem for a **maximum of three events** $\{B_1, B_2, B_3\}$ partitioning the sample space.
- **AHL 4.14 Variance of a discrete random variable, continuous random variables and linear transformations**:
  - Variance $\operatorname{Var}(X) = E((X - \mu)^2) = E(X^2) - [E(X)]^2$ for discrete and continuous random variables.
  - Continuous random variables and probability density functions (PDF) $f(x)$: conditions $f(x) \ge 0$ and $\int_{-\infty}^{\infty} f(x)\,dx = 1$; probabilities $P(a \le X \le b) = \int_a^b f(x)\,dx$; mode (value of $x$ where $f(x)$ is maximum on the domain), median $m$ ($\int_{-\infty}^{m} f(x)\,dx = 0.5$), mean $E(X) = \int_{-\infty}^{\infty} x f(x)\,dx$, and variance $\operatorname{Var}(X) = \int_{-\infty}^{\infty} x^2 f(x)\,dx - \mu^2$.
  - Linear transformations of a single random variable: $E(aX + b) = aE(X) + b$ and $\operatorname{Var}(aX + b) = a^2\operatorname{Var}(X)$.

#### Exact IB Formula Booklet Formulas (Section 4.5, 4.6, 4.7, 4.8, 4.12, 4.13, 4.14)
- **Probability of an event $A$**:
  $$P(A) = \frac{n(A)}{n(U)}$$
- **Complementary events**:
  $$P(A) + P(A') = 1$$
- **Combined events**:
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
- **Mutually exclusive events**:
  $$P(A \cup B) = P(A) + P(B)$$
- **Conditional probability**:
  $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
- **Independent events**:
  $$P(A \cap B) = P(A)P(B)$$
- **Expected value of a discrete random variable $X$**:
  $$E(X) = \sum x P(X = x)$$
- **Binomial distribution $X \sim \text{B}(n, p)$**:
  $$\text{Mean } E(X) = np; \quad \text{Variance } \operatorname{Var}(X) = np(1 - p)$$
- **Standardized normal variable**:
  $$z = \frac{x - \mu}{\sigma}$$
- **Bayes' theorem (AHL 4.13)**:
  $$P(B_i \mid A) = \frac{P(B_i)P(A \mid B_i)}{P(B_1)P(A \mid B_1) + P(B_2)P(A \mid B_2) + P(B_3)P(A \mid B_3)}$$
- **Variance of a discrete random variable $X$ (AHL 4.14)**:
  $$\operatorname{Var}(X) = \sum (x - \mu)^2 P(X = x) = \sum x^2 P(X = x) - \mu^2$$
- **Continuous random variable $X$ (AHL 4.14)**:
  $$E(X) = \mu = \int_{-\infty}^{\infty} x f(x)\,dx$$
  $$\operatorname{Var}(X) = \int_{-\infty}^{\infty} (x - \mu)^2 f(x)\,dx = \int_{-\infty}^{\infty} x^2 f(x)\,dx - \mu^2$$
- **Linear transformation of a single random variable (AHL 4.14)**:
  $$E(aX + b) = aE(X) + b$$
  $$\operatorname{Var}(aX + b) = a^2\operatorname{Var}(X)$$
- **Not in Formula Booklet (Must Memorize)**:
  - Individual Binomial probability formula (needed on **Paper 1**!):
    $$P(X = r) = \binom{n}{r} p^r (1 - p)^{n - r}$$
  - Median $m$ of a continuous RV: $\int_a^m f(x)\,dx = 0.5$ (and $Q_1, Q_3$ integrate to $0.25, 0.75$).
  - Mode of a continuous RV: the value of $x$ in the domain where $f(x)$ attains its **global maximum** (check $f'(x) = 0$ **and** domain endpoints!).

#### Question Decoder (`t4-2`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Paper 1 (No-GDC) vs Paper 2 (GDC) Method |
|---|---|---|
| *"Given that... find the probability that..."* | **Conditional probability $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$** (or **Bayes' Theorem** if conditioning on a second-stage outcome to find a first-stage branch). | Always write the fraction $\frac{P(A \cap B)}{P(B)}$ explicitly—even inside a Normal or Binomial question (e.g., $P(X > 12 \mid X > 10) = \frac{P(X > 12)}{P(X > 10)}$)! |
| *"Find the least number of trials $n$ such that the probability of at least one success exceeds $0.99$"* | Use the **complement**: $P(X \ge 1) = 1 - P(X = 0) = 1 - (1 - p)^n > 0.99 \implies (1 - p)^n < 0.01$. | Solve via logs: $n > \frac{\ln(0.01)}{\ln(1-p)}$ and round **up** to the next integer (or use a GDC table). |
| *"A normal distribution has $P(X < a) = p_1$ and $P(X > b) = p_2$. Find $\mu$ and $\sigma$"* | **Standardize to $Z \sim \text{N}(0, 1)$**! Use `invNorm` on the **left-tail** probabilities $p_1$ and $(1 - p_2)$ to get $z_1, z_2$. | Set up simultaneous linear equations: $a - \mu = z_1 \sigma$ and $b - \mu = z_2 \sigma$, then solve. |
| *"Two stage distribution: pick 1 object (Normal), then out of 10 independent objects, find the probability that at least 3 satisfy..."* | **Normal $\to$ Binomial chain**! Step 1: Find $p = P(X > k)$ from the Normal distribution (keep 5–6 s.f.!). Step 2: Let $Y \sim \text{B}(10, p)$ and find $P(Y \ge 3) = 1 - P(Y \le 2)$. | Classic Paper 2 Section B multi-part transition! Never round the intermediate probability $p$ to 3 s.f. before feeding it into `binomCdf`. |
| *"Show that $f(x)$ is a valid probability density function"* | Verify **two** conditions: 1. $f(x) \ge 0$ for all $x$ in the domain, AND 2. $\int_{-\infty}^{\infty} f(x)\,dx = 1$. | Students often check only the integral $= 1$ and lose the mark for $f(x) \ge 0$. |

#### Common Student Mistakes (`callout--mistake`)
1. **Confusing "Mutually Exclusive" with "Independent"**: For two events with $P(A) > 0, P(B) > 0$, they can **never** be both mutually exclusive and independent! Mutually exclusive means $P(A \cap B) = 0$; independent means $P(A \cap B) = P(A)P(B)$.
2. **Off-by-one error in `binomCdf`**: On TI/Casio GDCs, `binomCdf(n, p, k)` computes $P(X \le k)$. Therefore:
   - $P(X < k) = P(X \le k - 1)$
   - $P(X \ge k) = 1 - P(X \le k - 1)$
   - $P(X > k) = 1 - P(X \le k)$
3. **Feeding a right-tail area into a left-tail `invNorm`**: If $P(X > k) = 0.15$, the area to the **left** of $k$ is $1 - 0.15 = 0.85$, so $z = \text{invNorm}(0.85) \approx +1.0364$ (not $-1.0364$). Always sketch a quick bell curve!
4. **Assuming the mode of a continuous PDF is always where $f'(x) = 0$**: If $f(x)$ is strictly increasing or decreasing on $[a, b]$ (or if an endpoint is higher than an interior stationary point), the mode is at the **endpoint** $a$ or $b$!

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Linear combinations of two independent random variables ($aX + bY$)**: In the 2021–2028 syllabus, linear combinations of **two** independent random variables ($\operatorname{Var}(aX \pm bY) = a^2\operatorname{Var}(X) + b^2\operatorname{Var}(Y)$) are in **IB Math AI HL**, **not** AA HL! AA HL 4.14 covers only linear transformations of a **single** random variable $aX + b$.
- **Cumulative distribution function $F(x)$ notation and probability generating functions (PGFs)**: Formal CDF transformations $F_Y(y) = P(g(X) \le y)$ and PGFs are not required in AA HL.

---

## 5. Topic 5: Calculus (28 SL hrs + 27 AHL hrs = 55 HL hrs)

### Map to Site Topic Pages (`t5-1` to `t5-4`)

| Page ID | Page Title | Syllabus Subtopics Covered | Level |
|---|---|---|---|
| `t5-1` | Differentiation, curve analysis and optimization | SL 5.1, 5.2, 5.3, 5.4, 5.6, 5.7, 5.8 | SL+HL |
| `t5-2` | Integration, areas between curves and kinematics | SL 5.5, 5.9, 5.10, 5.11 | SL+HL |
| `t5-3` | First principles, L'Hôpital, implicit, parts and volumes | AHL 5.12, 5.13, 5.14, 5.15, 5.16, 5.17 | AHL |
| `t5-4` | Differential equations and Maclaurin series | AHL 5.18, 5.19 | AHL |

---

### Page `t5-1`: Differentiation, Curve Analysis and Optimization (SL 5.1–5.4, 5.6–5.8)

#### Official Syllabus Scope (Paraphrased)
- **SL 5.1 Introduction to limits and derivatives**: Informal concept of limit and convergence; derivative interpreted as gradient function and instantaneous rate of change; equations of tangents and normals at a given point $(x_1, y_1)$.
- **SL 5.2 Increasing and decreasing functions**: Graphical interpretation of $f'(x) > 0$, $f'(x) = 0$, $f'(x) < 0$.
- **SL 5.3 Derivative of $x^n$ ($n \in \mathbb{Q}$)**: Power rule and linearity of differentiation.
- **SL 5.4 Tangents and normals**: Finding equations of tangent and normal lines, intersections of tangents/normals with axes or curves, and curves with a given tangent gradient.
- **SL 5.6 Differentiation of transcendentals and chain/product/quotient rules**: Derivatives of $\sin x, \cos x, e^x, \ln x$; composite functions via the chain rule; products via the product rule; quotients via the quotient rule.
- **SL 5.7 The second derivative and graphical relationships between $f, f', f''$**: Concavity (concave-up $f''(x) > 0$, concave-down $f''(x) < 0$); testing for local maxima and minima using the first derivative sign change or the second derivative test; points of inflexion where $f''(x) = 0$ **and** concavity changes ($f''(x)$ changes sign); horizontal (stationary) vs non-horizontal points of inflexion.
- **SL 5.8 Optimization**: Setting up a single-variable objective function using a geometric/contextual constraint; finding local and global extrema (checking domain endpoints when applicable) and justifying the nature of the stationary point.

#### Exact IB Formula Booklet Formulas (Section 5.3, 5.6)
- **Standard derivatives (SL 5.3, 5.6)**:
  - $f(x) = x^n \implies f'(x) = nx^{n-1}$
  - $f(x) = \sin x \implies f'(x) = \cos x$
  - $f(x) = \cos x \implies f'(x) = -\sin x$
  - $f(x) = e^x \implies f'(x) = e^x$
  - $f(x) = \ln x \implies f'(x) = \frac{1}{x}$
- **Chain rule**:
  $$y = g(u), \text{ where } u = f(x) \implies \frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dx}$$
- **Product rule**:
  $$y = uv \implies \frac{dy}{dx} = u\frac{dv}{dx} + v\frac{du}{dx}$$
- **Quotient rule**:
  $$y = \frac{u}{v} \implies \frac{dy}{dx} = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$$

#### Master Graph Translation Table: Connecting $f(x)$, $f'(x)$, and $f''(x)$ (`t5-1`)

| Feature on the Graph of $y = f(x)$ | Condition on $y = f'(x)$ | Condition on $y = f''(x)$ |
|---|---|---|
| $f(x)$ is **increasing** | $f'(x) > 0$ (above the $x$-axis) | — |
| $f(x)$ is **decreasing** | $f'(x) < 0$ (below the $x$-axis) | — |
| **Local maximum** of $f(x)$ | $f'(x) = 0$ and changes sign from **$+$ to $-$** | $f''(x) < 0$ (or $f'$ is decreasing through 0) |
| **Local minimum** of $f(x)$ | $f'(x) = 0$ and changes sign from **$-$ to $+$** | $f''(x) > 0$ (or $f'$ is increasing through 0) |
| $f(x)$ is **concave up** ($\cup$) | $f'(x)$ is **increasing** | $f''(x) > 0$ (above the $x$-axis) |
| $f(x)$ is **concave down** ($\cap$) | $f'(x)$ is **decreasing** | $f''(x) < 0$ (below the $x$-axis) |
| **Point of inflexion** of $f(x)$ | **Local extremum (turning point) of $f'(x)$**! | $f''(x) = 0$ **AND $f''(x)$ changes sign** |
| **Horizontal (stationary) point of inflexion** | $f'(x) = 0$ and $f'(x)$ **touches** the $x$-axis without crossing (same sign on both sides) | $f''(x) = 0$ and $f''(x)$ changes sign |

#### Common Student Mistakes (`callout--mistake`)
1. **Concluding $f''(a) = 0$ is sufficient for a point of inflexion**: For $f(x) = x^4$, $f''(x) = 12x^2 = 0$ at $x = 0$, yet $x = 0$ is a **local minimum**, not a point of inflexion, because $f''(x) \ge 0$ on both sides of $0$! To prove a point of inflexion on an IB exam, you **must** show that $f''(x) = 0$ **and** that $f''(x)$ **changes sign** across $x = a$ (via a sign table for $f''$ or by showing $f'''(a) \neq 0$).
2. **Reading the wrong graph when given a plot of $y = f'(x)$**: When the exam prints the graph of **$y = f'(x)$** and asks for the $x$-coordinates of the points of inflexion of $f$, students pick the $x$-intercepts of $f'$. That is wrong: the $x$-intercepts of $f'$ are the stationary points of $f$, whereas the **turning points (local max/min) of $f'(x)$** are the **points of inflexion of $f(x)$**!
3. **Differentiating $\sin x^\circ$ as $\cos x^\circ$**: All calculus formulas for trig functions require **$x$ in radians**.

---

### Page `t5-2`: Integration, Areas Between Curves and Kinematics (SL 5.5, 5.9–5.11)

#### Official Syllabus Scope (Paraphrased)
- **SL 5.5 Anti-differentiation and definite integrals**: Indefinite integral with constant of integration $+C$; determining $C$ using a boundary / initial condition; definite integrals and area under a curve using GDC.
- **SL 5.9 Kinematics**: Displacement $s(t)$, velocity $v(t) = \frac{ds}{dt}$, acceleration $a(t) = \frac{dv}{dt} = \frac{d^2s}{dt^2}$ (and $a = v\frac{dv}{ds}$ in AHL); net displacement $s(t_2) - s(t_1) = \int_{t_1}^{t_2} v(t)\,dt$ vs **total distance travelled** $d = \int_{t_1}^{t_2} |v(t)|\,dt$.
- **SL 5.10 Indefinite integration and inspection (reverse chain rule) / substitution**: Standard integrals of $x^n$ ($n \neq -1$), $\frac{1}{x}$, $\sin x$, $\cos x$, $e^x$; composites of the form $\int f'(g(x)) g'(x)\,dx$ by reverse chain rule or substitution.
- **SL 5.11 Definite integrals and areas**: Fundamental Theorem of Calculus $\int_a^b f'(x)\,dx = f(b) - f(a)$; properties of definite integrals ($\int_a^b = -\int_b^a$, linearity, additivity $\int_a^c = \int_a^b + \int_b^c$); area between a curve and the $x$-axis (splitting where $f(x) < 0$); area enclosed between two curves $A = \int_a^b |f(x) - g(x)|\,dx$.

#### Exact IB Formula Booklet Formulas (Section 5.5, 5.9, 5.11)
- **Standard integrals (SL 5.5)**:
  $$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$$
  $$\int \frac{1}{x}\,dx = \ln|x| + C$$
  $$\int \sin x\,dx = -\cos x + C$$
  $$\int \cos x\,dx = \sin x + C$$
  $$\int e^x\,dx = e^x + C$$
- **Area of region enclosed by a curve $y = f(x)$ and the $x$-axis**:
  $$A = \int_a^b |y|\,dx$$
- **Kinematics (SL 5.9)**:
  - **Acceleration**:
    $$a = \frac{dv}{dt} = \frac{d^2s}{dt^2} = v\frac{dv}{ds}$$
  - **Distance travelled from $t_1$ to $t_2$**:
    $$d = \int_{t_1}^{t_2} |v(t)|\,dt$$
  - **Displacement from $t_1$ to $t_2$**:
    $$s = \int_{t_1}^{t_2} v(t)\,dt$$

#### Question Decoder — Kinematics Dictionary (`t5-2`)

| Exam Trigger Phrase | Exact Mathematical Translation | Paper 1 vs Paper 2 Method |
|---|---|---|
| *"Initially..."* / *"At the start of the motion"* | Set **$t = 0$** | Evaluate $s(0), v(0)$, or $a(0)$. |
| *"At the origin $O$"* / *"Returns to its starting point"* | Set **$s(t) = 0$** (or $s(t) = s(0)$) | Solve for $t > 0$. |
| *"Momentarily at rest"* / *"Stationary"* / *"Changes direction"* | Set **$v(t) = 0$** (and for changing direction, verify **$v(t)$ changes sign**!) | At maximum/minimum displacement from $O$, $v(t) = 0$. |
| *"Maximum speed"* on $[t_1, t_2]$ | Maximize **$|v(t)|$**, NOT just $v(t)$! | Check where $a(t) = v'(t) = 0$ AND check endpoints $t_1, t_2$; compare the absolute values $|v(t)|$! |
| *"Speeding up"* vs *"Slowing down"* | - **Speeding up**: $v(t)$ and $a(t)$ have the **same sign** ($v(t)\cdot a(t) > 0$).<br>- **Slowing down**: $v(t)$ and $a(t)$ have **opposite signs** ($v(t)\cdot a(t) < 0$). | Having $a(t) < 0$ does **not** mean slowing down if $v(t) < 0$ too! |
| *"Find the total distance travelled between $t = a$ and $t = b$"* | $d = \int_a^b |v(t)|\,dt$ | **Paper 1**: Find roots $c \in (a, b)$ where $v(c) = 0$, split into $\left|\int_a^c v\,dt\right| + \left|\int_c^b v\,dt\right|$.<br>**Paper 2**: Type $\int_a^b \text{abs}(v(t))\,dt$ (`math -> NUM -> abs`) directly into GDC! |

#### Common Student Mistakes (`callout--mistake`)
1. **Confusing net displacement $\int_a^b v(t)\,dt$ with total distance $\int_a^b |v(t)|\,dt$**: If a particle moves forward 5 m and backward 3 m, its displacement is $5 - 3 = 2\text{ m}$, but its total distance travelled is $5 + 3 = 8\text{ m}$.
2. **Thinking negative acceleration ($a < 0$) always means slowing down**: If a particle is moving in the negative direction ($v = -4\text{ m s}^{-1}$) with $a = -2\text{ m s}^{-2}$, its speed is *increasing* (since $v$ and $a$ have the same sign).

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Trapezoidal rule and Simpson's rule**: Numerical integration via the trapezoidal rule belongs to **IB Math AI**, **not** IB Math AA!

---

### Page `t5-3`: First Principles, L'Hôpital's Rule, Implicit Differentiation, Integration by Parts & Volumes (AHL 5.12–5.17)

#### Official Syllabus Scope (Paraphrased)
- **AHL 5.12 Continuity, differentiability and differentiation from first principles**: Informal understanding of continuity and differentiability; finding $f'(x) = \lim_{h\to 0} \frac{f(x+h) - f(x)}{h}$ for polynomials (up to degree 3) and simple functions ($1/x, \sqrt{x}, \sin x, \cos x$); higher derivatives $f^{(n)}(x)$ and induction proofs for $f^{(n)}(x)$.
- **AHL 5.13 Limits and L'Hôpital's rule**: Evaluating limits of the indeterminate forms $\frac{0}{0}$ and $\frac{\infty}{\infty}$ using L'Hôpital's rule (including repeated application and rewriting $0 \cdot \infty$ or $\infty - \infty$ as a fraction first).
- **AHL 5.14 Implicit differentiation and related rates of change**: Differentiating implicit relations $F(x, y) = 0$ with respect to $x$ (applying the chain rule $\frac{d}{dx}[g(y)] = g'(y)\frac{dy}{dx}$ and product rule on $xy$ terms); finding gradients, tangents, normals, and horizontal/vertical tangents on implicit curves; related rates problems $\frac{dy}{dt} = \frac{dy}{dx}\times\frac{dx}{dt}$.
- **AHL 5.15 Derivatives and integrals of reciprocal, exponential, logarithmic and inverse trigonometric functions**: Derivatives of $\tan x, \sec x, \operatorname{cosec} x, \cot x, a^x, \log_a x, \arcsin x, \arccos x, \arctan x$; standard integrals yielding $\ln|\dots|$, $\arcsin\left(\frac{x}{a}\right)$, and $\frac{1}{a}\arctan\left(\frac{x}{a}\right)$.
- **AHL 5.16 Integration by substitution, integration by parts and partial fractions**: Formal integration by substitution (including transforming limits for definite integrals); integration by parts $\int u\frac{dv}{dx}\,dx = uv - \int v\frac{du}{dx}\,dx$ (including repeated parts and cyclic integrals like $\int e^{ax}\sin bx\,dx$); integrating rational functions via partial fractions; integrating $\sin^2 x$ and $\cos^2 x$ using $\cos 2x$ double-angle identities.
- **AHL 5.17 Area and volume of revolution**: Area bounded by a curve and the $y$-axis $A = \int_c^d |x|\,dy$; volume of revolution of a curve or region between two curves rotated $2\pi$ radians ($360^\circ$) about the **$x$-axis** ($V = \pi\int_a^b y^2\,dx$) or about the **$y$-axis** ($V = \pi\int_c^d x^2\,dy$).

#### Exact IB Formula Booklet Formulas (Section 5.12, 5.15, 5.16, 5.17)
- **Derivative of $f(x)$ from first principles (AHL 5.12)**:
  $$y = f(x) \implies \frac{dy}{dx} = f'(x) = \lim_{h\to 0}\left(\frac{f(x + h) - f(x)}{h}\right)$$
- **Standard derivatives (AHL 5.15)**:
  - $f(x) = \tan x \implies f'(x) = \sec^2 x$
  - $f(x) = \sec x \implies f'(x) = \sec x\tan x$
  - $f(x) = \operatorname{cosec} x \implies f'(x) = -\operatorname{cosec} x\cot x$
  - $f(x) = \cot x \implies f'(x) = -\operatorname{cosec}^2 x$
  - $f(x) = a^x \implies f'(x) = a^x(\ln a)$
  - $f(x) = \log_a x \implies f'(x) = \frac{1}{x\ln a}$
  - $f(x) = \arcsin x \implies f'(x) = \frac{1}{\sqrt{1 - x^2}}$
  - $f(x) = \arccos x \implies f'(x) = -\frac{1}{\sqrt{1 - x^2}}$
  - $f(x) = \arctan x \implies f'(x) = \frac{1}{1 + x^2}$
- **Standard integrals (AHL 5.15)**:
  $$\int a^x\,dx = \frac{1}{\ln a}a^x + C$$
  $$\int \frac{1}{a^2 + x^2}\,dx = \frac{1}{a}\arctan\left(\frac{x}{a}\right) + C$$
  $$\int \frac{1}{\sqrt{a^2 - x^2}}\,dx = \arcsin\left(\frac{x}{a}\right) + C, \quad |x| < a$$
- **Integration by parts (AHL 5.16)**:
  $$\int u\frac{dv}{dx}\,dx = uv - \int v\frac{du}{dx}\,dx \quad \text{or} \quad \int u\,dv = uv - \int v\,du$$
- **Area of region enclosed by a curve and the $y$-axis (AHL 5.17)**:
  $$A = \int_a^b |x|\,dy$$
- **Volume of revolution about the $x$ or $y$-axes (AHL 5.17)**:
  $$V = \int_a^b \pi y^2\,dx \quad \text{or} \quad V = \int_a^b \pi x^2\,dy$$

#### Master Integration Classifier (`t5-3` — How to Spot Which Integration Method to Use)

| Integrand Pattern | Method to Use | Key Setup |
|---|---|---|
| Fraction where top is a constant multiple of the derivative of the bottom: $\int \frac{g'(x)}{g(x)}\,dx$ | **Logarithmic inspection** | $= \ln|g(x)| + C$ (e.g., $\int \tan x\,dx = \int \frac{\sin x}{\cos x}\,dx = -\ln|\cos x| + C$). |
| Composite multiplied by inner derivative: $\int f(g(x))\cdot g'(x)\,dx$ | **Substitution $u = g(x)$** (or reverse chain rule) | Replace $g'(x)\,dx = du$ **and transform the limits** $x = a \mapsto u = g(a)$! |
| Quadratic in denominator with **no** $x$ on top: $\int \frac{1}{x^2 + bx + c}\,dx$ or $\int \frac{1}{\sqrt{c - x^2 - bx}}\,dx$ | **Complete the square** + Booklet $\arctan$ or $\arcsin$ | Write $x^2 + bx + c = (x + h)^2 + a^2 \implies \frac{1}{a}\arctan\left(\frac{x+h}{a}\right) + C$. |
| Rational function with factorable quadratic denominator: $\int \frac{px + q}{(x - a)(x - b)}\,dx$ | **Partial fractions** (AHL 1.11) | Split into $\int \left(\frac{A}{x - a} + \frac{B}{x - b}\right)\,dx = A\ln|x - a| + B\ln|x - b| + C$. |
| Product of two unrelated function families (e.g., $x^n \ln x$, $x^n e^x$, $x^n \sin x$, or lone $\ln x, \arcsin x, \arctan x$) | **Integration by parts** (`LIATE` priority for choosing $u$: **L**og, **I**nverse trig, **A**lgebraic, **T**rig, **E**xponential) | For lone $\ln x$ or $\arctan x$, set $u = \ln x$ and $\frac{dv}{dx} = 1$ (so $v = x$). For $e^{ax}\sin bx$, integrate by parts **twice** and solve algebraically for $I$! |
| Even powers of sine or cosine: $\int \sin^2 x\,dx$ or $\int \cos^2 x\,dx$ | **Double-angle identity for $\cos 2x$** | Replace $\sin^2 x = \frac{1 - \cos 2x}{2}$ or $\cos^2 x = \frac{1 + \cos 2x}{2}$. |

#### Common Student Mistakes (`callout--mistake`)
1. **Applying L'Hôpital's rule when the limit is NOT $\frac{0}{0}$ or $\frac{\infty}{\infty}$**: If the denominator approaches $2$ instead of $0$, differentiating top and bottom gives a completely wrong answer! Always check and state *"Form $\frac{0}{0}$, so by L'Hôpital's rule..."* at every single step.
2. **Writing $\pi\int_a^b (f(x) - g(x))^2\,dx$ for the volume between two curves**: The volume of a hollow washer between outer radius $R = f(x)$ and inner radius $r = g(x)$ is **$\pi\int_a^b \left([f(x)]^2 - [g(x)]^2\right)\,dx$** (outer volume minus inner volume), **never** $\pi\int_a^b (f(x) - g(x))^2\,dx$!
3. **Forgetting the product rule on $xy$ in implicit differentiation**: $\frac{d}{dx}(xy) = x\frac{dy}{dx} + y(1)$, not $x\frac{dy}{dx}$ or $\frac{dy}{dx}$. Also remember that the right-hand side $\frac{d}{dx}(\text{constant}) = 0$.

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Cylindrical shell method ($V = 2\pi\int x y\,dx$)**: The cylindrical shell method is **not** in the IB AA HL syllabus. All IB volumes of revolution about the $x$-axis or $y$-axis use the disc/washer formulas $V = \pi\int y^2\,dx$ and $V = \pi\int x^2\,dy$.
- **Hyperbolic functions ($\sinh x, \cosh x, \tanh x$) and $\int \sec x\,dx = \ln|\sec x + \tan x|$**: Neither hyperbolic functions nor the standard formula for $\int \sec x\,dx$ is in the IB AA HL syllabus.
- **Formal $\varepsilon$-$\delta$ limit proofs**: Not in the syllabus.

---

### Page `t5-4`: Differential Equations and Maclaurin Series (AHL 5.18, 5.19)

#### Official Syllabus Scope (Paraphrased)
- **AHL 5.18 First-order differential equations**:
  - Numerical solution of $\frac{dy}{dx} = f(x, y)$ using **Euler's method**: $y_{n+1} = y_n + h \times f(x_n, y_n)$, $x_{n+1} = x_n + h$. *(Note: Examinable in May 2028; retiring in May 2029).*
  - Analytical solution of **separable** differential equations $\frac{dy}{dx} = f(x)g(y) \implies \int \frac{1}{g(y)}\,dy = \int f(x)\,dx$.
  - Analytical solution of **homogeneous** differential equations $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$ using the substitution **$y = vx$** (where $\frac{dy}{dx} = v + x\frac{dv}{dx}$).
  - Analytical solution of **first-order linear** differential equations $\frac{dy}{dx} + P(x)y = Q(x)$ using the **integrating factor** $I(x) = e^{\int P(x)\,dx}$.
- **AHL 5.19 Maclaurin series**:
  - Maclaurin series expansion $f(x) = f(0) + xf'(0) + \frac{x^2}{2!}f''(0) + \dots$ obtained by repeated differentiation, by algebraic substitution/multiplication/integration/differentiation of standard Booklet series ($e^x, \sin x, \cos x, \arctan x, \ln(1+x), (1+x)^p$), and **by implicit differentiation of a differential equation** $\frac{dy}{dx} = f(x, y)$ given $y(0) = y_0$.

#### Exact IB Formula Booklet Formulas (Section 5.18, 5.19)
- **Euler's method (AHL 5.18)**:
  $$y_{n+1} = y_n + h \times f(x_n, y_n); \quad x_{n+1} = x_n + h, \quad \text{where } h \text{ is a constant (step length)}$$
- **Integrating factor for $y' + P(x)y = Q(x)$ (AHL 5.18)**:
  $$e^{\int P(x)\,dx}$$
- **Maclaurin series (AHL 5.19)**:
  $$f(x) = f(0) + x f'(0) + \frac{x^2}{2!}f''(0) + \dots$$
- **Maclaurin series for special functions (AHL 5.19)**:
  $$e^x = 1 + x + \frac{x^2}{2!} + \dots$$
  $$\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$$
  $$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$$
  $$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$$
  $$\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \dots$$

#### Master First-Order Differential Equation Classifier (`t5-4`)

| Step | Question to Ask | Form of the ODE | Exact Method to Apply |
|---|---|---|---|
| **1** | Does the question ask for an **approximate numerical value** with step size $h$? | $\frac{dy}{dx} = f(x, y), \quad y(x_0) = y_0$, step $h$ | **Euler's Method**: Build a table with columns $n, x_n, y_n, f(x_n, y_n), y_{n+1} = y_n + h f(x_n, y_n)$. |
| **2** | Can $\frac{dy}{dx}$ be factored cleanly as a function of $x$ times a function of $y$? | $\frac{dy}{dx} = f(x)g(y)$ | **Separation of Variables**: $\int \frac{1}{g(y)}\,dy = \int f(x)\,dx$. Add $+C$ immediately upon integrating! |
| **3** | Is the equation **linear in $y$ and $\frac{dy}{dx}$** (only first powers of $y$ and $y'$, no $y^2$ or $\sin y$)? | $a(x)\frac{dy}{dx} + b(x)y = c(x)$ | **Integrating Factor**:<br>1. **Divide by $a(x)$ first** to get standard form $\frac{dy}{dx} + P(x)y = Q(x)$.<br>2. Compute $I(x) = e^{\int P(x)\,dx}$ (keep the sign of $P(x)$!).<br>3. Multiply through to get $\frac{d}{dx}[I(x)y] = I(x)Q(x) \implies I(x)y = \int I(x)Q(x)\,dx + C$. |
| **4** | Does every term in $M(x,y)\,dx + N(x,y)\,dy = 0$ have the **same total degree** (or can $\frac{dy}{dx}$ be written in terms of $\frac{y}{x}$)? | $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$ (e.g., $\frac{dy}{dx} = \frac{x^2 + y^2}{xy}$) | **Homogeneous Substitution $y = vx$**:<br>Replace $y = vx$ and $\frac{dy}{dx} = v + x\frac{dv}{dx}$. It automatically transforms into a **separable** ODE in $v$ and $x$: $\int \frac{1}{F(v) - v}\,dv = \int \frac{1}{x}\,dx$. At the end, substitute back $v = \frac{y}{x}$! |

#### Question Decoder — Maclaurin Series (`t5-4`)

| Exam Trigger Phrase | What It Actually Means (Technique) | Why Students Lose Marks |
|---|---|---|
| *"Find the Maclaurin series of $e^{2x}\sin x$ up to the term in $x^3$"* | **Never differentiate $e^{2x}\sin x$ three times** unless told to! Substitute the Booklet series for $e^{2x}$ and $\sin x$ and multiply the polynomials, discarding powers $> x^3$. | Differentiating a product 3 times takes 10 minutes and causes sign slips; multiplying $(1 + 2x + 2x^2 + \frac{4}{3}x^3)(x - \frac{1}{6}x^3)$ takes 45 seconds! |
| *"Given that $\frac{dy}{dx} = x + y^2$ and $y(0) = 1$, find the Maclaurin series for $y$ up to $x^3$"* | Differentiate the ODE **implicitly** with respect to $x$: $y'' = 1 + 2yy'$, then $y''' = 2(y')^2 + 2yy''$. Evaluate $y(0), y'(0), y''(0), y'''(0)$ sequentially and plug into $y(0) + xy'(0) + \frac{x^2}{2!}y''(0) + \frac{x^3}{3!}y'''(0)$. | Classic IB HL Paper 1/2/3 favourite! Students try to solve the non-linear ODE analytically (which is impossible) instead of differentiating the ODE to find $y''(0)$ and $y'''(0)$. |
| *"Use the Maclaurin series of $\dots$ to evaluate $\lim_{x\to 0} \frac{\sin x - x + x^3/6}{x^5}$"* | Replace $\sin x$ with $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$, cancel lower-order terms, and divide by $x^5$. | Avoids applying L'Hôpital's rule 5 times in a row! |

#### Common Student Mistakes (`callout--mistake`)
1. **Forgetting to divide by the leading coefficient of $\frac{dy}{dx}$ before finding the integrating factor**: In $x\frac{dy}{dx} + 2y = x^3$, $P(x)$ is **$\frac{2}{x}$** (after dividing by $x$), NOT $2$! Using $e^{\int 2\,dx} = e^{2x}$ instead of $e^{\int (2/x)\,dx} = x^2$ ruins the entire question.
2. **Adding $+C$ only at the very end after dividing by the integrating factor**: In $x^2 y = \frac{1}{4}x^4 + C$, dividing by $x^2$ gives $y = \frac{1}{4}x^2 + \frac{C}{x^2}$. If a student forgets $+C$ on the integral line and tacks $+C$ onto the final line ($y = \frac{1}{4}x^2 + C$), they lose the accuracy marks and cannot satisfy initial conditions.

#### Explicit IB Scope Boundaries (`callout--scope` — Not Needed for IB)
- **Second-order differential equations ($ay'' + by' + cy = f(x)$), characteristic equations, and Laplace transforms**: Not in the IB AA HL syllabus.
- **Coupled systems of differential equations ($\dot{\mathbf{x}} = A\mathbf{x}$) and phase portraits**: These belong to **IB Math AI HL**, **not** AA HL!
- **Taylor series centred at $x = a \neq 0$ and Lagrange error bound / remainder term**: The 2021–2028 AA HL syllabus includes **Maclaurin series** (centred at $x = 0$) only; general Taylor series around $x = a \neq 0$ and the Lagrange remainder formula (from the old pre-2021 HL Calculus Option) are **not** required.

---

## 6. Paper 3 Investigative Problem-Solving Blueprint (HL Only)

### Structure & Strategy for Paper 3 (1 hour, 55 marks, 2 questions)
1. **The Pedagogical Arc of a Paper 3 Question**:
   - **Parts (a)–(b) (Concrete Cases, ~6–8 marks)**: Compute small concrete examples ($n = 1, 2, 3$ or specific angles/functions) to observe a pattern.
   - **Part (c) (Conjecture / Generalization, ~3–5 marks)**: *"State a conjecture for..."* or *"Write down an expression in terms of $n$..."*
   - **Parts (d)–(e) (Rigorous Proof & Extension, ~10–14 marks)**: Prove the conjecture using **Mathematical Induction**, **De Moivre's Theorem**, **Integration by Parts reduction formulas**, or **Differential Equations / Maclaurin series**.
   - **Part (f) (Synthesis / Limiting Case, ~4–6 marks)**: Apply the proven general result to evaluate an infinite sum, a limit, or an optimization problem.
2. **The Golden Rule of *"Hence"* vs *"Hence, or otherwise"* on Paper 3**:
   - **"Hence"**: You **must** use the result of the immediately preceding part. Using an independent method earns **zero marks**.
   - **If you couldn't prove Part (c) ("Show that...")**: BecausePart (c) prints the target formula (`AG`), you can—and **must**—use that printed formula in Parts (d), (e), and (f) to earn full marks on the rest of the paper!
