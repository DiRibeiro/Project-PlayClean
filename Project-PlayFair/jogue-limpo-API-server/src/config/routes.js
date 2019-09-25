const express = require('express')
const services = require('../api/services')

module.exports = (server) => {
    //Define URL base for all the routes
    const router = express.Router()
    server.use('/api', router)

    //Routes in Report
    const report = require('../api/services')
    services.report.register(router, '/reports')
    services.apresentation.register(router, '/apresentation')

}