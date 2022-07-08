const yup = require("yup");

const personSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  gender: yup.string(),
  occupation: yup.string(),
  company: yup.string(),
  salary: yup.number().positive(),
  approved: yup.boolean().required(),
  minority: yup.boolean(),
  website: yup.string().url(),
});

module.exports = personSchema;
