// protected route
const { Router } = require("express");
const { getAllUsers, deleteUser, updateUser } = require("../controllers/user.js");
const { checkAvail } = require("../middleware/userAuth");
const verifyToken = require("../middleware/verifyToken.js");

const router = Router();

// middleware
router.use(verifyToken);

// routes
router.get("/", getAllUsers);

// router.post("/", createUser);

// router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.put("/:id", checkAvail, updateUser);

module.exports = router;