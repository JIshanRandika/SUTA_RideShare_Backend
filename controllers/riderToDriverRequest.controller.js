const RiderToDriverRequest = require('../models/riderToDriverRequest.model.js');

//add a request
exports.addARiderToDriverRequest = (req, res) => {
    const drive = new RiderToDriverRequest({
        riderEmail: req.body.riderEmail,
        riderName: req.body.riderName,
        driverEmail: req.body.driverEmail,
        driverName: req.body.driverName,
        neededSeats: req.body.neededSeats,
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
exports.RiderToDriverRequests = (req, res) => {
    RiderToDriverRequest.find().select('-__v').then(itemInfos => {
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

exports.updateRiderToDriverRequests = (req, res) => {
    // Find order and update it
    RiderToDriverRequest.findByIdAndUpdate(
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
