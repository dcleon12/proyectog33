const express = require ('express');
const router = express.Router();
const informacionbasicaController = require('../controllers/informacionbasicaController');

// rutas crud

router.get('/', informacionbasicaController.mostrarinformacionbasica);
router.post('/', informacionbasicaController.agregarinformacionbasica);

router.get('/:id', informacionbasicaController.obtenerinformacionbasica);
router.put('/:id', informacionbasicaController.modificarinformacionbasica);
router.delete('/:id', informacionbasicaController.eliminarinformacionbasica); 
module.exports = router;



//get mostrar datos
//put nos va a actualizar los datos
//delete borrar datos
//post para  agregar los datos
