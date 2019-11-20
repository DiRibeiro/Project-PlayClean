const cors = require('cors')
// const multer = require('multer')
const express = require('express')

const app = express()
const upload = require('./config/multer')

const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const ReportsDAO = require('./models/ReportDAO')
const CataTrecoDAO = require('./models/CataTrecoDAO')
const Auth = require('./models/auth/authUser')

// Reports
app.get('/report', (req, res) => ReportsDAO.getReport(req, res))
app.post('/report', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
app.post('/reportStatus' , (req, res) => ReportsDAO.setStatus(req, res))

app.get('/get', (req, res) => ReportsDAO.get(req, res))

//Calendar Events

//Cata Treco
app.get('/cataTreco', (req,res) => CataTrecoDAO.getCataTreco(req,res))
app.post('/cataTreco', (req,res) => CataTrecoDAO.postCataTreco(req,res))

// Dashboard
app.get('/dashboard', (req, res) => ReportsDAO.getDataDashboard(req, res))

// Login/Register
app.post('/login', (req, res) => Auth.login(req, res))
app.post('/signup', (req, res) => Auth.signup(req, res))
app.post('/validateToken', (req, res) => Auth.validateToken(req, res))

// User
app.get('/updateToken', (req, res) => Auth.updateToken(req, res))
app.post('/tradeTokenToUser', (req, res) => Auth.tradeTokenToUser(req, res))
app.post('/updateUser', (req, res) => Auth.updateUser(req, res))

app.listen(port, () => console.log(`Server on port: ${port}`))
