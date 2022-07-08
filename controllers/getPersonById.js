const Person = require("../models/Person");

async function getPersonById(req, res) {
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
}

module.exports = getPersonById;
