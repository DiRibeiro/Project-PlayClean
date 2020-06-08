const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    images:  {
        type: [ String ],
        trim: true
    },
})

module.exports = photosSchema