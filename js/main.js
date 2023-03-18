//declare functions/variables here that are global

let posX = 0;
let posY = 0;
//helper function to pre-load assets (load sound here)
function preload() {
}

//waits for what's in preload before executing (runs only once)
function setup() {
    createCanvas(windowWidth,windowHeight);
    strokeWeight(5);
    rectMode(CENTER);

}
// runs continuous at 60fps
function draw() {
    background(0) // set the background color of canvas
    translate(width/2, height / 2);

    fill('red');
    rect(posX,posY,500,500);
}

function keyPressed() {
    switch(keyCode) {
        case LEFT_ARROW:
            posX -=10;
            break;

        case RIGHT_ARROW:
            posX += 10;
            break;

        case UP_ARROW:
            posY -= 10;
            break;
        
        case DOWN_ARROW:
            posY += 10;
            break;
        
        default:
            break;
    }
}
