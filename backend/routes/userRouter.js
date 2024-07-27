// protected route
const { Router } = require("express");
const { getAllUsers, deleteUser, updateUser } = require("../controllers/user.js");
const { checkAvail } = require("../middleware/userAuth");
const verifyToken = require("../middleware/verifyToken.js");

const router = Router();

router.get("/", getAllUsers);

// middleware
router.use(verifyToken);

router.delete("/:id", deleteUser);

router.put("/:id", checkAvail, updateUser);

module.exports = router;