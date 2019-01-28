var ctx1 = document.getElementById("c1").getContext("2d");
var ctx2 = document.getElementById("c2").getContext("2d");
//create new image object
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
//change element src to path of actual image
img1.src = "../globalres/red.png";
img2.src = "../globalres/3dlandscape.jpg";
//tree
img3.src = "../globalres/580b585b2edbce24c47b271d.png";
//sun
img4.src = "../globalres/580b585b2edbce24c47b2714.png";


img1.onload = function(){
	//ctx.drawImage (image variable, x, y, width, height)
	ctx1.drawImage(img1, 100, 200, 100, 100);
}

ctx1.font = "100px Arial";
ctx1.fillStyle = "red";
ctx1.fillText("HI", 50, 50);
ctx1.strokeStyle = "blue";
ctx1.strokeText("BYE", 300, 300);


img2.onload = function(){
	ctx2.drawImage(img2, 0, 0, 500, 400);
}

img3.onload = function(){
	ctx2.drawImage(img3, 100, 200, 300, 300);
}

img4.onload = function(){
	ctx2.drawImage(img4, 400, 100, 300, 300);
}

ctx2.beginPath();
//draw whatever
ctx2.fillStyle = "green";
ctx2.fillRect(0,400,500,500);
//close path, auto connects to original point. this mean you can do two lines for a triangle
ctx2.fill();

WebFontConfig = {
	google:{families:["Major Mono Display"]},
	active: function(){textSetup();}.
};
(function() {
      var wf = document.createElement('script');
      wf.src = 'https://fonts.googleapis.com/css?family=Major+Mono+Display';
      wf.async = true;
      document.head.appendChild(wf);
})();

function textSetup(){
	ctx2.font = "55px Major Mono Display";
	ctx2.fillStyle = "Ivory";
	ctx2.fillText("Yume Nikki", 10, 10);
} 