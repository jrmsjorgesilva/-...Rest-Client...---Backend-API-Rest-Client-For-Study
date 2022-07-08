const yup = require("yup");

const commentsSchema = yup.object({
  postId: yup.number(),
  id: yup.number(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  body: yup.string().min(30).max(2000).required(),
});

module.exports = commentsSchema;
