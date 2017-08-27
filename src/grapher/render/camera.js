import { vec3, vec4, mat4, quat } from '../../lib/glm.js';

export default class Camera {

    constructor() {
        this.position = vec3.fromValues(0.0, 0.0, 0.0);
        this.rotation = quat.create();
        this.fov = 50;
        this.near = 0.01;
        this.far = 100;
    }

    setFov(fov) {

        this.fov = Math.min(180, Math.max(0, fov));
        return this;
    }

    setNearAndFar (near, far) {
        if (near > 0.0 && far > near) {
            this.near = near;
            this.far = far;
        }
        else {
            throw new Error("Invalid near and far values: {near: {0}, far: {1}}".format(near, far));
        }
    }

    forward() {
        var vec = vec3.fromValues(0, 0, 1);
        vec3.transformQuat(vec, vec, this.rotation);
        return vec;
    }

    right() {
        var vec = vec3.fromValues(1, 0, 0);
        vec3.transformQuat(vec, vec, this.rotation);
        return vec;
    }

    up() {
        var vec = vec3.fromValues(0, 1, 0);
        vec3.transformQuat(vec, vec, this.rotation);
        return vec;
    }

    getCombinedMatrix(width, height) {
        var res = mat4.create();
        mat4.mul(res, this.getCameraMatrix(), this.getProjectionMatrix(width, height));
    }

    getCameraMatrix() {
        var res = mat4.create();
        mat4.fromRotationTranslation(res, this.rotation, this.position);
        return res;
    }

    getProjectionMatrix(width, height) {
        var res = mat4.create();
        mat4.perspective(res, this.fov, width / height, this.near, this.far);
        return res;
    }
}
