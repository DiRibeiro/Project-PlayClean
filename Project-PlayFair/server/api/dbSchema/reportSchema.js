const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,                
    phone: String,
    typeReport: String,
    dateOcurr: Date,
    dateCreate: {
        type: Date,
        default: new Date()
    },
    adressOcurr: String,
    description: String,
    images: [ String ],
    status: {
        type: Number,
        default: 0
    }
});

/*
    reportSchema.methods.findSimilarTypes = cb => this.model('Report').find({ type: this.type }, cb);
    status 0: Open
    status 1: Pending
    status 2: Closed
*/
module.exports = reportSchema