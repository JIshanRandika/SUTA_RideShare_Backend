const Drive = require('../models/drives.model.js');

//add a drive
exports.addADrive = (req, res) => {
    const drive = new Drive({
        originDate: req.body.originDate,
        originTime: req.body.originTime,
        originLongitude: req.body.originLongitude,
        originLatitude: req.body.originLatitude,

        destinationDate: req.body.destinationDate,
        destinationTime: req.body.destinationTime,
        destinationLongitude: req.body.destinationLongitude,
        destinationLatitude: req.body.destinationLatitude,

        availableSeats: req.body.availableSeats,
        VehicleNumber: req.body.VehicleNumber,
        contactNumber: req.body.contactNumber
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
