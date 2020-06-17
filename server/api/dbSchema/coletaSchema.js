const mongoose = require('mongoose')

const coletaSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,
    selective: String,
    organic: String
});

module.exports = coletaSchema