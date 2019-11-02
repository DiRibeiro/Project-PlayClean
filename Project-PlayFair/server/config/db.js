const mongoose = require('mongoose')

const reportSchema = require('../api/dbSchema/reportSchema')
const animalSchema = require('../api/dbSchema/animalSchema')
const userSchema = require('../api/dbSchema/userSchema')

mongoose.connect("mongodb://localhost/jogue-limpo")

const report = mongoose.model('report', reportSchema)
const animal = mongoose.model('animal', animalSchema)
const user = mongoose.model('user', userSchema)

module.exports = { report, animal, user }