
//Início dos Parâmetros iniciais
		//Validar CPF
	function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
//        strCPF = document.getElementById("cpf").value.replace(/[.-]/g,'')
      if (strCPF == "00000000000") return false;

      for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }
        //Fim Validar CPF
        //Inicio checagem campos obrigatórios
    function checar_campos() {
        req = document.querySelectorAll("[required]")
        for (i=0;i<req.length;i++) {
            if (req[i].value==""||req[i].value=="null"){
                alert("Campo "+req[i].labels[0].textContent+" vazio");
                setTimeout(function () {document.getElementById(req[i].id).focus();},1);
                break;
                }
        }
    }
        //Fim checagem campos obrigatórios

		$(".data").datepicker({
		    changeMonth: true,
            changeYear: true,
            dateFormat: 'dd/mm/yy',
            dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
            dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
            monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
            nextText: 'Próximo',
            prevText: 'Anterior',

        });
        $(".data").mask("00/00/0000");
        $(".cpf").mask("000.000.000-00");
//Fim dos Parâmetros Iniciais

//Início das Linhas de Militares

        $("div.militares").on('click','input.botao-add', function(e) {
                n+=1;
                c+=1;
//                TODO: Não está somando o 1. Verificar
                var elem = document.getElementById("militares")
                elem.insertAdjacentHTML('beforeend', militar(c));
            }
        );
        $("div.militares").on('click','input.botao-del', function(e) {
                if (n != 1) {
                    document.getElementById("mil-"+this.value).remove();
                    n-=1;
                    }
            }
        );

//Fim das Linhas de Militares

//Início das Funções
//TODO: Terminar essa função

var listcpf = document.getElementsByName("cpf")
for (i=0;i<listcpf.length;i++) {
    listcpf[i].addEventListener('blur', function () {
//        if (typeof listcpf[i] != 'undefined'){
            cpf = listcpf[i].value.replace(/[.-]/g,'');
            if (cpf!="") {
                    if (!TestaCPF(cpf)) {
                        alert("CPF Inválido. Digite o número correto");
                        document.getElementById("cpf").style.color = "red";
                        setTimeout(function () {document.getElementById("cpf").focus();},1);
                    }
                    else {
                    document.getElementById("cpf").style.color = "#495057";
                    }
            }
//        }
    }
    );
}
function calcular() {
    checar_campos()
//    t=document.getElementsByName("matricula")
//    for (i=0; i<t.length; i++) {
//        if ()
//    }
//    alert ("Calcular");
}

function limpar() {
    alert ("Limpar");
}

function exportar() {
    alert ("Exportar");
}

function gerarPDF() {
    alert ("Gerar PDF");
}
//Término das Funções