(function() {
'use strict';

var input = '';
var expected = 'wedding';
$('td').click(function() {
    var ch = $(this).text();
    if (ch == expected[input.length]) {
        console.log('correct');
        $('#pw' + input.length).text(ch);
        input += ch;
        if (input == expected) {
            window.location.href = '../index.html';
        }
    }
});

})();
