//assuming we are getting device name in an array

const DeviceData = require("../model/dataModel");

//controller function to get data of a specific device
exports.getPMdevice = async (req, res, next) => {
  let devices = req.body;
  let getpm1data;
  let getpm25data;
  let getpm10data;

  await devices.map((items) => {
    let deviceName = items.toLocaleLowerCase();
    try {
      getpm1data = DeviceData.where("device")
        .equals(deviceName)
        .sort({ t: -1 })
        .select({ _id: 0, device: 1, t: 1, pm1: 1 })
        .exec();
    } catch (e) {
      console.log(e);
    }
  });

  await devices.map((items) => {
    try {
      getpm25data = DeviceData.where("device")
        .equals(items)
        .sort({ t: -1 })
        .select({ _id: 0, device: 1, t: 1, pm25: 1 })
        .exec();
    } catch (e) {
      console.log(e);
    }
  });

  await devices.map((items) => {
    try {
      getpm10data = DeviceData.where("device")
        .equals(items)
        .sort({ t: -1 })
        .select({ _id: 0, device: 1, t: 1, pm10: 1 })
        .exec();
    } catch (e) {
      console.log(e);
    }
  });

  console.log(getData);
  res.send([getpm1data, getpm25data, getpm10data]);
};
