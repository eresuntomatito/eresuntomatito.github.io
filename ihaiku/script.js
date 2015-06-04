

console.log("hola");


document.getElementById("boton1").onclick = changeFont;
document.getElementById("boton2").onclick = changeLetter;
document.getElementById("boton3").onclick = changeColor;

var marco = document.getElementById("marco");

var fontList = ["Verdana", "Times New Roman", "Tahoma", "Courier New"];
var fontCounter = 1;

var colorList = ["#CEF6F5", "#ECE0F8", "#F5A9BC", "#F7D358", "#BDBDBD", "#2E64FE", "#FF0040", "#ACFA58", "#A9E2F3", "#FA5882", "#A9F5A9","#7401DF", "#DF7401", "black","gray","snow","white"];
var colorCounter = 1;
var colorCounterLetter = 1;

function changeFont () {
	marco.style.fontFamily = fontList[fontCounter];
	fontCounter = fontCounter + 1;
	if (fontCounter > fontList.length - 1) {
		fontCounter = 0;
	};
};

function changeColor () {
	marco.style.backgroundColor = colorList[colorCounter];
	colorCounter = colorCounter + 1;
	if (colorCounter > colorList.length - 1) {
		colorCounter = 0;
	};
};

function changeLetter () {
	marco.style.color = colorList[colorCounterLetter];
	colorCounterLetter = colorCounterLetter + 1;
	if (colorCounterLetter > colorList.length - 1) {
		colorCounterLetter = 0;
	};
};