function preload(){
  imgE = loadImage('Letters/e.png');
  imgR = loadImage('Letters/r.png');
  imgN = loadImage('Letters/n.png');
  imgW = loadImage('Letters/w.png');
  imgQ = loadImage('Letters/q.png');
  imgT = loadImage('Letters/t.png');
  imgY = loadImage('Letters/y.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  

  button = createButton('Messed up your name?');
  button.position(500, 400);
  button.mousePressed(reassign);

  background(200, 200, 200);
}
  
var count = 0;
var letters = [count];
var img = [24];
 

var n;
function draw(){
  frameRate(0.02);
  background(200, 200, 200);
}

function reassign(){
  count = 0;
  clear();
  background(200, 200, 200);
}

var next;
var count = count;
var y = 20;

function keyPressed(){ 
  next = count * 90;
  
  if (keyCode === 69){ //e
    letters.push("e");
     image(imgE, next, 100 + next, 100, 100);
     count++
  }

  if (keyCode === 78){ //n
    letters.push("n");
    image(imgN, next, y, 100, 100); //y = 150
    count++ 
  }

  if (keyCode === 81){ //q
    letters.push("q")
    image(imgQ, next, 190, 100, 200);
    count++
  }

  if (keyCode === 82){ //r
    letters.push("r");
    image(imgR, next, 200, 100, 100);
    count++
  }

  if (keyCode === 84){ //t
    letters.push("t");
    image(imgT, next, 280, 100, 100);
    count++
  }

  if (keyCode === 87){ //w
    letters.push("w")
    image(imgW, next, 360, 100, 200);
    count++
  }

  if (keyCode === 89){ //y
    letters.push("y")
    image(imgY, next, 400, 100, 200);
    count++
  }
  console.log(count)
  count = count;
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