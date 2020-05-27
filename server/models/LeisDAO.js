const fs = require('fs')
const mongoose = require('mongoose')

const { leis } = require('../config/db')

const getLeis = (req, res, next) => {
    leis
        .find({})
        .then(data => {
            console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const postLeis = (req, res, next) => {
    let newLeis = new leis(req.body)
    
    newLeis
        .save()
        .then(e => {
            res.status(200).json('Successfuly request')
        }).catch(err => {
             console.log(err)
            res.status(400).json('Internal server error')
        })
}

module.exports = { getLeis, postLeis}