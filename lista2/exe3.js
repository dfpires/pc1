// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programação
// javascript é uma linguagem para we
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var numero1, numero2;
	// recupera dados do usuário
	numero1 = parseFloat(document.getElementById("numero1").value);
	numero2 = parseFloat(document.getElementById("numero2").value);
	// calcula 
	if (numero1 < numero2){
		document.getElementById("r1").innerHTML = numero1 + " é o menor";
	}
	else if (numero2 < numero1){
			document.getElementById("r1").innerHTML = numero2 + " é o menor";
		}
		else {
			document.getElementById("r1").innerHTML = "Números são iguais";
		}
}