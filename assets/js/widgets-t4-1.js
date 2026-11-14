/* ==========================================================================
   Analysis Lab — widgets-t4-1.js
   Interactive widgets for Topic 4.1 (Descriptive statistics, correlation and regression):
     1. t4-1.boxplot-iqr      — Box plot, quartiles & 1.5 × IQR outlier detector
     2. t4-1.regression-lines — y-on-x vs x-on-y regression lines & (x̄, ȳ) pivot explorer
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;
  var fmt = S1.math.fmt, fixed = S1.math.fixed, MINUS = S1.math.MINUS;

  function fmtSigned(x, dp) {
    dp = dp == null ? 2 : dp;
    var v = Number(x);
    if (Math.abs(v) < 1e-9) return '+ 0.' + new Array(dp + 1).join('0');
    return (v >= 0 ? '+ ' : MINUS + ' ') + Math.abs(v).toFixed(dp);
  }

  /* --------------------------------------------------------------------------
     1. Box Plot, Quartile & 1.5 × IQR Outlier Detector (t4-1.boxplot-iqr)
     -------------------------------------------------------------------------- */
  S1.widgets.register('t4-1.boxplot-iqr', function (w) {
    var t = w.t;

    // Base 10-point sorted core datasets (11th point is controlled by slider)
    var PRESETS = {
      balanced: [18, 24, 28, 32, 35, 38, 42, 46, 50, 54],
      skewed:   [12, 15, 18, 20, 22, 25, 30, 38, 48, 60],
      compact:  [34, 36, 38, 39, 40, 41, 42, 44, 46, 48]
    };

    var presetCtl = w.select({
      label: t('Base dataset (10 values)'),
      options: [
        { value: 'balanced', label: t('Balanced sample') },
        { value: 'skewed', label: t('Right-skewed sample') },
        { value: 'compact', label: t('Compact low-IQR sample') }
      ],
      value: 'balanced',
      onChange: function () { w.redraw(); }
    });

    var ptCtl = w.slider({
      label: t('11th data value x₁₁'),
      min: 0, max: 110, step: 1, value: 86,
      onInput: function () { w.redraw(); }
    });

    var shiftCtl = w.slider({
      label: t('Constant shift +k'),
      min: -15, max: 15, step: 5, value: 0,
      onInput: function () { w.redraw(); }
    });

    var rSummary = w.readoutItem(t('Five-number summary'), { text: true });
    var rFences  = w.readoutItem(t('IQR & outlier fences'), { text: true });
    var rStatus  = w.readoutItem(t('Outlier test for x₁₁'), { text: true });

    var cv = w.canvas({
      height: 230,
      label: t('Box-and-whisker plot with 1.5 IQR lower and upper outlier fences')
    });

    function calcStats(arr) {
      var s = arr.slice().sort(function (a, b) { return a - b; });
      // For n = 11: median is index 5 (6th value), Q1 is index 2 (3rd value), Q3 is index 8 (9th value)
      var q1 = s[2], med = s[5], q3 = s[8];
      var iqr = q3 - q1;
      var loFence = q1 - 1.5 * iqr;
      var hiFence = q3 + 1.5 * iqr;
      var nonOutliers = s.filter(function (v) { return v >= loFence - 1e-9 && v <= hiFence + 1e-9; });
      var outliers = s.filter(function (v) { return v < loFence - 1e-9 || v > hiFence + 1e-9; });
      return {
        sorted: s,
        min: s[0],
        max: s[s.length - 1],
        q1: q1,
        med: med,
        q3: q3,
        iqr: iqr,
        loFence: loFence,
        hiFence: hiFence,
        whiskerLo: nonOutliers.length ? nonOutliers[0] : q1,
        whiskerHi: nonOutliers.length ? nonOutliers[nonOutliers.length - 1] : q3,
        outliers: outliers
      };
    }

    cv.draw(function (ctx, W, H) {
      var base = PRESETS[presetCtl.value] || PRESETS.balanced;
      var k = shiftCtl.value;
      var x11 = ptCtl.value + k;
      var data = base.map(function (v) { return v + k; });
      data.push(x11);
      var st = calcStats(data);

      var col = w.color;
      var ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3');
      var accent = col('--accent'), accentSoft = col('--accent-soft');
      var bad = col('--bad'), ok = col('--ok'), amber = col('--amber-line');
      var lineCol = col('--line'), surface = col('--surface');
      var mono = col('--font-mono') || 'monospace', body = col('--font-body') || 'sans-serif';

      var padL = 32, padR = 32;
      var xmin = -20, xmax = 130;
      var pw = W - padL - padR;
      function X(v) { return padL + ((v - xmin) / (xmax - xmin)) * pw; }

      // 1. Shaded non-outlier fence zone [Q1 - 1.5 IQR, Q3 + 1.5 IQR]
      var fx0 = Math.max(padL, X(st.loFence));
      var fx1 = Math.min(W - padR, X(st.hiFence));
      ctx.save();
      ctx.fillStyle = accentSoft;
      ctx.globalAlpha = 0.35;
      ctx.fillRect(fx0, 26, Math.max(0, fx1 - fx0), H - 72);
      ctx.restore();

      // 2. Number line & ticks at bottom
      var axisY = H - 36;
      ctx.strokeStyle = lineCol;
      ctx.lineWidth = 1;
      ctx.font = '11px ' + mono;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      for (var tv = -20; tv <= 120; tv += 20) {
        var tx = Math.round(X(tv)) + 0.5;
        ctx.beginPath(); ctx.moveTo(tx, 26); ctx.lineTo(tx, axisY); ctx.stroke();
        ctx.strokeStyle = ink3;
        ctx.beginPath(); ctx.moveTo(tx, axisY); ctx.lineTo(tx, axisY + 5); ctx.stroke();
        ctx.fillStyle = ink3;
        ctx.fillText(String(tv).replace('-', MINUS), tx, axisY + 8);
        ctx.strokeStyle = lineCol;
      }
      ctx.strokeStyle = ink;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(padL, axisY + 0.5); ctx.lineTo(W - padR, axisY + 0.5); ctx.stroke();

      // 3. Lower and Upper outlier fences (dashed vertical lines)
      [
        { v: st.loFence, label: 'Q₁ − 1.5 IQR = ' + fixed(st.loFence, 1) },
        { v: st.hiFence, label: 'Q₃ + 1.5 IQR = ' + fixed(st.hiFence, 1) }
      ].forEach(function (f) {
        if (f.v < xmin || f.v > xmax) return;
        var fx = Math.round(X(f.v)) + 0.5;
        ctx.save();
        ctx.strokeStyle = amber;
        ctx.lineWidth = 1.6;
        ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(fx, 26); ctx.lineTo(fx, axisY); ctx.stroke();
        ctx.setLineDash([]);
        ctx.font = '600 11px ' + mono;
        ctx.fillStyle = ink2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        var lx = Math.max(padL + 48, Math.min(W - padR - 48, fx));
        ctx.fillText(f.label, lx, 22);
        ctx.restore();
      });

      // 4. Box and Whiskers
      var boxY = 82, boxH = 44, midY = boxY + boxH / 2;
      var xWL = X(st.whiskerLo), xQ1 = X(st.q1), xMed = X(st.med), xQ3 = X(st.q3), xWH = X(st.whiskerHi);

      // Whiskers to most extreme non-outliers
      ctx.strokeStyle = ink;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xWL, midY); ctx.lineTo(xQ1, midY);
      ctx.moveTo(xQ3, midY); ctx.lineTo(xWH, midY);
      ctx.moveTo(xWL, midY - 11); ctx.lineTo(xWL, midY + 11);
      ctx.moveTo(xWH, midY - 11); ctx.lineTo(xWH, midY + 11);
      ctx.stroke();

      // Box [Q1, Q3]
      ctx.fillStyle = accentSoft;
      ctx.fillRect(xQ1, boxY, Math.max(2, xQ3 - xQ1), boxH);
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.2;
      ctx.strokeRect(xQ1, boxY, Math.max(2, xQ3 - xQ1), boxH);

      // Median line
      ctx.strokeStyle = ink;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.moveTo(xMed, boxY); ctx.lineTo(xMed, boxY + boxH);
      ctx.stroke();

      // Labels for Q1, M, Q3
      ctx.font = '600 11px ' + mono;
      ctx.fillStyle = ink;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('Q₁=' + st.q1, xQ1, boxY - 5);
      ctx.fillText('M=' + st.med, xMed, boxY - 18);
      ctx.fillText('Q₃=' + st.q3, xQ3, boxY - 5);

      // 5. Individual data points along y = 158
      var ptY = 158;
      st.sorted.forEach(function (v) {
        var isOut = v < st.loFence - 1e-9 || v > st.hiFence + 1e-9;
        var isX11 = Math.abs(v - x11) < 1e-9;
        var px = X(v);
        if (isOut) {
          // Draw outlier cross '×' on the box midline AND highlight on point strip
          var r = 5.5;
          ctx.strokeStyle = bad;
          ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.moveTo(px - r, midY - r); ctx.lineTo(px + r, midY + r);
          ctx.moveTo(px - r, midY + r); ctx.lineTo(px + r, midY - r);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(px, ptY, isX11 ? 5.5 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isOut ? bad : (isX11 ? accent : ink2);
        ctx.fill();
        ctx.strokeStyle = surface;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Label x11 point
      var x11Out = x11 < st.loFence - 1e-9 || x11 > st.hiFence + 1e-9;
      ctx.font = '600 11px ' + body;
      ctx.fillStyle = x11Out ? bad : accent;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('x₁₁ = ' + fixed(x11, 0) + (x11Out ? ' (' + t('Outlier') + ')' : ''), Math.max(padL + 36, Math.min(W - padR - 36, X(x11))), ptY + 8);

      // Update readouts
      rSummary(
        'min = ' + fixed(st.min, 0) +
        ', Q₁ = ' + fixed(st.q1, 0) +
        ', M = ' + fixed(st.med, 0) +
        ', Q₃ = ' + fixed(st.q3, 0) +
        ', max = ' + fixed(st.max, 0)
      );
      rFences(
        'IQR = ' + fixed(st.iqr, 0) +
        '  ⇒  [' + fixed(st.loFence, 1) + ', ' + fixed(st.hiFence, 1) + ']'
      );
      if (x11 > st.hiFence + 1e-9) {
        rStatus(fixed(x11, 0) + ' > ' + fixed(st.hiFence, 1) + ' (' + t('Upper outlier — whisker stops at') + ' ' + fixed(st.whiskerHi, 0) + ')');
      } else if (x11 < st.loFence - 1e-9) {
        rStatus(fixed(x11, 0) + ' < ' + fixed(st.loFence, 1) + ' (' + t('Lower outlier — whisker stops at') + ' ' + fixed(st.whiskerLo, 0) + ')');
      } else {
        rStatus(fixed(x11, 0) + ' ∈ [' + fixed(st.loFence, 1) + ', ' + fixed(st.hiFence, 1) + '] (' + t('Not an outlier') + ')');
      }
    });
  });

  /* --------------------------------------------------------------------------
     2. y-on-x vs x-on-y Regression Lines Explorer (t4-1.regression-lines)
     -------------------------------------------------------------------------- */
  S1.widgets.register('t4-1.regression-lines', function (w) {
    var t = w.t;

    // Two orthogonal zero-mean, unit-variance 10-vectors (sum = 0, sum of squares = 10, dot product = 0)
    // Used to synthesize 10 bivariate points with exact mean (5, 6), SDs (2.0, 2.4), and correlation r
    var U = [-1.54919, -1.16190, -0.77460, -0.38730, 0.0, 0.0, 0.38730, 0.77460, 1.16190, 1.54919];
    var V = [ 0.52705, -0.84327,  0.21082,  1.26491, -1.47573, 0.31623, -1.05409, 1.37032, 0.42164, -0.73786];
    var XBAR = 5.0, YBAR = 6.0, SX = 2.0, SY = 2.4;

    var rCtl = w.slider({
      label: t('Correlation r'),
      min: -1.0, max: 1.0, step: 0.05, value: 0.70,
      onInput: function () { updateChart(); }
    });

    var y0Ctl = w.slider({
      label: t('Target y₀ (to predict x)'),
      min: 2.0, max: 10.0, step: 0.5, value: 8.5,
      onInput: function () { updateChart(); }
    });

    var rYonX = w.readoutItem(t('y on x line (predict y from x)'), { text: true });
    var rXonY = w.readoutItem(t('x on y line (predict x from y)'), { text: true });
    var rPred = w.readoutItem(t('Estimate of x when y = y₀'), { text: true });

    var chart = null;

    function buildSpec() {
      var r = rCtl.value;
      var y0 = y0Ctl.value;
      var s = Math.sqrt(Math.max(0, 1 - r * r));

      var pts = [];
      for (var i = 0; i < U.length; i++) {
        pts.push({
          x: XBAR + SX * U[i],
          y: YBAR + SY * (r * U[i] + s * V[i])
        });
      }

      // y on x: y - YBAR = a(x - XBAR), where a = r * (SY / SX)
      var a = r * (SY / SX);
      var b = YBAR - a * XBAR;

      // x on y: x - XBAR = c(y - YBAR), where c = r * (SX / SY)
      var c = r * (SX / SY);
      var d = XBAR - c * YBAR;

      // Correct estimate of x when y = y0 uses x on y line:
      var xEstCorrect = c * y0 + d;
      // Wrong estimate obtained by rearranging y = ax + b:
      var xEstWrong = Math.abs(a) > 1e-6 ? (y0 - b) / a : NaN;

      rYonX('y = ' + fixed(a, 2) + 'x ' + fmtSigned(b, 2));
      rXonY('x = ' + fixed(c, 2) + 'y ' + fmtSigned(d, 2));

      if (Math.abs(Math.abs(r) - 1) < 1e-6) {
        rPred('x̂ = ' + fixed(xEstCorrect, 2) + ' (' + t('lines coincide since |r| = 1') + ')');
      } else if (Math.abs(r) < 1e-6) {
        rPred('x̂ = x̄ = ' + fixed(XBAR, 2) + ' (' + t('r = 0: lines are perpendicular!') + ')');
      } else {
        rPred(
          'x̂ = ' + fixed(xEstCorrect, 2) + ' (' + t('via x on y') + ')  vs  ' +
          fixed(xEstWrong, 2) + ' (' + t('wrong if rearranging y on x') + ')'
        );
      }

      var fns = [
        {
          name: t('y on x (predict y)'),
          color: '--accent',
          width: 2.4,
          fn: function (x) { return a * x + b; }
        }
      ];
      var lines = [
        { y: y0, color: '--amber-line', dash: [4, 4], width: 1.4 }
      ];

      if (Math.abs(c) > 1e-4) {
        fns.push({
          name: t('x on y (predict x)'),
          color: '--ahl',
          dash: [6, 4],
          width: 2.4,
          fn: function (x) { return YBAR + (x - XBAR) / c; }
        });
      } else {
        // When r = 0, x on y is the vertical line x = XBAR
        lines.push({ x: XBAR, color: '--ahl', dash: [6, 4], width: 2.4 });
      }

      var highlightPts = [
        { x: XBAR, y: YBAR, r: 5.5, color: '--ok', label: '(x̄, ȳ) = (5, 6)', dy: 14 },
        { x: xEstCorrect, y: y0, r: 5, color: '--ahl', label: 'x̂ = ' + fixed(xEstCorrect, 2), dy: -12 }
      ];

      return {
        label: t('Scatter plot with y-on-x and x-on-y regression lines intersecting at the mean point'),
        height: 290,
        x: { label: 'x', min: 0, max: 10, step: 2 },
        y: { label: 'y', min: 0, max: 12, step: 2 },
        functions: fns,
        lines: lines,
        series: [
          { type: 'scatter', data: pts, color: '--ink-2', r: 3.8 }
        ],
        points: highlightPts
      };
    }

    function updateChart() {
      var spec = buildSpec();
      if (!chart) chart = S1.chart.funcPlot(w.stage, spec);
      else chart.update(spec);
    }

    updateChart();
    w.onCleanup(function () { if (chart) chart.destroy(); });
  });
})();
