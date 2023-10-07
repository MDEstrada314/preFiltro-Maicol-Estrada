const Paises = require('../models/Paises.js');

/**
 * @swagger
 * components:
 *   schemas:
 *     Paises:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: "Nombre del país"
 *         cantidadPremiosNobel:
 *           type: number
 *           description: "Cantidad de Premios Nobel otorgados al país"
 *       required:
 *         - nombre
 *       example:
 *         nombre: Colombia
 *         cantidadPremiosNobel: 5
 */

/**
 * @swagger
 * /api/pais:
 *   get:
 *     summary: Obtener la lista de países ganadores del Nobel.
 *     tags: [País]
 *     responses:
 *       200:
 *         description: Éxito, devuelve una lista de países ganadores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paises'
 */

const getPaises = async (req, res) => {
    try {
        const paises = await Paises.find();
        res.status(200).json(paises);
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
}

const getPaisesID = async (req, res) => {
    try {
        const pais = await Paises.findOne({ _id: req.params.id });
        res.json(pais);
    } catch (error) {
        console.log(error);
    }
}

/**
 * @swagger
 * /api/pais:
 *   post:
 *     summary: Crear un nuevo país ganador del Nobel
 *     tags: [País]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paises'
 *     responses:
 *       201:
 *         description: Nuevo país ganador registrado
 *       400:
 *         description: Datos de entrada no válidos
 *       500:
 *         description: Error interno del servidor al crear el país ganador
 */
const postPaises = async (req, res) => {
    try {
        const newPais = new Paises(req.body);
        await newPais.save();

        res.status(201).json({
            message: "País ganador creado exitosamente",
            pais: newPais
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error interno del servidor al crear el país ganador"
        });
    }
};

/**
 * @swagger
 * /api/pais/{id}:
 *   delete:
 *     summary: Eliminar un país ganador del Nobel por ID
 *     tags: [País]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del país ganador a eliminar
 *     responses:
 *       200:
 *         description: País ganador eliminado correctamente
 *       404:
 *         description: País ganador no encontrado
 *       500:
 *         description: Error interno del servidor al eliminar el país ganador
 */
const deletePaises = async (req, res) => {
    const { id } = req.params;

    try {
        const pais = await Paises.findByIdAndRemove(id);

        if (!pais) {
            return res.status(404).json({ message: 'País ganador no encontrado' });
        }

        res.json({ message: 'País ganador eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar país ganador:', error);
        res.status(500).json({ error: 'Error interno del servidor al eliminar el país ganador' });
    }
};

/**
 * @swagger
 * /api/pais/{id}:
 *   put:
 *     summary: Actualizar un país ganador del Nobel por ID
 *     tags: [País]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del país ganador a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paises'
 *     responses:
 *       200:
 *         description: País ganador actualizado correctamente
 *       404:
 *         description: País ganador no encontrado
 *       500:
 *         description: Error interno del servidor al actualizar el país ganador
 */
const putPaises = async (req, res) => {
    const { id } = req.params;
    const { nombre, cantidadPremiosNobel, ...resto } = req.body;

    try {
        const pais = await Paises.findByIdAndUpdate(id, { nombre, cantidadPremiosNobel, ...resto }, { new: true });

        if (!pais) {
            return res.status(404).json({ message: 'País ganador no encontrado' });
        }

        res.json({
            message: "País ganador actualizado",
            pais: pais
        });
    } catch (error) {
        console.error('Error al actualizar país ganador:', error);
        res.status(500).json({ error: 'Error interno del servidor al actualizar el país ganador' });
    }
}

module.exports = {
    getPaises,
    getPaisesID,
    postPaises,
    deletePaises,
    putPaises
}
