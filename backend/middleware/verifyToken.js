const verifyToken = (req, res, next) => {
    console.log("REQ COOKIES", req.cookies);
    console.log("REQ BODY", req.body);

    const token = req.body.token;

    if (token) {
        console.log(token);
        next();
    } else {
        res.status(401).json({ error: "401 Unauthorised" });
    };
};

module.exports = verifyToken;