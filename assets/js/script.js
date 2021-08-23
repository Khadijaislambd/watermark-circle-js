// -----------js-41-cls-nmbr-------------------




document.body.addEventListener("mousedown",function name(e) {
    let x = e.clientX;
    let y = e.clientY;
    let  span = document.createElement("span");
    span.style.top = y + "px";
    span.style.left = x + "px";
    document.body.appendChild(span);

 
})