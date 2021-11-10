const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: Number,
    name: String,
    emailAddress: String,
    numberofcases: Number,

    
    
});

const userModel = mongoose.model('users',userSchema);


module.exports = userModel;