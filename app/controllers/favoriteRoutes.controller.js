const FavouriteRoutes = require('../models/favoriteRoutes.model');

//add a drive
exports.addAFavouriteRoute = (req, res) => {
    const favouriteRoute = new FavouriteRoutes({
        originLongitude: req.body.originLongitude,
        originLatitude: req.body.originLatitude,

        destinationLongitude: req.body.destinationLongitude,
        destinationLatitude: req.body.destinationLatitude,

        routeName: req.body.routeName,
        email: req.body.email,

    });
    console.log('run')
    // Save a order in the MongoDB
    favouriteRoute.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};


// get your favorite routes
exports.yourFavouriteRoutes =  (req, res) => {
    console.log('ishan');
    yourFavouriteRoutes.find({'email':req.body.email}).select('-__v').then(itemInfos => {
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
