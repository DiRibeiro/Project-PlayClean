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

// Reports
app.get('/report', (req, res) => ReportsDAO.getReport(req, res))
app.post('/report', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
app.post('/reportStatus' , (req, res) => ReportsDAO.setStatus(req, res))

app.get('/get', (req, res) => ReportsDAO.get(req, res))

app.listen(port, () => console.log(`Server on port: ${port}`))
