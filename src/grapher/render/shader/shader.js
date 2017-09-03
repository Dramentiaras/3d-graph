import { gl } from '../core.js';

export class Shader {

    constructor(src, type) {

        this.id = gl.createShader(type);

        gl.shaderSource(this.id, src);
        gl.compileShader(this.id);

        if (!gl.getShaderParameter(this.id, gl.COMPILE_STATUS)) {
            var info = gl.getShaderInfoLog(this.id);
<<<<<<< HEAD
            throw new Error("Unable to compile shader:\n{0}".format(info));
=======
            throw new Error("Unable to compile shader:\n" + info);
>>>>>>> 5b3bad1861c7736917637ab94e9327beeca74754
        }
    }
}
//TODO implement shaders
