const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    cpf: String,
    phone: String,
    userName: {
        type: String,
        unique: true
    },
    reports: [ String ],
    type: String,
    password: String,
    dateCreate: {
        type: Date,
        default: new Date()
    }
})

module.exports = userSchema