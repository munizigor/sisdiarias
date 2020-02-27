
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
                return false;
                }
        }
        return true;
    }
        //Fim checagem campos obrigatórios

		$(".data").datepicker({
		    changeMonth: true,
            changeYear: true,
            onSelect: function () { calc_datas()},
            dateFormat: 'dd/mm/yy',
            dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
            dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
            monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
            nextText: 'Próximo',
            prevText: 'Anterior',

        });
    function toDate(id) {
    dateStr = document.getElementById(id).value
    var parts = dateStr.split("/");
    return new Date(String(parts[1])+'/'+String(parts[0])+'/'+String(parts[2]));
    }

function params_ajudacusto () {
    elems_ajudacusto = document.getElementsByClassName('ajudadecusto_var');
    if (parseInt(document.getElementById('ajudadecusto_ida').value)==0 && parseInt(document.getElementById('ajudadecusto_volta').value)==0) {
        for (i=0;i<elems_ajudacusto.length;i++) {
            elems_ajudacusto[i].style.display='none';
//            TODO: Zerar valores de acp e dependente se nao for calcular ajuda de custo
        }
    }
    else {
        for (i=0;i<elems_ajudacusto.length;i++) {
            elems_ajudacusto[i].style.display='block';
//            TODO: Inserir required como parametro se for caso de calculo
        }
    }
    }


    function calc_datas () {
    var datas = document.getElementsByClassName('data');
    if (datas[0].value!="" && datas[1].value!="") {
        difftempo = Math.abs(toDate('data_retorno')-toDate('data_saida'));
        diffdias = Math.ceil(difftempo/(1000 * 60 * 60 * 24))+1;
        document.getElementById('qtde_dias').value = diffdias
//Parametros de diarias

        if ((diffdias<30)) {
            diffdiarias = parseFloat(diffdias)-(0.5)
//            document.getElementById('ajudadecusto_ida').value==0
//            document.getElementById('ajudadecusto_volta').value==0
        }
        else if (diffdias>=30 && diffdias<=60 && document.getElementById('missao').value == 'False') {
            diffdiarias = parseFloat(diffdias)-(0.5)
//            document.getElementById('ajudadecusto_ida').value=='True'
//            document.getElementById('ajudadecusto_volta').value=='True'
        }
        else if (diffdias>=30 && diffdias<=60) {
            diffdiarias = 0
//            document.getElementById('ajudadecusto_ida').value=='False'
//            document.getElementById('ajudadecusto_volta').value=='False'
        }
        else if (document.getElementById('missao').value == 'True') {
            diffdiarias = parseFloat(diffdias)-60
        }
        else if (document.getElementById('missao').value == 'True') {
            diffdiarias = parseFloat(diffdias)-(0.5)
        }
        else {
            diffdiarias = 0
        }
        document.getElementById('qtde_diarias').value = diffdiarias

//Parametros de Ajuda de Custo

        if (diffdias>60 && document.getElementById('missao').value == 'False') {
            document.getElementById('ajudadecusto_ida').value=0
            document.getElementById('ajudadecusto_volta').value=0
        }
        else if (diffdias>180) {
            document.getElementById('ajudadecusto_ida').value=2
            document.getElementById('ajudadecusto_volta').value=2
        }
        else if (diffdias>90 && diffdias<=180) {
            document.getElementById('ajudadecusto_ida').value=2
            document.getElementById('ajudadecusto_volta').value=1
        }
        else if (diffdias>=30 && diffdias<=90) {
            document.getElementById('ajudadecusto_ida').value=1
            document.getElementById('ajudadecusto_volta').value=1
        }
        else {
            document.getElementById('ajudadecusto_ida').value=0
            document.getElementById('ajudadecusto_volta').value=0
        }
//Sumir com ACP e Dependente se nao houver ajuda de custo
        params_ajudacusto ()
    }
    }

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
                //Sumir com ACP e Dependente se nao houver ajuda de custo
                params_ajudacusto ()
            }
        );
        $("div.militares").on('click','input.botao-del', function(e) {
                if (n != 1) {
                    document.getElementById("mil-"+this.value).remove();
                    n-=1;
                    //Sumir com ACP e Dependente se nao houver ajuda de custo
                    params_ajudacusto ()
                    }
            }
        );

//Fim das Linhas de Militares

//Início das Funções
//TODO: Terminar essa função
//Verificar CPF
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


//Funçoes de calculos individuais
function calc_ind(id) {
    $('.'+id+'-row').remove();
    for (i=0; i<t.length; i++) {
        var index = t[i].getAttribute('id').substring(4);
        elem = document.getElementById(id);
        elem.insertAdjacentHTML('beforeend', window[id](index));
    }
}

//Termino funcoes calculos individuais
function calcular() {
//    checar_campos()
    if (!checar_campos()) {
//    if (false) {
        return;
    }
    else{
//    TODO: Checar campos nao executa multiplas vezes
//    TODO: parar se checar campos acusar alerta
    document.getElementById('planilha').style.display='block';
    t=document.getElementsByClassName("militares-row");
    calc_ind('financeiro')
    calc_ind('diarias')
    calc_ind('ajudadecusto')
//Aparecer/desaparecer div diarias
    if (parseInt(document.getElementById('qtde_diarias').value)==0) {
        document.getElementById('diarias_div').style.display='none';
        return ;
    }
    else {
            document.getElementById('diarias_div').style.display='block';
    }

//Aparecer/desaparecer div ajuda de custo
    if (parseInt(document.getElementById('ajudadecusto_ida').value)==0 && parseInt(document.getElementById('ajudadecusto_volta').value)==0) {
        document.getElementById('ajudadecusto_div').style.display='none';
        return ;
    }
    else {
            document.getElementById('ajudadecusto_div').style.display='block';
    }
//    alert ("Calcular");
    }

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