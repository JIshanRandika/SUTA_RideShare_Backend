const updateUserToken = require("../controllers/updateUserToken.controller");

module.exports = function(app) {

    app.put('/api/updateUserToken', updateUserToken.updateUserToken);


}
