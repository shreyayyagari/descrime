const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    emailAddress: String,
    phoneNo: Number,
    dob :Number
});

const userModel = mongoose.model('users',userSchema);


module.exports = userModel;