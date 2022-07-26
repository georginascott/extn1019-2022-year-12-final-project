function preload(){
  imgA = loadImage('Letters/a.png');
  imgB = loadImage('Letters/b.png');
  imgC = loadImage('Letters/c.png');
  imgD = loadImage('Letters/d.png');
  imgE = loadImage('Letters/e.png');
  imgF = loadImage('Letters/f.png');
  imgG = loadImage('Letters/g.png');
  imgH = loadImage('Letters/h.png');
  imgI = loadImage('Letters/i.png');
  imgJ = loadImage('Letters/j.png');
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
let xPos = 0;
let aIs = false;
let bIs = false;

function keyPressed(){ 
  next = count * 90;

  if (keyCode === 65){ //a
    letters.push("a");
     //newA = image(imgA, next, 400, 100, 100); //400 was 100 + next
     count++
     aIs = true;
  }
  
}

function draw(){
  frameRate(8); //was 0.02
  background(200, 200, 200);
  xPos = xPos + 2;

  if (aIs == true){ //== for boolean
    image(imgA, xPos, 200, 100, 100);
    aIs = false;
  }
  if (bIs == true){
    image(imgB, xPos, 200, 100, 100);
  }
}

function reassign(){
  count = 0;
  clear();
  background(200, 200, 200);
}

var next;
var count = count;
var y = 20;
var newA;






// function keyPressed(){ 
//   next = count * 90;

//   if (keyCode === 65){ //a
//     letters.push("a");
//      //newA = image(imgA, next, 400, 100, 100); //400 was 100 + next
//      count++
//      aIs = true;
//   }
  
//   if (keyCode === 66){ //b
//     letters.push("b");
//      image(imgB, next, 400, 100, 100);
//      count++
//   }

//   if (keyCode === 67){ //c
//     letters.push("c");
//      image(imgC, next, 100 + next, 100, 100);
//      count++
//   }

//   if (keyCode === 68){ //d
//     letters.push("d");
//      image(imgD, next, 100 + next, 100, 100);
//      count++
//   }

//   if (keyCode === 69){ //e
//     letters.push("e");
//      image(imgE, next, 100 + next, 100, 100);
//      count++
//   }

//   if (keyCode === 70){ //f
//     letters.push("f");
//      image(imgF, next, 100 + next, 100, 100);
//      count++
//   }

//   if (keyCode === 71){ //g
//     letters.push("g");
//      image(imgG, next, 100 + next, 100, 100);
//      count++
//   }

//   if (keyCode === 72){ //h
//     letters.push("h");
//      image(imgH, next, 100 + next, 100, 100);
//      count++
//   }

//   if (keyCode === 73){ //i
//     letters.push("i");
//      image(imgI, next, 100 + next, 100, 100);
//      count++
//   }

//   if (keyCode === 74){ //j
//     letters.push("j");
//      image(imgJ, next, 100 + next, 100, 100);
//      count++
//   }


//   if (keyCode === 78){ //n
//     letters.push("n");
//     image(imgN, next, y, 100, 100); //y = 150
//     count++ 
//   }

//   if (keyCode === 81){ //q
//     letters.push("q")
//     image(imgQ, next, 190, 100, 200);
//     count++
//   }

//   if (keyCode === 82){ //r
//     letters.push("r");
//     image(imgR, next, 200, 100, 100);
//     count++
//   }

//   if (keyCode === 84){ //t
//     letters.push("t");
//     image(imgT, next, 280, 100, 100);
//     count++
//   }

//   if (keyCode === 87){ //w
//     letters.push("w")
//     image(imgW, next, 360, 100, 200);
//     count++
//   }

//   if (keyCode === 89){ //y
//     letters.push("y")
//     image(imgY, next, 400, 100, 200);
//     count++
//   }
//   console.log(count)
//   count = count;
// }



//video = createCapture(VIDEO); - captures video of person
  
  //color_button = createButton("Button"); - these draw button onscreen
  //color_button.position(400, 400);