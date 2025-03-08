const dc = require('../public/model/docente.js')

exports.perfil = async function(req, res) {
    var id = req.params.id
    var docente = await dc.consulta(id)
    contexto = {
        // completar a pagina com as informacoes do docente
    }
    res.render('dadosProf', contexto);
}

