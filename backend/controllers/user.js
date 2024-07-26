const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.users;

const getAllUsers = async (req, res) => {
    try {
        const result = await User.findAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err });
        console.log(err);
    };
};

// const createUser = async (req, res) => {
//     try {
//         const result = await User.create(req.body);
//         res.json({ message: "Successfully created user", result });
//     } catch (err) {
//         res.status(500).json({ message: "Internal Server Error", error: err });
//         console.log(err);
//     };
// };

const updateUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const data = {
            username: username,
            email: email,
            password: await bcrypt.hash(password, saltRounds),
        };

        const user = await User.update(data, {
            where: {
                id: req.params.userId,
                // in the future we should access using the cookie and not browser data
            },
        });

        return res.status(201).json({ message: "Successfully updated user", user });
    } catch (err) {
        res.status(500).json({ message: "Failed to update user", error: err });
        console.log(err);
    };
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
    // createUser,
    updateUser,
    deleteUser,
}