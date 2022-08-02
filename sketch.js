var imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH;
function preload(){
  imgA = loadImage('Letters/a.png');
  imgB = loadImage('Letters/b.png');
  imgC = loadImage('Letters/c.png');
  imgD = loadImage('Letters/d.png');
  imgE = loadImage('Letters/e.png');
  imgF = loadImage('Letters/f.png');
  imgG = loadImage('Letters/g.png');
  imgH = loadImage('Letters/h.png');
  // imgI = loadImage('Letters/i.png');
  // imgJ = loadImage('Letters/j.png');
  // imgK = loadImage('Letters/k.png');
  // imgL = loadImage('Letters/l.png');
  // imgM = loadImage('Letters/m.png');
  // imgN = loadImage('Letters/n.png');
  // imgO = loadImage('Letters/o.png');
  // imgP = loadImage('Letters/p.png');
  // imgQ = loadImage('Letters/q.png');
  // imgR = loadImage('Letters/r.png');
  // imgS = loadImage('Letters/s.png');
  // imgT = loadImage('Letters/t.png');
  // imgU = loadImage('Letters/u.png');
  // imgV = loadImage('Letters/v.png');
  // imgW = loadImage('Letters/w.png');
  // imgX = loadImage('Letters/x.png');
  // imgY = loadImage('Letters/y.png');
  // imgZ = loadImage('Letters/z.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  button = createButton('Messed up your name?');
  button.position(500, 400);
  button.mousePressed(reassign);

  background(200, 200, 200);
}
  
var count = 0;
var letters = [];


function keyPressed(){ 
  next = count * 90;

  if (keyCode === 65){ //a
    letters.push("a");
     aIs = true;
  }
  if (keyCode === 66){ //b
    letters.push("a");
     bIs = true;
  }
}

var letterData;

function draw(){
  frameRate(8); //was 0.02
  background(200, 200, 200);

 //loop through array of letters, 
 for(var i = 0; i < letters.length; i++){
   let letterData = letters[i]
   console.log(letterData);
   image(letterData[0], letterData[1], letterData[2], letterData[3], letterData[4]);
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

function keyPressed(){ 
   next = count * 90;

  if (keyCode === 65){ //a
    let y = random(100, 200);
    letters.push([imgA, next, y, 100, 100]);
    //image(imgA, next, 100 + random(1, 100), 100, 100);
    count++
  }
  
  if (keyCode === 66){ //b
    let y = random(100, 200);
    letters.push([imgB, next, y, 100, 100]);
    //image(imgB, next, 100 + random(1, 100), 100, 100);
     count++
  }

  // if (keyCode === 67){ //c
  //   let y = random(100, 200);
  //   letters.push(["c", next, y]);
  //    image(imgC, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 68){ //d
  //   let y = random(100, 200);
  //   letters.push(["d", next, y]);
  //    image(imgD, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  
  // if (keyCode === 69){ //e
  //   let y = random(100, 200);
  //   letters.push(["e", next, y]); //passes back 3 element array when called
  //    image(imgE, next, y, 100, 100);
  //    count++
  // }

  // if (keyCode === 70){ //f
  //   let y = random(100, 200);
  //   letters.push(["f", next, y]);
  //    image(imgF, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 71){ //g
  //   letters.push("g");
  //    image(imgG, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 72){ //h
  //   letters.push("h");
  //    image(imgH, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 73){ //i
  //   letters.push("i");
  //    image(imgI, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 74){ //j
  //   letters.push("j");
  //    image(imgJ, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 75){ //k
  //   letters.push("k");
  //    image(imgK, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 76){ //l
  //   letters.push("l");
  //    image(imgL, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 77){ //m
  //   letters.push("m");
  //    image(imgM, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 78){ //n
  //   letters.push("n"); //push a 3 element array; letter, x, y
  //   image(imgN, next, 100 + random(1, 100), 100, 100); //y = 150
  //   count++ 
  // }

  // if (keyCode === 79){ //o
  //   letters.push("o");
  //    image(imgO, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 80){ //p
  //   letters.push("p");
  //    image(imgP, next, 100 + random(1, 100), 100, 100);
  //    count++
  // }

  // if (keyCode === 81){ //q
  //   letters.push("q")
  //   image(imgQ, next, 100 + random(1, 100), 100, 200);
  //   count++
  // }

  // if (keyCode === 82){ //r
  //   letters.push("r");
  //   image(imgR, next, 100 + random(1, 100), 100, 100);
  //   count++
  // }

  // if (keyCode === 83){ //s
  //   letters.push("s");
  //   image(imgS, next, 100 + random(1, 100), 100, 100);
  //   count++
  // }

  // if (keyCode === 84){ //t
  //   letters.push("t");
  //   image(imgT, next, 100 + random(1, 100), 100, 100);
  //   count++
  // }
  // if (keyCode === 85){ //u
  //   letters.push("u");
  //   image(imgU, next, 100 + random(1, 100), 100, 100);
  //   count++
  // }

  // if (keyCode === 86){ //v
  //   letters.push("v");
  //   image(imgV, next, 100 + random(1, 100), 100, 100);
  //   count++
  // }

  // if (keyCode === 87){ //w
  //   letters.push("w")
  //   image(imgW, next, 100 + random(1, 100), 100, 200);
  //   count++
  // }

  // if (keyCode === 88){ //x
  //   letters.push("x");
  //   image(imgX, next, 100 + random(1, 100), 100, 100);
  //   count++
  // }

  // if (keyCode === 89){ //y
  //   letters.push("y")
  //   image(imgY, next, 100 + random(1, 100), 100, 200);
  //   count++
  // }
  // console.log(count)
  // count = count;

  // if (keyCode === 90){ //z
  //   letters.push("z");
  //   image(imgZ, next, 100 + random(1, 100), 100, 100);
  //   count++
  // }
}



//video = createCapture(VIDEO); - captures video of person
  
  //color_button = createButton("Button"); - these draw button onscreen
  //color_button.position(400, 400);