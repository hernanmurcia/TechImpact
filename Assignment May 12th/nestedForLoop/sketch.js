/*
modified example by Hernan Murcia
*/

var x = 0;

function setup() {
  createCanvas(400, 400)
  background(175, 238, 238)
}

function draw() {
  strokeWeight(4);
  stroke(0);
  
  //line 17 declares 
  for (var x = 0; x <= width; x += 75) {//for every i add 75. Spaces ellipses out.
    for (var y = 0; y <= height; y += 75) {//for every j add 75. spaces  rectangles put.
     fill(mouseX, random(255), mouseY);
     ellipse(x, y, 75, 75);
    }
  }
}