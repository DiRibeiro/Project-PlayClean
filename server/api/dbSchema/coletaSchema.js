const mongoose = require('mongoose')

const coletaSchema = new mongoose.Schema({
    neighborhood: String, 
    type: String,
    description: String,
});

module.exports = coletaSchema