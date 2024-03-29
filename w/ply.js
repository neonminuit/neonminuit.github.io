
const glsl = x => x;

import { viewer } from "./script/viewer.js";

const canvas = document.getElementById("shader");
const app = viewer(canvas, canvas.innerHTML);

// canvas.addEventListener("mouseleave", event => test.update = false);
// canvas.addEventListener("mouseenter", event => test.update = true);

canvas.addEventListener("mousemove", event => {
    app.mouse = [ event.clientX, event.clientY ];
});

canvas.addEventListener("touchmove", event => {
    app.mouse = [ event.changedTouches[0].clientX, event.changedTouches[0].clientY ];
});


canvas.addEventListener("mousedown", event => {
    app.clic = true;
    app.clicLeft = event.button == 0;
});

canvas.addEventListener("contextmenu", event => {
    event.preventDefault();
    event.stopPropagation();
});

canvas.addEventListener("mouseup", event => {
    app.clic = false;
});

canvas.addEventListener("mouseleave", event => {
    app.clic = false;
});

canvas.addEventListener("touchend", event => {
    app.clic = false;
});

canvas.addEventListener("touchstart", event => {
    app.clic = true;
});

canvas.addEventListener("wheel", event => {
    app.wheel = event.wheelDelta;
});