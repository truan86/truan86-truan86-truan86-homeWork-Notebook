let add = document.getElementById('add');
let input = document.getElementById('input');

let interval = function () {
    if (input.value != false) {
        add.disabled = false;
    }
    else {
        add.disabled = true;
    }
};
export default interval;