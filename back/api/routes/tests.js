const express = require("express");
const router = express.Router();
const {
  getTests,
  postTest,
  putTest,
  getTestsDate,
  getTest,
} = require("../../controllers/tests");

router.put("/:id", putTest);

router.get("/", getTests);

router.get("/singletest/:userId/:skillId", getTest);

router.get("/getTestDate/:userName/:skillId", getTestsDate);

router.post("/", postTest);

module.exports = router;
