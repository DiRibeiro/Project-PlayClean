const fs = require('fs')
const mongoose = require('mongoose')

const { photos } = require('../config/db')

const getPhotos = (req, res, next) => {
	photos
        .find()
        .sort({ created: -1 })
		.exec((err, result) => {
			if (err)
				res.status(400).json(err)
			else {
				res.status(200).json( {result} )
			}
		})
}

const postPhotos = (req, res, next) => {
	const newPhotos =  new photos(req.body) 				
	const paths = new Array()	
	
	if (req.files)
		req.files.forEach(pic => paths.push(`murals/${pic.filename}`))
    
    newPhotos.images = paths

	newPhotos.save()
		.then(e => {
			res.status(200).json(paths)
			console.log(paths)
		}).catch((err) => {
			res.status(500).json('Internal server error')
		})			
}

module.exports = { getPhotos, postPhotos }