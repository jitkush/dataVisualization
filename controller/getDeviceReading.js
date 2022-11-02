const DeviceData = require("../model/dataModel");

//controller function to get data of a specific device
exports.getDeviceReading = async (req, res, next) => {
  console.log(req.params.name);
  let getData;
  try {
    getData = await DeviceData.where("device")
      .equals(req.params.name)
      .sort({ t: -1 })
      .select({ _id: 0 })
      .exec();
  } catch (e) {
    console.log(e);
  }
  console.log(getData);
  res.send(getData);
};
