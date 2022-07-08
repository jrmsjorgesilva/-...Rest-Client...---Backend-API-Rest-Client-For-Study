const router = require("express").Router();
const Person = require("../models/Person");
const createPerson = require('../controllers/createPerson');
const getPerson = require('../controllers/getPerson');
const getPersonById = require('../controllers/getPersonById');
const putPersonById = require('../controllers/putPersonById');
const patchPersonById = require('../controllers/patchPersonById');
const deletePersonById = require('../controllers/deletePersonById');

// endpoints - POST routes
router.post("/", createPerson);

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
