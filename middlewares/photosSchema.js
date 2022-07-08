const yup = require("yup");

const photosSchema = yup.object({
  albumId: yup.number(),
  id: yup.number(),
  title: yup.string().min(10).max(100).required(),
  url: yup.string(),
  thumbnailUrl: yup.string().url().required(),
});

module.exports = photosSchema;
