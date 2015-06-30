(function() {
    'use strict';
    var s = skrollr.init({
        constants: {
            welcome: 0,
            story: 3000,
            neemipod: 6900,
            markipod: 9100,
            bffs: 10000,
            anniversary: 16000,
            stl: 23000,
            party: 30000
        },
        smoothScrolling: false
    });

    skrollr.menu.init(s, {
        duration: function(currentTop, targetTop) {
            return Math.abs(0.8 * (currentTop - targetTop));
        }
    });
})();
