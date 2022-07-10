const Person = require("../../models/Person");

async function deletePersonById(req, res) {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });
    if (!person)
      return res
        .status(422)
        .json({ error: `This ID ${id} does not exist in the database` });

    await Person.deleteOne({ _id: id });
    res
      .status(200)
      .json({
        message: `${person.firstName} with the id ${person._id} deleted sucessfully from the database`,
      });
  } catch (errors) {
    console.log("Errors ", errors);
    res.status(500).json({ errors });
    throw new Error("Errors ", errors);
  }
}

module.exports = deletePersonById;
