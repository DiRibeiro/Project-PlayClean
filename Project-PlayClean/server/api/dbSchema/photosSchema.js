const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    albums: {
        image: [String]
    }
})

module.exports = photosSchema