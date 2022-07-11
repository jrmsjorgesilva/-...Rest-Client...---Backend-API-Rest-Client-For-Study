const router = require("express").Router();
// models
const Photos = require("../models/Photos");
// controllers
const createPhoto = require("../controllers/Photo/createPhoto");
const getPhoto = require("../controllers/Photo/getPhoto");
const getPhotoById = require("../controllers/Photo/getPhotoById");
const patchPhotoById = require("../controllers/Photo/patchPhotoById");
const deletePhotoById = require("../controllers/Photo/deletePhotoById");

router.post("/", createPhoto);

router.get("/", getPhoto);

router.get("/:id", getPhotoById);

router.patch("/:id", patchPhotoById);

router.delete("/:id", deletePhotoById);

module.exports = router;
