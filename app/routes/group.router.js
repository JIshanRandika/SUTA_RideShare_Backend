const groups = require("../controllers/group.controller");

module.exports = function(app) {

    app.post('/api/addAGroup', groups.addAGroup);


}

