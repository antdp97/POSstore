//dependencies
const mongoose = require('mongoose');

//schema
const userSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    level   :   String,
    name    :   String,
    username:   String,
    password:   String,
});

module.exports = mongoose.model('User', userSchema);