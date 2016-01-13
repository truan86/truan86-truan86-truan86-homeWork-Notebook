'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var add = document.getElementById('add');
var input = document.getElementById('input');

var interval = function interval() {
    if (input.value != false) {
        add.disabled = false;
    } else {
        add.disabled = true;
    }
};
exports.default = interval;

//# sourceMappingURL=setInterval-compiled.js.map