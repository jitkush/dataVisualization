const DeviceData = require("../model/dataModel");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/data.json");

//controller for uploading data
exports.uploadData = async (req, res, next) => {
  //wrtiting large file data to file
  try {
    //file stream to write request data to data.json
    var writeStream = fs.createWriteStream(filePath, {
      flags: "w",
      encoding: "utf8",
    });
    writeStream.write(JSON.stringify(req.body));
  } catch (e) {
    console.log(e);
  }
  console.log("invoking add data");
  //calling function to upload data to db
  addData();
};

const addData = () => {
  console.log("upload middleware invoked");
  //creating file reader to read data from the data.json
  const createReader = fs.createReadStream(filePath);
  createReader.on("data", async (data) => {
    await DeviceData.insertMany(JSON.parse(data));
    let loadData = JSON.parse(data);
    console.log(loadData);
    //sending data to db in json formate
  });

  console.log("done");
};
