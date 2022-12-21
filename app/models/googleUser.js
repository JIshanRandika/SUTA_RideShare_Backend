const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const googleUserSchema = mongoose.Schema({
    name: String,
    email: String,
    groupID: String,
    deviseToken: String,
});

googleUserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

module.exports = mongoose.model('googleUsers', googleUserSchema);
