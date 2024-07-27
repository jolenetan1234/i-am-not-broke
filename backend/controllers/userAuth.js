const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;

const saltRounds = 10;

const signupUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const data = {
            username,
            email,
            password: await bcrypt.hash(password, saltRounds),
        };

        const user = await User.create(data);

        // if above promise is resolved, then we generate a token
        // token is a secure way to represent user info, that can be verified using a secret key
        if (user) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

        // set cookie with token generated
        // cookie is stored in browser (here we specify it to be one day) --> server can use to identify user in subsequent requests w/o needing them to login again
        res.cookie("jwt", token, { 
            maxAge: 1 * 24 * 60 * 60,
            httpOnly: true /* so that cookie is inaccessible to client-side JS --> protect against XSS attacks */ });
        console.log("user", user);
        console.log("token", token);

        // send users details
        return res.status(201).json({ message: "Successfully created user", user });
        } else {
            return res.status(409).send("Failed to create user; details may not be correct");
        };
    } catch (err) {
        res.status(500).json({ message: "Failed to create user", error: err });
        console.log(err);
    };
};

// login authentication
const loginUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // find user by username/email
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { username: username },
                ],
            },
        });

        // if user username/email is found, compare password with bcrypt
        if (user) {
            const isSame = await bcrypt.compare(password, user.password);

            if (isSame) {
                // if password matches, generate a token with payload `{ id: user.id }`
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { 
                    expiresIn: 1 * 24 * 60 * 60 * 1000, 
                });

                // generate a cookie using `token` as payload
                res.cookie("jwt", token, {
                    maxAge: 1 * 24 * 60 * 60,
                    httpOnly: true, /* so that cookie is inaccessible to client-side JS --> protect against XSS attacks */
                });
                console.log("USER:", user);
                console.log("TOKEN:", token);

                // send user data to frontend
                return res.status(201).json({ message: "Successfully logged in", user} );
            } else {
                return res.status(401).json({ message: "Authentication failed: wrong password" });
            };
        } else {
            return res.status(401).json({ messsage: "Authentication failed: username/email doesn't exist" });
        };
    } catch (err) {
        res.status(500).json({ message: "Failed to login user", error: err });
        console.log(err);
    };
};

// const updateUser = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const data = {
//             username: username,
//             email: email,
//             password: await bcrypt.hash(password, saltRounds),
//         };

//         const user = await User.update(data, {
//             where: {
//                 id: req.params.userId,
//                 // in the future we should access using the cookie and not browser data
//             },
//         });

//         return res.status(201).json({ message: "Successfully updated user", user });
//     } catch (err) {
//         res.status(500).json({ message: "Failed to update user", error: err });
//         console.log(err);
//     };
// };

module.exports = {
    signupUser,
    loginUser,
    // updateUser,
};