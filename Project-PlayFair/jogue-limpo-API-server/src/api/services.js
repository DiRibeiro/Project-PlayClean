const report = require('./dbSchema/reportSchema')
const apresentation = require('./dbSchema/apresentationSchema')

report.methods(['get', 'post', 'put', 'delete'])
report.updateOptions({ new: true, runValidators: true })

apresentation.methods(['get', 'post', 'put', 'delete'])
apresentation.updateOptions({ new: true, runValidators: true })

report.route('count', (req, res, next) => {
    report.count((error, value) => {
        if(error){
            res.status(500).json({ errors: [error] })
        }else{
            res.json({ value })
        }
    })
})

module.exports = { report, apresentation }