const router = require("express").Router();
// controllers
const Albums = require("../models/Albums");
const createAlbum = require("../controllers/createAlbum");
const getAlbum = require("../controllers/getAlbum");
const getAlbumById = require("../controllers/getAlbumById");
const patchAlbumById = require('../controllers/patchAlbumById');
const deleteAlbumById = require('../controllers/deleteAlbumById');

router.post("/", createAlbum);

router.get("/", getAlbum);

router.get("/:id", getAlbumById);

router.patch("/:id", patchAlbumById);

router.delete("/:id", deleteAlbumById);

module.exports = router;
