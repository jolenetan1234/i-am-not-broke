const { Router } = require("express");
const { signupUser, loginUser } = require("../controllers/userAuth");
const { checkAvail } = require("../middleware/userAuth");

const router = Router();

router.post("/signup", checkAvail, signupUser);

router.post("/login", loginUser);

module.exports = router;