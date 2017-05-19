/*
Homework May 10th
Modified by Hernan Murcia
*/


//variables for ellipse
var circX = 100; 
var circY = 100; 
var circStroke = 0; 
var circR = 138; 
var circG = 43; 
var circB = 226; 
var circSize = 75;

//variables for quad
var rectX = 250;
var rectY = 250;
var rectStroke = 0;
var rectR = 255;
var rectG = 140;
var rectB = 0;
var rectSize = 75;

//RBG values for background
var canvR = 175; 
var canvG = 238;
var canvB = 238;

function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvR, canvG, canvB);//Background color 
	
	stroke(circStroke); 
	fill(circR, circG, circB);  
	ellipse(circX, circY, circSize, circSize); 
	 
	circY = circY + 0.5;//ellipse speed in Y 
	
	stroke(rectStroke);
	fill(rectR, rectG, rectB);
	rect(rectX, rectY, rectSize, rectSize);
	
	rectY = rectY - 0.5;//quad speed in X

}