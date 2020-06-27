var balls = document.getElementsByClassName("ball");
var cat = document.getElementById("cat");

document.onmousemove = function() {
	var x = event.clientX * 100 / window.innerWidth + "%";
	var y = event.clientY * 100 / window.innerHeight + "%";
				
	for (var i = 0; i < 2; i++)
	{
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].style.transform = "translate(-"+x+", -"+y+")";
	}
}

cat.onmouseenter = function() {
	for (var i = 0; i < 2; i++)
	{
		balls[i].style.width = "40px";
		balls[i].style.height = "40px";
	}
}

cat.onmouseleave = function() {
	for (var i = 0; i < 2; i++)
	{
		balls[i].style.width = "30px";
		balls[i].style.height = "30px";
	}
}
