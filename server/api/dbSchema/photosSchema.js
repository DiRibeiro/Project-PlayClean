const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    images:  {
        type: [ String ],
        trim: true
    },
    id: Number
})

module.exports = photosSchema