import { gl } from ' ../core.js';

export class Program {

    constructor (vertexShader, fragmentShader) {

        this.id = gl.createProgram();

        this.shader = { vertex: vertexShader, fragment: fragmentShader };

        gl.attachShader(this.id, this.shader.vertex);
        gl.attachShader(this.id, this.shader.fragment);

        gl.linkProgram(this.id);

        if ( !gl.getProgramParameter(this.id, gl.LINK_STATUS)) {
            var info = gl.getProgramInfoLog(this.id);
            throw new Error("Unable to link program:\n{0}".format(info));
        }
    }
}

var programs;
export default const function programs() {

    if (!programs) {

        programs = {};
    }

    return programs;
}
