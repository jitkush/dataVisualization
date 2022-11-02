const mongoose = require("mongoose");

//datamodel to upload data
const DeviceDataSchema = new mongoose.Schema({
  device: {
    type: String,
    required: [true, "name cannot be empty!"],
    lowercase: true,
  },

  t: {
    type: String,
    required: true,
  },

  w: Number,

  h: String,

  p1: Number,

  p25: Number,

  p10: Number,
});

const DeviceData = mongoose.model("DeviceData", DeviceDataSchema);

module.exports = DeviceData;
