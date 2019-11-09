const mongoose = require('mongoose')

const reportSchema = require('../api/dbSchema/reportSchema')
const userSchema = require('../api/dbSchema/userSchema')

mongoose.connect("mongodb://localhost/jogue-limpo")

const report = mongoose.model('report', reportSchema)
const user = mongoose.model('user', userSchema)

module.exports = { report, user }

user.insertMany({
    firstName: "Diego",
    lastName: "RIbeiro",
    cpf: "07998634910",
    phone: "51989405478",
    userName: "admin",
    type: "admin",
    password: "admin"
})