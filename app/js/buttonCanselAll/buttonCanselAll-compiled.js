'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _myscriptCompiled = require('../index/myscript-compiled');

var _myscriptCompiled2 = _interopRequireDefault(_myscriptCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var likeNotesSpan = document.getElementById('likeNotesSpan');
var dislikeNotesSpan = document.getElementById('dislikeNotesSpan');

var buttonCanselAll = function buttonCanselAll() {
    $('.like').removeClass('active');
    var storeageLength = localStorage.length - 1;
    for (var i = 0; i < storeageLength; i++) {
        var data = {};
        if (localStorage.key(i) == 'lastId') {
            continue;
        } else {
            var key = localStorage.key(i);
            data = JSON.parse(localStorage.getItem(key));
            data.like = false;
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
    _myscriptCompiled2.default.likeSpan = 0;
    likeNotesSpan.innerHTML = 0;
    dislikeNotesSpan.innerHTML = storeageLength;
};

exports.default = buttonCanselAll;

//# sourceMappingURL=buttonCanselAll-compiled.js.map