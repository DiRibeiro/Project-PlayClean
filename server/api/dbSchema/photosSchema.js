const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    filename: String,
    images:  {
        type: [ String ],
        trim: true,
    },
    url: {
        type: String,
    }
})

module.exports = photosSchema