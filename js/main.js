//declare functions/variables here that are global
let audio, amp, fft;
const bins = 1024;
let binWidth;

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
    binWidth = width / bins;

}
// runs continuous at 60fps
function draw() {
    background(0)
    noStroke();

    const spectrum = fft.analyze() //gives frequency spectrum

    for(let i = 0; i < spectrum.length; i++){
        const y = map(spectrum[i], 0, 255, height, 0)
        rect(i * binWidth, y, binWidth, height - y);
    }

}


function togglePlay() {
    if(audio.isPlaying()){
        audio.pause()
    } else {
        audio.loop()
    }
}