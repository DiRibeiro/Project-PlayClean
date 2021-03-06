const cors = require('cors')
const multer = require('multer')
const express = require('express')

const app = express()
const upload = require('./config/multer')

const TokenValidation = require('./middlewares/TokenValidation');

const port = process.env.PORT || 3003

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
const ColetaDAO = require('./models/ColetaDAO')

// Reports
app.get('/report', TokenValidation, (req, res) => ReportsDAO.getReport(req, res))
app.post('/report', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
// app.post('/uploads', upload.array('images', 4), (req, res) => ReportsDAO.setReport(req, res))
app.post('/reportStatus' , TokenValidation, (req, res) => ReportsDAO.setStatus(req, res))
app.get('/reportStatus' , TokenValidation, (req, res) => ReportsDAO.getStatus(req, res))
app.delete('/report/:id' , TokenValidation, (req, res) => ReportsDAO.deleteReport(req, res))

//Calendar Events
app.get('/calendars', Calendar.getTodo)
app.get('/calendars/:year/:month', Calendar.getMonthTodo)
app.post('/calendars', TokenValidation, upload.single('image'), Calendar.postTodo)
app.delete('/calendars/:id', TokenValidation, Calendar.deleteTodo)
app.post('/calendarsUpdate', TokenValidation, (req, res) => Calendar.editTodo(req, res))
// Todo.register(router, '/todos')

//Cata Treco
app.get('/cataTreco', (req, res) => CataTrecoDAO.getCataTreco(req, res))
app.get('/allCataTreco', (req, res) => CataTrecoDAO.getAllCataTreco(req, res))
app.post('/cataTreco',(req, res) => CataTrecoDAO.postCataTreco(req, res))
app.post('/cataTrecoStatus', TokenValidation, (req, res) => CataTrecoDAO.setStatus(req, res))
app.delete('/cataTreco/:id', CataTrecoDAO.deleteCataTreco)

// app.get('/get', (req, res) => CataTrecoDAO.get(req, res))
//Leis
app.get('/leis', (req, res) => LeisDAO.getAllLeis(req, res))
app.get('/leisMunicipais', (req, res) => LeisDAO.getLeisMunicipais(req, res))
app.get('/leisEstaduais', (req, res) => LeisDAO.getLeisEstaduais(req, res))
app.get('/leisFederais', (req, res) => LeisDAO.getLeisFederais(req, res))

app.post('/leis', 
    TokenValidation, 
    upload.single('document'), 
    LeisDAO.postLeis
    );

app.delete('/leis/:id', TokenValidation, LeisDAO.deleteLeis)

//Mural Photos
app.get('/photos', Photo.getPhotos)
app.get('/photos/:id', (req, res) => Photo.getPhotosId(req, res))
app.post('/photos', TokenValidation, upload.array('images', 12), Photo.postPhotos)
app.delete('/photos/:id', TokenValidation, Photo.deleteGalleryById)
app.delete('/singlePhoto/:galleryID/:imageID', TokenValidation, Photo.deletePhoto)

//Coleta
app.get('/coleta', (req, res) => ColetaDAO.getColeta(req, res))
app.post('/coleta', TokenValidation, (req, res) => ColetaDAO.postColeta(req, res))
app.delete('/coleta/:id', TokenValidation, ColetaDAO.deleteColeta)
app.post('/coletaUpdate', TokenValidation, (req, res) => ColetaDAO.editColeta(req, res))

// Dashboard
app.get('/dashboardReports', TokenValidation, (req, res) => ReportsDAO.getDataDashboard(req, res))
app.get('/dashboardCataTreco', TokenValidation, (req, res) => CataTrecoDAO.getDataCtDashboard(req, res))

// Login/Register
app.post('/login', (req, res) => Auth.login(req, res))
app.post('/signup', (req, res) => Auth.signup(req, res))
app.post('/validateToken', (req, res) => Auth.validateToken(req, res))

// User
app.get('/updateToken', (req, res) => Auth.updateToken(req, res))
app.post('/tradeTokenToUser', TokenValidation, (req, res) => Auth.tradeTokenToUser(req, res))
app.post('/updateUser', TokenValidation, (req, res) => Auth.updateUser(req, res))

app.listen(port, () => console.log(`Server on port: ${port}`))
