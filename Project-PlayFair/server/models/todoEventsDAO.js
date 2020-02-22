const mongoose = require('mongoose')

const { calendars } = require('../config/db')

exports.get = (req, res, next) => {
    calendars
        .find()
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
            res.status(200).json('successfuly request')
        }).catch(err => {
            res.status(400).json(err)
        })
}