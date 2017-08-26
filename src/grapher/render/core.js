
var canvas;
var gl;

export function init(canvasid) {

    canvas = document.getElementById(canvasid);

    try {
        gl = canvas.getContext("experimental-webgl", {
            alpha: false
        });
    }
    catch (e) {
        console.log("an error occured while initializing webgl.");
        console.log(e);
    }

    if (!gl) {
        alert("could not initialize webgl.");
    }

    gl.clearColor(0.1, 0.1, 0.1, 1.0);
}

export function render() {

}

export gl;
