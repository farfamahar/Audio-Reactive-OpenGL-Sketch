let myShaders;
let audio, amp, fft;
let posX = 0;
let posY = 0;

function preload() {
    myShaders = loadShader('shaders/vertex.vert', 'shaders/fragment.frag');
    audio = loadSound('audio/01.mp3')



}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    shader(myShaders);
    // rectMode(CENTER);
    amp = new p5.Amplitude();
    audio.play();
    fft = new p5.FFT();
          // Using the DOM library of p5.
	button = createButton('Play / Pause')
	button.mousePressed(toggleSound)
	button.addClass('play-button')  
}

function draw(){
    background(0);
    fft.analyze();

    let freq = fft.getCentroid(); 
    const volume = amp.getLevel(); // 0 - 1
    freq *= 0.001;

    const mapF = map(freq, 0, 1, 0, 20);
    const mapA = map(volume, 0, 0.2, 0, 0.5);



    myShaders.setUniform('uTime', frameCount);
    myShaders.setUniform('uFrequency', mapF);
    myShaders.setUniform('uAmp', mapA);

    sphere(width/8, 200, 200);

    stroke(255);
    const waveform = fft.waveform();

    beginShape();
    for(let i = 0; i < waveform.length; i++){
        const x = map(i, 0, waveform.length, -width/2, width/2);
        const y = map(waveform[i], -1, 1, -height/2, height/2);
        vertex(x, y);
    }
    endShape();
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