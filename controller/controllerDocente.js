// const dc = require('../public/model/docente.js')
import { includeProfessor, login } from "../database.js";

export async function perfil(req, res) {
    // var id = req.params.id
    // var docente = await dc.consulta(id)
    contexto = {
        // completar a pagina com as informacoes do docente
    }
    res.render('dadosProf', contexto);
}

export async function incluir(req, res) {
    //nome, email, senha, telefone, siape, ch
    var nome = req.body.nome
    var email = req.body.email
    var senha = req.body.password
    var telefone = req.body.telefone
    var siape = req.body.siape
    var ch = req.body.cargaH

    includeProfessor(nome, email, senha, telefone, siape, ch);

    res.redirect('/');
}

export async function entrar(req, res) {
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


