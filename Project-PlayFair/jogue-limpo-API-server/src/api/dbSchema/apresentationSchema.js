const mongoose = require('mongoose')

const apresentationSchema = new mongoose.Schema({
    apresentation: { String }
})

module.exports = apresentationSchema