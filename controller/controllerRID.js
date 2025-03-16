const pid = require('../public/model/rid.js')

exports.lista = async function(req, res) {
    var id = req.params.id;
    contexto = {
        /*
            preenche a tabela de RID
        */
    }
    res.render('ridProf', contexto);
}

