"use strict";

function _typeof2(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _myscriptCompiled = require('../index/myscript-compiled');

        var _myscriptCompiled2 = _interopRequireDefault(_myscriptCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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
    }, { "../index/myscript-compiled": 5 }], 2: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _myscriptCompiled = require('../index/myscript-compiled');

        var _myscriptCompiled2 = _interopRequireDefault(_myscriptCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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
    }, { "../index/myscript-compiled": 5 }], 3: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _myscriptCompiled = require('../index/myscript-compiled');

        var _myscriptCompiled2 = _interopRequireDefault(_myscriptCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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
    }, { "../index/myscript-compiled": 5 }], 4: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        function _typeof(obj) {
            return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        }

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
    }, {}], 5: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createCompiled = require('../crieate/create-compiled');

        var _createCompiled2 = _interopRequireDefault(_createCompiled);

        var _setIntervalCompiled = require('../setInterval/setInterval-compiled');

        var _setIntervalCompiled2 = _interopRequireDefault(_setIntervalCompiled);

        var _saveChangeNoteCompiled = require('../saveChangeNote/saveChangeNote-compiled');

        var _saveChangeNoteCompiled2 = _interopRequireDefault(_saveChangeNoteCompiled);

        var _ClearAllDislikeCompiled = require('../clearAllDislike/ClearAllDislike-compiled');

        var _ClearAllDislikeCompiled2 = _interopRequireDefault(_ClearAllDislikeCompiled);

        var _buttonCanselAllCompiled = require('../buttonCanselAll/buttonCanselAll-compiled');

        var _buttonCanselAllCompiled2 = _interopRequireDefault(_buttonCanselAllCompiled);

        var _buttonChooseAllCompiled = require('../buttonChooseAll/buttonChooseAll-compiled');

        var _buttonChooseAllCompiled2 = _interopRequireDefault(_buttonChooseAllCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var id = {};
        var allNotesSpan = document.getElementById('allNotesSpan');
        var likeNotesSpan = document.getElementById('likeNotesSpan');
        var dislikeNotesSpan = document.getElementById('dislikeNotesSpan');
        var stoeageLength = localStorage.length;
        var add = document.getElementById('add');
        var clearAll = document.getElementById('clearAll');
        var fieldNote = document.querySelector('.fieldNote');
        var canselAll = document.getElementById('canselAll');
        var chooseAll = document.getElementById('chooseAll');

        //data today
        var todayDate = document.getElementById('todayDate');
        var now = new Date();
        todayDate.innerHTML = 'Today :' + now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();

        //createObj for note
        var inputNote = function inputNote(id, val, nameClass) {
            var obj = (0, _createCompiled2.default)('div', { draggable: "true", Class: 'input-group textNote', id: id }, (0, _createCompiled2.default)('span', { Class: nameClass }, (0, _createCompiled2.default)('button', { Class: 'btn btn-default', type: 'button' }, (0, _createCompiled2.default)('span', { Class: 'glyphicon glyphicon-heart-empty' }))), (0, _createCompiled2.default)('input', { Class: 'form-control changeNote', type: 'text', value: val }), (0, _createCompiled2.default)('span', { Class: 'input-group-btn clearButton' }, (0, _createCompiled2.default)('button', { Class: 'btn btn-default', type: 'button' }, (0, _createCompiled2.default)('span', { Class: 'glyphicon glyphicon-remove' }))));
            return obj;
        };

        //onload add notes from localStorage
        window.onload = function () {
            id.likeSpan = 0;
            add.disabled = true;
            if (localStorage['lastId'] != undefined) {
                id.number = +localStorage['lastId'] + 1;
            } else {
                id.number = 0;
            }
            for (var i = 0; i < stoeageLength; i++) {
                var data = {};
                var nameClass = '';
                if (localStorage.key(i) == 'lastId') {
                    continue;
                } else {
                    var key = localStorage.key(i);
                    data = JSON.parse(localStorage.getItem(key));
                }
                if (data.like == true) {
                    nameClass = 'input-group-btn like active';
                    id.likeSpan += 1;
                } else {
                    nameClass = 'input-group-btn like';
                }
                fieldNote.appendChild(inputNote(data.number, data.val, nameClass));
            }
            if (stoeageLength == 0) {
                allNotesSpan.innerHTML = 0;
                dislikeNotesSpan.innerHTML = 0;
            } else {
                allNotesSpan.innerHTML = stoeageLength - 1;
                dislikeNotesSpan.innerHTML = stoeageLength - 1 - id.likeSpan;
            }
            likeNotesSpan.innerHTML = id.likeSpan;
            if (stoeageLength > 1) {
                clearAll.style.display = 'block';
            }
        };

        //inputListener
        setInterval(_setIntervalCompiled2.default, 1000);

        //add message
        add.addEventListener('click', function () {
            var nameClass = 'input-group-btn like';
            var inputValue = document.getElementById('input').value;
            var noteObj = { number: id.number, val: inputValue, like: false };
            localStorage[id.number] = JSON.stringify(noteObj);
            localStorage['lastId'] = id.number;
            fieldNote.appendChild(inputNote(id.number, inputValue, nameClass));
            var stoeageLength = localStorage.length;
            allNotesSpan.innerHTML = stoeageLength - 1;
            dislikeNotesSpan.innerHTML = stoeageLength - 1 - id.likeSpan;
            if (stoeageLength > 1) {
                clearAll.style.display = 'block';
            }
            id.number++;
        });

        //buttonClear
        $('.fieldNote').on('click', '.clearButton', function () {
            var idClear = this.parentNode.id;
            var storege = JSON.parse(localStorage.getItem(idClear));
            if (storege.like == true) {
                id.likeSpan -= 1;
            }
            this.parentNode.remove();
            localStorage.removeItem(idClear);
            var stoeageLength = localStorage.length;
            allNotesSpan.innerHTML = stoeageLength - 1;
            likeNotesSpan.innerHTML = id.likeSpan;
            dislikeNotesSpan.innerHTML = stoeageLength - 1 - id.likeSpan;
            if (stoeageLength < 2) {
                clearAll.style.display = 'none';
            }
        });

        //buttonFavoriteRecord

        $('.fieldNote').on('click', '.like', function () {
            var localStorageObj = JSON.parse(localStorage.getItem(this.parentNode.id));
            var stoeageLength = localStorage.length;
            if (this.className == 'input-group-btn like active') {
                this.className = 'input-group-btn like';
                localStorageObj.like = false;
                localStorage[this.parentNode.id] = JSON.stringify(localStorageObj);
                id.likeSpan -= 1;
            } else {
                this.className = 'input-group-btn like active';
                localStorageObj.like = true;
                localStorage[this.parentNode.id] = JSON.stringify(localStorageObj);
                id.likeSpan += 1;
            }
            likeNotesSpan.innerHTML = id.likeSpan;
            dislikeNotesSpan.innerHTML = stoeageLength - 1 - id.likeSpan;
        });

        //buttonChooseAll
        chooseAll.addEventListener('click', _buttonChooseAllCompiled2.default);

        //buttonCanselAll
        canselAll.addEventListener('click', _buttonCanselAllCompiled2.default);

        //clearAll
        clearAll.addEventListener('click', _ClearAllDislikeCompiled2.default);

        //Save change note
        fieldNote.addEventListener('change', function (e) {
            if (e.target.className == 'form-control changeNote') {
                (0, _saveChangeNoteCompiled2.default)();
            }
        });

        exports.default = id;
    }, { "../buttonCanselAll/buttonCanselAll-compiled": 1, "../buttonChooseAll/buttonChooseAll-compiled": 2, "../clearAllDislike/ClearAllDislike-compiled": 3, "../crieate/create-compiled": 4, "../saveChangeNote/saveChangeNote-compiled": 6, "../setInterval/setInterval-compiled": 7 }], 6: [function (require, module, exports) {
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
    }, {}], 7: [function (require, module, exports) {
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
    }, {}] }, {}, [5]);

//# sourceMappingURL=packed-compiled.js.map