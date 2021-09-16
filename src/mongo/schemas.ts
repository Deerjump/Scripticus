const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const reqNum = {
  type: Number,
  required: true
}

const Subscriber = mongoose.model(
  "subscriber",
  new mongoose.Schema({
    _id: reqString,
    hours: reqNum,
  })
);

const Setting = mongoose.model(
  "setting",
  new mongoose.Schema({
    _id: reqString,
    prefix: reqString,
  })
);

module.exports = { Setting, Subscriber };
