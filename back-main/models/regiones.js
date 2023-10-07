const {Schema, model} = require('mongoose');

const RegionesSchema = Schema({
        nombre:{
            type:String,
            required:true
        } 

});

module.exports = model('Regiones',RegionesSchema,'Regiones');