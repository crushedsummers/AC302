var values1 = Math.floor(Math.random()*255);
var values2 = Math.floor(Math.random()*255);
var values3 = Math.floor(Math.random()*255);

$("body").css("background-color", "rgb(255, 0, 0)");

setInterval(colors, 1);

function colors() {
	values1 = Math.floor(Math.random()*255);
	values2 = Math.floor(Math.random()*255);
	values3 = Math.floor(Math.random()*255);
	console.log("rgb(" + values1 + ", " + values2 + ", " + values3 + ")");
	$("body").css("background-color", "rgb(" + values1 + ", " + values2 + ", " + values3 + ")");
}