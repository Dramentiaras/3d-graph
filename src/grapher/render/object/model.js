import { Mesh } from './mesh.js';
import { gl } from '../core.js';
import { mat4 } from '../../../lib/glm.js';

export class Model {

    constructor(mesh, program) {
        this.mesh = mesh;
        this.program = program;
        this.matrix = mat4.create();

        this.buffer = this.mesh.compileBuffer(gl);
    }

    render (renderInfo) {
        this.program.use();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 4*12, 0);
        gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 4*12, 4*3);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 4*12, 4*7);
        gl.vertexAttribPointer(3, 2, gl.FLOAT, false, 4*12, 4*10);

        this.program.setUniform('uViewMatrix', renderInfo.view);
        this.program.setUniform('uModelMatrix', this.matrix);

        gl.drawArrays(this.mesh.drawMode, 0, this.mesh.positions.length / 3);
    }
}
