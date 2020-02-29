const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, path.join(__dirname, '../uploads/'))
	},
	filename: function(req, file, callback) {
		const nameRegex = /(.+?)(\.[^.]*$|$)/
		const fileName = nameRegex.exec(file.originalname)[1]
		callback(
			null,
			`${ fileName }-${ Date.now() }${ path.extname(file.originalname) }`
		)
	}
})

const album = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, path.join(__dirname, '../mural/'))
	},
	filename: function(req, file, callback) {
		const nameRegex = /(.+?)(\.[^.]*$|$)/
		const fileName = nameRegex.exec(file.originalname)[1]
		callback(
			null,
			`${ fileName }-${ Date.now() }${ path.extname(file.originalname) }`
		)
	}
})

const upload = multer({ storage })
const mural = multer({ album })

module.exports = upload, mural
