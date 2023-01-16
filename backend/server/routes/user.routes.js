const express = require('express');
const userController = require("../controllers/user.controler");

const router = express.Router();

//GET ALL USERS
router.get("/", userController.allUsers)

//DELETE USER
router.delete("/delete/:id", userController.deleteUser)

//UPDATE USER
router.put("/updata/:id", userController.updateUser)

module.exports = router;