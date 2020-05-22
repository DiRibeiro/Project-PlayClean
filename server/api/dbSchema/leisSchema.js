const mongoose = require('mongoose')

const leisSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    name: String,
    group: [ 'Municipal', 'Federal', 'Estadual' ],
    description: String,
    status: {
        type: Number,
        default: 0
    }
});

/*
    leisSchema.methods.findSimilarTypes = cb => this.model('leis').find({ type: this.type }, cb);
    status 0: Open
    status 1: Pending
    status 2: Closed
*/
module.exports = leisSchema