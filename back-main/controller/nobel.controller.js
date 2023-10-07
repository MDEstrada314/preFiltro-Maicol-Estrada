const Nobels = require('../models/Nobel.js');

/**
 * @swagger
 * components:
 *   schemas:
 *     Nobel:
 *       type: object
 *       properties:
 *         ganador:
 *           type: string
 *           description: "ID del ganador del Nobel"
 *         titulo:
 *           type: string
 *           description: "Título del Premio Nobel"
 *         año:
 *           type: number
 *           description: "Año en que se otorgó el Premio Nobel"
 *       required:
 *         - ganador
 *         - titulo
 *         - año
 *       example:
 *         ganador: 1234567890
 *         titulo: "Premio Nobel de Física"
 *         año: 2023
 */

/**
 * @swagger
 * /api/nobel:
 *   get:
 *     summary: Obtener la lista de Premios Nobel.
 *     tags: [Nobel]
 *     responses:
 *       200:
 *         description: Éxito, devuelve una lista de Premios Nobel.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Nobel'
 */

const getNobels = async (req, res) => {
    try {
        const data = await Nobels.find()
        .populate('ganador', 'Nombre imagen frases _id')

        res.json({
            alquiler: data
        });
      } catch (err) {
        res.status(500).json({ error: 'Not Found :C'});
      };
};

/**
 * @swagger
 * /api/nobel:
 *   post:
 *     summary: Crear un nuevo Premio Nobel.
 *     tags: [Nobel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nobel'
 *     responses:
 *       201:
 *         description: Nuevo Premio Nobel registrado
 *       400:
 *         description: Datos de entrada no válidos
 *       500:
 *         description: Error interno del servidor al crear el Premio Nobel
 */
const postNobels = async (req, res) => {
    try {
        const newNobel = new Nobels(req.body);
        await newNobel.save();

        res.status(201).json({
            message: "Premio Nobel creado exitosamente",
            nobel: newNobel
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error interno del servidor al crear el Premio Nobel"
        });
    }
};

/**
 * @swagger
 * /api/nobel/{id}:
 *   delete:
 *     summary: Eliminar un Premio Nobel por ID.
 *     tags: [Nobel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Premio Nobel a eliminar
 *     responses:
 *       200:
 *         description: Premio Nobel eliminado correctamente
 *       404:
 *         description: Premio Nobel no encontrado
 *       500:
 *         description: Error interno del servidor al eliminar el Premio Nobel
 */
const deleteNobels = async (req, res) => {
    const { id } = req.params;

    try {
        const nobel = await Nobels.findByIdAndRemove(id);

        if (!nobel) {
            return res.status(404).json({ message: 'Premio Nobel no encontrado' });
        }

        res.json({ message: 'Premio Nobel eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar Premio Nobel:', error);
        res.status(500).json({ error: 'Error interno del servidor al eliminar el Premio Nobel' });
    }
};

/**
 * @swagger
 * /api/nobel/{id}:
 *   put:
 *     summary: Actualizar un Premio Nobel por ID.
 *     tags: [Nobel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del Premio Nobel a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nobel'
 *     responses:
 *       200:
 *         description: Premio Nobel actualizado correctamente
 *       404:
 *         description: Premio Nobel no encontrado
 *       500:
 *         description: Error interno del servidor al actualizar el Premio Nobel
 */
const putNobels = async (req, res) => {
    const { id } = req.params;
    const { ganador, titulo, año, ...resto } = req.body;

    try {
        const nobel = await Nobels.findByIdAndUpdate(id, { ganador, titulo, año, ...resto }, { new: true });

        if (!nobel) {
            return res.status(404).json({ message: 'Premio Nobel no encontrado' });
        }

        res.json({
            message: "Premio Nobel actualizado",
            nobel: nobel
        });
    } catch (error) {
        console.error('Error al actualizar Premio Nobel:', error);
        res.status(500).json({ error: 'Error interno del servidor al actualizar el Premio Nobel' });
    }
}

module.exports = {
    getNobels,
    postNobels,
    deleteNobels,
    putNobels
};
