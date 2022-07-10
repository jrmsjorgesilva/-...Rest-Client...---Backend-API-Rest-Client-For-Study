const Person = require("../../models/Person");

async function getPerson(req, res) {
  try {
    const person = await Person.find();
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
    throw new Error("Error: ", error);
  }
}

module.exports = getPerson;
