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
        .find({typeLei: 'Municipal'})
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const getLeisEstaduais = (req, res, next) => {
    leis
        .find({typeLei: 'Estadual'})
        .then(data => {
            // console.log(data)
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const getLeisFederais = (req, res, next) => {
    leis
        .find({typeLei: 'Federal'})
        .then(data => {
            // console.log(data)
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
            //  console.log(err)
            res.status(400).json('Internal server error')
        })
}

const deleteLeis = (req, res, next) => {
    leis
        .deleteOne({'_id' : req.query.whoCreated})
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

module.exports = { getAllLeis, getLeisMunicipais, getLeisEstaduais, getLeisFederais, postLeis, deleteLeis}