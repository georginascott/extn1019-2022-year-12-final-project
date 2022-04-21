// declare the variables (but don't initialise)
var sampler;
var synth;

// this is the usual p5 setup function (called once at the start) but it's also
// got some initialisation code for the musical instruments (e.g. the sampler)
function setup() {
  // create the p5 canvas as usual
  createCanvas(displayWidth, displayHeight);
  background(50);
  fill(255);
  textSize(40);
  text("press SPACE to start the Tone.js music engine", 100, 100);

  synth = new Tone.Synth().toDestination();

  // note that you don't need to call "new" for the sampler, because the "new"
  // call happens inside the create808Sampler function in my-music-lib.js
  sampler = create808Sampler().toDestination();

  // create any Tone.Sequences here you like here - remember to assign the
  // result of createSequence() to a variable (so you can stop it later if you
  // want)
}

// again, the standard p5.js draw() function
function draw() {
  // nothing in here for now---the starting/stopping of the music happens in the
  // mousePressed() function

  // NOTE: music is not "played" in the draw() loop - Tone.js works differently
  // to drawing things on the canvas in processing
}

function keyTyped() {
  if (key === " ") {       // if the key pressed is the SPACE bar...
    background("#22a6b3"); // draw a soothing turquoise background
    Tone.start();          // start the music engine
    text("click the mouse to start/stop the beat", 100, 100);
  }
}

function mousePressed() {
  // toggle the Transport (which controls whether the loop is playing or not)
  Tone.Transport.toggle();
}
