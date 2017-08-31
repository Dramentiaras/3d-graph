var frag = `
precision highp float;

varying vec4 v_Color;

void main() {
    gl_FragColor = v_Color;
}
`;

var vert = `
precision highp float;

attribute vec3 a_Position;
attribute vec4 a_Color;

varying vec4 v_Color;

void main() {
    v_Color = a_Color;
    gl_Position = vec4(a_Position, 1);
}
`;

export default { fragment: frag, vertex: vert };
