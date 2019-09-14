const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const expressQuery = require('express-query-int')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended : true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(expressQuery())



server.listen(port, () => {
    console.log(`BACKEND ON, port ${port}`)
})

module.exports = server