//var militar_head = `<div class="form-row mil-`
function rounddown(x) {
    return Math.floor(x*100)/100
}
function parseMoney (x) {
    return x.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
}
function militar(n) {
return (`<div class="form-row militares-row mil-${n} border rounded" id="mil-${n}">
				<div class="form-row col-md-11">
				<div class="form-group col-md-1">
				  <label for="matricula-${n}">Matrícula</label>
				  <input type="text" id="matricula-${n}" name="matricula" class="form-control" required>
				</div>
				<div class="form-group col-md-2">
				  <label for="posto-${n}">Posto/Grad</label>
				  <select name="posto" class="form-control" required id="posto-${n}">
					 <option value="null"></option>
					  <!--TODO: Adicionar Cmt Geral. Aqui e no JSON-->
					 <option value="CORONEL">CEL</option>
					 <option value="TENENTE-CORONEL">TC</option>
					 <option value="MAJOR">MAJ</option>
					 <option value="CAPITAO">CAP</option>
					 <option value="PRIMEIRO TENENTE">1º TEN</option>
					 <option value="SEGUNDO TENENTE">2º TEN</option>
					 <option value="ASPIRANTE">ASP</option>
					 <option value="SUBTENENTE">ST</option>
					 <option value="PRIMEIRO SARGENTO">1º SGT</option>
					 <option value="SEGUNDO SARGENTO">2º SGT</option>
					 <option value="TERCEIRO SARGENTO">3º SGT</option>
					 <option value="CABO">CB</option>
					 <option value="SOLDADO PRIMEIRA CLASSE">SD/1</option>
					 <option value="SOLDADO SEGUNDA CLASSE">SD/2</option>
					 <option value="CADETE DEMAIS ANOS">CAD/1</option>
					 <option value="CADETE ULTIMO ANO">CAD/2</option>
				  </select>
				</div>
				<div class="form-group col-md-4">
				  <label for="nome-${n}">Nome</label>
				  <input type="text" id="nome-${n}" name="nome" class="form-control" required>
				</div>
				<div class="form-group col-md-2">
				  <label for="cpf-${n}">CPF</label>
				  <input type="text" id="cpf-${n}" name="cpf"  class="form-control cpf" required>
				</div>
				<div class="form-group col-md-2 ajudadecusto_var" style="display:none;">
			  		<label for="acp-${n}">Adicional Cert. Profissional</label>
			  		<select name="acp" class="form-control" id="acp-${n}">
					<option value="null"></option>
					<option value=0>Sem ACP</option>
					<option value=10>Formação (CFSD, CFO)</option>
					<option value=25>Especialização (CESEI, CMAUT, SCI)</option>
					<option value=45>Aperfeiçoamento (CAP, CAO)</option>
					<option value=75>Altos Estudos (CAEP, CAEO)</option>
<!--			TODO: Aparecer apenas se pagar Ajuda de Custo-->
			  		</select>
				</div>
				<div class="form-group col-md-2 ajudadecusto_var" style="display:none;">
			  		<label for="dep-${n}">Viajará com Dependente?</label>
			  		<select name="dep" class="form-control" id="dep-${n}">
					<option value="null"></option>
					<option value=1>SIM</option>
					<option value=2>NÃO</option>
<!--			TODO: Aparecer apenas se pagar Ajuda de Custo-->
			  		</select>
				</div>
				<div class="form-group col-md-3">
				  <label for="banco-${n}">Banco</label>
		<!--			TODO: Usar https://raw.githubusercontent.com/guibranco/BancosBrasileiros/master/bancos.json como fonte de pesquisa-->
				  <input type="text" id="banco-${n}" name="banco" class="form-control" required>
				</div>
				<div class="form-group col-md-1">
				  <label for="agencia-${n}">Agência</label>
				  <input type="text" id="agencia-${n}" name="agencia" class="form-control" required>
				</div>
				<div class="form-group col-md-1">
				  <label for="conta-${n}">Conta</label>
				  <input type="text" id="conta-${n}" name="conta" class="form-control" required>
				</div>
				</div>
				<div class="form-group col-md-1">
					<input type="submit" class="botao-add" id="add-${n}" name="form.button.add" value="${n}" title="Adicionar linha">
					<input type="submit" class="botao-del" id="del-${n}" name="form.button.del" value="${n}" title="Excluir linha">
				</div>
			</div>
			`);
			}

function diarias(l) {

    destino = document.getElementById('destino').value
    posto = document.getElementById("posto-"+String(l)).value
    qtde_diarias=document.getElementById('qtde_diarias').value
    diaria_val = diarias_nac[destino][posto]
    bruto = (Math.round(diaria_val*qtde_diarias*100)/100)
    alim = -(Math.round((850/30)*qtde_diarias*100)/100)
    liq = (parseFloat(bruto) + parseFloat(alim))
    return (
`<tbody class="diarias-row">
    <tr>
        <td>${document.getElementById("matricula-"+String(l)).value}</td>
        <td>${document.getElementById("posto-"+String(l)).value}</td>
        <td>${document.getElementById("nome-"+String(l)).value}</td>
        <td>R$ ${parseMoney(diaria_val)}</td>
        <td>R$ ${parseMoney(bruto)}</td>
        <td>R$ ${parseMoney(alim)}</td>
        <td>R$ ${parseMoney(liq)}</td>
    </tr>
</tbody>`
    );
}

function ajudadecusto(l) {

    posto = document.getElementById("posto-"+String(l)).value;

    if (ats[document.getElementById("matricula-"+String(l)).value]==undefined) {
        tempo_serv=0;
    }
    else {
        tempo_serv=rounddown((parseFloat(ats[document.getElementById("matricula-"+String(l)).value])/100)*
                                parseFloat(remuneracao[posto]['soldo']));
    }
    cert_prof = rounddown((parseFloat(document.getElementById("acp-"+String(l)).value)/100)*
                            parseFloat(remuneracao[posto]['soldo']));
    remun =rounddown(parseFloat(remuneracao['gcef']) + parseFloat(remuneracao['grv']) +
                parseFloat(remuneracao[posto]['soldo']) + parseFloat(remuneracao[posto]['vpe']) +
                parseFloat(remuneracao[posto]['apg']) + parseFloat(remuneracao[posto]['aom']) +
                parseFloat(remuneracao[posto]['gfr']) + tempo_serv + cert_prof)
    ajuda_ida = remun*parseFloat(document.getElementById('ajudadecusto_ida').value)
    ajuda_volta = remun*parseFloat(document.getElementById('ajudadecusto_volta').value)
    return (
`<tbody class="ajudadecusto-row">
    <tr>
        <td>${document.getElementById("matricula-"+String(l)).value}</td>
        <td>${document.getElementById("posto-"+String(l)).value}</td>
        <td>${document.getElementById("nome-"+String(l)).value}</td>
        <td>R$ ${parseMoney(remun)}</td>
        <td>R$ ${parseMoney(ajuda_ida)}</td>
        <td>R$ ${parseMoney(ajuda_volta)}</td>
        <td>R$ ${parseMoney(ajuda_ida + ajuda_volta)}</td>
    </tr>
</tbody>`
    );
}


function financeiro(l) {
//    posto = document.getElementById("posto-"+String(l));
//    posto_txt= posto.options[posto.selectedIndex].text;
    return (
`<tbody class="financeiro-row">
    <tr>
        <td>${document.getElementById("nome-"+String(l)).value}</td>
        <td>${document.getElementById("cpf-"+String(l)).value}</td>
        <td>${document.getElementById("banco-"+String(l)).value}</td>
        <td>${document.getElementById("agencia-"+String(l)).value}</td>
        <td>${document.getElementById("conta-"+String(l)).value}</td>
    </tr>
</tbody>`
    );
}