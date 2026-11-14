/* ==========================================================================
   Analysis Lab — widgets-t4-2.js
   Interactive widgets for Topic 4.2 (Probability, distributions, Bayes and continuous RVs):
     1. t4-2.normal-z-lab — Normal distribution & z-score shaded tail calculator
     2. t4-2.bayes-tree   — Interactive Bayes' theorem probability tree & posterior updater
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.widgets) return;
  var math = S1.math, fmt = math.fmt, fixed = math.fixed, MINUS = math.MINUS;

  /* --------------------------------------------------------------------------
     1. Normal Distribution & z-Score Shaded Tail Calculator (t4-2.normal-z-lab)
     -------------------------------------------------------------------------- */
  S1.widgets.register('t4-2.normal-z-lab', function (w) {
    var t = w.t;

    var modeCtl = w.select({
      label: t('Probability region'),
      options: [
        { value: 'between', label: t('Between: P(a < X < b)') },
        { value: 'left',    label: t('Left tail: P(X < b)') },
        { value: 'right',   label: t('Right tail: P(X > a)') }
      ],
      value: 'between',
      onChange: function () { updateChart(); }
    });

    var muCtl = w.slider({
      label: t('Mean μ'),
      min: 50, max: 90, step: 2, value: 70,
      onInput: function () { updateChart(); }
    });

    var sigCtl = w.slider({
      label: t('Standard deviation σ'),
      min: 5, max: 20, step: 1, value: 10,
      onInput: function () { updateChart(); }
    });

    var aCtl = w.slider({
      label: t('Bound a'),
      min: 30, max: 110, step: 1, value: 60,
      onInput: function () { updateChart(); }
    });

    var bCtl = w.slider({
      label: t('Bound b'),
      min: 30, max: 110, step: 1, value: 85,
      onInput: function () { updateChart(); }
    });

    var rZScore = w.readoutItem(t('Standardized z-score(s)'), { text: true });
    var rProb   = w.readoutItem(t('Shaded probability area'), { text: true });
    var rGdc    = w.readoutItem(t('GDC syntax'), { text: true });

    var chart = null;

    function buildSpec() {
      var mode = modeCtl.value;
      var mu = muCtl.value;
      var sigma = sigCtl.value;
      var a = aCtl.value;
      var b = bCtl.value;
      if (mode === 'between' && a > b) {
        var tmp = a; a = b; b = tmp;
      }

      var xmin = mu - 4 * sigma;
      var xmax = mu + 4 * sigma;
      var ymax = math.normPdf(mu, mu, sigma) * 1.18;

      var za = (a - mu) / sigma;
      var zb = (b - mu) / sigma;
      var prob = 0, fromX = xmin, toX = xmax;

      if (mode === 'left') {
        fromX = xmin;
        toX = b;
        prob = math.normCdf(b, mu, sigma);
        rZScore('z_b = (' + b + ' − ' + mu + ') / ' + sigma + ' = ' + fixed(zb, 2));
        rProb('P(X < ' + b + ') = P(Z < ' + fixed(zb, 2) + ') = ' + fmt(prob, 3) + ' (' + fixed(prob * 100, 1) + '%)');
        rGdc('normalcdf(-1E99, ' + b + ', ' + mu + ', ' + sigma + ')');
      } else if (mode === 'right') {
        fromX = a;
        toX = xmax;
        prob = 1 - math.normCdf(a, mu, sigma);
        rZScore('z_a = (' + a + ' − ' + mu + ') / ' + sigma + ' = ' + fixed(za, 2));
        rProb('P(X > ' + a + ') = P(Z > ' + fixed(za, 2) + ') = ' + fmt(prob, 3) + ' (' + fixed(prob * 100, 1) + '%)');
        rGdc('normalcdf(' + a + ', 1E99, ' + mu + ', ' + sigma + ')');
      } else {
        fromX = a;
        toX = b;
        prob = Math.max(0, math.normCdf(b, mu, sigma) - math.normCdf(a, mu, sigma));
        rZScore('z_a = ' + fixed(za, 2) + ',   z_b = ' + fixed(zb, 2));
        rProb('P(' + a + ' < X < ' + b + ') = P(' + fixed(za, 2) + ' < Z < ' + fixed(zb, 2) + ') = ' + fmt(prob, 3));
        rGdc('normalcdf(' + a + ', ' + b + ', ' + mu + ', ' + sigma + ')');
      }

      var pdfFn = function (x) { return math.normPdf(x, mu, sigma); };
      var lines = [
        { x: mu, color: '--line-strong', dash: [4, 4], width: 1.3 }
      ];
      var points = [
        { x: mu, y: pdfFn(mu), r: 4, color: '--ink-2', label: 'μ = ' + mu + ' (z = 0)', dy: -12 }
      ];

      if (mode === 'right' || mode === 'between') {
        lines.push({ x1: a, y1: 0, x2: a, y2: pdfFn(a), color: '--accent', width: 2 });
        points.push({ x: a, y: pdfFn(a), r: 4.5, color: '--accent', label: 'a=' + a + ' (z=' + fixed(za, 2) + ')', dy: -12 });
      }
      if (mode === 'left' || mode === 'between') {
        lines.push({ x1: b, y1: 0, x2: b, y2: pdfFn(b), color: '--ahl', width: 2 });
        points.push({ x: b, y: pdfFn(b), r: 4.5, color: '--ahl', label: 'b=' + b + ' (z=' + fixed(zb, 2) + ')', dy: -12 });
      }

      return {
        label: t('Normal distribution curve with shaded probability area and z-score markers'),
        height: 270,
        x: { label: t('x (with standardized z = (x − μ)/σ)'), min: xmin, max: xmax, step: sigma },
        y: { label: 'f(x)', min: 0, max: ymax },
        fills: [
          { fn: pdfFn, fn2: 0, from: fromX, to: toX, color: '--accent-soft', alpha: 0.72 }
        ],
        functions: [
          { name: 'X ~ N(' + mu + ', ' + sigma + '²)', color: '--accent', width: 2.5, fn: pdfFn }
        ],
        lines: lines,
        points: points,
        annotations: [
          { x: (Math.max(xmin, fromX) + Math.min(xmax, toX)) / 2, y: pdfFn(mu) * 0.32, text: t('Area') + ' = ' + fmt(prob, 3), dy: 0 }
        ]
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

  /* --------------------------------------------------------------------------
     2. Interactive Bayes' Theorem Tree & Posterior Updater (t4-2.bayes-tree)
     -------------------------------------------------------------------------- */
  S1.widgets.register('t4-2.bayes-tree', function (w) {
    var t = w.t;

    var priorCtl = w.slider({
      label: t('Prior P(B) (base rate)'),
      min: 0.01, max: 0.50, step: 0.01, value: 0.05,
      onInput: function () { w.redraw(); }
    });

    var sensCtl = w.slider({
      label: t('Sensitivity P(A | B)'),
      min: 0.50, max: 0.99, step: 0.01, value: 0.95,
      onInput: function () { w.redraw(); }
    });

    var fprCtl = w.slider({
      label: t('False positive P(A | B′)'),
      min: 0.01, max: 0.30, step: 0.01, value: 0.10,
      onInput: function () { w.redraw(); }
    });

    var rBranches  = w.readoutItem(t('Two paths to outcome A'), { text: true });
    var rTotalA    = w.readoutItem(t('Total probability P(A)'), { text: true });
    var rPosterior = w.readoutItem(t('Bayes posterior P(B | A)'), { text: true });

    var cv = w.canvas({
      height: 255,
      label: t('Two-stage probability tree diagram and Bayes posterior proportion bar')
    });

    cv.draw(function (ctx, W, H) {
      var pB = priorCtl.value;
      var pNotB = 1 - pB;
      var pAgB = sensCtl.value;
      var pNotAgB = 1 - pAgB;
      var pAgNotB = fprCtl.value;
      var pNotAgNotB = 1 - pAgNotB;

      var jointBA = pB * pAgB;             // True positive P(B ∩ A)
      var jointBNotA = pB * pNotAgB;
      var jointNotBA = pNotB * pAgNotB;    // False positive P(B' ∩ A)
      var jointNotBNotA = pNotB * pNotAgNotB;

      var pA = jointBA + jointNotBA;
      var postBgA = pA > 0 ? jointBA / pA : 0;

      var col = w.color;
      var ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3');
      var accent = col('--accent'), ahl = col('--ahl'), ok = col('--ok'), bad = col('--bad');
      var lineStrong = col('--line-strong'), surface = col('--surface');
      var mono = col('--font-mono') || 'monospace', body = col('--font-body') || 'sans-serif';

      // Layout: Tree diagram on left/center, stacked posterior bar at bottom
      var x0 = 26, y0 = 102;
      var x1 = Math.min(185, Math.round(W * 0.30));
      var yB = 52, yNotB = 152;
      var x2 = Math.min(370, Math.round(W * 0.60));
      var yLeaves = [26, 78, 126, 178];

      function drawBranch(xa, ya, xb, yb, probText, highlightColor, bold) {
        ctx.save();
        ctx.strokeStyle = highlightColor || lineStrong;
        ctx.lineWidth = bold ? 2.6 : 1.5;
        ctx.beginPath(); ctx.moveTo(xa, ya); ctx.lineTo(xb, yb); ctx.stroke();
        var mx = (xa + xb) / 2, my = (ya + yb) / 2;
        ctx.font = (bold ? '600 ' : '') + '11px ' + mono;
        var tw = ctx.measureText(probText).width + 6;
        ctx.fillStyle = surface;
        ctx.fillRect(mx - tw / 2, my - 7, tw, 14);
        ctx.fillStyle = highlightColor || ink2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(probText, mx, my);
        ctx.restore();
      }

      function drawNode(x, y, text, color) {
        ctx.save();
        ctx.font = '600 12px ' + mono;
        var tw = Math.max(24, ctx.measureText(text).width + 10);
        ctx.fillStyle = surface;
        ctx.strokeStyle = color || lineStrong;
        ctx.lineWidth = 1.6;
        ctx.fillRect(x - tw / 2, y - 10, tw, 20);
        ctx.strokeRect(x - tw / 2, y - 10, tw, 20);
        ctx.fillStyle = color || ink;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x, y);
        ctx.restore();
      }

      // Stage 1 branches
      drawBranch(x0, y0, x1, yB, fixed(pB, 2), ok, true);
      drawBranch(x0, y0, x1, yNotB, fixed(pNotB, 2), bad, true);

      // Stage 2 branches
      drawBranch(x1, yB, x2, yLeaves[0], fixed(pAgB, 2), ok, true);
      drawBranch(x1, yB, x2, yLeaves[1], fixed(pNotAgB, 2), null, false);
      drawBranch(x1, yNotB, x2, yLeaves[2], fixed(pAgNotB, 2), bad, true);
      drawBranch(x1, yNotB, x2, yLeaves[3], fixed(pNotAgNotB, 2), null, false);

      // Nodes
      drawNode(x1, yB, 'B', ok);
      drawNode(x1, yNotB, 'B′', bad);
      drawNode(x2, yLeaves[0], 'A', ok);
      drawNode(x2, yLeaves[1], 'A′', ink3);
      drawNode(x2, yLeaves[2], 'A', bad);
      drawNode(x2, yLeaves[3], 'A′', ink3);

      // Joint probability labels to the right of leaves
      ctx.font = '11.5px ' + mono;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      var xJoint = x2 + 18;
      ctx.fillStyle = ok;
      ctx.fillText('P(B ∩ A) = ' + fixed(jointBA, 4) + '  ★', xJoint, yLeaves[0]);
      ctx.fillStyle = ink3;
      ctx.fillText('P(B ∩ A′) = ' + fixed(jointBNotA, 4), xJoint, yLeaves[1]);
      ctx.fillStyle = bad;
      ctx.fillText('P(B′ ∩ A) = ' + fixed(jointNotBA, 4) + '  ★', xJoint, yLeaves[2]);
      ctx.fillStyle = ink3;
      ctx.fillText('P(B′ ∩ A′) = ' + fixed(jointNotBNotA, 4), xJoint, yLeaves[3]);

      // Bottom visual bar: Proportion of all A outcomes that came from B vs B'
      var barY = H - 34, barH = 20, barL = 26, barW = W - 52;
      var wTrue = Math.round(barW * postBgA);
      ctx.fillStyle = ok;
      ctx.fillRect(barL, barY, wTrue, barH);
      ctx.fillStyle = bad;
      ctx.fillRect(barL + wTrue, barY, barW - wTrue, barH);
      ctx.strokeStyle = ink;
      ctx.lineWidth = 1.4;
      ctx.strokeRect(barL + 0.5, barY + 0.5, barW, barH);

      ctx.font = '600 11.5px ' + body;
      ctx.fillStyle = ink;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.fillText(
        t('Among all A outcomes: P(B | A) = ') + fixed(postBgA * 100, 1) + '% (' + t('green') + ')  vs  P(B′ | A) = ' + fixed((1 - postBgA) * 100, 1) + '% (' + t('red') + ')',
        barL, barY - 5
      );

      // Update readouts
      rBranches('P(B ∩ A) = ' + fixed(jointBA, 4) + ',   P(B′ ∩ A) = ' + fixed(jointNotBA, 4));
      rTotalA('P(A) = ' + fixed(jointBA, 4) + ' + ' + fixed(jointNotBA, 4) + ' = ' + fixed(pA, 4));
      rPosterior('P(B | A) = ' + fixed(jointBA, 4) + ' / ' + fixed(pA, 4) + ' = ' + fmt(postBgA, 3) + ' (' + fixed(postBgA * 100, 1) + '%)');
    });
  });
})();
