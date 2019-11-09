const cors = require('cors')
// const multer = require('multer')
const express = require('express')

const app = express()
const upload = require('./config/multer')

const port = process.env.PORT || 3003

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const ReportsDAO = require('./models/ReportDAO')
const Auth = require('./models/auth/authUser')

// Reports
app.get('/report', (req, res) => ReportsDAO.getReport(req, res))
app.post('/report', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
app.post('/reportStatus' , (req, res) => ReportsDAO.setStatus(req, res))

app.get('/get', (req, res) => ReportsDAO.get(req, res))

// Dashboard
app.get('/dashboard', (req, res) => ReportsDAO.getDataDashboard(req, res))

// Login/Register
app.post('/login', (req, res) => Auth.login(req, res))
app.post('/signup', (req, res) => Auth.signup(req, res))
app.post('/validateToken', (req, res) => Auth.validateToken(req, res))

app.listen(port, () => console.log(`Server on port: ${port}`))
