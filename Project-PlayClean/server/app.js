const cors = require('cors')
// const multer = require('multer')
const express = require('express')

const app = express()
const upload = require('./config/multer')

const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const router = express.Router()

const ReportsDAO = require('./models/ReportDAO')
const CataTrecoDAO = require('./models/CataTrecoDAO')
const LeisDAO = require('./models/LeisDAO')
const Auth = require('./models/auth/authUser')
const Calendar = require('./models/todoEventsDAO')

// Reports
app.get('/report', (req, res) => ReportsDAO.getReport(req, res))
app.post('/report', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
app.post('/reportStatus' , (req, res) => ReportsDAO.setStatus(req, res))

app.get('/get', (req, res) => ReportsDAO.get(req, res))

//Calendar Events
app.get('/calendars', Calendar.get)
app.post('/calendars', Calendar.post)
// Todo.register(router, '/todos')

//Cata Treco
app.get('/cataTreco', CataTrecoDAO.get)
app.post('/cataTreco',CataTrecoDAO.post)

//Leis
app.get('/leis', (req,res) => LeisDAO.getLeis(req,res))
app.post('/leis', (req,res) => LeisDAO.postLeis(req,res))

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