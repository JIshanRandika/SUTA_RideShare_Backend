const Vehicle = require('../models/vehicle.model');

//add a vehicle
exports.addAVehicle = (req, res) => {
    const vehicle = new Vehicle({
        title: req.body.title,
        type: req.body.type,
        vehicleNumber: req.body.vehicleNumber,
        availableSeats: req.body.availableSeats,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });
    console.log('run')
    // Save a order in the MongoDB
    vehicle.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};


// get your vehicles
exports.yourVehicles =  (req, res) => {
    // console.log('ishan');
    Vehicle.find({'email':req.body.email}).select('-__v').then(itemInfos => {
        // console.log('ishan');
        res.status(200).json(itemInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};
