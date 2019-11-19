const mongoose = require('mongoose')
const axios = require('axios')

const { calendar } = require('../config/db')

const getCalendar = (req, res) => {
    calendar
        .find()
        .pretty()
        .exec((err, result) => {
            if(err) res.status(400).json(err)
            else {
                res.status(200).jason({ result })
            }
        })
}

const postCalendar = (value) {
    calendar
}

module.exports = { getCalendar, postCalendar }