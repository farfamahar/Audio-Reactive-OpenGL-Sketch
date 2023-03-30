//declare functions/variables here that are global
let audio, amp, fft;
const bins = 64;
let binWidth;
let peakDetect;
let bgColor = 0;

let posX = 0;
let posY = 0;
//helper function to pre-load assets (load sound here)
function preload() {
    audio = loadSound('audio/01.mp3')
}

//waits for what's in preload before executing (runs only once)
function setup() {
    const canvas = createCanvas(windowWidth,windowHeight);
    canvas.mouseClicked(togglePlay);
    fft = new p5.FFT(0, bins);
    peakDetect = new p5.PeakDetect(400,2600,0.1); // define frequency range you want to work with (trial and error)
    peakDetect.onPeak(peakDetected);

}
// runs continuous at 60fps
function draw() {
    background(bgColor)
    noStroke();

    fft.analyze(bins);
    peakDetect.update(fft);

}

function peakDetected(){
    bgColor = color(random(255),random(255),random(255))
}


function togglePlay() {
    if(audio.isPlaying()){
        audio.pause()
    } else {
        audio.loop()
    }
}