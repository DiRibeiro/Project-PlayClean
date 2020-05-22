const fs = require('fs')
const mongoose = require('mongoose')

const { leis } = require('../config/db')

exports.get = (req, res, next) => {
    leis
        .find()
        .then(result => {
            res.status(200).json({result})
        }).catch(err => {
            res.status(400).json(err)
        })
}

exports.post = (req, res, next) => {
    let newLeis = new leis(req.body)
    
    newLeis
        .save()
        .then(e => {
            console.log(e)
            res.status(200).json('Successfuly request')
        }).catch(err => {
             console.log(err)
            res.status(400).json('Internal server error')
        })
}