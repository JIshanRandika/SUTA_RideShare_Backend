const router = require("express").Router();
const { User, validate } = require("../models/user");
const Group = require('../models/group.model');
const GoogleUser = require('../models/googleUser');

// const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        // const { error } = validate(req.body);
        // if (error)
        //     return res.status(201).send({ message: error.details[0].message });

        const group = await Group.findOne({ groupID: req.body.groupID });
        if (!group)
            return res
                // .status(409)
                .status(201)
                .send({ message: "Wrong Group ID" });


        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res
                // .status(409)
                .status(201)
                .send({ message: "User with given email already Exist!" });

        const googleUser = await GoogleUser.findOne({ email: req.body.email });
        if (googleUser)
            return res
                // .status(409)
                .status(201)
                .send({ message: "User with given email already Exist!" });




        // const salt = await bcrypt.genSalt(Number(process.env.SALT));
        // const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new GoogleUser({ ...req.body}).save();
        return res.status(201).send({ message: "User created successfully",name:req.body.name,email:req.body.email,groupID:req.body.groupID });

        // res.status(201).send({ message: "Password incorrect" });

    } catch (error) {
        // return res.status(201).send({ message: "Internal Server Error" });
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
