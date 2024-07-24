const { Router } = require("express");
const { signup, login } = require("../controllers/userAuth");
const middleware = require("../middleware/userAuth");

const router = Router();

// signup endpoint
// pass middleware to signup, check availability of username & email
router.post("/signup", middleware.checkAvail, signup);

// login endpoint
router.post("/login", login);

module.exports = router;