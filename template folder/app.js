var ctx1 = document.getElementById("c1").getContext("2d");

//
ctx1.beginPath();
//draw whatever

//close path, auto connects to original point. this mean you can do two lines for a triangle
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "black";
ctx1.fill();