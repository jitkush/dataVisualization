const express = require("express");
const deviceData = require("./route/getDeviceDataRoute");
const uploadFile = require("./route/uploadData");
const pmreading = require("./route/pmreading");
require("dotenv").config();
const CORS = require("cors");

const app = express();

//Bypassing CORS policy
app.use(CORS());

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//Route to get sepcific device data
app.use("/getDeviceData", deviceData);

//route to upload file
app.use("/uploadFile", uploadFile);

//route to get pm1,pm2,pm3 reading for specific deives
app.use("/getpmreading", pmreading);

app.get("/", (request, response) => {
  response
    .status(200)
    .json({ message: "Hello from the server side", app: "praan-project" });
});
module.exports = app;
