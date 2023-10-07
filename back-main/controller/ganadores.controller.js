const ganadores = require('../models/ganadores.js');

/**
 * @swagger
 * components:
 *  schemas:
 *     Ganador:
 *       type: object
 *       properties:
 *         Nombre:
 *           type: string
 *           description: "Nombre del ganador"
 *         imagen:
 *           type: string
 *           description: "Ruta de la imagen del ganador"
 *         imagen2:
 *           type: string
 *           description: "Ruta de la segunda imagen de carga detalle"
 *         estado:
 *           type: boolean
 *           description: "Estado del ganador (activo/inactivo)"
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *           description: "Fecha de nacimiento del ganador (formato YYYY-MM-DD)"
 *         pais:
 *           type: string
 *           description: "País de origen del ganador"
 *         invencion:
 *           type: string
 *           description: "Invento o logro por el cual el ganador es conocido"
 *         frases:
 *           type: array
 *           items:
 *             type: string
 *           description: "Frases famosas del ganador (si las hay)"
 *         genero:
 *           type: string
 *           description: "Género o categoría del logro del ganador"
 *         biografia:
 *           type: string
 *           description: "Biografía o descripción del ganador"
 *       required:
 *         - Nombre
 *         - invencion
 *       example:
 *         Nombre: machado
 *         imagen: machado.jpg
 *         imagen2: machado2.jpg
 *         estado: true
 *         fechaNacimiento: 1997-12-07
 *         pais: colombia
 *         invencion: la paz
 *         frases:
 *           - "La libertad se logra con justicia"
 *         genero: masculino
 *         biografia: Una excelente persona
 */

/**
 * @swagger
 * /api/ganadores:
 *   get:
 *     summary: Obtener la lista de ganadores del Nobel.
 *     tags: [Ganador]
 *     responses:
 *       200:
 *         description: Éxito, devuelve una lista de ganadores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ganador'
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

/**
 * @swagger
 * /api/ganadores:
 *   post:
 *     summary: Crear un nuevo ganador del Nobel
 *     tags: [Ganador]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ganador'
 *     responses:
 *       201:
 *         description: Nuevo ganador registrado
 *       400:
 *         description: Datos de entrada no válidos
 *       500:
 *         description: Error interno del servidor
 */
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

/**
 * @swagger
 * /api/ganadores/{id}:
 *   delete:
 *     summary: Eliminar a un ganador del Nobel por ID
 *     tags: [Ganador]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del ganador a eliminar
 *     responses:
 *       200:
 *         description: Ganador eliminado correctamente
 *       404:
 *         description: Ganador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
const deleteGanadores = async (req, res) => {
    const { id } = req.params;

    try {
        const inventor = await ganadores.findByIdAndRemove(id);

        if (!inventor) {
            return res.status(404).json({ message: 'Inventor no encontrado' });
        }

        res.json({ message: 'Inventor eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar Inventor:', error);
        res.status(500).json({ error: 'Error al eliminar Inventor.' });
    }
};

/**
 * @swagger
 * /api/ganadores/{id}:
 *   put:
 *     summary: Actualizar un ganador del Nobel por ID
 *     tags: [Ganador]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del ganador a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ganador'
 *     responses:
 *       200:
 *         description: Ganador actualizado correctamente
 *       404:
 *         description: Ganador no encontrado
 *       500:
 *         description: Error interno del servidor
 */
const putInventiores = async (req, res)=>{
    const { id } = req.params;
    const { nombre,  ...resto } = req.body;
    const inventor = await ganadores.findByIdAndUpdate(id, {nombre, ...resto}, {new:true});
    res.json({
        msg:"Inventor Actualizado",
        inventor : inventor
    });
}

module.exports = {
    getInventores,
    postGanadores,
    deleteGanadores,
    putInventiores,
    getnobel
}
