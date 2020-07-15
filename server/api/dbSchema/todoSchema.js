const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    dateOcurr: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    image: {type: String}
})

module.exports = todoSchema