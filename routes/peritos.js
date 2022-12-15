const express = require ('express');
const router = express.Router();
const peritoController = require('../controllers/peritoController');

//rutas crud

router.get('/', peritoController.mostrarperitos)
router.post('/', peritoController.agregarperitos)
router.get('/:id', peritoController.obtenerPeritos)
router.put('/:id', peritoController.modificarPeritos)
router.delete('/:id', peritoController.eliminarPeritos)
module.exports = router;



