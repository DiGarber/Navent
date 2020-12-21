const express = require("express");
const router = express.Router();
const {getAnswer, getAnswers, postAnswer, putAnswer, deleteAnswer} = require("../../controllers/answers");

router.get("/:id", getAnswer);

router.put("/:id", putAnswer);

router.delete("/:id", deleteAnswer);

router.get("/answers/:id", getAnswers);

router.post("/", postAnswer);


module.exports = router;
