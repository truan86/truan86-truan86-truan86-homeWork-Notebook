"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var saveChangeNote = function saveChangeNote() {
    var t = event.target;
    var data = {};
    data = JSON.parse(localStorage.getItem(t.parentNode.id));
    data.val = t.value;
    localStorage[t.parentNode.id] = JSON.stringify(data);
};
exports.default = saveChangeNote;

//# sourceMappingURL=saveChangeNote-compiled.js.map