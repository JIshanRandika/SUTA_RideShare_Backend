const User = require('../models/user');

// get user Token
exports.userToken =  (req, res) => {
    console.log('ishan');
    User.User.find({'email': req.body.email}).select('deviseToken').then(itemInfos => {
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
}


//update user group

exports.updateUserGroup = (req, res) => {
    // Find order and update it
    User.User.findOneAndUpdate(
        { email: req.body.email },
        {
            groupID: req.body.groupID,
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
