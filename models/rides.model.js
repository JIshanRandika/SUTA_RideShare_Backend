const mongoose = require('mongoose');

const ridesSchema = mongoose.Schema({
    originDateTime: String,
    originLongitude: Number,
    originLatitude: Number,

    destinationDateTime: String,
    destinationLongitude: Number,
    destinationLatitude: Number,

    neededSeats: Number,
    contactNumber: String,
    username:String,
    email:String

});

module.exports = mongoose.model('rides', ridesSchema);
