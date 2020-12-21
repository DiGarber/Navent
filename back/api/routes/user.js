const express = require("express");
const router = express.Router();
const {getUserToken, getUsers, getUser, postUser, postSkill, getUserSkills } = require("../../controllers/user");

router.get("/:name", getUser);

router.post("/:id/skill", postSkill);

router.post("/token/usertoken", getUserToken)

router.get("/:id/skill", getUserSkills)

router.get("/", getUsers);

router.post("/", postUser);


module.exports = router;