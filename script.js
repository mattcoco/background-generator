//Sin factorizar

var body = document.querySelector("body");
var inputColor1 = document.getElementById("color1");
var inputColor2 = document.getElementById("color2");

inputColor1.addEventListener("input", function() {
	body.style.background = "linear-gradient(to right, " +
	// para acceder al input cogemos su .value
	inputColor1.value + "," +
	// no hace falta un ";" después del paréntesis
	inputColor2.value + ")";
})


inputColor2.addEventListener("input", function() {
	body.style.background = "linear-gradient(to right, " +
	// para acceder al input cogemos su .value
	inputColor1.value + "," +
	// no hace falta un ";" después del paréntesis
	inputColor2.value + ")";
})