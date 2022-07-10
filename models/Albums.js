const mongoose = require("mongoose");

const Albums = mongoose.model("Albums", {
  userId: Number,
  id: Number,
  title: String,
});

module.exports = Albums;
