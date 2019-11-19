const mongoose = require('mongoose')

const calendarEventsSchema = new mongoose.Schema({
    name: String, 
    dateCreate: {
        type: Date,
        default: new Date()
    }
})

module.exports = calendarEventsSchema