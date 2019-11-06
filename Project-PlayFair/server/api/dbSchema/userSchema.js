const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    cpf: String,
    phone1: String,
    email: {
        type: String,
        unique: true
    },
    reports: [ String ],
    animalsAdoption: [ String ],
    type: String,
    password: String,
    dateCreate: {
        type: Date,
        default: new Date()
    }
})

db.user.insertMany([
	{
		"firstName": "Diego",
		"lastName": "Ribeiro",
		"cpf": "07998634910",
		"phone1": "51989405478",
		"email": "admin",
		"reports": [],
		"animalsAdoption": [],
		"type": "admin",
		"password": "admin"
	}
])

module.exports = userSchema