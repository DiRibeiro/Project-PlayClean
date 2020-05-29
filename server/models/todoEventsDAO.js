const mongoose = require('mongoose')

const { calendars } = require('../config/db')

exports.get = (req, res, next) => {
    calendars
        .find()
		.sort({ dateOcurr: 1 })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

exports.post = (req, res, next) => {
    let newTodo =  new calendars(req.body)

    newTodo
        .save()
        .then(e => {
            res.status(200).json('Successfuly request')
        }).catch(err => {
            res.status(400).json('Internal server error')
        })
}

exports.delete = (req, res, next) => {
    calendars
        .deleteOne()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}
