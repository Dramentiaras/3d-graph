import { Mesh } from './mesh.js';
import { gl } from '../core.js';

export class Model {

    constructor(mesh, program) {
        this.mesh = mesh;
        this.program = program;

        this.buffer = this.mesh.compileBuffer(gl);
    }

    render() {
        this.program.use();
        this.program.enableVAA();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        this.program.setUniforms();

        gl.drawElements(this.mesh.drawMode, this.mesh.positions.length / 3, this.gl.UNSIGNED_SHORT, 0);

        this.program.disableVAA();
        this.program.disable();
    }
}
