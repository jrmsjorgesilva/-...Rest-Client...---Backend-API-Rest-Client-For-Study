const router = require("express").Router();
// controllers
const createPerson = require("../controllers/Person/createPerson");
const getPerson = require("../controllers/Person/getPerson");
const getPersonById = require("../controllers/Person/getPersonById");
const putPersonById = require("../controllers/Person/putPersonById");
const patchPersonById = require("../controllers/Person/patchPersonById");
const deletePersonById = require("../controllers/Person/deletePersonById");
// validation
const validation = require("../middlewares/validations");
const personSchema = require("../middlewares/personSchema");

// endpoints - POST routes
router.post("/", validation(personSchema), createPerson);

// endpoints - GET routes
router.get("/", getPerson);

router.get("/:id", getPersonById);

// endpoints - PUT routes

router.put("/:id", putPersonById);

// endpoints - PATCH routes

router.patch("/:id", patchPersonById);

// endpoints - DELETE routes
router.delete("/:id", deletePersonById);

module.exports = router;
