/*
View of the sea with moving objects.
Created by Nathan M. May 2017.
*/

// boat positions
var boatX = -70;
var boatY = 210;

// mast positions
var mastX1 = -45;
var mastX2 = -45;
var mastY1 = 209;
var mastY2 = 175;

// sail positions
var sailX1 = -44;
var sailX2 = -44;
var sailX3 = -30;
var sailY1 = 200;
var sailY2 = 175;
var sailY3 = 195;

// shark fin positions
var finX1 = 500;
var finX2 = 500;
var finX3 = 490;

// sun positions
var sunX = 125;
var sunY = 50;
var sunR = 20;

// ufo positions
var ufoX = 275;
var ufoY = 250;

//Movement speed------------------------------------------------------------

// boat speed
var boatSpeed = .5;

// ufo speed
var ufoSpeed = -0.3;

// fin speed
var finSpeed = -1;

// sun speed
var sunXspeed = .25;
var sunYspeed = .15;
var sunRspeed = .02;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  // sky background
  fill('deepskyblue');
  noStroke();
  rect(0, 0, 500, 200);

  // sun
  fill(255, 255, 0);
  noStroke();
  ellipse(sunX, sunY, sunR);
  
  // ufo
  fill(100, 100, 100);
  stroke(0, 240, 0)
  ellipse(ufoX, ufoY, 70, 20);
  ellipse(ufoX, ufoY -5, 40, 15);
  
  //sea background
  fill('dodgerblue');
  noStroke();
  rect(0, 350, 500, -150);
  
  // sand background
  fill('#FFEB5E');
  noStroke();
  rect(0, 500, 500, - 150);
  
  // boat
  var cBoat = color(255);
  fill(cBoat);
  rect(boatX, boatY, 50, 10, 0, 0, 20, 20);
  
  //mast
  stroke(255);
  line(mastX1, mastY1, mastX2, mastY2);
  
  // sail
  triangle(sailX1, sailY1, sailX2, sailY2, sailX3, sailY3);
  
  // shark fin
  fill('#838487');
  stroke(0);
  triangle(finX1, 265, finX2, 250, finX3, 265);
  
  // Movements--------------------------------------------------------------
  
  // boat
  boatX += boatSpeed;
  
  // mast x (should equal boatSpeedX)
  mastX1 += boatSpeed;
  mastX2 += boatSpeed;
  
  // sail x (should equal boatSpeedX)
  sailX1 += boatSpeed;
  sailX2 += boatSpeed;
  sailX3 += boatSpeed;
  
  if (boatX == width / 2) {
    boatSpeed = 0;
  }
  
  // shark fin
  finX1 += finSpeed;
  finX2 += finSpeed;
  finX3 += finSpeed;
  
  // sun
  sunX += sunXspeed;
  sunY += sunYspeed;
  sunR += sunRspeed;
  
  // ufo
  if (boatX == width / 2) {
    ufoY += ufoSpeed;
  }
  
  if (ufoY <= 150) {
    ufoSpeed = 0;
  }

  // ufo & boat
  if (sunX >= 415) {
    ufoSpeed = -3;
    boatY += -3;
    mastY1 += -3;
    mastY2 += -3;
    sailY1 += -3;
    sailY2 += -3;
    sailY3 += -3;
  }
  
  //-------------------------------------------------------------------------
}

/* Code review by Hernan Murcia.
Is nice to see how Nathans code is working perfectly. The goal was to make the boat
get abducted by the UFO when reaching the middle of the canvas. At first when the code 
was typed in, it crashed and we did not save the code. In addition to this to elements,
he also added an ellipse (sun) and the shark fin. The only thing I have to say about the code 
is that i think is missing some comments as far explaining what each line of code does. I sort
of understand his thinking process but I think this would me it easier to understand.
*/


