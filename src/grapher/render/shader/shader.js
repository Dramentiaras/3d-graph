import { gl } from '../core.js';

export class Shader {

    constructor(src, type) {

        this.id = gl.createShader(type);

        gl.shaderSource(this.id, src);
        gl.compileShader(this.id);

        if (!gl.getShaderParameter(this.id, gl.COMPILE_STATUS)) {
            var info = gl.getShaderInfoLog(this.id);
            throw new Error("Unable to compile shader:\n{0}".format(info));
        }
    }
}
//TODO implement shaders
