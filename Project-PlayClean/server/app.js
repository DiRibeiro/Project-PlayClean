const cors = require('cors')
// const multer = require('multer')
const express = require('express')

const app = express()
const upload = require('./config/multer')
const mural = require('./config/multer')

const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const ReportsDAO = require('./models/ReportDAO')
const CataTrecoDAO = require('./models/CataTrecoDAO')
const LeisDAO = require('./models/LeisDAO')
const Auth = require('./models/auth/authUser')
const Calendar = require('./models/todoEventsDAO')
const Photo = require('./models/PhotosDAO')

// Reports
app.get('/report', (req, res) => ReportsDAO.getReport(req, res))
app.post('/report', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
app.post('/uploads', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
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
app.get('/leis', LeisDAO.get)
app.post('/leis', LeisDAO.post)

//Mural Photos
app.get('/photos', Photo.get)
app.post('/photos', mural.array('images', 10), Photo.post)

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
