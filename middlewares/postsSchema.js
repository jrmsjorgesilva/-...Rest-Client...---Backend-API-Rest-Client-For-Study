const yup = require("yup");

const postsSchema = yup.object({
  id: yup.number(),
  userId: yup.number(),
  title: yup.string().min(30).max(100).required(),
  body: yup.string().min(30).max(100).required(),
});

module.exports = postsSchema;
