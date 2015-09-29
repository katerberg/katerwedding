(function() {
'use strict';

var input = '';
var expected = 'wedding';
function handleEntry(ch) {
    console.log(ch);
    if (ch == expected[input.length]) {
        $('#pw' + input.length).text(ch);
        input += ch;
        if (input == expected) {
            window.location.href = 'story.html';
        }
    }
}

$('td').click(function() {
    handleEntry($(this).text());
});

$(document).keypress(function(e) {
    if (e.key) {
        handleEntry(e.key);
    } else {
        handleEntry(String.fromCharCode(e.keyCode));
    }
});

})();
