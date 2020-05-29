const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    dateOcurr: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = todoSchema