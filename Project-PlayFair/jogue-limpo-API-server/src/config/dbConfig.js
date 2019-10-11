const mongoose = require('mongoose')

const reportSchema = require('../api/dbSchema/reportSchema')
const apresentationSchema = require('../api/dbSchema/apresentationSchema')

mongoose.connect('mongodb://localhost/joguelimpo', {useNewUrlParser : true })

const report = mongoose.model('report', reportSchema)
const apresentation = mongoose.model('apresentation', apresentationSchema)

module.exports = { report, apresentation}