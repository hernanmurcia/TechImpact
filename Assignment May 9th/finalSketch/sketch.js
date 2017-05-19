function setup() {
 createCanvas(400, 400);//canvas size 
 background(64,224,208);//canvas background color
 
}
 
 
function draw() {
  //ellipse
  strokeWeight(4);//outline thickness
  stroke(51);//outline color
  fill(255,105,180);//filling
  ellipse(100, 100, 100, 100);//location and size in the canvas
 
  //rectangule using alpha 
  c = color(255, 204, 0, 102);//blue color and alpha value
  fill(c);//color defined in the line above
  rect(150,200, 100, 100);//rectangule position and size
  value = alpha(c);  //Sets value to 102
  fill(value);//value defind in the line above
  rect(250, 200, 100, 100);//second rectangule position and size 
}