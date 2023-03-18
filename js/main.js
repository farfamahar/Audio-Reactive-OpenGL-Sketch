//declare functions/variables here that are global


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

    fill(255,0,0);
    // (mouseX) = the value I want to map, 
    // (0) = minimum value it can go
    // (width) = the maximum value it can go
    // (0, 500) = the new values it will be mapped to
    const mapX = map(mouseX, 0, width, 0, 500);
    const mapY = map(mouseY, 0, width, 0, 500);

    translate(width/2, height / 2);


    rect(0, 0,mapX,mapY);
}
