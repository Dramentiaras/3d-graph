var frag = `
attribute vec4 a_Color;

void main() {
    gl_FragColor = a_Color;
}
`;

var vert = `
attribute vec4 a_Position;

void main() {
    gl_Position = a_Position;
}
`;

export default { fragment: frag, vertex: vert };
