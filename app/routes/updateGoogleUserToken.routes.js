const updateGoogleUserToken = require("../controllers/updateGoogleUserToken.controller");

module.exports = function(app) {

    app.put('/api/updateGoogleUserToken', updateGoogleUserToken.updateGoogleUserToken);


}
