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

        startLocation:req.body.startLocation,
        endLocation:req.body.endLocation,

        groupID: req.body.groupID,

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
exports.yourFavoriteRoutes =  (req, res) => {
    console.log('ishan');
    FavouriteRoutes.find({'email':req.body.email}).select('-__v').then(itemInfos => {
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

// DELETE a route
exports.deleteRoute = (req, res) => {
    let itemId = req.params.id

    FavouriteRoutes.findByIdAndRemove(itemId).select('-__v -_id')
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
