/* ==========================================================================
   Widgets for Topic 1.2 — Exponents, logarithms and the binomial theorem
   t1-2.log-scale        Exponential & Logarithm Inverse Mirror + Change of Base
   t1-2.binomial-finder  Binomial General Term Finder & Pascal Row Explorer
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1, math = S1.math;
  var t = S1.t || function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }) : s; };

  /* ------------------------------------------------------------------------
     1. Exponential & Logarithm Mirror + Change of Base (t1-2.log-scale)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-2.log-scale', function (w) {
    var baseCtl = w.slider({ label: t('Base a'), min: 1.5, max: 5, step: 0.25, value: 2, onInput: update });
    var xCtl = w.slider({ label: t('Exponent x (so b = a^x)'), min: -2, max: 3, step: 0.25, value: 2, onInput: update });

    var setExp = w.readoutItem(t('Exponential form'));
    var setLog = w.readoutItem(t('Logarithmic form'));
    var setBaseE = w.readoutItem(t('Change of base (ln b / ln a)'));

    var chartBox = document.createElement('div');
    w.stage.appendChild(chartBox);
    var chart = null;

    function update() {
      var a = baseCtl.value, x = xCtl.value;
      var b = Math.pow(a, x);
      var lna = Math.log(a), lnb = Math.log(b);

      setExp(math.fmt(a, 3) + '^' + math.fmt(x, 3) + ' = ' + math.fmt(b, 3));
      setLog('log_{' + math.fmt(a, 3) + '}(' + math.fmt(b, 3) + ') = ' + math.fmt(x, 3));
      setBaseE(math.fmt(lnb, 3) + ' / ' + math.fmt(lna, 3) + ' = ' + math.fmt(x, 3));

      var spec = {
        label: t('Inverse reflection of y = a^x and y = log_a(x) across y = x'),
        height: 290,
        equalAspect: true,
        x: { label: 'x', min: -3, max: 8, step: 2 },
        y: { label: 'y', min: -3, max: 8, step: 2 },
        lines: [
          { x1: -4, y1: -4, x2: 9, y2: 9, color: '--line-strong', dash: [5, 4], width: 1.5 },
          { x1: x, y1: b, x2: b, y2: x, color: '--amber-line', dash: [3, 3], width: 1.5 }
        ],
        functions: [
          { fn: function (xv) { return Math.pow(a, xv); }, name: t('y = a^x'), color: '--accent', width: 2.5 },
          { fn: function (xv) { return xv > 0 ? Math.log(xv) / lna : NaN; }, domain: [0.02, 10], name: t('y = log_a(x)'), color: '--ahl', width: 2.5 }
        ],
        points: [
          { x: x, y: b, label: 'P(' + math.fmt(x, 2) + ', ' + math.fmt(b, 2) + ')', color: '--accent' },
          { x: b, y: x, label: 'P\'(' + math.fmt(b, 2) + ', ' + math.fmt(x, 2) + ')', color: '--ahl' }
        ]
      };
      if (!chart) chart = S1.chart.funcPlot(chartBox, spec);
      else chart.update(spec);
    }

    update();
  });

  /* ------------------------------------------------------------------------
     2. Binomial General Term Finder (t1-2.binomial-finder)
     ------------------------------------------------------------------------ */
  S1.widgets.register('t1-2.binomial-finder', function (w) {
    var PRESETS = [
      { id: '0', label: '(2x² − 1/x)^6  [constant term at r = 4]', a: 2, p: 2, b: -1, q: -1, n: 6, defaultR: 4 },
      { id: '1', label: '(x² + 2/x)^6  [x³ term at r = 3]', a: 1, p: 2, b: 2, q: -1, n: 6, defaultR: 3 },
      { id: '2', label: '(3x − 2/x²)^6  [constant term at r = 2]', a: 3, p: 1, b: -2, q: -2, n: 6, defaultR: 2 },
      { id: '3', label: '(2x + 3)^5  [polynomial expansion]', a: 2, p: 1, b: 3, q: 0, n: 5, defaultR: 2 }
    ];
    var cur = PRESETS[0];

    var sel = w.select({
      label: t('Binomial expression'),
      value: '0',
      options: PRESETS.map(function (pr) { return { value: pr.id, label: pr.label }; }),
      onChange: function (v) {
        cur = PRESETS[Number(v)] || PRESETS[0];
        rCtl.setRange(0, cur.n, 1, true);
        rCtl.setValue(cur.defaultR, true);
        update();
      }
    });

    var rCtl = w.slider({ label: t('Term index r (for T_{r+1})'), min: 0, max: 6, step: 1, value: 4, onInput: update });

    var setFormula = w.readoutItem(t('General term T_{r+1}'));
    var setPower = w.readoutItem(t('Net power of x'));
    var setCoeff = w.readoutItem(t('Evaluated term'));

    var box = document.createElement('div');
    box.style.padding = '0.8rem 1rem';
    w.stage.appendChild(box);

    function update() {
      var r = Math.round(rCtl.value), n = cur.n;
      var comb = math.nCr(n, r);
      var aPow = Math.pow(cur.a, n - r);
      var bPow = Math.pow(cur.b, r);
      var coeff = comb * aPow * bPow;
      var xExp = cur.p * (n - r) + cur.q * r;

      setFormula(n + 'C' + r + ' · (' + cur.a + ')^' + (n - r) + ' · (' + cur.b + ')^' + r + ' · x^{' + cur.p + '(' + (n - r) + ') + (' + cur.q + ')(' + r + ')}');
      setPower('x^' + xExp + (xExp === 0 ? ' (' + t('Constant term!') + ')' : ''));
      setCoeff(coeff + (xExp === 0 ? '' : (xExp === 1 ? 'x' : 'x^' + xExp)));

      var html = '<div style="margin-bottom:0.75rem;font-weight:700">' + t('Pascal row n = {n} and all {m} terms:', { n: n, m: n + 1 }) + '</div>';
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(115px,1fr));gap:0.5rem">';
      for (var k = 0; k <= n; k++) {
        var cK = math.nCr(n, k) * Math.pow(cur.a, n - k) * Math.pow(cur.b, k);
        var expK = cur.p * (n - k) + cur.q * k;
        var active = k === r;
        var isConst = expK === 0;
        var border = active ? '2px solid var(--accent)' : '1px solid var(--line-strong)';
        var bg = active ? 'var(--accent-soft)' : 'var(--surface)';
        html += '<div style="border:' + border + ';background:' + bg + ';padding:0.5rem;border-radius:var(--radius);font-family:var(--font-mono);font-size:0.84rem">';
        html += '<div><strong>r = ' + k + '</strong> (' + n + 'C' + k + ' = ' + math.nCr(n, k) + ')</div>';
        html += '<div style="margin-top:0.2rem">' + (cK >= 0 && k > 0 ? '+' : '') + cK + (expK === 0 ? '' : (expK === 1 ? 'x' : 'x<sup>' + String(expK).replace('-', '−') + '</sup>')) + '</div>';
        if (isConst) html += '<div style="color:var(--ok);font-size:0.76rem;font-weight:700">' + t('Constant (x⁰)') + '</div>';
        html += '</div>';
      }
      html += '</div>';
      box.innerHTML = html;
    }

    update();
  });
})();
