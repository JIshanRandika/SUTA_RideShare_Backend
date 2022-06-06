const drives = require("../controllers/drives.controller.js");

module.exports = function(app) {

    app.post('/api/drive', drives.addADrive);

}
