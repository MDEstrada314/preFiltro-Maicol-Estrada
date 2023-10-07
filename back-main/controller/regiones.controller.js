const Regiones = require('../models/regiones');

/**
 * @swagger
 * components:
 *   schemas:
 *     Region:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: "Nombre de la región"
 *       required:
 *         - nombre
 *       example:
 *         nombre: Nueva York
 */

/**
 * @swagger
 * /api/region:
 *   get:
 *     summary: Obtener la lista de regiones.
 *     tags: [Región]
 *     responses:
 *       200:
 *         description: Éxito, devuelve una lista de regiones.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Region'
 */

const getRegiones = async (req, res) => {
    try {
        // Cambiar 'Nobels' por el modelo correcto que corresponda a las regiones.
        const data = await Regiones.find();

        res.json({
            regiones: data
        });
    } catch (err) {
        res.status(500).json({ error: 'Not Found :C' });
    }
};

module.exports = getRegiones;
