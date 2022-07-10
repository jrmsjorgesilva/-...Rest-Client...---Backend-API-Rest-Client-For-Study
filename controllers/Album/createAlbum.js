const Albums = require("../../models/Albums");

async function createAlbum(req, res) {
  const { userId, id, title } = req.body;

  const albums = {
    userId,
    id,
    title,
  };

  try {
    await Albums.create(albums);
    return res.status(201).json({ message: "New album created succesfully" });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "This is not a valid data to insert" });
    throw new Error("Error", error);
  }
}

module.exports = createAlbum;
