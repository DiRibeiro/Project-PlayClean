const mongoose = require('mongoose')

const reportSchema = require('../api/dbSchema/reportSchema')
const userSchema = require('../api/dbSchema/userSchema')
const calendarEventsSchema = require('../api/dbSchema/calendarEventsSchema')
const cataTrecoSchema = require('../api/dbSchema/cataTrecoSchema')
const leisSchema = require('../api/dbSchema/leisSchema')

mongoose.connect("mongodb://localhost/jogue-limpo", { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })

const report = mongoose.model('report', reportSchema)
const user = mongoose.model('user', userSchema)
const calendar = mongoose.model('calendar', calendarEventsSchema)
const cataTreco = mongoose.model('cataTreco', cataTrecoSchema)
const leis = mongoose.model('leis', leisSchema)

if(!user.find({ 'userName': 'admin' }))
    user.insertMany({
        firstName: "Diego",
        lastName: "RIbeiro",
        cpf: "07998634910",
        phone: "51989405478",
        userName: "admin",
        type: "admin",
        password: "admin"
    })

module.exports = { report, user, calendar, cataTreco, leis }