const fs = require('fs')
const mongoose = require('mongoose')

const { leis } = require('../config/db')

const getLeis = (req, res) => {
    leis
        .find()
        .exec((err, result) => {
            if (err) res.status(400).json(err)
            else{
                res.status(200).json({ result })
            }
        })
}

const postLeis = (req, res) => {
    const newLeis =  new leis(req.body)

    newLeis.type = leis.type
    newLeis.nameLei = leis.nameLeis
    newLeis
        .save()
        .then(res => res.status(200).json('successfuly request'))
        .catch(err => res.status(500).json('Internal server error'))
}

module.exports = { getLeis, postLeis }