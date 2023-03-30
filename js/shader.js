let myShaders;

function preload() {
    myShaders = loadShader('shaders/vertex.vert', 'shaders/fragment.frag');

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    shader(myShaders);
}

function draw(){
    myShaders.setUniform('uName', frameCount);
    sphere(width/4, 200, 200);
}