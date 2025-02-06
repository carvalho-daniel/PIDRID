const pid = require('../model/pid.js')

exports.lista = async function(req, res) {
    var id = req.params.id;
    var pid = await pid.consulta(id)
    contexto = {
        /*
            preenche a tabela de PID
        */
    }
    res.render('pidProf', contexto);
}

