const Drive = require('../models/drives.model.js');

//add a drive
exports.addADrive = (req, res) => {
    const drive = new Drive({
        originDateTime: req.body.originDateTime,
        originLongitude: req.body.originLongitude,
        originLatitude: req.body.originLatitude,

        destinationDateTime: req.body.destinationDateTime,
        destinationLongitude: req.body.destinationLongitude,
        destinationLatitude: req.body.destinationLatitude,

        availableSeats: req.body.availableSeats,
        VehicleNumber: req.body.VehicleNumber,
        contactNumber: req.body.contactNumber,
        username: req.body.username
    });
    // Save a order in the MongoDB
    drive.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};

