// Middleware to verify if token received is valid and if has created by my secretAuth
const jwt = require('jsonwebtoken')
const env = require('../config/secret.env')

const TokenValidation = (req, res, next) => {

    if (req.method === 'OPTIONS')
        next()

    else {
        const token = req.body.token || req.query.token || req.headers['authorization']

        if (!token)
            return res.status(403).json('No token provided.');
        
        jwt.verify(token, env.authSecret, (error, decoded) => {
            if (error)
                return res.status(403).json('Failed to authenticate token.')

            else {
                console.log("User validated!")
                req.currentUser = jwt.decode(token);
                next();
            }
        })
    }
}

module.exports = TokenValidation;