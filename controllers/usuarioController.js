// usuario trae el esquema de la base de datos
// Usuario en MAYUSQ es la constante ,
//
const usuario = require('../models/Usuario');
const Usuario = require ('../models/Usuario');

exports.mostrarUsuarios = async(req,res) => {

    try {

const usuario = await Usuario.find();
res.json(usuario);

        
    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo un error al cargar los datos");
        
    }
}

exports.agregarUsuarios = async(req,res) => {
    try {
        let usuraio;
        usuario = new Usuario(req.body)
        await usuario.save();
        res.send(Usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al cargar los datos")
        
    }
}


exports.obtenerUsuarios = async(req,res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg:"no se pueden encontrar los datos"})
        }
     res.send(usuario);   

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al cargar la informaci[on")
       
    }
}

exports.modificarUsuarios = async(req,res) => {
    try {
        const{nombres, apellidos, documento, correo, telefono, direccion} =req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:"el usuario no existe"})
        }
    usuario.nombres = nombres;
    usuario.apellidos = apellidos;
    usuario.documento = documento;
    usuario.correo = correo;
    usuario.telefono = telefono;
    usuario.direccion = direccion;

    usuario = await Usuario.findByIdAndUpdate({_id : req.params.id}, usuario, {new: true});
    res.json(usuario);



    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo un error al cargar la informacion");
        
    }

}
exports.eliminarUsuarios = async(req,res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:"el usuario no existe"})
        } 
        await Usuario.findOneAndRemove({ _id: req.params.id})
        res.json({ msg: " el usuario ha sido eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("no se puede eliminar la informacion")
        
    }
}

//cada metodo se prueba en postman
// con get usamos la ruta de la api y el modulo de get
// con post  le damos el objeto para consumir la api y agregar los datos