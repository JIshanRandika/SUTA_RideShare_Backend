const vehicles = require("../controllers/vehicle.controller");

module.exports = function(app) {

    app.post('/api/addAVehicle', vehicles.addAVehicle);


}

