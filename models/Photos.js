const mongoose = require("mongoose");

const Photos = mongoose.model({
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
});

module.exports = Photos;
