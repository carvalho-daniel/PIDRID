(function($) {  
    AddTableRow = function(btn) {
        var newRow = $("<tr>");
        var cols = "";
        
        // Adicionando as células para a nova linha (Disciplina e Carga Horária)
        cols += '<td><input type="text" placeholder="Disciplina" class="form-control" /></td>';
        cols += '<td><input type="number" placeholder="Carga Horária" class="form-control" /></td>';
        
        // Colocando o botão de remover na última coluna
        cols += '<td>';
        cols += '<button onclick="RemoveTableRow(this)" type="button" class="btn btn-danger btn-sm">-</button>';
        cols += '</td>';
        
        $(newRow).append(cols);
        
        // Inserindo a nova linha na tabela
        $(btn).closest('table').find('tbody').append(newRow);
        return false;
    };
})(jQuery);

(function($) {    
    RemoveTableRow = function(item) {       
        var tr = $(item).closest('tr'); 

        // Removendo a linha após animação
        tr.fadeOut(400, function() {          
            tr.remove();        
        });   

        return false;     
    };   
})(jQuery);
