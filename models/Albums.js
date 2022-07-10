const mongoose = require("mongoose");

const Albums = mongoose.model("Album", {
  userId: Number,
  id: Number,
  title: String,
});

module.exports = Albums;
