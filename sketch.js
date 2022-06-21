
let video;
var color_button;

function preload() {
  imgE = loadImage('Letters/e.png');
  imgR = loadImage('Letters/r.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 20, 40);
}
  

let arrPLS;
let count = 0;
let e;

let letters = [];
let img = [24];
 
function draw(){
  if (keyIsPressed === true);{
    //frameRate(0.01)
//   if (keyCode === 69){ //e
//     // letters[4] = imgE;
//     // image(letters[4], 200, 200, random(80, 200), 200);

// //write a new function which should determine what key is pressed : KeyPressed

//     letters.push("e")
    
//   }
  if (keyCode === 82){ //r
    // letters[17] = imgR;
    // frameRate(0.01); 
    //image(imgR, random(40, 100), random(40, 100), 100, 100);
    
    
  }
  
// frameRate(5);
// for(i = 0, i=24; i++;){
//   image(letters[i], random(20, 80), random(200, 40), 30, 30);
// }

print(letters);


fill(random(20, 250), 200, random(180, 250));
circle(200, 200, 90);
}
}

function keyPressed(){ //WORK ON!!!!!!!!!!!!!!!!!
  if (keyCode === 69){ //e
    letters.push("e")
  }
}

// if (keyIsPressed == true);{
  // if (keyCode === 69){ //e
  //   frameRate(5); 
  //   image(imgE, 200, 200, 200, 200);
  //   append(letters, imgE);
  // }
  // if (keyCode === 82){ //r
  //   //image(imgR, 0, 100, 80, 80);
  //   image(imgR, random(40, 100), random(40, 100), 100, 100);
  //   append(letters, imgR);
  // }


  //image(letters[1], 0, 100, 80, 80);
  //image(letters[1], 0, 100, 80, 80);
  
  // let numLetters = 4;
  // let idkYet = false;
  // while (idkYet == false) {
  //   //index the array with the number of the users inputs as a stub
  //   //lettersArr[0].draw()
// }

// if (keyIsPressed === true){
//   console.log("We working :) ")
//   if (keyCode === 69){ //e
//     frameRate(5); 
//     //image(imgE, 200, 200, 200, 200);
   
//     myLetter.letter = 'e'
//     myLetter.img = imgE

//   }
//   if (keyCode === 82){ //r
//     //image(imgR, random(40, 100), random(40, 100), 100, 100);
//     append(images, imgR);
//     append(images, "r")

//     myLetter.letter = 'r'
//     myLetter.img = imgR
    
//   }
//   image(myLetter.img, random(40, 100), random(40, 100), 100, 100);


//video = createCapture(VIDEO); - captures video of person
  
  //color_button = createButton("Button"); - these draw button onscreen
  //color_button.position(400, 400);