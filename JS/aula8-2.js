let mostrando = null;
let op = null;

const mostrarVisor = (e) => {
	e.preventDefault();
	valor = this.value;
	console.log(valor);
};


visor = document.querySelector(".visor");
buttons = document.querySelectorAll(".calculadora div");

buttons.map(bt => {
	if (bt === visor)
		return;
	button.addEventListener("click", mostrarVisor);
});

console.log(buttons);
