const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/jogue-limpo', {useNewUrlParser : true, useUnifiedTopology: true })