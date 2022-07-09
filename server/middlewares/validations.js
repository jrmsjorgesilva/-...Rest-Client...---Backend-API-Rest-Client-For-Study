const personSchema = require("../middlewares/personSchema");

const validations = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    // res.status(201).json({ message: "validation OK" });
    next();
    return next();
  } catch (errors) {
    console.log("Errors ", errors);
    return res.status(422).json({ errors: errors });
  }
};

module.exports = validations;
