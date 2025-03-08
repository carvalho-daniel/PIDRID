var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex.js')

/* GET home page. */
router.get('/', controllerIndex.tela_principal);

router.get('/pidProf', controllerIndex.lista)

module.exports = router;