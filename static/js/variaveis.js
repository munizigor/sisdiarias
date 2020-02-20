//var militar_head = `<div class="form-row mil-`
function militar(n) {
return (`<div class="form-row militares-row mil-${n} border rounded" id="mil-${n}">
				<div class="form-row col-md-11">
				<div class="form-group col-md-2">
				  <label>Posto/Grad</label>
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
				<div class="form-group col-md-1">
				  <label>Matrícula</label>
				  <input type="text" id="matricula-${n}" class="form-control">
				</div>
				<div class="form-group col-md-4">
				  <label>Nome</label>
				  <input type="text" id="nome-${n}" class="form-control">
				</div>
				<div class="form-group col-md-2">
				  <label>CPF</label>
				  <input type="text" id="cpf-${n}" class="form-control cpf">
				</div>
				<div class="form-group col-md-2">
			  		<label>Adicional Cert. Profissional</label>
			  		<select name="acp" class="form-control" id="acp-${n}">
					<option value=0>Sem ACP</option>
					<option value=10>Formação (CFSD, CFO)</option>
					<option value=25>Especialização (CESEI, CMAUT, SCI)</option>
					<option value=45>Aperfeiçoamento (CAP, CAO)</option>
					<option value=75>Altos Estudos (CAEP, CAEO)</option>
<!--			TODO: Aparecer apenas se pagar Ajuda de Custo-->
			  		</select>
				</div>
				<div class="form-group col-md-2">
			  		<label>Viajará com Dependente?</label>
			  		<select name="bool_dep" class="form-control" id="dep-${n}">
					<option value="True">SIM</option>
					<option value="False">NÃO</option>
<!--			TODO: Aparecer apenas se pagar Ajuda de Custo-->
			  		</select>
				</div>
				<div class="form-group col-md-3">
				  <label>Banco</label>
		<!--			TODO: Usar https://raw.githubusercontent.com/guibranco/BancosBrasileiros/master/bancos.json como fonte de pesquisa-->
				  <input type="text" id="banco-${n}" class="form-control">
				</div>
				<div class="form-group col-md-1">
				  <label>Agência</label>
				  <input type="text" id="agencia-${n}" class="form-control">
				</div>
				<div class="form-group col-md-1">
				  <label>Conta</label>
				  <input type="text" id="conta-${n}" class="form-control">
				</div>
				</div>
				<div class="form-group col-md-1">
					<input type="submit" class="botao-add" id="add-${n}" name="form.button.add" value="${n}" title="Adicionar linha">
					<input type="submit" class="botao-del" id="del-${n}" name="form.button.del" value="${n}" title="Excluir linha">
				</div>
			</div>
			`);
			}