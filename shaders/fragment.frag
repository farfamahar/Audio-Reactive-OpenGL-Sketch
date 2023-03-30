precision mediump float;

varying vec3 vNormal;
varying float vNoise;

void main() {
//   vec3 color = vNormal * 0.5 + 0.5;
  vec3 color = vec3(vNoise);
  gl_FragColor = vec4(color, 1.0);
}