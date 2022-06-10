const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    deviseToken: String,

});

module.exports = mongoose.model('user', userSchema);
