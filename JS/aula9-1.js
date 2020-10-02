const calcular = () => {
	const valores = document.querySelectorAll("input");
	let preco = parseFloat(valores[0].value);
	let consumo = parseFloat(valores[1].value);

	if (isNaN(preco) || isNaN(consumo)) {
		alert("Os valores devem ser numéricos");
		return;
	}


	alert("Consumo total: " + (preco * consumo / 1000));
};


btCalcular = document.querySelector("button");
btCalcular.addEventListener("click", calcular);
