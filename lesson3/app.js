var ctx1 = document.getElementById("c1").getContext("2d");
var ctx2 = document.getElementById("c2").getContext("2d");
var ctx3 = document.getElementById("c3").getContext("2d");
var ctx4 = document.getElementById("c4").getContext("2d");
var ctx5 = document.getElementById("c5").getContext("2d");
var ctx6 = document.getElementById("c6").getContext("2d");

//
ctx1.beginPath();
//draw whatever
ctx1.arc(150,150,100,0,2*Math.PI);
//close path, auto connects to original point. this mean you can do two lines for a triangle
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "black";
ctx1.fill();

//
ctx2.beginPath();
ctx2.moveTo(10,150);
ctx2.lineTo(150,5);
ctx2.lineTo(290,150);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "black";
ctx2.fill();

//
ctx3.beginPath();
ctx3.moveTo(10,150);
ctx3.lineTo(150,10);
ctx3.lineTo(290,150);
ctx3.lineTo(150,290);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "black";
ctx3.fill();

//
ctx4.beginPath();
ctx4.moveTo(0,0);
ctx4.lineTo(150,150);
ctx4.lineTo(0,300);

ctx4.moveTo(300,0);
ctx4.lineTo(150,150);
ctx4.lineTo(300,300);

ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "black";
ctx4.fill();

//
ctx5.beginPath();
ctx5.moveTo(0,0);
ctx5.lineTo(150,150);
ctx5.lineTo(0,150);

ctx5.moveTo(150,0);
ctx5.lineTo(150,150);
ctx5.lineTo(300,0);

ctx5.moveTo(300,150);
ctx5.lineTo(150,150);
ctx5.lineTo(300,300);

ctx5.moveTo(150,300);
ctx5.lineTo(150,150);
ctx5.lineTo(0,300);

ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "black";
ctx5.fill();

//
ctx6.beginPath();

ctx6.moveTo(10,150);
ctx6.lineTo(150,5);
ctx6.lineTo(290,150);

ctx6.arc(150,150,140,0,Math.PI);

ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle = "black";
ctx6.fill();