//declare functions/variables here that are global
let audio;

let posX = 0;
let posY = 0;
//helper function to pre-load assets (load sound here)
function preload() {
    audio = loadSound('audio/01.mp3')
}

//waits for what's in preload before executing (runs only once)
function setup() {
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER);
    console.log(audio);

}
// runs continuous at 60fps
function draw() {
    background(0) // set the background color of canvas
    translate(width/2, height / 2);

}
