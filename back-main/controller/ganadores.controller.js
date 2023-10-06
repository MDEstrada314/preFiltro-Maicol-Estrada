const ganadores = require('../models/ganadores.js');
/* const bcryptjs = require('bcryptjs'); */

const getInventores = async (req, res)=>{
    try {
        const ganador = await ganadores.find();
        res.status(200).json(ganador)

    } catch (error) {
        res.status(500).json({meg:'error'})
    } 
}


const getnobel= async (req,res) =>{
    try {
        const ganador = await ganadores.findOne({_id:req.params.id})
        res.json(ganador);
    } catch (error) {
        console.log(error);
    }
}


const postGanadores= async (req, res) => {
    try {
        const newInventor = new ganadores(req.body); // Crea una nueva instancia del modelo con los datos del cuerpo de la solicitud
        await newInventor.save(); // Guarda el nuevo inventor en la base de datos

        res.status(201).json({
            message: "Inventor creado exitosamente",
            inventor: newInventor
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al crear el inventor"
        });
    }
};

    const deleteInventiores = async (req, res) => {
        const { id } = req.params;
    
        try {
        const invetor = await ganadores.findByIdAndRemove(id);
    
        if (!invetor) {
            return res.status(404).json({ message: 'Inventor no encontrado' });
        }
    
        res.json({ message: 'Inventor eliminado correctamente' });
        } catch (error) {
        console.error('Error al eliminar Inventor:', error);
        res.status(500).json({ error: 'Error al eliminar Inventor.' });
        }
    };

    const putInventiores = async (req, res)=>{
        const { id } = req.params;
        const { nombre,  ...resto } = req.body;
        const invetor = await ganadores.findByIdAndUpdate(id, {nombre, resto}, {new:true});
        res.json({
            msg:"Inventor Actualizado",
            invetor : invetor
        });
    }

module.exports = {
    getInventores,
    postGanadores,
    deleteInventiores,
    putInventiores,
    getnobel
   
}