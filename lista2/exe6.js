function calcula(){
	var numero1, numero2, opcao, resposta = "";
	// recupera dados do usuário
	numero1 = parseFloat(document.getElementById("numero1").value);
	numero2 = parseFloat(document.getElementById("numero2").value);
	opcao = document.getElementById("opcao").value;
	// calcula 
	switch(opcao){
		case 'a': resposta = Math.pow(numero1, numero2);
				break; // pára o teste das escolhas e sai do switch
		case 'b': resposta = Math.sqrt(numero1) + " e " + Math.sqrt(numero2)
				break; // pára o teste das escolhas e sai do switch
		case 'c': resposta = Math.cbrt(numero1) + " e " + Math.cbrt(numero2)
				break; // pára o teste das escolhas e sai do switch
		default: resposta = "Opção inválida";
	}
	document.getElementById("r1").innerHTML = resposta;	
}