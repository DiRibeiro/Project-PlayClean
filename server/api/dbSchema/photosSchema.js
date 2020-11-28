const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    title: String,
    created: {type: Date, default: Date.now},
    images: {
        type: [ String ],
        trim: true
    }
})

module.exports = photosSchema