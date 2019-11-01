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

module.exports = userSchema

/*
    db.users.insertOne({  
        firstName: "Carlos Eduardo",  
        lastName: "Wunsch",  
        cpf: "03924510008",  
        phone1: "51991384007", 
        email: "admin", 
        reports: [], 
        animalsAdoption: [], 
        type: "admin", 
        password: "admin"  });
 */