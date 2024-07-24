const { Router } = require("express");
const { getAllUsers, createUser, deleteUser, updateUser } = require("../controllers/user.js");
const { signup, login, update } = require("../controllers/userAuth");
const { checkAvail } = require("../middleware/userAuth");
const router = Router();

router.get("/", getAllUsers);

// router.post("/", createUser);

// router.put("/:id", updateUser)

router.delete("/:id", deleteUser);

router.post("/signup", checkAvail, signup);

router.post("/login", login);

router.put("/:id", checkAvail, update);

module.exports = router;