const mongoose = require("mongoose");

//Generating Schema
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  linkId: {
    type: String,
  },
  newUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UrlModel = mongoose.model("URLModel", urlSchema);
module.exports.UrlModel = UrlModel;
