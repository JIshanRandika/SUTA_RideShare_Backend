const favoriteRoutes = require("../controllers/favoriteRoutes.controller");

module.exports = function(app) {

    app.post('/api/addAFavoriteRoute', favoriteRoutes.addAFavouriteRoute);
    app.post('/api/yourFavoriteRoutes', favoriteRoutes.yourFavoriteRoutes);
    app.delete('/api/deleteRoute/:id', favoriteRoutes.deleteRoute);



}
