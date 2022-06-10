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
