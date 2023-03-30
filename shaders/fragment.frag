precision mediump float;

varying vec3 vNormal;
varying float vNoise;
uniform float uTime;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d)
{
    return a + b*cos( 6.28318*(c*t+d));
}

void main() {
// vec3 color = vNormal * 0.5 + 0.5;
vec3 color1 = vec3(vNoise) + vec3(0.5);
vec3 color2 = palette(
    vNoise,
    vec3(0.5, 0.5, 0.5),
    vec3(0.5, 0.5, 0.5),
    vec3(1.0, 0.7, 0.4),
    vec3(0.00, 0.15, 0.20)

);
  vec3 finalColor = mix(color1, color2, sin(uTime * 0.01));
  gl_FragColor = vec4(finalColor, 1.0);
}