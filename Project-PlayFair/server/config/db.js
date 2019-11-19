const mongoose = require('mongoose')

const reportSchema = require('../api/dbSchema/reportSchema')
const userSchema = require('../api/dbSchema/userSchema')
const calendarEventsSchema = require('../api/dbSchema/calendarEventsSchema')

mongoose.connect("mongodb://localhost/jogue-limpo")

const report = mongoose.model('report', reportSchema)
const user = mongoose.model('user', userSchema)
const calendar = mongoose.model('calendar', calendarEventsSchema)

module.exports = { report, user, calendar }

user.insertMany({
    firstName: "Diego",
    lastName: "RIbeiro",
    cpf: "07998634910",
    phone: "51989405478",
    userName: "admin",
    type: "admin",
    password: "admin"
})