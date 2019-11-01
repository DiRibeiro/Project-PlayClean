const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
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
const decodeJWT = token => jwt.decode(token)
const tradeTokenToUser = (req, res) => res.status(200).json(jwt.decode(req.headers['authorization']))

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

const validateToken = (req, res) => 
    jwt.verify(req.body.token, env.authSecret, (err, decoded) => 
        res.status(200).json({ valid: !err }))


const updateUser = (req, res) => {
    const data = req.body
    let theFuckingUserWantsToUpdateHisFuckingPassword = false

    if(data['newPassword'] != null) {
        theFuckingUserWantsToUpdateHisFuckingPassword = true
        if(data['newPassword'] != data['newPasswordConfirm'])
            return res.status(202).json('Senhas não conferem')

        else if (!data['newPassword'].match(passwordRegex))
            return res.status(202).json('Senha precisa ter, no mínimo, uma letra maiúscula, uma letra minúscula, um número, um caracter especial e tamanho de 6 caracteres.')
    }
    if(Object.keys(data).length == 1)
        return res.status(202).json('Você precisa atualizar no mínimo um campo!')

    user.findOne({ _id: req.headers['_id'] }, (err, result) => {
        if(err)
            return res.status(500).json('Internal server error!')
            
        if(data.password == result.password) {
            if(theFuckingUserWantsToUpdateHisFuckingPassword) {
                data['password'] = data['newPassword']
                delete data['newPassword']
                delete data['newPasswordConfirm']
            }

            user.updateOne({ _id: req.headers['_id'] }, data)                
                .then(response => {
                    user.findOne({ _id: req.headers['_id'] }, (err, result) =>
                        res.status(200).json({ result, token: getJWT(result.toJSON()) })              
                    )
                }).catch(err => res.status(202).json('Internal server error!'))
            
        } else
            return res.status(202).json('Senha incorreta!')
    })
}

const updateToken = (req, res) =>
    user.findOne({ _id: mongoose.Types.ObjectId(decodeJWT(req.headers['authorization'])._id) }, (err, result) =>
        err ? 
            res.status(202).json("Internal error") :
            res.status(200).json({ token: getJWT(result.toJSON()), result })
        )

module.exports = { login, signup, validateToken, tradeTokenToUser, updateUser, updateToken }

// 202 Request received and accepted but no action has made with that
// 401 Unauthorized

/*
    db.user.insertOne({
        firstName: "Carlos Eduardo",
        lastName: "Wunsch",
        cpf: "03924510008",
        phone1: "51991384007",
        email: "carlos@westpoint.io",
        type: "admin",
        password: "carlosww"});

request to SignUp:

firstName:Carlos Eduardo
lastName:Wunsch
cpf:03924510008
phone1:51991384007
email:carlos@westpoint.io
type:admin
password:Wiebbelling@10
confirmPassword:Wiebbelling@10

*/