const {Schema, model} = require('mongoose');

const PaisesSchema = Schema({
        nombre: {
            type:String,
            required: true
        },
        cantidadPremiosNobel:{
            type:Number,
            required:false
        } ,
     

});

module.exports = model('Paises',PaisesSchema,'Paises');