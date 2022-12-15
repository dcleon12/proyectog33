const express = require ('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// rutas crud

router.get('/', usuarioController.mostrarUsuarios);
router.post('/', usuarioController.agregarUsuarios);
router.get('/:id', usuarioController.obtenerUsuarios);
router.put('/:id', usuarioController.modificarUsuarios);
router.delete('/:id', usuarioController.eliminarUsuarios);
module.exports = router;



//get mostrar datos
//put nos va a actualizar los datos
//delete borrar datos
//post para  agregar los datos

