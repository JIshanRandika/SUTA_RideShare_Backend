const mongoose = require('mongoose');

const googleUserSchema = mongoose.Schema({
    name: String,
    email: String,
    groupID: String,
    deviseToken: String,

});

module.exports = mongoose.model('googleUsers', googleUserSchema);
