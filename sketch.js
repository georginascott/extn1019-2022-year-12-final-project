
let video;
var color_button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 20, 40);

  video = createCapture(VIDEO);
  
  color_button = createButton("Button");
  color_button.position(400, 400);
  

}

function draw(){
image(video, 20, 40, windowWidth, windowHeight);

fill(random(20, 250), 200, random(180, 250));
circle(200, 200, 90);



  //color_button.mouseClicked(change_background)

}

function mousePressed(){
circle(400, 400, 90).draw();

}

function change_background(){
image(video, 20, 40, random(0, 40), random(0, 40));
}


