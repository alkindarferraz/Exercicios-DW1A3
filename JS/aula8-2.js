// valores de calculo (strings)
let salvo = 0;
let mostrando = document.querySelector(".visor > p").innerText;

// elemento visor
let visor = document.querySelector(".visor > p");

let op = "";

console.log(visor);


// aqui uma função tradicional, por o this se refere ao botão
function mostrarVisor(e) {
	e.preventDefault();
	let valor = this.innerText;
	// limpar todos os valores
	if (valor == "AC") {
		salvo = "0";
		mostrando = "0";
		visor.innerText = "0";
	}
	else if (valor == "=") {
		calcular();
	}
	// se for digito ou ponto, atualiza os valores
	else if (valor >= "0" && valor <= "9" || valor == ".") {
		atualizarVisor(valor);
	}
	// se for operador
	else {
		salvo = visor.innerText;
		visor.innerText = "0";
		mostrando = 0;
		op = valor;
	}


};

// aqui funções => , que eu prefiro mas o this
// se refere à janela inteira
const calcular = () => {
	let v1 = parseFloat(salvo);
	let v2 = parseFloat(mostrando);
	let res;
	switch (op) {
		case ("+"): {
			res = v1 + v2;
			break;
		}

		case ("-"): {
			res = v1 - v2;
			break;
		}

		case ("X"): {
			res = v1 * v2;
			break;
		}

		case ("/"): {
			res = v1 / v2;
			break;
		}

		case ("%"): {
			res = v1 * v2 / 100;
			console.log(v1);
			console.log(v2);
			console.log(res);
			break;
		}
	}
	mostrando = res;
	salvo = res;
	visor.innerText = res;

};

const atualizarVisor = (valor) => {
	if (mostrando == "0" && valor != ".")
		mostrando = valor;
	else
		mostrando += valor;
	visor.innerText = mostrando;
};

visor = document.querySelector(".visor");
buttons = document.querySelectorAll(".calculadora div");

buttons.forEach(bt => {
	if (bt === visor)
		return;
	bt.addEventListener("click", mostrarVisor);
});
