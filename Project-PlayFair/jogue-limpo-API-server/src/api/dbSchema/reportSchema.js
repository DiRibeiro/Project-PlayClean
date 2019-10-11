const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: String,
    date: { type: Number, default: new Date().getTime()},
    status: { type: Number, default: 0 },
    dateOccured: Date,
    adressOccured: String,
    typeReport: String,
    description: String,    
    img: [ String ]
})

module.exports = reportSchema