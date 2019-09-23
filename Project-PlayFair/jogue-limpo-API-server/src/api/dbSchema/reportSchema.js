const restful = require('node-restful')
const mongoose = restful.mongoose

const reportSchema = new mongoose.Schema({
    name: { type: String, require: false },
    phone: { type: String, require: false },
    date: { type: Date, date: new Date()},
    status: Number,
    dateOccured: { type: Date, require: true },
    adressOccured: { type: String, require: true },
    typeReport: { type: String, require: true },
    description: { type: String, require: true },    
    img: [{ type: Buffer }]
})

module.exports = restful.model('report', reportSchema)