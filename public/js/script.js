total = 0

function AddTableRowPid() {
    // Cria uma nova linha
    var newRow = $("<tr>");
    
    // Adiciona as colunas para a disciplina e carga horária
    var cols = "";
    cols += '<td><input type="text" placeholder="Disciplina" class="form-control" /></td>';
    cols += '<td><input type="number" min=0 placeholder="Carga Horária" class="form-control cargaHorariaDisciplina" oninput="chTotalDisciplina()" /> </td>';
    cols += '<td style="text-align: center;"><button onclick="RemoveTableRow(this)" type="button" class="btn btn-danger btn-sm">Excluir</button></td>';
    
    newRow.append(cols);

    // Insere a nova linha acima do botão "Adicione uma nova Disciplina"
    $(newRow).insertBefore($(event.target).closest('tr'));

}

function AddTableRowRid() {
    // Cria uma nova linha
    var newRow = $("<tr>");
    
    // Adiciona as colunas para a disciplina e carga horária
    var cols = "";
    cols += '<td><input type="text" placeholder="Disciplina" class="form-control" /></td>';
    cols += '<td><p>0</p></td>';
    cols += '<td><input type="number" min=0 placeholder="Carga Horária" class="form-control cargaHorariaDisciplina" oninput="chTotalDisciplina()" /> </td>';
    cols += '<td style="text-align: center;"><button onclick="RemoveTableRow(this)" type="button" class="btn btn-danger btn-sm">Excluir</button></td>';
    
    newRow.append(cols);

    // Insere a nova linha acima do botão "Adicione uma nova Disciplina"
    $(newRow).insertBefore($(event.target).closest('tr'));

}

// Função para remover a linha
function RemoveTableRow(btn) {
    var row = $(btn).closest('tr');
    row.fadeOut(400, function() {
        row.remove();
        chTotalDisciplina()
    });
}

function chTotalDisciplina() {
    let total = 0;
    $(".cargaHorariaDisciplina").each(function() {
        let valor = parseInt($(this).val()) || 0;
        total += valor;
    });
    $("#totalChDisciplinas").text(total);
}