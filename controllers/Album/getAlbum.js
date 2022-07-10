const Albums = require("../../models/Albums");

async function getAlbum(req, res) {
  try {
    const data = await Albums.find();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "It was not possible to return the data" });
    throw new Error("Error", error);
  }
}

module.exports = getAlbum;
