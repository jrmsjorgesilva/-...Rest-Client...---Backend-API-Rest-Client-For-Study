const Albums = require("../../models/Albums");

async function deleteAlbumById(req, res) {
  try {
    const id = req.params.id;
    const deletedData = await Albums.deleteOne({ _id: id });
    return res.status(201).json(deletedData);
  } catch (error) {
    res.status(500).json({ message: `The id ${id} was not found` });
    throw new Error("Error", error);
  }
}

module.exports = deleteAlbumById;
