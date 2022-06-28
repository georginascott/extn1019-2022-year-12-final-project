function preload(){
  imgE = loadImage('Letters/e.png');
  imgR = loadImage('Letters/r.png');
  imgN = loadImage('Letters/n.png');
  imgW = loadImage('Letters/w.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(10, 20, 40);
}
  
var count = 0;
var letters = [count];
var img = [24];
 
function draw(){
  circle(200, 200, 20);
}

var location = 0;

function keyPressed(){ 
//   if (count = 0){
//     location = 20;
//  }
// else{
//   location = count + 50;
// }
  if (keyCode === 69){ //e
     letters.push("e");
     image(imgE, 100, 200, random(80, 200), 100);
     count++;
  }

  if (keyCode === 78){ //r
    letters.push("n");
    image(imgN, count * 20, random(40, 100), 100, 100);
    count++;
  }

  if (keyCode === 82){ //r
    letters.push("r");
    image(imgR, count * 20, random(40, 10), 100, 100);
    count++
  }

  if (keyCode === 87){ //e
    letters.push("w")
    image(imgW, count * 20, 200, random(200, 400), 200);
    count++
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