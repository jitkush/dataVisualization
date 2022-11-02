const express = require("express");
const getDeviceData = require("../controller/getDeviceReading");
const router = express.Router();

//route to get data of a specific devices
router.get("/:name", getDeviceData.getDeviceReading);

module.exports = router;
