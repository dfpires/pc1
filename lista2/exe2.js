// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programação
// javascript é uma linguagem para we
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var nota1, nota2, media;
	// recupera dados do usuário
	nota1 = parseFloat(document.getElementById("nota1").value);
	nota2 = parseFloat(document.getElementById("nota2").value);
	// calcula 
	media = (nota1 + nota2 ) / 2;
	if ((nota1 < 0) || (nota2 < 0)){
		document.getElementById("r1").innerHTML = "Nota(s) negativa(s)";
	}
	else if ((media >= 7) && (media <= 10)){
			document.getElementById("r1").innerHTML = "Aprovado com média " + media;
		}
		else if ((media >= 3) && (media < 7)) {
				document.getElementById("r1").innerHTML = "Exame com média " + media;
			}
			else if ((media >= 0) && (media < 3)){
					document.getElementById("r1").innerHTML = "Reprovado com média " + media;
			    }
				else { // trata exceção
					document.getElementById("r1").innerHTML = "Média e notas inválidas";
			    }
}