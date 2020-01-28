// const Todo = require('../api/dbSchema/todoSchema')

// Todo.methods(['get', 'post', 'put', 'delete'])
// Todo.updateOptions({new: true, runValidators: true})

// module.exports = Todo
const fs = require('fs')
const mongoose = require('mongoose')

const { todoSchema } = require('../config/db')

const getTodo = (req, res) => {
    todoSchema
        .find()
        .sort({ dateCreate: -1 })
        .exec((err, result) => {
            if (err) res.status(400).json(err)
            else{
                res.status(200).json({ result })
            }
        })
}

const postTodo = (req, res) => {
    const newTodo =  new todoSchema(req.body)

    newTodo
        .save()
        .then(res => res.status(200).json('successfuly request'))
        .catch(err => res.status(500).json('Internal server error'))
}

module.exports = { getTodo, postTodo }