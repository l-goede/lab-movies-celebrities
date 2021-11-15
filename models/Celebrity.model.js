const { Schema, model } = require("mongoose");
require("./Celebrity.model");

const mongoose = require("mongoose");

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const CelebrityModel = mongoose.model("celebrities", CelebritySchema);

module.exports = CelebrityModel;
