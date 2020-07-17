const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    title: String,
    images: []
})

module.exports = photosSchema