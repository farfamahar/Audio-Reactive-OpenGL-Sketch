precision mediump float;
attribute vec3 aPosition;
attribute vec3 aNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

uniform float uTime;
uniform float uFrequency;
uniform float uAmp;

varying vec3 vNormal;

void main() {
    vec4 newPosition = vec4(aPosition, 1.0);
    float frequency = uFrequency;
    float amplitude = uAmp;

    float displacement = sin(newPosition.z * frequency + uTime * 0.1);
    newPosition.x += displacement * aNormal.z * amplitude;

    vNormal = aNormal;
    gl_Position = uProjectionMatrix * uModelViewMatrix * newPosition;

}