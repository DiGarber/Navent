const express = require("express");
const router = express.Router();
const {getSkills, getSkill, postSkill, putSkill, deleteSkill, getSkillsByUsers} = require("../../controllers/skills");


router.get("/:name", getSkill);

router.put("/:id", putSkill);

router.delete("/:id", deleteSkill);

router.get("/", getSkills);

router.post("/", postSkill);

module.exports = router;