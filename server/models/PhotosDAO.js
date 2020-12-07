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

const getPhotosId = (req, res, next) => {
	photos
        .findOne({ _id : req.params.id })
        // .sort({ created : -1 })
		.then(data => {
			res.status(200).json(data);
        }).catch(err => {
            res.status(400).json(err)
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


const deleteGalleryById = (req, res, next) => {

    const id = req.params.id;

    photos.findByIdAndDelete({_id: id})
    .then(ok => {
        return res.status(202).json({});
    })  
    .catch(error => {
        console.error("Error deleting complete gallery", error)
    })

}


const deletePhoto = (req, res, next) => {

    const galleryID = req.params.galleryID;
    const imageID = req.params.imageID;

    console.log("Removendo single photo", galleryID, imageID)

    photos.findById(galleryID).lean().exec()
    .then(document => {
        document.images.splice(imageID, 1)
        photos.findByIdAndUpdate({_id: galleryID}, document).lean().exec()
            .then(newDoc => {
                return res.status(200).json({})
            });
        
    })
    .catch(error => {
        console.error(error);
        return res.status(503).json({});
    })

    
}

module.exports = { getPhotos, postPhotos, getPhotosId, deleteGalleryById, deletePhoto }