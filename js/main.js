//declare functions/variables here that are global


//helper function to pre-load assets (load sound here)
function preload() {
}

//waits for what's in preload before executing (runs only once)
function setup() {
    createCanvas(windowWidth,windowHeight);
    strokeWeight(5);

}
// runs continuous at 60fps
function draw() {
    background(0) // set the background color of canvas

    fill(255,0,0);
    // noFill();

    stroke('yellow');
    // noStroke();
    rect(mouseX, mouseY,500,500); // (0, 0) = location of upper left corner, (500) = width, (500) = height 
}
