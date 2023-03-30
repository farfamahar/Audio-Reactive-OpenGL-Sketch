precision mediump float;
attribute vec3 aPosition;

void main() {
    vec3 newPosition = aPosition;
    newPosition.xy = newPosition.xy * 2.0 - 1.0;
    gl_Position = vec4(newPosition, 1.0);//hold all position value from our sketch

}