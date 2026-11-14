/* ==========================================================================
   Analysis Lab — widgets-t1-5.js
   Interactive widgets for Topic 1.5: Mathematical proof and linear systems
     1. t1-5.induction-domino  Mathematical induction domino & step verifier
     2. t1-5.systems-3d        3D planes & 3×3 linear system classifier
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;

  /* ------------------------------------------------------------------------
     1. Mathematical Induction Domino & Step Verifier
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-5.induction-domino', function (api) {
    var t = api.t;
    var selProp = api.select({
      label: t('Proposition P(n)'),
      value: 'squares',
      options: [
        { value: 'squares', label: t('Sum of squares: Σ r² = n(n+1)(2n+1)/6') },
        { value: 'odd', label: t('Sum of odd integers: Σ (2r − 1) = n²') },
        { value: 'div', label: t('Divisibility: 5²ⁿ − 1 is divisible by 24') }
      ],
      onChange: function () { update(); }
    });

    var sK = api.slider({
      label: t('Inductive step index k (proving P(k) ⇒ P(k+1))'),
      min: 1, max: 6, step: 1, value: 3,
      onInput: function () { update(); }
    });

    api.button(t('Step k → k + 1'), function () {
      var next = sK.value < 6 ? sK.value + 1 : 1;
      sK.set(next);
    });

    var outBase = api.readoutItem(t('1. Base case P(1)'));
    var outHyp = api.readoutItem(t('2. Inductive hypothesis P(k)'));
    var outStep = api.readoutItem(t('3. Inductive step P(k + 1)'));
    var outVal = api.readoutItem(t('Numerical check at n = k + 1'));

    var cv = api.canvas({
      height: 210,
      label: t('Domino chain showing P(1) through P(7) falling by mathematical induction')
    });

    function updateReadouts(mode, k) {
      var kp1 = k + 1;
      if (mode === 'squares') {
        var sk = (k * (k + 1) * (2 * k + 1)) / 6;
        var term = kp1 * kp1;
        var sk1 = sk + term;
        outBase('LHS = 1² = 1, RHS = 1(2)(3)/6 = 1 ✓');
        outHyp('Σ<sub>r=1</sub><sup>' + k + '</sup> r² = ' + k + '(' + kp1 + ')(' + (2 * k + 1) + ')/6 = ' + sk);
        outStep('S(' + k + ') + ' + kp1 + '² = ' + sk + ' + ' + term + ' = (' + kp1 + ')(' + (k + 2) + ')(' + (2 * kp1 + 1) + ')/6');
        outVal('P(' + kp1 + '): LHS = RHS = ' + sk1 + ' ✓');
      } else if (mode === 'odd') {
        var oddK = k * k;
        var nextOdd = 2 * k + 1;
        var oddK1 = kp1 * kp1;
        outBase('LHS = 2(1) − 1 = 1, RHS = 1² = 1 ✓');
        outHyp('Σ<sub>r=1</sub><sup>' + k + '</sup> (2r − 1) = ' + k + '² = ' + oddK);
        outStep(k + '² + (2(' + k + ') + 1) = (' + k + ' + 1)² = ' + kp1 + '²');
        outVal('P(' + kp1 + '): ' + oddK + ' + ' + nextOdd + ' = ' + oddK1 + ' ✓');
      } else {
        outBase('f(1) = 5² − 1 = 24 = 24 × 1 ✓');
        outHyp('Assume 5<sup>2(' + k + ')</sup> − 1 = 24A  ⇒  5<sup>2(' + k + ')</sup> = 24A + 1');
        outStep('f(' + kp1 + ') = 25 · 5<sup>2(' + k + ')</sup> − 1 = 25(24A + 1) − 1 = 24(25A + 1)');
        var exactVal = Math.pow(5, 2 * kp1) - 1;
        var mult = Math.round(exactVal / 24);
        outVal('At n = ' + kp1 + ': 24 × ' + mult.toLocaleString('en-US') + ' ✓');
      }
    }

    cv.draw(function (ctx, W, H) {
      var k = Math.round(sK.value);
      var col = api.color;
      var ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3');
      var line = col('--line-strong'), surface = col('--surface');
      var accent = col('--accent'), ahl = col('--ahl'), ok = col('--ok');
      var mono = col('--font-mono') || 'monospace', body = col('--font-body') || 'sans-serif';

      var nDom = 7;
      var padX = Math.max(28, W * 0.07);
      var availW = W - 2 * padX;
      var stepX = availW / (nDom - 1);
      var floorY = H - 46;
      var domW = Math.min(24, stepX * 0.34);
      var domH = Math.min(92, (H - 80) * 0.85);

      // Floor line
      ctx.strokeStyle = line;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(padX - 24, floorY);
      ctx.lineTo(W - padX + 24, floorY);
      ctx.stroke();

      // Draw dominoes P(1) ... P(7)
      for (var i = 1; i <= nDom; i++) {
        var cx = padX + (i - 1) * stepX;
        var fallen = i <= k;
        var isTarget = i === k + 1;
        var tilt = fallen ? 0.48 : (isTarget ? 0.24 : 0);
        var borderCol = i === 1 ? ok : (i === k ? accent : (isTarget ? ahl : line));
        var fillCol = fallen || isTarget ? surface : surface;

        ctx.save();
        ctx.translate(cx, floorY);
        ctx.rotate(tilt);

        // Domino body
        ctx.fillStyle = fillCol;
        ctx.strokeStyle = borderCol;
        ctx.lineWidth = (i === 1 || i === k || isTarget) ? 2.6 : 1.5;
        ctx.beginPath();
        ctx.rect(-domW / 2, -domH, domW, domH);
        ctx.fill();
        ctx.stroke();

        // Center divider line on domino
        ctx.strokeStyle = borderCol;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-domW / 2 + 3, -domH / 2);
        ctx.lineTo(domW / 2 - 3, -domH / 2);
        ctx.stroke();

        ctx.restore();

        // Label below floor
        ctx.font = (i === k || isTarget || i === 1 ? '600 ' : '400 ') + '12px ' + mono;
        ctx.fillStyle = i === 1 ? ok : (i === k ? accent : (isTarget ? ahl : ink3));
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText('P(' + i + ')', cx, floorY + 8);
        if (i === 1) {
          ctx.font = '11px ' + body;
          ctx.fillText(t('Base'), cx, floorY + 24);
        } else if (i === k) {
          ctx.font = '11px ' + body;
          ctx.fillText('n = k', cx, floorY + 24);
        } else if (isTarget) {
          ctx.font = '11px ' + body;
          ctx.fillText('n = k+1', cx, floorY + 24);
        }
      }

      // Draw curved implication arrow from P(k) to P(k+1)
      var xK = padX + (k - 1) * stepX + 10;
      var xK1 = padX + k * stepX + 4;
      var arcY = floorY - domH - 18;
      ctx.save();
      ctx.strokeStyle = ahl;
      ctx.fillStyle = ahl;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(xK, floorY - domH + 4);
      ctx.quadraticCurveTo((xK + xK1) / 2, arcY - 16, xK1, floorY - domH + 8);
      ctx.stroke();

      // Arrowhead at xK1
      ctx.beginPath();
      ctx.moveTo(xK1, floorY - domH + 8);
      ctx.lineTo(xK1 - 8, floorY - domH);
      ctx.lineTo(xK1 - 2, floorY - domH - 4);
      ctx.closePath();
      ctx.fill();

      ctx.font = '600 12px ' + mono;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('P(' + k + ') ⇒ P(' + (k + 1) + ')', (xK + xK1) / 2, arcY - 8);
      ctx.restore();
    });

    function update() {
      updateReadouts(selProp.value, Math.round(sK.value));
      api.redraw();
    }

    update();
  });

  /* ------------------------------------------------------------------------
     2. 3D Planes & 3×3 Linear System Classifier
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-5.systems-3d', function (api) {
    var t = api.t;
    var selCase = api.select({
      label: t('3 × 3 System Configuration'),
      value: 'unique',
      options: [
        { value: 'unique', label: t('Unique solution (k = 1): 3 planes meet at 1 point') },
        { value: 'infinite', label: t('Infinite solutions (k = 3): sheaf of 3 planes meeting on a line') },
        { value: 'prism', label: t('No solution (k = −3): 3 planes form a triangular prism') },
        { value: 'parallel', label: t('No solution: parallel planes') }
      ],
      onChange: update
    });

    var outSys = api.readoutItem(t('System used (worked example below)'), { text: true });
    outSys(t('x + y + z = 2, 2x + 3y + 4z = 5, 3x + 4y + (k² − 4)z = k + 4. The plane drawings are schematic.'));
    var outRow3 = api.readoutItem(t('Reduced Row 3: g(k)z = h(k)'));
    var outClass = api.readoutItem(t('Algebraic classification'));
    var outGeom = api.readoutItem(t('3D geometric intersection'));

    var viewerHost = S1.util.el('div');
    api.stage.appendChild(viewerHost);
    var v3d = null;

    function buildSpec(mode) {
      if (mode === 'unique') {
        outRow3('−8z = −2  (g(k) = −8 ≠ 0)');
        outClass(t('Unique solution: (x, y, z) = (5/4, 1/2, 1/4)'));
        outGeom(t('Three planes intersect at a single point P'));
        return {
          label: t('Three planes intersecting at a single unique point in 3D space'),
          height: 300,
          range: 4.5,
          planes: [
            { center: [0, 0, 0], normal: [1, 0.3, 0.2], size: 2.8, color: '--accent-soft', border: '--accent', alpha: 0.32, label: 'Π₁' },
            { center: [0, 0, 0], normal: [0.2, 1, 0.25], size: 2.8, color: '--ahl-soft', border: '--ahl', alpha: 0.32, label: 'Π₂' },
            { center: [0, 0, 0], normal: [0.2, 0.2, 1], size: 2.8, color: '--amber-soft', border: '--amber-line', alpha: 0.32, label: 'Π₃' }
          ],
          points: [
            { pos: [0, 0, 0], r: 6, color: '--ok', label: 'Unique point P' }
          ]
        };
      } else if (mode === 'infinite') {
        outRow3('0z = 0  (g(k) = 0 and h(k) = 0)');
        outClass(t('Infinitely many solutions: (x, y, z) = (1 + λ, 1 − 2λ, λ), λ ∈ ℝ'));
        outGeom(t('Sheaf of 3 planes sharing a common line of intersection'));
        return {
          label: t('Sheaf of three planes intersecting along a single common line'),
          height: 300,
          range: 4.5,
          planes: [
            { center: [0, 0, 0], normal: [1, 0, 0], size: 2.8, color: '--accent-soft', border: '--accent', alpha: 0.30, label: 'Π₁' },
            { center: [0, 0, 0], normal: [0, 1, 0], size: 2.8, color: '--ahl-soft', border: '--ahl', alpha: 0.30, label: 'Π₂' },
            { center: [0, 0, 0], normal: [1, 1, 0], size: 2.8, color: '--amber-soft', border: '--amber-line', alpha: 0.30, label: 'Π₃' }
          ],
          lines: [
            { from: [0, 0, -3.5], to: [0, 0, 3.5], color: '--ok', width: 3.5, label: 'Line of solutions (z = λ)' }
          ]
        };
      } else if (mode === 'prism') {
        outRow3('0z = −6  (g(k) = 0 and h(k) = −6 ≠ 0)');
        outClass(t('No solution (inconsistent system: 0 = −6)'));
        outGeom(t('Triangular prism: pairs of planes meet in 3 parallel lines'));
        return {
          label: t('Three planes forming a triangular prism with no common intersection'),
          height: 300,
          range: 4.5,
          planes: [
            { center: [1.1, 0, 0], normal: [1, 0, 0], size: 2.5, color: '--accent-soft', border: '--accent', alpha: 0.28, label: 'Π₁' },
            { center: [-0.55, 0.95, 0], normal: [-0.5, 0.866, 0], size: 2.5, color: '--ahl-soft', border: '--ahl', alpha: 0.28, label: 'Π₂' },
            { center: [-0.55, -0.95, 0], normal: [-0.5, -0.866, 0], size: 2.5, color: '--amber-soft', border: '--amber-line', alpha: 0.28, label: 'Π₃' }
          ],
          lines: [
            { from: [1.1, 1.9, -3], to: [1.1, 1.9, 3], color: '--bad', width: 2, dashed: true },
            { from: [1.1, -1.9, -3], to: [1.1, -1.9, 3], color: '--bad', width: 2, dashed: true },
            { from: [-2.2, 0, -3], to: [-2.2, 0, 3], color: '--bad', width: 2, dashed: true, label: '3 parallel lines' }
          ]
        };
      } else {
        outRow3('0z = 4  (g(k) = 0 and h(k) ≠ 0)');
        outClass(t('No solution (inconsistent: parallel planes never meet)'));
        outGeom(t('At least two planes are strictly parallel and distinct'));
        return {
          label: t('Three parallel distinct planes with no common intersection'),
          height: 300,
          range: 4.5,
          planes: [
            { center: [0, 0, 1.8], normal: [0, 0, 1], size: 2.7, color: '--accent-soft', border: '--accent', alpha: 0.30, label: 'Π₁' },
            { center: [0, 0, 0], normal: [0, 0, 1], size: 2.7, color: '--ahl-soft', border: '--ahl', alpha: 0.30, label: 'Π₂' },
            { center: [0, 0, -1.8], normal: [0, 0, 1], size: 2.7, color: '--amber-soft', border: '--amber-line', alpha: 0.30, label: 'Π₃' }
          ]
        };
      }
    }

    function update() {
      var spec = buildSpec(selCase.value);
      if (!v3d) v3d = S1.chart.view3d(viewerHost, spec);
      else v3d.setSpec(spec);
    }

    update();
    api.onCleanup(function () { if (v3d) v3d.destroy(); });
  });
})();
