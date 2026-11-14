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
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10',
      type: 'mcq',
      marks: 3,
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
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5',
      type: 'numeric',
      marks: 5,
      stem: '<p>A curve <span class="chem">y = f(x)</span> (<span class="chem">x &gt; 0</span>) has gradient <span class="chem">f\'(x) = 3x^2 - 4 / x^2</span> and passes through the point <span class="chem">(1, 7)</span>. Find the value of <span class="chem">f(2)</span>.</p>',
      answer: 12,
      tolerance: 0.01,
      hints: [
        'Rewrite <span class="chem">-4 / x^2</span> as <span class="chem">-4x^{-2}</span> before integrating.',
        'Find <span class="chem">f(x) = x^3 + 4/x + C</span>, use <span class="chem">f(1) = 7</span> to solve for <span class="chem">C</span>, then evaluate <span class="chem">f(2)</span>.'
      ],
      solution: '<p>Rewrite <span class="chem">f\'(x) = 3x^2 - 4x^{-2}</span>. Integrating gives <span class="chem">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>. Using <span class="chem">f(1) = 7</span>: <span class="chem">1^3 + 4/1 + C = 7 =&gt; C = 2</span>. Therefore <span class="chem">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span>.</p>'
    },
    {
      id: 't5-2-q003',
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
      level: 'sl',
      tier: 'foundation',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'numeric',
      marks: 3,
      stem: '<p>Evaluate the definite integral <span class="chem">int_0^{ln 3} 6e^{2x} dx</span>.</p>',
      answer: 24,
      tolerance: 0.01,
      hints: [
        'An antiderivative of <span class="chem">6e^{2x}</span> is <span class="chem">(6/2)e^{2x} = 3e^{2x}</span>.',
        'Recall that <span class="chem">e^{2 ln 3} = e^{ln(3^2)} = 9</span> and <span class="chem">e^0 = 1</span>.'
      ],
      solution: '<p><span class="chem">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>.</p>'
    },
    {
      id: 't5-2-q005',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>Given that <span class="chem">int_1^5 f(x) dx = 14</span> and <span class="chem">int_3^5 f(x) dx = 6</span>, find the value of <span class="chem">int_1^3 (3f(x) + 2) dx</span>.</p>',
      answer: 28,
      tolerance: 0.01,
      hints: [
        'Use additivity <span class="chem">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span> to find <span class="chem">int_1^3 f(x) dx</span>.',
        'Split the target integral: <span class="chem">3 int_1^3 f(x) dx + int_1^3 2 dx</span>, remembering <span class="chem">int_1^3 2 dx = 2(3 - 1)</span>.'
      ],
      solution: '<p>By additivity, <span class="chem">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>. By linearity, <span class="chem">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span>.</p>'
    },
    {
      id: 't5-2-q006',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'mcq',
      marks: 5,
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
        3: 'You differentiated (ln x)²/x instead of integrating it.'
      },
      hints: [
        'Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>.',
        'Change the limits: when <span class="chem">x = 1</span>, <span class="chem">u = ln 1 = 0</span>; when <span class="chem">x = e</span>, <span class="chem">u = ln e = 1</span>.'
      ],
      solution: '<p>Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>. The limits become <span class="chem">u = 0</span> to <span class="chem">u = 1</span>. Thus <span class="chem">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span>.</p>'
    },
    {
      id: 't5-2-q007',
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
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Find the total geometric area enclosed between the curve <span class="chem">y = 3x^2 - 6x</span>, the <span class="chem">x</span>-axis, and the vertical lines <span class="chem">x = 0</span> and <span class="chem">x = 3</span>.</p>',
      answer: 8,
      tolerance: 0.01,
      hints: [
        'First solve <span class="chem">3x^2 - 6x = 0</span> to see where the curve crosses the <span class="chem">x</span>-axis inside <span class="chem">[0, 3]</span>.',
        'The curve is below the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> and above it on <span class="chem">[2, 3]</span>, so compute <span class="chem">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span>.'
      ],
      solution: '<p>Setting <span class="chem">3x(x - 2) = 0</span> gives <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. On <span class="chem">[0, 2]</span>, <span class="chem">y &lt;= 0</span>: <span class="chem">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span>, giving area <span class="chem">4</span>. On <span class="chem">[2, 3]</span>, <span class="chem">y &gt;= 0</span>: <span class="chem">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>. Total enclosed area <span class="chem">= 4 + 4 = 8</span>.</p>'
    },
    {
      id: 't5-2-q009',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Find the exact area of the finite region enclosed between the parabola <span class="chem">y = 8 - x^2</span> and the line <span class="chem">y = 2x</span>.</p>',
      answer: 36,
      tolerance: 0.01,
      hints: [
        'Solve <span class="chem">8 - x^2 = 2x</span> to find the intersection <span class="chem">x</span>-coordinates.',
        'On <span class="chem">[-4, 2]</span>, <span class="chem">8 - x^2 &gt;= 2x</span>, so evaluate <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx</span>.'
      ],
      solution: '<p>Equating the curves: <span class="chem">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span>, so <span class="chem">x = -4</span> and <span class="chem">x = 2</span>. Since <span class="chem">8 - x^2 &gt;= 2x</span> on <span class="chem">[-4, 2]</span>, the area is <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span>.</p>'
    },
    {
      id: 't5-2-q010',
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
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.9, 5.11',
      type: 'numeric',
      marks: 5,
      stem: '<p>A particle moves along a straight line with velocity <span class="chem">v(t) = 4 sin(t) - t + 1</span> <span class="unit">m s-1</span> for <span class="chem">0 &lt;= t &lt;= 4</span> (where <span class="chem">t</span> is in seconds). Using your GDC, calculate the <strong>total distance travelled</strong> by the particle from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>, correct to 3 significant figures.</p>',
      answer: 10.7,
      tolerance: '1%',
      sigfigs: 3,
      unit: 'm',
      hints: [
        'Total distance travelled is <span class="chem">d = int_0^4 |v(t)| dt</span>, not <span class="chem">int_0^4 v(t) dt</span>.',
        'Make sure your GDC is in <strong>radian mode</strong> and enter <span class="mono">fnInt(abs(4*sin(t) - t + 1), t, 0, 4)</span>.'
      ],
      solution: '<p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.70</span> <span class="unit">s</span>.)</p>'
    },
    {
      id: 't5-2-q012',
      level: 'sl',
      tier: 'exam',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.9',
      type: 'mcq',
      marks: 5,
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
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.5, 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>The finite region enclosed between the curve <span class="chem">y = k x (4 - x)</span> (where <span class="chem">k &gt; 0</span>) and the <span class="chem">x</span>-axis has an area of <span class="chem">32</span> square units. Find the value of <span class="chem">k</span>.</p>',
      answer: 3,
      tolerance: 0.01,
      hints: [
        'The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.',
        'Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.'
      ],
      solution: '<p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>'
    },
    {
      id: 't5-2-q015',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 1 (No GDC)',
      syllabus: 'SL 5.10, 5.11',
      type: 'mcq',
      marks: 5,
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
        'Split the integral into <span class="chem">int_0^4 f(x + 2) dx + int_0^4 3 dx</span>.',
        'For the first integral, substitute <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>) and update the limits from <span class="chem">x = 0, 4</span> to <span class="chem">u = 2, 6</span>.'
      ],
      solution: '<p>Using linearity, <span class="chem">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>. Let <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>): when <span class="chem">x = 0</span>, <span class="chem">u = 2</span>; when <span class="chem">x = 4</span>, <span class="chem">u = 6</span>. So <span class="chem">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>. Adding <span class="chem">int_0^4 3 dx = 3(4 - 0) = 12</span> gives <span class="chem">10 + 12 = 22</span>.</p>'
    },
    {
      id: 't5-2-q016',
      level: 'sl',
      tier: 'challenge',
      paper: 'Paper 2 (GDC)',
      syllabus: 'SL 5.11',
      type: 'numeric',
      marks: 6,
      stem: '<p>Using your GDC, find the area of the finite region enclosed between the curves <span class="chem">y = 4 - x^2</span> and <span class="chem">y = e^{0.5x}</span>, correct to 3 significant figures.</p>',
      answer: 6.75,
      tolerance: '1%',
      sigfigs: 3,
      hints: [
        'Graph both curves on your GDC and find the two intersection <span class="chem">x</span>-coordinates: <span class="chem">a ≈ -1.9009</span> and <span class="chem">b ≈ 1.4069</span>.',
        'Store the exact intersection values (to full GDC precision) and evaluate <span class="chem">int_a^b ((4 - x^2) - e^{0.5x}) dx</span>.'
      ],
      solution: '<p>Solving <span class="chem">4 - x^2 = e^{0.5x}</span> on a GDC gives intersection points at <span class="chem">a ≈ -1.90090</span> and <span class="chem">b ≈ 1.40688</span>. Between these limits, <span class="chem">4 - x^2 &gt;= e^{0.5x}</span>, so <span class="chem">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span>, which rounds to <span class="chem">6.75</span> (3 s.f.).</p>'
    },
    {
      id: 't5-2-q017',
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
        '“Starts from rest” means <span class="chem">v(0) = 0</span>; use this to find the first constant of integration, then use <span class="chem">s(0) = 2</span> for the second.',
        'For part (b), solve <span class="chem">v(t) = 0</span> to find when the particle reverses direction before computing total distance.'
      ],
      solution: '<p>(a) Integrating <span class="chem">a(t) = 6t - 12</span> gives <span class="chem">v(t) = 3t^2 - 12t + C_1</span>. Since <span class="chem">v(0) = 0</span>, <span class="chem">C_1 = 0</span>, so <span class="chem">v(t) = 3t^2 - 12t</span>. Integrating again gives <span class="chem">s(t) = t^3 - 6t^2 + C_2</span>. Since <span class="chem">s(0) = 2</span>, <span class="chem">C_2 = 2</span>, so <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.<br>(b) Setting <span class="chem">v(t) = 3t(t - 4) = 0</span> gives <span class="chem">t = 0</span> and <span class="chem">t = 4</span> <span class="unit">s</span>. Evaluating position at the endpoints and turning time: <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = 64 - 96 + 2 = -30</span>, and <span class="chem">s(5) = 125 - 150 + 2 = -23</span>. Therefore, total distance <span class="chem">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class="unit">m</span>.</p>'
    }
  ]);
})();
