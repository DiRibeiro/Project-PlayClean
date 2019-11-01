const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    nameReportForm: String,                //Denunciante
    phoneReportForm: String,
    cpfReportForm: String,
    emailReportForm: String,
    typeReport: String,
    titleReportForm: String,
    dateOcurrReport: Date,
    dateCreate: {
        type: Number,
        default: new Date().getTime()
    },
    adressOcurrReportForm: String,
    descriptionReportForm: String,
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