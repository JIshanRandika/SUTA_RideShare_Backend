const RiderToDriverRequest = require('../models/riderToDriverRequest.model.js');

//add a request
exports.addARiderToDriverRequest = (req, res) => {
    const drive = new RiderToDriverRequest({
        riderEmail: req.body.riderEmail,
        driverEmail: req.body.driverEmail,
        neededSeats: req.body.neededSeats,
        originDateTime: req.body.originDateTime
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
