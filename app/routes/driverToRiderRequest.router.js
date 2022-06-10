const driverToRiderRequest = require("../controllers/driverToRiderRequest.controller");

module.exports = function(app) {

    app.post('/api/addADriverToRiderRequest', driverToRiderRequest.addADriverToRiderRequest);
    app.get('/api/getDriverToRiderRequest', driverToRiderRequest.DriverToRiderRequest);
    app.put('/api/updateDriverToRiderRequests', driverToRiderRequest.updateDriverToRiderRequest);


}
