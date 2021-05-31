let numero1 = null;
let numero2 = null;
let operacaoVariavel = null;

function LimparCampo() {
	$("#campo-digitacao").val("");
}

function AdicionarNumero(numero) {
	let numeroAnterior = $("#campo-digitacao").val();
	$("#campo-digitacao").val(numeroAnterior + numero);
}

function EscolherOperacao(operacao) {
	switch (operacao) {
		case "adicao":
			if (numero1) {
				numero2 = $("#campo-digitacao").val();
			} else {
				numero1 = $("#campo-digitacao").val();
			}
			operacaoVariavel = "adicao";
			LimparCampo();
			break;
		case "divisao":
			if(numero1) {
			   numero2 = $("#campo-digitacao").val();
			} else {
				(numero1) = $("#campo-digitacao").val();
			}
			operacaoVariavel = "divisao";
			LimparCampo();
			break;
		case "subtracao":
			if(numero1){
			   numero2 = $("#campo-digitacao").val();
			} else { 
				(numero1) = $("#campo-digitacao").val();

			}
			operacaoVariavel = "subtracao";
			LimparCampo();
			break;
		case "multiplicacao":
			if(numero1){
				numero2 = $("#campo-digitacao");
			} else {
				(numero1) = $("#campo-digitacao");
			}
			operacaoVariavel ="multiplicacao";
			LimparCampo();
			break;
		case "igual":
			if (numero1) {
				numero2 = $("#campo-digitacao").val();
			} else {
				numero1 = $("#campo-digitacao").val();
			}
			LimparCampo();
			ExecutarOperacao();
			break;
			
			
	}
}

function ExecutarOperacao() {
	switch (operacaoVariavel) {
		case "adicao":
			let total = parseFloat(numero1) + parseFloat(numero2);
			$("#campo-digitacao").val(numero1 + "+" + numero2 + "=" + total);
			break;}
	switch (operacaoVariavel)
	{
	    case "subtracao":
            let total = parseFloat(numero1) - parseFloat(numero2);
             $("#campo-digitacao").val(numero1 + "-" + numero2 +"=" + total);
             break;
	}
    switch (operacaoVariavel)
	{
	case "multiplicacao": 
		let total = parseFloat(numero1) * parseFloat(numero2);
        $("#campo-digitacao").val(numero1 + "*" + numero2 +"=" + total);
		break;
	}
     switch (operacaoVariavel) 
    {
	case "divisao":
		let total =parseFloat(numero1) / parseFloat(numero2);
		$("#campo-digitacao").val(numero1 + "/" + numero2 + "=" + total);		
		break;
	}	


	
}
		
	

