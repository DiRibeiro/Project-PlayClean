const restful = require('node-restful');
const mongoose = restful.mongoose;

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        requied: true
    },
    dateCreate: {
        type: Date,
        default: new Date()
    },
    dateOccured: {
        type: Date,
        requied: true
    },
    user: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: [{
        type: Buffer
    }]
});

module.exports = restful.model('news', newsSchema);