const mongoose = require('mongoose')

const coletaSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    districts: [{
        name: String,
        selective: String,
        organic: String
    }]
});

module.exports = coletaSchema