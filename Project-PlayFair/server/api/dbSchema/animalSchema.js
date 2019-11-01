const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    adressNewAnimalForm: String,
    ageNewAnimalForm: String,
    descriptionNewAnimalForm: String,
    emailNewAnimalForm: String,
    phoneNewAnimalForm: String,
    sexNewAnimalForm: String,
    sizeNewAnimalForm: String,
    speciesNewAnimalForm: String,
    titleNewAnimalForm: String,
    vaccinesNewAnimalForm: String,
    status: {
        type: Number,
        default: 0
    },
    dateCreate: {
        type: Date,
        default: new Date()
    },
    images: [ String ],
    whoAdopted: String,
    phoneWhoAdopted: String,
    dateAdopted: Date
})

module.exports = animalSchema