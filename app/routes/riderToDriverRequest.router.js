const riderToDriverRequest = require("../controllers/riderToDriverRequest.controller");

module.exports = function(app) {

    app.post('/api/AddRiderToDriverRequest', riderToDriverRequest.addARiderToDriverRequest);
    app.get('/api/getRiderToDriverRequests', riderToDriverRequest.RiderToDriverRequests);
    app.put('/api/updateRiderToDriverRequests', riderToDriverRequest.updateRiderToDriverRequests);
    app.post('/api/yourRequestsToDrivers', riderToDriverRequest.yourRequestsToDrivers);
    app.post('/api/driverReceivedRequestsForEach', riderToDriverRequest.driverReceivedRequestsForEach);
    app.delete('/api/deleteRiderToDriverRequests/:id', riderToDriverRequest.deleteRiderToDriverRequests);

}

