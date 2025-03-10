// import mysql from 'mysql2'
// import dotenv from 'dotenv'

var mysql = require('mysql2')
var dotenv = require('dotenv');
const { include } = require('./controller/controllerPID');

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

module.exports = {
    getProfessores,
    includeProfessor,
    login
}


