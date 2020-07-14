const jwt = require('jsonwebtoken')
const { user } = require('../../config/db')
const env = require('../../config/secret.env')
const mongoose = require('mongoose')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6})/

const login = (req, res) => {
    user.findOne({ email: req.body.email }, (err, result) => {
        if (err)
            return res.status(500).json("Internal error")
    
        else if(result && result.password === req.body.password)     // else if (result && bcrypt.compareSync(req.body.password, result.password)) {
            return res.status(200).json({ result, token: getJWT(result.toJSON()) })
        
        else
            return res.status(202).json('Usuário/Senha inválidos')
    })
}

const getJWT = data => jwt.sign(data, env.authSecret, { expiresIn: "1 day" })

const signup = (req, res) => {
    let dataNewUser = req.body

    // check if the email received is really an email
    if (!dataNewUser.email.match(emailRegex))
        return res.status(202).json('E-mail inválido')

    // check if the password received have the expecífics parameters 
    if (!dataNewUser.password.match(passwordRegex))
        return res.status(202).json('Senha precisa ter, no mínimo, uma letra maiúscula, uma letra minúscula, um número, um caracter especial e tamanho de 6 caracteres.')

    // passwords compare
    if (dataNewUser.password != dataNewUser.confirmPassword)
        return res.status(202).json('Senhas não conferem')

    // if there is no errors, check if the email is already in use, if dont, create new user
    user.findOne({ email: dataNewUser.email }, (err, result) => {
        if (err)
            return res.status(500).json('Internal server error')

        else if (result !== null)
            return res.status(202).json('O e-mail já está em uso')

        else {
            delete dataNewUser.confirmPassword
            new user(dataNewUser).save(err =>
                err ? 
                    res.status(202).json('Erro criando usuário: ' + err) :
                    res.status(200).json('Usuário criado com sucesso!')
            )
        }
    })
}

const validateToken = (req, res) => {
    
    //console.log("Validating token: ", req.body.token)

    jwt.verify(req.body.token, env.authSecret, (err, decoded) => 
        res.status(200).json({ valid: !err }))
} 


module.exports = { login, signup, validateToken}

// 202 Request received and accepted but no action has made with that
// 401 Unauthorized

