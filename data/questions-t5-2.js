/* ==========================================================================
   Analysis Lab — questions-t5-2.js
   Question bank for Topic 5.2: Integration, areas between curves and kinematics
   (SL 5.5, 5.9–5.11)
   ========================================================================== */
(function () {
  'use strict';
  if (!window.S1 || !window.S1.questions) return;

  window.S1.questions.register('t5-2', [
    {
      id: 't5-2-q001',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10',
      type: 'mcq',
      marks: 2,
      stem: '<p>Find <span class="chem">int (6x^2 - 4e^{2x} + cos(3x)) dx</span>.</p>',
      options: [
        '<span class="chem">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>',
        '<span class="chem">2x^3 - 8e^{2x} - 3 sin(3x) + C</span>',
        '<span class="chem">2x^3 - 2e^{2x} - (1/3) sin(3x) + C</span>',
        '<span class="chem">12x - 2e^{2x} + (1/3) sin(3x) + C</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You multiplied by the inner coefficients (2 and 3) instead of dividing by them, and also flipped the sign of the cosine integral.',
        2: 'The integral of cos(kx) is +(1/k) sin(kx) + C, not −(1/k) sin(kx) + C (it is sin(kx) that integrates to −(1/k) cos(kx)).',
        3: 'You differentiated 6x² to get 12x instead of integrating 6x² to get 2x³.'
      },
      hints: [
        'Integrate term by term using <span class="chem">int x^n dx = x^{n+1}/(n+1)</span>, <span class="chem">int e^{ax} dx = (1/a)e^{ax}</span>, and <span class="chem">int cos(ax) dx = (1/a)sin(ax)</span>.',
        'Check the sign of <span class="chem">int cos(3x) dx</span> by differentiating your answer: <span class="chem">d/dx ((1/3) sin(3x)) = +cos(3x)</span>.'
      ],
      solution: '<p>Integrating term by term: <span class="chem">int 6x^2 dx = 6(x^3/3) = 2x^3</span>, <span class="chem">int (-4e^{2x}) dx = -(4/2)e^{2x} = -2e^{2x}</span>, and <span class="chem">int cos(3x) dx = (1/3) sin(3x)</span>. Including the constant of integration gives <span class="chem">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>.</p>'
    },
    {
      id: 't5-2-q002',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5',
      type: 'numeric',
      marks: 4,
      stem: '<p>A curve <span class="chem">y = f(x)</span> (<span class="chem">x &gt; 0</span>) has gradient <span class="chem">f\'(x) = 3x^2 - 4 / x^2</span> and passes through the point <span class="chem">(1, 7)</span>. Find the value of <span class="chem">f(2)</span>.</p>',
      answer: 12,
      hints: [
        'Rewrite <span class="chem">-4 / x^2</span> as <span class="chem">-4x^{-2}</span> before integrating.',
        'Find <span class="chem">f(x) = x^3 + 4/x + C</span>, use <span class="chem">f(1) = 7</span> to solve for <span class="chem">C</span>, then evaluate <span class="chem">f(2)</span>.'
      ],
      solution: '<p>Rewrite <span class="chem">f\'(x) = 3x^2 - 4x^{-2}</span>. Integrating gives <span class="chem">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>. Using <span class="chem">f(1) = 7</span>: <span class="chem">1^3 + 4/1 + C = 7 =&gt; C = 2</span>. Therefore <span class="chem">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span>.</p>'
    },
    {
      id: 't5-2-q003',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10',
      type: 'mcq',
      marks: 2,
      stem: '<p>Find <span class="chem">int (8x / (2x^2 + 3)) dx</span>.</p>',
      options: [
        '<span class="chem">2 ln(2x^2 + 3) + C</span>',
        '<span class="chem">8 ln(2x^2 + 3) + C</span>',
        '<span class="chem">4x^2 / (2x^2 + 3) + C</span>',
        '<span class="chem">2 / (2x^2 + 3)^2 + C</span>'
      ],
      answer: 0,
      misconception: {
        1: 'The derivative of the denominator 2x² + 3 is 4x, not 8x, so 8x = 2(4x) gives 2 ln(2x² + 3), not 8 ln(2x² + 3).',
        2: 'You cannot integrate the numerator 8x while leaving the denominator unchanged.',
        3: 'You used a power-rule form instead of recognizing the g\'(x)/g(x) logarithmic pattern.'
      },
      hints: [
        'Let <span class="chem">u = 2x^2 + 3</span>, so <span class="chem">du = 4x dx</span>.',
        'Rewrite <span class="chem">8x dx</span> as <span class="chem">2(4x dx) = 2 du</span> and integrate <span class="chem">int (2/u) du</span>.'
      ],
      solution: '<p>Let <span class="chem">u = 2x^2 + 3</span>, so <span class="chem">du = 4x dx</span>. Since <span class="chem">8x dx = 2 du</span>, the integral becomes <span class="chem">int (2/u) du = 2 ln|u| + C = 2 ln(2x^2 + 3) + C</span> (since <span class="chem">2x^2 + 3 &gt; 0</span>).</p>'
    },
    {
      id: 't5-2-q004',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'numeric',
      marks: 3,
      stem: '<p>Evaluate the definite integral <span class="chem">int_0^{ln 3} 6e^{2x} dx</span>.</p>',
      answer: 24,
      hints: [
        'An antiderivative of <span class="chem">6e^{2x}</span> is <span class="chem">(6/2)e^{2x} = 3e^{2x}</span>.',
        'Recall that <span class="chem">e^{2 ln 3} = e^{ln(3^2)} = 9</span> and <span class="chem">e^0 = 1</span>.'
      ],
      solution: '<p><span class="chem">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>.</p>'
    },
    {
      id: 't5-2-q005',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>Given that <span class="chem">int_1^5 f(x) dx = 14</span> and <span class="chem">int_3^5 f(x) dx = 6</span>, find the value of <span class="chem">int_1^3 (3f(x) + 2) dx</span>.</p>',
      answer: 28,
      hints: [
        'Use additivity <span class="chem">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span> to find <span class="chem">int_1^3 f(x) dx</span>.',
        'Split the target integral: <span class="chem">3 int_1^3 f(x) dx + int_1^3 2 dx</span>, remembering <span class="chem">int_1^3 2 dx = 2(3 - 1)</span>.'
      ],
      solution: '<p>By additivity, <span class="chem">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>. By linearity, <span class="chem">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span>.</p>'
    },
    {
      id: 't5-2-q006',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'mcq',
      marks: 2,
      stem: '<p>Evaluate <span class="chem">int_1^e ((ln x)^2 / x) dx</span>.</p>',
      options: [
        '<span class="chem">1/3</span>',
        '<span class="chem">1</span>',
        '<span class="chem">1/3 - e^{-1}</span>',
        '<span class="chem">2/e</span>'
      ],
      answer: 0,
      misconception: {
        1: 'You forgot to divide by the new exponent 3 when integrating u² du = u³/3.',
        2: 'After substituting u = ln x, the limits change to u(1) = ln 1 = 0 and u(e) = ln e = 1; there is no e⁻¹ term.',
        3: 'You differentiated (ln x)² to get (2 ln x)/x and evaluated it at x = e, instead of integrating.'
      },
      hints: [
        'Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>.',
        'Change the limits: when <span class="chem">x = 1</span>, <span class="chem">u = ln 1 = 0</span>; when <span class="chem">x = e</span>, <span class="chem">u = ln e = 1</span>.'
      ],
      solution: '<p>Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>. The limits become <span class="chem">u = 0</span> to <span class="chem">u = 1</span>. Thus <span class="chem">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span>.</p>'
    },
    {
      id: 't5-2-q007',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'multi',
      marks: 5,
      stem: '<p>A continuous function <span class="chem">y = f(x)</span> satisfies <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span> and <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>. The geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> is <span class="chem">5</span>, and the geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[2, 5]</span> is <span class="chem">8</span>. Select <strong>all</strong> true statements.</p>',
      options: [
        '<span class="chem">int_0^5 f(x) dx = -3</span>',
        '<span class="chem">int_0^5 |f(x)| dx = 13</span>',
        '<span class="chem">int_5^2 f(x) dx = 8</span>',
        '<span class="chem">int_0^5 f(x) dx = 13</span>'
      ],
      answer: [0, 1, 2],
      misconception: {
        3: '13 is the total geometric area ∫ |f(x)| dx. Because f(x) ≤ 0 on [2, 5], that region contributes −8 to the signed integral ∫ f(x) dx, giving 5 − 8 = −3.'
      },
      hints: [
        'On <span class="chem">[2, 5]</span>, <span class="chem">f(x) &lt;= 0</span>, so <span class="chem">int_2^5 f(x) dx = -8</span>.',
        'Reversing the limits of integration flips the sign: <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx</span>.'
      ],
      solution: '<p>Since <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span>, <span class="chem">int_0^2 f(x) dx = +5</span>. Since <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>, <span class="chem">int_2^5 f(x) dx = -8</span>. Therefore <span class="chem">int_0^5 f(x) dx = 5 + (-8) = -3</span>, <span class="chem">int_0^5 |f(x)| dx = 5 + 8 = 13</span>, and <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx = -(-8) = 8</span>.</p>'
    },
    {
      id: 't5-2-q008',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Find the total geometric area enclosed between the curve <span class="chem">y = 3x^2 - 6x</span>, the <span class="chem">x</span>-axis, and the vertical lines <span class="chem">x = 0</span> and <span class="chem">x = 3</span>.</p>',
      answer: 8,
      hints: [
        'First solve <span class="chem">3x^2 - 6x = 0</span> to see where the curve crosses the <span class="chem">x</span>-axis inside <span class="chem">[0, 3]</span>.',
        'The curve is below the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> and above it on <span class="chem">[2, 3]</span>, so compute <span class="chem">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span>.'
      ],
      solution: '<p>Setting <span class="chem">3x(x - 2) = 0</span> gives <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. On <span class="chem">[0, 2]</span>, <span class="chem">y &lt;= 0</span>: <span class="chem">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span>, giving area <span class="chem">4</span>. On <span class="chem">[2, 3]</span>, <span class="chem">y &gt;= 0</span>: <span class="chem">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>. Total enclosed area <span class="chem">= 4 + 4 = 8</span>.</p>'
    },
    {
      id: 't5-2-q009',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Find the exact area of the finite region enclosed between the parabola <span class="chem">y = 8 - x^2</span> and the line <span class="chem">y = 2x</span>.</p>',
      answer: 36,
      exact: true,
      answerInput: '36',
      hints: [
        'Solve <span class="chem">8 - x^2 = 2x</span> to find the intersection <span class="chem">x</span>-coordinates.',
        'On <span class="chem">[-4, 2]</span>, <span class="chem">8 - x^2 &gt;= 2x</span>, so evaluate <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx</span>.'
      ],
      solution: '<p>Equating the curves: <span class="chem">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span>, so <span class="chem">x = -4</span> and <span class="chem">x = 2</span>. Since <span class="chem">8 - x^2 &gt;= 2x</span> on <span class="chem">[-4, 2]</span>, the area is <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span>.</p>'
    },
    {
      id: 't5-2-q010',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.9',
      type: 'order',
      marks: 4,
      stem: '<p>Arrange the steps in the correct logical order to find the total distance travelled by a particle with velocity <span class="chem">v(t) = 6t - 12</span> <span class="unit">m s-1</span> over the time interval <span class="chem">0 &lt;= t &lt;= 5</span>.</p>',
      options: [
        'Solve <span class="chem">v(t) = 6t - 12 = 0</span> to find the turning time <span class="chem">t = 2</span> <span class="unit">s</span> inside <span class="chem">(0, 5)</span>.',
        'Split the total distance integral at <span class="chem">t = 2</span>: <span class="chem">d = |int_0^2 (6t - 12) dt| + |int_2^5 (6t - 12) dt|</span>.',
        'Evaluate each definite integral using <span class="chem">[3t^2 - 12t]</span> to get <span class="chem">-12</span> on <span class="chem">[0, 2]</span> and <span class="chem">+27</span> on <span class="chem">[2, 5]</span>.',
        'Sum the absolute values of both legs to obtain total distance <span class="chem">d = |-12| + 27 = 39</span> <span class="unit">m</span>.'
      ],
      answer: [0, 1, 2, 3],
      hints: [
        'Before integrating for distance, you must check whether <span class="chem">v(t)</span> changes sign inside <span class="chem">(0, 5)</span>.',
        'Once you split at <span class="chem">t = 2</span>, compute the signed integral of each leg and take absolute values at the end.'
      ],
      solution: '<p>To find total distance on Paper 1: (1) solve <span class="chem">v(t) = 0</span> to locate turning times, (2) split <span class="chem">int_0^5 |v(t)| dt</span> at <span class="chem">t = 2</span>, (3) evaluate each sub-integral, and (4) sum their absolute values: <span class="chem">12 + 27 = 39</span> <span class="unit">m</span>.</p>'
    },
    {
      id: 't5-2-q011',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.9, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>A particle moves along a straight line with velocity <span class="chem">v(t) = 4 sin(t) - t + 1</span> <span class="unit">m s-1</span> for <span class="chem">0 &lt;= t &lt;= 4</span> (where <span class="chem">t</span> is in seconds). Using your GDC, calculate the <strong>total distance travelled</strong> by the particle from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>, correct to 3 significant figures.</p>',
      answer: 10.728022279,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Total distance travelled is <span class="chem">d = int_0^4 |v(t)| dt</span>, not <span class="chem">int_0^4 v(t) dt</span>.',
        'Make sure your GDC is in <strong>radian mode</strong> and use its numerical integration command (TI: fnInt; Casio: ∫dx) on <span class="chem">|4 sin(t) - t + 1|</span> from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>.'
      ],
      solution: '<p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.70</span> <span class="unit">s</span>.)</p>'
    },
    {
      id: 't5-2-q012',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.9',
      type: 'mcq',
      marks: 2,
      stem: '<p>A particle moves along a straight line with displacement <span class="chem">s(t) = t^3 - 6t^2 + 9t</span> <span class="unit">m</span> for <span class="chem">t &gt;= 0</span>. During which time intervals is the particle <strong>slowing down</strong>?</p>',
      options: [
        '<span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>',
        '<span class="chem">0 &lt; t &lt; 2</span> only',
        '<span class="chem">1 &lt; t &lt; 3</span> only',
        '<span class="chem">1 &lt; t &lt; 2</span> and <span class="chem">t &gt; 3</span>'
      ],
      answer: 0,
      misconception: {
        1: 'a(t) = 6(t − 2) < 0 on 0 < t < 2, but negative acceleration only means slowing down when velocity v(t) is positive; on 1 < t < 2 both v(t) and a(t) are negative, so the particle is speeding up!',
        2: 'v(t) < 0 on 1 < t < 3, which only tells you the particle is moving in the negative direction, not whether it is slowing down.',
        3: 'On 1 < t < 2 (both negative) and t > 3 (both positive), v(t) and a(t) have the same sign, so the particle is speeding up.'
      },
      hints: [
        'Find both <span class="chem">v(t) = s\'(t) = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = v\'(t) = 6(t - 2)</span>.',
        'A particle is slowing down when <span class="chem">v(t)</span> and <span class="chem">a(t)</span> have <strong>opposite signs</strong> (<span class="chem">v(t) * a(t) &lt; 0</span>).'
      ],
      solution: '<p>We have <span class="chem">v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = 6t - 12 = 6(t - 2)</span>. Testing the four intervals:<br>• <span class="chem">0 &lt; t &lt; 1</span>: <span class="chem">v &gt; 0, a &lt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">1 &lt; t &lt; 2</span>: <span class="chem">v &lt; 0, a &lt; 0</span> (same sign → speeding up)<br>• <span class="chem">2 &lt; t &lt; 3</span>: <span class="chem">v &lt; 0, a &gt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">t &gt; 3</span>: <span class="chem">v &gt; 0, a &gt; 0</span> (same sign → speeding up)<br>Thus the particle is slowing down for <span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>.</p>'
    },
    {
      id: 't5-2-q013',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6, 5.10, 5.11',
      type: 'short',
      marks: 6,
      stem: '<p>(a) Differentiate <span class="chem">F(x) = x e^{2x}</span> with respect to <span class="chem">x</span>. <strong>[2 marks]</strong><br>(b) Hence find <span class="chem">int x e^{2x} dx</span>, and evaluate <span class="chem">int_0^1 x e^{2x} dx</span> in exact form. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">F\'(x) = (2x + 1)e^{2x}</span><br>(b) <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>; <span class="chem">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>',
      markscheme: [
        'M1: Apply the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.',
        'A1: <span class="chem">F\'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>.',
        'M1: Integrate both sides of part (a): <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>.',
        'A1: Rearrange to obtain <span class="chem">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>.',
        'M1: Substitute limits <span class="chem">0</span> and <span class="chem">1</span>: <span class="chem">((1/2)e^2 - (1/4)e^2) - (0 - 1/4)</span>.',
        'A1: <span class="chem">= (e^2 + 1) / 4</span>.'
      ],
      hints: [
        'For part (a), use the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.',
        'For part (b), “Hence” means integrate both sides of <span class="chem">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> and isolate <span class="chem">int x e^{2x} dx</span>.'
      ],
      solution: '<p>(a) By the product rule, <span class="chem">F\'(x) = e^{2x} + 2x e^{2x}</span>.<br>(b) Integrating both sides gives <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span> (up to a constant). Solving for the integral gives <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>. Evaluating from <span class="chem">0</span> to <span class="chem">1</span>: <span class="chem">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>.</p>'
    },
    {
      id: 't5-2-q014',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>The finite region enclosed between the curve <span class="chem">y = k x (4 - x)</span> (where <span class="chem">k &gt; 0</span>) and the <span class="chem">x</span>-axis has an area of <span class="chem">32</span> square units. Find the value of <span class="chem">k</span>.</p>',
      answer: 3,
      hints: [
        'Decode: the unknown <span class="chem">k</span> is inside the integrand. Find where the curve meets the <span class="chem">x</span>-axis, write the area as an expression in <span class="chem">k</span>, then set it equal to <span class="chem">32</span>.',
        'The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.',
        'Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.'
      ],
      solution: '<p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>'
    },
    {
      id: 't5-2-q015',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'mcq',
      marks: 2,
      stem: '<p>Given that <span class="chem">int_2^6 f(x) dx = 10</span>, find the value of <span class="chem">int_0^4 (f(x + 2) + 3) dx</span>.</p>',
      options: [
        '<span class="chem">22</span>',
        '<span class="chem">13</span>',
        '<span class="chem">16</span>',
        '<span class="chem">10</span>'
      ],
      answer: 0,
      misconception: {
        1: 'Integrating the constant 3 from 0 to 4 gives 3(4 − 0) = 12, not just 3.',
        2: 'Check the limits: ∫₀⁴ 3 dx = 3 × 4 = 12, not 6.',
        3: 'You cannot ignore the +3 term inside the integrand; ∫₀⁴ (f(x + 2) + 3) dx = ∫₂⁶ f(u) du + ∫₀⁴ 3 dx.'
      },
      hints: [
        'Decode: you do not know <span class="chem">f</span>, so the only route is to turn <span class="chem">int_0^4 f(x + 2) dx</span> into the given integral <span class="chem">int_2^6 f(x) dx</span> by shifting the variable.',
        'Split the integral into <span class="chem">int_0^4 f(x + 2) dx + int_0^4 3 dx</span>.',
        'For the first integral, substitute <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>) and update the limits from <span class="chem">x = 0, 4</span> to <span class="chem">u = 2, 6</span>.'
      ],
      solution: '<p>Using linearity, <span class="chem">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>. Let <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>): when <span class="chem">x = 0</span>, <span class="chem">u = 2</span>; when <span class="chem">x = 4</span>, <span class="chem">u = 6</span>. So <span class="chem">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>. Adding <span class="chem">int_0^4 3 dx = 3(4 - 0) = 12</span> gives <span class="chem">10 + 12 = 22</span>.</p>'
    },
    {
      id: 't5-2-q016',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Using your GDC, find the area of the finite region enclosed between the curves <span class="chem">y = 4 - x^2</span> and <span class="chem">y = e^{0.5x}</span>, correct to 3 significant figures.</p>',
      answer: 6.7450684515,
      sigfigs: 3,
      hints: [
        'Graph both curves on your GDC and find the two intersection <span class="chem">x</span>-coordinates: <span class="chem">a ≈ -1.9009</span> and <span class="chem">b ≈ 1.4069</span>.',
        'Store the exact intersection values (to full GDC precision) and evaluate <span class="chem">int_a^b ((4 - x^2) - e^{0.5x}) dx</span>.'
      ],
      solution: '<p>Solving <span class="chem">4 - x^2 = e^{0.5x}</span> on a GDC gives intersection points at <span class="chem">a ≈ -1.90090</span> and <span class="chem">b ≈ 1.40688</span>. Between these limits, <span class="chem">4 - x^2 &gt;= e^{0.5x}</span>, so <span class="chem">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span>, which rounds to <span class="chem">6.75</span> (3 s.f.).</p>'
    },
    {
      id: 't5-2-q017',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.9',
      type: 'short',
      marks: 8,
      stem: '<p>A particle starts from rest at <span class="chem">t = 0</span> with initial displacement <span class="chem">s(0) = 2</span> <span class="unit">m</span> from an origin <span class="chem">O</span>, and moves along a straight line with acceleration <span class="chem">a(t) = 6t - 12</span> <span class="unit">m s-2</span> for <span class="chem">t &gt;= 0</span>.<br>(a) Find expressions for the velocity <span class="chem">v(t)</span> and the displacement <span class="chem">s(t)</span>. <strong>[4 marks]</strong><br>(b) Find the total distance travelled by the particle in the first <span class="chem">5</span> seconds (<span class="chem">0 &lt;= t &lt;= 5</span>). <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">v(t) = 3t^2 - 12t</span> <span class="unit">m s-1</span>; <span class="chem">s(t) = t^3 - 6t^2 + 2</span> <span class="unit">m</span><br>(b) <span class="chem">39</span> <span class="unit">m</span></p>',
      markscheme: [
        'M1: Integrate <span class="chem">a(t)</span> and use <span class="chem">v(0) = 0</span> (“starts from rest”) to find the constant.',
        'A1: <span class="chem">v(t) = 3t^2 - 12t</span>.',
        'M1: Integrate <span class="chem">v(t)</span> and use <span class="chem">s(0) = 2</span> to find the constant.',
        'A1: <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.',
        'M1: Solve <span class="chem">v(t) = 3t(t - 4) = 0</span>.',
        'A1: The particle turns at <span class="chem">t = 4</span> <span class="unit">s</span>, which lies in <span class="chem">(0, 5)</span>.',
        'M1: Evaluate <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = -30</span>, <span class="chem">s(5) = -23</span> (or split the integral at <span class="chem">t = 4</span>).',
        'A1: <span class="chem">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class="unit">m</span>.'
      ],
      hints: [
        'Decode: “starts from rest” and “initial displacement” are two boundary conditions, and “total distance” means you must find where the particle turns before using <span class="chem">int |v| dt</span>.',
        '“Starts from rest” means <span class="chem">v(0) = 0</span>; use this to find the first constant of integration, then use <span class="chem">s(0) = 2</span> for the second.',
        'For part (b), solve <span class="chem">v(t) = 0</span> to find when the particle reverses direction before computing total distance.'
      ],
      solution: '<p>(a) Integrating <span class="chem">a(t) = 6t - 12</span> gives <span class="chem">v(t) = 3t^2 - 12t + C_1</span>. Since <span class="chem">v(0) = 0</span>, <span class="chem">C_1 = 0</span>, so <span class="chem">v(t) = 3t^2 - 12t</span>. Integrating again gives <span class="chem">s(t) = t^3 - 6t^2 + C_2</span>. Since <span class="chem">s(0) = 2</span>, <span class="chem">C_2 = 2</span>, so <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.<br>(b) Setting <span class="chem">v(t) = 3t(t - 4) = 0</span> gives <span class="chem">t = 0</span> and <span class="chem">t = 4</span> <span class="unit">s</span>. Evaluating position at the endpoints and turning time: <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = 64 - 96 + 2 = -30</span>, and <span class="chem">s(5) = 125 - 150 + 2 = -23</span>. Therefore, total distance <span class="chem">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class="unit">m</span>.</p>'
    },
    {
      id: 't5-2-q018',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5',
      type: 'numeric',
      marks: 2,
      stem: '<p>Use your GDC to calculate <span class="chem">int_0^2 sqrt(1 + x^3) dx</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 3.2413092632,
      sigfigs: 3,
      hints: [
        '<span class="chem">sqrt(1 + x^3)</span> has no antiderivative you can write down, so this is a job for the numerical integration command on your GDC (TI: fnInt; Casio: ∫dx; or the ∫ template).',
        'Enter the integrand <span class="chem">sqrt(1 + x^3)</span> with lower limit <span class="chem">0</span> and upper limit <span class="chem">2</span>, then round the result to 3 s.f.'
      ],
      solution: '<p>Using the GDC numerical integration command, <span class="chem">int_0^2 sqrt(1 + x^3) dx = 3.24130…</span>, so the answer is <span class="chem">3.24</span> (3 s.f.).</p>'
    },
    {
      id: 't5-2-q019',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>The curve <span class="chem">y = x^3 - 4x^2 + x + 3</span> crosses the positive <span class="chem">x</span>-axis at the points <span class="chem">A</span> and <span class="chem">B</span>, where <span class="chem">A</span> is to the left of <span class="chem">B</span>. Find the area of the region enclosed by the curve and the <span class="chem">x</span>-axis between <span class="chem">A</span> and <span class="chem">B</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 5.5710706328,
      sigfigs: 3,
      hints: [
        'Decode: you need the two positive <span class="chem">x</span>-intercepts first (the cubic does not factorise nicely, so use the GDC root/zero tool), then an area. Check where the curve is between them: above or below the axis?',
        'The GDC gives <span class="chem">x_A ≈ 1.2391</span> and <span class="chem">x_B ≈ 3.4605</span>. Test a point such as <span class="chem">x = 2</span>: <span class="chem">y = -3 &lt; 0</span>, so the region lies <strong>below</strong> the axis.',
        'The definite integral between the roots is negative. The area is its absolute value: <span class="chem">A = |int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx|</span> (or integrate <span class="chem">|y|</span> directly).'
      ],
      solution: '<p>Decode: area between two GDC roots, with the region below the axis. The GDC gives the positive roots <span class="chem">x_A = 1.23912…</span> and <span class="chem">x_B = 3.46050…</span> (the third root, <span class="chem">x ≈ -0.700</span>, is negative). Since <span class="chem">y(2) = -3 &lt; 0</span>, the curve is below the <span class="chem">x</span>-axis on <span class="chem">(x_A, x_B)</span>. Using stored roots, <span class="chem">int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx = -5.57107…</span>, so the area is <span class="chem">5.57</span> (3 s.f.). A negative answer can never be an area.</p>'
    },
    {
      id: 't5-2-q020',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>Find the area of the finite region enclosed between the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2 - 1</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 4.9949077880,
      sigfigs: 3,
      hints: [
        'Put your GDC in <strong>radian mode</strong>, graph both curves and use the intersect tool to find the two intersection points.',
        'The intersections are at <span class="chem">x ≈ ±1.2654</span>. At <span class="chem">x = 0</span>, <span class="chem">2 cos 0 = 2 &gt; -1</span>, so <span class="chem">y = 2 cos x</span> is the upper curve.',
        'Evaluate <span class="chem">int_{-1.2654}^{1.2654} (2 cos x - x^2 + 1) dx</span> using the stored intersection values.'
      ],
      solution: '<p>Solving <span class="chem">2 cos x = x^2 - 1</span> on a GDC (radians) gives <span class="chem">x = ±1.26542…</span>. On this interval <span class="chem">2 cos x &gt;= x^2 - 1</span>, so <span class="chem">A = int_{-1.26542}^{1.26542} (2 cos x - (x^2 - 1)) dx = 4.99490…</span>, which is <span class="chem">4.99</span> (3 s.f.). Part of the lower curve is below the <span class="chem">x</span>-axis, but “upper minus lower” already accounts for that.</p>'
    },
    {
      id: 't5-2-q021',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>Let <span class="chem">f(x) = 4 sin x - x</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 4</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 9.5472654672,
      sigfigs: 3,
      hints: [
        'Decode: “total area of the regions” means every region counts as positive. Sketch <span class="chem">f</span> on your GDC (radians) and look for where it crosses the axis.',
        'The graph crosses the axis at <span class="chem">x = 0</span> and at <span class="chem">x ≈ 2.4746</span>; it is above the axis before that and below it after.',
        'Either add <span class="chem">int_0^{2.4746} f(x) dx</span> and <span class="chem">|int_{2.4746}^4 f(x) dx|</span>, or enter <span class="chem">int_0^4 |f(x)| dx</span> directly. Note that <span class="chem">int_0^4 f(x) dx ≈ -1.39</span> is <strong>not</strong> the area.'
      ],
      solution: '<p>The root of <span class="chem">4 sin x = x</span> in <span class="chem">(0, 4)</span> is <span class="chem">c = 2.47457…</span>. Then <span class="chem">int_0^c f(x) dx = 4.08092…</span> (above the axis) and <span class="chem">int_c^4 f(x) dx = -5.46634…</span> (below the axis). Total area <span class="chem">= 4.08092 + 5.46634 = 9.54726…</span>, i.e. <span class="chem">int_0^4 |f(x)| dx = 9.55</span> (3 s.f.). The signed integral, <span class="chem">-1.39</span>, lets the two regions cancel and is not an area.</p>'
    },
    {
      id: 't5-2-q022',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>A landscape architect draws a pond on a plan where 1 unit represents 1 metre. The pond is the region enclosed by the curves <span class="chem">y = ln x</span> and <span class="chem">y = (x - 2)^2</span>. A straight wooden bridge is built along the line <span class="chem">x = 2</span>, which splits the pond into two parts. Find the surface area of the <strong>larger</strong> part of the pond, in <span class="unit">m2</span>, correct to 3 significant figures.</p>',
      answer: 0.5790574533,
      sigfigs: 3,
      unit: 'm²',
      hints: [
        'Decode: this is an area between two curves, but you are asked for only one of the two pieces on either side of <span class="chem">x = 2</span>. You need the intersection points, the area on each side of <span class="chem">x = 2</span>, and then the bigger one.',
        'The GDC intersections are <span class="chem">x = a ≈ 1.4124</span> and <span class="chem">x = b ≈ 3.0571</span>. Between them, <span class="chem">ln x</span> is the upper curve (test <span class="chem">x = 2</span>: <span class="chem">ln 2 &gt; 0</span>).',
        'Compute <span class="chem">int_a^2 (ln x - (x - 2)^2) dx</span> and <span class="chem">int_2^b (ln x - (x - 2)^2) dx</span>, and compare.'
      ],
      solution: '<p>Decode: the bridge <span class="chem">x = 2</span> is a vertical cut, so the two parts are the areas between the curves on <span class="chem">[a, 2]</span> and <span class="chem">[2, b]</span>. The GDC gives <span class="chem">a = 1.41239…</span> and <span class="chem">b = 3.05710…</span>, with <span class="chem">ln x &gt;= (x - 2)^2</span> between them. Left part: <span class="chem">int_a^2 (ln x - (x - 2)^2) dx = 0.24338…</span>. Right part: <span class="chem">int_2^b (ln x - (x - 2)^2) dx = 0.57906…</span>. The larger part has area <span class="chem">0.579</span> <span class="unit">m2</span> (3 s.f.). (Check: the whole pond is <span class="chem">0.822</span> <span class="unit">m2</span>.)</p>'
    },
    {
      id: 't5-2-q023',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.8, 5.11',
      type: 'short',
      marks: 9,
      stem: '<p>Let <span class="chem">f(x) = 8x e^{-x/2}</span> and <span class="chem">g(x) = x</span>, for <span class="chem">x &gt;= 0</span>.<br>(a) Find the coordinates of the maximum point on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[2 marks]</strong><br>(c) Find the area of the region enclosed between the graphs of <span class="chem">f</span> and <span class="chem">g</span>. <strong>[3 marks]</strong><br>(d) Find the area of the region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 6</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>',
      answer: '<p>(a) <span class="chem">(2, 5.89)</span> (exactly <span class="chem">(2, 16/e)</span>)<br>(b) <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (exactly <span class="chem">6 ln 2</span>)<br>(c) <span class="chem">11.0</span><br>(d) <span class="chem">25.6</span></p>',
      markscheme: [
        'M1: Uses the GDC maximum tool (or solves <span class="chem">f\'(x) = 8e^{-x/2}(1 - x/2) = 0</span>).',
        'A1: <span class="chem">(2, 5.89)</span>.',
        'M1: Solves <span class="chem">8x e^{-x/2} = x</span> (graphically, or <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>).',
        'A1: <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (<span class="chem">6 ln 2</span>).',
        'M1: Sets up an integral of (upper − lower) between the intersections.',
        'A1: <span class="chem">int_0^{4.1589} (8x e^{-x/2} - x) dx</span>, with <span class="chem">f</span> above <span class="chem">g</span>.',
        'A1: Area <span class="chem">= 11.0</span> (11.034…).',
        'M1: <span class="chem">int_0^6 8x e^{-x/2} dx</span> (f ≥ 0 on [0, 6]).',
        'A1: <span class="chem">25.6</span> (25.627…).'
      ],
      hints: [
        'Decode: (a) and (b) are GDC graph-reading tasks; (c) is “upper minus lower” between the intersections from (b); (d) is a plain area under <span class="chem">f</span>, because <span class="chem">f(x) &gt;= 0</span> for <span class="chem">x &gt;= 0</span>.',
        'For (b), the graphs meet at the origin and once more. Store the second intersection in your GDC so you can use it as a limit in (c).',
        'Neither <span class="chem">int x e^{-x/2} dx</span> (integration by parts is AHL) nor the area needs to be done by hand here: use the GDC numerical integration.'
      ],
      solution: '<p>(a) <span class="chem">f\'(x) = 8e^{-x/2} - 4x e^{-x/2} = 8e^{-x/2}(1 - x/2)</span>, which is zero at <span class="chem">x = 2</span>; <span class="chem">f(2) = 16e^{-1} = 5.886…</span>. Maximum <span class="chem">(2, 5.89)</span>.<br>(b) <span class="chem">8x e^{-x/2} = x</span> gives <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>, i.e. <span class="chem">x = 2 ln 8 = 6 ln 2 = 4.1588…</span>.<br>(c) For <span class="chem">0 &lt; x &lt; 6 ln 2</span>, <span class="chem">f(x) &gt; g(x)</span> (e.g. <span class="chem">f(2) = 5.89 &gt; 2</span>). GDC: <span class="chem">int_0^{6 ln 2} (8x e^{-x/2} - x) dx = 11.034…</span>, so the area is <span class="chem">11.0</span>.<br>(d) <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 6]</span>, so the area is <span class="chem">int_0^6 8x e^{-x/2} dx = 25.627… ≈ 25.6</span>.</p>'
    },
    {
      id: 't5-2-q024',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'numeric',
      marks: 5,
      stem: '<p>A particle moves in a straight line with velocity <span class="chem">v(t) = t^2 e^{-0.5t} - 1</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span>, where <span class="chem">t</span> is in seconds. Find the total distance travelled by the particle in these 8 seconds. Give your answer correct to 3 significant figures.</p>',
      answer: 5.8986061396,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Total distance is <span class="chem">int_0^8 |v(t)| dt</span>. The displacement <span class="chem">int_0^8 v(t) dt</span> is smaller, because the particle moves backwards at first.',
        'Graph <span class="chem">v</span>: it starts at <span class="chem">v(0) = -1</span> and becomes positive at <span class="chem">t ≈ 1.430</span>, staying positive up to <span class="chem">t = 8</span>.',
        'Enter <span class="chem">int_0^8 |t^2 e^{-0.5t} - 1| dt</span> on the GDC, or add <span class="chem">|int_0^{1.430} v dt|</span> and <span class="chem">int_{1.430}^8 v dt</span>.'
      ],
      solution: '<p>The velocity is negative for <span class="chem">0 &lt;= t &lt; 1.42961…</span> and positive after that (check <span class="chem">v(8) = 64e^{-4} - 1 ≈ 0.172 &gt; 0</span>). Total distance <span class="chem">= int_0^8 |v(t)| dt = 0.85413… + 5.04447… = 5.89860…</span>, so <span class="chem">5.90</span> <span class="unit">m</span> (3 s.f.). For comparison, the displacement is only <span class="chem">int_0^8 v(t) dt ≈ 4.19</span> <span class="unit">m</span>.</p>'
    },
    {
      id: 't5-2-q025',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'numeric',
      marks: 4,
      stem: '<p>A particle moves along a straight line so that its velocity is <span class="chem">v(t) = 6 cos(t^2 / 5)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span> seconds. When <span class="chem">t = 0</span>, the particle is <span class="chem">1</span> <span class="unit">m</span> to the right of a fixed point <span class="chem">O</span> (so <span class="chem">s(0) = 1</span>). Find the displacement <span class="chem">s(5)</span> of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 6.5229894921,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Decode: you cannot integrate <span class="chem">cos(t^2/5)</span> by hand, but you do not need <span class="chem">s(t)</span> as a formula: <span class="chem">s(5) = s(0) + int_0^5 v(t) dt</span>.',
        'Use the GDC (radians) for <span class="chem">int_0^5 6 cos(t^2 / 5) dt</span>, then add the starting position <span class="chem">1</span>.'
      ],
      solution: '<p>By the fundamental theorem, <span class="chem">s(5) - s(0) = int_0^5 v(t) dt</span>. The GDC (radians) gives <span class="chem">int_0^5 6 cos(t^2 / 5) dt = 5.52298…</span>. So <span class="chem">s(5) = 1 + 5.52298… = 6.52298…</span>, i.e. <span class="chem">6.52</span> <span class="unit">m</span> (3 s.f.). The velocity changes sign twice in <span class="chem">[0, 5]</span>, but that only matters for distance, not for displacement.</p>'
    },
    {
      id: 't5-2-q026',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.9',
      type: 'numeric',
      marks: 5,
      stem: '<p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3 - t + 2 sin(1.5t)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span> seconds. Find the acceleration of the particle at the instant when it first changes direction. Give your answer correct to 3 significant figures.</p>',
      answer: -3.8235400654,
      sigfigs: 3,
      unit: 'm s⁻²',
      hints: [
        'Decode: “changes direction” means <span class="chem">v(t) = 0</span> <strong>and</strong> <span class="chem">v</span> changes sign there. Find the first such time, then evaluate <span class="chem">a(t) = v\'(t)</span> at it.',
        'The GDC zero of <span class="chem">v</span> is <span class="chem">t ≈ 2.3242</span>, and the graph of <span class="chem">v</span> crosses (not just touches) the axis there.',
        'Differentiate: <span class="chem">a(t) = -1 + 3 cos(1.5t)</span> (or use the GDC derivative at that point).'
      ],
      solution: '<p>The only zero of <span class="chem">v</span> in <span class="chem">[0, 8]</span> is <span class="chem">t = 2.32418…</span> (radians), and <span class="chem">v</span> goes from positive to negative there, so the particle changes direction. <span class="chem">a(t) = v\'(t) = -1 + 2(1.5) cos(1.5t) = -1 + 3 cos(1.5t)</span>. So <span class="chem">a(2.32418…) = -3.82354…</span>, i.e. <span class="chem">-3.82</span> <span class="unit">m s-2</span> (3 s.f.).</p>'
    },
    {
      id: 't5-2-q027',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'short',
      marks: 11,
      stem: '<p>A toy car moves along a straight track. Its velocity is <span class="chem">v(t) = 10t e^{-0.5t} - 2</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>, where <span class="chem">t</span> is in seconds.<br>(a) Write down the initial velocity of the car. <strong>[1 mark]</strong><br>(b) Find the values of <span class="chem">t</span> for which the car is at rest. <strong>[2 marks]</strong><br>(c) Find the maximum speed of the car. <strong>[2 marks]</strong><br>(d) Find the displacement of the car from its starting point when <span class="chem">t = 10</span>. <strong>[2 marks]</strong><br>(e) Find the total distance travelled by the car for <span class="chem">0 &lt;= t &lt;= 10</span>. <strong>[2 marks]</strong><br>(f) Find the acceleration of the car when <span class="chem">t = 1</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>',
      answer: '<p>(a) <span class="chem">-2</span> <span class="unit">m s-1</span><br>(b) <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span><br>(c) <span class="chem">5.36</span> <span class="unit">m s-1</span><br>(d) <span class="chem">18.4</span> <span class="unit">m</span><br>(e) <span class="chem">23.2</span> <span class="unit">m</span><br>(f) <span class="chem">3.03</span> <span class="unit">m s-2</span></p>',
      markscheme: [
        'A1: <span class="chem">v(0) = -2</span> <span class="unit">m s-1</span>.',
        'M1: Solves <span class="chem">v(t) = 0</span> on the GDC.',
        'A1: <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span>.',
        'M1: Finds the maximum of <span class="chem">|v|</span>, comparing the local maximum <span class="chem">v(2)</span> with the endpoint values <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| ≈ 1.33</span>.',
        'A1: Maximum speed <span class="chem">= v(2) = 20e^{-1} - 2 = 5.36</span> <span class="unit">m s-1</span>.',
        'M1: <span class="chem">int_0^{10} v(t) dt</span>.',
        'A1: <span class="chem">18.4</span> <span class="unit">m</span> (18.38…).',
        'M1: <span class="chem">int_0^{10} |v(t)| dt</span> (or splits at both zeros and adds absolute values).',
        'A1: <span class="chem">23.2</span> <span class="unit">m</span> (23.19…).',
        'M1: <span class="chem">a(t) = v\'(t) = 10e^{-0.5t} - 5t e^{-0.5t}</span> (or GDC derivative at <span class="chem">t = 1</span>).',
        'A1: <span class="chem">a(1) = 5e^{-0.5} = 3.03</span> <span class="unit">m s-2</span>.'
      ],
      hints: [
        'Decode: “at rest” is <span class="chem">v = 0</span>; “speed” is <span class="chem">|v|</span>, so a large negative velocity would also count; “displacement” is <span class="chem">int v dt</span> but “total distance” is <span class="chem">int |v| dt</span>.',
        'Graph <span class="chem">v</span> on <span class="chem">[0, 10]</span>: it is negative at both ends and has one peak. Check the endpoint values before you claim a maximum speed.',
        'For (f), <span class="chem">a = dv/dt</span>; use the product rule on <span class="chem">10t e^{-0.5t}</span> or the GDC derivative command.'
      ],
      solution: '<p>(a) <span class="chem">v(0) = 0 - 2 = -2</span> <span class="unit">m s-1</span>.<br>(b) GDC zeros of <span class="chem">v</span>: <span class="chem">t = 0.22366…</span> and <span class="chem">t = 7.15430…</span>.<br>(c) <span class="chem">v\'(t) = 10e^{-0.5t}(1 - 0.5t) = 0</span> at <span class="chem">t = 2</span>, where <span class="chem">v(2) = 20e^{-1} - 2 = 5.3576…</span>. At the ends <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| = |100e^{-5} - 2| = 1.326…</span>, so the maximum speed is <span class="chem">5.36</span> <span class="unit">m s-1</span>.<br>(d) <span class="chem">int_0^{10} v(t) dt = 18.3829…</span>, so <span class="chem">18.4</span> <span class="unit">m</span>.<br>(e) <span class="chem">int_0^{10} |v(t)| dt = 23.1937…</span>, so <span class="chem">23.2</span> <span class="unit">m</span>. It is larger than (d) because the car moves backwards for <span class="chem">t &lt; 0.224</span> and for <span class="chem">t &gt; 7.15</span>.<br>(f) <span class="chem">a(1) = 10e^{-0.5} - 5e^{-0.5} = 5e^{-0.5} = 3.0327…</span>, so <span class="chem">3.03</span> <span class="unit">m s-2</span>.</p>'
    },
    {
      id: 't5-2-q028',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'numeric',
      marks: 6,
      stem: '<p>A particle leaves a point <span class="chem">O</span> at <span class="chem">t = 0</span> and moves in a straight line with velocity <span class="chem">v(t) = 4 - t e^{0.3t}</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the time, after it leaves, when the particle is next back at <span class="chem">O</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 3.6972609613,
      sigfigs: 3,
      unit: 's',
      hints: [
        'Decode: “back at O” means the <strong>displacement</strong> is zero, not the velocity. You need <span class="chem">T &gt; 0</span> with <span class="chem">int_0^T v(t) dt = 0</span>. Solving <span class="chem">v(t) = 0</span> only tells you when the particle turns round.',
        'The particle moves forwards until <span class="chem">v = 0</span> at <span class="chem">t ≈ 2.12</span>, then comes back. So the answer must be later than 2.12 s.',
        'On the GDC, graph <span class="chem">y = int_0^x (4 - t e^{0.3t}) dt</span> (or tabulate it) and find where it returns to zero.'
      ],
      solution: '<p>Decode: returning to <span class="chem">O</span> means <span class="chem">s(T) = s(0)</span>, i.e. <span class="chem">int_0^T (4 - t e^{0.3t}) dt = 0</span> with <span class="chem">T &gt; 0</span>. The particle turns at <span class="chem">t = 2.1185…</span> (where <span class="chem">v = 0</span>), having travelled forwards, so it comes back afterwards. Solving the integral equation on the GDC gives <span class="chem">T = 3.69726…</span>, so the particle is back at <span class="chem">O</span> after <span class="chem">3.70</span> <span class="unit">s</span> (3 s.f.).</p>'
    },
    {
      id: 't5-2-q029',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'numeric',
      marks: 6,
      stem: '<p>A particle moves along a straight line with velocity <span class="chem">v(t) = 2 cos t + 0.5t - 1</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. The particle has an odometer that records the total distance it has travelled since <span class="chem">t = 0</span>. Find the time at which the odometer first reads <span class="chem">10</span> <span class="unit">m</span>. Give your answer correct to 3 significant figures.</p>',
      answer: 6.5741346679,
      sigfigs: 3,
      unit: 's',
      hints: [
        'Decode: an odometer measures <strong>distance</strong>, which never decreases. You need <span class="chem">T</span> with <span class="chem">int_0^T |v(t)| dt = 10</span>; using <span class="chem">int_0^T v(t) dt = 10</span> would treat backward motion as negative.',
        'In radians, <span class="chem">v</span> changes sign at <span class="chem">t ≈ 1.427</span> and <span class="chem">t ≈ 4.146</span>, and is positive after that.',
        'Graph <span class="chem">y = int_0^x |2 cos t + 0.5t - 1| dt</span> on the GDC and intersect it with <span class="chem">y = 10</span>.'
      ],
      solution: '<p>Decode: the reading is the total distance <span class="chem">D(T) = int_0^T |v(t)| dt</span>, an increasing function. Solve <span class="chem">D(T) = 10</span>. The velocity is positive on <span class="chem">[0, 1.427)</span>, negative on <span class="chem">(1.427, 4.146)</span> and positive afterwards. The GDC gives <span class="chem">D(4.146…) ≈ 3.66</span>, so the 10 m mark is reached later, at <span class="chem">T = 6.57413…</span>, i.e. <span class="chem">6.57</span> <span class="unit">s</span> (3 s.f.). Solving <span class="chem">int_0^T v dt = 10</span> instead would give a later, wrong time.</p>'
    },
    {
      id: 't5-2-q030',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'numeric',
      marks: 6,
      stem: '<p>A drone takes off vertically from the ground at <span class="chem">t = 0</span>. For the first <span class="chem">10</span> seconds of its flight its vertical velocity, measured upwards, is <span class="chem">v(t) = 6 - t - 2 sin t</span> <span class="unit">m s-1</span>. Find the greatest height above the ground that the drone reaches during these 10 seconds. Give your answer correct to 3 significant figures.</p>',
      answer: 17.973275321,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Decode: height is the displacement <span class="chem">s(t) = int_0^t v(u) du</span> (it starts at 0). Its greatest value occurs where <span class="chem">v</span> changes from positive to negative, not at <span class="chem">t = 10</span>.',
        'In radians, the GDC gives the zero of <span class="chem">v</span> at <span class="chem">t ≈ 6.1887</span>; <span class="chem">v &gt; 0</span> before it and <span class="chem">v &lt; 0</span> after it.',
        'Evaluate <span class="chem">int_0^{6.1887} (6 - t - 2 sin t) dt</span>.'
      ],
      solution: '<p>Decode: maximum height = maximum of <span class="chem">s(t) = int_0^t v</span>, which occurs where <span class="chem">v</span> changes sign from + to −. The only zero of <span class="chem">v</span> in <span class="chem">[0, 10]</span> is <span class="chem">t_1 = 6.18869…</span>. The greatest height is <span class="chem">s(t_1) = int_0^{t_1} (6 - t - 2 sin t) dt = 17.9732…</span>, i.e. <span class="chem">18.0</span> <span class="unit">m</span> (3 s.f.). (At <span class="chem">t = 10</span> the drone is lower, at about <span class="chem">6.32</span> <span class="unit">m</span>, and it never reaches the ground in between.)</p>'
    },
    {
      id: 't5-2-q031',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5',
      type: 'numeric',
      marks: 4,
      stem: '<p>A function <span class="chem">f</span> satisfies <span class="chem">f\'(x) = e^{-x^2}</span> and <span class="chem">f(0) = 2</span>. Find <span class="chem">f(1.5)</span>, correct to 3 significant figures.</p>',
      answer: 2.8561883936,
      sigfigs: 3,
      hints: [
        'Decode: this is a boundary-condition question, but <span class="chem">e^{-x^2}</span> has no elementary antiderivative, so you cannot find <span class="chem">f(x)</span> as a formula. Use <span class="chem">f(1.5) = f(0) + int_0^{1.5} f\'(x) dx</span> instead.',
        'Evaluate <span class="chem">int_0^{1.5} e^{-x^2} dx</span> on your GDC and add <span class="chem">2</span>.'
      ],
      solution: '<p>Decode: “find <span class="chem">f</span> from <span class="chem">f\'</span> and one point”, done with a definite integral. <span class="chem">f(1.5) - f(0) = int_0^{1.5} e^{-x^2} dx = 0.85619…</span> (GDC). So <span class="chem">f(1.5) = 2 + 0.85619… = 2.85619…</span>, i.e. <span class="chem">2.86</span> (3 s.f.).</p>'
    },
    {
      id: 't5-2-q032',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.10, 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (1/x + x/4) dx = 3</span>, find the value of <span class="chem">k</span>, correct to 3 significant figures.</p>',
      answer: 3.7876232937,
      sigfigs: 3,
      hints: [
        'Decode: the unknown is a <strong>limit</strong> of the integral. Integrate first to get an equation in <span class="chem">k</span>, then solve that equation on the GDC (it mixes <span class="chem">ln k</span> and <span class="chem">k^2</span>, so it has no algebraic solution).',
        'An antiderivative is <span class="chem">ln x + x^2/8</span>, so the equation is <span class="chem">ln k + (k^2 - 1)/8 = 3</span>.',
        'Graph <span class="chem">y = ln x + (x^2 - 1)/8</span> and <span class="chem">y = 3</span> and intersect them for <span class="chem">x &gt; 1</span>.'
      ],
      solution: '<p>Decode: unknown upper limit, so integrate and then solve. <span class="chem">int_1^k (1/x + x/4) dx = [ln x + x^2/8]_1^k = ln k + k^2/8 - 1/8</span>. Setting this equal to 3: <span class="chem">ln k + (k^2 - 1)/8 = 3</span>. The left side is increasing for <span class="chem">k &gt; 1</span>, so there is one solution; the GDC gives <span class="chem">k = 3.78762…</span>, i.e. <span class="chem">3.79</span> (3 s.f.). (Alternatively, solve <span class="chem">int_1^k (1/x + x/4) dx - 3 = 0</span> directly with the GDC solver.)</p>'
    },
    {
      id: 't5-2-q033',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5',
      type: 'numeric',
      marks: 7,
      stem: '<p>At midnight (<span class="chem">t = 0</span>) a rainwater tank holds <span class="chem">200</span> litres. Over the next 24 hours, water flows in at a rate of <span class="chem">30 + 10 sin(pi t / 12)</span> litres per hour, while water is drawn off for a garden at a rate of <span class="chem">2t</span> litres per hour, where <span class="chem">t</span> is the time in hours after midnight. Find the greatest volume of water in the tank during these 24 hours, correct to 3 significant figures.</p>',
      answer: 496.31386837,
      sigfigs: 3,
      unit: 'L',
      hints: [
        'Decode: this is a net-change problem. The rate of change of volume is (rate in) − (rate out) <span class="chem">= 30 + 10 sin(pi t/12) - 2t</span>, and <span class="chem">V(T) = 200 + int_0^T (rate in - rate out) dt</span>. The volume is greatest when the net rate changes from positive to negative.',
        'Solve <span class="chem">30 + 10 sin(pi t / 12) - 2t = 0</span> on the GDC (radians): <span class="chem">t ≈ 13.31</span> hours.',
        'Evaluate <span class="chem">200 + int_0^{13.31} (30 + 10 sin(pi t / 12) - 2t) dt</span>, and check it is bigger than the value at the end points (<span class="chem">V(0) = 200</span>, <span class="chem">V(24) = 344</span>).'
      ],
      solution: '<p>Decode: “flows in at a rate … drawn off at a rate” describes <span class="chem">dV/dt = 30 + 10 sin(pi t/12) - 2t</span>, and the start volume is a boundary condition. <span class="chem">dV/dt = 0</span> at <span class="chem">t_1 = 13.3138…</span>, with <span class="chem">dV/dt &gt; 0</span> before and <span class="chem">&lt; 0</span> after, so <span class="chem">V</span> has its maximum there. <span class="chem">V(t_1) = 200 + int_0^{t_1} (30 + 10 sin(pi t/12) - 2t) dt = 496.313…</span>. The end values are <span class="chem">V(0) = 200</span> and <span class="chem">V(24) = 200 + 720 + 0 - 576 = 344</span>. The greatest volume is <span class="chem">496</span> litres (3 s.f.).</p>'
    },
    {
      id: 't5-2-q034',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>The curves <span class="chem">y = x^2 - 4</span> and <span class="chem">y = -2 cos x</span> enclose a finite region <span class="chem">R</span>, most of which lies below the <span class="chem">x</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>',
      answer: 7.3064254706,
      sigfigs: 3,
      hints: [
        'Decode: the region being below the <span class="chem">x</span>-axis does not change the method for the area between two curves. Integrate (upper curve − lower curve) between the intersections; you do not split at the <span class="chem">x</span>-axis.',
        'In radians, the curves intersect at <span class="chem">x ≈ ±2.3136</span>. At <span class="chem">x = 0</span>: <span class="chem">-2 cos 0 = -2</span> and <span class="chem">0^2 - 4 = -4</span>, so <span class="chem">y = -2 cos x</span> is the upper curve.',
        'Evaluate <span class="chem">int_{-2.3136}^{2.3136} (-2 cos x - x^2 + 4) dx</span>.'
      ],
      solution: '<p>Solving <span class="chem">x^2 - 4 = -2 cos x</span> on the GDC gives <span class="chem">x = ±2.31358…</span>. Between them, <span class="chem">-2 cos x &gt;= x^2 - 4</span>. Area <span class="chem">= int_{-2.31358}^{2.31358} (-2 cos x - (x^2 - 4)) dx = 7.30642…</span>, so <span class="chem">7.31</span> (3 s.f.). Because the integrand is (upper − lower) ≥ 0, the answer is positive even though both curves are below the axis for much of the interval.</p>'
    },
    {
      id: 't5-2-q035',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 3,
      stem: '<p>Find the value of <span class="chem">int_1^2 (3x^2 + 2/x^2) dx</span>.</p>',
      answer: 8,
      hints: [
        'Write <span class="chem">2/x^2</span> as <span class="chem">2x^{-2}</span>, which integrates to <span class="chem">2x^{-1}/(-1) = -2/x</span>.',
        'Evaluate <span class="chem">[x^3 - 2/x]_1^2</span> as <span class="chem">F(2) - F(1)</span>, keeping brackets around <span class="chem">F(1)</span>.'
      ],
      solution: '<p><span class="chem">int_1^2 (3x^2 + 2x^{-2}) dx = [x^3 - 2/x]_1^2 = (8 - 1) - (1 - 2) = 7 + 1 = 8</span>.</p>'
    },
    {
      id: 't5-2-q036',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10',
      type: 'mcq',
      marks: 2,
      stem: '<p>Find <span class="chem">int sin(3x - 1) dx</span>.</p>',
      options: [
        '<span class="chem">(1/3) cos(3x - 1) + C</span>',
        '<span class="chem">-3 cos(3x - 1) + C</span>',
        '<span class="chem">-(1/3) cos(3x - 1) + C</span>',
        '<span class="chem">-cos((3x^2)/2 - x) + C</span>'
      ],
      answer: 2,
      misconception: {
        0: 'You divided by 3 correctly but lost the minus sign: the integral of sin u is −cos u, so the answer is −(1/3) cos(3x − 1) + C.',
        1: 'You multiplied by the inner coefficient 3 (as in the chain rule for differentiation) instead of dividing by it.',
        3: 'You integrated the inside 3x − 1 as well. For a linear composite f(ax + b), keep the bracket unchanged and divide by a.'
      },
      hints: [
        'Use <span class="chem">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span>.',
        'Check by differentiating your answer: the chain rule should bring out a factor <span class="chem">3</span> that cancels the <span class="chem">1/3</span>.'
      ],
      solution: '<p>With <span class="chem">a = 3</span>: <span class="chem">int sin(3x - 1) dx = -(1/3) cos(3x - 1) + C</span>. Check: <span class="chem">d/dx(-(1/3) cos(3x - 1)) = -(1/3)(-sin(3x - 1))(3) = sin(3x - 1)</span>.</p>'
    },
    {
      id: 't5-2-q037',
      topic: 't5-2',
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'numeric',
      marks: 3,
      stem: '<p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3t^2 - 2t + 1</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Its displacement from a fixed point <span class="chem">O</span> at <span class="chem">t = 0</span> is <span class="chem">4</span> <span class="unit">m</span>. Find its displacement from <span class="chem">O</span> when <span class="chem">t = 2</span>.</p>',
      answer: 10,
      unit: 'm',
      hints: [
        'Displacement is the antiderivative of velocity: <span class="chem">s(t) = t^3 - t^2 + t + C</span>.',
        'Use <span class="chem">s(0) = 4</span> to find <span class="chem">C</span>, then substitute <span class="chem">t = 2</span>.'
      ],
      solution: '<p><span class="chem">s(t) = int (3t^2 - 2t + 1) dt = t^3 - t^2 + t + C</span>. Since <span class="chem">s(0) = 4</span>, <span class="chem">C = 4</span>. Then <span class="chem">s(2) = 8 - 4 + 2 + 4 = 10</span> <span class="unit">m</span>.</p>'
    },
    {
      id: 't5-2-q038',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10',
      type: 'short',
      marks: 6,
      stem: '<p>Find each of the following.<br>(a) <span class="chem">int (2x + 1)^5 dx</span> <strong>[2 marks]</strong><br>(b) <span class="chem">int 6/(3x - 2) dx</span>, for <span class="chem">x &gt; 2/3</span> <strong>[2 marks]</strong><br>(c) <span class="chem">int 4e^{1 - 2x} dx</span> <strong>[2 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">(2x + 1)^6 / 12 + C</span><br>(b) <span class="chem">2 ln(3x - 2) + C</span><br>(c) <span class="chem">-2e^{1 - 2x} + C</span></p>',
      markscheme: [
        'M1: Power <span class="chem">(2x + 1)^6</span> with a division by the inner coefficient <span class="chem">2</span>.',
        'A1: <span class="chem">(2x + 1)^6 / 12 + C</span>.',
        'M1: Logarithm form <span class="chem">k ln(3x - 2)</span>.',
        'A1: <span class="chem">2 ln(3x - 2) + C</span> (modulus not needed as <span class="chem">x &gt; 2/3</span>).',
        'M1: Exponential form <span class="chem">k e^{1 - 2x}</span>.',
        'A1: <span class="chem">-2e^{1 - 2x} + C</span>.'
      ],
      hints: [
        'Each integrand is a standard function of a linear expression <span class="chem">ax + b</span>: integrate as usual, keep the bracket, and divide by <span class="chem">a</span>.',
        'In (c) the inner coefficient is <span class="chem">a = -2</span>, so dividing by it changes the sign.'
      ],
      solution: '<p>(a) <span class="chem">int (2x + 1)^5 dx = (2x + 1)^6 / (6 × 2) + C = (2x + 1)^6 / 12 + C</span>.<br>(b) <span class="chem">int 6/(3x - 2) dx = 6 × (1/3) ln|3x - 2| + C = 2 ln(3x - 2) + C</span>, since <span class="chem">3x - 2 &gt; 0</span>.<br>(c) <span class="chem">int 4e^{1 - 2x} dx = 4 × (1/(-2)) e^{1 - 2x} + C = -2e^{1 - 2x} + C</span>.</p>'
    },
    {
      id: 't5-2-q039',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 3.6, 5.10, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>Find the exact value of <span class="chem">int_0^{pi/4} (sin x + cos x)^2 dx</span>.</p>',
      answer: 1.2853981634,
      exact: true,
      answerInput: 'pi/4 + 1/2',
      hints: [
        'Decode: you cannot integrate a squared bracket of trig functions directly. Expand it and use identities to turn it into terms you can integrate.',
        '<span class="chem">(sin x + cos x)^2 = sin^2 x + cos^2 x + 2 sin x cos x = 1 + sin(2x)</span>.',
        '<span class="chem">int sin(2x) dx = -(1/2) cos(2x)</span>. Then use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.'
      ],
      solution: '<p>Expanding, <span class="chem">(sin x + cos x)^2 = 1 + 2 sin x cos x = 1 + sin(2x)</span>. So <span class="chem">int_0^{pi/4} (1 + sin(2x)) dx = [x - (1/2) cos(2x)]_0^{pi/4} = (pi/4 - (1/2)(0)) - (0 - 1/2) = pi/4 + 1/2</span>.</p>'
    },
    {
      id: 't5-2-q040',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'numeric',
      marks: 4,
      stem: '<p>Find the exact value of <span class="chem">int_0^1 x(x^2 + 1)^3 dx</span>.</p>',
      answer: 1.875,
      exact: true,
      answerInput: '15/8',
      hints: [
        'The factor <span class="chem">x</span> is (half of) the derivative of the inner function <span class="chem">x^2 + 1</span>: this is the reverse chain rule pattern <span class="chem">int g\'(x) [g(x)]^n dx</span>.',
        'Let <span class="chem">u = x^2 + 1</span>, so <span class="chem">du = 2x dx</span> and the limits become <span class="chem">u = 1</span> to <span class="chem">u = 2</span>.'
      ],
      solution: '<p>With <span class="chem">u = x^2 + 1</span>, <span class="chem">x dx = (1/2) du</span>, and <span class="chem">x = 0, 1</span> give <span class="chem">u = 1, 2</span>. So the integral is <span class="chem">(1/2) int_1^2 u^3 du = (1/2)[u^4/4]_1^2 = (1/8)(16 - 1) = 15/8</span>.</p>'
    },
    {
      id: 't5-2-q041',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'numeric',
      marks: 4,
      stem: '<p>Find the exact value of <span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx</span>, giving your answer as a single logarithm.</p>',
      answer: 0.4054651081,
      exact: true,
      answerInput: 'ln(3/2)',
      hints: [
        'The numerator <span class="chem">e^x</span> is exactly the derivative of the denominator <span class="chem">e^x + 1</span>, so the integral is of the form <span class="chem">int g\'(x)/g(x) dx = ln|g(x)| + C</span>.',
        'Evaluate <span class="chem">[ln(e^x + 1)]_0^{ln 2}</span> using <span class="chem">e^{ln 2} = 2</span>.'
      ],
      solution: '<p><span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx = [ln(e^x + 1)]_0^{ln 2} = ln(2 + 1) - ln(1 + 1) = ln 3 - ln 2 = ln(3/2)</span>.</p>'
    },
    {
      id: 't5-2-q042',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'short',
      marks: 8,
      stem: '<p>Let <span class="chem">f(x) = x^2 - 4x + 3</span>.<br>(a) Find the <span class="chem">x</span>-intercepts of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">int_0^4 f(x) dx</span>. <strong>[2 marks]</strong><br>(c) Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 0</span> and <span class="chem">x = 4</span>. <strong>[3 marks]</strong><br>(d) Explain why your answers to (b) and (c) are different. <strong>[1 mark]</strong></p>',
      answer: '<p>(a) <span class="chem">x = 1</span> and <span class="chem">x = 3</span><br>(b) <span class="chem">4/3</span><br>(c) <span class="chem">4</span><br>(d) The region between <span class="chem">x = 1</span> and <span class="chem">x = 3</span> is below the axis, so it contributes <span class="chem">-4/3</span> to the integral but <span class="chem">+4/3</span> to the area.</p>',
      markscheme: [
        'M1: Factorises <span class="chem">(x - 1)(x - 3) = 0</span> (or uses the quadratic formula).',
        'A1: <span class="chem">x = 1</span> and <span class="chem">x = 3</span>.',
        'M1: Antiderivative <span class="chem">x^3/3 - 2x^2 + 3x</span> evaluated from 0 to 4.',
        'A1: <span class="chem">64/3 - 32 + 12 = 4/3</span>.',
        'M1: Splits at <span class="chem">x = 1</span> and <span class="chem">x = 3</span> and takes absolute values of the pieces.',
        'A1: Pieces <span class="chem">4/3</span>, <span class="chem">-4/3</span>, <span class="chem">4/3</span>.',
        'A1: Total area <span class="chem">= 4</span>.',
        'R1: The integral is signed: the part below the axis on <span class="chem">(1, 3)</span> is negative and cancels some of the positive parts, whereas area counts every region as positive.'
      ],
      hints: [
        'Decode: (b) asks for a signed integral, (c) asks for an area. They are equal only when the curve stays above the axis.',
        'Let <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>. Then <span class="chem">F(0) = 0</span>, <span class="chem">F(1) = 4/3</span>, <span class="chem">F(3) = 0</span>, <span class="chem">F(4) = 4/3</span>.',
        'For (c), find <span class="chem">int_0^1</span>, <span class="chem">int_1^3</span> and <span class="chem">int_3^4</span> separately and add their absolute values.'
      ],
      solution: '<p>(a) <span class="chem">x^2 - 4x + 3 = (x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1, 3</span>.<br>(b) With <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>: <span class="chem">int_0^4 f(x) dx = F(4) - F(0) = 64/3 - 32 + 12 = 4/3</span>.<br>(c) <span class="chem">int_0^1 f = F(1) - F(0) = 4/3</span>; <span class="chem">int_1^3 f = F(3) - F(1) = 0 - 4/3 = -4/3</span>; <span class="chem">int_3^4 f = F(4) - F(3) = 4/3</span>. Total area <span class="chem">= 4/3 + 4/3 + 4/3 = 4</span>.<br>(d) <span class="chem">f &lt; 0</span> on <span class="chem">(1, 3)</span>, so that region counts negatively in the integral: <span class="chem">4/3 - 4/3 + 4/3 = 4/3</span>. Area counts it positively.</p>'
    },
    {
      id: 't5-2-q043',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.9',
      type: 'short',
      marks: 9,
      stem: '<p>A particle starts at a fixed point <span class="chem">O</span> and moves in a straight line with velocity <span class="chem">v(t) = t^2 - 6t + 8</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span>, where <span class="chem">t</span> is in seconds.<br>(a) Find the values of <span class="chem">t</span> when the particle is at rest. <strong>[2 marks]</strong><br>(b) Find the acceleration of the particle when <span class="chem">t = 4</span>. <strong>[2 marks]</strong><br>(c) Find the displacement of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle for <span class="chem">0 &lt;= t &lt;= 5</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">t = 2</span> and <span class="chem">t = 4</span><br>(b) <span class="chem">2</span> <span class="unit">m s-2</span><br>(c) <span class="chem">20/3</span> <span class="unit">m</span><br>(d) <span class="chem">28/3</span> <span class="unit">m</span></p>',
      markscheme: [
        'M1: Solves <span class="chem">t^2 - 6t + 8 = (t - 2)(t - 4) = 0</span>.',
        'A1: <span class="chem">t = 2</span> and <span class="chem">t = 4</span>.',
        'M1: <span class="chem">a(t) = v\'(t) = 2t - 6</span>.',
        'A1: <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.',
        'M1: <span class="chem">s(5) = int_0^5 (t^2 - 6t + 8) dt = [t^3/3 - 3t^2 + 8t]_0^5</span>.',
        'A1: <span class="chem">20/3</span> <span class="unit">m</span>.',
        'M1: Splits the distance integral at <span class="chem">t = 2</span> and <span class="chem">t = 4</span> (or uses <span class="chem">s(0), s(2), s(4), s(5)</span>).',
        'A1: Legs of <span class="chem">20/3</span>, <span class="chem">4/3</span> and <span class="chem">4/3</span> <span class="unit">m</span>.',
        'A1: Total distance <span class="chem">28/3</span> <span class="unit">m</span>.'
      ],
      hints: [
        'Decode: “at rest” means <span class="chem">v = 0</span>; displacement uses <span class="chem">int v dt</span>; total distance uses <span class="chem">int |v| dt</span>, so you must split at every time from (a).',
        'Let <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (this already has <span class="chem">s(0) = 0</span>). Find <span class="chem">s(2)</span>, <span class="chem">s(4)</span> and <span class="chem">s(5)</span>.'
      ],
      solution: '<p>(a) <span class="chem">(t - 2)(t - 4) = 0</span>, so <span class="chem">t = 2</span> or <span class="chem">t = 4</span>.<br>(b) <span class="chem">a(t) = 2t - 6</span>, so <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.<br>(c) <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (with <span class="chem">s(0) = 0</span>), so <span class="chem">s(5) = 125/3 - 75 + 40 = 20/3</span> <span class="unit">m</span>.<br>(d) <span class="chem">s(2) = 8/3 - 12 + 16 = 20/3</span>, <span class="chem">s(4) = 64/3 - 48 + 32 = 16/3</span>. Distance <span class="chem">= |20/3 - 0| + |16/3 - 20/3| + |20/3 - 16/3| = 20/3 + 4/3 + 4/3 = 28/3</span> <span class="unit">m</span>.</p>'
    },
    {
      id: 't5-2-q044',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5',
      type: 'numeric',
      marks: 4,
      stem: '<p>The gradient of a curve is given by <span class="chem">dy/dx = 6x - 4/x^3</span>, for <span class="chem">x &gt; 0</span>. The curve passes through the point <span class="chem">(1, 2)</span>. Find the value of <span class="chem">y</span> when <span class="chem">x = 2</span>.</p>',
      answer: 9.5,
      hints: [
        'Write <span class="chem">-4/x^3 = -4x^{-3}</span>; integrating gives <span class="chem">-4x^{-2}/(-2) = 2x^{-2}</span>.',
        'So <span class="chem">y = 3x^2 + 2/x^2 + C</span>. Use the point <span class="chem">(1, 2)</span> to find <span class="chem">C</span>.'
      ],
      solution: '<p><span class="chem">y = int (6x - 4x^{-3}) dx = 3x^2 + 2x^{-2} + C</span>. At <span class="chem">(1, 2)</span>: <span class="chem">3 + 2 + C = 2</span>, so <span class="chem">C = -3</span>. When <span class="chem">x = 2</span>: <span class="chem">y = 12 + 2/4 - 3 = 9.5</span> (or <span class="chem">19/2</span>).</p>'
    },
    {
      id: 't5-2-q045',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10',
      type: 'numeric',
      marks: 5,
      stem: '<p>A function <span class="chem">f</span> has derivative <span class="chem">f\'(x) = 2 cos(2x) + sin x</span>, and the graph of <span class="chem">f</span> passes through the point <span class="chem">(pi, 3)</span>. Find the exact value of <span class="chem">f(pi/3)</span>.</p>',
      answer: 2.3660254038,
      exact: true,
      answerInput: '(3 + sqrt(3))/2',
      hints: [
        'Integrate term by term: <span class="chem">int 2 cos(2x) dx = sin(2x)</span> and <span class="chem">int sin x dx = -cos x</span>.',
        'Use <span class="chem">f(pi) = 3</span>, remembering <span class="chem">sin(2pi) = 0</span> and <span class="chem">cos pi = -1</span>, to find <span class="chem">C</span>.',
        'Then use <span class="chem">sin(2pi/3) = sqrt(3)/2</span> and <span class="chem">cos(pi/3) = 1/2</span>.'
      ],
      solution: '<p><span class="chem">f(x) = sin(2x) - cos x + C</span>. From <span class="chem">f(pi) = 3</span>: <span class="chem">0 - (-1) + C = 3</span>, so <span class="chem">C = 2</span>. Then <span class="chem">f(pi/3) = sin(2pi/3) - cos(pi/3) + 2 = sqrt(3)/2 - 1/2 + 2 = (3 + sqrt(3))/2</span>.</p>'
    },
    {
      id: 't5-2-q046',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>The curves <span class="chem">y = x^3</span> and <span class="chem">y = 4x</span> enclose two finite regions. A student writes: “The area enclosed is <span class="chem">int_{-2}^2 (4x - x^3) dx = 0</span>, so the curves enclose no area.” Find the correct total area of the two regions.</p>',
      answer: 8,
      hints: [
        'Decode: the student used one integral across both regions. Find where the curves meet and which curve is on top in <strong>each</strong> region; the upper curve swaps at <span class="chem">x = 0</span>.',
        '<span class="chem">x^3 = 4x</span> gives <span class="chem">x = -2, 0, 2</span>. On <span class="chem">(0, 2)</span>, <span class="chem">4x &gt; x^3</span> (try <span class="chem">x = 1</span>); on <span class="chem">(-2, 0)</span>, <span class="chem">x^3 &gt; 4x</span> (try <span class="chem">x = -1</span>).',
        'Compute <span class="chem">int_0^2 (4x - x^3) dx</span>, then use symmetry (or integrate <span class="chem">x^3 - 4x</span> on <span class="chem">[-2, 0]</span>).'
      ],
      solution: '<p>Decode: area between curves means (upper − lower) on each interval; the curves cross at <span class="chem">x = 0</span>, so the upper curve changes there. Intersections: <span class="chem">x^3 - 4x = x(x - 2)(x + 2) = 0</span>. On <span class="chem">[0, 2]</span>: <span class="chem">int_0^2 (4x - x^3) dx = [2x^2 - x^4/4]_0^2 = 8 - 4 = 4</span>. On <span class="chem">[-2, 0]</span>: <span class="chem">int_{-2}^0 (x^3 - 4x) dx = [x^4/4 - 2x^2]_{-2}^0 = 0 - (4 - 8) = 4</span>. Total area <span class="chem">= 8</span>. The student’s integral is 0 because the two pieces have opposite signs and cancel.</p>'
    },
    {
      id: 't5-2-q047',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.6, 5.10, 5.11',
      type: 'short',
      marks: 5,
      stem: '<p>(a) Find <span class="chem">d/dx (x ln x)</span>. <strong>[2 marks]</strong><br>(b) Hence find the exact value of <span class="chem">int_1^e ln x dx</span>. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">ln x + 1</span><br>(b) <span class="chem">1</span></p>',
      markscheme: [
        'M1: Product rule with <span class="chem">u = x</span>, <span class="chem">v = ln x</span>.',
        'A1: <span class="chem">d/dx (x ln x) = ln x + 1</span>.',
        'M1: Integrates (a): <span class="chem">x ln x = int ln x dx + int 1 dx</span>, i.e. <span class="chem">int ln x dx = x ln x - x + C</span>.',
        'A1: Substitutes the limits: <span class="chem">(e ln e - e) - (1 ln 1 - 1)</span>.',
        'A1: <span class="chem">= 0 - (-1) = 1</span>.'
      ],
      hints: [
        'For (a), the product rule gives <span class="chem">1 × ln x + x × (1/x)</span>.',
        '“Hence”: integrate both sides of (a) from 1 to e: <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e</span>, then subtract <span class="chem">int_1^e 1 dx</span>.'
      ],
      solution: '<p>(a) <span class="chem">d/dx (x ln x) = ln x + x(1/x) = ln x + 1</span>.<br>(b) From (a), <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e = e - 0 = e</span>. Since <span class="chem">int_1^e 1 dx = e - 1</span>, <span class="chem">int_1^e ln x dx = e - (e - 1) = 1</span>.</p>'
    },
    {
      id: 't5-2-q048',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 4,
      stem: '<p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (2x - 1) dx = 12</span>, find the value of <span class="chem">k</span>.</p>',
      answer: 4,
      hints: [
        'Integrate to get an equation in <span class="chem">k</span>: <span class="chem">[x^2 - x]_1^k = k^2 - k - 0</span>.',
        'Solve <span class="chem">k^2 - k - 12 = 0</span> and use the condition <span class="chem">k &gt; 1</span> to choose the root.'
      ],
      solution: '<p><span class="chem">int_1^k (2x - 1) dx = [x^2 - x]_1^k = (k^2 - k) - (1 - 1) = k^2 - k</span>. So <span class="chem">k^2 - k - 12 = 0</span>, <span class="chem">(k - 4)(k + 3) = 0</span>. Since <span class="chem">k &gt; 1</span>, <span class="chem">k = 4</span> (reject <span class="chem">k = -3</span>).</p>'
    },
    {
      id: 't5-2-q049',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>The curve <span class="chem">y = x^2 - 4</span> and the line <span class="chem">y = 2x - 1</span> enclose a finite region <span class="chem">R</span>. The <span class="chem">x</span>-axis passes through <span class="chem">R</span>, so part of <span class="chem">R</span> lies above the <span class="chem">x</span>-axis and part lies below it. Find the exact area of <span class="chem">R</span>.</p>',
      answer: 10.6666666667,
      exact: true,
      answerInput: '32/3',
      hints: [
        'Decode: the region asked for is enclosed by the curve and the line only. The <span class="chem">x</span>-axis is a distraction: “upper minus lower” works even where both are below the axis, so do not split at the axis.',
        'Solve <span class="chem">x^2 - 4 = 2x - 1</span>: <span class="chem">x^2 - 2x - 3 = 0</span>, so <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. The line is above the curve between them (test <span class="chem">x = 0</span>).',
        'Evaluate <span class="chem">int_{-1}^3 ((2x - 1) - (x^2 - 4)) dx = int_{-1}^3 (3 + 2x - x^2) dx</span>.'
      ],
      solution: '<p>Decode: area between a line and a curve; the axis plays no part. Intersections: <span class="chem">(x - 3)(x + 1) = 0</span>, so <span class="chem">x = -1, 3</span>. At <span class="chem">x = 0</span>, the line gives <span class="chem">-1</span> and the curve <span class="chem">-4</span>, so the line is on top. <span class="chem">A = int_{-1}^3 (3 + 2x - x^2) dx = [3x + x^2 - x^3/3]_{-1}^3 = (9 + 9 - 9) - (-3 + 1 + 1/3) = 9 + 5/3 = 32/3</span>.</p>'
    },
    {
      id: 't5-2-q050',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.9',
      type: 'short',
      marks: 10,
      stem: '<p>A particle moves along a straight line. Its acceleration is <span class="chem">a(t) = 6t - 6</span> <span class="unit">m s-2</span>, for <span class="chem">t &gt;= 0</span> seconds. Its initial velocity is <span class="chem">-9</span> <span class="unit">m s-1</span>, and it passes through a fixed point <span class="chem">O</span> on the line when <span class="chem">t = 1</span>. Let <span class="chem">s(t)</span> be its displacement from <span class="chem">O</span>.<br>(a) Find an expression for the velocity <span class="chem">v(t)</span>. <strong>[2 marks]</strong><br>(b) Find an expression for <span class="chem">s(t)</span>. <strong>[3 marks]</strong><br>(c) Find the distance of the particle from <span class="chem">O</span> when it is first at rest. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle in the first 4 seconds. <strong>[3 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">v(t) = 3t^2 - 6t - 9</span><br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span><br>(c) <span class="chem">16</span> <span class="unit">m</span><br>(d) <span class="chem">34</span> <span class="unit">m</span></p>',
      markscheme: [
        'M1: Integrates <span class="chem">a(t)</span> and uses <span class="chem">v(0) = -9</span>.',
        'A1: <span class="chem">v(t) = 3t^2 - 6t - 9</span>.',
        'M1: Integrates: <span class="chem">s(t) = t^3 - 3t^2 - 9t + C</span>.',
        'M1: Uses <span class="chem">s(1) = 0</span> (not <span class="chem">s(0) = 0</span>): <span class="chem">1 - 3 - 9 + C = 0</span>.',
        'A1: <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span>.',
        'M1: Solves <span class="chem">v = 3(t - 3)(t + 1) = 0</span>, giving <span class="chem">t = 3</span> (rejecting <span class="chem">t = -1</span>).',
        'A1: <span class="chem">s(3) = -16</span>, so the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span>.',
        'M1: Uses <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = -9</span> (or splits <span class="chem">int_0^4 |v| dt</span> at <span class="chem">t = 3</span>).',
        'A1: Legs of <span class="chem">27</span> and <span class="chem">7</span> <span class="unit">m</span>.',
        'A1: Total distance <span class="chem">34</span> <span class="unit">m</span>.'
      ],
      hints: [
        'Decode: two boundary conditions at <strong>different</strong> times. “Initial velocity” is <span class="chem">v(0) = -9</span>; “passes through O when t = 1” is <span class="chem">s(1) = 0</span>, so the particle does not start at <span class="chem">O</span>.',
        'After (b), <span class="chem">s(0) = 11</span>: the particle starts 11 m from <span class="chem">O</span>. “First at rest” means the first <span class="chem">t &gt;= 0</span> with <span class="chem">v(t) = 0</span>.',
        'For (d), the particle turns at <span class="chem">t = 3</span>, so add <span class="chem">|s(3) - s(0)|</span> and <span class="chem">|s(4) - s(3)|</span>.'
      ],
      solution: '<p>Decode: the constants come from <span class="chem">v(0) = -9</span> and <span class="chem">s(1) = 0</span>, and “distance from O” is <span class="chem">|s|</span>.<br>(a) <span class="chem">v(t) = 3t^2 - 6t + C_1</span>; <span class="chem">v(0) = -9</span> gives <span class="chem">C_1 = -9</span>, so <span class="chem">v(t) = 3t^2 - 6t - 9</span>.<br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + C_2</span>; <span class="chem">s(1) = 1 - 3 - 9 + C_2 = 0</span> gives <span class="chem">C_2 = 11</span>.<br>(c) <span class="chem">v(t) = 3(t^2 - 2t - 3) = 3(t - 3)(t + 1) = 0</span>, so <span class="chem">t = 3</span> (as <span class="chem">t &gt;= 0</span>). <span class="chem">s(3) = 27 - 27 - 27 + 11 = -16</span>: the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span> (on the negative side).<br>(d) <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = 64 - 48 - 36 + 11 = -9</span>. Distance <span class="chem">= |-16 - 11| + |-9 - (-16)| = 27 + 7 = 34</span> <span class="unit">m</span>.</p>'
    },
    {
      id: 't5-2-q051',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>The line <span class="chem">y = kx</span>, where <span class="chem">k &gt; 0</span>, and the curve <span class="chem">y = x^2</span> enclose a region of area <span class="chem">36</span> square units. Find the value of <span class="chem">k</span>.</p>',
      answer: 6,
      hints: [
        'Decode: the unknown <span class="chem">k</span> appears in both the integrand and a limit. Find the intersections in terms of <span class="chem">k</span>, write the area as an expression in <span class="chem">k</span>, then set it equal to 36.',
        'The curves meet where <span class="chem">x^2 = kx</span>, i.e. <span class="chem">x = 0</span> and <span class="chem">x = k</span>. The line is on top for <span class="chem">0 &lt; x &lt; k</span>.',
        'Show that <span class="chem">int_0^k (kx - x^2) dx = k^3/6</span>.'
      ],
      solution: '<p>Decode: area as a function of the parameter. Intersections at <span class="chem">x = 0</span> and <span class="chem">x = k</span>, with <span class="chem">kx &gt;= x^2</span> between them. <span class="chem">A = int_0^k (kx - x^2) dx = [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6</span>. Setting <span class="chem">k^3/6 = 36</span> gives <span class="chem">k^3 = 216</span>, so <span class="chem">k = 6</span>.</p>'
    },
    {
      id: 't5-2-q052',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 3.6, 5.10, 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Find the exact value of <span class="chem">int_0^{pi/2} sin(2x) cos^2 x dx</span>.</p>',
      answer: 0.5,
      exact: true,
      answerInput: '1/2',
      hints: [
        'Decode: this is a reverse chain rule integral in disguise. Rewrite <span class="chem">sin(2x)</span> with the double-angle identity so that the integrand becomes (a constant times) <span class="chem">g\'(x) [g(x)]^n</span>.',
        '<span class="chem">sin(2x) cos^2 x = 2 sin x cos^3 x</span>. With <span class="chem">g(x) = cos x</span>, <span class="chem">g\'(x) = -sin x</span>.',
        'So <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.'
      ],
      solution: '<p>Decode: double angle, then inspection. <span class="chem">sin(2x) cos^2 x = 2 sin x cos x × cos^2 x = 2 sin x cos^3 x</span>. Since <span class="chem">d/dx (cos^4 x) = -4 sin x cos^3 x</span>, <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Then <span class="chem">[-(1/2) cos^4 x]_0^{pi/2} = 0 - (-(1/2)(1)) = 1/2</span>.</p>'
    },
    {
      id: 't5-2-q053',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Let <span class="chem">f(x) = 3x^2 - 12</span>. Region <span class="chem">P</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the <span class="chem">y</span>-axis, for <span class="chem">0 &lt;= x &lt;= 2</span>. Region <span class="chem">Q</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = b</span>, for <span class="chem">2 &lt;= x &lt;= b</span>. The regions <span class="chem">P</span> and <span class="chem">Q</span> have equal areas. Find the exact value of <span class="chem">b</span>.</p>',
      answer: 3.4641016151,
      exact: true,
      answerInput: '2sqrt(3)',
      hints: [
        'Decode: <span class="chem">P</span> is below the axis and <span class="chem">Q</span> is above it. “Equal areas” means their signed integrals cancel, so the condition is simply <span class="chem">int_0^b f(x) dx = 0</span>.',
        '<span class="chem">int_0^b (3x^2 - 12) dx = b^3 - 12b</span>.',
        'Solve <span class="chem">b^3 - 12b = 0</span> and use <span class="chem">b &gt; 2</span>.'
      ],
      solution: '<p>Decode: area of <span class="chem">P</span> = <span class="chem">-int_0^2 f</span> and area of <span class="chem">Q</span> = <span class="chem">int_2^b f</span>; setting them equal gives <span class="chem">int_0^2 f + int_2^b f = int_0^b f = 0</span>. Now <span class="chem">int_0^b (3x^2 - 12) dx = [x^3 - 12x]_0^b = b^3 - 12b = b(b^2 - 12) = 0</span>. Since <span class="chem">b &gt; 2</span>, <span class="chem">b = sqrt(12) = 2sqrt(3)</span>. (Check: area of <span class="chem">P</span> is <span class="chem">|8 - 24| = 16</span>, and area of <span class="chem">Q</span> is <span class="chem">0 - (8 - 24) = 16</span>.)</p>'
    },
    {
      id: 't5-2-q054',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.10, 5.11',
      type: 'short',
      marks: 10,
      stem: '<p>The region <span class="chem">R</span> is enclosed by the curve <span class="chem">y = sin x</span> and the <span class="chem">x</span>-axis, for <span class="chem">0 &lt;= x &lt;= pi</span>.<br>(a) Show that the area of <span class="chem">R</span> is <span class="chem">2</span>. <strong>[2 marks]</strong><br>The line <span class="chem">y = mx</span>, where <span class="chem">0 &lt; m &lt; 1</span>, meets the curve at the origin and at the point where <span class="chem">x = a</span>, with <span class="chem">0 &lt; a &lt; pi</span>.<br>(b) Show that the area of the region enclosed between the curve and the line is <span class="chem">1 - cos a - (a sin a)/2</span>. <strong>[4 marks]</strong><br>(c) The line divides <span class="chem">R</span> into two parts of equal area. Find the value of <span class="chem">a</span> and the value of <span class="chem">m</span>, each correct to 3 significant figures. <strong>[4 marks]</strong></p>',
      answer: '<p>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = 1 + 1 = 2</span><br>(b) <span class="chem">int_0^a (sin x - mx) dx = 1 - cos a - m a^2/2</span>, and <span class="chem">m a = sin a</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span><br>(c) <span class="chem">a = 2.46</span>, <span class="chem">m = 0.257</span></p>',
      markscheme: [
        'M1: <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi</span>.',
        'A1: <span class="chem">= -cos pi + cos 0 = 1 + 1</span>. AG: area of <span class="chem">R = 2</span>; the given line itself earns no mark.',
        'M1: Area <span class="chem">= int_0^a (sin x - mx) dx</span> (curve above the line on <span class="chem">(0, a)</span>).',
        'A1: <span class="chem">= [-cos x - m x^2/2]_0^a = 1 - cos a - m a^2/2</span>.',
        'M1: Uses the intersection condition <span class="chem">sin a = m a</span>, i.e. <span class="chem">m = (sin a)/a</span>.',
        'A1: Substitutes: <span class="chem">m a^2/2 = (a sin a)/2</span>. AG: area <span class="chem">= 1 - cos a - (a sin a)/2</span>; the given line itself earns no mark.',
        'M1: Equal parts means the region between the curve and the line has area <span class="chem">1</span> (half of 2).',
        'A1: <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>.',
        'A1: <span class="chem">a = 2.46</span> (GDC, 2.4587…).',
        'A1: <span class="chem">m = (sin a)/a = 0.257</span> (0.25665…).'
      ],
      hints: [
        'Decode: the line cuts <span class="chem">R</span> into a piece between the curve and the line, and a piece under the line plus the rest. “Two parts of equal area” means the piece between the curve and the line has area <span class="chem">1</span>.',
        'For (b), you need two facts: (upper − lower) on <span class="chem">[0, a]</span> is <span class="chem">sin x - mx</span>, and <span class="chem">x = a</span> is on both graphs, so <span class="chem">sin a = ma</span>. Use the second to remove <span class="chem">m</span>.',
        'For (c), solve <span class="chem">cos a + (a sin a)/2 = 0</span> on your GDC (radians) for <span class="chem">0 &lt; a &lt; pi</span>, then <span class="chem">m = (sin a)/a</span>.'
      ],
      solution: '<p>Decode: “equal parts” is a condition on the area between curve and line, which (b) gives as a function of <span class="chem">a</span>; set it to half of (a).<br>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = -(-1) - (-1) = 2</span>.<br>(b) On <span class="chem">(0, a)</span>, <span class="chem">sin x &gt; mx</span>, so the area is <span class="chem">int_0^a (sin x - mx) dx = [-cos x - mx^2/2]_0^a = 1 - cos a - ma^2/2</span>. The point <span class="chem">x = a</span> lies on both graphs, so <span class="chem">ma = sin a</span> and <span class="chem">ma^2/2 = (a sin a)/2</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span>.<br>(c) Each part has area <span class="chem">1</span>, so <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>. The GDC gives <span class="chem">a = 2.45871…</span> (the only root in <span class="chem">(0, pi)</span>), so <span class="chem">a = 2.46</span> and <span class="chem">m = sin(2.45871…)/2.45871… = 0.256649… ≈ 0.257</span>.</p>'
    },
    {
      id: 't5-2-q055',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>A gardener’s flower bed is the region in the first quadrant enclosed by the curve <span class="chem">y = 4 - x^2</span> and the coordinate axes (units in metres). A straight path is to be laid along a vertical line <span class="chem">x = p</span> so that the bed is split into two parts of equal area. Find the value of <span class="chem">p</span>, correct to 3 significant figures.</p>',
      answer: 0.69459271067,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Decode: find the whole area first, then find the upper limit <span class="chem">p</span> for which <span class="chem">int_0^p (4 - x^2) dx</span> is half of it. The unknown is a limit of integration.',
        'The whole bed has area <span class="chem">int_0^2 (4 - x^2) dx = 16/3</span>, so you need <span class="chem">int_0^p (4 - x^2) dx = 8/3</span>.',
        'This gives the cubic <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Solve it on your GDC and choose the root with <span class="chem">0 &lt; p &lt; 2</span>.'
      ],
      solution: '<p>Decode: “split into two parts of equal area” by a vertical line means <span class="chem">int_0^p f = (1/2) int_0^2 f</span>. The bed meets the <span class="chem">x</span>-axis at <span class="chem">x = 2</span> and has area <span class="chem">[4x - x^3/3]_0^2 = 8 - 8/3 = 16/3</span>. So <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Its roots are about <span class="chem">-3.76</span>, <span class="chem">0.695</span> and <span class="chem">3.06</span>; only <span class="chem">p = 0.69459…</span> lies in <span class="chem">(0, 2)</span>. So <span class="chem">p = 0.695</span> <span class="unit">m</span> (3 s.f.). The path is not at <span class="chem">x = 1</span>, because the bed is taller near the <span class="chem">y</span>-axis.</p>'
    },
    {
      id: 't5-2-q056',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.9, 5.10',
      type: 'numeric',
      marks: 6,
      stem: '<p>Two runners, Ana and Ben, start together from the same point on a long straight track at <span class="chem">t = 0</span> and run in the same direction. Ana’s velocity is <span class="chem">v_A(t) = 2 + sin t</span> <span class="unit">m s-1</span> and Ben’s velocity is <span class="chem">v_B(t) = 0.5t</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Find the time when the runners are next level with each other. Give your answer correct to 3 significant figures.</p>',
      answer: 8.8278675048,
      sigfigs: 3,
      unit: 's',
      hints: [
        'Decode: “level with each other” means equal <strong>displacements</strong> from the start, not equal velocities. Find each displacement by integrating with <span class="chem">s(0) = 0</span>, then solve <span class="chem">s_A(t) = s_B(t)</span> for <span class="chem">t &gt; 0</span>.',
        '<span class="chem">s_A(t) = 2t + 1 - cos t</span> (note the constant: <span class="chem">s_A(0) = 0</span> needs the <span class="chem">+1</span>) and <span class="chem">s_B(t) = t^2/4</span>.',
        'Graph <span class="chem">y = 2x + 1 - cos x - x^2/4</span> (radians) and find its first zero after <span class="chem">x = 0</span>.'
      ],
      solution: '<p>Decode: meeting means equal positions. <span class="chem">s_A(t) = int_0^t (2 + sin u) du = 2t - cos t + 1</span> and <span class="chem">s_B(t) = int_0^t 0.5u du = t^2/4</span>. Solve <span class="chem">2t + 1 - cos t = t^2/4</span>. Apart from <span class="chem">t = 0</span>, the GDC gives <span class="chem">t = 8.82786…</span>, so they are level again after <span class="chem">8.83</span> <span class="unit">s</span> (3 s.f.). (Equal velocities, <span class="chem">2 + sin t = 0.5t</span>, happen earlier, at about <span class="chem">t = 3.43</span> s; that is when Ben is furthest behind, not when he catches up.)</p>'
    },
    {
      id: 't5-2-q057',
      topic: 't5-2',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.9',
      type: 'numeric',
      marks: 5,
      stem: '<p>A particle moves in a straight line with velocity <span class="chem">v(t) = 2t - 5 + 3 cos(2t)</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the distance travelled by the particle during the third second of its motion. Give your answer correct to 3 significant figures.</p>',
      answer: 1.9146563176,
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Decode: “the third second” is the interval from <span class="chem">t = 2</span> to <span class="chem">t = 3</span> (the first second is <span class="chem">0 &lt;= t &lt;= 1</span>). “Distance travelled” means <span class="chem">int |v| dt</span>.',
        'Check the sign of <span class="chem">v</span> on <span class="chem">[2, 3]</span> (radians): it changes sign at <span class="chem">t ≈ 2.392</span>.',
        'Evaluate <span class="chem">int_2^3 |2t - 5 + 3 cos(2t)| dt</span> on your GDC.'
      ],
      solution: '<p>Decode: third second = <span class="chem">[2, 3]</span>, and distance = <span class="chem">int |v|</span>. In radians, <span class="chem">v(2) = -1 + 3 cos 4 ≈ -2.96 &lt; 0</span> and <span class="chem">v(3) = 1 + 3 cos 6 ≈ 3.88 &gt; 0</span>, with a single zero at <span class="chem">t = 2.39217…</span>. So the distance is <span class="chem">int_2^3 |v(t)| dt = 0.59929… + 1.31537… = 1.91466…</span>, i.e. <span class="chem">1.91</span> <span class="unit">m</span> (3 s.f.). The displacement over the same second is only <span class="chem">0.716</span> <span class="unit">m</span>.</p>'
    },
    {
      id: 't5-2-q058',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.10',
      type: 'short',
      marks: 9,
      stem: '<p>A seedling is planted when it is <span class="chem">5</span> <span class="unit">cm</span> tall. Its height <span class="chem">h</span> <span class="unit">cm</span> after <span class="chem">t</span> weeks grows at the rate <span class="chem">dh/dt = 8/(t + 2) + 0.4 cos t</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.<br>(a) Find an expression for <span class="chem">h</span> in terms of <span class="chem">t</span>. <strong>[5 marks]</strong><br>(b) Find the height of the seedling after 10 weeks. <strong>[2 marks]</strong><br>(c) Find the time when the seedling is first <span class="chem">15</span> <span class="unit">cm</span> tall. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>',
      answer: '<p>(a) <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span><br>(b) <span class="chem">19.1</span> <span class="unit">cm</span><br>(c) <span class="chem">t = 5.28</span> weeks</p>',
      markscheme: [
        'M1: Integrates <span class="chem">dh/dt</span> term by term.',
        'A1: <span class="chem">8 ln(t + 2)</span>.',
        'A1: <span class="chem">+ 0.4 sin t + C</span>.',
        'M1: Uses <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>.',
        'A1: <span class="chem">C = 5 - 8 ln 2</span>, so <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>.',
        'M1: Substitutes <span class="chem">t = 10</span> (radians): <span class="chem">8 ln 12 + 0.4 sin 10 + 5 - 8 ln 2</span>.',
        'A1: <span class="chem">19.1</span> <span class="unit">cm</span> (19.116…).',
        'M1: Solves <span class="chem">h(t) = 15</span> on the GDC.',
        'A1: <span class="chem">t = 5.28</span> weeks.'
      ],
      hints: [
        'Decode: “planted when it is 5 cm tall” is the boundary condition <span class="chem">h(0) = 5</span>. Integrate the rate, then use it to find the constant.',
        '<span class="chem">int 8/(t + 2) dt = 8 ln(t + 2)</span> (no modulus needed as <span class="chem">t + 2 &gt; 0</span>) and <span class="chem">int 0.4 cos t dt = 0.4 sin t</span>.',
        'For (c), graph <span class="chem">h(t)</span> and <span class="chem">y = 15</span> in radian mode and find the first intersection.'
      ],
      solution: '<p>(a) <span class="chem">h = int (8/(t + 2) + 0.4 cos t) dt = 8 ln(t + 2) + 0.4 sin t + C</span>. Since <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>, so <span class="chem">C = 5 - 8 ln 2</span> and <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span> (equivalently <span class="chem">8 ln((t + 2)/2) + 0.4 sin t + 5</span>).<br>(b) <span class="chem">h(10) = 8 ln 6 + 0.4 sin 10 + 5 = 14.334… - 0.2176… + 5 = 19.116…</span>, so <span class="chem">19.1</span> <span class="unit">cm</span>.<br>(c) <span class="chem">dh/dt &gt; 0</span> throughout, so <span class="chem">h</span> is increasing and <span class="chem">h(t) = 15</span> has one solution: <span class="chem">t = 5.2810…</span>, i.e. <span class="chem">5.28</span> weeks.</p>'
    },
    {
      id: 't5-2-q059',
      topic: 't5-2',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>The region <span class="chem">R</span> is enclosed by the curves <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> and the <span class="chem">y</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>',
      answer: 3.2675586906,
      sigfigs: 3,
      hints: [
        'Decode: the left edge of <span class="chem">R</span> is the <span class="chem">y</span>-axis (<span class="chem">x = 0</span>) and the right edge is where the two curves meet. Part of <span class="chem">R</span> is below the <span class="chem">x</span>-axis, but you still integrate (upper − lower).',
        'The GDC intersection of <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> is at <span class="chem">x ≈ 1.8312</span>; <span class="chem">sqrt(x)</span> is the upper curve on <span class="chem">(0, 1.8312)</span>.',
        'Evaluate <span class="chem">int_0^{1.8312} (sqrt(x) - x^2 + 2) dx</span>.'
      ],
      solution: '<p>The curves meet (for <span class="chem">x &gt;= 0</span>) at <span class="chem">x = c = 1.83117…</span>. On <span class="chem">[0, c]</span>, <span class="chem">sqrt(x) &gt;= x^2 - 2</span> (e.g. at <span class="chem">x = 0</span>: <span class="chem">0 &gt; -2</span>). Area <span class="chem">= int_0^c (sqrt(x) - (x^2 - 2)) dx = 3.26755…</span>, i.e. <span class="chem">3.27</span> (3 s.f.). Splitting at the <span class="chem">x</span>-axis is unnecessary: the integrand (upper − lower) is never negative.</p>'
    }
  ]);
})();
