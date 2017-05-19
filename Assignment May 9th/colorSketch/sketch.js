function setup() {
 createCanvas(400, 400);//canvas size 
 background(64,224,208);//canvas background color

}


function draw() {
  //ellipse
  strokeWeight(4);//border thickness
  stroke(51);//border color
  fill(255,105,180);//filling color
  ellipse(100, 100, 100, 100);//position(x,y) and size

  //rectangle
  strokeWeight(4);//outline thickness
  stroke(51);//outline color
  fill(255, 204, 0);
  rect(250, 200, 100, 100);//position(x,y) and size
}
