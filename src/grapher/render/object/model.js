import { Mesh } from './mesh';
import { gl } from '../core';
import { mat4 } from '../../../lib/glm';

export class Model {

    constructor(mesh, program) {
        this.mesh = mesh;
        this.program = program;
        this.matrix = mat4.create();

        this.buffer = this.mesh.compileBuffer(gl);
    }

    render (renderInfo) {
        this.program.use();
        this.program.enableVAA();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        this.program.setUniforms(renderInfo);

        gl.drawElements(this.mesh.drawMode, this.mesh.positions.length / 3, this.gl.UNSIGNED_SHORT, 0);

        this.program.disableVAA();
        this.program.disable();
    }
}
