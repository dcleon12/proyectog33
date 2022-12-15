const mongoose =require ('mongoose');

// el modelo debe ser igual al esquema de la base de datos

const informacionbasicaSchema = mongoose.Schema({
    matricula: {
        type : Number,
        required: true
    },
    descripcion: {
        type : String,
        required: true
    },
    direccion: {
        type : String,
        required: true
    },
    propietario: {
        type : String,
        required: true
    },
    estrato: {
        type : Number,
        required: true
    },
    area: {
        type : Number,
        required: true
    },
    valor: {
        type : Number,
        required: true
    }

 ,versionkey:false   
});

module.exports = mongoose.model('InformacionBasica', informacionbasicaSchema);