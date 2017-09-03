var frag = `
<<<<<<< HEAD
attribute vec4 a_Color;

void main() {
    gl_FragColor = a_Color;
=======
precision highp float;

varying vec4 v_Color;

void main() {
    gl_FragColor = v_Color;
>>>>>>> 5b3bad1861c7736917637ab94e9327beeca74754
}
`;

var vert = `
<<<<<<< HEAD
attribute vec4 a_Position;

void main() {
    gl_Position = a_Position;
=======
precision highp float;

attribute vec3 a_Position;
attribute vec4 a_Color;

varying vec4 v_Color;

void main() {
    v_Color = a_Color;
    gl_Position = vec4(a_Position, 1);
>>>>>>> 5b3bad1861c7736917637ab94e9327beeca74754
}
`;

export default { fragment: frag, vertex: vert };
