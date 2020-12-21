const express = require("express");
const router = express.Router();
const {getOneQuestion, getQuestions, postQuestion, putQuestion, deleteQuestion} = require("../../controllers/questions");

//router.get("/:id", getOneQuestion);

router.put("/:id", putQuestion);

router.delete("/:id", deleteQuestion);

router.get("/:id", getQuestions);

router.post("/", postQuestion);


module.exports = router;
