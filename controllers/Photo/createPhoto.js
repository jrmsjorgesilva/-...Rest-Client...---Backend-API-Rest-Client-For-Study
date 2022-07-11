const Photos = require("../../models/Photos");

async function createPhoto(req, res) {
  const { title, url, thumbnailUrl } = req.body;
  const photoToPost = {
    title,
    url,
    thumbnailUrl,
  };
  try {
    await Photos.create(photoToPost);
    return res.status(201).json(photoToPost);
  } catch (error) {
    return res.status(422).json({ error });
  }
}

module.exports = createPhoto;
