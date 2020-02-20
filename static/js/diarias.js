
//Início dos Parâmetros iniciais

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