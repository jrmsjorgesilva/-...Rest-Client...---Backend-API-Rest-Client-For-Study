const yup = require("yup");

const photosSchema = yup.object({
  title: yup.string().min(10).max(100).required(),
  url: yup.string(),
  thumbnailUrl: yup.string().url().required(),
});

module.exports = photosSchema;
