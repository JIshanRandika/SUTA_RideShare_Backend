const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	groupID: { type: String, required: true },
	deviseToken: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		// firstName: Joi.string().required().label("First Name"),
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		groupID: String,
		deviseToken: String

	});
	return schema.validate(data);
};

module.exports = { User, validate };
// module.exports = mongoose.model('user', userSchema);
// module.exports = mongoose.model('user', validate(););
