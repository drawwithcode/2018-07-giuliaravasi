var mic;
var volumehistory = [];
var analyzer;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textFont('Inconsolata');

  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  push();
  fill(255);
  noStroke();
  textSize(22);
  textAlign(CENTER);
  textStyle(BOLD);
  text('Try to', width/2, height/12);
  text('speak, whisper, scream, blow, sing or whatever you like', width/2, height/12 + 30);
  text('and see the result!', width/2, height/12 + 60);
  pop();

  var vol = mic.getLevel();
  volumehistory.push(vol*1.5);

  // ellipse(250,250,vol * 200);

    // fill(random(255), random(255), random(255));

  beginShape();
  for(var i = 0; i < volumehistory.length; i++) {
    var y = map(volumehistory[i], 0, 1, height - 100, 0);
    // var y = map(volumehistory[i], 0, 1, height, 0);
    noFill();
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    vertex(i, y);
  }
  endShape();

  if(volumehistory.length > width - 50) {
    volumehistory.splice(0, 1);
  }
}
