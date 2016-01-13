function CreateObj(name, attributes) {
    let el = document.createElement(name);
    if (typeof attributes == 'object') {
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
            val = document.createTextNode(val)
        }
        ;
        el.appendChild(val);
    }
    return el;
}

export default CreateObj;