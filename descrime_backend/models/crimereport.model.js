const mongoose = require('mongoose');

const crimereportSchema = mongoose.Schema({
    nameofwitness: String,
    crimereport: String,
    phoneNo: Number,
    dateofcrime :Number,
    nameofvictim: String,
    reportStatus: String

});

const crimereportModel = mongoose.model('crimereport',crimereportSchema);


module.exports = crimereportModel;