const mongoose = require('mongoose');

const crimereportSchema = mongoose.Schema({
    firstname: String,
    lastName: String,
    address: String,
    phnumnber: Number,
    email: String,
    dateofcrime: Number,
    timeofcrime: Number,
    description: String

});

const crimereportModel = mongoose.model('crimereport',crimereportSchema);


module.exports = crimereportModel;