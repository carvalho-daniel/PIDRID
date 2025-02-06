var express = require('express');
var router = express.Router();
var controllerDoscente = require('../controller/controllerDocente');
var controllerPID = require('../controller/controllerPID');
var controllerRID = require('../controller/controllerRID');

// descomentar quanto a requisao estiver pronta

router.get('/dadosProf', controllerDoscente.perfil);

router.get('/pidProf/:id', controllerPID.lista);
// router.post('/pidProf/:id', controllerPID.altera_pid);

router.get('/ridProf/:id', controllerRID.lista);
// router.post('/ridProf/:id', controllerRID.altera_rid);



module.exports = router;