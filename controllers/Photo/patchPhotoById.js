const Photos = require("../../models/Photos");

async function patchPhotoById(req, res) {
  try {
    const id = req.params.id;
    const { title, url, thumbnailUrl } = req.body;
    const photoToUpdate = {
      title,
      url,
      thumbnailUrl,
    };
    await Photos.updateOne({ _id: id }, photoToUpdate);
    return res.status(201).json(photoToUpdate);
  } catch (error) {
    return res.status(422).json({ error });
  }
}

module.exports = patchPhotoById;
