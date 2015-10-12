(function() {
    'use strict';
    function buildConstants(relative) {
        var constants = {},
            position = 0;
        Object.keys(relative).forEach(function(key) {
            constants[key] = position;
            position += relative[key];
        });
        return constants;
    }

    var relative = {
        welcome: 6000,
        story: 3900,
        neemipod: 2200,
        markipod: 1400,
        bffs: 9000,
        anniversary: 6450,
        stl: 6300,
        arch: 4000,
        party: 0
    };
    var s = skrollr.init({
        constants: buildConstants(relative),
        smoothScrolling: false,
        keyframe: function(element, name, direction) {
            if (element.classList.contains('scratched')) {
                if (direction === 'up') {
                    reset(element);
                } else {
                    var svg = createSVGEl();
                    element.appendChild(svg);
                    draw(element);
                }
            }
        }
    });

    skrollr.menu.init(s, {
        duration: function(currentTop, targetTop) {
            return Math.abs(5.0 * (currentTop - targetTop));
        }
    });
})();
