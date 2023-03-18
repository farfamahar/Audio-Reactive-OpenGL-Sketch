//declare functions/variables here that are global


//helper function to pre-load assets (load sound here)
function preload() {
}

//waits for what's in preload before executing (runs only once)
function setup() {
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER); // move the drawing origin of the rectangle to the center
    strokeWeight(5);

}
// runs continuous at 60fps
function draw() {
    background(0) // set the background color of canvas

    fill(255,0,0);
    // noFill();

    stroke('yellow');
    // noStroke();
    translate(width/2, height/2); // move origin of sketch to the center
    rect(0,0,500,500); // (0, 0) = location of upper left corner, (500) = width, (500) = height 

    push()
        fill(255,255,0) //this will only refers to the ellipse
        ellipse(0,0,50)
    pop()

    rect(110,0, 500, 500) // this uses the fill after background()
}
