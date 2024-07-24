const db = require("../models");
const User = db.users;

// Function to check if username/email already exists in database
const checkAvail = async (req, res, next) => {
    try {
        // search database to see if user exists
        const usernameCheck = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
    
        if (usernameCheck) {
            return res.status(409).json({ message: "Username already taken" });
        };
    
        // search database to see if email exists
        const emailCheck = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        
        if (emailCheck) {
            return res.status(409).json({ message: "Username already taken" });
        };
    
        next();    
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to check username/email availability", error: err });
    };
};

module.exports = {
    checkAvail,
};