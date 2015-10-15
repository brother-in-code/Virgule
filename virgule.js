/*! Virgule v1.0.0 | (c) 2015 Brother in Code | http://git.io/vC1Jt */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.virgule = factory();
  }
})(this, function () {
  'use strict';

  var virgule = {};

  virgule.init = function (element, opts) {
    if ( !element ) return;

    if ( element.split ) {
      element = document.querySelector(element);
    }

    opts = opts || {};
    var keycode = opts.keycode || '191';

    window.addEventListener('keyup', function (e) {
      if ( e.keyCode === Number(keycode) ) {
        element.focus();
      }
    });
  };

  return virgule;
});
