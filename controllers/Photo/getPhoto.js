const Photos = require("../../models/Photos");

async function getPhoto(req, res) {
  try {
    const photosReceived = await Photos.find();
    return res.status(201).json(photosReceived);
  } catch (error) {
    return res.status(422).json({ error });
  }
}

module.exports = getPhoto;
