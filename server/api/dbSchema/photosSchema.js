const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    title: {
        type: String
    },
    created: {type: Date, default: Date.now},
    images: {
        type: [ String ],
        trim: true
    }
})

module.exports = photosSchema