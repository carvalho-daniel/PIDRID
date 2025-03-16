var mysql = require('mysql2')
var dotenv = require('dotenv');

dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise()

async function getProfessores() {
    const [rows] = await pool.query("SELECT * FROM professor;")
    return rows
}

async function includeProfessor(nome, email, senha, telefone, siape, ch) {
    /*
        ordem dos atributos no banco
        nome, email, senha, telefone, siape, ch
    */

    const [result] = await pool.query(`
        insert into professor (nome, email, senha, telefone, siape, ch) 
        values (?, ?, md5(?), ?, ?, ?);
    `, [nome, email, senha, telefone, siape, ch])
    return result.insertId
}

async function login(email, senha) {
    const [rows] = await pool.query(`
        select id from professor where email = ? and senha = md5(?);   
    `, [email, senha]);
    return rows[0];
}

async function includePid(idProf, prep_manu_ensino, apoio_ensino, orientacao, pesquisa_ino, extensao, gestao_inst_repre, quali_capac, justificativa="") {
    await pool.query(`
        insert into atv_prep_manu
        (   atv_prep_manu_1,
            atv_prep_manu_2,
            atv_prep_manu_3,
            atv_prep_manu_4,
            atv_prep_manu_5
        )
        values (?, ?, ?, ?, ?) where id_professor = ?
    `, [prep_manu_ensino[0], prep_manu_ensino[1], prep_manu_ensino[2], prep_manu_ensino[3], prep_manu_ensino[4], idProf]);
    
    await pool.query(`
        insert into atv_apoio_ensino
        (   atv_apoio_ensino_1,
            atv_apoio_ensino_2,
            atv_apoio_ensino_3,
            atv_apoio_ensino_4,
            atv_apoio_ensino_5,
            atv_apoio_ensino_6,
            atv_apoio_ensino_7

        )
        values (?, ?, ?, ?, ?, ?, ?) where id_professor = ?
    `, [apoio_ensino[0], apoio_ensino[1], apoio_ensino[2], apoio_ensino[3], apoio_ensino[4], apoio_ensino[5], apoio_ensino[6], idProf]);

    await pool.query(`
        insert into atv_orientacao
        (   orientacao_1,
            orientacao_2,
            orientacao_3,
            orientacao_4,
            orientacao_5,
            orientacao_6,
            orientacao_7
        )
        values (?, ?, ?, ?, ?, ?, ?) where id_professor = ?
    `, [orientacao[0], orientacao[1], orientacao[2], orientacao[3], orientacao[4], orientacao[5], orientacao[6], idProf]);

    await pool.query(`
        insert into atv_pesq_ino
        (  
            atv_pesquisa_1, atv_pesquisa_2, atv_pesquisa_3, atv_pesquisa_4, atv_pesquisa_5, 
            atv_pesquisa_6, atv_pesquisa_7, atv_pesquisa_8, atv_pesquisa_9, atv_pesquisa_10, atv_pesquisa_11
            atv_pesquisa_12, atv_pesquisa_13, atv_pesquisa_14, atv_pesquisa_15, atv_pesquisa_16, 
            atv_pesquisa_17, atv_pesquisa_18, atv_pesquisa_19, atv_pesquisa_20, atv_pesquisa_21, 
            atv_pesquisa_22, atv_pesquisa_23, atv_pesquisa_24, atv_pesquisa_25, atv_pesquisa_26, 
        )
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) where id_professor = ?
    `, [pesquisa[0],  pesquisa[1],  pesquisa[2],  pesquisa[3],  pesquisa[4],  pesquisa[5], 
        pesquisa[6],  pesquisa[7],  pesquisa[8],  pesquisa[9],  pesquisa[10], pesquisa[11], 
        pesquisa[12], pesquisa[13], pesquisa[14], pesquisa[15], pesquisa[16], pesquisa[17], 
        pesquisa[18], pesquisa[19], pesquisa[20], pesquisa[21], pesquisa[22], pesquisa[23], 
        pesquisa[24], pesquisa[25], pesquisa[26],
        idProf]);


}

module.exports = {
    getProfessores,
    includeProfessor,
    includePid,
    login
}


