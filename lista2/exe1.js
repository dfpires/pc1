// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programação
// javascript é uma linguagem para we
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var nota1, nota2 ,nota3, nota4, media;
	// recupera dados do usuário
	nota1 = parseFloat(document.getElementById("nota1").value);
	nota2 = parseFloat(document.getElementById("nota2").value);
	nota3 = parseFloat(document.getElementById("nota3").value);
	nota4 = parseFloat(document.getElementById("nota4").value);
	// calcula 
	media = (nota1 + nota2 + nota3 + nota4) / 4;
	
	// estrutura de seleção
	if (media >= 7){
		document.getElementById("r1").innerHTML = "Aprovado com média " + media;
	}
	else {
		document.getElementById("r1").innerHTML = "Reprovado com média " + media;
	}
	
	
}