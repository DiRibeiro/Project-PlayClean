const fs = require('fs')
const mongoose = require('mongoose')

const { coleta } = require('../config/db')

const getColeta = (req, res, next) => {
    coleta
        .find()
        .sort('neighborhood')
        .then(data => {
            console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const postColeta = (req, res, next) => {
    console.log("New coleta, req.body", req.body)
    let newColeta = new coleta(req.body)
    
    newColeta
        .save()
        .then(e => {
            res.status(200).json('Successfuly request')
        }).catch(err => {
            //  console.log(err)
            res.status(400).json('Internal server error')
        })
}

const deleteColeta = async (req, res, next) => {
    console.log(req.params.id)
    await coleta
        .deleteOne({_id : req.params.id})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}
module.exports = { getColeta, postColeta, deleteColeta}