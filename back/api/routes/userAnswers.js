const express = require("express");
const router = express.Router();
const {postUserAnswers} = require("../../controllers/userAnswers");


router.post("/postUserAnswers", postUserAnswers);


module.exports = router;