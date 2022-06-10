const rides = require("../controllers/rides.controller");

module.exports = function(app) {

    app.post('/api/ride', rides.addARide);
    app.get('/api/getRides', rides.rides);
    // app.get('/api/yourRides', rides.yourRides);

}

