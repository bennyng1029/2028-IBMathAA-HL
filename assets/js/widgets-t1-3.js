/* ==========================================================================
   Widgets for Topic 1.3 — Counting, partial fractions and extended binomials
   t1-3.perm-comb         Interactive Arrangement & Committee Builder
   t1-3.rational-binomial Extended Binomial Approximation & Validity Interval
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, math = S1.math;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* ------------------------------------------------------------------------
     1. Arrangement & Committee Builder (t1-3.perm-comb)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-3.perm-comb', function (w) {
    var mode = 'compare';
    var modeSel = w.select({
      label: t('Counting mode'),
      value: 'compare',
      options: [
        { value: 'compare', label: t('Compare nPr vs nCr (why divide by r!)') },
        { value: 'together', label: t('Glue method: A and B must sit together') },
        { value: 'separated', label: t('Gap method: A and B must NOT sit together') }
      ],
      onChange: function (v) {
        mode = v;
        rCtl.el.style.display = (mode === 'compare') ? '' : 'none';
        update();
      }
    });

    var nCtl = w.slider({
      label: t('Total items n'),
      min: 3, max: 7, step: 1, value: 5,
      onInput: function (v) {
        if (rCtl.value > v) rCtl.setValue(v, true);
        rCtl.setRange(1, v, 1, true);
        update();
      }
    });

    var rCtl = w.slider({
      label: t('Chosen items r'),
      min: 1, max: 5, step: 1, value: 3,
      onInput: update
    });

    var setPerm = w.readoutItem(t('Ordered count'));
    var setComb = w.readoutItem(t('Comparison / formula'));
    var setRule = w.readoutItem(t('Key takeaway'), { text: true });

    var box = document.createElement('div');
    box.style.padding = '0.85rem 1rem';
    w.stage.appendChild(box);

    var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    function tileHtml(ch, highlight, muted) {
      var bg = highlight ? 'var(--ahl-soft, var(--accent-soft))' : (muted ? 'var(--surface)' : 'var(--accent-soft)');
      var bd = highlight ? '2px solid var(--ahl, var(--accent))' : '1px solid var(--line-strong)';
      return '<span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:var(--radius);border:' + bd + ';background:' + bg + ';font-family:var(--font-mono);font-weight:700;font-size:0.95rem">' + ch + '</span>';
    }

    function update() {
      var n = Math.round(nCtl.value);
      var r = Math.min(n, Math.round(rCtl.value));
      var html = '';

      if (mode === 'compare') {
        var nPr = math.nPr(n, r);
        var nCr = math.nCr(n, r);
        var rFact = math.factorial(r);

        setPerm(n + 'P' + r + ' = ' + nPr);
        setComb(n + 'C' + r + ' = ' + nPr + ' / ' + r + '! = ' + nCr);
        setRule(t('Each committee of {r} collapses {rf} orderings into 1.', { r: r, rf: rFact }));

        html += '<div style="margin-bottom:0.65rem;font-weight:700">' + t('Sample subset of {r} items from {n}:', { r: r, n: n }) + '</div>';
        html += '<div style="display:flex;flex-wrap:wrap;gap:0.4rem;align-items:center;margin-bottom:0.8rem">';
        for (var i = 0; i < n; i++) {
          html += tileHtml(LETTERS[i], i < r, i >= r);
        }
        html += '</div>';

        html += '<div style="border:1px solid var(--line-strong);border-radius:var(--radius);padding:0.7rem 0.85rem;background:var(--surface)">';
        html += '<div style="font-size:0.88rem;color:var(--ink-2);margin-bottom:0.35rem">' + t('One unordered selection {' + LETTERS.slice(0, r).join(', ') + '} corresponds to {rf} ordered arrangements:', { rf: rFact }) + '</div>';
        html += '<div style="font-family:var(--font-mono);font-size:0.9rem">';
        if (r === 1) {
          html += 'A  (1! = 1)';
        } else if (r === 2) {
          html += 'AB, BA  (2! = 2)';
        } else if (r === 3) {
          html += 'ABC, ACB, BAC, BCA, CAB, CBA  (3! = 6)';
        } else {
          html += LETTERS.slice(0, r).join('') + ', ' + LETTERS.slice(0, r).reverse().join('') + ', …  (' + r + '! = ' + rFact + ' ' + t('orderings') + ')';
        }
        html += '</div></div>';
      } else if (mode === 'together') {
        var blockWays = math.factorial(n - 1);
        var totalTogether = blockWays * 2;
        setPerm((n - 1) + '! × 2! = ' + totalTogether);
        setComb(t('Unconstrained') + ': ' + n + '! = ' + math.factorial(n));
        setRule(t('Glue A & B into 1 super-item → {m} items to arrange, then × 2! inside.', { m: n - 1 }));

        html += '<div style="margin-bottom:0.6rem;font-weight:700">' + t('Glue method: treat (AB) as a single super-item:') + '</div>';
        html += '<div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;margin-bottom:0.75rem">';
        html += '<span style="display:inline-flex;gap:0.25rem;padding:0.25rem 0.4rem;border:2px dashed var(--ahl, var(--accent));border-radius:var(--radius);background:var(--accent-soft)">';
        html += tileHtml('A', true, false) + tileHtml('B', true, false);
        html += '</span>';
        for (var j = 2; j < n; j++) {
          html += tileHtml(LETTERS[j], false, false);
        }
        html += '</div>';
        html += '<div style="font-family:var(--font-mono);font-size:0.88rem;color:var(--ink-2)">' + t('Arrange {m} blocks ({m}!) × internal swaps (AB or BA, 2!) = {ans}', { m: n - 1, ans: totalTogether }) + '</div>';
      } else {
        var othersFact = math.factorial(n - 2);
        var gaps = n - 1;
        var gapWays = math.nPr(gaps, 2);
        var totalSep = othersFact * gapWays;
        setPerm((n - 2) + '! × ' + gaps + 'P2 = ' + totalSep);
        setComb(t('Complement') + ': ' + n + '! − ' + (n - 1) + '!×2! = ' + totalSep);
        setRule(t('Arrange {k} other items first → {g} gaps available for A and B.', { k: n - 2, g: gaps }));

        html += '<div style="margin-bottom:0.6rem;font-weight:700">' + t('Gap method: arrange the {k} other items first to create {g} gaps:', { k: n - 2, g: gaps }) + '</div>';
        html += '<div style="display:flex;flex-wrap:wrap;gap:0.35rem;align-items:center;margin-bottom:0.75rem">';
        for (var g = 0; g < n - 2; g++) {
          html += '<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:34px;border:1px dashed var(--line-strong);border-radius:var(--radius);color:var(--ink-3);font-family:var(--font-mono);font-size:0.85rem">_</span>';
          html += tileHtml(LETTERS[g + 2], false, false);
        }
        html += '<span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:34px;border:1px dashed var(--line-strong);border-radius:var(--radius);color:var(--ink-3);font-family:var(--font-mono);font-size:0.85rem">_</span>';
        html += '</div>';
        html += '<div style="font-family:var(--font-mono);font-size:0.88rem;color:var(--ink-2)">' + t('Arrange {k} items ({k}!) × place A & B into 2 of {g} gaps ({g}P2) = {ans}', { k: n - 2, g: gaps, ans: totalSep }) + '</div>';
      }

      box.innerHTML = html;
    }

    update();
  });

  /* ------------------------------------------------------------------------
     2. Extended Binomial Approximation & Validity Interval (t1-3.rational-binomial)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-3.rational-binomial', function (w) {
    var PRESETS = [
      { id: '0', label: '(1 + x)⁻¹  [valid |x| < 1]', a: 1, b: 1, alpha: -1, radius: 1 },
      { id: '1', label: '(1 + x)^(1/2)  [valid |x| < 1]', a: 1, b: 1, alpha: 0.5, radius: 1 },
      { id: '2', label: '(1 + x)^(-1/2)  [valid |x| < 1]', a: 1, b: 1, alpha: -0.5, radius: 1 },
      { id: '3', label: '(1 − 2x)⁻¹  [valid |x| < 0.5]', a: 1, b: -2, alpha: -1, radius: 0.5 },
      { id: '4', label: '(1 + x)⁻²  [valid |x| < 1]', a: 1, b: 1, alpha: -2, radius: 1 }
    ];
    var cur = PRESETS[0];

    w.select({
      label: t('Function f(x)'),
      value: '0',
      options: PRESETS.map(function (pr) { return { value: pr.id, label: pr.label }; }),
      onChange: function (v) {
        cur = PRESETS[Number(v)] || PRESETS[0];
        update();
      }
    });

    var degCtl = w.slider({ label: t('Approximation degree N'), min: 1, max: 3, step: 1, value: 2, onInput: update });
    var xCtl = w.slider({ label: t('Test point x₀'), min: -1.1, max: 1.1, step: 0.05, value: 0.3, onInput: update });

    var setExact = w.readoutItem(t('Exact f(x₀)'));
    var setApprox = w.readoutItem(t('Binomial P_N(x₀)'));
    var setStatus = w.readoutItem(t('Error & validity'), { text: true });

    var chartBox = document.createElement('div');
    w.stage.appendChild(chartBox);
    var chart = null;

    function polyCoeff(alpha, b, k) {
      var num = 1;
      for (var i = 0; i < k; i++) num *= (alpha - i);
      return (num / math.factorial(k)) * Math.pow(b, k);
    }

    function evalPoly(x, N) {
      var sum = 0;
      for (var k = 0; k <= N; k++) {
        sum += polyCoeff(cur.alpha, cur.b, k) * Math.pow(x, k);
      }
      return sum;
    }

    function evalExact(x) {
      var base = cur.a + cur.b * x;
      if (cur.alpha === 0.5 || cur.alpha === -0.5) {
        if (base <= 0 && cur.alpha < 0) return NaN;
        if (base < 0) return NaN;
      }
      if (Math.abs(base) < 1e-6 && cur.alpha < 0) return NaN;
      return Math.pow(base, cur.alpha);
    }

    function update() {
      var N = Math.round(degCtl.value);
      var x0 = xCtl.value;
      var exact = evalExact(x0);
      var approx = evalPoly(x0, N);
      var valid = Math.abs(x0) < cur.radius;

      setExact(isFinite(exact) ? math.fixed(exact, 4) : t('Undefined'));
      setApprox(math.fixed(approx, 4));
      if (isFinite(exact)) {
        var err = Math.abs(exact - approx);
        setStatus(
          (valid ? t('Inside (−R, R)') : t('Outside (−R, R)!')) +
          ' · |Δ| = ' + math.fixed(err, 4)
        );
      } else {
        setStatus(t('Outside domain / asymptote'));
      }

      var asymptotes = [
        { x: -cur.radius, label: 'x = −' + cur.radius },
        { x: cur.radius, label: 'x = ' + cur.radius }
      ];

      var pts = [{ x: x0, y: approx, label: 'P' + N + '(' + math.fixed(x0, 2) + ')', color: '--ahl' }];
      if (isFinite(exact) && exact > -4 && exact < 6) {
        pts.push({ x: x0, y: exact, label: 'f(' + math.fixed(x0, 2) + ')', color: '--accent' });
      }

      var spec = {
        label: t('Extended binomial approximation vs exact rational/radical function'),
        height: 290,
        x: { label: 'x', min: -1.4, max: 1.4, step: 0.5 },
        y: { label: 'y', min: -1, max: 4, step: 1 },
        OriginAxes: true,
        asymptotes: asymptotes,
        functions: [
          { fn: evalExact, name: t('Exact f(x)'), color: '--accent', width: 2.5 },
          { fn: function (xv) { return evalPoly(xv, N); }, name: t('Degree N = {n} polynomial', { n: N }), color: '--ahl', dash: [6, 4], width: 2.5 }
        ],
        points: pts
      };

      if (!chart) chart = S1.chart.funcPlot(chartBox, spec);
      else chart.update(spec);
    }

    update();
  });
})();
