// 

const mongoose = require ('mongoose');
require("dotenv").config();


//const para conectar la bd

const conectarBD=() =>{
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("esta conectada la base de dato"))
        .catch((err) => console.log.error(err));

}

// esta linea permite llamar la funcion desde otro modulo

module.exports =conectarBD;