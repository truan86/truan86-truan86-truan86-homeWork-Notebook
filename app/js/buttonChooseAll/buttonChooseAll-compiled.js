'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _myscriptCompiled = require('../index/myscript-compiled');

var _myscriptCompiled2 = _interopRequireDefault(_myscriptCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var likeNotesSpan = document.getElementById('likeNotesSpan');
var dislikeNotesSpan = document.getElementById('dislikeNotesSpan');

var buttonChooseAll = function buttonChooseAll() {
    $('.like').addClass('active');
    var stoeageLength = localStorage.length;
    for (var i = 0; i < stoeageLength; i++) {
        var data = {};
        if (localStorage.key(i) == 'lastId') {
            continue;
        } else {
            var key = localStorage.key(i);
            data = JSON.parse(localStorage.getItem(key));
            data.like = true;
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
    _myscriptCompiled2.default.likeSpan = stoeageLength - 1;
    likeNotesSpan.innerHTML = stoeageLength - 1;
    dislikeNotesSpan.innerHTML = 0;
};

exports.default = buttonChooseAll;

//# sourceMappingURL=buttonChooseAll-compiled.js.map