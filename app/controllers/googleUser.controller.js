const GoogleUser = require('../models/googleUser');

// get user Token
exports.googleUserToken =  (req, res) => {
    console.log('ishan');
    GoogleUser.find({'email': req.body.email}).select('deviseToken').then(itemInfos => {
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


exports.updateGoogleUserGroup = (req, res) => {
    // Find order and update it

    // const group = Group.findOne({ groupID: req.body.groupID });
    // if (!group)
    //     return res
    //         // .status(409)
    //         .status(201)
    //         .send({ message: "Wrong Group ID" });

    GoogleUser.findOneAndUpdate(
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

// get users in group
exports.googleUsersInGroup =  (req, res) => {
    // console.log('ishan');
    GoogleUser.find({'groupID':req.body.groupID}).select('-__v').then(itemInfos => {
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
