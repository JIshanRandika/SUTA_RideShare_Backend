const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    groupID: String,

});

module.exports = mongoose.model('groups', groupSchema);
