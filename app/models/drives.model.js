const mongoose = require('mongoose');

const drivesSchema = mongoose.Schema({
    originDateTime: String,
    originLongitude: Number,
    originLatitude: Number,

    destinationDateTime: String,
    destinationLongitude: Number,
    destinationLatitude: Number,

    availableSeats: Number,
    VehicleNumber: String,
    contactNumber: String,
    username:String,
    email:String,

    groupID: String,

    startLocation:String,
    endLocation:String,

    userToken:String

});

module.exports = mongoose.model('Drives', drivesSchema);
