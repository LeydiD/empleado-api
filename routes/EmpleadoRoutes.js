const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/EmpledoController.js');

router.get('/', empleadoController.index);
router.get('/show', empleadoController.show);
router.post('/guardar', empleadoController.guardar);

module.exports = router;