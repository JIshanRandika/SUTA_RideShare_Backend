const router = require("express").Router();
const { User } = require("../models/user");
const GoogleUser = require('../models/googleUser');

const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
    try {
        // const { error } = validate(req.body);
        // if (error)
        //     // return res.status(400).send({ message: error.details[0].message });
        //     return res.status(201).send({ message: error.details[0].message });

        const googleUser = await GoogleUser.findOne({ email: req.body.email });
        if (!googleUser)
            // return res.status(401).send({ message: "Invalid Email or Password" });
            return res.status(201).send({ message: "Invalid Email" });

        // const validPassword = await bcrypt.compare(
        //     req.body.password,
        //     user.password
        // );
        // if (!validPassword)
        //     // return res.status(401).send({ message: "Invalid Email or Password" });
        //     return res.status(201).send({ message: "Invalid Password" });

        const token = googleUser.generateAuthToken();
        res.status(200).send({ data: token, message: "logged in successfully", name:googleUser.name, email:req.body.email,deviseToken:googleUser.deviseToken, groupID: googleUser.groupID });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error"});
    }
});

// const validate = (data) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required().label("Email"),
//         password: Joi.string().required().label("Password"),
//     });
//     return schema.validate(data);
// };

module.exports = router;
