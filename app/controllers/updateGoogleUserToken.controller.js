const GoogleUser = require('../models/googleUser');

//update userToken

exports.updateGoogleUserToken = (req, res) => {
    // Find order and update it
    GoogleUser.findOneAndUpdate(
        { email: req.body.email },
        {
            deviseToken: req.body.deviseToken,
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
