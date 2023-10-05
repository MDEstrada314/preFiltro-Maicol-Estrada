const {Schema, model} = require('mongoose');

const GanadoresSchema = Schema({
        nombre: {
            type:String,
            required:true
        },
        imagen:{
            type:String,
            required:false
        } ,
        fechaNacimiento:{
            type:Date,
            required:true
        },
        pais:{
            type: Schema.Types.ObjectId,
            ref: 'Pais',
            required: true
        },
        invencion:{
            type:String,
            required:true
        },
        genero:{
            type: Schema.Types.ObjectId,
            ref: 'Generos',
            required: true
        },

      

   
});

module.exports = model('Ganadores',GanadoresSchema,'Ganadores');