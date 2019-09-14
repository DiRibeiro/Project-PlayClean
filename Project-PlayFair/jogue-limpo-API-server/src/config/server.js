const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const expressQuery = require('express-query-int')
const server = express()

server.use(bodyParser.urlencoded({ extended : true }))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`BACKEND ON, port ${port}`)
})

module.exports = server