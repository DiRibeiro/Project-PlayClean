const fs = require('fs')
const mongoose = require('mongoose')

const { photos } = require('../config/db')

exports.get = (req, res, next) => {
	photos
		.find()
		.exec((err, result) => {
			if (err)
				res.status(400).json(err)
			else {
				let images64base = result.map(element =>
					element.images.map(pic => {
						let image = fs.readFileSync(pic)
						return new Buffer(image).toString('base64')
					})
				)
				result.forEach(
					(element, index) =>
						(element['images'] = images64base[index])
				)
				res.status(200).json( result )
			}
		})
}

exports.post = (req, res, next) => {
	const photos =  req.files 				// Criar o novo report a ser inserido

	photos.save()
		.then(e => {
			res.status(200).json('Successfuly request')
		}).catch((err) => {
			res.status(500).json('Internal server error')
		})			
}