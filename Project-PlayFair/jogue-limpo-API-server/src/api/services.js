const report = require('./dbSchema/reportSchema')

report.methods(['get', 'post', 'put', 'delete'])
report.updateOptions({ new: true, runValidators: true })

report.route('count', (req, res, next) => {
    report.count((error, value) => {
        if(error){
            res.status(500).json({ errors: [error] })
        }else{
            res.json({ value })
        }
    })
})

module.exports = report