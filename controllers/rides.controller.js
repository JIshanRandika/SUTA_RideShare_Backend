const Drive = require('../models/rides.model');

//add a ride
exports.addARide = (req, res) => {
    const drive = new Drive({
        originDateTime: req.body.originDateTime,
        originLongitude: req.body.originLongitude,
        originLatitude: req.body.originLatitude,

        destinationDateTime: req.body.destinationDateTime,
        destinationLongitude: req.body.destinationLongitude,
        destinationLatitude: req.body.destinationLatitude,

        neededSeats: req.body.availableSeats,
        contactNumber: req.body.contactNumber,
        username: req.body.username,
        email: req.body.email
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
    Drive.find().select('-__v').then(itemInfos => {
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

// get your drives
// exports.yourDrives =  (req, res) => {
//     Drive.find({'email':req.body.email}).select(['username']).then(itemInfos => {
//         res.status(200).json(itemInfos);
//     }).catch(error => {
//         // log on console
//         console.log(error);
//
//         res.status(500).json({
//             message: "Error!",
//             error: error
//         });
//     });
    // let itemList = await Drive.find({email: req.body.email}).select(['originDateTime', 'originLatitude', 'email']);
    // JSON.stringify(itemList)

    // return res.status(200).send(itemList);
// };
