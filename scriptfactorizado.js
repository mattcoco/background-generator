//Sin factorizar

var body = document.querySelector("body");
var inputColor1 = document.getElementById("color1");
var inputColor2 = document.getElementById("color2");
var h3 = document.querySelector("h3");

function setBackgroundColor() {
	body.style.background = "linear-gradient(to right, " +
	// para acceder al input cogemos su .value
	inputColor1.value + "," +
	// no hace falta un ";" después del paréntesis
	inputColor2.value + ")";

	//Para escribir dentro del <h3>
	h3.textContent = body.style.background + ";";
}

//función sin paréntesis porque... explicado en t14:00
inputColor1.addEventListener("input", setBackgroundColor)
inputColor2.addEventListener("input", setBackgroundColor)

