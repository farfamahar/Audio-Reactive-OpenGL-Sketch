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

}
// runs continuous at 60fps
function draw() {
    background(0) // set the background color of canvas
    stroke(255);
    // translate(0, height / 2);
    const volume = amp.getLevel();
    // const mapW = map(volume, 0, 0.1, 0, 500);
    // rect(0,0,mapW,mapW);

    // const waveform = audio.getPeaks();

    // for(let i = 0; i < waveform.length; i++){
    //     line(i, waveform[i] * 100, i, waveform[i] * -10)
    // }

    const waveform = fft.waveform();

    for(let i = 0; i < waveform.length; i++){
        const x = map(i, 0, waveform.length, 0, width);
        const y = map(waveform[i], -1, 1, 0, height);
        point(x, y);
    }


}
