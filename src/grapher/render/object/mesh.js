export class Mesh {

    constructor(drawMode) {
        this.positions = [];
        this.colors = [];
        this.normals = [];
        this.uvCoords = [];
        this.drawMode = drawMode;
    }

    addVertex(pos, color, normal, uv) {

        this.positions.push(pos);
        this.colors.push(color);
        this.normals.push(normal);
        this.uvCoords.push(uv);
    }

    compileBuffer(gl) {
        var buf = gl.createBuffer();

        var data = [];

        for (var i = 0; i < this.positions.length; i++) {

            data.push(this.positions[i]);
            data.push(this.colors[i]);
            data.push(this.normals[i]);
            data.push(this.uvCoords[i]);
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

        return buf;
    }
}
