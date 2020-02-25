const mongoose = require('mongoose')

const reportSchema = require('../api/dbSchema/reportSchema')
const userSchema = require('../api/dbSchema/userSchema')
const calendarSchema = require('../api/dbSchema/todoSchema')
const cataTrecoSchema = require('../api/dbSchema/cataTrecoSchema')
const leisSchema = require('../api/dbSchema/leisSchema')

mongoose.connect("mongodb://localhost/jogue-limpo", { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })

const report = mongoose.model('report', reportSchema)
const user = mongoose.model('user', userSchema)
const cataTreco = mongoose.model('cataTreco', cataTrecoSchema)
const leis = mongoose.model('leis', leisSchema)
const calendars = mongoose.model('calendars', calendarSchema)

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

module.exports = { report, user, calendars, cataTreco, leis }