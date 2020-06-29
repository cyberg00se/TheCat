var purring = document.getElementById("purring");
var cat = document.getElementById("cat");

cat.onmouseover = function() {
	purring.play();
}

cat.onmouseout = function() {
	purring.pause();
}
