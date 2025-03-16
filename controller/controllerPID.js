const { includePid } = require('../database.js');

exports.lista = async function(req, res) {
    
    res.render('pidProf');
}

exports.include = async function(req, res) {
    // 5, 7, 7, 26, 20, 12, 5
    var idProf = req.params.idProf;
    console.log(idProf)

    var prep_manu_ensino = [
        req.body.atv_prep_manu_1,
        req.body.atv_prep_manu_2,
        req.body.atv_prep_manu_3,
        req.body.atv_prep_manu_4,
        req.body.atv_prep_manu_5
    ]

    var apoio_ensino = [
        req.body.apoio_ensino_1,
        req.body.apoio_ensino_2,
        req.body.apoio_ensino_3,
        req.body.apoio_ensino_4,
        req.body.apoio_ensino_5,
        req.body.apoio_ensino_6,
        req.body.apoio_ensino_7
        
    ]
    var orientacao = [  
        req.body.orientacao_1,
        req.body.orientacao_2,
        req.body.orientacao_3,
        req.body.orientacao_4,
        req.body.orientacao_5,
        req.body.orientacao_6,
        req.body.orientacao_7
    ]

    var pesquisa_ino = [
        req.body.pesquisa_ino_1,
        req.body.pesquisa_ino_3,
        req.body.pesquisa_ino_2,
        req.body.pesquisa_ino_4,
        req.body.pesquisa_ino_5,
        req.body.pesquisa_ino_6,
        req.body.pesquisa_ino_7,
        req.body.pesquisa_ino_8,
        req.body.pesquisa_ino_9,
        req.body.pesquisa_ino_11,
        req.body.pesquisa_ino_10,
        req.body.pesquisa_ino_12,
        req.body.pesquisa_ino_13,
        req.body.pesquisa_ino_14,
        req.body.pesquisa_ino_15,
        req.body.pesquisa_ino_16,
        req.body.pesquisa_ino_17,
        req.body.pesquisa_ino_18,
        req.body.pesquisa_ino_19,
        req.body.pesquisa_ino_20,
        req.body.pesquisa_ino_21,
        req.body.pesquisa_ino_22,
        req.body.pesquisa_ino_23,
        req.body.pesquisa_ino_24,
        req.body.pesquisa_ino_25,
        req.body.pesquisa_ino_26
    ]    
    
    var extensao = [
        req.body.extensao_1,
        req.body.extensao_2,
        req.body.extensao_3,
        req.body.extensao_4,
        req.body.extensao_5,
        req.body.extensao_6,
        req.body.extensao_7,
        req.body.extensao_8,
        req.body.extensao_9,
        req.body.extensao_10,
        req.body.extensao_11,
        req.body.extensao_12,
        req.body.extensao_13,
        req.body.extensao_14,
        req.body.extensao_15,
        req.body.extensao_16,
        req.body.extensao_17,
        req.body.extensao_18,
        req.body.extensao_19,
        req.body.extensao_20
    ]

    var gestao_inst_repre = [
        req.body.gestao_inst_repre_1,
        req.body.gestao_inst_repre_2,
        req.body.gestao_inst_repre_3,
        req.body.gestao_inst_repre_4,
        req.body.gestao_inst_repre_5,
        req.body.gestao_inst_repre_6,
        req.body.gestao_inst_repre_7,
        req.body.gestao_inst_repre_8,
        req.body.gestao_inst_repre_9,
        req.body.gestao_inst_repre_10,
        req.body.gestao_inst_repre_11,
        req.body.gestao_inst_repre_12
    ]

    var quali_capac = [
        req.body.quali_capac_1,
        req.body.quali_capac_2,
        req.body.quali_capac_3,
        req.body.quali_capac_4,
        req.body.quali_capac_5
    ]

    var justificativa = "";
    

    await includePid(idProf, prep_manu_ensino, apoio_ensino, orientacao, pesquisa_ino, extensao, gestao_inst_repre ,quali_capac);

    res.redirect('ridProf');
}

