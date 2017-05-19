/*
Original code by Dawn C. Hayes
Copied by Hernan Murcia 
*/

function setup() {
  createCanvas(600, 400);
  background(0, 64, 135);
}

function draw() {
 strokeWeight(4);
 stroke(255);
 
 for (var i = 0; i <= width; i +=60) {
   for (var j = 0; j <= height; j += 60) {
     fill(mouseX, random(255), mouseY);
     rect(i, j, 35, 35);
   }
}
}