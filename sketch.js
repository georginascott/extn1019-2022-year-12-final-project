
let video;
var color_button;

function preload() {
  imgE = loadImage('Letters/e.png');
  imgR = loadImage('Letters/r.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 20, 40);
  
  //video = createCapture(VIDEO); - captures video of person
  
  //color_button = createButton("Button"); - these draw button onscreen
  //color_button.position(400, 400);
}

let letters = [];
function draw(){
  
//image(video, 20, 40, windowWidth, windowHeight); - draws an image 
fill(random(20, 250), 200, random(180, 250));
circle(200, 200, 90);
if (keyIsPressed == true);{
  if (keyCode === 69){ //e
    frameRate(5); 
    

    image(imgE, 200, 200, 200, 200);

    append(letters, imgE);
  }
  if (keyCode === 82){ //r
    //image(imgR, 0, 100, 80, 80);
    
    image(imgR, random(40, 100), random(40, 100), 100, 100);

    append(letters, imgR);
  }


  //image(letters[1], 0, 100, 80, 80);
  //image(letters[1], 0, 100, 80, 80);
  
  // let numLetters = 4;
  // let idkYet = false;
  // while (idkYet == false) {
  //   //index the array with the number of the users inputs as a stub
  //   //lettersArr[0].draw()

  // }
}

}

function change_background(){
//image(video, 20, 40, random(0, 40), random(0, 40));
}


