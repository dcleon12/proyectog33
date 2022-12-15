
const express = require('express');
//importamos la funcion de conexion a BD
const conectarBD = require('../config/bd');

// creamos la constanto de para las pruebas de postman 
const cors = require('cors');

//al llamar a app , estoy llamando a express
const app = express();

//vamos a definir un puerto

const port = 5000;


//enlazamos la BD 
conectarBD();
app.use(cors());
app.use(express.json());

//rutas para probar cada modulo del backend
app.use('/api/usuarios', require('../routes/usuarios'));
app.use('/api/Peritos', require('../routes/peritos'));
app.use('/api/infobasica', require('../routes/InformacionBasica'));


// vamosa mostrar un msj en el navegador

app.get('/', (req, res) =>{
    res.send('Bienvenido ya esta configurado nuestro servidor')
});

app.listen(port, () => console.log("esta conectado el servidor en el puert", port));


