// import pid from '../public/model/pid.js';

// import { getProfessores } from '../database.js';

var db = require('../database.js');

exports.lista = async function(req, res) {
    // var id = req.params.id;
    // var pid = await pid.consulta(id)
    // consigo listar todos os professores, mas da um warning talvez dê problema sla xD
    // const profs = await getProfessores();
    // console.log(profs)
    res.render('pidProf');
}

exports.include = async function(req, res) {

    res.redirect('ridProf');
}

