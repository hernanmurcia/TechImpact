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

//moving speed for the shapes
var speed = 2;

function setup() {  
	createCanvas(400, 400); 
}


function draw() {
	background(canvR, canvG, canvB);//Background color 
	
	stroke(circStroke); 
	fill(circR, circG, circB);  
	ellipse(circX, circY, circSize, circSize); 
	 
	circY = circY + speed;//+ speed moves the ellipse in Y from its original location
	
	stroke(rectStroke);
	fill(rectR, rectG, rectB);
	rect(rectX, rectY, rectSize, rectSize);
	
	rectY = rectY - speed;//- speed moves the rectnagule in Y from its original location
	
	//if rec position is greater than 400(height) or rec is less than 0(x)
	if(rectY > height - 100 || rectY < 0) {
	  speed = speed *-1;//gives the shapes speed from its final position making them loop
	}
}