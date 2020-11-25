const mongoose = require('mongoose')

const coletaSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    neighborhood: String, 
    organic: String,
    selective: String,
    descriptionOrganic: String,
    dayOrganic: String,
    descriptionSelective: String,
    daySelective: String,
});

module.exports = coletaSchema