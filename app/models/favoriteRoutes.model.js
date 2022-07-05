const mongoose = require('mongoose');

const favoriteRoutesSchema = mongoose.Schema({

    originLongitude: Number,
    originLatitude: Number,

    destinationLongitude: Number,
    destinationLatitude: Number,

    routeName: String,
    groupID: String,

    startLocation:String,
    endLocation:String,

    email: String

});

module.exports = mongoose.model('FavoritesRouteSchema', favoriteRoutesSchema);
