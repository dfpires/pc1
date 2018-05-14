// java e javascript são diferentes
// java é orientado a objetos e javascript suporta objetos
// javascript é interpretado pelo navegador
// javascript é uma linguagem de programação
// javascript é uma linguagem para we
function calcula(){
	// declaração de variáveis
	// javascript é não tipado, as variáveis não possuem tipo
	var cateto1, cateto2, hipotenusa;
	// recupera dados do usuário
	cateto1 = parseFloat(document.getElementById("cateto1").value);
	cateto2 = parseFloat(document.getElementById("cateto2").value);
	// calcula 
	hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
	
	document.getElementById("r1").innerHTML = hipotenusa;
}