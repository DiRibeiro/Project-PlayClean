const fs = require('fs')
const mongoose = require('mongoose')

const { cataTreco } = require('../config/db')

const getCataTreco = (req, res) => {
    cataTreco
        .find()
        .sort({ dateCreate: -1 })
        .exec((err, result) => {
            if (err) res.status(400).json(err)
            else{
                res.status(200).json({ result })
            }
        })
}

const postCataTreco = (req, res) => {
    const newCataTreco =  new cataTreco(req.body)

    newCataTreco
        .save()
        .then(res => res.status(200).json('successfuly request'))
        .catch(err => res.status(500).json('Internal server error'))
}

const setReport = (req, res) => {
	const newReport =  new report(req.body) 				// Criar o novo report a ser isnerido

	let paths = new Array()									// tratar as imagens
	/* ---------- */
	newReport.images = paths								// sobrescrever o value de images do body

	newReport.save()
		.then(res => console.log(res))						// save new report
		.catch(err => console.log(err))
}
module.exports = { getCataTreco, postCataTreco }