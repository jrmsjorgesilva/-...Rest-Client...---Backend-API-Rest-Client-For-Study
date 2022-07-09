const mongoose = require("mongoose");

const Albums = mongoose.model({
  userId: number,
  id: number,
  title: string,
});

module.exports = Albums;
