const mongoose = require('mongoose')

const calendarEventsSchema = new mongoose.Schema({
    description: String, 
    dateCreate: {
        type: Date,
        default: new Date()
    }
})

module.exports = calendarEventsSchema