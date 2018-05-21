function calcula(){
	var numero1, numero2, opcao, resposta = "";
	// recupera dados do usuário
	numero1 = parseFloat(document.getElementById("numero1").value);
	numero2 = parseFloat(document.getElementById("numero2").value);
	opcao = parseInt(document.getElementById("opcao").value);
	// calcula 
	switch(opcao){
		case 1: resposta = numero1 + numero2; 
				break; // pára o teste das escolhas e sai do switch
		case 2: if (numero2 > numero1) {
					resposta = numero2 - numero1;
				}
				else {
					resposta = numero1 - numero2;
				}
				break; // pára o teste das escolhas e sai do switch
		case 3: resposta = numero1 * numero2;
				break; // pára o teste das escolhas e sai do switch
		case 4: if (numero2 != 0){
					resposta = numero1 / numero2;
				}
				else {
					resposta = "Não é possível divisão por zero";
				}
				break; // pára o teste das escolhas e sai do switch
		default: resposta = "Opção inválida";
	}
	document.getElementById("r1").innerHTML = resposta;	
}