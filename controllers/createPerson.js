const Person = require("../models/Person");

async function createPerson(req, res) {
  //req.body
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

  //   validations
  //   if (!firstName)
  //     return res
  //       .status(422)
  //       .json({ error: "You need to provide the firstname!" });
  //   if (!lastName)
  //     return res.status(422).json({ error: "You need to provide the lastname!" });
  //   if (!age)
  //     return res.status(422).json({ error: "You need to provide the age!" });
  //   if (!occupation)
  //     return res
  //       .status(422)
  //       .json({ error: "You need to provide the occupation!" });
  //   if (!approved)
  //     return res.status(422).json({ error: "You need to provide the status!" });

  try {
    await Person.create(person);
    res.status(201).json({ message: "person inserted sucessfully" });
  } catch (error) {
    // todo: criar arquivo de log da requisição
    res.status(500).json({ error: error });
  }
}

module.exports = createPerson;
