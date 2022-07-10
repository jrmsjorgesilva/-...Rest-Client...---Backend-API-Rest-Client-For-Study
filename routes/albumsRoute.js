const router = require("express").Router();
// models
const Albums = require("../models/Albums");
// controllers
const createAlbum = require("../controllers/Album/createAlbum");
const getAlbum = require("../controllers/Album/getAlbum");
const getAlbumById = require("../controllers/Album/getAlbumById");
const patchAlbumById = require('../controllers/Album/patchAlbumById');
const deleteAlbumById = require('../controllers/Album/deleteAlbumById');

router.post("/", createAlbum);

router.get("/", getAlbum);

router.get("/:id", getAlbumById);

router.patch("/:id", patchAlbumById);

router.delete("/:id", deleteAlbumById);

module.exports = router;
