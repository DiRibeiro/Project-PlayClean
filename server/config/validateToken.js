// Middleware to verify if token received is valid and if has created by my secretAuth
const jwt = require('jsonwebtoken')
const env = require('../config/secret.env')

const validateToken = (req, res, next) => {
    // CORS is enable   // Enviado para saber quais as origens permitidas em requisições feitas para o serviço disponibilizado
    if(req.method === 'OPTIONS')
        next()
    
    else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        
        if(!token)
            return res.status(403).json('No token provided.')
        
        jwt.verify(token, env.authSecret, (error, decoded) => {         // If the token is valid the flux can continue
            if(error)
                return res.status(403).json('Failed to authenticate token.')
            
            else 
                // req.decoded = decoded            the function returns it decoded, in req.decoded propertUser 
                next()
        })
    } 
}

module.exports = validateToken