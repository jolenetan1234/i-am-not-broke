const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // console.log("REQ COOKIES", req.cookies);
    // console.log("REQ BODY", req.body);
    // console.log("middleware/verifyToken.js: ", process.env.JWT_SECRET)
    // const token = req.header("token");

    // const token = req.body.token;

    // console.log("middleware/verifyToken.js REQ COOKIES: ", req.cookies)
    console.log("REQ HEADERS: ", req.headers);
    const token = req.headers.token;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            next();
        } catch (err) {
            res.status(401).json({ error: "401 Unauthorised: Invalid token"});
        }
        // next();
    } else {
        res.status(401).json({ error: "401 Unauthorised" });
    };
};

module.exports = verifyToken;