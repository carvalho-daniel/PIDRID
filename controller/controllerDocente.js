// const dc = require('../public/model/docente.js')

const { getProfessores, includeProfessor, login } = require('../database.js');

exports.perfil = async function(req, res) {
    // var id = req.params.id
    // var docente = await dc.consulta(id)
    contexto = {
        // completar a pagina com as informacoes do docente
    }
    res.render('dadosProf', contexto);
}

exports.incluir = async function(req, res) {
    //nome, email, senha, telefone, siape, ch
    var nome = req.body.nome
    var email = req.body.email
    var senha = req.body.password
    var telefone = req.body.telefone
    var siape = req.body.siape
    var ch = req.body.cargaH

    await includeProfessor(nome, email, senha, telefone, siape, ch);

    res.redirect('/');
}

exports.entrar = async function(req, res) {
    var email = req.body.email
    var senha = req.body.password

    var rows = await login(email, senha);

    console.log(rows);

    var contexto;

    if(rows == undefined) {
        contexto = {
            nLogou: true
        }
        res.render("index", contexto)
    } else {
        contexto = {
            id: rows.id
        }
        res.render('pidProf', contexto)
    }   

}


