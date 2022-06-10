const rides = require("../controllers/rides.controller");

module.exports = function(app) {

    app.post('/api/drive', rides.addARide);
    app.get('/api/getDrives', rides.rides);
    // app.get('/api/yourDrives', drives.yourDrives);

}

