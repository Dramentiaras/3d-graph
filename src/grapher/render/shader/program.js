import { gl } from '../core';
<<<<<<< HEAD
=======
import { Shader } from './shader';
>>>>>>> 5b3bad1861c7736917637ab94e9327beeca74754

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

<<<<<<< HEAD
    constructor (vertexShader, fragmentShader) {

        this.id = gl.createProgram();

        this.shader = { vertex: vertexShader, fragment: fragmentShader };
=======
    constructor (vertexShaderSrc, fragmentShaderSrc) {

        this.id = gl.createProgram();

        this.shader = { vertex: new Shader(vertexShaderSrc, gl.VERTEX_SHADER), fragment: new Shader(fragmentShaderSrc, gl.FRAGMENT_SHADER) };
>>>>>>> 5b3bad1861c7736917637ab94e9327beeca74754

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

<<<<<<< HEAD
        Object.keys(Attributes).forEach(function(attribute) {
            var index = Attributes[attribute];
            gl.bindAttribLocation(this.id, index, AttribNames[index]);
        });
    }

=======
        var that = this;
        Object.keys(Attributes).forEach(function(attribute) {
            var index = Attributes[attribute];
            gl.bindAttribLocation(that.id, index, AttribNames[index]);
        });
    }

    use() {
        gl.useProgram(this.id);
    }

>>>>>>> 5b3bad1861c7736917637ab94e9327beeca74754
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
<<<<<<< HEAD
export default function programs() {
=======
export default function getPrograms() {
>>>>>>> 5b3bad1861c7736917637ab94e9327beeca74754

    if (!programs) {

        programs = {
            simple: new Program(simple.vertex, simple.fragment)
        };
    }

    return programs;
}

export { Attributes };
