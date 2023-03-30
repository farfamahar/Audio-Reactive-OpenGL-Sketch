let myShaders;
let audio, amp, fft;
let posX = 0;
let posY = 0;
let loading = true;
let angle = 0;

function preload() {
  myShaders = loadShader("shaders/vertex_noise.vert", "shaders/fragment.frag");
  audio = loadSound("assets/01.mp3", loaded);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  shader(myShaders);
  //   rectMode(CENTER);
  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function loaded() {
  loading = false;
  // Using the DOM library of p5.
  button = createButton("Play / Pause");
  button.mousePressed(toggleSound);
  button.addClass("play-button");
}

function draw() {
  if (loading) {
    background("black");
    rotate(angle);
    strokeWeight(4);
    stroke(255);
    line(0, 0, 50, 0);
    angle += 0.2;
  } else {
    background(0);
    fft.analyze();

    let freq = fft.getCentroid();
    const volume = amp.getLevel(); // 0 - 1
    freq *= 0.001;

    const mapF = map(freq, 0, 1, 0, 20); // experiment with values
    const mapA = map(volume, 0, 0.2, 0, 0.5); //experiment with values

    myShaders.setUniform("uTime", frameCount);
    myShaders.setUniform("uFrequency", mapF);
    myShaders.setUniform("uAmp", mapA);

    sphere(width / 8, 200, 200);

    stroke(255);
    strokeWeight(0.5);
    const waveform = fft.waveform();

    beginShape();
    for (let i = 0; i < waveform.length; i++) {
      const x = map(i, 0, waveform.length, -width / 2, width / 2);
      const y = map(waveform[i], -1, 1, -height / 2, height / 2);
      point(x, y);
    }
    endShape();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleSound() {
  if (audio.isPlaying()) {
    audio.pause();
  } else {
    audio.play();
  }
}
