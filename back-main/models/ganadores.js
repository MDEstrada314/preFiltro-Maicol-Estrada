const {Schema, model} = require('mongoose');

const GanadoresSchema = Schema({
        Nombre: {
            type:String,
            required:true
        },
        imagen:{
            type:String,
            required:false,
            default:'defauld.jpg',
        } ,
        imagen2:{
            type:String,
            required:false,
            default:'defauld.jpg',
        } ,
        estado:{
            type:Boolean,
            required:false,
            default:true
        },
        fechaNacimiento:{
            type:String,
            required:false
        },
        pais:{
            type:String,
            required: false
        },
        invencion:{
            type:String,
            required:true
        },
        frases:{
            type:Array,
            required:false

        },
        genero:{
            type:String,
            required: false
        },
        biografia:{
            type:String,
            required:false
        }

      

   
});

module.exports = model('Ganadores',GanadoresSchema,'Ganadores');