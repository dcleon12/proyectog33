// usuario trae el esquema de la base de datos
// Usuario en MAYUSQ es la constante ,
//
const InformacionBasica = require('../models/InformacionBasica');


exports.mostrarinformacionbasica = async(req,res) => {

    try {

const informacionbasica = await InformacionBasica.find();
res.json(informacionbasica);

        
    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo un error al cargar los datos basicos");
        
    }
}

exports.agregarinformacionbasica = async(req,res) => {
    try {
        let informacionbasica;
        informacionbasica = new InformacionBasica(req.body)
        await informacionbasica.save();
        res.send(informacionbasica);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al cargar los datos basicos")
        
    }
}


exports.obtenerinformacionbasica = async(req,res) => {
    try {
        let informacionbasica = await InformacionBasica.findById(req.params.id);
        if(!informacionbasica){
            res.status(404).json({msg:"no se pueden encontrar los datos"})
        }
     res.send(informacionbasica);   

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al cargar la informacion basica")
       
    }
}

exports.modificarinformacionbasica = async(req,res) => {
    try {
        const{matricula, descripcion, direccion, propietario, estrato, area, valor} =req.body;
        let informacionbasica = await InformacionBasica.findById(req.params.id);

        if(!informacionbasica){
            res.status(404).json({msg:"el predio no existe"})
        }
    informacionbasica.matricula = matricula;
    informacionbasica.descripcion = descripcion;
    informacionbasica.direccion = direccion;
    informacionbasica.propietario = propietario;
    informacionbasica.estrato = estrato;
    informacionbasica.area = area;
    informacionbasica.area = valor;

    informacionbasica = await InformacionBasica.findByIdAndUpdate({_id : req.params.id}, informacionbasica, {new: true});
    res.json(informacionbasica);



    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo un error al cargar la informacion basica del predio");
        
    }

}

exports.eliminarinformacionbasica = async(req,res) => {
    try {
        let informacionbasica = await InformacionBasica.findById(req.params.id);

        if(!informacionbasica){
            res.status(404).json({msg:"el predio no existe"})
        } 
        await InformacionBasica.findOneAndRemove({ _id: req.params.id})
        res.json({ msg: " el predio ha sido eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send("no se puede eliminar la informacion basica del predio")
        
    }
}

//cada metodo se prueba en postman
// con get usamos la ruta de la api y el modulo de get
// con post  le damos el objeto para consumir la api y agregar los datos
