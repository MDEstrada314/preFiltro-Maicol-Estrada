const Nobels = require('../models/Nobel.js');
/* const bcryptjs = require('bcryptjs'); */

/* const getNobels = async (req, res)=>{
    try {
        const ganador = await Nobels.find();
        res.status(200).json(ganador)

    } catch (error) {
        res.status(500).json({meg:'error'})
    } 
} */

const getNobels = async (req, res) => {
    try {
        const data = await Nobels.find()
        .populate('ganador', 'Nombre imagen frases -_id')

        res.json({
            alquiler: data
        });
      } catch (err) {
        res.status(500).json({ error: 'Not Found :C'});
      };
};





module.exports = getNobels