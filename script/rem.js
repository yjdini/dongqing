// JavaScript Document


(function(doc, win) {
  var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function() {
    var w = docEl.clientWidth;
    var h = docEl.clientHeight;
    if (!w)
      return;
    if (w <= h || /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())) {
      docEl.style.fontSize = 100 * (w / 320.0) + 'px';
    } else {
      var w2 = h / 480 * 320;
      docEl.style.fontSize = 100 * (w2 / 320.0) + 'px';
      docEl.style.width = w2 + 'px';
      docEl.style['margin'] = '0 ' +(w - w2) / 2 + 'px';
    }
  };

  if (!doc.addEventListener)
    return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  recalc();
})(document, window);
