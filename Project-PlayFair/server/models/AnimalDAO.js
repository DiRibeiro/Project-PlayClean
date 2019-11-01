const fs = require('fs')
const mongoose = require('mongoose')
const { animal, user } = require('../config/db')

const getListAdoption = (req, res) => {
    animal
        .find()
        .sort({ dateCreate: -1 })
        .exec((err, result) => {
            if(err) res.status(202).json(err)
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
				res.status(200).json({ result })
            }
        })
}
const setAnimalAdoption = (req, res) => {
    const newAnimal = new animal(req.body)
    
    let paths = new Array()
    req.files.forEach(pic => paths.push(pic.path))
    
    newAnimal.whoCreated = req.headers['_id']                       // ID of the loged user
    newAnimal.images = paths
    
    newAnimal.save()
        .then(response => 
            user.findOne({ _id: req.headers['_id']}, (err, result) => {
                result.animalsAdoption.push(response._id)
                result.save()
                    .then(response => res.status(200).json('successfuly request'))
                    .catch(err => res.status(500).json('Internal server error'))
            })
        )
}

const setStatus = (req, res) => {
    animal.updateOne(
        { _id: mongoose.Types.ObjectId(req.body._id) }, 
        { 
            status: req.body.status,
            whoAdopted: req.body.whoAdopted,
            phoneWhoAdopted: req.body.phoneWhoAdopted,
            dateAdopted: new Date().getTime()
        }, 
        (err, response) => err ? res.status(500).json(error) : res.status(200).json(response))
}

module.exports = { getListAdoption, setAnimalAdoption, setStatus }