// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programação
// javascript é uma linguagem para we
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var salarioJoao, conta1, conta2, resto;
	// recupera dados do usuário
	salarioJoao = parseFloat(document.getElementById("salarioJoao").value);
	conta1 = parseFloat(document.getElementById("conta1").value);
	conta2 = parseFloat(document.getElementById("conta2").value);
	// calcula 
	r1 = salarioJoao - conta1 - conta2 - (conta1*2/100) - (conta2*2/100);
	document.getElementById("r1").innerHTML = r1;
}