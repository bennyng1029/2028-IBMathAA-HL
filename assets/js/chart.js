/* ==========================================================================
   Analysis Lab — chart.js   (optional; load after core.js)
   Canvas charts, 2D mathematical function/calculus plotter, and 3D vector/plane
   viewer in the site's theme: S1.chart.

     S1.chart.plot(el, spec)          axes + line / scatter / bar / stick series
     S1.chart.funcPlot(el, spec)      2D coordinate function, integral, slope field & Argand plotter
     S1.chart.view3d(el, spec)        interactive rotatable 3D vector, line, plane & solid viewer

   Colours are CSS tokens. Charts redraw on resize, theme change and language change.
   Specs and examples: docs/AUTHORING.md.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1;
  if (!S1 || !S1.util) { if (window.console) console.error('chart.js needs core.js to be loaded first'); return; }
  var t = S1.i18n.ui, tl = S1.i18n.either, doc = document;
  var SERIES_TOKENS = ['--accent', '--ahl', '--amber-line', '--ok', '--bad', '--ink-2'];

  function resolveColor(c) {
    if (!c) return S1.theme.color('--accent');
    return c.slice(0, 2) === '--' ? (S1.theme.color(c) || c) : c;
  }

  function niceStep(span, target) {
    var raw = span / Math.max(1, target), pow = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10)), f = raw / pow;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * pow;
  }
  function ticksFor(ax, lo, hi, target) {
    if (ax.ticks) return ax.ticks.slice();
    var step = ax.step || niceStep(hi - lo, target), out = [], first = Math.ceil(lo / step - 1e-9) * step;
    for (var v = first; v <= hi + step * 1e-6; v += step) out.push(Math.abs(v) < step * 1e-9 ? 0 : Number(v.toPrecision(12)));
    return out;
  }
  function fmtTick(ax, v) { return ax.format ? ax.format(v) : String(v).replace('-', '−'); }
  function pointOf(d) { return Array.isArray(d) ? { x: d[0], y: d[1], label: d[2] } : d; }

  /**
   * plot(el, spec) → {el, canvas, update(spec), redraw(), destroy()}
   */
  function plot(el, spec) {
    el = typeof el === 'string' ? doc.querySelector(el) : el;
    el.innerHTML = ''; el.classList.add('chart'); el.setAttribute('data-i18n', 'off');
    var canvas = doc.createElement('canvas');
    canvas.setAttribute('role', 'img'); canvas.style.display = 'block';
    el.appendChild(canvas);
    var ctx = canvas.getContext('2d'), W = 0, H = 0;
    S1.i18n.liveAttr(canvas, 'aria-label', function () { return tl(spec.label || 'Chart'); });

    function size() {
      var w = Math.max(220, Math.floor(el.clientWidth || 320)), h = spec.height || 260, dpr = Math.min(window.devicePixelRatio || 1, 3);
      W = w; H = h; canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function draw() {
      var col = resolveColor, ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3'), grid = col('--line'), surface = col('--surface');
      var body = S1.theme.color('--font-body') || 'sans-serif', mono = S1.theme.color('--font-mono') || 'monospace';
      var xa = spec.x || {}, ya = spec.y || {}, series = spec.series || [], cats = spec.categories;
      ctx.clearRect(0, 0, W, H);
      var xs = [], ys = [];
      series.forEach(function (s) { (s.data || []).forEach(function (d) { d = pointOf(d); xs.push(d.x); ys.push(d.y); }); });
      var xmin = xa.min != null ? xa.min : cats ? -0.5 : (xs.length ? Math.min.apply(null, xs) : 0);
      var xmax = xa.max != null ? xa.max : cats ? cats.length - 0.5 : (xs.length ? Math.max.apply(null, xs) : 1);
      var ymin = ya.min != null ? ya.min : Math.min(0, ys.length ? Math.min.apply(null, ys) : 0);
      var ymax = ya.max != null ? ya.max : (ys.length ? Math.max.apply(null, ys) : 1);
      if (xmax === xmin) xmax = xmin + 1;
      if (ya.max == null) { var st = niceStep(ymax - ymin || 1, 5); ymax = Math.ceil(ymax / st + 1e-9) * st; }
      if (ymax === ymin) ymax = ymin + 1;
      var legend = series.filter(function (s) { return s.name; });
      var m = { l: 56, r: 16, t: legend.length ? 30 : 14, b: xa.label ? 48 : 30 };
      if (W < 420) m.l = 48;
      if (ya.label) {
        ctx.font = '12px ' + mono;
        var tickW = 0;
        ticksFor(ya, ymin, ymax, Math.max(3, Math.floor((H - m.t - m.b) / 44))).forEach(function (v) { tickW = Math.max(tickW, ctx.measureText(fmtTick(ya, v)).width); });
        m.l = Math.max(m.l, Math.ceil(tickW) + 7 + 24);
      }
      var pw = W - m.l - m.r, ph = H - m.t - m.b;
      function X(v) { var f = (v - xmin) / (xmax - xmin); if (xa.reverse) f = 1 - f; return m.l + f * pw; }
      function Y(v) { var f = (v - ymin) / (ymax - ymin); if (ya.reverse) f = 1 - f; return m.t + (1 - f) * ph; }

      ctx.font = '12px ' + mono; ctx.lineWidth = 1;
      ticksFor(ya, ymin, ymax, Math.max(3, Math.floor(ph / 44))).forEach(function (v) {
        var y = Math.round(Y(v)) + 0.5;
        ctx.strokeStyle = grid; ctx.beginPath(); ctx.moveTo(m.l, y); ctx.lineTo(W - m.r, y); ctx.stroke();
        ctx.fillStyle = ink3; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(fmtTick(ya, v), m.l - 7, y);
      });
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      if (cats) {
        var every = Math.ceil(cats.length * 26 / pw);
        cats.forEach(function (c, i) { if (i % every) return; ctx.fillStyle = ink3; ctx.fillText(c, X(i), m.t + ph + 7); });
      } else {
        ticksFor(xa, xmin, xmax, Math.max(3, Math.floor(pw / 70))).forEach(function (v) {
          var x = Math.round(X(v)) + 0.5;
          ctx.strokeStyle = ink3; ctx.beginPath(); ctx.moveTo(x, m.t + ph); ctx.lineTo(x, m.t + ph + 4); ctx.stroke();
          ctx.fillStyle = ink3; ctx.fillText(fmtTick(xa, v), x, m.t + ph + 7);
        });
      }
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(m.l + 0.5, m.t); ctx.lineTo(m.l + 0.5, m.t + ph + 0.5); ctx.lineTo(W - m.r, m.t + ph + 0.5); ctx.stroke();
      ctx.fillStyle = ink2; ctx.font = '13px ' + body;
      if (xa.label) { ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; ctx.fillText(tl(xa.label), m.l + pw / 2, H - 4); }
      if (ya.label) { ctx.save(); ctx.translate(13, m.t + ph / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(tl(ya.label), 0, 0); ctx.restore(); }

      ctx.save(); ctx.beginPath(); ctx.rect(m.l, m.t - 6, pw + 1, ph + 6); ctx.clip();
      var barSeries = series.filter(function (s) { return s.type === 'bar'; }), barIdx = 0;
      series.forEach(function (s, si) {
        var c = col(s.color || SERIES_TOKENS[si % SERIES_TOKENS.length]), pts = (s.data || []).map(pointOf);
        var base = Y(Math.max(ymin, Math.min(ymax, 0)));
        if (s.type === 'bar') {
          var slot = pw / (cats ? cats.length : Math.max(1, pts.length)), bw = Math.max(2, slot * 0.7 / barSeries.length - 2), k = barIdx++;
          pts.forEach(function (p) {
            var x0 = X(p.x) - (barSeries.length * (bw + 2)) / 2 + k * (bw + 2) + 1, y = Y(p.y);
            ctx.fillStyle = c; ctx.fillRect(x0, Math.min(y, base), bw, Math.abs(base - y));
          });
        } else if (s.type === 'stick') {
          ctx.strokeStyle = c; ctx.lineWidth = s.width || 2;
          pts.forEach(function (p) { var x = Math.round(X(p.x)) + 0.5; ctx.beginPath(); ctx.moveTo(x, base); ctx.lineTo(x, Y(p.y)); ctx.stroke(); });
        } else {
          if (s.type !== 'scatter') {
            ctx.strokeStyle = c; ctx.lineWidth = s.width || 2; ctx.lineJoin = 'round';
            if (s.dash) ctx.setLineDash(s.dash);
            ctx.beginPath();
            pts.forEach(function (p, i) { if (i) ctx.lineTo(X(p.x), Y(p.y)); else ctx.moveTo(X(p.x), Y(p.y)); });
            ctx.stroke();
            if (s.dash) ctx.setLineDash([]);
          }
          if (s.type === 'scatter' || s.points) {
            pts.forEach(function (p) { ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), 4, 0, Math.PI * 2); ctx.fillStyle = c; ctx.fill(); ctx.strokeStyle = surface; ctx.lineWidth = 1.5; ctx.stroke(); });
          }
        }
      });
      ctx.restore();
      series.forEach(function (s) {
        (s.data || []).map(pointOf).forEach(function (p) {
          if (p.label == null && !s.labels) return;
          var text = p.label != null ? String(p.label) : fmtTick(ya, p.y);
          ctx.font = '11px ' + mono; ctx.fillStyle = ink; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
          var tx = Math.max(m.l + 12, Math.min(W - m.r - 10, X(p.x)));
          ctx.fillText(text, tx, Math.max(11, (ya.reverse ? Math.max(Y(p.y), m.t) : Y(p.y)) - 6));
        });
      });
      (spec.annotations || []).forEach(function (a) {
        var text = tl(a.text), ax = X(a.x) + (a.dx || 0), ay = Y(a.y) + (a.dy == null ? -10 : a.dy);
        ctx.font = '12px ' + body; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        var tw = ctx.measureText(text).width + 8;
        ax = Math.max(m.l + tw / 2 + 2, Math.min(W - m.r - tw / 2, ax)); ay = Math.max(9, Math.min(m.t + ph - 9, ay));
        ctx.globalAlpha = 0.88; ctx.fillStyle = surface; ctx.fillRect(ax - tw / 2, ay - 8, tw, 16); ctx.globalAlpha = 1;
        ctx.fillStyle = ink; ctx.fillText(text, ax, ay);
      });
      var lx = m.l;
      ctx.font = '12px ' + body; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
      legend.forEach(function (s) {
        var c = col(s.color || SERIES_TOKENS[series.indexOf(s) % SERIES_TOKENS.length]), name = tl(s.name);
        ctx.fillStyle = c; ctx.fillRect(lx, 9, 14, 4); ctx.fillStyle = ink2; ctx.fillText(name, lx + 19, 11);
        lx += 19 + ctx.measureText(name).width + 16;
      });
    }
    size(); draw();
    var lastW = el.clientWidth;
    var onResize = function () { if (el.clientWidth === lastW) return; lastW = el.clientWidth; size(); draw(); };
    var undo = [], dead = false;
    function destroy() { if (dead) return; dead = true; undo.forEach(function (f) { f(); }); undo = []; }
    function listen(target, type, fn) { var h = function () { if (dead || !doc.documentElement.contains(canvas)) return destroy(); fn(); }; target.addEventListener(type, h); undo.push(function () { target.removeEventListener(type, h); }); }
    if (window.ResizeObserver) { var ro = new ResizeObserver(onResize); ro.observe(el); undo.push(function () { ro.disconnect(); }); } else listen(window, 'resize', onResize);
    listen(doc, 's1:themechange', draw);
    listen(doc, 's1:langchange', draw);
    return { el: el, canvas: canvas, redraw: draw, destroy: destroy, update: function (s) { spec = s; S1.i18n.render(canvas); size(); draw(); } };
  }

  /**
   * funcPlot(el, spec) → {el, canvas, redraw(), destroy(), update(spec)}
   * Mathematical 2D coordinate plotter supporting continuous functions, asymptotes,
   * shaded integral/probability regions, Riemann bars, slope fields, 2D vectors, circles & points.
   */
  function funcPlot(el, spec) {
    el = typeof el === 'string' ? doc.querySelector(el) : el;
    el.innerHTML = ''; el.classList.add('chart'); el.setAttribute('data-i18n', 'off');
    var canvas = doc.createElement('canvas');
    canvas.setAttribute('role', 'img'); canvas.style.display = 'block';
    el.appendChild(canvas);
    var ctx = canvas.getContext('2d'), W = 0, H = 0;
    S1.i18n.liveAttr(canvas, 'aria-label', function () { return tl(spec.label || 'Function graph'); });

    function size() {
      var w = Math.max(220, Math.floor(el.clientWidth || 320)), h = spec.height || 280, dpr = Math.min(window.devicePixelRatio || 1, 3);
      W = w; H = h; canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      var col = resolveColor, ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3'), grid = col('--line'), surface = col('--surface');
      var body = S1.theme.color('--font-body') || 'sans-serif', mono = S1.theme.color('--font-mono') || 'monospace';
      var xa = spec.x || {}, ya = spec.y || {};
      var xmin = xa.min != null ? xa.min : -5, xmax = xa.max != null ? xa.max : 5;
      var ymin = ya.min != null ? ya.min : -5, ymax = ya.max != null ? ya.max : 5;
      if (xmax <= xmin) xmax = xmin + 1;
      if (ymax <= ymin) ymax = ymin + 1;

      var fns = spec.functions || [], series = spec.series || [];
      var legendItems = [];
      fns.forEach(function (f, i) { if (f.name) legendItems.push({ name: f.name, color: f.color || SERIES_TOKENS[i % SERIES_TOKENS.length], dash: f.dash }); });
      series.forEach(function (s, i) { if (s.name) legendItems.push({ name: s.name, color: s.color || SERIES_TOKENS[(fns.length + i) % SERIES_TOKENS.length], dash: s.dash }); });

      var m = { l: 48, r: 18, t: legendItems.length ? 30 : 14, b: xa.label ? 44 : 28 };
      ctx.font = '12px ' + mono;
      var yTicks = ticksFor(ya, ymin, ymax, Math.max(3, Math.floor((H - m.t - m.b) / 40)));
      var xTicks = ticksFor(xa, xmin, xmax, Math.max(3, Math.floor((W - m.l - m.r) / 65)));
      var tickW = 0;
      yTicks.forEach(function (v) { tickW = Math.max(tickW, ctx.measureText(fmtTick(ya, v)).width); });
      m.l = Math.max(m.l, Math.ceil(tickW) + (ya.label ? 30 : 14));

      var pw = W - m.l - m.r, ph = H - m.t - m.b;
      if (spec.equalAspect) {
        var scaleX = pw / (xmax - xmin), scaleY = ph / (ymax - ymin);
        if (scaleX > scaleY) {
          var midX = (xmin + xmax) / 2, spanX = pw / scaleY;
          xmin = midX - spanX / 2; xmax = midX + spanX / 2;
          xTicks = ticksFor(xa, xmin, xmax, Math.max(3, Math.floor(pw / 65)));
        }
      }
      function X(v) { return m.l + ((v - xmin) / (xmax - xmin)) * pw; }
      function Y(v) { return m.t + (1 - (v - ymin) / (ymax - ymin)) * ph; }

      ctx.clearRect(0, 0, W, H);

      // Grid & ticks
      ctx.font = '11px ' + mono; ctx.lineWidth = 1;
      yTicks.forEach(function (v) {
        var y = Math.round(Y(v)) + 0.5;
        ctx.strokeStyle = grid; ctx.beginPath(); ctx.moveTo(m.l, y); ctx.lineTo(W - m.r, y); ctx.stroke();
        ctx.fillStyle = ink3; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        ctx.fillText(fmtTick(ya, v), m.l - 6, y);
      });
      xTicks.forEach(function (v) {
        var x = Math.round(X(v)) + 0.5;
        ctx.strokeStyle = grid; ctx.beginPath(); ctx.moveTo(x, m.t); ctx.lineTo(x, m.t + ph); ctx.stroke();
        ctx.fillStyle = ink3; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        ctx.fillText(fmtTick(xa, v), x, m.t + ph + 6);
      });

      // Coordinate axes x = 0 and y = 0 if inside plot range
      ctx.strokeStyle = col('--line-strong'); ctx.lineWidth = 1.4;
      if (ymin <= 0 && ymax >= 0) {
        var y0 = Math.round(Y(0)) + 0.5;
        ctx.beginPath(); ctx.moveTo(m.l, y0); ctx.lineTo(W - m.r, y0); ctx.stroke();
      }
      if (xmin <= 0 && xmax >= 0) {
        var x0 = Math.round(X(0)) + 0.5;
        ctx.beginPath(); ctx.moveTo(x0, m.t); ctx.lineTo(x0, m.t + ph); ctx.stroke();
      }

      // Outer frame
      ctx.strokeStyle = ink; ctx.lineWidth = 1.5;
      ctx.strokeRect(m.l + 0.5, m.t + 0.5, pw, ph);

      // Axis labels
      ctx.fillStyle = ink2; ctx.font = '13px ' + body;
      if (xa.label) { ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; ctx.fillText(tl(xa.label), m.l + pw / 2, H - 3); }
      if (ya.label) { ctx.save(); ctx.translate(13, m.t + ph / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(tl(ya.label), 0, 0); ctx.restore(); }

      // Clipped drawing region
      ctx.save(); ctx.beginPath(); ctx.rect(m.l, m.t, pw, ph); ctx.clip();

      // 1. Shaded integral / probability fills
      (spec.fills || []).forEach(function (fl) {
        var a = Math.max(xmin, fl.from != null ? fl.from : xmin);
        var b = Math.min(xmax, fl.to != null ? fl.to : xmax);
        if (b <= a || typeof fl.fn !== 'function') return;
        var steps = Math.max(60, Math.round(pw * (b - a) / (xmax - xmin)));
        var dx = (b - a) / steps;
        ctx.save();
        ctx.fillStyle = col(fl.color || '--accent-soft');
        if (fl.alpha != null) ctx.globalAlpha = fl.alpha;
        ctx.beginPath();
        for (var i = 0; i <= steps; i++) {
          var xv = a + i * dx, yv = fl.fn(xv);
          if (!isFinite(yv)) yv = 0;
          if (i === 0) ctx.moveTo(X(xv), Y(yv)); else ctx.lineTo(X(xv), Y(yv));
        }
        for (var j = steps; j >= 0; j--) {
          var xv2 = a + j * dx;
          var yv2 = typeof fl.fn2 === 'function' ? fl.fn2(xv2) : (fl.fn2 != null ? fl.fn2 : 0);
          if (!isFinite(yv2)) yv2 = 0;
          ctx.lineTo(X(xv2), Y(yv2));
        }
        ctx.closePath(); ctx.fill(); ctx.restore();
      });

      // 2. Rectangular / trapezoidal bars (Riemann sums, histograms)
      (spec.bars || []).forEach(function (b) {
        var bx0 = X(b.x0), bx1 = X(b.x1), by0 = Y(b.y0 || 0), by1 = Y(b.y1);
        ctx.save();
        ctx.fillStyle = col(b.color || '--accent-soft');
        if (b.alpha != null) ctx.globalAlpha = b.alpha;
        ctx.fillRect(Math.min(bx0, bx1), Math.min(by0, by1), Math.abs(bx1 - bx0), Math.abs(by1 - by0));
        ctx.restore();
        if (b.stroke !== false) {
          ctx.strokeStyle = col(b.stroke || '--accent'); ctx.lineWidth = 1.2;
          ctx.strokeRect(Math.min(bx0, bx1), Math.min(by0, by1), Math.abs(bx1 - bx0), Math.abs(by1 - by0));
        }
      });

      // 3. Slope field (direction field for differential equations)
      if (spec.slopeField && typeof spec.slopeField.fn === 'function') {
        var sf = spec.slopeField, nx = sf.nx || 15, ny = sf.ny || 11;
        var sdx = (xmax - xmin) / (nx + 1), sdy = (ymax - ymin) / (ny + 1);
        var segLen = Math.min(pw / nx, ph / ny) * 0.36;
        ctx.strokeStyle = col(sf.color || '--line-strong'); ctx.lineWidth = 1.3;
        for (var ix = 1; ix <= nx; ix++) {
          for (var iy = 1; iy <= ny; iy++) {
            var sx = xmin + ix * sdx, sy = ymin + iy * sdy;
            var slope = sf.fn(sx, sy);
            if (!isFinite(slope)) continue;
            var px = X(sx), py = Y(sy);
            var screenSlope = -slope * (ph / (ymax - ymin)) / (pw / (xmax - xmin));
            var ang = Math.atan(screenSlope);
            var hx = Math.cos(ang) * segLen, hy = Math.sin(ang) * segLen;
            ctx.beginPath(); ctx.moveTo(px - hx, py - hy); ctx.lineTo(px + hx, py + hy); ctx.stroke();
          }
        }
      }

      // 4. Circles / arcs (unit circle, Argand modulus circle)
      (spec.circles || []).forEach(function (c) {
        var cx = X(c.x || 0), cy = Y(c.y || 0);
        var rx = Math.abs(X((c.x || 0) + c.r) - cx), ry = Math.abs(Y((c.y || 0) + c.r) - cy);
        ctx.save();
        ctx.strokeStyle = col(c.color || '--line-strong'); ctx.lineWidth = c.width || 1.5;
        if (c.dash) ctx.setLineDash(c.dash);
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, c.startAngle || 0, c.endAngle != null ? c.endAngle : Math.PI * 2);
        if (c.fill) { ctx.fillStyle = col(c.fill); ctx.fill(); }
        ctx.stroke();
        ctx.restore();
      });

      // 5. Reference / asymptote / secant / tangent lines
      (spec.lines || []).forEach(function (ln) {
        ctx.save();
        ctx.strokeStyle = col(ln.color || '--line-strong');
        ctx.lineWidth = ln.width || 1.5;
        if (ln.dash) ctx.setLineDash(ln.dash);
        ctx.beginPath();
        if (ln.x != null && ln.y == null) {
          ctx.moveTo(X(ln.x), m.t); ctx.lineTo(X(ln.x), m.t + ph);
        } else if (ln.y != null && ln.x == null) {
          ctx.moveTo(m.l, Y(ln.y)); ctx.lineTo(m.l + pw, Y(ln.y));
        } else if (ln.x1 != null && ln.y1 != null && ln.x2 != null && ln.y2 != null) {
          ctx.moveTo(X(ln.x1), Y(ln.y1)); ctx.lineTo(X(ln.x2), Y(ln.y2));
        }
        ctx.stroke();
        ctx.restore();
      });

      // 6. Continuous functions
      fns.forEach(function (f, fi) {
        if (typeof f.fn !== 'function') return;
        var domA = f.domain && f.domain[0] != null ? Math.max(xmin, f.domain[0]) : xmin;
        var domB = f.domain && f.domain[1] != null ? Math.min(xmax, f.domain[1]) : xmax;
        if (domB <= domA) return;
        var samples = Math.max(240, Math.round(pw * 1.5));
        var step = (domB - domA) / samples;
        var ySpan = ymax - ymin;
        ctx.save();
        ctx.strokeStyle = col(f.color || SERIES_TOKENS[fi % SERIES_TOKENS.length]);
        ctx.lineWidth = f.width || 2.2;
        ctx.lineJoin = 'round';
        if (f.dash) ctx.setLineDash(f.dash);
        ctx.beginPath();
        var penDown = false, prevY = null;
        for (var i = 0; i <= samples; i++) {
          var xv = domA + i * step, yv = f.fn(xv);
          if (!isFinite(yv) || Math.abs(yv) > ySpan * 50) {
            penDown = false; prevY = null; continue;
          }
          // Detect discontinuity / vertical asymptote jump
          if (prevY != null && Math.abs(yv - prevY) > ySpan * 1.6 && ((yv - ymin) * (prevY - ymin) < 0 || Math.abs(yv - prevY) > ySpan * 3)) {
            penDown = false;
          }
          var sx = X(xv), sy = Y(yv);
          if (!penDown) { ctx.moveTo(sx, sy); penDown = true; }
          else { ctx.lineTo(sx, sy); }
          prevY = yv;
        }
        ctx.stroke();
        ctx.restore();
      });

      // 7. Data series (scatter / polyline / stick)
      series.forEach(function (s, si) {
        var c = col(s.color || SERIES_TOKENS[(fns.length + si) % SERIES_TOKENS.length]), pts = (s.data || []).map(pointOf);
        if (s.type === 'stick') {
          var base = Y(Math.max(ymin, Math.min(ymax, 0)));
          ctx.strokeStyle = c; ctx.lineWidth = s.width || 2.5;
          pts.forEach(function (p) { var x = Math.round(X(p.x)) + 0.5; ctx.beginPath(); ctx.moveTo(x, base); ctx.lineTo(x, Y(p.y)); ctx.stroke(); });
        } else if (s.type !== 'scatter') {
          ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = s.width || 2;
          if (s.dash) ctx.setLineDash(s.dash);
          ctx.beginPath();
          pts.forEach(function (p, i) { if (i) ctx.lineTo(X(p.x), Y(p.y)); else ctx.moveTo(X(p.x), Y(p.y)); });
          ctx.stroke(); ctx.restore();
        }
        if (s.type === 'scatter' || s.points) {
          pts.forEach(function (p) {
            ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), s.r || 4, 0, Math.PI * 2);
            ctx.fillStyle = c; ctx.fill(); ctx.strokeStyle = surface; ctx.lineWidth = 1.5; ctx.stroke();
          });
        }
      });

      // 8. 2D Vectors (Argand diagrams, 2D vectors)
      (spec.vectors || []).forEach(function (v) {
        var x0 = X(v.from ? v.from[0] : 0), y0 = Y(v.from ? v.from[1] : 0);
        var x1 = X(v.to[0]), y1 = Y(v.to[1]);
        var dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy);
        if (len < 3) return;
        var ux = dx / len, uy = dy / len, hd = Math.min(10, len * 0.4);
        var c = col(v.color || '--accent');
        ctx.save();
        ctx.strokeStyle = c; ctx.fillStyle = c; ctx.lineWidth = v.width || 2.2;
        if (v.dash) ctx.setLineDash(v.dash);
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - ux * hd * 0.7, y1 - uy * hd * 0.7); ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath(); ctx.moveTo(x1, y1);
        ctx.lineTo(x1 - ux * hd - uy * hd * 0.48, y1 - uy * hd + ux * hd * 0.48);
        ctx.lineTo(x1 - ux * hd + uy * hd * 0.48, y1 - uy * hd - ux * hd * 0.48);
        ctx.closePath(); ctx.fill();
        ctx.restore();
        if (v.label) {
          ctx.font = '600 12px ' + mono; ctx.fillStyle = c; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(tl(v.label), (x0 + x1) / 2 - uy * 12, (y0 + y1) / 2 + ux * 12);
        }
      });

      // 9. Highlighted points
      (spec.points || []).forEach(function (p) {
        if (!isFinite(p.x) || !isFinite(p.y)) return;
        var px = X(p.x), py = Y(p.y), r = p.r || 4.5, c = col(p.color || '--accent');
        ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
        if (p.hollow) {
          ctx.fillStyle = surface; ctx.fill();
          ctx.strokeStyle = c; ctx.lineWidth = 2; ctx.stroke();
        } else {
          ctx.fillStyle = c; ctx.fill();
          ctx.strokeStyle = surface; ctx.lineWidth = 1.5; ctx.stroke();
        }
      });

      ctx.restore(); // end clip

      // Unclipped point labels & annotations
      (spec.points || []).forEach(function (p) {
        if (!p.label || !isFinite(p.x) || !isFinite(p.y)) return;
        var text = tl(p.label), px = X(p.x) + (p.dx || 0), py = Y(p.y) + (p.dy != null ? p.dy : -12);
        ctx.font = '600 11.5px ' + mono; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        var tw = ctx.measureText(text).width + 8;
        px = Math.max(m.l + tw / 2 + 2, Math.min(W - m.r - tw / 2, px));
        py = Math.max(m.t + 9, Math.min(m.t + ph - 9, py));
        ctx.globalAlpha = 0.88; ctx.fillStyle = surface; ctx.fillRect(px - tw / 2, py - 8, tw, 16); ctx.globalAlpha = 1;
        ctx.fillStyle = ink; ctx.fillText(text, px, py);
      });

      (spec.annotations || []).forEach(function (a) {
        var text = tl(a.text), ax = X(a.x) + (a.dx || 0), ay = Y(a.y) + (a.dy == null ? -10 : a.dy);
        ctx.font = '12px ' + body; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        var tw = ctx.measureText(text).width + 8;
        ax = Math.max(m.l + tw / 2 + 2, Math.min(W - m.r - tw / 2, ax));
        ay = Math.max(9, Math.min(m.t + ph - 9, ay));
        ctx.globalAlpha = 0.88; ctx.fillStyle = surface; ctx.fillRect(ax - tw / 2, ay - 8, tw, 16); ctx.globalAlpha = 1;
        ctx.fillStyle = ink; ctx.fillText(text, ax, ay);
      });

      // Legend along the top
      var lx = m.l;
      ctx.font = '12px ' + body; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
      legendItems.forEach(function (item) {
        var c = col(item.color), name = tl(item.name);
        ctx.save();
        ctx.strokeStyle = c; ctx.lineWidth = 2.5;
        if (item.dash) ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(lx, 11); ctx.lineTo(lx + 16, 11); ctx.stroke();
        ctx.restore();
        ctx.fillStyle = ink2; ctx.fillText(name, lx + 21, 11);
        lx += 21 + ctx.measureText(name).width + 16;
      });
    }

    size(); draw();
    var lastW = el.clientWidth;
    var onResize = function () { if (el.clientWidth === lastW) return; lastW = el.clientWidth; size(); draw(); };
    var undo = [], dead = false;
    function destroy() { if (dead) return; dead = true; undo.forEach(function (f) { f(); }); undo = []; }
    function listen(target, type, fn) { var h = function () { if (dead || !doc.documentElement.contains(canvas)) return destroy(); fn(); }; target.addEventListener(type, h); undo.push(function () { target.removeEventListener(type, h); }); }
    if (window.ResizeObserver) { var ro = new ResizeObserver(onResize); ro.observe(el); undo.push(function () { ro.disconnect(); }); } else listen(window, 'resize', onResize);
    listen(doc, 's1:themechange', draw);
    listen(doc, 's1:langchange', draw);
    return { el: el, canvas: canvas, redraw: draw, destroy: destroy, update: function (s) { spec = s; S1.i18n.render(canvas); size(); draw(); } };
  }

  /**
   * view3d(el, spec) → {el, canvas, setSpec(spec), reset(), rotate(dYaw, dPitch), spin(on), redraw(), destroy()}
   * Interactive rotatable 3D coordinate viewer for vectors, lines, planes, and 3D solids.
   * Convention: (x, y, z) where z points upwards on screen when pitch = 0, or standard 3D math axes.
   */
  function view3d(el, spec) {
    el = typeof el === 'string' ? doc.querySelector(el) : el;
    el.innerHTML = ''; el.classList.add('mol', 'mol--3d'); el.setAttribute('data-i18n', 'off');
    var canvas = doc.createElement('canvas');
    canvas.className = 'mol__canvas'; canvas.tabIndex = 0; canvas.setAttribute('role', 'img');
    canvas.style.touchAction = 'pan-y'; canvas.style.display = 'block'; canvas.style.cursor = 'grab';
    el.appendChild(canvas);
    var ctx = canvas.getContext('2d'), W = 0, H = 0;
    var yaw0 = spec.yaw != null ? spec.yaw : -0.65, pitch0 = spec.pitch != null ? spec.pitch : 0.38;
    var yaw = yaw0, pitch = pitch0, spinning = false, raf = 0, visible = true;
    var reduced = S1.util.reducedMotion();

    S1.i18n.liveAttr(canvas, 'aria-label', function () {
      return tl(spec.label || '3D geometric diagram') + '. ' + t('Drag or use the arrow keys to rotate.');
    });

    function size() {
      var w = Math.max(200, Math.floor(el.clientWidth || 320)), h = spec.height || 300, dpr = Math.min(window.devicePixelRatio || 1, 3);
      W = w; H = h; canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Rotate 3D math coordinates [x, y, z] where z is vertical axis (up) and x, y form horizontal plane
    function rot(p) {
      var x = p[0], y = p[1], z = p[2];
      var cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      var rx = x * cy - y * sy;
      var ry = x * sy + y * cy;
      var screenX = rx;
      var screenY = z * cp - ry * sp;
      var depthZ = z * sp + ry * cp;
      return [screenX, screenY, depthZ];
    }

    function draw() {
      var col = resolveColor, ink = col('--ink'), ink2 = col('--ink-2'), ink3 = col('--ink-3'), surface = col('--surface');
      var mono = S1.theme.color('--font-mono') || 'monospace';
      ctx.clearRect(0, 0, W, H);

      var ext = spec.range || 5;
      var scale = Math.min(W, H) / (2 * ext) * 0.78;
      var cam = ext * 5.5;
      function project(p) {
        var r = rot(p), k = cam / (cam - r[2]);
        return { x: W / 2 + r[0] * scale * k, y: H / 2 - r[1] * scale * k, z: r[2], k: k };
      }

      var items = [];

      // 1. Coordinate axes (x, y, z)
      if (spec.axes !== false) {
        var axLen = ext * 0.92;
        [
          { to: [axLen, 0, 0], from: [-axLen * 0.35, 0, 0], label: 'x' },
          { to: [0, axLen, 0], from: [0, -axLen * 0.35, 0], label: 'y' },
          { to: [0, 0, axLen], from: [0, 0, -axLen * 0.35], label: 'z' }
        ].forEach(function (ax) {
          var p0 = project(ax.from), p1 = project(ax.to);
          items.push({ z: (p0.z + p1.z) / 2 - 0.05, type: 'axis', p0: p0, p1: p1, label: ax.label });
        });
      }

      // 2. Planes (specified by center + u,v or center + normal)
      (spec.planes || []).forEach(function (pl) {
        var c = pl.center || [0, 0, 0], sz = pl.size || (ext * 0.65);
        var u = pl.u, v = pl.v;
        if (!u || !v) {
          var n = pl.normal || [0, 0, 1];
          var nm = Math.hypot(n[0], n[1], n[2]) || 1;
          n = [n[0] / nm, n[1] / nm, n[2] / nm];
          var ref = Math.abs(n[0]) < 0.8 ? [1, 0, 0] : [0, 1, 0];
          u = [n[1] * ref[2] - n[2] * ref[1], n[2] * ref[0] - n[0] * ref[2], n[0] * ref[1] - n[1] * ref[0]];
          var um = Math.hypot(u[0], u[1], u[2]) || 1;
          u = [u[0] / um, u[1] / um, u[2] / um];
          v = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
        }
        var corners = [
          [c[0] - u[0] * sz - v[0] * sz, c[1] - u[1] * sz - v[1] * sz, c[2] - u[2] * sz - v[2] * sz],
          [c[0] + u[0] * sz - v[0] * sz, c[1] + u[1] * sz - v[1] * sz, c[2] + u[2] * sz - v[2] * sz],
          [c[0] + u[0] * sz + v[0] * sz, c[1] + u[1] * sz + v[1] * sz, c[2] + u[2] * sz + v[2] * sz],
          [c[0] - u[0] * sz + v[0] * sz, c[1] - u[1] * sz + v[1] * sz, c[2] - u[2] * sz + v[2] * sz]
        ].map(project);
        var avgZ = (corners[0].z + corners[1].z + corners[2].z + corners[3].z) / 4;
        items.push({ z: avgZ - 0.1, type: 'poly', pts: corners, color: pl.color || '--accent-soft', border: pl.border || '--accent', alpha: pl.alpha != null ? pl.alpha : 0.35, label: pl.label });
      });

      // 3. Polygons (pyramids, parallelograms, cross-sections)
      (spec.polygons || []).forEach(function (pg) {
        var pts = (pg.points || []).map(project);
        if (pts.length < 3) return;
        var avgZ = pts.reduce(function (s, p) { return s + p.z; }, 0) / pts.length;
        items.push({ z: avgZ - 0.05, type: 'poly', pts: pts, color: pg.color || '--accent-soft', border: pg.border || '--accent', alpha: pg.alpha != null ? pg.alpha : 0.35, label: pg.label });
      });

      // 4. Lines / segments
      (spec.lines || []).forEach(function (ln) {
        var p0 = project(ln.p0 || ln.from), p1 = project(ln.p1 || ln.to);
        items.push({ z: (p0.z + p1.z) / 2, type: 'line', p0: p0, p1: p1, ln: ln });
      });

      // 5. Vectors (arrows)
      (spec.vectors || []).forEach(function (v) {
        var p0 = project(v.from || [0, 0, 0]), p1 = project(v.to);
        items.push({ z: (p0.z + p1.z) / 2 + 0.02, type: 'vector', p0: p0, p1: p1, v: v });
      });

      // 6. Points
      (spec.points || []).forEach(function (pt) {
        var pos = Array.isArray(pt.pos) ? pt.pos : [pt.x || 0, pt.y || 0, pt.z || 0];
        var p = project(pos);
        items.push({ z: p.z + 0.05, type: 'point', p: p, pt: pt });
      });

      items.sort(function (a, b) { return a.z - b.z; });

      items.forEach(function (it) {
        if (it.type === 'axis') {
          ctx.save();
          ctx.strokeStyle = col('--line-strong'); ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(it.p0.x, it.p0.y); ctx.lineTo(it.p1.x, it.p1.y); ctx.stroke();
          ctx.fillStyle = ink3; ctx.font = '600 12px ' + mono; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          var dx = it.p1.x - it.p0.x, dy = it.p1.y - it.p0.y, l = Math.hypot(dx, dy) || 1;
          ctx.fillText(it.label, it.p1.x + (dx / l) * 12, it.p1.y + (dy / l) * 12);
          ctx.restore();
        } else if (it.type === 'poly') {
          ctx.save();
          ctx.beginPath();
          it.pts.forEach(function (p, i) { if (i) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); });
          ctx.closePath();
          if (it.color) {
            ctx.globalAlpha = it.alpha;
            ctx.fillStyle = col(it.color);
            ctx.fill();
          }
          ctx.globalAlpha = 0.85;
          ctx.strokeStyle = col(it.border || '--accent');
          ctx.lineWidth = 1.4;
          ctx.stroke();
          if (it.label) {
            ctx.globalAlpha = 1;
            ctx.font = '600 12px ' + mono; ctx.fillStyle = col(it.border || '--ink');
            ctx.fillText(tl(it.label), it.pts[0].x + 10, it.pts[0].y + 10);
          }
          ctx.restore();
        } else if (it.type === 'line') {
          ctx.save();
          ctx.strokeStyle = col(it.ln.color || '--ink-2');
          ctx.lineWidth = it.ln.width || 2;
          if (it.ln.dashed) ctx.setLineDash([5, 4]);
          ctx.beginPath(); ctx.moveTo(it.p0.x, it.p0.y); ctx.lineTo(it.p1.x, it.p1.y); ctx.stroke();
          if (it.ln.label) {
            ctx.setLineDash([]);
            ctx.font = '600 12px ' + mono; ctx.fillStyle = col(it.ln.color || '--ink');
            ctx.fillText(tl(it.ln.label), it.p1.x + 8, it.p1.y - 6);
          }
          ctx.restore();
        } else if (it.type === 'vector') {
          var A0 = it.p0, A1 = it.p1, adx = A1.x - A0.x, ady = A1.y - A0.y, al = Math.hypot(adx, ady);
          if (al < 3) return;
          var aux = adx / al, auy = ady / al, acol = col(it.v.color || '--accent'), hd = Math.min(11, al * 0.42);
          ctx.save();
          ctx.strokeStyle = acol; ctx.fillStyle = acol; ctx.lineWidth = it.v.width || 2.4;
          if (it.v.dashed) ctx.setLineDash([5, 4]);
          ctx.beginPath(); ctx.moveTo(A0.x, A0.y); ctx.lineTo(A1.x - aux * hd * 0.75, A1.y - auy * hd * 0.75); ctx.stroke();
          ctx.setLineDash([]);
          ctx.beginPath(); ctx.moveTo(A1.x, A1.y);
          ctx.lineTo(A1.x - aux * hd - auy * hd * 0.48, A1.y - auy * hd + aux * hd * 0.48);
          ctx.lineTo(A1.x - aux * hd + auy * hd * 0.48, A1.y - auy * hd - aux * hd * 0.48);
          ctx.closePath(); ctx.fill();
          if (it.v.label) {
            ctx.font = '600 12px ' + mono; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = acol;
            ctx.fillText(tl(it.v.label), (A0.x + A1.x) / 2 - auy * 13, (A0.y + A1.y) / 2 + aux * 13);
          }
          ctx.restore();
        } else if (it.type === 'point') {
          var p = it.p, r = it.pt.r || 4.5, pcol = col(it.pt.color || '--ink');
          ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = pcol; ctx.fill();
          ctx.strokeStyle = surface; ctx.lineWidth = 1.5; ctx.stroke();
          if (it.pt.label) {
            ctx.font = '600 11.5px ' + mono; ctx.fillStyle = ink; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
            ctx.fillText(tl(it.pt.label), p.x + 6, p.y - 4);
          }
        }
      });
    }

    function frame() { if (!spinning) return; if (!alive()) return destroy(); yaw += 0.01; draw(); raf = window.requestAnimationFrame(frame); }
    function setSpin(on) {
      spinning = !!on; window.cancelAnimationFrame(raf);
      if (spinning && visible && !doc.hidden) raf = window.requestAnimationFrame(frame);
      if (spinBtn) { spinBtn.setAttribute('aria-pressed', String(spinning)); S1.i18n.render(spinBtn); }
    }
    var drag = null;
    canvas.addEventListener('pointerdown', function (e) {
      drag = { x: e.clientX, y: e.clientY };
      try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      canvas.style.cursor = 'grabbing';
      if (spinning) setSpin(false);
    });
    canvas.addEventListener('pointermove', function (e) {
      if (!drag) return;
      yaw += (e.clientX - drag.x) * 0.01;
      pitch = S1.util.clamp(pitch + (e.clientY - drag.y) * 0.01, -1.45, 1.45);
      drag = { x: e.clientX, y: e.clientY };
      draw();
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
      canvas.addEventListener(ev, function () { drag = null; canvas.style.cursor = 'grab'; });
    });
    canvas.addEventListener('keydown', function (e) {
      var step = 0.14, used = true;
      if (e.key === 'ArrowLeft') yaw -= step;
      else if (e.key === 'ArrowRight') yaw += step;
      else if (e.key === 'ArrowUp') pitch = S1.util.clamp(pitch - step, -1.45, 1.45);
      else if (e.key === 'ArrowDown') pitch = S1.util.clamp(pitch + step, -1.45, 1.45);
      else if (e.key === 'Home') { yaw = yaw0; pitch = pitch0; }
      else used = false;
      if (used) { e.preventDefault(); if (spinning) setSpin(false); draw(); }
    });

    var spinBtn = null;
    if (spec.controls !== false) {
      var bar = S1.util.el('div', { class: 'mol__bar btn-row' });
      spinBtn = S1.util.el('button', { class: 'btn btn--small', type: 'button', 'aria-pressed': 'false' });
      S1.i18n.live(spinBtn, function () { return spinning ? t('Stop turning') : t('Turn slowly'); });
      spinBtn.addEventListener('click', function () { setSpin(!spinning); });
      var resetBtn = S1.util.el('button', { class: 'btn btn--small btn--quiet', type: 'button', t: 'Reset view' });
      resetBtn.addEventListener('click', function () { setSpin(false); yaw = yaw0; pitch = pitch0; draw(); });
      bar.appendChild(spinBtn); bar.appendChild(resetBtn);
      bar.appendChild(S1.util.el('span', { class: 'mol__hint', t: 'Drag to rotate' }));
      el.appendChild(bar);
    }

    size(); draw();
    var lastW = el.clientWidth;
    var onResize = function () { if (el.clientWidth === lastW) return; lastW = el.clientWidth; size(); draw(); };
    var undo = [], dead = false;
    function alive() { return !dead && doc.documentElement.contains(canvas); }
    function destroy() { if (dead) return; dead = true; spinning = false; window.cancelAnimationFrame(raf); undo.forEach(function (f) { f(); }); undo = []; }
    function listen(target, type, fn) { var h = function (e) { if (!alive()) return destroy(); fn(e); }; target.addEventListener(type, h); undo.push(function () { target.removeEventListener(type, h); }); }
    if (window.ResizeObserver) { var ro = new ResizeObserver(onResize); ro.observe(el); undo.push(function () { ro.disconnect(); }); } else listen(window, 'resize', onResize);
    if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (en) { visible = en[en.length - 1].isIntersecting; if (spinning) { window.cancelAnimationFrame(raf); if (visible) raf = window.requestAnimationFrame(frame); } });
      io.observe(el); undo.push(function () { io.disconnect(); });
    }
    listen(doc, 'visibilitychange', function () { if (spinning) { window.cancelAnimationFrame(raf); if (!doc.hidden && visible) raf = window.requestAnimationFrame(frame); } });
    listen(doc, 's1:themechange', draw);
    listen(doc, 's1:langchange', draw);
    if (spec.autoRotate && !reduced) setSpin(true);

    return {
      el: el, canvas: canvas,
      setSpec: function (s) { spec = s; S1.i18n.render(canvas); size(); draw(); },
      reset: function () { yaw = yaw0; pitch = pitch0; draw(); },
      rotate: function (dy, dp) { yaw += dy || 0; pitch = S1.util.clamp(pitch + (dp || 0), -1.45, 1.45); draw(); },
      spin: setSpin, redraw: draw, destroy: destroy
    };
  }

  S1.chart = { plot: plot, funcPlot: funcPlot, view3d: view3d };
})();
