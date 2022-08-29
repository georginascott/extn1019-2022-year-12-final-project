var imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI, imgJ, imgK, imgL, imgM, imgN, imgO, imgP, imgQ, imgR, imgS, imgT, imgU, imgV, imgW, imgX, imgY, imgZ; //Ben?
var video; 

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
  imgK = loadImage('Letters/k.png');
  imgL = loadImage('Letters/l.png');
  imgM = loadImage('Letters/m.png');
  imgN = loadImage('Letters/n.png');
  imgO = loadImage('Letters/o.png');
  imgP = loadImage('Letters/p.png');
  imgQ = loadImage('Letters/q.png');
  imgR = loadImage('Letters/r.png');
  imgS = loadImage('Letters/s.png');
  imgT = loadImage('Letters/t.png');
  imgU = loadImage('Letters/u.png');
  imgV = loadImage('Letters/v.png');
  imgW = loadImage('Letters/w.png');
  imgX = loadImage('Letters/x.png');
  imgY = loadImage('Letters/y.png');
  imgZ = loadImage('Letters/z.png');
}

let button;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  button = createButton('Messed up your name?');
  
  button.position(500, 400);
  button.mousePressed(reassign);

  background(200, 200, 200);

  // video = createCapture(VIDEO);
  // video.size(320, 200);
  // video.hide();
}
  
var count = 0;
var letters = [];

var letterData;
var movement;


let instructionText = true;

function draw(){
  frameRate(8); //was 0.02
  background(200, 200, 200);
  movement = random(0, 2);
 

  if(instructionText == true){
    textSize(40);
    textFont('Georgia');
    text('instruct ', (windowWidth/2) - 400, 100);
    fill(0, 0, 0);
  }
  

 //loop through array of letters, 
 for(var i = 0; i < letters.length; i++){
   let letterData = letters[i];
   image(letterData[0], letterData[1], letterData[2], letterData[3], letterData[4]);
   letterData[3] += 2;
   letterData[4] += 2;
   console.log(frameCount);

   if(movement <= 1){
    letterData[2] += 80;
    }else if(movement <= 2){
    letterData[2] = random(10, 200);
     }

   if(frameCount >= 60){
    letterData[2] = 0;
    letterData[3] += 10;
    letterData[4] += 10;
    letterData[1] = random(0, windowWidth);
   }

   if(frameCount >= 110){

     background(0, 0, 0);
     textSize(40);
     textFont('Georgia');
    text('Proper names are like poetry in the raw. ', (windowWidth/2) - 400, 100);
      text('Like all poetry, they are untranslatable.', (windowWidth/2) - 400, 150);
      fill(255, 255, 255);

      textSize(17);
      textFont('Georgia');
      text('W.H Auden', (windowWidth/2) - 400, 200);
      fill(255, 255, 255);
   }

  //  push(); //Video stuffs
  //  translate(width,0);
  //  scale(-1, 1);
  //  image(video, 0, 0, 320, 240);
  //  pop();
 }

  //  for(var i = 0; i < letters.length; i++){
  //   let letterData = letters[i];

  //   if(frameCount >= 170){
  //     translate(width / 2, height / 2);
  //     rotate(PI / 180 * 45);
  //     imageMode(CENTER);
  //     image(letterData[0], letterData[1], letterData[2], letterData[3], letterData[4]);
  //    }
  //  }
}

function reassign(){ //HFIBFJWBDFHDWHUFHIDHH Fix this!!!!!!!!!!!!!!!!!!!!!!!
  count = 0;
  letters.clear();
  clear();
  background(200, 200, 200);
}

var next;
var count = count;
var y = 20;
var newA;

function keyPressed(){ 
   next = count * 90;
instructionText = false;
  if (keyCode === 65){ //a
    let y = random(100, 200);
    letters.push([imgA, next, y, 100, 100]);
    count++
  }
  
  if (keyCode === 66){ //b
    let y = random(100, 200);
    letters.push([imgB, next, y, 100, 100]);
     count++
  }

  if (keyCode === 67){ //c
    let y = random(100, 200);
    letters.push([imgC, next, y, 100, 100]);
     count++
  }

  if (keyCode === 68){ //d
    let y = random(100, 200);
    letters.push([imgD, next, y, 100, 100]);
     count++
  }

  if (keyCode === 69){ //e
    let y = random(100, 200);
    letters.push([imgE, next, y, 100, 100]);
     count++
  }

  if (keyCode === 70){ //f
    let y = random(100, 200);
    letters.push([imgF, next, y, 100, 100]);
     count++
  }

  if (keyCode === 71){ //g
    let y = random(100, 200);
    letters.push([imgG, next, y, 100, 100]);
     count++
  }

  if (keyCode === 72){ //h
    let y = random(100, 200);
    letters.push([imgH, next, y, 100, 100]);
     count++
  }

  if (keyCode === 73){ //i
    let y = random(100, 200);
    letters.push([imgI, next, y, 100, 100]);
     count++
  }

  if (keyCode === 74){ //j
    let y = random(100, 200);
    letters.push([imgJ, next, y, 100, 100]);
     count++
  }

  if (keyCode === 75){ //k
    let y = random(100, 200);
    letters.push([imgK, next, y, 100, 100]);
     count++
  }

  if (keyCode === 76){ //l
    let y = random(100, 200);
    letters.push([imgL, next, y, 100, 100]);
     count++
  }

  if (keyCode === 77){ //m
    let y = random(100, 200);
    letters.push([imgM, next, y, 100, 100]);
     count++
  }

  if (keyCode === 78){ //n
    let y = random(100, 200);
    letters.push([imgN, next, y, 100, 100]);
     count++
  }

  if (keyCode === 79){ //o
    let y = random(100, 200);
    letters.push([imgO, next, y, 100, 100]);
     count++
  }

  if (keyCode === 80){ //p
    let y = random(100, 200);
    letters.push([imgP, next, y, 100, 100]);
     count++
  }

  if (keyCode === 81){ //q
    let y = random(100, 200);
    letters.push([imgQ, next, y, 100, 100]);
     count++
  }

  if (keyCode === 82){ //r
    let y = random(100, 200);
    letters.push([imgR, next, y, 100, 100]);
     count++
  }

  if (keyCode === 83){ //s
    let y = random(100, 200);
    letters.push([imgS, next, y, 100, 100]);
     count++
  }

  if (keyCode === 84){ //t
    let y = random(100, 200);
    letters.push([imgT, next, y, 100, 100]);
     count++
  }

  if (keyCode === 85){ //u
    let y = random(100, 200);
    letters.push([imgU, next, y, 100, 100]);
     count++
  }

  if (keyCode === 86){ //v
    let y = random(100, 200);
    letters.push([imgV, next, y, 100, 100]);
     count++
  }

  if (keyCode === 87){ //w
    let y = random(100, 200);
    letters.push([imgW, next, y, 100, 100]);
     count++
  }

  if (keyCode === 88){ //x
    let y = random(100, 200);
    letters.push([imgX, next, y, 100, 100]);
     count++
  }

  if (keyCode === 89){ //y
    let y = random(100, 200);
    letters.push([imgY, next, y, 100, 100]);
     count++
  }

  if (keyCode === 90){ //z
    let y = random(100, 200);
    letters.push([imgZ, next, y, 100, 100]);
     count++
  }
}





//video = createCapture(VIDEO); - captures video of person
  
 