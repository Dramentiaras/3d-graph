import Camera from './camera.js';

var canvas;
var gl;
var currentCamera;

var viewWidth;
var viewHeight;

var models = [];

function updateViewport() {
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        viewWidth = gl.drawingBufferWidth;
        viewHeight = gl.drawingBufferHeight;
        gl.viewport(0, 0, viewWidth, viewHeight);
    }
}

export function init(canvasid) {

    canvas = document.getElementById(canvasid);

    try {
        gl = canvas.getContext("experimental-webgl", {
            alpha: false
        });
    }
    catch (e) {
        console.log("An error occured while initializing webgl.");
        console.log(e);
    }

    if (!gl) {
        alert("Could not initialize webgl.");
    }

    gl.clearColor(0.2, 0.2, 0.2, 1.0);

    currentCamera = new Camera();
}

export function render() {

    updateViewport();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.DEPTH_TEST);
    var renderInfo = {};
    renderInfo.view = currentCamera.getCombinedMatrix(viewWidth, viewHeight);

    models.forEach(function(model) {
        model.render(renderInfo);
    })

    gl.disable(gl.DEPTH_TEST);
}

export function addModel(model) {
    models.push(model);
}

export function removeModel(model) {
    models.splice(models.indexOf(model), 1);
}

export {gl};
