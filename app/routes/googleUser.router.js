const googleUser = require("../controllers/googleUser.controller");

module.exports = function(app) {

    app.post('/api/googleUserToken', googleUser.googleUserToken);
    app.put('/api/updateGoogleUserGroup', googleUser.updateGoogleUserGroup);
    app.post('/api/googleUsersInGroup', googleUser.googleUsersInGroup);

}
