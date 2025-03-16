// import pid from '../public/model/pid.js';

// import { getProfessores } from '../database.js';

var db = require('../database.js');

exports.lista = async function(req, res) {
    console.log("pidprof")
    // console.log("Id que veio do login: " + localStorage.getItem('id_professor'))
    
    res.render('pidProf');
}

exports.include = async function(req, res) {

    res.redirect('ridProf');
}

