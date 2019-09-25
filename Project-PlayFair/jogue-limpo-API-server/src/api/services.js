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

/* report.get('/reports/:id', function(req, res, next){
    const id = req.params.id;

    report.findById(id, function(err, result){
    
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                data: result
            });
            return;
        }

        res.status(200).json({
            success: 1,
            data: result
        });
    });
}); */


module.exports = { report, apresentation }