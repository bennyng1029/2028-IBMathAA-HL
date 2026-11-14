/* ==========================================================================
   Widgets for Topic 1.1 — Sequences, series and financial models
   t1-1.seq-explorer     Arithmetic vs Geometric & Infinite Series Convergence
   t1-1.compound-growth  Compound Interest & Annual Depreciation Simulator
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, math = S1.math;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* ------------------------------------------------------------------------
     1. Sequence & Infinite Series Convergence Explorer (t1-1.seq-explorer)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-1.seq-explorer', function (w) {
    var mode = 'geom';
    var modeSel = w.select({
      label: t('Pattern type'),
      value: 'geom',
      options: [
        { value: 'geom', label: t('Geometric (constant ratio r)') },
        { value: 'arith', label: t('Arithmetic (constant difference d)') }
      ],
      onChange: function (v) {
        mode = v;
        if (mode === 'geom') {
          paramCtl.setRange(-0.9, 1.5, 0.05, true);
          paramCtl.setValue(0.6, true);
        } else {
          paramCtl.setRange(-4, 6, 0.5, true);
          paramCtl.setValue(2, true);
        }
        update();
      }
    });

    var u1Ctl = w.slider({ label: t('First term u₁'), min: 1, max: 20, step: 1, value: 12, onInput: update });
    var paramCtl = w.slider({ label: t('Step parameter (r or d)'), min: -0.9, max: 1.5, step: 0.05, value: 0.6, onInput: update });
    var nCtl = w.slider({ label: t('Number of terms n'), min: 3, max: 16, step: 1, value: 10, onInput: update });

    var setTerm = w.readoutItem(t('n-th term uₙ'));
    var setSum = w.readoutItem(t('Partial sum Sₙ'));
    var setInf = w.readoutItem(t('Sum to infinity S∞'));

    var chartBox = document.createElement('div');
    w.stage.appendChild(chartBox);
    var chart = null;

    function update() {
      var u1 = u1Ctl.value, p = paramCtl.value, n = Math.round(nCtl.value);
      var terms = [], sums = [], cats = [], sum = 0;
      for (var k = 1; k <= n; k++) {
        var uk = mode === 'geom' ? u1 * Math.pow(p, k - 1) : u1 + (k - 1) * p;
        sum += uk;
        cats.push(String(k));
        terms.push({ x: k - 1, y: Number(uk.toPrecision(6)) });
        sums.push({ x: k - 1, y: Number(sum.toPrecision(6)) });
      }
      var un = terms[terms.length - 1].y;
      var sn = sums[sums.length - 1].y;
      setTerm(math.fmt(un, 3));
      setSum(math.fmt(sn, 3));

      var series = [
        { type: 'bar', name: t('Term u_k'), data: terms, color: '--accent' },
        { type: 'line', points: true, name: t('Partial sum S_k'), data: sums, color: '--ahl', width: 2.5 }
      ];

      if (mode === 'geom' && Math.abs(p) < 1 && Math.abs(p) > 1e-9) {
        var sinf = u1 / (1 - p);
        setInf(math.fmt(sinf, 3) + ' (' + t('converges, |r| < 1') + ')');
        var infLine = [];
        for (var j = 0; j < n; j++) infLine.push({ x: j, y: sinf });
        series.push({ type: 'line', name: t('Limit S∞'), data: infLine, color: '--ok', dash: [5, 4], width: 2 });
      } else if (mode === 'geom' && Math.abs(p) < 1e-9) {
        setInf(math.fmt(u1, 3) + ' (r = 0)');
      } else {
        setInf(t('Diverges (no finite limit)'));
      }

      var spec = {
        label: t('Terms u_k and cumulative partial sums S_k'),
        height: 270,
        categories: cats,
        x: { label: t('Term index k') },
        y: { label: t('Value') },
        series: series
      };
      if (!chart) chart = S1.chart.plot(chartBox, spec);
      else chart.update(spec);
    }

    update();
  });

  /* ------------------------------------------------------------------------
     2. Compound Interest & Depreciation Simulator (t1-1.compound-growth)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-1.compound-growth', function (w) {
    var pvCtl = w.slider({ label: t('Present value PV'), min: 1000, max: 10000, step: 500, value: 4000, unit: 'USD', onInput: update });
    var rateCtl = w.slider({ label: t('Annual rate r% (+ growth / − depreciation)'), min: -20, max: 15, step: 0.5, value: 6, unit: '%', onInput: update });
    var kSel = w.select({
      label: t('Compounding periods k / yr'),
      value: '12',
      options: [
        { value: '1', label: t('Annually (k = 1)') },
        { value: '2', label: t('Half-yearly (k = 2)') },
        { value: '4', label: t('Quarterly (k = 4)') },
        { value: '12', label: t('Monthly (k = 12)') }
      ],
      onChange: function () { update(); }
    });
    var yrsCtl = w.slider({ label: t('Years n'), min: 2, max: 20, step: 1, value: 10, unit: 'yr', onInput: update });

    var setFVAnnual = w.readoutItem(t('FV (k = 1 annual)'));
    var setFVComp = w.readoutItem(t('FV (chosen k)'));
    var setDiff = w.readoutItem(t('Extra from compounding k'));

    var chartBox = document.createElement('div');
    w.stage.appendChild(chartBox);
    var chart = null;

    function update() {
      var pv = pvCtl.value, r = rateCtl.value, k = Number(kSel.value) || 1, yrs = Math.round(yrsCtl.value);
      var annualPts = [], compPts = [], cats = [];
      for (var tYr = 0; tYr <= yrs; tYr++) {
        cats.push(String(tYr));
        var fv1 = pv * Math.pow(1 + r / 100, tYr);
        var fvk = pv * Math.pow(1 + r / (100 * k), k * tYr);
        annualPts.push({ x: tYr, y: fv1 });
        compPts.push({ x: tYr, y: fvk });
      }
      var final1 = annualPts[annualPts.length - 1].y;
      var finalk = compPts[compPts.length - 1].y;
      setFVAnnual(math.fixed(final1, 2) + ' USD');
      setFVComp(math.fixed(finalk, 2) + ' USD');
      setDiff((finalk - final1 >= 0 ? '+' : '') + math.fixed(finalk - final1, 2) + ' USD');

      var spec = {
        label: t('Future value FV over time'),
        height: 260,
        categories: cats,
        x: { label: t('Time t (years)') },
        y: { label: t('Value (USD)'), min: 0 },
        series: [
          { type: 'line', points: true, name: t('Selected compounding (k = {k})', { k: k }), data: compPts, color: '--accent', width: 2.5 },
          { type: 'line', name: t('Annual baseline (k = 1)'), data: annualPts, color: '--ink-2', dash: [4, 3], width: 2 }
        ]
      };
      if (!chart) chart = S1.chart.plot(chartBox, spec);
      else chart.update(spec);
    }

    update();
  });
})();
