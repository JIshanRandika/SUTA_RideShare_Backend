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
        username: req.body.username,
        email: req.body.email,

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

//get all drives
exports.drives = (req, res) => {

    Drive.find().select('-__v').then(itemInfos => {
        console.log('ishan');
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
exports.yourDrives =  (req, res) => {
    console.log('ishan');
    Drive.find({'email':req.body.email}).select('-__v').then(itemInfos => {
        console.log('ishan');
        res.status(200).json(itemInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });


    // let itemList = await Drive.find({email: req.body.email}).select(['originDateTime', 'originLatitude', 'email']);
    // JSON.stringify(itemList)

    // return res.status(200).send(itemList);
};


// DELETE a Drive
exports.deleteDrive = (req, res) => {
    let itemId = req.params.id

    Drive.findByIdAndRemove(itemId).select('-__v -_id')
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
