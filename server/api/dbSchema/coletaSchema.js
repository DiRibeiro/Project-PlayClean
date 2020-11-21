const mongoose = require('mongoose')

const coletaSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    neighborhood: String, 
    organic: String,
    selective: String,
    descriptionOrganic: String,
    descriptionSelective: String,
});

module.exports = coletaSchema