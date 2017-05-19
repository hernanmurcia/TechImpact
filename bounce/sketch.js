  var circle = {
	x: 400,
	y: 400,
	xspeed: 15,
	yspeed: -6,
}

function setup() {
	createCanvas(800, 800);
	background(0);
}

function draw() {
	move(); 
	bounce(); 
	display(); 
}


function bounce() {

	if (circle.x > width || circle.x < 0) { 
		circle.xspeed = circle.xspeed * -1; 
		
	}

	if (circle.y > height || circle.y < 0) {
		circle.yspeed = circle.yspeed * -1;
		; 
	}

}

function move() {
	circle.x = circle.x + circle.xspeed;
	circle.y = circle.y + circle.yspeed;

}


function display() {
	strokeWeight(20);//by making the stroke thicker and changing the background color he was eble to get rid of the tracks by
	fill(random(255), random(255), random(255));
	ellipse(circle.x, circle.y, 100, 100);
}