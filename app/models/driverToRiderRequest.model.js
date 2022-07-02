const mongoose = require('mongoose');

const driverToRiderRequest = mongoose.Schema({
    riderEmail: String,
    riderName: String,
    driverEmail: String,
    driverName: String,
    originDateTime: String,
    vehicleNumber: String,
    status: String,

    groupID: String,
    userToken:String



});

module.exports = mongoose.model('DriverToRiderRequest', driverToRiderRequest);
