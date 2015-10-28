(function() {
    'use strict';

    var ambient,
        isPlaying,
        AMBIENT_VOLUME = 0.6;

    function toggleAudio() {
        if (ambient.volume() === 0.0) {
            ambient.fadeIn(AMBIENT_VOLUME, 1000);
            $('.show-with-audio').css('display', 'block');
        } else {
            ambient.fadeOut(0.0, 500);
            $('.show-with-audio').css('display', 'none');
        }
    }

    function init() {
        ambient = new Howl({
            urls: ['audio/tetris.ogg', 'audio/tetris.mp3'],
            buffer: true,
            volume: AMBIENT_VOLUME,
            autoplay: true,
            loop: true
        });
        $('#audio').click(toggleAudio);
    }

    init();
})();
