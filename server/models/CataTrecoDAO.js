const fs = require('fs')
const mongoose = require('mongoose')

const { cataTreco } = require('../config/db')

const getCataTreco = (req, res, next) => {
    cataTreco
        .find()
        .sort({ dateCreate: -1 })
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err)
        })
}

const postCataTreco = (req, res, next) => {
    let newCataTreco =  new cataTreco(req.body)

    newCataTreco.protocol = newCataTreco.protocol + Math.floor(1 + Math.random() * 9000);

    if(newCataTreco.protocol === newCataTreco.protocol){
        newCataTreco.protocol = newCataTreco.protocol + Math.floor(1 + Math.random() * 9000);
    }
    
    newCataTreco
        .save()
        .then(e => {
            res.status(200).json('Successfuly request')
        }).catch(err => {
            res.status(400).json('Internal server error')
        })
}

const setStatus = (req, res) =>
	cataTreco.updateOne(
		{ _id: mongoose.Types.ObjectId(req.body._id) },
		{ status: req.body.status },
		(err, response) =>
			err ? res.status(202).json(err) : res.status(200).json(response)
    )
    
module.exports = {setStatus, getCataTreco, postCataTreco}