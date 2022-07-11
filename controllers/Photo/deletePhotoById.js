const Photos = require("../../models/Photos");

async function deletePhotoById(req, res) {
  try {
    const id = req.params.id;
    await Photos.deleteOne({ _id: id });
    return res
      .status(201)
      .json({ message: `The id ${id} was successfully removed` });
  } catch (error) {
    return res.status(422).json({ error });
  }
}

module.exports = deletePhotoById;
