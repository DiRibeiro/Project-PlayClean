const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true},
    description: { type: String, required: true},
    dateOcurr: { type: Date, default: Date.now, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    image: {type: String}
})

module.exports = todoSchema