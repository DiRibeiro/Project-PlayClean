const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: function(req, file, callback) {
        //console.log("Current path:", req.path)
        if (req.path === '/leis') {
            callback(null, path.join(__dirname, '..', 'public','laws'))
        } else if (req.path === '/calendars') {
            callback(null, path.join(__dirname, '..', 'public','events'))
        } else if (req.path === '/photos') {
            callback(null, path.join(__dirname, '..', 'public','murals'))
        } else {
            callback(null, path.join(__dirname, '..', 'public','uploads'))
        }
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

const upload = multer({storage});
module.exports = upload;
