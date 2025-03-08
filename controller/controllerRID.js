const pid = require('../public/model/rid.js')

exports.lista = async function(req, res) {
    var id = req.params.id;
    var rid = await rid.consulta(id)
    contexto = {
        /*
            preenche a tabela de RID
        */
    }
    res.render('ridProf', contexto);
}

