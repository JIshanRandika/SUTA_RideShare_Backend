const mongoose = require('mongoose');

const drivesSchema = mongoose.Schema({
    originDate: Date,
    originTime: Date,
    originLongitude: Number,
    originLatitude: Number,

    destinationDate: Date,
    destinationTime: Date,
    destinationLongitude: Number,
    destinationLatitude: Number,

    availableSeats: Number,
    VehicleNumber: String,
    VehicleType: String

});

module.exports = mongoose.model('Drives', drivesSchema);
