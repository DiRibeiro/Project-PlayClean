const restful = require('node-restful')
const mongoose = restful.mongoose

const apresentationSchema = new mongoose.Schema({
    apresentation: { type: String }
})

module.exports = restful.model('apresentation', apresentationSchema)