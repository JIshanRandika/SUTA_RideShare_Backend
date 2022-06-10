const DriverToRiderRequest = require('../models/driverToRiderRequest.model');

//add a request
exports.addADriverToRiderRequest = (req, res) => {
    const drive = new DriverToRiderRequest({
        riderEmail: req.body.riderEmail,
        riderName: req.body.riderName,
        driverEmail: req.body.driverEmail,
        driverName: req.body.driverName,
        originDateTime: req.body.originDateTime,
        vehicleNumber: req.body.vehicleNumber,
        status: req.body.status
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




//get all request
exports.DriverToRiderRequest = (req, res) => {
    DriverToRiderRequest.find().select('-__v').then(itemInfos => {
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

//get all request
exports.yourRequestsToRiders = (req, res) => {
    DriverToRiderRequest.find({'driverEmail':req.body.email}).select('-__v').then(itemInfos => {
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


//update status

exports.updateDriverToRiderRequest = (req, res) => {
    // Find order and update it
    DriverToRiderRequest.findByIdAndUpdate(
        req.body._id,
        {
            status: req.body.status,
        },
        {new: true}
    ).select('-__v')
        .then(item => {
            if(!item) {
                return res.status(404).send({
                    message: "Error -> Can NOT update a order with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(item);
        }).catch(err => {
        return res.status(500).send({
            message: "Error -> Can not update a order with id = " + req.params.id,
            error: err.message
        });
    });
}
