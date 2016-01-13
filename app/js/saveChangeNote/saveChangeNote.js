let saveChangeNote = function () {
    let t = event.target;
    let data = {};
    data = JSON.parse(localStorage.getItem(t.parentNode.id));
    data.val = t.value;
    localStorage[t.parentNode.id] = JSON.stringify(data);
};
export default saveChangeNote;
