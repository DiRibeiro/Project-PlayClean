const express = require('express')
 
module.exports = (server) => {
    //Define URL base for all the routes
    const router = express.Router()
    server.use('/api', router)

    //Routes in Report
    const report = require('../api/dbSchema/reportSchema')
    report.register(router, '/reportSchema')
}