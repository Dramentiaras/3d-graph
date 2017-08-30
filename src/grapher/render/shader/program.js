import { gl } from '../core';

//Import shader sources
import simple from './lib/simple';

const Attributes = Object.freeze({
    position: 0,
    color: 1,
    normal: 2,
    uv: 3
});

const AttribNames = Object.freeze([
    'aPos',
    'aColor',
    'aNormal',
    'aTexCoord'
]);

const Uniforms = [
    'uViewMatrix', 'uModelMatrix'
];

export class Program {

    constructor (vertexShader, fragmentShader) {

        this.id = gl.createProgram();

        this.shader = { vertex: vertexShader, fragment: fragmentShader };

        gl.attachShader(this.id, this.shader.vertex.id);
        gl.attachShader(this.id, this.shader.fragment.id);

        gl.linkProgram(this.id);

        if ( !gl.getProgramParameter(this.id, gl.LINK_STATUS)) {
            var info = gl.getProgramInfoLog(this.id);
            throw new Error("Unable to link program:\n{0}".format(info));
        }

        this.bindAttribLocations();
        this.findUniformLocations();
    }

    bindAttribLocations () {

        Object.keys(Attributes).forEach(function(attribute) {
            var index = Attributes[attribute];
            gl.bindAttribLocation(this.id, index, AttribNames[index]);
        });
    }

    findUniformLocations () {

        this.uniforms = {};
        Uniforms.forEach((uniform) => {
            var loc = gl.getUniformLocation(this.id, uniform);
            if (loc) {
                this.uniforms[uniform] = loc;
            }
        });
    }

    setUniform (uniform, setter) {
        if (this.uniforms[uniform]) {
            setter(uniform);
        }
    }
}

var programs;
export default function programs() {

    if (!programs) {

        programs = {
            simple: new Program(simple.vertex, simple.fragment)
        };
    }

    return programs;
}

export { Attributes };
