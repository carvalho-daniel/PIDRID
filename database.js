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
        include into atv_prep_manu
        (   atv_prep_manu_1,
            atv_prep_manu_2,
            atv_prep_manu_3,
            atv_prep_manu_4,
            atv_prep_manu_5
        )
        values (?, ?, ?, ?, ?) where id_professor = ?
    `, [prep_manu_ensino[0], prep_manu_ensino[1], prep_manu_ensino[2], prep_manu_ensino[3], prep_manu_ensino[4], idProf]);
}

module.exports = {
    getProfessores,
    includeProfessor,
    login
}


