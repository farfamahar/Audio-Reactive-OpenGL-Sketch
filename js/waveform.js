
//declare functions/variables here that are global
let audio, amp, fft;

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
    fft = new p5.FFT();

      // Using the DOM library of p5.
	button = createButton('Play / Pause')
	button.mousePressed(toggleSound)
	button.addClass('play-button')  

}
// runs continuous at 60fps
function draw() {
    background(0) 
    stroke(255);
    const volume = amp.getLevel();

    const waveform = fft.waveform();

    for(let i = 0; i < waveform.length; i++){
        const x = map(i, 0, waveform.length, 0, width);
        const y = map(waveform[i], -1, 1, 0, height);
        point(x, y);
    }


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function toggleSound() {
    if (audio.isPlaying()) {
      audio.pause()
    } else {
      audio.play()
    }
  }