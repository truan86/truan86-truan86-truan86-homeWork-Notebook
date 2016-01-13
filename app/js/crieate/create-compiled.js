'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function CreateObj(name, attributes) {
    var el = document.createElement(name);
    if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) == 'object') {
        for (var i in attributes) {
            el.setAttribute(i, attributes[i]);

            if (i.toLowerCase() == 'class') {
                el.className = attributes[i]; // for IE compatibility
            } else if (i.toLowerCase() == 'style') {
                    el.style.cssText = attributes[i]; // for IE compatibility
                }
        }
    }
    for (var i = 2; i < arguments.length; i++) {
        var val = arguments[i];
        if (typeof val == 'string') {
            val = document.createTextNode(val);
        }
        ;
        el.appendChild(val);
    }
    return el;
}

exports.default = CreateObj;

//# sourceMappingURL=create-compiled.js.map