const favoriteRoutes = require("../controllers/favoriteRoutes.controller");

module.exports = function(app) {

    app.post('/api/addAFavouriteRoute', favoriteRoutes.addAFavouriteRoute);
    app.post('/api/yourFavouriteRoutes', favoriteRoutes.yourFavouriteRoutes);


}
