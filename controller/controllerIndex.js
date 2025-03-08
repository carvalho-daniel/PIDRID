const pid = require('../public/model/pid.js')

// import { getProfessores } from '../database.js'

exports.tela_principal = async function (req, res) {
    contexto = {
        titulo_pagina: "Principal"
    }
    res.render("index", contexto);
}

exports.lista = async function(req, res) {
    // var id = req.params.id;
    // var pid = await pid.consulta(id)
    // const profs = await getProfessores();
    // console.log(profs)
    console.log("tem que passar por aqui")
    res.render('pidProf');
}
