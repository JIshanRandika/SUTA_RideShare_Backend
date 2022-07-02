const Group = require('../models/group.model');

//add a group
// exports.addAGroup = (req, res) => {
//     const group = new Group({
//         groupID: req.body.groupID,
//
//     });
//     const findgroup = Group.findOne({ groupID: req.body.groupID });
//     if (findgroup){
//         return res
//             // .status(409)
//             .status(201)
//             .send({ message: "Given Group ID already Exist!" });
//     }else {
//         // Save a order in the MongoDB
//         group.save().then(data => {
//             return res.status(200).json(data);
//         }).catch(err => {
//             res.status(500).json({
//                 message: "Fail!",
//                 error: err.message
//             });
//         });
//     }
//
// };

exports.addAGroup = async (req, res) => {
    try {


        const user = await Group.findOne({ groupID: req.body.groupID });
        if (user)
            return res
                // .status(409)
                .status(201)
                .send({ message: "Given Group ID already Exist!" });


        await new Group({
            groupID: req.body.groupID,
        }).save();
        return res.status(201).send({ message: "Group created successfully"});
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};

