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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

//# sourceMappingURL=myscript-compiled.js.map