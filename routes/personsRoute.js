const router = require("express").Router();
const Person = require("../models/Person");

// endpoints - POST routes
router.post("/", async (req, res) => {
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
  if (!firstName)
    return res
      .status(422)
      .json({ error: "You need to provide the firstname!" });
  if (!lastName)
    return res.status(422).json({ error: "You need to provide the lastname!" });
  if (!age)
    return res.status(422).json({ error: "You need to provide the age!" });
  if (!occupation)
    return res
      .status(422)
      .json({ error: "You need to provide the occupation!" });
  if (!approved)
    return res.status(422).json({ error: "You need to provide the status!" });

  try {
    await Person.create(person);
    res.status(201).json({ message: "person inserted sucessfully" });
  } catch (error) {
    // todo: criar arquivo de log da requisição
    res.status(500).json({ error: error });
  }
});

// endpoints - GET routes
router.get("/", async (req, res) => {
  try {
    const person = await Person.find();
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
    throw new Error("Error: ", error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const personById = await Person.findOne({ _id: id });
    // validation
    if (!personById)
      return res
        .status(422)
        .json({ error: "This id is not on our registries" });
    res.status(200).json(personById);
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ error });
    throw new Error("Error ", error);
  }
});

// endpoints - PUT routes

router.put("/:id", async (req, res) => {
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
});

// endpoints - PATCH routes

router.patch("/:id", async (req, res) => {
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
    console.log("Error: ", errors);
    res.status(500).json({ errors });
    throw new Error("It was not possible to update the data");
  }
});

// endpoints - DELETE routes
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });
    if (!person)
      return res
        .status(422)
        .json({ error: "This ID does not exist in the database" });

    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: `Person deleted sucessfully` });
  } catch (errors) {
    console.log("Errors ", errors);
    res.status(500).json({ errors });
    throw new Error("Errors ", errors);
  }
});

module.exports = router;
