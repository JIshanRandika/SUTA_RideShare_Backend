const drives = require("../controllers/drives.controller.js");

module.exports = function(app) {

    app.post('/api/drive', drives.addADrive);
    app.get('/api/getDrives', drives.drives);
    app.post('/api/yourDrives', drives.yourDrives);
    app.delete('/api/deleteDrive/:id', drives.deleteDrive);

}

