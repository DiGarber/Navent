const express = require("express");
const router = express.Router();
const {getUser, newUser} = require("../../controllers/auth");


router.post("/register", newUser);

router.get("/login", getUser);


module.exports = router;