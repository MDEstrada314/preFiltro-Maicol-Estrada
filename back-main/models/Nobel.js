const {Schema, model} = require('mongoose');

const NobelSchema = Schema({
        ganador: {
            type: Schema.Types.ObjectId,
            ref: 'Ganadores',
            required: true
        },
        titulo:{
            type:String,
            required:true
        } ,
        año:{
            type:Date,
            required:true
        }


});

module.exports = model('Nobels',NobelSchema,'Nobels');