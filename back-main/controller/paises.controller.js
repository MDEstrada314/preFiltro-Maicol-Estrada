const Paises = require('../models/Paises');


const getPaises = async (req, res)=>{
    try {
        const pais = await Paises.find();
        res.status(200).json(pais)

    } catch (error) {
        res.status(500).json({meg:'error'})
    } 
}


module.exports = getPaises