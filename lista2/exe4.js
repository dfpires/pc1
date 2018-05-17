function calcula(){
	var numero1, numero2, numero3, maior;
	// recupera dados do usuário
	numero1 = parseFloat(document.getElementById("numero1").value);
	numero2 = parseFloat(document.getElementById("numero2").value);
	numero3 = parseFloat(document.getElementById("numero3").value);
	// calcula 
	if ((numero1 > numero2) && (numero1 > numero3)){
		maior = numero1;
	}
	else if (numero2 > numero3){
			maior = numero2;
		}
		else {
			maior = numero3;
		}
	document.getElementById("r1").innerHTML = maior;	
}