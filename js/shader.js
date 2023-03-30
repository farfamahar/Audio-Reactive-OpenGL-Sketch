let myShaders;

function preload() {
    myShaders = loadShader('shaders/vertex.vert', 'shaders/fragment.frag');

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    shader(myShaders);
}

function draw(){
    rect(0, 0, width,height);
}