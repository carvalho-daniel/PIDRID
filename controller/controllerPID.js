// import pid from '../public/model/pid.js';

import { getProfessores } from '../database.js'

exports.lista = async function(req, res) {
    // var id = req.params.id;
    // var pid = await pid.consulta(id)
    // const profs = await getProfessores();
    // console.log(profs)
    console.log("tem que passar por aqui")
    res.render('pidProf');
}

