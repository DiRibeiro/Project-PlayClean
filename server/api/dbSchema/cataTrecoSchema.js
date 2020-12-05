const mongoose = require('mongoose')

const cataTrecoSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,                
    cpf: String,
    local: String,
    dateOcurr: {
        type: Date,
        default: null
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    adressOcurr: String,
    description: String,
    status: {
        type: Number,
        default: 0
    },
    protocol: {
        type: Number,
        default: 0
    }
});

module.exports = cataTrecoSchema