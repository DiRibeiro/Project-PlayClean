const mongoose = require('mongoose')

const { calendars } = require('../config/db')

const getTodo = (req, res, next) => {
    calendars
        .find()
		.sort({ dateOcurr: 1 })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const getMonthTodo = (req, res, next) => {

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

const postTodo = (req, res, next) => {
    let newTodo =  new calendars(req.body)
    console.log(req.body)
    if (req.file) {
        newTodo.image = "events/" + req.file.filename;
    } else {
        newTodo.image = null;
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

const deleteTodo = (req, res, next) => {
    calendars
        .deleteOne({'_id' : req.params.id})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const editTodo = async (req, res, next) => {
    console.log(req.body)
    await calendars
        .findByIdAndUpdate(req.params._id, {
            title: req.body.title,
            description: req.body.description,
            dateOcurr: req.body.dateOcurr,
        })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {getTodo, getMonthTodo, postTodo, deleteTodo, editTodo}