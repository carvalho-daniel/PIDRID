// import pid from '../public/model/pid.js';

import { getProfessores } from '../database.js';

export async function lista(req, res) {
    // var id = req.params.id;
    // var pid = await pid.consulta(id)
    // consigo listar todos os professores, mas da um warning talvez dê problema sla xD
    // const profs = await getProfessores();
    // console.log(profs)
    res.render('pidProf');
}

export async function include(req, res) {

    res.redirect('ridProf');
}

