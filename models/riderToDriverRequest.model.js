const mongoose = require('mongoose');

const riderToDriverRequestSchema = mongoose.Schema({
    riderEmail: String,
    driverEmail: String,
    neededSeats: Number,
    originDateTime: String


});

module.exports = mongoose.model('RiderToDriverRequest', riderToDriverRequestSchema);
