const fs = require('fs')
const mongoose = require('mongoose')

const { leis } = require('../config/db')

const getAllLeis = (req, res, next) => {
    leis
        .find()
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const getLeisMunicipais = (req, res, next) => {
    leis
        .find({type: 'Municipal'})
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const getLeisEstaduais = (req, res, next) => {
    leis
        .find({type: 'Estadual'})
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const getLeisFederais = (req, res, next) => {
    leis
        .find({type: 'Federal'})
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const postLeis = (req, res, next) => {
    let newLeis = new leis(req.body)
    console.log(req.body);
    console.log(req.file)
    
    newLeis.file = "laws/" + req.file.filename;

    newLeis
        .save()
        .then(e => {
            res.status(200).json('Successfuly request')
        }).catch(err => {
            //  console.log(err)
            res.status(400).json('Internal server error')
        })
}

const deleteLeis = (req, res, next) => {
    leis
        .deleteOne({'_id' : req.params.id})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

module.exports = { getAllLeis, getLeisMunicipais, getLeisEstaduais, getLeisFederais, postLeis, deleteLeis}