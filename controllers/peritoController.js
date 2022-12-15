const Perito = require('../models/Perito');

exports.mostrarperitos = async (req, res) => {


    try {


        const peritos = await Perito.find();
        res.json(peritos);


    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo un error al cargar los datos ");

    }
}
exports.agregarperitos = async (req, res) => {

    try {
        let peritos;
        peritos = new Perito (req.body)
        await peritos.save();
        res.send(peritos);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al cargar los datos");
    }

}
exports.obtenerPeritos = async (req, res) => {

    try {

        let peritos = await Perito.findById(req.params.id);
        if (!peritos) {
            res.status(404).json({ msg: "no se puede encontrar los datos" })
        }
        res.send(peritos);

    } catch (error) {
        console.log(error);
        res.status(500).send("hubo al cargar la informacion");
    }

}

exports.modificarPeritos = async (req, res) => {
    try {
        const { nombres, apellidos, documento, correo, telefono, direccion } = req.body;
        let peritos = await Perito.findById(req.params.id)

        if (!peritos) {
            res.status(404).json({ msg: "el perito no existe" })
        }
        peritos.nombres = nombres;
        peritos.apellidos = apellidos;
        peritos.documento = documento;
        peritos.correo = correo;
        peritos.telefono = telefono;
        peritos.direccion = direccion;

        peritos = await Perito.findOneAndUpdate({ _id: req.params.id }, peritos, { new: true });

        res.json(peritos);

    } catch (error) {
        console.log(error);
        res.status(500).send(" hubo al cargar la informacion");
    }
}
exports.eliminarPeritos = async (req, res) => {

    try {
         let peritos = await Perito.findById(req.params.id)

         if (!peritos) {
            res.status(404).json({ msg: " el usuario no existe"})
         }
        
         await Perito.findOneAndRemove({ _id: req.params.id })
         res.json({ msg: "el usuario a sido eliminado"});

    } catch (error) {
        console.log(error);
        res.status(500).send(" no se puede eliminar la informacion");
        
    }


}