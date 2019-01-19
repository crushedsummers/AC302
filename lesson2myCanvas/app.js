console.log("test!");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(100,200);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110,200);
ctx.lineTo(200,50);
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = 'rgb(200,50,10)';
ctx.fillRect(75,125,150,100);

ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);

ctx.clearRect(125,150,50,50);

// function images() {
// 	base_image = new Image();
// 	base_image.src = "../globalres/3dlandscape.jpg";
// 	context.drawImage(base_image, 100, 100);
// }

// images();

var c1 = document.getElementById("canvas1");
var ctx1 = c1.getContext("2d");

ctx1.fillStyle = "black";
ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,300,300);
//
var c2 = document.getElementById("canvas2");
var ctx2 = c2.getContext("2d");

ctx2.strokeStyle = "black";
ctx2.lineWidth = 30;
ctx2.strokeRect(0,0,300,300);

ctx2.beginPath();
ctx2.strokeStyle = "black";
ctx2.lineWidth = 20;
ctx2.moveTo(150,0);
ctx2.lineTo(150,300);
ctx2.moveTo(0,150);
ctx2.lineTo(300,150);
ctx2.stroke();
//
var c3 = document.getElementById("canvas3");
var ctx3 = c3.getContext("2d");

ctx3.fillStyle = "black";
// ctx3.fillRect(0,0,300,300);
// ctx3.clearRect(30,30,240,240);
// ctx3.fillRect(60,60,180,180);
// ctx3.clearRect(90,90,120,120);
// ctx3.fillRect(120,120,60,60);



