import CreateObj from '../crieate/create-compiled';
import interval from '../setInterval/setInterval-compiled';
import saveChangeNote from '../saveChangeNote/saveChangeNote-compiled';
import clearAllDislike from '../clearAllDislike/ClearAllDislike-compiled';
import buttonCanselAll from '../buttonCanselAll/buttonCanselAll-compiled';
import buttonChooseAll from '../buttonChooseAll/buttonChooseAll-compiled';


let id = {};
let allNotesSpan = document.getElementById('allNotesSpan');
let likeNotesSpan = document.getElementById('likeNotesSpan');
let dislikeNotesSpan = document.getElementById('dislikeNotesSpan');
let stoeageLength = localStorage.length;
let add = document.getElementById('add');
let clearAll = document.getElementById('clearAll');
let fieldNote = document.querySelector('.fieldNote');
let canselAll = document.getElementById('canselAll');
let chooseAll = document.getElementById('chooseAll');

//data today
let todayDate = document.getElementById('todayDate');
let now = new Date();
todayDate.innerHTML = 'Today :' + now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate();


//createObj for note
let inputNote = function (id, val, nameClass) {
    let obj = CreateObj('div', {draggable: "true", Class: 'input-group textNote', id: id},
        CreateObj('span', {Class: nameClass},
            CreateObj('button', {Class: 'btn btn-default', type: 'button'},
                CreateObj('span', {Class: 'glyphicon glyphicon-heart-empty'})
            )
        ),
        CreateObj('input', {Class: 'form-control changeNote', type: 'text', value: val}),
        CreateObj('span', {Class: 'input-group-btn clearButton'},
            CreateObj('button', {Class: 'btn btn-default', type: 'button'},
                CreateObj('span', {Class: 'glyphicon glyphicon-remove'})
            )
        )
    );
    return obj;
};

//onload add notes from localStorage
window.onload = ()=> {
    id.likeSpan = 0;
    add.disabled = true;
    if (localStorage['lastId'] != undefined) {
        id.number = +localStorage['lastId'] + 1;
    }
    else {
        id.number = 0;
    }
    for (let i = 0; i < stoeageLength; i++) {
        let data = {};
        let nameClass = '';
        if (localStorage.key(i) == 'lastId') {
            continue;
        }
        else {
            let key = localStorage.key(i);
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
        dislikeNotesSpan.innerHTML = (stoeageLength - 1) - id.likeSpan;
    }
    likeNotesSpan.innerHTML = id.likeSpan;
    if (stoeageLength > 1) {
        clearAll.style.display = 'block';
    }
};

//inputListener
setInterval(interval, 1000);

//add message
add.addEventListener('click', function () {
    let nameClass = 'input-group-btn like';
    let inputValue = document.getElementById('input').value;
    let noteObj = {number: id.number, val: inputValue, like: false};
    localStorage[id.number] = JSON.stringify(noteObj);
    localStorage['lastId'] = id.number;
    fieldNote.appendChild(inputNote(id.number, inputValue, nameClass));
    let stoeageLength = localStorage.length;
    allNotesSpan.innerHTML = stoeageLength - 1;
    dislikeNotesSpan.innerHTML = stoeageLength - 1 - id.likeSpan;
    if (stoeageLength > 1) {
        clearAll.style.display = 'block';
    }
    id.number++;
});

//buttonClear
$('.fieldNote').on('click', '.clearButton', function () {
    let idClear = this.parentNode.id;
    let storege = JSON.parse(localStorage.getItem(idClear));
    if (storege.like == true) {
        id.likeSpan -= 1;
    }
    this.parentNode.remove();
    localStorage.removeItem(idClear);
    let stoeageLength = localStorage.length;
    allNotesSpan.innerHTML = stoeageLength - 1;
    likeNotesSpan.innerHTML = id.likeSpan;
    dislikeNotesSpan.innerHTML = stoeageLength - 1 - id.likeSpan;
    if (stoeageLength < 2) {
        clearAll.style.display = 'none';
    }
});

//buttonFavoriteRecord


$('.fieldNote').on('click', '.like', function () {
    let localStorageObj = JSON.parse(localStorage.getItem(this.parentNode.id));
    let stoeageLength = localStorage.length;
    if (this.className == 'input-group-btn like active') {
        this.className = 'input-group-btn like';
        localStorageObj.like = false;
        localStorage[this.parentNode.id] = JSON.stringify(localStorageObj);
        id.likeSpan -= 1;
    }
    else {
        this.className = 'input-group-btn like active';
        localStorageObj.like = true;
        localStorage[this.parentNode.id] = JSON.stringify(localStorageObj);
        id.likeSpan += 1;
    }
    likeNotesSpan.innerHTML = id.likeSpan;
    dislikeNotesSpan.innerHTML = stoeageLength - 1 - id.likeSpan;
});

//buttonChooseAll
chooseAll.addEventListener('click', buttonChooseAll);

//buttonCanselAll
canselAll.addEventListener('click', buttonCanselAll);

//clearAll
clearAll.addEventListener('click', clearAllDislike);

//Save change note
fieldNote.addEventListener('change', function (e) {
    if (e.target.className == 'form-control changeNote') {
        saveChangeNote();
    }
});

export default id;