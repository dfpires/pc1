function calcula(){
	// declara variável
	var valor, tipo, corrigido;
	// recupura por DOM - Document Object Model
	// converte texto para real
	valor = parseFloat(document.getElementById("valor").value);
	// converte texto para inteiro
	tipo = parseInt(document.getElementById("tipo").value);
	// calcula
	if (tipo == 1){ // compara
		// atribuição
		corrigido = valor + (valor*3)/100;
	}
	else {
		// atribuição
		corrigido = valor + (valor*4)/100;
	}
	// mostra ao usuário
	document.getElementById("r").innerHTML = corrigido;
}