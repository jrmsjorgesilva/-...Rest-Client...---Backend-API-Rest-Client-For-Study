const router = require("express").Router();
// models
const Person = require("../models/Person");
// controllers
const createPerson = require("../controllers/createPerson");
const getPerson = require("../controllers/getPerson");
const getPersonById = require("../controllers/getPersonById");
const putPersonById = require("../controllers/putPersonById");
const patchPersonById = require("../controllers/patchPersonById");
const deletePersonById = require("../controllers/deletePersonById");
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
