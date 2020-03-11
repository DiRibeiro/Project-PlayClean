const mongoose = require('mongoose')

const cataTrecoSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,                
    cpf: String,
    local: String,
    dateOcurr: {
        type: Date,
        default: Date.now
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    adressOcurr: String,
    description: String
});

module.exports = cataTrecoSchema