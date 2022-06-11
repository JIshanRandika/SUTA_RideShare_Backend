const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    title: String,
    type: String,
    vehicleNumber: String,
    availableSeats: String,
    contactNumber: String,

});

module.exports = mongoose.model('vehicle', vehicleSchema);
