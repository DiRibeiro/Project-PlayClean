const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,                
    phone: String,
    typeReport: String,
    dateOcurr: Date,
    dateCreate: {
        type: Date,
        default: Date.now
    },
    adressOcurr: String,
    description: String,
    images: {
        type: [ String ],
        trim: true
    },
    status: {
        type: Number,
        default: 0
    }
});

module.exports = reportSchema