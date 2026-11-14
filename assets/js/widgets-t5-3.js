/* ==========================================================================
   Analysis Lab — widgets-t5-3.js
   Interactive visualisations for Topic 5.3 (AHL 5.12–5.17):
     - t5-3.lhopital-zoom: L'Hôpital's Rule Local Linearization Visualizer
     - t5-3.volume-rev:    Volume of Revolution Disc/Washer Explorer (2D + 3D)
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets || !S1.chart) return;
  var el = S1.util.el, fmt = S1.math.fmt, fixed = S1.math.fixed;

  /* --------------------------------------------------------------------------
     1. t5-3.lhopital-zoom
     Interactive L'Hôpital's Rule Local Linearization Visualizer on S1.chart.funcPlot
     -------------------------------------------------------------------------- */
  S1.widgets.register('t5-3.lhopital-zoom', function (api) {
    var t = api.t;
    var EXAMPLES = {
      sin_ln: {
        label: 'sin(2x) / ln(1 + x) as x → 0',
        a: 0,
        fName: 'f(x) = sin(2x)',
        gName: 'g(x) = ln(1 + x)',
        f: function (x) { return Math.sin(2 * x); },
        g: function (x) { return x > -0.999 ? Math.log(1 + x) : NaN; },
        fa1: 2,
        ga1: 1,
        limitStr: '2 / 1 = 2',
        testOffset: 0.35
      },
      exp_sin: {
        label: '(eˣ − 1) / sin(x) as x → 0',
        a: 0,
        fName: 'f(x) = eˣ − 1',
        gName: 'g(x) = sin(x)',
        f: function (x) { return Math.exp(x) - 1; },
        g: function (x) { return Math.sin(x); },
        fa1: 1,
        ga1: 1,
        limitStr: '1 / 1 = 1',
        testOffset: 0.4
      },
      ln_poly: {
        label: 'ln(x) / (x² − 1) as x → 1',
        a: 1,
        fName: 'f(x) = ln(x)',
        gName: 'g(x) = x² − 1',
        f: function (x) { return x > 0.001 ? Math.log(x) : NaN; },
        g: function (x) { return x * x - 1; },
        fa1: 1,
        ga1: 2,
        limitStr: '1 / 2 = 0.5',
        testOffset: 0.35
      },
      cos_pi2: {
        label: 'cos(x) / (2x − π) as x → π/2',
        a: Math.PI / 2,
        fName: 'f(x) = cos(x)',
        gName: 'g(x) = 2x − π',
        f: function (x) { return Math.cos(x); },
        g: function (x) { return 2 * x - Math.PI; },
        fa1: -1,
        ga1: 2,
        limitStr: '−1 / 2 = −0.5',
        testOffset: 0.35
      }
    };

    var currentKey = 'sin_ln';
    var zoomLevel = 1; // 1 to 16

    var sel = api.select({
      label: t('Indeterminate 0/0 limit'),
      value: currentKey,
      options: [
        { value: 'sin_ln', label: t('lim (x→0) sin(2x) / ln(1 + x)') },
        { value: 'exp_sin', label: t('lim (x→0) (eˣ − 1) / sin(x)') },
        { value: 'ln_poly', label: t('lim (x→1) ln(x) / (x² − 1)') },
        { value: 'cos_pi2', label: t('lim (x→π/2) cos(x) / (2x − π)') }
      ],
      onChange: function (v) { currentKey = v; update(); }
    });

    var zoomSlider = api.slider({
      label: t('Zoom magnification around x = a'),
      min: 1, max: 16, step: 0.5, value: zoomLevel, unit: '×',
      onInput: function (v) { zoomLevel = v; update(); }
    });

    var plotHost = el('div');
    api.stage.appendChild(plotHost);
    var chart = null;

    var roForm = api.readoutItem(t('At x = a'));
    var roSample = api.readoutItem(t('Sample ratio f(x)/g(x)'));
    var roTangents = api.readoutItem(t('Tangent slope ratio f′(a)/g′(a)'));
    var roError = api.readoutItem(t('Linearization gap'));

    function update() {
      var ex = EXAMPLES[currentKey];
      var a = ex.a;
      // Window span shrinks exponentially/hyperbolically with zoomLevel
      var halfSpanX = 1.6 / Math.pow(zoomLevel, 1.15);
      var maxSlope = Math.max(Math.abs(ex.fa1), Math.abs(ex.ga1), 1);
      var halfSpanY = halfSpanX * maxSlope * 1.25;

      var xSample = a + halfSpanX * 0.45;
      var fx = ex.f(xSample), gx = ex.g(xSample);
      var actualRatio = fx / gx;
      var limitRatio = ex.fa1 / ex.ga1;
      var gap = Math.abs(actualRatio - limitRatio);

      roForm('f(a) = 0, g(a) = 0 (0/0)');
      roSample('at x = ' + fixed(xSample, 3) + ': ' + fixed(actualRatio, 4));
      roTangents(ex.limitStr);
      roError(fixed(gap, 4));

      var spec = {
        label: t('Local linearization of f(x) and g(x) near x = a'),
        height: 290,
        x: { label: 'x', min: a - halfSpanX, max: a + halfSpanX },
        y: { label: 'y', min: -halfSpanY, max: halfSpanY },
        lines: [
          { x: xSample, color: '--line-strong', dash: [3, 3], width: 1.2 }
        ],
        functions: [
          { fn: ex.f, color: '--accent', width: 2.5, name: ex.fName },
          { fn: function (x) { return ex.fa1 * (x - a); }, color: '--accent', dash: [5, 4], width: 1.8, name: t('Tangent f′(a)(x − a)') },
          { fn: ex.g, color: '--ahl', width: 2.5, name: ex.gName },
          { fn: function (x) { return ex.ga1 * (x - a); }, color: '--ahl', dash: [5, 4], width: 1.8, name: t('Tangent g′(a)(x − a)') }
        ],
        points: [
          { x: a, y: 0, r: 5, hollow: true, color: '--ink', label: 'a = ' + fixed(a, 2) },
          { x: xSample, y: fx, r: 4, color: '--accent', label: 'f(x)' },
          { x: xSample, y: gx, r: 4, color: '--ahl', label: 'g(x)' }
        ]
      };

      if (!chart) chart = S1.chart.funcPlot(plotHost, spec);
      else chart.update(spec);
    }

    update();
    api.onCleanup(function () { if (chart) chart.destroy(); });
  });

  /* --------------------------------------------------------------------------
     2. t5-3.volume-rev
     Interactive Volume of Revolution Disc/Washer Explorer on S1.chart.funcPlot & view3d
     -------------------------------------------------------------------------- */
  S1.widgets.register('t5-3.volume-rev', function (api) {
    var t = api.t;
    var MODELS = {
      parabola: {
        label: 'Paraboloid: y = √x on [0, b]',
        fn: function (x) { return x >= 0 ? Math.sqrt(x) : 0; },
        fnInner: null,
        exactVol: function (b) { return Math.PI * 0.5 * b * b; }, // pi int_0^b x dx = pi b^2 / 2
        bMin: 1, bMax: 4, bDefault: 3, yMax: 2.3
      },
      cone: {
        label: 'Right cone: y = 0.5x on [0, b]',
        fn: function (x) { return 0.5 * x; },
        fnInner: null,
        exactVol: function (b) { return Math.PI * (1 / 12) * b * b * b; }, // pi int_0^b (x^2/4) dx
        bMin: 1, bMax: 4, bDefault: 3, yMax: 2.3
      },
      sine: {
        label: 'Sinusoid: y = sin(x) + 0.8 on [0, b]',
        fn: function (x) { return Math.sin(x) + 0.8; },
        fnInner: null,
        exactVol: function (b) {
          // int_0^b (sin^2 x + 1.6 sin x + 0.64) dx = [0.5x - 0.25 sin(2x) - 1.6 cos(x) + 0.64x]_0^b
          var F = function (x) { return 1.14 * x - 0.25 * Math.sin(2 * x) - 1.6 * Math.cos(x); };
          return Math.PI * (F(b) - F(0));
        },
        bMin: 1, bMax: 3.5, bDefault: 3, yMax: 2.1
      },
      washer: {
        label: 'Hollow washer: y₁ = √x and y₂ = x/2 on [0, b]',
        fn: function (x) { return x >= 0 ? Math.sqrt(x) : 0; },
        fnInner: function (x) { return 0.5 * x; },
        exactVol: function (b) {
          // pi int_0^b (x - x^2/4) dx = pi (b^2/2 - b^3/12)
          return Math.PI * (0.5 * b * b - (b * b * b) / 12);
        },
        bMin: 1, bMax: 4, bDefault: 4, yMax: 2.3
      }
    };

    var curKey = 'parabola';
    var boundB = 3;
    var numDiscs = 8;

    api.select({
      label: t('Solid profile'),
      value: curKey,
      options: [
        { value: 'parabola', label: t('Disc: y = √x') },
        { value: 'cone', label: t('Disc: y = 0.5x (cone)') },
        { value: 'sine', label: t('Disc: y = sin(x) + 0.8') },
        { value: 'washer', label: t('Washer: outer y = √x, inner y = 0.5x') }
      ],
      onChange: function (v) {
        curKey = v;
        var m = MODELS[curKey];
        bSlider.setRange(m.bMin, m.bMax, 0.25, true);
        boundB = m.bDefault;
        bSlider.setValue(boundB, true);
        update();
      }
    });

    var bSlider = api.slider({
      label: t('Upper limit b'),
      min: 1, max: 4, step: 0.25, value: boundB,
      onInput: function (v) { boundB = v; update(); }
    });

    var nSlider = api.slider({
      label: t('Number of discs N'),
      min: 2, max: 24, step: 1, value: numDiscs,
      onInput: function (v) { numDiscs = v; update(); }
    });

    var gridWrap = el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;align-items:start;' });
    var plot2dHost = el('div');
    var view3dHost = el('div');
    gridWrap.appendChild(plot2dHost);
    gridWrap.appendChild(view3dHost);
    api.stage.appendChild(gridWrap);

    var chart2d = null, viewer3d = null;

    var roDiscSum = api.readoutItem(t('Riemann N-disc sum'));
    // Two exact-volume readouts (disc / washer); only the one matching the model is shown.
    var roExactDisc = api.readoutItem(t('Exact integral V = π ∫ y² dx'));
    var itemExactDisc = api.readout.lastChild;
    var roExactWasher = api.readoutItem(t('Exact integral V = π ∫ (R² − r²) dx (R outer, r inner radius)'));
    var itemExactWasher = api.readout.lastChild;
    var roRelErr = api.readoutItem(t('Approximation error'));

    function update() {
      var m = MODELS[curKey];
      var a = 0, b = boundB, N = numDiscs;
      var dx = (b - a) / N;
      var bars = [];
      var discVolSum = 0;
      var polys3d = [], lines3d = [];
      var sides = 14; // 14-gon per disc in 3D

      for (var i = 0; i < N; i++) {
        var x0 = a + i * dx, x1 = x0 + dx, xm = 0.5 * (x0 + x1);
        var rOut = m.fn(xm);
        var rIn = m.fnInner ? m.fnInner(xm) : 0;
        discVolSum += Math.PI * (rOut * rOut - rIn * rIn) * dx;
        bars.push({
          x0: x0, x1: x1, y0: rIn, y1: rOut,
          color: '--accent-soft', stroke: '--accent', alpha: 0.55
        });

        // Build 3D disc rings at x = xm (mapped so x-axis in math is centered around 0 in 3D viewer)
        var x3c = xm - b * 0.5;
        var ringPts = [];
        for (var k = 0; k < sides; k++) {
          var th = (2 * Math.PI * k) / sides;
          ringPts.push([x3c, rOut * Math.cos(th), rOut * Math.sin(th)]);
        }
        polys3d.push({
          points: ringPts,
          color: '--accent-soft',
          border: '--accent',
          alpha: 0.28
        });
        if (rIn > 0.02) {
          var innerPts = [];
          for (var k2 = 0; k2 < sides; k2++) {
            var th2 = (2 * Math.PI * k2) / sides;
            innerPts.push([x3c, rIn * Math.cos(th2), rIn * Math.sin(th2)]);
          }
          polys3d.push({
            points: innerPts,
            color: '--surface',
            border: '--ahl',
            alpha: 0.65
          });
        }
      }

      // Upper and lower profile curves in 3D
      var profSteps = 24;
      for (var s = 0; s < profSteps; s++) {
        var px0 = (s / profSteps) * b, px1 = ((s + 1) / profSteps) * b;
        lines3d.push({
          from: [px0 - b * 0.5, 0, m.fn(px0)],
          to: [px1 - b * 0.5, 0, m.fn(px1)],
          color: '--accent', width: 2.2
        });
        lines3d.push({
          from: [px0 - b * 0.5, 0, -m.fn(px0)],
          to: [px1 - b * 0.5, 0, -m.fn(px1)],
          color: '--accent', width: 1.6, dashed: true
        });
      }

      var exactV = m.exactVol(b);
      var relErr = exactV > 0 ? (Math.abs(discVolSum - exactV) / exactV) * 100 : 0;

      roDiscSum(fmt(discVolSum, 4) + ' (' + fixed(discVolSum / Math.PI, 3) + 'π)');
      var exactText = fmt(exactV, 4) + ' (' + fixed(exactV / Math.PI, 3) + 'π)';
      itemExactDisc.style.display = m.fnInner ? 'none' : '';
      itemExactWasher.style.display = m.fnInner ? '' : 'none';
      (m.fnInner ? roExactWasher : roExactDisc)(exactText);
      roRelErr(fixed(relErr, 2) + '%');

      var fns2d = [
        { fn: m.fn, domain: [0, 4.2], color: '--accent', width: 2.5, name: m.fnInner ? t('Outer radius R(x)') : 'y = f(x)' }
      ];
      if (m.fnInner) {
        fns2d.push({ fn: m.fnInner, domain: [0, 4.2], color: '--ahl', width: 2.2, name: t('Inner radius r(x)') });
      }

      var spec2d = {
        label: t('2D cross-section and Riemann slices'),
        height: 260,
        x: { label: 'x', min: 0, max: 4.2, step: 1 },
        y: { label: 'y', min: 0, max: m.yMax, step: 0.5 },
        fills: [{
          fn: m.fn,
          fn2: m.fnInner || 0,
          from: 0,
          to: b,
          color: '--accent-soft',
          alpha: 0.25
        }],
        bars: bars,
        functions: fns2d
      };

      var spec3d = {
        label: t('3D solid of revolution about the x-axis'),
        height: 260,
        range: 2.5,
        yaw: -0.55,
        pitch: 0.32,
        axes: true,
        polygons: polys3d,
        lines: lines3d
      };

      if (!chart2d) chart2d = S1.chart.funcPlot(plot2dHost, spec2d);
      else chart2d.update(spec2d);

      if (!viewer3d) viewer3d = S1.chart.view3d(view3dHost, spec3d);
      else viewer3d.setSpec(spec3d);
    }

    update();
    api.onCleanup(function () {
      if (chart2d) chart2d.destroy();
      if (viewer3d) viewer3d.destroy();
    });
  });
})();
