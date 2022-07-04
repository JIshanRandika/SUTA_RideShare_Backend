const user = require("../controllers/user.controller");

module.exports = function(app) {

    app.post('/api/userToken', user.userToken);
    app.put('/api/updateUserGroup', user.updateUserGroup);


}
