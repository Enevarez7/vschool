const square = document.querySelector(".square");

square.addEventListener("mouseenter", function () {
  square.style.backgroundColor = "blue";
});
function logMouseEnter() {
  square.target.style.backgroundColor = "blue";
}

square.addEventListener("mousedown", function () {
  square.style.backgroundColor = "red";
});
function logmousedown() {
  square.target.style.backgroundColor = "red";
}

square.addEventListener("mouseup", function () {
  square.style.backgroundColor = "Yellow";
});
function logmouseup() {
  square.target.style.backgroundColor = "Yellow";
}

square.addEventListener("dblclick", function () {
  square.style.backgroundColor = "green ";
});
function logdblclick() {
  square.target.style.backgroundColor = "green";
}

window.addEventListener("wheel", function () {
  square.style.backgroundColor = "orange";
});
function logonwheel() {
  square.target.style.backgroundColor = "orange";
}
document.addEventListener("keydown", e => {
    if(e.key === 'b') {
        square.style.backgroundColor= "blue"
    } else if (e.key === 'r') {
        square.style.backgroundColor= "red"
    } else if (e.key === 'g') {
        square.style.backgroundColor = "green"
    } else if (e.key === 'y') {
        square.style.backgroundColor = "yellow"
    } else if (e.key === 'o') {
    square.style.backgroundColor ="orange"
    }
})