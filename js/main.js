//declare functions/variables here that are global
let audio, amp;

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
    amp = new p5.Amplitude();
    audio.play();

}
// runs continuous at 60fps
function draw() {
    background(0) // set the background color of canvas
    translate(width/2, height / 2);
    const volume = amp.getLevel();
    const mapW = map(volume, 0, 0.1, 0, 500);
    rect(0,0,mapW,mapW);


}
