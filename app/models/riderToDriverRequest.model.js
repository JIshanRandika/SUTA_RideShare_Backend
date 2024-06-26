const mongoose = require('mongoose');

const riderToDriverRequestSchema = mongoose.Schema({
    riderEmail: String,
    riderName: String,
    driverEmail: String,
    driverName: String,
    neededSeats: Number,
    originDateTime: String,
    vehicleNumber: String,
    status: String,

    groupID: String,
    userToken:String


});

module.exports = mongoose.model('RiderToDriverRequest', riderToDriverRequestSchema);
