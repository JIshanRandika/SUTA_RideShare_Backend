const Ride = require('../models/rides.model');

//add a ride
exports.addARide = (req, res) => {
    const drive = new Ride({
        originDateTime: req.body.originDateTime,
        originLongitude: req.body.originLongitude,
        originLatitude: req.body.originLatitude,

        // destinationDateTime: req.body.destinationDateTime,
        destinationLongitude: req.body.destinationLongitude,
        destinationLatitude: req.body.destinationLatitude,


        neededSeats: req.body.neededSeats,
        contactNumber: req.body.contactNumber,
        username: req.body.username,
        email: req.body.email,

        groupID: req.body.groupID,

        startLocation:req.body.startLocation,
        endLocation:req.body.endLocation,

        userToken: req.body.userToken
    });
    console.log('run')
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

//get all rides
exports.rides = (req, res) => {
    Ride.find().select('-__v').then(itemInfos => {
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


// get rides in group
exports.ridesInGroup = (req, res) => {
    Ride.find({'groupID': req.body.groupID}).select('-__v').then(itemInfos => {
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



//get your rides
exports.yourRides = (req, res) => {
    Ride.find({'email':req.body.email}).select('-__v').then(itemInfos => {
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


// DELETE a Ride
exports.deleteRide = (req, res) => {
    let itemId = req.params.id

    Ride.findByIdAndRemove(itemId).select('-__v -_id')
        .then(item => {
            if(!item) {
                res.status(404).json({
                    message: "Does Not exist a item with id = " + itemId,
                    error: "404",
                });
            }
            res.status(200).json({});
        }).catch(err => {
        return res.status(500).send({
            message: "Error -> Can NOT delete a item with id = " + itemId,
            error: err.message
        });
    });
};
