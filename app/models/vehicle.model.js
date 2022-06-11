const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    title: String,
    type: String,
    vehicleNumber: String,
    availableSeats: Number,
    contactNumber: String,
    email: String,

});

module.exports = mongoose.model('vehicle', vehicleSchema);
