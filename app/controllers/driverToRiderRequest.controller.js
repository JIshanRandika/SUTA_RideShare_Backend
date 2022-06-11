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
        status: req.body.status,

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

//sent requests
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


// get rider received requests

exports.riderReceivedRequestsForEach = (req, res) => {
    DriverToRiderRequest.find({'riderEmail':req.body.email,'originDateTime':req.body.originDateTime}).select('-__v').then(itemInfos => {
        res.status(200).json(itemInfos);
        // console.log(req.body.originDateTime)
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

// DELETE a request
exports.deleteDriverToRiderRequests = (req, res) => {
    let itemId = req.params.id

    DriverToRiderRequest.findByIdAndRemove(itemId).select('-__v -_id')
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
