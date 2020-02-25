const fs = require('fs')
const mongoose = require('mongoose')

const { cataTreco } = require('../config/db')

exports.get = (req, res, next) => {
    cataTreco
        .find({})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

exports.post = (req, res, next) => {
    let newCataTreco =  new cataTreco(req.body)

    newCataTreco
        .save()
        .then(e => {
            res.status(200).json('successfuly request')
        }).catch(err => {
            res.status(400).json('Internal server error')
        })
}