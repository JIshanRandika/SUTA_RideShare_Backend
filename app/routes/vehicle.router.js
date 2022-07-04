const vehicles = require("../controllers/vehicle.controller");

module.exports = function(app) {

    app.post('/api/addAVehicle', vehicles.addAVehicle);
    app.post('/api/yourVehicles', vehicles.yourVehicles);
    app.delete('/api/deleteVehicle/:id', vehicles.deleteVehicle);


}

