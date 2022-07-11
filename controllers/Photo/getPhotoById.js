const Photos = require("../../models/Photos");

async function getPhotoById(req, res) {
  try {
    const id = req.params.id;
    const photosReceived = await Photos.findOne({ _id: id });
    return res.status(201).json(photosReceived);
  } catch (error) {
    return res.status(422).json({ error });
  }
}

module.exports = getPhotoById;
