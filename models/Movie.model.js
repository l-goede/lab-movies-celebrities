const { Schema, model } = require("mongoose");
require("./Celebrity.model");

const mongoose = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "CelebrityModel",
      },
    },
  ],
});

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;
