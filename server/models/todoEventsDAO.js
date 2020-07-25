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

exports.getMonth = (req, res, next) => {

    let month = req.params.month -1;
    let year = req.params.year;

    calendars
        .find()
		.sort({ dateOcurr: 1 })
        .then(data => {
            let filter = data.filter(event => event.dateOcurr.getUTCMonth() == month && event.dateOcurr.getFullYear() == year);
            res.status(200).json(filter);
        }).catch(err => {
            res.status(400).json(err)
        })
}

exports.post = (req, res, next) => {
    let newTodo =  new calendars(req.body)
    console.log(req.body)
    if (req.file) {
        newTodo.image = "events/" + req.file.filename;

    }

    newTodo
        .save()
        .then(e => {
            res.status(200).json('Successfuly request')
        }).catch(err => {
            console.log(err)
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
