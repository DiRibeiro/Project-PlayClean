const report = require('./dbSchema/reportSchema')

report.methods(['get', 'post', 'put', 'delete'])
report.updateOptions({ new: true, runValidators: true })

module.exports = report