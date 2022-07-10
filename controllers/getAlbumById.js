const Albums = require("../models/Albums");

async function getAlbumById(req, res) {
  try {
    // const { id } = req.params;
    const id = req.params.id;
    const data = await Albums.findOne({ _id: id });
    return res.status(201).json(data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `It was not possible to return the data from id ${id}`,
      });
    throw new Error("Error", error);
  }
}

module.exports = getAlbumById;
