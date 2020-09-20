var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random")

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

button.addEventListener("click", randomColors)
color1.addEventListener("input", colorEditor);
color2.addEventListener("input", colorEditor);

function colorEditor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColors() {
    var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor1);
    console.log(randomColor2);
    body.style.background = "linear-gradient(to right, " + "#" + randomColor1 + ", " + "#" + randomColor2 + ")";
    css.textContent = body.style.background + ";";


}