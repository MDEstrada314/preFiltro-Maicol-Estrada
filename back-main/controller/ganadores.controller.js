const ganadores = require('../models/ganadores.js');

/* const bcryptjs = require('bcryptjs'); */

/**
 * @swagger
 * components:
 *  schemas:
 *     Ganador:
 *          type: object
 *          properties:
 *                Nombre:
 *                  type: string
 *                  description: "Nombre del ganador"
 *                imagen:
 *                  type: String
 *                  description: "Ruta de la imagen del ganador"
 *                imagen2:
 *                  type: String
 *                  description: "ruta de la segunda iamgen de carga detalle"
 *                estado:
 *                  type: Boolean
 *                  description: "Estado del ganador (activo/inactivo)"
 *                fechaNacimiento:
 *                   type: Date
 *                   description: "Fecha de nacimiento del ganador"
 *                pais:
 *                   type: String
 *                   description: "País de origen del ganador"
 *                invencion:
 *                   type: String
 *                   description: "Invento o logro por el cual el ganador es conocido"
 *                frases:
 *                   type: Array
 *                   description: "Frases famosas del ganador (si las hay)"
 *                genero: 
 *                   type: String
 *                   description: "Género o categoría del logro del ganador"
 *                biografia:
 *                   type: String
 *                   description: "Biografía o descripción del ganador"
 *          required:
 *              -Nombre
 *              -invencion
 *          example:
 *              Nombre: machado
 *              imagen: machado.jpg
 *              imagen2: machado2.jpg
 *              estado: true
 *              fechaNacimiento: 1997-12-07
 *              pais: colombia
 *              invecion: la paz
 *              frases: la libertad se logra justos
 *              genero: masculino
 *              biografia: una exelete persona
 *                  
 */

/**
 * @swagger
 * /api/:
 * post:
 *  summary: crear a un nuevo ganador del nobel
 *  tags: [Ganador]
 *  requestBody:
 *      requiered: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Ganador'
 *  responses:
 *      200:
 *        description: nuevo ganador registrado
 *                  
 */



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

    const deleteGanadores = async (req, res) => {
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
    deleteGanadores,
    putInventiores,
    getnobel
   
}