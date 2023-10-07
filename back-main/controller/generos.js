const Generos = require('../models/generos');

/**
 * @swagger
 * components:
 *   schemas:
 *     Genero:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: "Nombre del género"
 *       required:
 *         - nombre
 *       example:
 *         nombre: masculino
 */

/**
 * @swagger
 * /api/genero:
 *   get:
 *     summary: Obtener la lista de géneros.
 *     tags: [Género]
 *     responses:
 *       200:
 *         description: Éxito, devuelve una lista de géneros.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genero'
 */

const getGeneros = async (req, res) => {
    try {
        // Cambiar 'Generos' por el modelo correcto que corresponda a los géneros.
        const data = await Generos.find();

        res.json({
            generos: data
        });
    } catch (err) {
        res.status(500).json({ error: 'Not Found :C' });
    }
};

module.exports = getGeneros;
