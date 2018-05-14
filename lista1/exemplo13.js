// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programação
// javascript é uma linguagem para we
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var numero;
	// recupera dados do usuário
	numero = parseInt(document.getElementById("numero").value);
	// calcula 
	var aux = "";
	var i=1;
	while (i<=10){
		aux = aux + "<br/>" + numero + " x " + i + " = " + (numero * i);
		i = i + 1;
	}
	document.getElementById("r1").innerHTML = aux;
}