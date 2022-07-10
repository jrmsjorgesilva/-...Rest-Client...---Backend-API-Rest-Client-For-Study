const Albums = require("../models/Albums");

async function patchAlbumById(req, res) {
  try {
    const idToUpdate = req.params.id;

    const { userId, id, title } = req.body;

    const album = {
      userId,
      id,
      title,
    };

    const updatedData = await Albums.updateOne({ _id: idToUpdate }, album);

    return res.status(201).json(updatedData);
  } catch (error) {
    res
      .status(500)
      .json({ message: `The id could not be updated by an error` });
    throw new Error("Error", error);
    return
  }
}

module.exports = patchAlbumById;
