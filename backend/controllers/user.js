const User = require("../models/user.js");

const getAllUsers = async (req, res) => {
    try {
        const result = await User.findAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err });
        console.log(err);
    };
};

const createUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.json({ message: "Successfully created user", result });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err });
        console.log(err);
    };
};

const updateUser = async (req, res) => {
    res.send("NOT IMPLEMENTED: updateUser");
};

const deleteUser = async (req, res) => {
    try {
        const result = await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: `Successfully deleted user id ${req.params.id}`, result });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err });
        console.log(err);
    };
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
}