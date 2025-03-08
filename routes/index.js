const express = require('express');
const router = express.Router();
const controllerPid = require('../controller/controllerPID.js');

// Rota para a página inicial
router.get('/', (req, res) => {
    res.render('index');
});

// Rota para a página de dados do professor
router.get('/dadosProf', (req, res) => {
    res.render('dadosProf');
});

// Rota para a página PID do professor
router.get('/pidProf', controllerPid.lista);

// Rota para a página de registro
router.get('/register', (req, res) => {
    res.render('register');
});

// Rota para a página RID do professor
router.get('/ridProf', (req, res) => {
    res.render('ridProf');
});

module.exports = router;