// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var pacman = new Image();
var target = new Image();
var ghost = new Image();
pacman.src = "../globalres/pacman.png";
target.src = "../globalres/circle.png";
ghost.src = "../globalres/ghost.png";
// Width and height of canvas
const WIDTH = 600;
const HEIGHT = 600;
// position and radius of player
var x = 300;
var y = 300;
//s= radius of img, just to make sure it's a square format
var s = 50;
// Player speed in x-y directions
var mx = 0;
var my = 0;

// Positions, size and collision check of circle
var circleX;
var circleY;
var circleS = 50;
var circleCollision = false;
var ghostCollision = false;
var ghostX = 50;
var ghostY = 50;

//Variable for the score
var score = 0;

// Import images onto canvas
function drawPacman(){
	ctx.drawImage(pacman, x, y, s, s);
}

function drawGhost(){
	ctx.drawImage(ghost, ghostX, ghostY, s, s);
}

function drawTarget(){
	ctx.drawImage(target, circleX, circleY, circleS, circleS);
}

// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function keydownControl (e) {
	if (e.keyCode==87){
		mx = 0;
		my = -4;
	}
	else if (e.keyCode==83){
		mx = 0;
		my = 4;
	}
	else if (e.keyCode==68){
		mx = 4;
		my = 0;
	}
	else if (e.keyCode==65){
		mx = -4;
		my = 0;
	}
}

//Function to check for collisions
function collisionCheck(){
	//modify boolean to true
	//if x is greater than 
	if( ((x+s) >=circleX) && (x<=(circleX+circleS)) &&((y+s) >=circleY) && (y<=(circleY+circleS))){
		circleCollision = true;
	}
	else {
		circleCollision = false;
	}
}

function ghostCollisionCheck(){
	if( ((x+s) >=ghostX) && (x<=(ghostX+s)) &&((y+s) >=ghostY) && (y<=(ghostY+s))){
		ghostCollision = true;
	}
	else {
		ghostCollision = false;
	}
	if (ghostCollision = true){
		//////ctx.drawText
	}
}

//Function to handle the collision
function collisionHandle(){
	//if collision is true
	if (circleCollision ==true){
		circleX = Math.floor(Math.random()*(WIDTH-50));
		circleY = Math.floor(Math.random()*(HEIGHT-50));
		score += 1;
		document.getElementById("scoreValue").innerHTML = score;
	}
	//else do nothing
}

//ghost
function followPacman(){
	if(ghostX <x){
		ghostX += 1;
	}
	if(ghostX >x){
		ghostX -= 1;
	}
	if(ghostY <y){
		ghostY += 1;
	}
	if(ghostY >y){
		ghostY -= 1;
	}
}

// Initialise our animation
function init() {
	// Put circle in random position
	circleX = Math.floor(Math.random()*(WIDTH-50));
	circleY = Math.floor(Math.random()*(HEIGHT-50));

	// Wait for user to press keyboard 
	window.onkeydown = keydownControl;

	// Redraws our canvas every 10ms
	return setInterval(draw, 10);
}

// Repeated draw function
function draw() {
	clear();
	//draw images
	drawPacman();
	drawTarget();
	drawGhost();
	followPacman();

	// Make player bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - s || x + mx < 0){
		mx = -mx;
	} else if (y + my > WIDTH - s || y + my < 0) {
		my = -my;
	}

	// Moves our player
	x += mx;  
	y += my;

	// Check for collisions
	collisionCheck();
	collisionHandle();
}
init();