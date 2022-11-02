const express = require("express");
const getPMreading = require("../controller/getPMreading");
const router = express.Router();

//route to get data of a specific devices
router.post("/getreadingforDevice", getPMreading.getPMdevice);

module.exports = router;
