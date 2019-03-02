var ctx1 = document.getElementById("c1").getContext("2d");

//constant width and height to know where the circle is
var WIDTH = 600;
var HEIGHT = 400;

//location of circle
var bx, by;
var px, py;
//speed of circle
var bmx, bmy;
var pmx, pmy;

var bFill, pFill;


//define everyything
//init = where everything begins
function init(){
	//define x, y, mx, my
	bx = 300;
	by = 150;
	bmx = 3;
	bmy = 4;
	px = 300;
	py = 150;
	pmx = 6;
	pmy = 8;

	bFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	pFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";

	return setInterval(draw, 10);
}

function clear(){
	ctx1.fillStyle = "white";
	ctx1.fillRect(0,0,600,400);
}

function bcircle(bx, by){
	ctx1.beginPath();
	ctx1.arc(bx,by,50,0,Math.PI*2);
	ctx1.closePath();
	ctx1.stroke();
	ctx1.fillStyle = bFill;
	ctx1.fill();
}

function pcircle(px, py){
	ctx1.beginPath();
	ctx1.arc(px,py,30,0,Math.PI*2);
	ctx1.closePath();
	ctx1.stroke();
	ctx1.fillStyle = pFill;
	ctx1.fill();
}

//putting everything together

function draw(){
	clear();
	bcircle(bx, by, 50);
	pcircle(px, py, 30);
	//check if circle is inside convas

	if (bx > WIDTH){
		bmx = Math.floor(Math.random()*(-10));
		bFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	else if (bx < 0){
		bmx = Math.floor(Math.random()*(10));
		bFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	else if (by > HEIGHT){
		bmy = Math.floor(Math.random()*(-10));
		bFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	else if (by < 0){
		bmy = Math.floor(Math.random()*(10));
		bFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	bx+=bmx;
	by+=bmy;

	if (px > WIDTH || bx == px){
		pmx = Math.floor(Math.random()*(-20));
		pFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	else if (px < 0){
		pmx = Math.floor(Math.random()*(20));
		pFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	else if (py > HEIGHT || by == py){
		pmy = Math.floor(Math.random()*(-20));
		pFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	else if (py < 0){
		pmy = Math.floor(Math.random()*(20));
		pFill = ctx1.fillStyle = "rgb("+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+", "+Math.floor(Math.random()*200)+")";
	}

	px+=pmx;
	py+=pmy;
	//update x and y location with mx and my
}

init();
