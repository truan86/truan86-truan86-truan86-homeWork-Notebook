'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _myscriptCompiled = require('../index/myscript-compiled');

var _myscriptCompiled2 = _interopRequireDefault(_myscriptCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearAllDislike = function clearAllDislike() {
    var storageLength = localStorage.length;
    var arrToDel = [];
    for (var i = 0; i < storageLength; i++) {
        var data = {};
        var key = localStorage.key(i);
        if (localStorage.key(i) === 'lastId') {
            continue;
        } else {
            data = JSON.parse(localStorage.getItem(key));
        }
        if (data.like == false) {
            var textNote = document.getElementById(key);
            var idClear = textNote.id;
            textNote.parentNode.removeChild(textNote);
            arrToDel.push(idClear);
        }
    }
    for (var i = 0; i < arrToDel.length; i++) {
        localStorage.removeItem(arrToDel[i]);
    }
    storageLength = localStorage.length;
    dislikeNotesSpan.innerHTML = storageLength - 1 - _myscriptCompiled2.default.likeSpan;
    allNotesSpan.innerHTML = storageLength - 1;
};

exports.default = clearAllDislike;

//# sourceMappingURL=ClearAllDislike-compiled.js.map