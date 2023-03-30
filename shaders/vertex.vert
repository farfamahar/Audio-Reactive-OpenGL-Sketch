precision mediump float;
attribute vec3 aPosition;
attribute vec3 aNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

varying vec3 vNormal;

void main() {
    vec4 newPosition = vec4(aPosition, 1.0);
    vNormal = aNormal;
    gl_Position = uProjectionMatrix * uModelViewMatrix * newPosition;

}