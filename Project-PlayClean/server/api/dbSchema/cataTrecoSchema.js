const mongoose = require('mongoose')

const cataTrecoSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,                
    cpf: String,
    local: String,
    dateOcurr: Date,
    dateCreate: {
        type: Number,
        default: new Date().getTime()
    },
    adressOcurr: String,
    description: String
});

module.exports = cataTrecoSchema