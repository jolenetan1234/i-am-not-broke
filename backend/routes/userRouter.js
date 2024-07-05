const { Router } = require("express");
const { getAllUsers, createUser, deleteUser, updateUser } = require("../controllers/user.js");
const router = Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/:id", updateUser)

router.delete("/:id", deleteUser);

module.exports = router;