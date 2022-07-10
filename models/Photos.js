const mongoose = require("mongoose");

const Photos = mongoose.model("Photos", {
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String,
});

module.exports = Photos;
