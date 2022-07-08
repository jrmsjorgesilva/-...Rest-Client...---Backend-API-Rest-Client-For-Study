const yup = require("yup");

const albumSchema = yup.object({
  userId: yup.number(),
  id: yup.number(),
  title: yup.string().min(6).max(40).required(),
});

module.exports = albumSchema;
