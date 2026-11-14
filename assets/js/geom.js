/* ==========================================================================
   Analysis Lab — geom.js (optional compatibility shim; load after chart.js)
   Aliases S1.geom.vec3d / S1.geom.view3d to S1.chart.view3d and S1.chart.vec3d.
   ========================================================================== */
(function () {
  'use strict';
  var S1 = window.S1 = window.S1 || {};
  if (S1.chart && S1.chart.view3d) {
    S1.chart.vec3d = S1.chart.vec3d || S1.chart.view3d;
    S1.geom = S1.geom || {
      vec3d: S1.chart.view3d,
      view3d: S1.chart.view3d
    };
  }
})();
