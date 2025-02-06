exports.tela_principal = async function (req, res) {
    contexto = {
        titulo_pagina = "Principal"
    }
    res.render("index", contexto);
}