const Person = require("../models/Person");

async function putPersonById(req, res) {
  const id = req.params.id;

  const {
    firstName,
    lastName,
    age,
    gender,
    occupation,
    company,
    salary,
    approved,
    minority,
  } = req.body;

  const person = {
    firstName,
    lastName,
    age,
    gender,
    occupation,
    company,
    salary,
    approved,
    minority,
  };
  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);
    if (!updatedPerson.matchedCount)
      return res.status(422).json("Update has not been completed");
    res.status(200).json(updatedPerson);
  } catch (errors) {
    console.log("Errors ", errors);
    res.status(500).json({ errors });
    throw new Error("Error ", errors);
  }
}

module.exports = putPersonById;
