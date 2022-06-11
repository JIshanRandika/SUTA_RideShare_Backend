const favoriteRoutes = require("../controllers/favoriteRoutes.controller");

module.exports = function(app) {

    app.addAFavouriteRoute('/api/addAFavouriteRoute', favoriteRoutes.addAFavouriteRoute);


}
