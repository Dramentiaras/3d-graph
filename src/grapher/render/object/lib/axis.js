import { Model } from '../model';
import { Mesh } from '../mesh';
import { gl } from '../../core';

import programs from '../../shader/program';

export class Axis extends Model {

    constructor() {
        var m = new Mesh(gl.LINES);
        m.addVertex([0, 0, 0], [1, 0, 0, 1], [-1, 0, 0], [0, 0]);
        m.addVertex([1, 0, 0], [1, 0, 0, 1], [1, 0, 0], [0, 0]);
        m.addVertex([0, 0, 0], [0, 1, 0, 1], [-1, 0, 0], [0, 0]);
        m.addVertex([0, 1, 0], [0, 1, 0, 1], [-1, 0, 0], [0, 0]);
        m.addVertex([0, 0, 0], [0, 0, 1, 1], [-1, 0, 0], [0, 0]);
        m.addVertex([0, 0, 1], [0, 0, 1, 1], [-1, 0, 0], [0, 0]);
        console.log(programs);
        console.log(programs());
        super(m, programs()['simple']);
    }
}
