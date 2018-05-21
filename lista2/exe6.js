function calcula(){
	var preco, numero2, opcao, resposta = "";
	// recupera dados do usuário
	preco = parseFloat(document.getElementById("preco").value);
	codigo = parseFloat(document.getElementById("codigo").value);
	// calcula 
	if (codigo == 1){
		resposta = "Sul";
	}
	else if (codigo == 2){
			resposta = "Norte";
		}
		else if (codigo == 3){
				resposta = "Leste";
			}
			else if (codigo == 4){
					resposta = "Oeste";
				}
				else if ((codigo == 5) || (codigo == 6)){
						resposta = "Nordeste";
					}
					else if ((codigo == 7) || (codigo == 8) || (codigo == 9)){
							resposta = "Sudeste";
						 }
						 else if ((codigo >= 10) && (codigo <= 20)){
								resposta = "Centro Oeste";
							  }
							  else if ((codigo >= 21) && (codigo <= 30)){
										resposta = "Nordeste";
								   }
								   else resposta = "Código inexistente";
				
	document.getElementById("r1").innerHTML = resposta;	
}