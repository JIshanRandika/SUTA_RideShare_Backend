const mongoose = require('mongoose');

const favoriteRoutesSchema = mongoose.Schema({

    originLongitude: Number,
    originLatitude: Number,

    destinationLongitude: Number,
    destinationLatitude: Number,

    email: String

});

module.exports = mongoose.model('FavoritesRouteSchema', favoriteRoutesSchema);
