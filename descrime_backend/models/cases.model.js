const mongoose = require('mongoose');

const caseSchema = mongoose.Schema({
    casesclosed: Number,
    pending: Number,
    underreview: Number,
    registeredcases: Number

    
    
});

const caseModel = mongoose.model('cases',caseSchema);


module.exports = caseModel;