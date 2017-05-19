/*
Original code by Dawn C. Hayes
Modified by Hernan Murcia 
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background (175, 238, 238);
  
  var x = 0;
  while (x <= width) {
    stroke(0);
    fill(138, 43, 226);
    rect(x, 200, 50, 50);
    x = x + 50;
  }
  
  for (y = 0; y <= height; y += 50) {
    stroke(0);
    fill(255, 140, 0);
    ellipse(300, y, 50, 50);
  }
}