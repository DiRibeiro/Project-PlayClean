const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    title: String,
    created: {type: Date, default: Date.now},
    images: []
})

module.exports = photosSchema