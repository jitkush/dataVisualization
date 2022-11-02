const express = require("express");
const transferData = require("../controller/upload");
const router = express.Router();

router.post("/dataTransfer", transferData.uploadData);

module.exports = router;
